import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  
  @Input() quote:Quote;  

  @Output() isDeleted = new EventEmitter <boolean>();

  quoteDelete(complete:boolean){
    this.isDeleted.emit(complete);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
