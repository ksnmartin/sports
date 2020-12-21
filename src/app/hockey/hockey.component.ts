import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-hockey',
templateUrl: './hockey.component.html',
styleUrls: ['./hockey.component.scss']
})


export class  HockeyComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/hockey/1.jpg',
thumbImage: '../../assets/hockey/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/2.jpg',
thumbImage: '../../assets/hockey/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/3.jpg',
thumbImage: '../../assets/hockey/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/4.jpg',
thumbImage: '../../assets/hockey/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/5.jpg',
thumbImage: '../../assets/hockey/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/6.jpg',
thumbImage: '../../assets/hockey/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/7.jpg',
thumbImage: '../../assets/hockey/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/8.jpg',
thumbImage: '../../assets/hockey/8.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/hockey/9.jpg',
thumbImage: '../../assets/hockey/9.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Hockey');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Hockey'},
      {name: 'description', content: 'IIT (BHU) Varanasi Hockey teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

