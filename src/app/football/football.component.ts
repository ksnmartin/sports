import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({

selector: 'app-football',
templateUrl: './football.component.html',
styleUrls: ['./football.component.scss']
})


export class  FootballComponent  implements OnInit {
  imageObject: Array<object> = [
];

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) { this.titleService.setTitle('Football');
  this.metaService.addTags([
      {name: 'keywords', content:'IIT (BHU),Football'},
      {name: 'description', content: 'IIT (BHU) Varanasi Football teams website page, list of captains and vice-captains and links to the clubs social media'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]);
      }
      ngOnInit(): void {
  }
  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }

}

