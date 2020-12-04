import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-tabletennis',
templateUrl: './tabletennis.component.html',
styleUrls: ['./tabletennis.component.scss']
})


export class  TabletennisComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/tabletennis/1.jpg',
thumbImage: '../../assets/tabletennis/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/2.jpg',
thumbImage: '../../assets/tabletennis/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/3.jpg',
thumbImage: '../../assets/tabletennis/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/4.jpg',
thumbImage: '../../assets/tabletennis/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/5.jpg',
thumbImage: '../../assets/tabletennis/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/6.jpg',
thumbImage: '../../assets/tabletennis/6.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
