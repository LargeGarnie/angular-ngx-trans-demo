import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxtrans';

  activeLang = 'en'

  constructor(
    private translateService: TranslateService,
  ){
    this.translateService.use(this.activeLang)
  }

  changeLang(newLang: any){
    this.activeLang = newLang
    this.translateService.use(newLang)
  }
}
