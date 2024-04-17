import { Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Module1Module } from './module1/module1.module';

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
        component: Module1Module,
        loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module)
    }
];
