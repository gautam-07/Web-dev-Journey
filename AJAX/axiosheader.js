// Setting headers with axios

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const getDadJoke = async () => {
   const config = {headers: {Accept: 'application/json'}}
   const res = await axios.get('https://icanhazdadjoke.com', config)
   return res.data.joke;
}

const addJoke = async () => {
   const text = await getDadJoke();
   const newJoke = document.createElement('LI');
   newJoke.append(text);
   jokes.append(newJoke);
}

button.addEventListener('click', addJoke)
