const container = document.querySelector('.container');
container.style.margin = '100px';
container.style.align = 'center'; 
const start = document.createElement('button');
const red = document.createElement('button');
const blue = document.createElement('button');
const black = document.createElement('button');
const green = document.createElement('button');
const eraser = document.createElement('button');
red.style.backgroundColor = 'red';
blue.style.backgroundColor = 'blue';
black.style.backgroundColor = 'black';
green.style.backgroundColor = 'green';
eraser.style.backgroundColor = 'white';
eraser.textContent = 'eraser';
green.textContent = 'green';
black.textContent = 'black';
red.textContent = 'red';
blue.textContent = 'blue';
start.style.textAlign = 'center';
start.textContent = 'START THE DRAWINGGGGGGGGGG!!!!';
container.appendChild(start);
container.appendChild(red);
container.appendChild(blue);
container.appendChild(black);
container.appendChild(green);
container.appendChild(eraser);
red.style.margin = '20px';
blue.style.margin = '20px';
green.style.margin = '20px';
black.style.margin = '20px';
eraser.style.margin = '20px';
let size = 0;
let color = 'black';
red.addEventListener('click', ()=> {
    color = 'red'
})
blue.addEventListener('click', ()=> {
    color = 'blue'
})
green.addEventListener('click', ()=> {
    color = 'green'
})
black.addEventListener('click', ()=> {
    color = 'black'
})
eraser.addEventListener('click', ()=> {
    color = 'white';
})
start.addEventListener('click', ()=> {
    size = prompt("How many squares do you want: ");
    createGrid(size);
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
    grid.addEventListener('mouseover' ,() => {
        console.log('hello');
        grid.style.backgroundColor = color;
    })
});
})
function createGrid(size){
    for(i = 0;i < size;i++){
        const row = document.createElement('div');
        row.style.margin = '-10px';
        container.appendChild(row);
       for(j = 0;j < size;j++){
            const grid = document.createElement('div');
            grid.className = 'grid'
            let x = 960/size
            grid.style.width = `${x}px`;
            grid.style.display = 'inline';
            grid.style.height = `${x}px`;
            grid.style.margin = '0px';
            grid.style.backgroundColor = 'white';
            grid.style.display = 'inline-block'
            grid.style.border = '0px solid black';
            row.appendChild(grid);
       }
    }
}

