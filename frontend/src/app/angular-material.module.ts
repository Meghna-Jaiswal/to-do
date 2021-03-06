import { NgModule } from "@angular/core";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import{ MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    
    exports:[
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatPaginatorModule
    ]
})
export class AngularMaterialModule{}