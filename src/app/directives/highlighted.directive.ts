import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[highlighted]'
})
export class HighlightedDirective {
    constructor() {
        console.log('Directive created');
    }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return true;
    }

    // @HostBinding('style.border')
    // get cssStyle() {
    //     return '1px solid red';
    // }

    @HostBinding('attr.disabled')
    get disabled() {
        return true;
    }
}
