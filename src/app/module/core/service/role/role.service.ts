import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Role } from '../../model/role';

@Injectable()
export abstract class RoleService {
    create(role: Role): Observable<Role> {
        throw new Error("Method not implemented.");
    }
    delete(role: Role): Observable<Role> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Observable<Role> {
        throw new Error("Method not implemented.");
    }
    list(): Observable<Role[]> {
        throw new Error("Method not implemented.");
    }
    update(role: Role): Observable<Role> {
        throw new Error("Method not implemented.");
    }
}
