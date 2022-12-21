// Iprastas uzrasymo budas:
const hungry1 = true;
let eat;

if (hungry1 === true) {
  eat = "yes";
} else {
  eat = "no";
}
console.log(eat);

// Uzrasymas ternary budu:
const hungry2 = false;
let eat2;
eat2 = hungry2 === true ? "yes" : "no";
console.log(eat2);
