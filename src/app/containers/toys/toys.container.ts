import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { IToy } from '../../store';
import { ToysActions } from '../../store/toys/toys.actions';

@Component({
    selector: 'app-toys',
    templateUrl: './toys.html'
})
export class ToysComponent implements OnInit {
    @select(state => state.toysReducer.list) public toys: Observable<IToy[]>;

    constructor(private _toysActions: ToysActions) {}

    ngOnInit() {
        this._toysActions.getToys();
    }

    public onToyClick(toy: IToy) {
        this._toysActions.selectToy(toy);
    }
};
