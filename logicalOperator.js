// && , || or , !

const age = 18;
const login = true;

// && if both true then all output true

if (age >= 19 && login) {
  console.log('you are succesfully loged in');
} else {
  console.log('your age is not approved');
}

// || or example if one true then output true

const admin = true;
const editor = false;

if (admin || editor) {
  console.log('you can edit');
} else {
  console.log('one condition has false');
}

// ! not ulta kore logic

// !true = false , !false = true

let isLoggedIn = true;

const loggedOut = !isLoggedIn;

if (loggedOut) {
  console.log('you are logeed out');
} else {
  console.log('you are log in');
}
