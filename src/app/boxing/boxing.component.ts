import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-boxing',
templateUrl: './boxing.component.html',
styleUrls: ['./boxing.component.scss']
})


export class  BoxingComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/boxing/1.jpg',
thumbImage: '../../assets/boxing/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/2.jpg',
thumbImage: '../../assets/boxing/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/3.jpg',
thumbImage: '../../assets/boxing/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/4.jpg',
thumbImage: '../../assets/boxing/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/5.jpg',
thumbImage: '../../assets/boxing/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/6.jpg',
thumbImage: '../../assets/boxing/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/7.jpg',
thumbImage: '../../assets/boxing/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/8.jpg',
thumbImage: '../../assets/boxing/8.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
