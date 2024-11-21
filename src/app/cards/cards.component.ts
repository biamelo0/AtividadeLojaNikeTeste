import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../model/services/product.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{

  constructor(private productsService:ProductService){}

  products: Iproduct[]=[];

  ngOnInit(): void{
    this.products = this.productsService.getProducts();
  }

  title = 'TestandoChamadaDeFuncao';
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

  changeColor() {
    this.buttonColor = '#ff4500';
  }


}
