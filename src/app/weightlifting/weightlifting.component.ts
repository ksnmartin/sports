import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-weightlifting',
templateUrl: './weightlifting.component.html',
styleUrls: ['./weightlifting.component.scss']
})


export class  WeightliftingComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/weightlifting/1.jpg',
thumbImage: '../../assets/weightlifting/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/2.jpg',
thumbImage: '../../assets/weightlifting/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/3.jpg',
thumbImage: '../../assets/weightlifting/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/4.jpg',
thumbImage: '../../assets/weightlifting/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/5.jpg',
thumbImage: '../../assets/weightlifting/5.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
