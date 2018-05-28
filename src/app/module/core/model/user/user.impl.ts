import { User } from './user.model';
import { RoleImpl, Role } from '../role';

export class UserImpl implements User {
	firstName?: string;
	lastName?: string;
	displayName: string;
	email: string;
	roles?: Array<Role>;
	photoURL?: string;
	_id?: string;

	constructor(properties: User) {
		this.firstName = properties.firstName;
		this.lastName = properties.lastName;
		this.displayName = properties.displayName;
		this.email = properties.email;
		this.roles = properties.roles;
		this.photoURL = properties.photoURL;

		if (properties._id && properties._id != '') {
			this._id = properties._id;
		}
	}

	getObject(): any {
		let roles: Array<Role> = [];

		if (this.roles && this.roles.length > 0) {
			roles.push((this.roles[0] as RoleImpl).getObject());
		}
        const object = {
			displayName: this.displayName,
			email: this.email,
            firstName: this.firstName,
			lastName: this.lastName,
			photoURL: this.photoURL,
			roles: roles
        };

        if (this._id) {
            object['_id'] = this._id;
        }

        return object;
    }

}