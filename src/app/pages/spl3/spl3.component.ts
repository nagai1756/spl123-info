import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-pages',
  templateUrl: './spl3.component.html',
  styleUrls: ['./spl3.component.scss']
})
export class Spl3Component {
  data!: Observable<any>
  weaponDataAll = []
  weaponData = []
  weapons = []
  constructor(
    public dataService: DataService
  ) {
  }
  ngOnInit(): void {
    this.dataService.selectedVersion = 'spl3'
    this.dataService.selectedType = '全て'
    this.dataService.color = 'primary'
    this.data = this.dataService.importData()
    this.data.subscribe(json => {
      this.weaponDataAll = json
      console.log(this.weaponDataAll)
      for (let i = 0; i < this.weaponDataAll.length; i++) {
        this.weaponData = this.weaponDataAll[i]
        for (let k = 0; k < this.weaponData.length; k++) {
          this.weapons.push(this.weaponData[k])
        }
      }
      console.log(this.weapons)
    })
  }
}
