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
