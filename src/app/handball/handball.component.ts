import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-handball',
templateUrl: './handball.component.html',
styleUrls: ['./handball.component.scss']
})


export class  HandballComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/handball/1.jpg',
thumbImage: '../../assets/handball/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/2.jpg',
thumbImage: '../../assets/handball/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/3.jpg',
thumbImage: '../../assets/handball/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/4.jpg',
thumbImage: '../../assets/handball/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/5.jpg',
thumbImage: '../../assets/handball/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/6.jpg',
thumbImage: '../../assets/handball/6.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
