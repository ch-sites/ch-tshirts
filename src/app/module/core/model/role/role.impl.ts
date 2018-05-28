import { Role } from './role.model';

export class RoleImpl implements Role {
	name: string;
	_id?: string;

	constructor(properties: any) {
		this.name = properties.name;

		if (properties._id && properties._id != '') {
			this._id = properties._id;
		}
	}

	getObject(): any {
        const object = {
			name: this.name
        };

        if (this._id) {
            object['_id'] = this._id;
        }

        return object;
    }

}