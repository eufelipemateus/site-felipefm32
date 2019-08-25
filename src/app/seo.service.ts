import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config) {
    // default values
    config = { 
      title: 'Felipe Mateus - @felipefm32', 
      description: 'Olá, Eu sou Felipe Mateus e seja bem vindo ao meu mundo azul.', 
      image: 'https://instafire-app.firebaseapp.com/assets/images/avatar.png',
      slug: '',
      ...config
    }

    this.meta.updateTag({ name: 'description', content: config.description });  
	this.meta.updateTag({ name: 'author', content: "Felipe Mateus" });
	
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@feliepfm32' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:locale', content: 'pt-BR' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Felipe Mates' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:image:alt',content: "Avatar Felipe Mateus" });
    this.meta.updateTag({ property: 'og:url', content: `https://felipefm32.com/${config.slug}` });
    this.meta.updateTag({ property: 'fb:app_id', content: "390966160994721" });
  }

}