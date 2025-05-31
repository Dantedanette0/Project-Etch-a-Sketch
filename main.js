const container = document.querySelector('.container');

function create_grid(rows, columns) {
  for (let r = 0; r < rows; r++) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('row');

    for (let c = 0; c < columns; c++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      rowEl.appendChild(cell);
    }

    container.appendChild(rowEl);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function remove_grid() {
  const rows = container.querySelectorAll('.row');
  rows.forEach(row => row.remove());
}

container.addEventListener('mouseover', e => {
  if (e.target.matches('.cell')) {
    e.target.style.backgroundColor = 'blue';
  }
});

container.addEventListener('mouseout', e => {
  if (e.target.matches('.cell')) {
  
    e.target.style.backgroundColor = getRandomColor();
  }
});

const new_sketch_button = document.querySelector('.new-sketch');
new_sketch_button.addEventListener('click', () => {
  remove_grid();
  create_grid(128, 128);
});


create_grid(16, 16);
