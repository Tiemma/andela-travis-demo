const somethingHere = 'I wrote an ES5 variable here';
console.log(somethingHere);

export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => a - b;

export const divide = (a, b) => a/b;

class Chocolate {
  constructor() {
    this.name = 'blank';
  }

  taste() {
    console.log(this.name);
  }
}

const chocolate = new Chocolate();
chocolate.taste();
