let data;
let headers;
let columns;

function createnew(headers, data, columns) {
  let table = [];
  let datal = data.length;
  let coll = columns.length;
  for (let i = 0; i < datal + 1; i++) {
    table[i] = [];
  }
  table[0][0] = "№";
  for (let i = 1; i <= coll; i++) {
    table[0][i] = headers[i - 1];
  }
  for (let i = 1; i <= datal; i++) {
    table[i][0] = i;
  }
  for (let i = 1; i <= datal; i++) {
    for (let j = 1; j <= coll; j++) {
      table[i][j] = data[i - 1][columns[j - 1]];
    }
  }
  return table;
}

function myFunction(headers, data, columns) {
  let tableValue = createnew(headers, data, columns);
  let datal = data.length;
  let coll = columns.length;
  let x = document.createElement("TABLE");
  for (let i = 0; i < datal + 1; i++) {
    let y = document.createElement("TR");
    x.appendChild(y);
    for (let j = 0; j < coll + 1; j++) {
      let z = document.createElement("TD");
      if(i==0) {z.addEventListener("click", function(){
        clicFunction(data, columns[j-1]);
      })}
      z.innerText = tableValue[i][j]
      y.appendChild(z);
    }
  }

  document.getElementById("goos").appendChild(x);
}
