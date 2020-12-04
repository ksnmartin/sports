import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-tkd',
templateUrl: './tkd.component.html',
styleUrls: ['./tkd.component.scss']
})


export class  TkdComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/tkd/1.jpg',
thumbImage: '../../assets/tkd/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/2.jpg',
thumbImage: '../../assets/tkd/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/3.jpg',
thumbImage: '../../assets/tkd/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/4.jpg',
thumbImage: '../../assets/tkd/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/5.jpg',
thumbImage: '../../assets/tkd/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/6.jpg',
thumbImage: '../../assets/tkd/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/7.jpg',
thumbImage: '../../assets/tkd/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/8.jpg',
thumbImage: '../../assets/tkd/8.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
