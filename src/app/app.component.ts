import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LojaNike';
  static chamarFuncao(chamarFuncao: any){
    throw new Error('Method not implemented.');
  }

  mensagem:string = 'nenhuma ação realizada ainda.';
  buttonColor = 'blue';
  chamarFuncao(): void {
    this.mensagem = 'Botao clicado! A função foi chamada com sucesso.';
    console.log('Função chamada ao clicar no botão.');
    this.buttonColor = 'red';
  }

  meuObjeto = {
    chave1: 'valor1',
    chave2: 'valor2',
    chave3: 'valor3',
  }

  obterTamanhoDoObjeto(): number{
    return Object.keys(this.meuObjeto).length;

  }
}
