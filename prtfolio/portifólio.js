const words = [
    "Desenvolvedor Front-End.", 
    "Estudante de Tecnologia.", 
    "Criador de Interfaces.", 
    "Apaixonado por Código."
];

let wordIndex = 0;
let charIndex = 0;
let deletar = false;

function type() {
    const target = document.getElementById("typing-text");
    

    if (!target) return;

    const currentWord = words[wordIndex];

    if (deletar) {
        target.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        target.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = deletar ? 50 : 100;

    if (!deletar && charIndex === currentWord.length) {
        typeSpeed = 2000;
        deletar = true;
    } 
    else if (deletar && charIndex === 0) {
        deletar = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; 
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", type);
