function drawTable(mainObject) {
  let container = document.getElementById("goos");
  let table = document.createElement("TABLE");
  container.appendChild(table);
  let thead = document.createElement("THEAD");
  table.appendChild(thead);
  let tr = document.createElement("TR");
  thead.appendChild(tr);
  mainObject.header.map(data => {
    let th = document.createElement("TH");
    tr.appendChild(th);
    th.innerText = data;
  });
  let tbody = document.createElement("TBODY");
  table.appendChild(tbody);
  mainObject.data.map(row => {
    let tr = document.createElement("TR");
    tbody.appendChild(tr);
    row.map(cell => {
      let td = document.createElement("TD");
      tr.appendChild(td);
      td.innerText = cell;
    });
  });
}

const mainObj = {
  header: ["id", "title", "cost"],
  data: [[0, "Mrs. Jane", 10], [1, "2222", 20]],
  columns: ["kryak"],
};

drawTable(mainObj);
