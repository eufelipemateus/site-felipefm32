import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {SeoService} from '../../seo.service';



export class ContactResponse {
  msg: string;
}

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

	contact={name:null,subject:null,email:null,telephone:null,message:null};
	contactForm: FormGroup;
	

	constructor(private http:HttpClient, private snackBar: MatSnackBar,private seo:SeoService, private _title:Title) { }

	ngOnInit() {
		this._title.setTitle('Entrar em contato');
		this.seo.generateTags({
			title: 'Entre em contato', 
			description:'Entre em contato comigo agora. Sinopse do Site: Olá, Eu sou Felipe Mateus e seja bem vindo ao meu mundo azul.', 
		})
		
		this.contactForm = new FormGroup({
			'name': new FormControl(this.contact.name, [
			  Validators.required,
 			]),
			'subject': new FormControl(this.contact.subject),
			'email': new FormControl(this.contact.email, Validators.required),
			'telephone': new FormControl(this.contact.telephone, Validators.required),
			'message': new FormControl(this.contact.message, Validators.required)
		});
	}

	onSubmit() { 
		this.http.post("/sendContact",this.contactForm.value).subscribe((response:ContactResponse) =>{
			if(response){
				this.snackBar.open(response.msg,"Fechar").onAction().subscribe(() => {
					this.snackBar.dismiss();
				});
			}
		});	
	}
}
