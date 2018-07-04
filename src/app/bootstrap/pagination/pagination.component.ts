import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  currentPage: number;
  currentPage2: number;
  currentPage3: number;
  currentPage4: number;
  totalItems: number;
  page: number;
  smallnumPages = 0;
  showBoundaryLinks = true;
  showDirectionLinks = true;
  disabled = false;

  constructor() { }

  ngOnInit() {
    this.currentPage = 4;
    this.currentPage2 = 3;
    this.currentPage3 = 2;
    this.totalItems = 45;
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  pageChanged(event: any): void {
    this.page = event.page;
  }

}
