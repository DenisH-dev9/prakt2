/* --- COLORTABLE --- */
let colorTable = document.querySelector('#colorTable');


/* Create table */

createTable(colorTable, 10, 10);

    function createTable(parent, columns, rows) {
        let table = document.createElement('table');

        for(let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');

            for(let j = 0; j < columns; j++) {
                let td = document.createElement('td');

                td.id = 'cell';
                
                tr.appendChild(td);
            }
            tr.id = 'section';
            table.appendChild(tr);
        }

        parent.appendChild(table);
    };

/* ./Create table */


/* Left click */

    let tableElem = document.querySelector('#colorTable');

    tableElem.addEventListener('click', function(event) {
    event.target.classList.toggle('leftClicked');
    event.target.classList.remove('doubleClass');
});

/* ./Left click */


/* Right click */

tableElem.addEventListener('contextmenu', function(event) {
    event.target.classList.toggle('rightClicked');
    event.target.classList.remove('doubleClass');
    event.preventDefault();
});

/* ./Right click */


/* Double class effect */

tableElem.addEventListener('click', function(event) {
    if(event.target.classList.contains('leftClicked')) {
        if(event.target.classList.contains('rightClicked')) {
            event.target.classList.toggle('doubleClass');
    }
    }
});

tableElem.addEventListener('contextmenu', function(event) {
    if(event.target.classList.contains('leftClicked')) {
        if(event.target.classList.contains('rightClicked')) {
            event.target.classList.add('doubleClass');
    }
    }
});

/* ./Double class effect */
/* --- ./COLORTABLE --- */


/*--- MOVE BLOCK --- */

let blockElem = document.querySelector('#moveBlock');

document.body.addEventListener('keydown', function(event) {
console.log(event);
    switch(event.code) {

/* Arrows Control */

        case 'ArrowLeft' :
            blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) - 40) + 'px';
            
            break;

        case 'ArrowRight' :
            blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) + 40) + 'px';
            
            break;

        case 'ArrowUp' :
            blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) - 40) + 'px';
            
            break;

        case 'ArrowDown' :
            blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) + 40) + 'px';
            
            break;  
            
/* ./Arrows Control */

/* NumPad Control */

        /* Horizontal move */
        case 'Numpad4' :
            blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) - 40) + 'px';
            
            break;

        case 'Numpad6' :
            blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) + 40) + 'px';
            
            break;
        /* ./Horizontal move */

        /* Vertical move */
        case 'Numpad8' :
            blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) - 40) + 'px';
            
            break;

        case 'Numpad2' :
            blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) + 40) + 'px';
            
            break;  
        /* ./Vertical move */

        /* Diagonal move */
        case 'Numpad7' :
            blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) - 40) + 'px';
            blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) - 40) + 'px';
            
            break;

        case 'Numpad9' :
            blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) + 40) + 'px';
            blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) - 40) + 'px';
            
            break;

        case 'Numpad1' :
            blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) + 40) + 'px';
            blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) - 40) + 'px';
            
            break;

        case 'Numpad3' :
            blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) + 40) + 'px';
            blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) + 40) + 'px';
            
            break;  
        /* ./Diagonal move */

/* ./NumPad Control */
            
    }

});

/*--- ./MOVE BLOCK --- */
