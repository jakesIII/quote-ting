import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  
  @Input() quote:Quotes;  

  @Output() isDeleted = new EventEmitter <boolean>();

  quoteDelete(complete:boolean){
    this.isDeleted.emit(complete);
  }

  upVote = 0;

  voteUp(){
    this.upVote +=1
  }

  downVote = 0;

  voteDown(){
    this.downVote +=1
  }
  constructor() { }

  ngOnInit() {
  }

}
