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
    private uploadApiUrl = GLOBAL.sitio ? GLOBAL.sitio + '/api/index.php?service=upload' : 'http://localhost/api/index.php?service=upload';

    private currentUserSubject: BehaviorSubject<BackendUser>;
    public currentUser: Observable<BackendUser>;

    constructor(private http: HttpClient) {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUserSubject = new BehaviorSubject<BackendUser>(storedUser);
        this.currentUser = this.currentUserSubject.asObservable();

        // Restore legacy auth state for AuthGuard compatibility
        if (storedUser && storedUser.username) {
            GLOBAL.idUsuario = storedUser.username;
        }
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

                    // Sync legacy auth
                    GLOBAL.idUsuario = user.username;

                    return user;
                } else {
                    throw new Error(response.message || 'Error de autenticación');
                }
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('lastAction'); // Clear auto-logout timer
        GLOBAL.idUsuario = '';
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

    uploadPhoto(file: Blob): Observable<any> {
        const formData = new FormData();
        // Append the file with a filename (e.g. 'photo.jpg') so $_FILES['photo'] works
        formData.append('photo', file, 'photo.jpg');

        return this.http.post<any>(this.uploadApiUrl, formData)
            .pipe(map(response => {
                if (response.status === 'success') {
                    return response; // Return full response, not just response.data
                } else {
                    throw new Error(response.message);
                }
            }));
    }

    getClubs(): Observable<any[]> {
        return this.http.get<any>(GLOBAL.sitio ? GLOBAL.sitio + '/api/index.php?service=panel&action=list_clubes' : 'http://localhost/api/index.php?service=panel&action=list_clubes')
            .pipe(map(response => {
                if (response.status === 'success') {
                    return response.data;
                } else {
                    throw new Error(response.message);
                }
            }));
    }
}
