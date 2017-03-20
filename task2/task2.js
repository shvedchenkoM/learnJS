let data;
let headers;
let columns;

function createNew(headers, data, columns) {
  let table;
  table = Object.values(headers);

  return table;
}
 /* for (let i = 0; i < datal + 1; i++) {
    table[i] = [];
  }
  table[0][0] = "№";
  for (let i = 1; i <= coll; i++) {
    table[0][i] = headers[i - 1];
  }0
  for (let i = 1; i <= datal; i++) {
    table[i][0] = i;
  }
  for (let i = 1; i <= datal; i++) {
    for (let j = 1; j <= coll; j++) {
      table[i][j] = data[i - 1][columns[j - 1]];
    }
  }*/
function createTable(headers, data, columns) {
  let tableValue = createNew(headers, data, columns);

  let x = document.createElement("TABLE");
  for (let i = 0; i < data.length + 1; i++) {
    let y = document.createElement("TR");
    x.appendChild(y);

    if (i === 0) {
      y.addEventListener("click", function(event){
        console.log(event.target.dataset.column);
      });
    }



    for (let j = 0; j < columns.length + 1; j++) {
      let z = document.createElement("TD");
      if(i==0) {
        z.dataset.column = columns[j - 1];
      }
      z.innerText = tableValue[i][j]
      y.appendChild(z);
    }
  }

  document.getElementById("goos").appendChild(x);
}
