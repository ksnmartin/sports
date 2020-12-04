import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-squash',
templateUrl: './squash.component.html',
styleUrls: ['./squash.component.scss']
})


export class  SquashComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/squash/1.jpg',
thumbImage: '../../assets/squash/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/squash/2.jpg',
thumbImage: '../../assets/squash/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/squash/3.jpg',
thumbImage: '../../assets/squash/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/squash/4.jpg',
thumbImage: '../../assets/squash/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/squash/5.jpg',
thumbImage: '../../assets/squash/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/squash/6.jpg',
thumbImage: '../../assets/squash/6.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
