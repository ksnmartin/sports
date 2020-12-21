import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-basketball',
templateUrl: './basketball.component.html',
styleUrls: ['./basketball.component.scss']
})


export class  BasketballComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/basketball/1.jpg',
thumbImage: '../../assets/basketball/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/2.jpg',
thumbImage: '../../assets/basketball/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/3.jpg',
thumbImage: '../../assets/basketball/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/4.jpg',
thumbImage: '../../assets/basketball/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/5.jpg',
thumbImage: '../../assets/basketball/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/6.jpg',
thumbImage: '../../assets/basketball/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/7.jpg',
thumbImage: '../../assets/basketball/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/8.jpg',
thumbImage: '../../assets/basketball/8.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/basketball/9.jpg',
thumbImage: '../../assets/basketball/9.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Basketball');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Basketball'},
      {name: 'description', content: 'IIT (BHU) Varanasi Basketball teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

