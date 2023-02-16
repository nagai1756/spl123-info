import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedType = '全て'
  selectedVersion = ''
  color = ''
  inputValue = '0'
  constructor(
    private http: HttpClient
  ) { }
  importSpl1Data() {
    return this.http.get('../../assets/spl1-weapon-data.json')
  }
  importSpl2Data() {
    return this.http.get('../../assets/spl2-weapon-data.json')
  }
  importSpl3Data() {
    return this.http.get('../../assets/spl3-weapon-data.json')
  }
  importData() {
    if (this.selectedVersion == 'spl1') this.color = 'accent'
    else if (this.selectedVersion == 'spl2') this.color == 'warn'
    else if (this.selectedVersion == 'spl3') this.color = 'primary'
    return this.http.get(`../../assets/${this.selectedVersion}-weapon-data.json`)
  }
}
