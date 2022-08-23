const pairNumbersArray = () => {
  let arr = [];
  for (let i = 2; arr.length < 10; i++) {
    i % 2 == 0 && arr.push(i);
  }
  console.log(arr);
};

// const createMatriz = () => {
//   let matriz = [];
//   for (var i = 0; i < 5; i++) {
//     matriz[i] = new Array(5);
//   }
//   return matriz;
// };

const fillMatriz = () => {
  let matrizToFill = [
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
    [, , , ,],
  ];
  for (let i = 0; i < matrizToFill.length * 5; i++) {
    //debugger;
    let rowIndex = parseInt(i / 5, 10);
    //debugger;
    let columnIndex = i % 5;
    //debugger;
    matrizToFill[rowIndex][columnIndex] = `${rowIndex + 1},${columnIndex + 1}`;
    //debugger;
  }
  console.table(matrizToFill);
};

let values = [];
const captureUserInput = (event) => {
  let userInput = event.target.value;
  values = userInput.split(",");
  if (values.some((item) => item > 10)) {
    alert("Alguno de los valores es mayor a 10, por favor rectifica");
    event.target.value = "";
    values = [];
  }
};

const fillUserMatriz = () => {
  console.log(values);
  let matrizToFill = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];
  for (i = 0; i < 3; i++) {
    matrizToFill[i].forEach((item, index) => {
      index < values[i] && (matrizToFill[i][index] = "*");
    });
  }
  console.table(matrizToFill);
};
