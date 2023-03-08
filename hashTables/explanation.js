const user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: () => {
    console.log('ahhhhh!');
  }
}

console.log(user.age);

user.spell = 'abra kadbra';

console.log(user.spell);

user.scream();

const a = new Map();
/**
 * The differents between an Map and an object is 
 * that we can user any datat type as a key.
 * 
 * And mantain the insertion order, that means 
 * the object is always have that order
 */

const b = new Sets();
/**
 * The setts only stored the keys without value.
 */