import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  constructor(
    private dataService: DataService
  ) { }
  selectVersion(ver: string) {
    this.dataService.selectedVersion = ver
  }
}
