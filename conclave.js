// Importa o módulo readline para I/O (Entrada/Saída) assíncrono.
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const NUMERO_DE_CARDEAIS = 5;
const NUMERO_DE_ELEITORES = 5;
// Calcula o número de votos necessários (2/3 de 5, arredondado para cima = 4).
const VOTOS_PARA_VENCER = Math.ceil((2 / 3) * NUMERO_DE_ELEITORES);

// para ler e escrever no terminal.
const rl = readline.createInterface({ input, output });

async function main() {
    console.log('=== CONCLAVE VIRTUAL - ELEIÇÃO DO PAPA ===\n');

    // Objetivo: Vetores. Array para armazenar os objetos dos cardeais.
    const cardeais = [];

    console.log('--- Fase de Cadastro dos Cardeais ---');
    

    for (let i = 0; i < NUMERO_DE_CARDEAIS; i++) {

        // Pede o nome do cardeal e aguarda a resposta do usuário.
        const nome = await rl.question(`Digite o nome do cardeal #${i + 1}: `);

        // Adiciona o novo cardeal ao array com ID automático e votos zerados.
        cardeais.push({
            id: i + 1,
            nome: nome,
            votos: 0, 
        });
    }
    console.log('\n✅ Cadastro concluído!\n');

    
    console.log('--- O Conclave foi iniciado. A votação começará agora! ---\n');

    let vencedor = null;
    let rodada = 0;

    // Continua as rodadas até um vencedor ser eleito.
    while (!vencedor) {
        rodada++;
        console.log(`--- Rodada de Votação #${rodada} ---`);

        // Zera os votos de todos os cardeais antes de iniciar a nova rodada.
        for (const cardeal of cardeais) {
            cardeal.votos = 0;
        }

        // Coleta o voto de cada um dos 5 eleitores.
        for (let i = 0; i < NUMERO_DE_ELEITORES; i++) {
            console.log('\n------------------------------------------');
            console.log(`Eleitor #${i + 1}, por favor, vote.`);

            console.log('Escolha um cardeal para ser o novo Papa:');

            // Percorre a lista de cardeais e exibe cada um na tela
            // Formato: [id] + nome do cardeal 
            cardeais.forEach((cardeal) => {
                console.log(`[${cardeal.id}] - ${cardeal.nome}`);
            });

            // garantir que o voto seja um número válido.
            let votoValido = false;
            while (!votoValido) {
                const votoInput = await rl.question('Digite o número do seu candidato: ');
                const votoId = parseInt(votoInput);

                // Verifica se o ID votado corresponde a um cardeal existente.
                const candidatoVotado = cardeais.find(c => c.id === votoId);

                if (candidatoVotado) {
                    // Incrementa o voto do candidato.
                    candidatoVotado.votos++;
                    console.log('Voto computado com sucesso!');
                    votoValido = true; // Quebra o loop de validação.
                } else {
                    console.log('❌ Número inválido! Por favor, escolha um dos números da lista.');
                }
            }
        }

        // Exibe o placar final da rodada.
        console.log('\n--- Resultado da Rodada #' + rodada + ' ---');
        cardeais.forEach(cardeal => {
            console.log(`Cardeal ${cardeal.nome}: ${cardeal.votos} voto(s)`);
        });
        console.log('------------------------------');

        // Verifica se algum cardeal atingiu a meta de votos.
        for (const cardeal of cardeais) {
            if (cardeal.votos >= VOTOS_PARA_VENCER) {
                vencedor = cardeal; // Define o vencedor.
                break; // Interrompe a verificação, pois já temos um Papa.
            }
        }

        if (vencedor) {
            // Se houver vencedor, encerra a votação e mostra o resultado.
            console.log('\n======================================================');
            console.log('✝️ HABEMUS PAPAM! ✝️');
            console.log(`O novo Papa é o Cardeal ${vencedor.nome.toUpperCase()}!`);
            console.log(`Ele foi eleito com ${vencedor.votos} votos.`);
            console.log('======================================================\n');
        } else {
            //Se não houver vencedor, informa e inicia uma nova rodada automaticamente.
            console.log(`Nenhum cardeal alcançou os ${VOTOS_PARA_VENCER} votos necessários.`);
            console.log('Uma nova rodada de votação será iniciada...\n');
        }
    }

    rl.close();
}
main();