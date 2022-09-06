const container = document.querySelector('.container');
container.style.margin = '10px';
let size;
const start = document.createElement('button');
start.textContent = 'start';
container.appendChild(start); 
function createGrid(size){
    container.removeChild(start);
    for(i = 0;i < size;i++){
        const row = document.createElement('div');
        row.style.margin = '-5px';
        container.appendChild(row);
       for(j = 0;j < size;j++){
            const grid = document.createElement('div');
            grid.className = 'grid'
            let x = 960/size
            console.log(x);
            grid.style.width = `${x}px`;
            grid.style.display = 'inline';
            grid.style.height = `${x}px`;
            grid.style.margin = '0px';
            grid.style.backgroundColor = 'white';
            grid.style.display = 'inline-block'
            grid.style.border = '.0001px solid black';
            row.appendChild(grid);
       }
    }
}
start.addEventListener('click', () => {
    size = prompt("How many squares do you want: ");
    createGrid(size);
})
const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
    grid.addEventListener('mouseover' ,() => {
        console.log('hello');
        grid.style.backgroundColor = 'black';
    })
});