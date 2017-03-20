function sortByName(data) {
  data.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
  return data;
}

function sortByPhone(data) {
  data.sort(function(a, b) {
    return a.phone - b.phone;
  });
  return data;
}

function clicFunction(data) {
  console.log(data);
}
