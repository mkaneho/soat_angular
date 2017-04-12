import { combineReducers } from 'redux'; // il faut avoir installé redux (commande npm => regarde doc)
import { toysReducer } from './toys/toys.reducer';
import { authReducer } from './auth/auth.reducer';
import { IAppState } from './';

export const RootReducer = combineReducers<IAppState>({
    toysReducer, // fonctionnalité ES6 pour ne pas avoir à écrire toysReducer: toysReducer
    authReducer
});
