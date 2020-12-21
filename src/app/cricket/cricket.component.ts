import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-cricket',
templateUrl: './cricket.component.html',
styleUrls: ['./cricket.component.scss']
})


export class  CricketComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/cricket/1.jpg',
thumbImage: '../../assets/cricket/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/2.jpg',
thumbImage: '../../assets/cricket/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/3.jpeg',
thumbImage: '../../assets/cricket/3.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/4.jpeg',
thumbImage: '../../assets/cricket/4.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/5.jpg',
thumbImage: '../../assets/cricket/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/6.jpeg',
thumbImage: '../../assets/cricket/6.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/cricket/7.jpeg',
thumbImage: '../../assets/cricket/7.jpeg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Cricket');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Cricket'},
      {name: 'description', content: 'IIT (BHU) Varanasi Cricket teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

