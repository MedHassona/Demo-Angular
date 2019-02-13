import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string ;
  @Input() content: string ;
  loveIts: number = 0 ;
  created_at: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  lovedIt(){
    this.loveIts++;
  }

  nlovedIt(){
    this.loveIts--;
  }

  getDate(){
    return ""+this.created_at;
  }

}
