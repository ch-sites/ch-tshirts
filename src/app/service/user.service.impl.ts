import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { User, UserImpl, UserService } from "../module/core";
import { RoleImpl } from "../module/core/model/role";

@Injectable()
export class UserServiceImpl extends UserService {
    private userCollection: AngularFirestoreCollection<User>;
    private users$: Observable<User[]>;
   
    constructor(private angularFirestore: AngularFirestore) {
        super();

        this.userCollection = angularFirestore.collection<User>('user');

        this.users$ = this.userCollection.snapshotChanges().pipe(
            map(actions => actions.map(
                action => {
                    const data = action.payload.doc.data() as User;
                    const id = action.payload.doc.id;

                    let roles = [];

                    try {
                        data.roles.forEach (item => {
                            roles.push(new RoleImpl(item));
                        });
                    } catch(error) {
                        console.log(error);
                    }

                    return new UserImpl({_id: id, ...data, roles: roles});
                })
            )
        )
    }

    create(user: User): Observable<User> {
        this.userCollection.add({...(user as UserImpl).getObject()});

        return new Observable<User>(observer => {
            observer.next(user);
        });
    }

    delete(user: User): Observable<User> {
        const userDocument = this.angularFirestore.doc<User>('user/' + user._id);

        return new Observable<User>(observer => {
            userDocument.delete().then(value =>  observer.next(user));
        });
    }

    get(id: string): Observable<User> {
        return new Observable<User>(observer => {
            const userDocument = this.angularFirestore.doc<User>('user/' + id);

            userDocument.valueChanges().subscribe(value => {
                const user: User = new UserImpl({_id: id, ...value});

                observer.next(user);
            });
        })
    }

    list(): Observable<User[]> {
        return this.users$;
    }

    update(user: User): Observable<User> {
        const userDocument = this.angularFirestore.doc<User>('user/' + user._id);

        userDocument.update((user as UserImpl).getObject());

        return new Observable<User>(observer => {
            observer.next(user);
        });
    }
}