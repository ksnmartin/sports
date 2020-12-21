import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-handball',
templateUrl: './handball.component.html',
styleUrls: ['./handball.component.scss']
})


export class  HandballComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/handball/1.jpg',
thumbImage: '../../assets/handball/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/2.jpg',
thumbImage: '../../assets/handball/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/3.jpg',
thumbImage: '../../assets/handball/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/4.jpg',
thumbImage: '../../assets/handball/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/5.jpg',
thumbImage: '../../assets/handball/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/handball/6.jpg',
thumbImage: '../../assets/handball/6.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Handball');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Handball'},
      {name: 'description', content: 'IIT (BHU) Varanasi Handball teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

