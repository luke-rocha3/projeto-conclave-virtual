const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

//Números fixos de cardeais e eleitores!
const NUMERO_DE_CARDEAIS = 5;
const NUMERO_DE_ELEITORES = 5;

//lógica para ser o vencedor! math = calculadora da linguagem
const VOTOS_VENCEDOR = Math.ceil((2 / 3) * NUMERO_DE_ELEITORES);

//ler e escrever no terminal
const rl = readline.createInterface({ input, output });

async function main() {
    console.log("\n--- BEM-VINDO AO CONCLAVE VIRTUAL - ELEIÇÃO DO PAPA ---\n");

    //Array para armazenar os objetos dos cardeais.
    const cardeais = [];

    console.log("---FASE DE CADASTRO DE NOMES DOS CARDEAIS");

    for (let i = 0; i < NUMERO_DE_CARDEAIS; i++) {
        const nome = await rl.question(`Digite o nome do cardeal #${i + 1}: `);
        cardeais.push({
            id: i + 1,
            nome: nome,
            votos: 0
        });
    }
  console.log('\n✅ Cadastro concluído!\n');

  rl.close();

}
main();
