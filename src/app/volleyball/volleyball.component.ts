import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-volleyball',
templateUrl: './volleyball.component.html',
styleUrls: ['./volleyball.component.scss']
})


export class  VolleyballComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/volleyball/1.jpg',
thumbImage: '../../assets/volleyball/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/2.jpg',
thumbImage: '../../assets/volleyball/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/3.jpg',
thumbImage: '../../assets/volleyball/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/4.jpg',
thumbImage: '../../assets/volleyball/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/5.jpg',
thumbImage: '../../assets/volleyball/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/6.jpg',
thumbImage: '../../assets/volleyball/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/7.jpg',
thumbImage: '../../assets/volleyball/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/8.jpg',
thumbImage: '../../assets/volleyball/8.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/volleyball/9.jpg',
thumbImage: '../../assets/volleyball/9.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Volleyball');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Volleyball'},
      {name: 'description', content: 'IIT (BHU) Varanasi Volleyball teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

