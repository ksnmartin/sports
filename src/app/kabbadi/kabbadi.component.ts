import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-kabbadi',
templateUrl: './kabbadi.component.html',
styleUrls: ['./kabbadi.component.scss']
})


export class  KabbadiComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/kabbadi/1.jpg',
thumbImage: '../../assets/kabbadi/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/kabbadi/2.jpg',
thumbImage: '../../assets/kabbadi/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/kabbadi/3.jpg',
thumbImage: '../../assets/kabbadi/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/kabbadi/4.jpg',
thumbImage: '../../assets/kabbadi/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/kabbadi/5.jpg',
thumbImage: '../../assets/kabbadi/5.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
