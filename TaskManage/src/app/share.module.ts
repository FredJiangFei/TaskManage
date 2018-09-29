import { IdToUserPipe } from './_pipes/id-to-user.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { LaddaModule } from 'angular2-ladda';
import { PasswordDirective } from './_directives/password.directive';
import { SpinnerDirective } from './_directives/spinner.directive';
import { DragDirective } from './_directives/drag.directive';
import { DropDirective } from './_directives/drop.directive';

@NgModule({
    declarations: [
        PasswordDirective,
        SpinnerDirective,
        DragDirective,
        DropDirective,
        IdToUserPipe
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        LaddaModule,

        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        CdkTableModule,
        MatTabsModule,
        MatBadgeModule,
        MatPaginatorModule,
        MatChipsModule,

        PasswordDirective,
        SpinnerDirective,
        DragDirective,
        DropDirective,
        IdToUserPipe
    ]
})
export class ShareModule { }
