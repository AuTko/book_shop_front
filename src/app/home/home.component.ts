import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {BookDTO} from '../DTO/bookDTO';
import {HttpErrorResponse} from '@angular/common/http';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books?: BookDTO[];
  form: any = {
    bookName: null,
    author: null,
    genre: null
  };
  isPressedFind = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getBookList().subscribe(
      data => {
        this.books = data;
      },
      err => {
        this.books = JSON.parse(err.error).message;
      }
    );
  }

  onSubmit(): void {

    const {bookName, author, genre} = this.form;
    this.isPressedFind = true;

    this.userService.getBookListByParameters(bookName, author, genre).subscribe(
      data => {
        this.books = data;
      },
      err => {
        this.books = JSON.parse(err.error).message;
      }
    );
  }

  onReset(): void {
    // reset whole form back to initial state
    this.isPressedFind = false;
    this.ngOnInit();

  }

}

/*
data => {
  this.books = data;
},
  err => {
    this.books = JSON.parse(err.error).message;
  }*/
