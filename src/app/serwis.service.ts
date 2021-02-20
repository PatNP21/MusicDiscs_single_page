import { Injectable } from '@angular/core';
import { Disc } from './disc';

@Injectable({
  providedIn: 'root'
})
export class SerwisService {

  disc: Disc[] = [
    {id: 0, name: 'Płyta winylowa', year_of_inventing:'lata 80 XIX w.', purpose: 'adaptery, gramofony', description: 'Jest okrągłą płytą o średnicy 30 cm. Zapis przebiega spiralnie analogowym nagraniem dźwiękowym. Zwykle wykonywana z ebonitu, szelaku bądź chlorku winylu.'},
    {id: 1, name: 'Kaseta magnetofonowa', year_of_inventing: 1963, purpose: 'magnetofony kasetowe', description: 'Jest kasetą zawierającą taśme magnetyczną, przeznaczona do magnetofonów kasetowych. Opracowana przez firmę Philips. Służy ogólnie do przetrzymywania danych. Wymiary: 102mm X 64mm X 12mm.'},
    {id: 2, name: 'Płyta kompaktowa', year_of_inventing: 1982, purpose: 'odtwarzacze CD', description: 'Jest dyskiem optycznym opracowanym wspólnie przez koncerny Philips a także Sony, miał swoją premierę w 1980 roku. Mimo mniejszych rozmiarów niż płyta winylowa cechuje się większą pojemnością a także niską ceną nabycia.'}
  ];

  allDiscs = (): Disc[] => {
    return this.disc;
  }

  getDisc = (id: number): Disc => {
    return this.disc[id];
  }

  constructor() { }
}
