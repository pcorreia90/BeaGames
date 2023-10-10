const randomNumElement = document.getElementById('randomNum');
const getNewNumBtn = document.getElementById('generateNumBtn');
const confirmNumBtn = document.getElementById('confirmBtn');
const previousNumInput = document.getElementById('previousNum');
const nextNumInput = document.getElementById('nextNum');
const resultMessage = document.getElementById('resultMsg')

let hasNewNum = false;

randomNumElement.innerHTML = 0;

getNewNumBtn.addEventListener('click', function (){
    generateRandomNumber(100);
});

confirmNumBtn.addEventListener('click', function (){
    console.log(previousNumInput.value)
    if(previousNumInput.value == "" || nextNumInput.value == ""){
        console.log("maminhas")
        resultMessage.innerHTML ="Que pena! Está errado.";
        return;
    }
    resultMessage.innerHTML = "Boa! Está correcto."
})


function generateRandomNumber(maxInt) {
    randomNumElement.innerHTML = Math.floor(Math.random() * maxInt) + 1
};









