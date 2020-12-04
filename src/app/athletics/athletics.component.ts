import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-athletics',
templateUrl: './athletics.component.html',
styleUrls: ['./athletics.component.scss']
})


export class  AthleticsComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/athletics/1.jpg',
thumbImage: '../../assets/athletics/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/2.jpg',
thumbImage: '../../assets/athletics/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/3.jpg',
thumbImage: '../../assets/athletics/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/4.jpg',
thumbImage: '../../assets/athletics/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/5.jpg',
thumbImage: '../../assets/athletics/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/6.jpg',
thumbImage: '../../assets/athletics/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/7.jpg',
thumbImage: '../../assets/athletics/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/8.jpg',
thumbImage: '../../assets/athletics/8.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
