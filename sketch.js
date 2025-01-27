//variaveis da bolinha
let xBolinha= 290;
let yBolinha= 200;
let diametro= 35;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBolinha = 6; 
let velocidadeYBolinha = 6;

//variavel da raquete
let xRaquete = 9;
let yRaquete = 155;
let wRaquete = 11;
let hRaquete = 90
let colidiu = false;
 
//variaveis do oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 155;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
   
}

function setup() {
    createCanvas(600, 400);
  trilha.loop();
}

function draw() {
     background(0);
    mostraBolinha();
 movimentaBolinha();
  verificaColisao();
mostraraquete(xRaquete, yRaquete);
movimentaMinhaRaquete();
//verificaColisaoRaquete();
verificaColisaoRaquete(xRaquete, yRaquete);
mostraraquete(xRaqueteOponente, yRaqueteOponente);
movimentaRaqueteOponente();
verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}
function movimentaBolinha(){
 xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisao(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0  ) {velocidadeYBolinha *= -1}
}

function mostraraquete(x, y) {
    rect(x, y , wRaquete, hRaquete);
}




function movimentaMinhaRaquete(){
  if(keyIsDown( UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown( DOWN_ARROW)){
    yRaquete += 10;
}
}

function verificaColisaoRaquete(){
  if( xBolinha - raio <  xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1;
    raquetada.palay();
      }
}
function verificaColisaoRaquete(x, y){
  colidiu = hit = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
     velocidadeXBolinha *= -1;
    raquetada.play();
     }
  }

function movimentaRaqueteOponente(){
  if(keyIsDown("87")){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown("83")){
    yRaqueteOponente += 10;
}
  
}

function incluiPlacar(){
stroke(255);
textAlign(CENTER);
textSize(20);
fill(color(255,215,0));
rect(150, 10, 40, 20);
fill(255);
text(meusPontos, 170, 26);
fill(color(255,215,0));
rect(450, 10, 40, 20);
fill(255);
text(pontosOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 580) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 15) {
        pontosOponente += 1;
      ponto.play();
    }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}

