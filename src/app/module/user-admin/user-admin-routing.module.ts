import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminUserComponent, EditUserComponent, ListUserComponent } from "./component";


const userRoutes: Routes = [
    {
        path: '',
        redirectTo: 'admin-users',
        pathMatch: 'full'
    },
    {
        path: "admin-users",
        component: AdminUserComponent
    },
    {
        path: "edit-user/:id",
        component: EditUserComponent
    },
    {
        path: "list-user",
        component: ListUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserAdminRoutingModule {}
