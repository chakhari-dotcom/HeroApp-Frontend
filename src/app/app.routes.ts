import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ListComponent},
    {path: 'update/:id', component: UpdateComponent},
    {path: 'ajout', component: AjoutComponent},
    {path: '**', component: NotFoundComponent}
    

];
