

// function sayHi(){
//     console.log('hi')
// }

// let id = setInterval(sayHi, 200)


var promise1 = new Promise(function(resolve, reject) {
    setTimeout(reject, 2500, 'this didnt work out');
  }).catch(err=> err)

var promise2 = axios.get('https://dog.ceo/api/breeds/image/random')

var promise3 = axios.get('https://icanhazdadjoke.com/')


Promise.all([promise1, promise2, promise3]).then(function(values) {
  
    console.log(values);
}).catch(err => console.error(err))
// expected 
