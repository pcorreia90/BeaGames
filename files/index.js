const randomNumElement = document.getElementById('randomNum');
const getNewNumBtn = document.getElementById('generateNumBtn');
const confirmNumBtn = document.getElementById('confirmBtn');
const previousNumInput = document.getElementById('previousNum');
const nextNumInput = document.getElementById('nextNum');
const resultMessage = document.getElementById('resultMsg')
const happyFace = "\uD83D\uDE04";
const sadFace = "\uD83D\uDE22";

randomNumElement.innerHTML = 0;
confirmNumBtn.disabled = true;

getNewNumBtn.addEventListener('click', function (){
    generateRandomNumber(100);
    previousNumInput.value = ""
    nextNumInput.value = ""
    resultMessage.innerHTML = ""
    getNewNumBtn.disabled = true
    confirmNumBtn.disabled = false
});

confirmNumBtn.addEventListener('click', function (){
    let currentNum = parseInt(randomNumElement.innerHTML)
    console.log(currentNum)
    let previousNum = parseInt(previousNumInput.value)
    console.log(previousNum)
    let nextNum = parseInt(nextNumInput.value)
    console.log(nextNum)

    if(previousNum == null || nextNum == null){
        resultMessage.innerHTML ="Tens de preencher os dois números.";
        return;
    }

    if(previousNum === currentNum - 1 && nextNum === currentNum + 1) {
        resultMessage.innerHTML = "Boa! Está correcto." + happyFace;
        getNewNumBtn.disabled = false;
        return;
    }

    resultMessage.innerHTML = "Que pena! Está errado, volta a tentar." + sadFace;
    
})


function generateRandomNumber(maxInt) {
    randomNumElement.innerHTML = Math.floor(Math.random() * maxInt) + 1
};