import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    console.log(this.translateService.currentLang)
    this.translateService.use(this.translateService.currentLang)
  }

  ngOnInit(): void {
  }

}
