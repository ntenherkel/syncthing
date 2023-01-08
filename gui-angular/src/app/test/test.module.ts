import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { downgradeComponent } from '@angular/upgrade/static';
import { TestComponent } from './test.component';


declare var angular: any;

angular.module('test', [])
  .directive(
    'testComponent',
    downgradeComponent({ 
      component: TestComponent,
      inputs: ['testInput'],
      outputs: ['testOutputEvent'] })
  );

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponent],
  exports: [TestComponent],
})
export class TestModule { }