import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-kabbadi',
templateUrl: './kabbadi.component.html',
styleUrls: ['./kabbadi.component.scss']
})


export class  KabbadiComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/kabbadi/1.jpg',
thumbImage: '../../assets/kabbadi/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/kabbadi/2.jpg',
thumbImage: '../../assets/kabbadi/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/kabbadi/3.jpg',
thumbImage: '../../assets/kabbadi/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/kabbadi/4.jpg',
thumbImage: '../../assets/kabbadi/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/kabbadi/5.jpg',
thumbImage: '../../assets/kabbadi/5.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Kabaddi');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Kabaddi'},
      {name: 'description', content: 'IIT (BHU) Varanasi Kabaddi teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

