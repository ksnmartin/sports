import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-weightlifting',
templateUrl: './weightlifting.component.html',
styleUrls: ['./weightlifting.component.scss']
})


export class  WeightliftingComponent  implements OnInit {
  imageObject: Array<object> = [
{
image: '../../assets/weightlifting/1.jpg',
thumbImage: '../../assets/weightlifting/1.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/10.jpeg',
thumbImage: '../../assets/weightlifting/10.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/2.jpg',
thumbImage: '../../assets/weightlifting/2.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/3.jpeg',
thumbImage: '../../assets/weightlifting/3.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/4.jpeg',
thumbImage: '../../assets/weightlifting/4.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/5.jpg',
thumbImage: '../../assets/weightlifting/5.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/6.jpg',
thumbImage: '../../assets/weightlifting/6.jpg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/7.jpeg',
thumbImage: '../../assets/weightlifting/7.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/8.jpeg',
thumbImage: '../../assets/weightlifting/8.jpeg',
alt: 'image',
        title: ' '
    },
{
image: '../../assets/weightlifting/9.jpeg',
thumbImage: '../../assets/weightlifting/9.jpeg',
alt: 'image',
        title: ' '
    },
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Weightlifting');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Weightlifting'},
      {name: 'description', content: 'IIT (BHU) Varanasi Weightlifting teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

