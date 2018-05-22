import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: "navigation-component",
    templateUrl: "./navigation.component.html",
}) 

export class NavigationComponent {
    router: string;
    constructor(router: Router) {
        this.router = router.url;
    }
}