// inserisco in una costante l'elemento container

const gridElement = document.getElementById('grid');

// inserisco in una costante l'elemento bottone

const playButton = document.getElementById('play-btn');

//inserisco in una costante l'elemento selettore di difficoltà

const difficultySelector = document.getElementById('difficolta');

//funzione per l'inizio del gioco una volta premuto il bottone

playButton.addEventListener('click' , function () {

})






// ciclo per la creazione degli square 
for (let i=1; i<64;i++){

    const node = document.createElement('div'); // creo un div

    node.classList.add('square'); // aggiungo al div la classe square

    node.addEventListener('click' , function () {

        console.log(this);

        this.classList.add('checked'); //se premuto arttivo la classe checked che colora lo square

    })
    
    gridElement.appendChild(node) // uso appendchild per inserire 

}






//FUNZIONI


function ScegliDiff() {

}