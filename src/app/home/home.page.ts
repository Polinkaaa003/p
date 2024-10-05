import { Component } from '@angular/core';

interface BookType {
  book_name:string
  book_author:string
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  list_name: string="My books"
  input_Name: string="--"
  input_Author: string="--"
  input_value: string="--"
  set_value: string="__"
  books: BookType[]=[]
  set_my_value(){
    this.books.push({book_name: this.input_Name, book_author: this.input_Author})
    this.set_value=this.input_value
  }
  constructor() {}
}

