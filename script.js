// Definisikan data
const data = [{nama : "abu",umur : 23, kota : "ambon"},
    {nama : "badu",umur : 23, kota : "bogor"},
    {nama : "ciko",umur : 23, kota : "cimahi"}
];

// Create element table
const table = document.createElement("table");

// set border table
table.className='border-1 solid black';

const row = document.createElement('tr')

const header = ['nama','umur','kota'];

header.forEach(x => {
    const th = document.createElement('th');
    th.textContent = x ;
    row.appendChild(th);
})

table.appendChild(row)

// instansiasi table
const realTable = document.getElementById('test');
realTable.appendChild(table)

