import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/modelo/produto';


@Component({
  selector: 'app-produto-tela',
  templateUrl: './produto-tela.component.html',
  styleUrls: ['./produto-tela.component.css']


})
export class ProdutoTelaComponent implements OnInit {
  nome:string = '';
  tipo: string = '';
  preco!: number;
 

  constructor(){
  }

  ngOnInit(): void {
      
  }

  produtos: Produto []=[];

  criartime(): void{
    let newproduto = new Produto(this.nome, this.tipo, this.preco);
    this.nome='';
    this.tipo='';
    this.cadastrarRepositorio(newproduto);
    
}

  cadastrarRepositorio(produto:Produto){
    this.produtos.push(produto);
    console.log(this.produtos);

  }

  remover(nomeproduto:string): void{
    let index = this.produtos.findIndex(obj => obj.nome == nomeproduto);
    if(index > -1){
      this.produtos.splice(index, 1);
    }

  }

  editar(i:number, nome: string, tipo: string, preco: number): void {
    let produto = this.produtos[i]
    produto.nome = nome;
    produto.tipo = tipo;
    produto. preco = preco;
  }

}
