import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-volleyball',
templateUrl: './volleyball.component.html',
styleUrls: ['./volleyball.component.scss']
})


export class  VolleyballComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/volleyball/1.jpg',
thumbImage: '../../assets/volleyball/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/2.jpg',
thumbImage: '../../assets/volleyball/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/3.jpg',
thumbImage: '../../assets/volleyball/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/4.jpg',
thumbImage: '../../assets/volleyball/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/5.jpg',
thumbImage: '../../assets/volleyball/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/6.jpg',
thumbImage: '../../assets/volleyball/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/7.jpg',
thumbImage: '../../assets/volleyball/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/8.jpg',
thumbImage: '../../assets/volleyball/8.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/9.jpg',
thumbImage: '../../assets/volleyball/9.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
