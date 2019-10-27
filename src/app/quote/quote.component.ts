import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'quote';

  quotes: Quotes [] = [

    new Quotes ('Zig Ziglar', 'If you can dream it, you can achieve it.'),
    new Quotes ('Maya Angelou', 'Success comes by loving yourself, loving what you do and loving how you do it.'),
    new Quotes ('Donald Trump', 'As long as you are going to be thinking, think big.'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
