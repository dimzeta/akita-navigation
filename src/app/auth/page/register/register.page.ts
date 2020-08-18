import { delay } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
    form: FormGroup = this._fb.group({
        email: ['', [
            Validators.required,
            Validators.email
        ]],
        password: ['', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(64),
        ]],
        password_confirmation: ['', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(64),
        ]]
    })
    
    constructor(
        private _fb: FormBuilder,
        private _navCtrl: NavController,
    ) { }
        
    ngOnInit() {
    }

    ngOnDestroy() {
        
    }

    submit() {
        alert('Submitted register')
    }
    
}
        