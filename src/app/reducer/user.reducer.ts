import * as userActions from '../action';
import { User, UserImpl } from '../model';
import { Action } from 'rxjs/internal/scheduler/Action';

export type Action = userActions.All;