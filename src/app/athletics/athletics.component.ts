import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-athletics',
templateUrl: './athletics.component.html',
styleUrls: ['./athletics.component.scss']
})


export class  AthleticsComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/athletics/1.jpg',
thumbImage: '../../assets/athletics/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/2.jpg',
thumbImage: '../../assets/athletics/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/3.jpg',
thumbImage: '../../assets/athletics/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/4.jpg',
thumbImage: '../../assets/athletics/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/5.jpg',
thumbImage: '../../assets/athletics/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/6.jpg',
thumbImage: '../../assets/athletics/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/7.jpg',
thumbImage: '../../assets/athletics/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/athletics/8.jpg',
thumbImage: '../../assets/athletics/8.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Athletics');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Athletics'},
      {name: 'description', content: 'IIT (BHU) Varanasi Athletics teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

