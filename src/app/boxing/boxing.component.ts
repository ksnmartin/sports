import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-boxing',
templateUrl: './boxing.component.html',
styleUrls: ['./boxing.component.scss']
})


export class  BoxingComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/boxing/1.jpg',
thumbImage: '../../assets/boxing/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/2.jpg',
thumbImage: '../../assets/boxing/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/3.jpg',
thumbImage: '../../assets/boxing/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/4.jpg',
thumbImage: '../../assets/boxing/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/5.jpg',
thumbImage: '../../assets/boxing/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/6.jpg',
thumbImage: '../../assets/boxing/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/7.jpg',
thumbImage: '../../assets/boxing/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/boxing/8.jpg',
thumbImage: '../../assets/boxing/8.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Boxing');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Boxing'},
      {name: 'description', content: 'IIT (BHU) Varanasi Boxing teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

