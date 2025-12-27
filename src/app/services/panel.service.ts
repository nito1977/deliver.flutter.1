import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GLOBAL } from './global';

export interface MenuItem {
    id: number;
    label: string;
    icon?: string;
    route?: string;
    children?: MenuItem[];
    isOpen?: boolean; // For UI state
}

@Injectable({
    providedIn: 'root'
})
export class PanelService {
    // Mock API URL - eventually this would be in backend.service or similar
    private apiUrl = GLOBAL.sitio ? GLOBAL.sitio + '/api/index.php?service=panel' : 'http://localhost/api/index.php?service=panel';

    constructor(private http: HttpClient) { }

    getMenuItems(groupId?: number): Observable<MenuItem[]> {
        // Mock data matching the user's image structure
        const menu: MenuItem[] = [
            {
                id: 1, label: 'Jugadores', icon: 'fa fa-users', children: [
                    { id: 11, label: 'Nuevo', route: '/panel/jugadores/nuevo', icon: 'fa fa-plus' },
                    { id: 12, label: 'Habilitados', route: '/panel/jugadores/habilitados', icon: 'fa fa-check' },
                    { id: 13, label: 'Bajas', route: '/panel/jugadores/bajas', icon: 'fa fa-ban' },
                    { id: 14, label: 'Todos', route: '/panel/jugadores/todos', icon: 'fa fa-list' },
                    { id: 15, label: 'Reportes', route: '/panel/jugadores/reportes', icon: 'fa fa-file-text' }
                ]
            },
            {
                id: 2, label: 'Clubes', icon: 'fa fa-shield', children: [
                    { id: 21, label: 'Listado', route: '/panel/clubes', icon: 'fa fa-list' }
                ]
            },
            {
                id: 3, label: 'Torneos', icon: 'fa fa-trophy', route: '/panel/torneos'
            },
            {
                id: 5, label: 'Administrador', icon: 'fa fa-cogs', children: [
                    { id: 51, label: 'Usuarios', route: '/panel/usuarios', icon: 'fa fa-users' },
                    { id: 52, label: 'Nuevas bajas', route: '/panel/jugadores/nuevas-bajas', icon: 'fa fa-ban' },
                    { id: 53, label: 'Nuevas altas', route: '/panel/jugadores/nuevas-altas', icon: 'fa fa-user-plus' }
                ]
            }
        ];

        // If user is a Club (group_id == 4), remove "Nuevo" from Jugadores
        if (groupId === 4) {
            const jugadoresMenu = menu.find(item => item.label === 'Jugadores');
            if (jugadoresMenu && jugadoresMenu.children) {
                jugadoresMenu.children = jugadoresMenu.children.filter(sub => sub.label !== 'Nuevo');
            }
        }

        return of(menu);
    }

    // Generic method to get items for the lists
    getItems(type: string, filters: any = {}): Observable<any[]> {
        // Construct query params from filters
        // Default to list_habilitados as it's the main player data endpoint
        let action = 'list_habilitados';

        // If type is explicitly 'clubes' or other future types, we could branch here.
        // For now, all players (habilitados, todos, bajas) will use the real query logic.

        let params = `&action=${action}`;
        if (filters.view) params += `&view=${filters.view}`;
        if (filters.anio) params += `&anioNac=${filters.anio}`; // Map Year filter to Birth Year (F. Nac)
        if (filters.clubId) params += `&clubId=${filters.clubId}`;
        if (filters.sexo) params += `&sexo=${filters.sexo}`;
        if (filters.clasif) params += `&clasif=${filters.clasif}`;
        if (filters.anioNac) params += `&anioNac=${filters.anioNac}`;

        return this.http.get<any>(this.apiUrl + params).pipe(
            map(res => {
                if (res.status === 'success') {
                    return res.data;
                } else {
                    console.error('API Error:', res.message);
                    return [];
                }
            })
        );
    }

    markPlayer(idnumerocarnet: string, mark: boolean, username: string): Observable<any> {
        let params = `&action=mark_player&idnumerocarnet=${idnumerocarnet}&mark=${mark}&username=${username}`;
        return this.http.get<any>(this.apiUrl + params);
    }

    getPlayer(id: string): Observable<any> {
        return this.http.get<any>(this.apiUrl + `&action=get_player_detail&id=${id}`).pipe(
            map(res => res.status === 'success' ? res.data : null)
        );
    }

    getTransferHistory(id: string): Observable<any[]> {
        return this.http.get<any>(this.apiUrl + `&action=get_transfer_history&id=${id}`).pipe(
            map(res => res.status === 'success' ? res.data : [])
        );
    }

    updatePlayer(player: any): Observable<any> {
        return this.http.post<any>(this.apiUrl + `&action=update_player`, player);
    }
}
