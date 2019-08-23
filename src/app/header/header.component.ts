import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class headerComponent {

    @Output() linkSelected = new EventEmitter<string>();

    onSelect(link: string) {
        this.linkSelected.emit(link)
    }
}