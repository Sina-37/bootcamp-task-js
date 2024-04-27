const btn = document.querySelector('#get_transactions');
const container = document.querySelector('.container');
const table = document.querySelector('.table');
const tbody = document.querySelector('#tbody');

btn.addEventListener('click', onClick);

let transactions = [];

async function getData() {
  const res = await fetch('http://localhost:3000/transactions');
  const data = await res.json();
  return data;
}

const ss = type === '' ? '' : '';

async function onClick() {
  transactions = await getData();
  btn.classList.add('hidden');
  table.classList.add('visible');
  let result = '';
  transactions.forEach((transaction) => {
    result += `
        <tr class="table-body">
            <td>${transaction.id}</td>
            <td class="${transaction.type === 'افزایش اعتبار' ? 'green' : 'red'}">${
      transaction.type
    }</td>
            <td>${transaction.price}</td>
            <td>${transaction.refId}</td>
            <td>${transaction.date}</td>
        </tr>
    `;
  });
  tbody.innerHTML = result;
}
