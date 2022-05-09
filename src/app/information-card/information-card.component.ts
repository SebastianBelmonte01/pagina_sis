import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent implements OnInit {
  @Input() list: string[];
  @Input() title: string;
  @Input() generalTitle: string;
  @Input() img: string;


  constructor() {
    this.list = [];
    this.title= '';
    this.generalTitle = '';
    this.img = '';
  }

  ngOnInit(): void {
  }

}
