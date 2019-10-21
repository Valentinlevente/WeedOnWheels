// variable section //
var moreIndica = document.getElementById('indicaButton');
var moreSativa = document.getElementById('sativaButton');
var moreCookie = document.getElementById('cookieButton');


var purpleBud = document.getElementById('purple-bud');
var bubbaOG = document.getElementById('bubbaog');
var extremeOG = document.getElementById('extremeog');
var jackHerer = document.getElementById('jeckherer');
var superLemonHaze = document.getElementById('superlemonhaze');
var greenCrack = document.getElementById('greencrack');
var weedcookie = document.getElementById('weedcookie');
var weedoreo = document.getElementById('weedoreo');
var dankdonout = document.getElementById('dankdonout');

var yesBtn = document.getElementById('yes')
var noBtn = document.getElementById('no')


// trigger section //
moreIndica.addEventListener('click', picturesSeen);
moreSativa.addEventListener('click', picturesSeen);
moreCookie.addEventListener('click', picturesSeen);

purpleBud.addEventListener('click', weedSeen);
bubbaOG.addEventListener('click', weedSeen);
extremeOG.addEventListener('click', weedSeen);
jackHerer.addEventListener('click', weedSeen);
superLemonHaze.addEventListener('click', weedSeen);
greenCrack.addEventListener('click', weedSeen);
weedcookie.addEventListener('click', weedSeen);
weedoreo.addEventListener('click', weedSeen);
dankdonout.addEventListener('click', weedSeen);

yesBtn.addEventListener('click', yesF);
noBtn.addEventListener('click', noF);

//function section //

//----------------kepek megjelenítése-----------//
var y = 1;
function picturesSeen() {
    var rowId = this.attributes.id.value;
    var button = document.getElementById(rowId);
    var rowExpand = document.getElementById(rowId + '-on');
    if (y == 1){
        rowExpand.style.maxHeight = '1400px';
        button.innerHTML = "Back";
        y=0;
    }else if (y == 0){
        rowExpand.style.maxHeight = '0px';
        button.innerHTML = "I want it";
        y=1;
    }
}
//--------------kepek kicsinyitése nagyobbitasa szoveg megjelenítese-----------//
var x = 0;
function weedSeen() {    
    var weedKindId = this.attributes.id.value;
    var weedKind = document.getElementById(weedKindId);
    var weedKindDescription = document.getElementById(weedKindId + '-d');
    if (x == 0){
        weedKindDescription.style.display = "inline-block";
        weedKind.style.width = "7vw";
        x=1;
    }else if (x == 1){
        weedKindDescription.style.display = "none";
        weedKind.style.width = "18vw";
        x=0;
    }
    console.log(x);
}

//---------------------------------yes or no?---------------------------//
function yesF (){
    location.href = "newsletter.html";
}
function noF (){
    location.href = "index2.html";
}



