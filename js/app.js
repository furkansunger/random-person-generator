const randomBtn = document.getElementById("refresh");

const randomPerson = new RandomPerson();
const ui = new UI();

eventListeners();

function eventListeners(){
    randomBtn.addEventListener("click", getRandomPerson);
}

getRandomPerson();

function getRandomPerson(){
    randomPerson.getData()
    .then(response => ui.loadPersonToUI(response))
    .catch(err => console.log(err));
}