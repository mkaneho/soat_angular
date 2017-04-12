import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { select } from '@angular-redux/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthActions } from '../../store/auth/auth.actions';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.html',
})
export class AuthComponent implements OnInit {
    @select(state => state.authReducer.openOrClose) public isOpened: Observable<boolean>;
    public user;

    constructor(
        private _AuthActions: AuthActions,
        private _Router: Router
    ) {}

    ngOnInit() {
        this.user = {
            login: null,
            pass: null
        };
    }

    public close() {
        this._AuthActions.open(false);
    }

    public submitForm(Form) {
        this._Router.navigate(['/basket']);
        this.close();
    }
}
