import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { SecondaryComponent } from './secondary.component'

const routes: Routes = [
  {
    path: '',
    component: SecondaryComponent
  }
]

export function HttpLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/second/', '.json')
}

@NgModule({
  declarations: [SecondaryComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoader,
        deps: [HttpClient]
      },
      extend: true
    }),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),

  ],
  exports:[RouterModule]
})
export class SecondaryModule {
  constructor(private translateService: TranslateService){
    translateService.use(translateService.currentLang)
  }
}
