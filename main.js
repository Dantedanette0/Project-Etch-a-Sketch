const rows = 16;
const columns = 16;
const container = document.querySelector('.container');

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
    e.target.style.backgroundColor = 'purple';
}
});

const new_sktech_button = document.querySelector('.new-sketch');


new_sktech_button.addEventListener('click', () => {
    remove_grid();
});