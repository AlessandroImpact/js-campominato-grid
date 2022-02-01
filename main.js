// inserisco in una costante l'elemento container

const grid = document.getElementById('cont-2');

// inserisco in una costante l'elemento bottone

const play = document.getElementById('play');

//inserisco in una costante l'h1 che sparirà con il click su 'play'

const regole = document.getElementById('regolamento');

//inserisco in una costante l'elemento selettore di difficoltà

const select = document.getElementById('select');



//funzione per l'inizio del gioco una volta premuto il bottone

//controllo la difficioltà selezionata e

play.addEventListener('click', function() {
    grid.innerHTML = '';

    let numBox;
    let diff;

    if (select.value == 'Insane') {
         numBox = 49;
         diff = 'Insane';
    
    } else if (select.value == 'Medium') {
         numBox = 81;
         diff = 'Medium';
    
    } else {
         numBox = 100;
         diff = 'Easy';
    }

    //creo dinamicamente la griglia 

    for (let i = 1; i <= numBox; i++) {
        const node = document.createElement('div');
        node.innerHTML = i;
        node.classList.add('square' + diff);  // aggiungo la classe in base alla diff 
        
        node.classList.add('appoggio');   // aggiungo una classe nuova per evitare che square sia lultima classe dell'elenmento corrente

        node.addEventListener('click', handleCellClick);

        grid.appendChild(node);
    }

    //ciclo per il click random degli square che attiva le bombe

    for (let i = 0; i <= 16; i++) {
        let elements = document.querySelectorAll('.appoggio')
        let random1 = Math.floor(Math.random() * elements.length);
        
        elements[random1].addEventListener('click', function() 
            {
                this.classList.add('squareRed');
                setTimeout(() => {alert('Hai beccato una mina!')}, 200);
                setTimeout(() => {grid.innerHTML = ''}, 1000);
            })
    }
})



function handleCellClick (){

    this.classList.add('squareBlue');

    this.removeEventListener('click' , handleCellClick); //impedisco di ricliccare

}

























/* ciclo per la creazione degli square 
for (let i=1; i<64;i++){

    const node = document.createElement('div'); // creo un div

    node.classList.add('square'); // aggiungo al div la classe square

    node.addEventListener('click' , function () {

        console.log(this);

        this.classList.add('checked'); //se premuto arttivo la classe checked che colora lo square

    })
    
    gridElement.appendChild(node) // uso appendchild per inserire 

}






*/

