import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../';

export const AUTH = {
    OPEN: 'AUTH_OPEN'
};

@Injectable()
export class AuthActions {

    constructor(private store: NgRedux<IAppState>) { }

    public open(openOrClose) {
        this.store.dispatch({
            type: AUTH.OPEN,
            openOrClose
        });
    }
}
