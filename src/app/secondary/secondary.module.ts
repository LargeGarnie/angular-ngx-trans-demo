import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { SecondaryComponent } from './secondary.component'
import { WithIdComponent } from './with-id/with-id.component'

const routes: Routes = [
  {
    path: '',
    component: SecondaryComponent
  },
  {
    path: 'something/:id/with-id',
    component: WithIdComponent
  }
]

export function HttpLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/second/', '.json')
}

@NgModule({
  declarations: [SecondaryComponent, WithIdComponent],
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
