import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [
    // https://github.com/ui-router/sample-app-angular-hybrid/blob/master/src/app/app.module.ts
    // Register some AngularJS services as Angular providers
    // { provide: 'DialogService', deps: ['$injector'], useFactory: getDialogService },
    // { provide: 'Contacts', deps: ['$injector'], useFactory: getContactsService },
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }
  
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
  }
 }
