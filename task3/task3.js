function sortStr(data,colname) {
  data.sort(function(a, b) {
    var A = a[colname].toUpperCase();
    var B = b[colname].toUpperCase();
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }

    return 0;
  });
  return data;
}

function sortNum(data,colname) {
  data.sort(function(a, b) {
    return a[colname] - b[colname];
  });
  return data;
}

function clicFunction(data,colname) {
  if(colname == "name") {
    return rsortStr(data, colname);
  } else {
    return sortNum(data, colname);
  }
}
