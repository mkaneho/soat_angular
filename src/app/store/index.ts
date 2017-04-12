import { ToysActions } from './toys/toys.actions';
import { AuthActions } from './auth/auth.actions';

export interface IToy {
    icon: string;
    title: string;
    price: number;
    selected?: boolean; // le '?' permet de dire que le param est optionnel. Sera falsy s'il n'est pas setté de ttes façons
}

export interface IToys {
    list: IToy[];
}

export interface IAuth {
    openOrClose: boolean;
}

export interface IAppState {
    toysReducer: IToys;
}

export const Actions = [
    ToysActions,
    AuthActions
];

export const DefaultToys = {
    list: [],
    selectedToys: {}
};

export const DefaultAuth = {
    openOrClose: false
};

export const DefaultState = {
    toysReducer: DefaultToys,
    authReducer: DefaultAuth
};
