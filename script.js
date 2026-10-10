const sentences = [
    "yay woohoo",
    "no ai here 🤖",
    "did i forget to add a full stop again?",
    "thank you orpheus"
]

const randomIndexPara = Math.floor(Math.random() * sentences.length);
const random = sentences[randomIndexPara]


let dynamicPara = document.getElementById("dynamicpara")
dynamicPara.innerHTML = random