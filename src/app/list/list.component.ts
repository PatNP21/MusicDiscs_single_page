import { SerwisService } from './../serwis.service';
import { Disc } from './../disc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private sS: SerwisService) { }

  dysk: Disc[];

  ngOnInit(): void {
    this.dysk = this.sS.allDiscs();
    console.table(this.dysk);
  }

}
