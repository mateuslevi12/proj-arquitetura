import { Animal } from "./Animal";
import { DiarioAlimentacao } from "./DiarioAlimentacao";
import { Dieta } from "./Dieta";

const dietaLeao = new Dieta("Carne", 10);
const dietaElefante = new Dieta("Frango", 20);

const leao = new Animal("Leão", dietaLeao);
const elefante = new Animal("Elefante", dietaElefante);

const diarioAlimentacao = new DiarioAlimentacao();
const dataDeHoje = new Date();

diarioAlimentacao.registrarAlimentacao(leao, dataDeHoje);
diarioAlimentacao.registrarAlimentacao(elefante, dataDeHoje);

console.log("Registros de Alimentação:");
diarioAlimentacao.listarRegistros();

console.log(`Necessidades alimentares do ${leao.nome}: ${leao.obterDieta()}`);
console.log(`Necessidades alimentares do ${elefante.nome}: ${elefante.obterDieta()}`);