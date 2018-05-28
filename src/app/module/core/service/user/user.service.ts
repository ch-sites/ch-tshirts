import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model';

@Injectable()
export abstract class UserService {
    create(user: User): Observable<User> {
        throw new Error("Method not implemented.");
    }
    delete(user: User): Observable<User> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Observable<User> {
        throw new Error("Method not implemented.");
    }
    list(): Observable<User[]> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Observable<User> {
        throw new Error("Method not implemented.");
    }
}
