var cinthia = { nome: "Cinthia", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var vinicius = { nome: "Vinicius", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var evandro = { nome: "Evandro", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

cinthia.pontos = calculaPontos(cinthia);
vinicius.pontos = calculaPontos(vinicius);
evandro.pontos = calculaPontos(vinicius);


function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

var jogadores = [cinthia, vinicius, evandro];

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}