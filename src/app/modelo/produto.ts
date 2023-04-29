import { ProdutoTelaComponent } from "../componentes/produto-tela/produto-tela.component";

export class Produto {
    //_nome: string;
    /*_tipo: string;
    _preco: number;*/

    constructor(public nome: string = '', public tipo: string ='', public preco: number){ 
       /* this._tipo = tipo;
        this._preco = preco;*/
    }
    
}
