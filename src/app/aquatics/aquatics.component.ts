import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-aquatics',
templateUrl: './aquatics.component.html',
styleUrls: ['./aquatics.component.scss']
})


export class  AquaticsComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/aquatics/1.jpg',
thumbImage: '../../assets/aquatics/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/aquatics/2.jpg',
thumbImage: '../../assets/aquatics/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/aquatics/3.jpg',
thumbImage: '../../assets/aquatics/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/aquatics/4.jpg',
thumbImage: '../../assets/aquatics/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/aquatics/5.jpg',
thumbImage: '../../assets/aquatics/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/aquatics/6.jpg',
thumbImage: '../../assets/aquatics/6.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
