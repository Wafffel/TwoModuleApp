import { Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Module1Module } from './module1/module1.module';
import { Module1Component } from './module1/module1.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'component1',
        pathMatch: 'full'
    },
    {
        path: 'component1',
        component: Component1Component
    },
    {
        path: 'module1',
        component: Module1Component,
        loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module)
    }
];
