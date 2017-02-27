function createnew(headers, data, columns) {
  var table = [];
  var datal = data.length;
  var coll = columns.length;
  for (var i = 0; i < datal + 1; i++) {
    table[i] = [];
  }
  table[0][0] = "№";
  for (var i = 1; i <= coll; i++) {
    table[0][i] = headers[i - 1];
  }
  for (var i = 1; i <= datal; i++) {
    table[i][0] = i;
  }
  for (var i = 1; i <= datal; i++) {
    for (var j = 1; j <= coll; j++) {
      table[i][j] = data[i - 1][columns[j - 1]];
    }
  }
  return table;
}

function myFunction(headers, data, columns) {
  var tableValue = createnew(headers, data, columns);
  var datal = data.length;
  var coll = columns.length;
  var x = document.createElement("TABLE");
  for (var i = 0; i < datal + 1; i++) {
    var y = document.createElement("TR");
    x.appendChild(y);
    for (var j = 0; j < coll + 1; j++) {
      var z = document.createElement("TD");
      z.innerText = tableValue[i][j]
      y.appendChild(z);
    }
  }

  document.getElementById("goos").appendChild(x);
}
