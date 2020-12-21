import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-tabletennis',
templateUrl: './tabletennis.component.html',
styleUrls: ['./tabletennis.component.scss']
})


export class  TabletennisComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/tabletennis/1.jpeg',
thumbImage: '../../assets/tabletennis/1.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/2.jpg',
thumbImage: '../../assets/tabletennis/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/3.jpg',
thumbImage: '../../assets/tabletennis/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/4.jpg',
thumbImage: '../../assets/tabletennis/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/5.jpg',
thumbImage: '../../assets/tabletennis/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/tabletennis/6.jpg',
thumbImage: '../../assets/tabletennis/6.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Table Tennis');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Table Tennis'},
      {name: 'description', content: 'IIT (BHU) Varanasi Table Tennis teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

