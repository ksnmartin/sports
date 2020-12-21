import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-badminton',
templateUrl: './badminton.component.html',
styleUrls: ['./badminton.component.scss']
})


export class  BadmintonComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/badminton/1.jpg',
thumbImage: '../../assets/badminton/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/2.jpg',
thumbImage: '../../assets/badminton/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/3.jpg',
thumbImage: '../../assets/badminton/3.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/4.jpg',
thumbImage: '../../assets/badminton/4.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/5.jpg',
thumbImage: '../../assets/badminton/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/badminton/6.jpg',
thumbImage: '../../assets/badminton/6.jpg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Badminton');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Badminton'},
      {name: 'description', content: 'IIT (BHU) Varanasi Badminton teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

