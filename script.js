const sentences = [
    "yay woohoo",
    "no ai here 🤖",
    "did i forget to add a full stop again?",
    "thank you orpheus",
    "are u reading this?",
    "i know, pretty cool",
    "fixing the bug with bug spray",
    "the bug spray got everywhere",
    "when life gives you lemons...",
    "these messages are pseudorandom...",
    "yay you found me",
]

const randomIndexPara = Math.floor(Math.random() * sentences.length);
const random = sentences[randomIndexPara]


let dynamicPara = document.getElementById("dynamicpara")
dynamicPara.innerHTML = random