function pag(total, size, current) {
  let resb = [];
  let rese = [];
  let res = [];
  let k = 0;

  for (let i = 0; i < size - 2; i++) {
    resb[i] = i + 1;
  }
  resb[size - 2] = "...";
  resb[size - 1] = total;

  k = 0;
  rese[0] = 1;
  rese[1] = "...";
  for (let i = size - 1; i >= 2; i--) {
    rese[i] = total - k;
    k++;
  }

  if (current <= (size + 1) / 2 - 1) {
    return resb;
  }
  if (current > total - ((size + 1) / 2 - 1)) {
    return rese;
  }
  if (current > (size + 1) / 2 - 1 && current <= total - ((size + 1) / 2 - 1)) {
    res[0] = 1;
    res[1] = "...";
    k = 1;
    for (let i = (size - 1) / 2 - 1; i >= 2; i--) {
      res[i] = current - k;
      k++;
    }
    k = 0;
    for (let i = (size - 1) / 2; i <= size - 3; i++) {
      res[i] = current + k;
      k++;
    }
    res[size - 2] = "...";
    res[size - 1] = total;
  }
  return res;
}

console.log(pag(107, 9, 34));
