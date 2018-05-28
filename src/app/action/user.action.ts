import { Action } from '@ngrx/store';
import { User } from '../module/core';

export const GET_USER			= '[Auth] Get user';
export const AUTHENTICATED		= '[Auth] Authenticated';
export const NOT_AUTHENTICATED	= '[Auth] Not Authenticated';
export const GOOGLE_LOGIN		= '[Auth] Google Login';
export const LOGOUT				= '[Auth] Logout';
export const AUTH_ERROR			= '[Auth] Error';

export class GetUser implements Action {
	readonly type = GET_USER;

	constructor(public payload?: any) {}
}

export class Authenticated implements Action {
	readonly type = AUTHENTICATED;

	constructor(payload?: any) {}
}

export class NotAuthenticated implements Action {
	readonly type = NOT_AUTHENTICATED;

	constructor(payload?: any) {}
}

export class GoogleLogin implements Action {
	readonly type = GOOGLE_LOGIN;

	constructor(payload?: any) {}
}

export class Logout implements Action {
	readonly type = LOGOUT;

	constructor(payload?: any) {}
}

export type All = GetUser | Authenticated | NotAuthenticated | GoogleLogin | Logout;
