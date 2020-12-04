import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-chess',
templateUrl: './chess.component.html',
styleUrls: ['./chess.component.scss']
})


export class  ChessComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/chess/1.jpg',
thumbImage: '../../assets/chess/1.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
