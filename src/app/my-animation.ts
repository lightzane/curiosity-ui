import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const listAnim = trigger('listAnim', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateX(-500px)', }),
            stagger('0.1s', animate('0.5s cubic-bezier(0, 1.4, 1, 1)'))
        ], { optional: true }),
        // ! below animation distorts the entry of the canvas making it non-responsive
        // query(':leave', [
        //     stagger('0.1s', animate('0.2s', style({ opacity: 0 })))
        // ], { optional: true })
    ])
]);

export const slideIn = trigger('slideIn', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('0.5s ease-out')
    ]),
    transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0, transform: 'translateX(-100px)' }))
    ])
]);

export const slideDown = trigger('slideDown', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('0.5s ease-out')
    ]),
    transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0, transform: 'translateY(-100px)' }))
    ])
]);

export const popIn = trigger('popIn', [
    transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('0.15s cubic-bezier(0, 1.4, 1, 1)')
    ])
]);

export const fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out')
    ]),
    transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0 }))
    ])
]);