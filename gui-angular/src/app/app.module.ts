import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    TestModule,
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