export interface User {
	_id?: string,
	email: string,
	displayName: string,
	photoURL?: string,
	loading?: boolean,
	error?: string
}