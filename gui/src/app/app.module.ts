import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
  ],
  providers: [
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }
  
  ngDoBootstrap() {
    console.log("Bootstrapping in Hybrid mode with Angular 15 & AngularJS 1.3.20");
    this.upgrade.bootstrap(document.body, ['syncthing', 'angularUtils.directives.dirPagination', 'pascalprecht.translate', 'ngSanitize', 'syncthing.core']);
  }
 }