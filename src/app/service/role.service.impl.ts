import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators'

import { Role, RoleImpl } from "../module/core/model/role";
import { RoleService } from "../module/core/service/role";

@Injectable()
export class RoleServiceImpl extends RoleService {
    private roles: Array<Role>;
   
    constructor(public httpClient: HttpClient) {
        super();

        this.roles = new Array<Role>();
    }

    create(role: Role): Observable<Role> {
        this.roles.push(role);

        return new Observable<Role>(observer => {
            observer.next(role);
        });
    }

    delete(role: Role): Observable<Role> {
        this.get(role._id).subscribe(role => {
            let index = this.roles.indexOf(role);

            this.roles.splice(index, 1);
        });

        return new Observable<Role>(observer => {
            observer.next(role);
        });
    }

    get(id: string): Observable<Role> {
        return new Observable<Role>(observer => {
            let role: Role;

            this.roles.forEach(item => {
                if (item._id === id) {
                    role = item;
                }
            });

            observer.next(role);
        })
    }

    list(): Observable<Role[]> {
        return this.httpClient.get<Role[]>('assets/roles.json')
            .pipe(
                map(data => {
                    if (this.roles.length === 0) {
                        data.forEach(item => {
                            this.roles.push(new RoleImpl(item));
                        });
                    }

                    return this.roles;
                })
            );
    }

    update(role: Role): Observable<Role> {
        let i;

        this.roles.forEach((item, index) => {
            if (role._id === item._id) {
                i = index;
            }
        });

        if (i) {
            this.roles[i] = role;
        }

        return new Observable<Role>(observer => {
            observer.next(role);
        });
    }
} 