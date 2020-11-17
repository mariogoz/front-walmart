import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() filter: string;

  pageSize: any;
  page: any;
  items: any = [
    {
      id: 2,
      current: 123,
      offset: 12313
    },
    {
      id: 5,
      current: 555555,
      offset: 12313
    },
    {
      id: 9,
      current: 555555,
      offset: 12313
    },
    {
      id: 9,
      current: 5555,
      offset: 12313
    },
    {
      id: 9,
      current: 123,
      offset: 12313
    },
    {
      id: 9,
      current: 666666,
      offset: 12313
    },
    {
      id: 9,
      current: 99999,
      offset: 12313
    },
    {
      id: 9,
      current: 123,
      offset: 12313
    },
    {
      id: 9,
      current: 123,
      offset: 12313
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.pageSize = 3;
    this.page = 1;
    console.log('call filter', this.filter);
  }

}
