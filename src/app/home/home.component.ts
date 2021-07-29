import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {BookDTO} from '../DTO/bookDTO';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books?: BookDTO[];

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

}

/*
data => {
  this.books = data;
},
  err => {
    this.books = JSON.parse(err.error).message;
  }*/
