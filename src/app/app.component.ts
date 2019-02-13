import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //post1: Post = new Post("Mon premier post","i love real madrid and i will support it for ever <3");
  //post2: Post = new Post("Mon deuxième post","i have been in sudan once, it is an amazing arab country, people there are very kind and loveable :)");
  //post3: Post = new Post("Encore un post","i just keep talking talkin °.* someone stop me :D");
 
  posts = [
    {
      title : 'Mon premier post',
      content : 'i love real madrid and i will support it for ever <3',
      loveIts : 0
    },
    {
      title : 'Mon deuxième post',
      content  : 'i have been in sudan once, it is an amazing arab country, people there are very kind and loveable :)',
      loveIts : 0
    },
    {
      title : 'Encore un post',
      content : 'i just keep talking talkin °.* someone stop me :D',
      loveIts : 0
    }
  ];
  

  constructor() {
  }

  onAllumer() {
    console.log('On allume tout !');
 }
}