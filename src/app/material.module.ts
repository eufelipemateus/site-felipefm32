import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
	MatListModule,
	MatSelectModule,
	MatSnackBarModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
		NoopAnimationsModule,
		MatListModule,
		MatSelectModule ,
		MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
		NoopAnimationsModule,
		MatListModule,
		MatSelectModule ,
		MatSnackBarModule,
    ]
})
export class MaterialModule { }