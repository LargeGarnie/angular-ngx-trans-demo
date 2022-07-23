import { Location } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings, ManualParserLoader } from '@gilsdav/ngx-translate-router'
import { TranslateService } from '@ngx-translate/core'
import { MainComponent } from './main/main.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'secondary',
    loadChildren: () => import('./secondary/secondary.module').then(module => module.SecondaryModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: (translate: TranslateService, location: Location, settings: LocalizeRouterSettings) =>
          new ManualParserLoader(translate, location, {...settings, alwaysSetPrefix: false}, ['fr', 'en']),
        deps: [TranslateService, Location, LocalizeRouterSettings]
      }
    })
  ],
  exports: [RouterModule, LocalizeRouterModule],

})
export class AppRoutingModule { }
