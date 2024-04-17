import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentInside1Component } from '../component-inside1/component-inside1.component';
import { ComponentInside2Component } from '../component-inside2/component-inside2.component';
import { Module1Component } from './module1.component';

const routes: Routes = [
  { path: 'componentInside1', component: ComponentInside1Component },
  { path: 'componentInside2', component: ComponentInside2Component }
];

@NgModule({
  declarations: [
    Module1Component,
    ComponentInside1Component,
    ComponentInside2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Module1Component,
    RouterModule
  ]
})
export class Module1Module { }
