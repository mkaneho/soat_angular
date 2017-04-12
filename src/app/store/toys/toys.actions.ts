import { Injectable } from '@angular/core';
import { IAppState, IToy } from '../';
import { NgRedux } from '@angular-redux/store';
import { ToysService } from '../../services/toys/toys.service';


export const TOYS = {
    GET_TOYS: 'TOYS_GET_TOYS',
    SELECT_TOYS: 'TOYS_SELECT_TOYS'
};

@Injectable()
export class ToysActions {
    constructor(private store: NgRedux<IAppState>,
                private _ToysService: ToysService) {
    }

    public getToys() {
        // On fait appel au service et on souscrit au retour de l'observable, avec la fonction .subscribe
        return this._ToysService.getToys().subscribe((toys: IToy[]) => {
            this.store.dispatch({
                type: TOYS.GET_TOYS,
                toys
            });
        });
    }

    public selectToy(toy: IToy) {
        this.store.dispatch({
            type: TOYS.SELECT_TOYS,
            selectedToy: toy
        });
    }
}
