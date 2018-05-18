import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminUserComponent, EditUserComponent, ListUserComponent } from "./component";


const userRoutes: Routes = [
    {
        path: "admin-users",
        component: AdminUserComponent,
        pathMatch: "full"
    },
    {
        path: "edit-user/:id",
        component: EditUserComponent,
        pathMatch: "full"
    },
    {
        path: "list-user",
        component: ListUserComponent,
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class ZsUserRoutingModule {}
