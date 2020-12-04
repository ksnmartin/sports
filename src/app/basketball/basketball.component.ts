import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-basketball',
templateUrl: './basketball.component.html',
styleUrls: ['./basketball.component.scss']
})


export class  BasketballComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/basketball/1.jpg',
thumbImage: '../../assets/basketball/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/2.jpg',
thumbImage: '../../assets/basketball/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/3.jpg',
thumbImage: '../../assets/basketball/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/4.jpg',
thumbImage: '../../assets/basketball/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/5.jpg',
thumbImage: '../../assets/basketball/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/6.jpg',
thumbImage: '../../assets/basketball/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/7.jpg',
thumbImage: '../../assets/basketball/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/8.jpg',
thumbImage: '../../assets/basketball/8.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/9.jpg',
thumbImage: '../../assets/basketball/9.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/captain_boys.png',
thumbImage: '../../assets/basketball/captain_boys.png',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
