import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

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

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Lawn Tennis');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Lawn Tennis'},
      {name: 'description', content: 'IIT (BHU) Varanasi Lawn Tennis teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

