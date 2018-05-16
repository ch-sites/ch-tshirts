import { User } from './user.model';

export class UserImpl implements User {
	constructor(public _id: string, public email: string, public displayName: string) {}
}