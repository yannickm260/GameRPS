const contentChoiceComputer = document.getElementById('choice-computer')
const contentChoiceUser = document.getElementById('choice-user')
const contentResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let choiceUser
let choiceComputer
let result
// 'Click' event on button
possibleChoices.forEach(possibleChoice  => possibleChoice.addEventListener('click',(e)=>{
   // Get the ID of the clicked button
    choiceUser = e.target.id
    // add the image coresponding to the choice
    contentChoiceUser.innerHTML = `<img class="my-5 w-16 h-16" src="${choiceUser}.png">`
    generate_choice_computer()
    verification()
}));

// function to generate compter's choice
function generate_choice_computer(){
    random = Math.floor(Math.random() * 3) +1 //generate numbers between 1 & 3
    if(random === 1){
        choiceComputer = "pierre"
    }
    if(random === 2){
        choiceComputer = "papier"
    }
    if(random === 3){
        choiceComputer = "ciseaux"
    }

    //add the image
    contentChoiceComputer.innerHTML = `<img class="my-5 w-16 h-16" src="${choiceComputer}.png">`
}

    //function to verify if the user won

function verification(){
    if(choiceUser == choiceComputer)
    {
        result = "Egality !"
    }
    // Loosing
    
    if(choiceUser == "pierre" && choiceComputer == "papier")
    {
        result = "Lost !"
    }
    if(choiceUser == "papier" && choiceComputer == "ciseaux"){
        result = "Lost !"
    }
    if(choiceUser == "ciseaux" && choiceComputer == "pierre"){
        result = "Lost !"
    }
    // Succeeding
    
    if(choiceUser == "papier" && choiceComputer == "pierre")
    {
        result = "Win !"
    }
    if(choiceUser == "ciseaux" && choiceComputer == "papier"){
        result = "Win !"
    }
    if(choiceUser == "pierre" && choiceComputer == "ciseaux"){
        result = "Win !"
    }
    contentResult.innerHTML = result
}
