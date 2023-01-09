import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Test } from './test-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'f1-race';

  constructor(private test: Test) {}

  ngOnInit() {
    this.test.getApi().pipe(tap(r => console.log(r))).subscribe()
  }
}
