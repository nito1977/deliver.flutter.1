export interface BackendUser {
    id: number;
    ip_address: string;
    username: string;
    email: string;
    created_on: number;
    last_login: number;
    active: number;
    first_name: string;
    last_name: string;
    company: string;
    phone: string;
    password?: string; // Optional for updates
    group_id?: number; // For role management
}
