import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  private url:string = "http://localhost:3000/contatos";

  public contato = {
    nome: "",  
  	tipo: "",  
  	telefone: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {

  }

  criarContato(contato){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, contato, options)
      .map(res => res.json())
      .subscribe(data => {
          const toast = this.toastCtrl.create({
            message: 'Contato salvo com sucesso!',
            showCloseButton: true,
            closeButtonText: 'OK'
          });
        toast.present();
        this.navCtrl.push(ContactPage);
          contato.nome = "";
          contato.tipo = "";
          contato.telefone = "";
      });
   }
}
