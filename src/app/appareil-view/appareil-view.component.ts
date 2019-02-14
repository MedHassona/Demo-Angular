import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import { Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {
  isAuth = false;
  
    appareils: any[];
    appareilsSubscription = new Subscription;
    
  
    lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });
  
    constructor(private appareilService: AppareilService) {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 2000
      );
    }
  
    ngOnInit(){
      this.appareilsSubscription = this.appareilService.appareilsSubject.subscribe(
        (appareils: any[]) => {
          this.appareils = appareils;
        }
      );
      this.appareilService.emitAppareilsSubject();
    }
  
    onAllumer(){
     this.appareilService.swithOnAll(); 
    }
  
    onEteindre() {
      if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
        this.appareilService.swichOfAll();
      } else {
        return null;
      }
  }

  onSave(){
    this.appareilService.saveAppareilsToServer();  
  }

  onFetch(){
    //this.appareilService.getAppareilsFromServer();
  }

  ngOnDestroy(){
    this.appareilsSubscription.unsubscribe();
  }

}
