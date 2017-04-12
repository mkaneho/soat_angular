import { IToys, IToy, DefaultToys } from '../';
import { Action } from 'redux';
import { TOYS } from './toys.actions';

// Si on fait pas cette interface, on aurait eu plus bas 'action: Action';
// sauf que là, on aurait un warking disant que Action n'a pas de propriété 'toys' défini
export interface IToysAction extends Action {
    toys?: IToy[];
    selectedToy?: IToy;
}

export function toysReducer(state: IToys = DefaultToys, action: IToysAction) {

    switch (action.type) {
        case TOYS.GET_TOYS:
            return Object.assign({}, state, {list: action.toys});

        case TOYS.SELECT_TOYS:
            // TODO: stocker une liste d'éléments sélectionnés pour pvr remettre les élts sélectionnés au rechargmeent
            const newList = state.list.map((item => {
                if (item.title === action.selectedToy.title) {
                    item.selected = !item.selected;
                }
                return item;
            }));

            const selectedToys = newList.filter(item => item.selected);
            return Object.assign({}, state, {list: newList, selectedToys});

        default:
            return state;
    }
}
