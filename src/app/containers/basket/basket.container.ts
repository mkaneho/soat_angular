import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { IToy } from '../../store';
import { ToysActions } from '../../store/toys/toys.actions';

export function getTotalPrice(state) {
    return state.toysReducer.selectedToys.reduce((acc, item) => item.selected ? acc += item.price : 0, 0);
}

@Component({
    selector: 'app-basket',
    templateUrl: './basket.html'
})
export class BasketComponent implements OnInit {
    @select(state => state.toysReducer.selectedToys) public selectedToys: Observable<IToy[]>;
    @select(getTotalPrice) public totalPrice: Observable<number>;

    constructor(private _ToysActions: ToysActions) { }

    ngOnInit() { }

    public remove(toy) {
        this._ToysActions.selectToy(toy);
    }
}
