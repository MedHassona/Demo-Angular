import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  sercondes: number;
  counterSubscription: Subscription;

  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.sercondes = value;
      },
      (error) => {
        console.log('ooh error', +error)
      },
      () => {
        console.log('Onservable complète !');
      }
    );
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }


}