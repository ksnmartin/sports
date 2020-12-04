import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-badminton',
templateUrl: './badminton.component.html',
styleUrls: ['./badminton.component.scss']
})


export class  BadmintonComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/badminton/1.jpg',
thumbImage: '../../assets/badminton/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/2.jpg',
thumbImage: '../../assets/badminton/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/3.jpg',
thumbImage: '../../assets/badminton/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/4.jpg',
thumbImage: '../../assets/badminton/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/5.jpg',
thumbImage: '../../assets/badminton/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/6.jpg',
thumbImage: '../../assets/badminton/6.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
