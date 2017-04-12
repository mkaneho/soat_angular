import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { AuthActions } from '../../store/auth/auth.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.html'
})
export class HeaderComponent {
    // NB: pour que le select marche avec un build AOT, il faut sortir la fonction
    // à l'intérieur du @select. En effet, les arrow function sont mal supportées.
    // Aussi, 
    @select(state => state.toysReducer.list.filter(toy => toy.selected).length) public numberOfSelectedToys: Observable<number>;

    constructor(private _AuthActions: AuthActions) {}

    public openCart() {
        this._AuthActions.open(true);
    }
}
