import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-cricket',
templateUrl: './cricket.component.html',
styleUrls: ['./cricket.component.scss']
})


export class  CricketComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/cricket/1.jpg',
thumbImage: '../../assets/cricket/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/2.jpg',
thumbImage: '../../assets/cricket/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/3.jpg',
thumbImage: '../../assets/cricket/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/4.jpg',
thumbImage: '../../assets/cricket/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/5.jpg',
thumbImage: '../../assets/cricket/5.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
