import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { downgradeComponent } from '@angular/upgrade/static';
import { HelloComponent } from './hello.component';

declare var angular: any;

angular.module('syncthing')
  .directive(
    'hello',
    downgradeComponent({ component: HelloComponent })
  );

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent],
})
export class HelloModule { }