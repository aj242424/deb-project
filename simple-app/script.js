const greetingsList = [
'Hello World!',
'Bonjour Monde',
'Hello welt'


];

function changeGreeting() {
    const randomIndex = Math.floor(Math.random()*greetingsList.length);

const randomGreeting = greetingsList[randomIndex];
document.getElementById('greetingTxt').textContent = randomGreeting.toString();
}

function getCount() {
    const randomIndex = Math.floor(Math.random()*1000);
    document.getElementById('visitorCountTxt').
    textContent = "Visitor Count" + randomIndex.toString();
    console.log(randomIndex);
}