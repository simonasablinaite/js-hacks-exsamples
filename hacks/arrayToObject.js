// Iprastas uzrasymas:
const arr1 = ["value1", "value2", "value3"];
let arr1Object = {};
for (let i = 0; i < arr1.length; i++) {
  if ((1)[i] !== undefined) {
    arr1Object[i] = arr1[i];
    console.log(arr1Object);
  }
}

// Trumpesnis uzrasymas:
let arr2 = ["vienas", "du", "trys"];
let arr2Object = { ...arr2 };
console.log(arr2Object);
