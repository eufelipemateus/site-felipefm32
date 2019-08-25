import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../seo.service';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-curriculo-page',
  templateUrl: './curriculo-page.component.html',
  styleUrls: ['./curriculo-page.component.scss']
})
export class CurriculoPageComponent implements OnInit {

	constructor(private seo:SeoService, private _title:Title) { }

	ngOnInit() {
		this._title.setTitle('Curriculo');

		this.seo.generateTags({
			title: 'Curriculo', 
			description:'Contrate-me agora veja meu curriculo e entre em contato comigo. Sinopse do Site: Olá, Eu sou Felipe Mateus e seja bem vindo ao meu mundo azul.', 
		});
	}

}
