const obj = {
  a0: { aa: [3, 9], bb: 2, cc: { aaa: 4, bbb: -5 } },
  a1: { aa: [0, 8], bb: -7, cc: { aaa: 8, bbb: 7 } },
  a2: { aa: [9, -4], bb: 1, cc: { aaa: -1, bbb: 8 } },
  a3: { aa: [8, -1], bb: 7, cc: { aaa: 3, bbb: 0 } },
  a4: { aa: [-4, -2], bb: -2, cc: { aaa: 8, bbb: 9 } }
};

let arr = [];

for (const k1 in obj) {
  for (const k2 in obj[k1]) {
    if (typeof obj[k1][k2] == "object") {
      for (const k3 in obj[k1][k2]) {
        arr.push(obj[k1][k2][k3]);
      }
    } else {
      arr.push(obj[k1][k2]);
    }
  }
}

alert(
  "Max = " + Math.max.apply(null, arr) + "; Min = " + Math.min.apply(null, arr)
);

/*
В строке 14 использовал forin для краткости когда, хотя понимаю, чем грозит использование forin для массива. Если неоходимо, то могу переделать с обычным for.
*/
