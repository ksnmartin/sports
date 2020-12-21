import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

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

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Aquatics');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Aquatics'},
      {name: 'description', content: 'IIT (BHU) Varanasi Aquatics teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

