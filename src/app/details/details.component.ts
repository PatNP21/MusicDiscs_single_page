import { SerwisService } from './../serwis.service';
import { Disc } from './../disc';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  disc: Disc;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private sS: SerwisService,
    private loc: Location
  ) { }

  backLocation() {
    this.loc.back();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.disc = this.sS.getDisc(Number(id));
  }

}
