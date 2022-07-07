import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { CreateTaskComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    declarations:[
        CreateTaskComponent,
        ListComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        AngularMaterialModule,
    ]
})
 export class TasksModule{}