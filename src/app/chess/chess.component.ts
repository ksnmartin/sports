import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-chess',
templateUrl: './chess.component.html',
styleUrls: ['./chess.component.scss']
})


export class  ChessComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/chess/1.jpg',
thumbImage: '../../assets/chess/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/chess/2.jpg',
thumbImage: '../../assets/chess/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/chess/3.jpeg',
thumbImage: '../../assets/chess/3.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/chess/4.jpeg',
thumbImage: '../../assets/chess/4.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/chess/5.jpeg',
thumbImage: '../../assets/chess/5.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/chess/6.jpeg',
thumbImage: '../../assets/chess/6.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/chess/7.jpeg',
thumbImage: '../../assets/chess/7.jpeg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Chess');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Chess'},
      {name: 'description', content: 'IIT (BHU) Varanasi Chess teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

