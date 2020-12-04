import { Component, OnInit } from '@angular/core';

@Component({

selector: 'app-tennis',
templateUrl: './tennis.component.html',
styleUrls: ['./tennis.component.scss']
})


export class  TennisComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/tennis/Girls(Practice).jpg',
thumbImage: '../../assets/tennis/Girls(Practice).jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tennis/Inter IIT(Gold).jpg',
thumbImage: '../../assets/tennis/Inter IIT(Gold).jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tennis/Spardha Gold ,2018.jpg',
thumbImage: '../../assets/tennis/Spardha Gold ,2018.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tennis/Sport Tech, IIT Delhi(2019).jpg',
thumbImage: '../../assets/tennis/Sport Tech, IIT Delhi(2019).jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tennis/Team.jpg',
thumbImage: '../../assets/tennis/Team.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
