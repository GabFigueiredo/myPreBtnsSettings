const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");


const firstDisplay = document.getElementById("firstDisplay")
const secondDisplay = document.getElementById("secondDisplay")


function changeColor(btn) {
    if(btn.classList.contains("normalBtn")) {
            btn.classList.remove("normalBtn")
            btn.classList.add("special") 
        return "Clicked"}
        else {
            btn.classList.remove("special")
            btn.classList.add("normalBtn")
            return "Not clicked"
        }    
    }
    
function onAndOff(btn) {
    if(btn.classList.contains("normalBtn")) {
            btn.classList.remove("normalBtn")
            btn.classList.add("special")
            btn.innerHTML = "ON" 
    return "Clicked"}
    else {
        btn.classList.remove("special")
        btn.classList.add("normalBtn")
        btn.innerHTML = "OFF" 
        return "Not clicked"
    }    
}

function btnValue(btn, value) {
    const specialBtns = document.querySelectorAll(".special") // o resultado disso é um NodeList

    if (btn.classList.contains("special")) {
        btn.classList.remove("special");
        btn.classList.add("normal");
        value = "sem valor ;(" }
    else {
        btn.classList.remove("normal")
        btn.classList.add("special")
    }     
        specialBtns.forEach(element => { // Por isso, você tem que o usar o .ForEach pra pode usar ele
        element.classList.remove("special"); // Aqui vocẽ remove a classe special
        element.classList.add("normal")}) // Aqui vocẽ adiciona uma classe qualquer, nesse caso chamei de normal

    secondDisplay.innerHTML = `o Valor é do: ${value}`
}    

btnOne.addEventListener("click", () => {
    firstDisplay.innerHTML = changeColor(btnOne);
    })

btnTwo.addEventListener("click", () => {
    onAndOff(btnTwo);
    })

btnThree.addEventListener("click", (event) => {
    event.preventDefault() // Isso serve pra função abaixo não usar o "click" como argumento. Com essa linha você desativa esse comportamento padrão do addEventListener("click") 
    btnValue(btnThree, "Botão 1") // O botão que vai mudar a cor, e o valor dele
})

btnFour.addEventListener("click", (event) => {
    event.preventDefault() // Isso serve pra função abaixo não usar o "click" como argumento. Com essa linha você desativa esse comportamento padrão do addEventListener("click") 
    btnValue(btnFour, "Botão 2") // O botão que vai mudar a cor, e o valor dele
})

btnFive.addEventListener("click", (event) => {
    event.preventDefault() // Isso serve pra função abaixo não usar o "click" como argumento. Com essa linha você desativa esse comportamento padrão do addEventListener("click") 
    btnValue(btnFive, "Botão 3") // O botão que vai mudar a cor, e o valor dele
})
