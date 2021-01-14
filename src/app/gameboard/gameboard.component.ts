import { Component, OnInit, Input, Output } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
 })
export class GameboardComponent implements OnInit {

  @Input() cells;
  @Input() generation;
  myDate = new Date();

  constructor() { }

  ngOnInit() {
  }
    
  changeCellStatus (row: number, col: number, isAlive: boolean) {
    let selectedCell = this.cells[row][col];
    selectedCell.isAlive = !selectedCell.isAlive;
  }

}