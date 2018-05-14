import { User } from './user.model';

export class UserImpl implements User {
	constructor(public uid: string, public displayName: string) {}
}