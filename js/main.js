let regoleDelFightClub = {
    "Prima regola del Fight Club" : ["1","Non parlare del Fight Club."],
    "Seconda regola del Fight Club" : ["2","NON PARLARE del Fight Club."],
    "Terza regola del Fight Club" : ["3","Se qualcuno grida basta, si accascia, è spompato, fine del combattimento."],
    "Quarta regola del Fight Club" : ["4","Solo due persone a combattimento."],
    "Quinta regola del Fight Club" : ["5","Solo un combattimento alla volta."],
    "Sesta regola del Fight Club" : ["6","Niente maglietta, niente scarpe."],
    "Settima regola del Fight Club" : ["7","I combattimenti durano quello che devono durare."],
    "Ottava regola_del_Fight_Club" : ["8","Se è la vostra prima notte al Fight Club, dovete combattere."]
}
let id = 0;
let ulElementi = document.querySelector("ul");
function stampaLista(){
    for (let key in regoleDelFightClub) {
        let liElemento = document.createElement("li");
        let liBefore = document.querySelector("li:before");
        let span = document.createElement("span");
        let btnCancella = document.createElement("button");
        // let image = document.createElement("img");
        // image.src = './images/soap.png';
        // image.width = '32';
        btnCancella.id = id;
        btnCancella.className = 'delete';
        //console.log(regoleDelFightClub);
        
        
        let spanNumRegola = document.createElement("span");
        spanNumRegola.innerHTML = regoleDelFightClub[key][0];
        
        btnCancella.onclick = function() { eliminaSingolo(id,key); };
        //btnCancella.setAttribute("onclick", "eliminaSingolo(" + id + "," + key + ")");
        
        let h3 = document.createElement("h3");
        // label.htmlFor = checkBox.id;
        h3.innerHTML = key+ ':<br>';

        ulElementi.append(liElemento);
        //liElemento.prepend(checkBox);
        liElemento.append(spanNumRegola);
        span.append(h3);
        span.innerHTML += regoleDelFightClub[key][1];
        liElemento.append(span);
        liElemento.append(btnCancella);
        // btnCancella.append(image);
        id++;
        // console.log('dopo i++: ' + id);
        
    }
}
stampaLista();
function eliminaSingolo(idDaEliminare,key) {
    console.log(idDaEliminare);
    console.log(regoleDelFightClub[key]);
    delete regoleDelFightClub[key];
    console.log(regoleDelFightClub[key]);
    console.log(regoleDelFightClub);
    ulElementi.innerHTML = '';
    id = 0;
    stampaLista();
}
