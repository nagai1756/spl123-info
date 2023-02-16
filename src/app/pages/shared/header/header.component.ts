import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data!: Observable<any>
  types: string[] = []
  weaponDataAll = []
  weaponData = []
  weapons = []
  constructor(
    public dataService: DataService
  ) { }
  ngOnInit(): void {
    this.data = this.dataService.importData()
    this.data.subscribe(json => {
      this.weaponDataAll = json
      console.log(this.data)
      for (let i = 0; i < this.weaponDataAll.length; i++) {
        this.weaponData = this.weaponDataAll[i]
        for (let k = 0; k < this.weaponData.length; k++) {
          this.weapons.push(this.weaponData[k])
        }
      }
      for (let i = 0; i < this.weaponDataAll.length; i++) {
        this.types.push(this.weaponDataAll[i][0]['type'])
      }
      this.types.push('全て')
      console.log(this.types)
    })
  }
  stateChange(type: string) {
    this.dataService.selectedType = type
  }
}
