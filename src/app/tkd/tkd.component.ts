import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-tkd',
templateUrl: './tkd.component.html',
styleUrls: ['./tkd.component.scss']
})


export class  TkdComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/tkd/1.jpg',
thumbImage: '../../assets/tkd/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/2.jpg',
thumbImage: '../../assets/tkd/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/3.jpeg',
thumbImage: '../../assets/tkd/3.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/4.jpg',
thumbImage: '../../assets/tkd/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/5.jpg',
thumbImage: '../../assets/tkd/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/6.jpg',
thumbImage: '../../assets/tkd/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/7.jpg',
thumbImage: '../../assets/tkd/7.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tkd/8.jpg',
thumbImage: '../../assets/tkd/8.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Taekwondo');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Taekwondo'},
      {name: 'description', content: 'IIT (BHU) Varanasi Taekwondo teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

