import { Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl'
})
export class HighlightedDirective {
    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighlight = new EventEmitter();

    constructor() {
        console.log('Directive created');
    }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    // @HostBinding('style.border')
    // get cssStyle() {
    //     return '1px solid red';
    // }

    // @HostBinding('attr.disabled')
    // get disabled() {
    //     return true;
    // }

    @HostListener('mouseover', ['$event'])
    mouseOver($event) {
        this.isHighlighted = true;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    mouseLeave() {
        this.isHighlighted = false;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    toggle() {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }
}
