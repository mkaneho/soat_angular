import { IAuth, DefaultAuth } from '../';
import { Action } from 'redux';
import { AUTH } from './auth.actions';

export interface IAuthAction extends Action {
    openOrClose: boolean;
}

export function authReducer(state: IAuth = DefaultAuth, action: IAuthAction) {

    switch (action.type) {
        case AUTH.OPEN:
            return Object.assign({}, state, { openOrClose: action.openOrClose });

        default:
            return state;
    }
}
