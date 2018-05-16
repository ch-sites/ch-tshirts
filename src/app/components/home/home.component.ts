import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../../authentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }
}
