import { Ingrediente } from "./ingrediente";
import { Produto } from "./produto";

export class Pizza extends Produto {
  id?: number
  sabor: string;
  private ingredientes: Ingrediente[] = [];
  tamanho: string;

  constructor(data: Partial<Pizza>) {
    super(data);
    this.id = data.id;
    this.sabor = data.sabor;
    this.tamanho = data.tamanho;
  }

  adicionarIngrediente(ingrediente: Ingrediente): void {
    this.ingredientes.push(ingrediente);
  }

  removerIngrediente(ingrediente: Ingrediente): void {
    this.ingredientes = this.ingredientes.filter(
      (ing) => ing.nome !== ingrediente.nome
    );
  }

}
