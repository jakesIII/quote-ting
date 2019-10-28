import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  
  @Input() quote:Quote;

  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(toDelete:boolean){
    this.isDelete.emit(toDelete);
  }

  constructor() { }

  ngOnInit() {
  }

}
