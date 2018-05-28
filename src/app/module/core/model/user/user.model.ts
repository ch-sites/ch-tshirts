import { Role } from "../role";

export interface User {
	firstName?: string;
	lastName?: string;
	displayName: string;
	email: string;
	roles?: Array<Role>;
	photoURL?: string;
	_id?: string;
}