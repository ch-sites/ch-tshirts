import * as userActions from '../action';
import { User, UserImpl } from '../module/core';
import { Action } from 'rxjs/internal/scheduler/Action';

export type Action = userActions.All;