import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.service';

@Component({
  selector: 'spa-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: any;

  constructor(private bookService: BookService) { 
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe(data => {
      this.livros = data;
    });
  }

}
