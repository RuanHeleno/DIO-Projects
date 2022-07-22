import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/books.model';

@Component({
  selector: 'spa-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  livro!: Book;
  url = "";

  constructor() { }

  ngOnInit(): void {
  }

}
