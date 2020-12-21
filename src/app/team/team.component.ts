import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) {
    this.titleService.setTitle('Team');
    this.metaService.addTags([
      { name: 'keywords', content: 'Games and Sports Council (GSC) | IIT (BHU), Varanasi ,council members' },
      { name: 'description', content: 'list of council members and the clubs of IIT (BHU) GSC' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]);
  }

  ngOnInit(): void {
  }

    public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }


}
