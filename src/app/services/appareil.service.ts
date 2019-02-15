import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = [];

      constructor(private httpClient: HttpClient){
        this.getAppareilsFromServer();
      }

      addAppareil(name: string, status: string){
          const appareilObj = {
              id:0,
            name: '',
            status: ''
          };
          appareilObj.name = name;
          appareilObj.status = status;
          appareilObj.id = this.appareils[(this.appareils.length - 1)].id + 1;
          this.appareils.push(appareilObj);
          this.emitAppareilsSubject();
      }

      emitAppareilsSubject(){
          this.appareilsSubject.next(this.appareils.slice());
      }

      switchOnOne(i: number){
          this.appareils[i].status = 'allumé';
          this.emitAppareilsSubject();
      }

      switchOffOne(i: number){
        this.appareils[i].status = 'éteint';
        this.emitAppareilsSubject();
    }

      swithOnAll(){
          for(let appareil of this.appareils){
              appareil.status = 'allumé';
          }
          this.emitAppareilsSubject();
      }

      swichOfAll(){
          for(let appareil of this.appareils){
              appareil.status = 'éteint';
              this.emitAppareilsSubject();
          }
      }

      getAppareilById(id: number){
          const appareil = this.appareils.find(
              (s) => {
                  return s.id === id;
              }
          );
          return appareil;
      }

      saveAppareilsToServer(){
          this.httpClient
            .put('https://httpclient-dem.firebaseio.com/appareils.json',this.appareils)
            .subscribe(
                () => {
                    console.log('Enregistrement Terminé !');
                },
                (error) => {
                    console.log('Erreur : ' +error);
                }
            );
      }

      getAppareilsFromServer() {
        this.httpClient
          .get<any[]>('https://httpclient-dem.firebaseio.com/appareils.json')
          .subscribe(
            (response) => {
              this.appareils = response;
              this.emitAppareilsSubject();
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
     }
  }