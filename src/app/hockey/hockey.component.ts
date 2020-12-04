import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-hockey',
templateUrl: './hockey.component.html',
styleUrls: ['./hockey.component.scss']
})


export class  HockeyComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/hockey/1.jpg',
thumbImage: '../../assets/hockey/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/2.jpg',
thumbImage: '../../assets/hockey/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/3.jpg',
thumbImage: '../../assets/hockey/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/4.jpg',
thumbImage: '../../assets/hockey/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/5.jpg',
thumbImage: '../../assets/hockey/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/6.jpg',
thumbImage: '../../assets/hockey/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/7.jpg',
thumbImage: '../../assets/hockey/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/8.jpg',
thumbImage: '../../assets/hockey/8.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/9.jpg',
thumbImage: '../../assets/hockey/9.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
