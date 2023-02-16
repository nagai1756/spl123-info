import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-spl2-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data!: Observable<any>
  weaponDataAll = []
  weaponData = []
  weapons = []
  types: string[] = []
  constructor(
    private dataService: DataService
  ) {
    this.data = this.dataService.importSpl2Data()
  }
  ngOnInit(): void {
    this.data.subscribe(json => {
      this.weaponDataAll = json
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
    console.log(this.dataService.selectedType)
  }
}
