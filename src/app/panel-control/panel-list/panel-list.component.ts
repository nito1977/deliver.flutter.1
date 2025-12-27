import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanelService } from '../../services/panel.service';
import { BackendService } from '../../services/backend.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
    selector: 'app-panel-list',
    templateUrl: './panel-list.component.html',
    styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {
    type: string;
    items: any[] = [];
    allItems: any[] = []; // Store full list for filtering
    searchText: string = '';
    sortColumn: string = '';
    sortDirection: 'asc' | 'desc' = 'asc';
    loading = false;
    currentUser: any;

    // Pagination
    p: number = 1;
    itemsPerPage = 10;

    // Filters
    filterParams: any = {
        anio: ''
    };

    constructor(
        private route: ActivatedRoute,
        private panelService: PanelService,
        private backendService: BackendService
    ) { }

    ngOnInit() {
        this.currentUser = this.backendService.currentUserValue;
        // Observe route params to reload data when switching between lists
        this.route.params.subscribe(params => {
            this.type = params['type'] || 'jugadores'; // Default
            const subtype = params['subtype'];
            this.loadData(subtype);
        });
    }

    applyFilters() {
        this.loadData(this.route.snapshot.params['subtype']);
    }

    removeFilter(key: string) {
        this.filterParams[key] = '';
        this.applyFilters();
    }

    clearAllFilters() {
        Object.keys(this.filterParams).forEach(key => this.filterParams[key] = '');
        this.applyFilters();
    }

    get hasActiveFilters(): boolean {
        return Object.values(this.filterParams).some(val => val !== '');
    }

    getActiveFilterKeys(): string[] {
        return Object.keys(this.filterParams).filter(key => this.filterParams[key] !== '');
    }

    getFilterLabel(key: string): string {
        const labels: any = {
            anio: 'Año Nac.'
        };
        return `${labels[key] || key}: ${this.filterParams[key]}`;
    }

    loadData(subtype?: string) {
        this.loading = true;
        let requestType = this.type;
        let filters: any = { ...this.filterParams };

        // Structure: /panel/jugadores/habilitados -> type='jugadores', subtype='habilitados'
        if (subtype) {
            filters.view = subtype;
            if (subtype === 'habilitados') {
                requestType = 'habilitados';
            }
        }

        // Security: Restrict by Club if user role is "Club" (ID 4)
        const user = this.backendService.currentUserValue;
        if (user && user.group_id == 4 && user.company) {
            filters.clubId = user.company;
        }

        this.panelService.getItems(requestType, filters).subscribe(data => {
            this.allItems = data;
            this.filterData();
            this.loading = false;
        });
    }

    filterData() {
        if (!this.searchText) {
            this.items = [...this.allItems];
        } else {
            const lowerterm = this.searchText.toLowerCase();
            this.items = this.allItems.filter(item => {
                return Object.values(item).some(val =>
                    val && val.toString().toLowerCase().includes(lowerterm)
                );
            });
        }

        // Apply sorting
        if (this.sortColumn) {
            this.items.sort((a, b) => {
                const res = this.compare(a[this.sortColumn], b[this.sortColumn]);
                return this.sortDirection === 'asc' ? res : -res;
            });
        }
        this.p = 1; // Reset to first page
    }

    sortData(column: string) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }
        this.filterData();
    }

    compare(v1: string | number, v2: string | number) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    }

    onToggleMark(item: any, mark: boolean) {
        if (!this.currentUser) return;

        const id = item.idnumerocarnet;
        const user = this.currentUser.username || 'System';

        this.loading = true;
        this.panelService.markPlayer(id, mark, user).subscribe({
            next: (res) => {
                if (res.status === 'success') {
                    // Update item locally or reload
                    // To be safe and show updated "Marca"/stats, we reload
                    this.loadData(this.route.snapshot.params['subtype']);
                } else {
                    alert('Error: ' + res.message);
                    this.loading = false;
                }
            },
            error: (err) => {
                console.error(err);
                alert('Error al procesar la solicitud');
                this.loading = false;
            }
        });
    }

    exportToCSV() {
        if (this.items.length === 0) return;

        const header = ['Carnet', 'DNI', 'Licencia', 'Apellido', 'Nombre', 'Clasificado', 'Club', 'Sexo', 'Telefono', 'Marca', 'Disciplina', 'Actividad'];
        const csvRows = [header.join(';')];

        this.items.forEach(item => {
            const row = [
                item.idnumerocarnet,
                item.Documento || '',
                item.licencia || '',
                item.Apellido || '',
                item.Nombre || '',
                item.clasificado || '',
                item.club || '',
                item.Sexo || '',
                item.Telefono || '',
                item.Marca || '',
                item.Disciplina || '',
                item.Actividad || ''
            ];
            const escapedRow = row.map(v => `"${String(v).replace(/"/g, '""')}"`);
            csvRows.push(escapedRow.join(';'));
        });

        const csvString = '\uFEFF' + csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `Listado_${this.type}_${new Date().toLocaleDateString()}.csv`);
        link.click();
    }

    exportToPDF() {
        if (this.items.length === 0) return;

        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const clubName = this.items[0]?.club || 'Todas las Instituciones';
        const dateStr = new Date().toLocaleString();
        const headerTitle = `Federación Sanjuanina de Patín - ${clubName} - ${dateStr}`;

        const head = [['dni', 'lic', 'Jugador', 'F. Nac', 'Clasif', 'Club', 'Sexo', 'teléfono', 'Marca', 'Disc.', 'Act.', 'P.']];
        const body = this.items.map(item => [
            item.Documento || '',
            item.licencia || '',
            `${item.Apellido}, ${item.Nombre}`,
            item.Fecnac || '',
            item.clasificado || '',
            item.club || '',
            item.Sexo || '',
            item.Telefono || '',
            item.Marca || '',
            item.Disciplina ? item.Disciplina.substring(0, 1) : '',
            item.Actividad || '',
            'P'
        ]);

        autoTable(doc, {
            head: head,
            body: body,
            startY: 20,
            theme: 'striped',
            headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0], fontStyle: 'bold', lineWidth: 0.1, lineColor: [200, 200, 200] },
            styles: { fontSize: 8, cellPadding: 2 },
            columnStyles: {
                0: { cellWidth: 20 },
                1: { cellWidth: 12 },
                2: { cellWidth: 'auto' },
                3: { cellWidth: 20 },
                4: { cellWidth: 12 },
                11: { cellWidth: 8 }
            },
            didDrawPage: (data) => {
                doc.setFontSize(11);
                doc.text(headerTitle, data.settings.margin.left, 15);
            }
        });

        doc.save(`${clubName}_${new Date().getTime()}.pdf`);
    }

    printList() {
        window.print();
    }
}
