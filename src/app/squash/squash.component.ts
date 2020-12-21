import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

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

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Squash');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Squash'},
      {name: 'description', content: 'IIT (BHU) Varanasi Squash teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

