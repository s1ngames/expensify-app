/* object destructuring */

/* const person = {
    name: 'Nir',
    age: 28,
    location: {
        city: 'kata',
        temp: 12
    }
};

const { name: firstName = 'Anonymous', age } = person; //=anonys is only default
console.log(`${firstName} is ${age}.`);

const {city,temp} = person.location;
console.log(`its ${temp} degrees in ${city}`);


const { city, temp: temprature } = person.location;
console.log(`its ${temprature} degrees in ${city}`); */

/* Array desturcuting */

/* const address = ['6 kandinsky street', 'k.ata', 'israel', '38900']; */
/* console.log(`You are in ${address[1]} , ${address[2]}`); */
/* const [street,city,country,zip] = address; */
/* console.log(`You are in ${street} , ${country}`); */
/* 
const [,,country='new yourk'] = address;
console.log(`You are in ${country}`); */

const item = ['coffe(hot)','$2.00','$2.50','$2.75'];
const [coffeType,,price] = item;
console.log(`a medium ${coffeType} costs ${price}`);
