//BTN MUDAR A COR DE FUNDO
const btna = document.querySelector("#color-selector")

const body2 = document.querySelector("#clock")

const colors = ['blue', 'green', 'pink', 'yellow', 'red', 'brown', 'purple', 'orange', 'gold', 'aqua', 'white', 'gray', 'azure']

function changeTheBackground()
{
    const colorIndex = parseInt(Math.random() * colors.length)

    body2.style.backgroundColor = colors[colorIndex]
}

body2.style.backgroundColor = 'red'

btna.addEventListener('click', changeTheBackground)
//RELÓGIO ANALÓGICO
const deg = 6;

const hr = document.querySelector('#hr')

const min = document.querySelector('#min')

const sec = document.querySelector('#sec')

setInterval(() => 
{
    let day = new Date();

    let hh = day.getHours() * 30;

    let mm = day.getMinutes() * deg;

    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;

    min.style.transform = `rotateZ(${(mm)}deg)`;

    sec.style.transform = `rotateZ(${(ss)}deg)`
})
//CONTADOR DE PALAVRAS
var countTarget = document.querySelector("#word-count-input");

var wordCount = document.querySelector("#word-count");

var characterCount = document.querySelector("#character-count");

var count = function()
{
    var characters = countTarget.value;

    var charactersLength = characters.length;

    var words = characters.split(/[nrs]+/g).filter(function (word)
    {
        return word.length > 1;
    });

    wordCount.innerHTML = words.length;

    characterCount.innerHTML = charactersLength;
};

count();

window.addEventListener("input", function (event) 
    {
        if(event.target.matches("#word-count-input"))
        {
            count();
        }
    }, false
);
//CALCULADORA FINANCEIRA
var n1 = document.querySelector('#display-finp')

var n2 = document.querySelector('#display-fini')

var n3 = document.querySelector('#display-finn')

var resultado = document.querySelector('#display-fin')


function fin()
{
    resultado = parseFloat(n1.value) * ( 1 + parseFloat(n2.value) ) ** parseFloat(n3.value)

    document.getElementById('display-fin').innerHTML = resultado;
}
//TIMER
"use strict"

var hour = 0;
var minutes = 0;
var second = 0;
let isCron = false;

var time = 1000;
var cron;

const h1 = document.querySelector('#counter')

function start()
{
    if(isCron==false)
    {
        h1.style.backgroundColor = '#39ff14'
        cron = setInterval(() => { timer(); }, time);
        isCron = true
    }
}

function pause()
{
    h1.style.backgroundColor = '#ffe135'
    clearInterval(cron);
    isCron=false
}

function stop()
{
    h1.style.backgroundColor = '#ffe135'
    clearInterval(cron);
    hour = 0;
    minutes = 0;
    second = 0;
    isCron=false
    document.getElementById('counter').innerText = '00:00:00';
}

function timer()
{
    second++;
    if(second == 60)
    {
        second = 0;
        minutes++;

        if(minutes == 60)
        {
            minutes = 0;
            hour++;
        }
    }
    var format = (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (second < 10 ? '0' + second : second);
    document.getElementById('counter').innerText = format;
}