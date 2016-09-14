import { Component, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
    selector: 'my-app',
    templateUrl: 'app/challenge.component.html',
    //template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {  candidates={};

  constructor(private http: Http) {
    http.get('app/candidates.json')
      .map(res => res.json())
      .subscribe(data => this.candidates = data,
      err => console.log(err),
      () => console.log('Completed', this.candidates));
  }

}
