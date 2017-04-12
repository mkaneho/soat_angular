import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IToy } from '../../store';

@Injectable() // annotation pour créer un service en ng2
export class ToysService{

    constructor(
        private _http: Http) { }

    public getToys(): Observable<IToy[]> {
        return this._http.get('../../api/toys.json')
            .map(res => res.json());
    }
}
