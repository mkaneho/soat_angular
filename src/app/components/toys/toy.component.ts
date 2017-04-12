import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toy',
    templateUrl: './toy.html',
})
export class ToyComponent {
    @Input() toy;
    @Output() toggleToySelected = new EventEmitter();

    public clickToy(toy) {
        this.toggleToySelected.emit(toy);
    }
}
