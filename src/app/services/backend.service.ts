import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BackendUser } from '../models/backend-user';
import { GLOBAL } from './global'; // Assuming GLOBAL is in the same folder or adjascent

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    // Use a relative path or a configurable URL. 
    // Assuming the PHP API will be placed in 'api/auth.php' relative to the web root.
    // We can use the GLOBAL service or a direct path. 
    // Since the existing service uses GLOBAL.sitio + 'api', we try to align.

    // Unified API Endpoint
    private apiUrl = GLOBAL.sitio ? GLOBAL.sitio + '/api/index.php?service=auth' : 'http://localhost/api/index.php?service=auth';
    private usersApiUrl = GLOBAL.sitio ? GLOBAL.sitio + '/api/index.php?service=users' : 'http://localhost/api/index.php?service=users';

    private currentUserSubject: BehaviorSubject<BackendUser>;
    public currentUser: Observable<BackendUser>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<BackendUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): BackendUser {
        return this.currentUserSubject.value;
    }

    login(username: string, clave: string): Observable<BackendUser> {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', clave);

        return this.http.post<any>(this.apiUrl, formData)
            .pipe(map(response => {
                if (response && response.status === 'success' && response.data) {
                    const user = response.data;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                } else {
                    throw new Error(response.message || 'Error de autenticación');
                }
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    // --- User Management (ABM) ---

    getUsers(): Observable<BackendUser[]> {
        return this.http.get<any>(this.usersApiUrl + '&action=list')
            .pipe(map(response => {
                if (response.status === 'success') {
                    return response.data;
                } else {
                    throw new Error(response.message);
                }
            }));
    }

    saveUser(user: BackendUser): Observable<any> {
        return this.http.post<any>(this.usersApiUrl + '&action=save', user)
            .pipe(map(response => {
                if (response.status === 'success') {
                    return response.data;
                } else {
                    throw new Error(response.message);
                }
            }));
    }

    deleteUser(id: number): Observable<any> {
        return this.http.post<any>(this.usersApiUrl + '&action=delete', { id: id })
            .pipe(map(response => {
                if (response.status === 'success') {
                    return response.data;
                } else {
                    throw new Error(response.message);
                }
            }));
    }
}
