let complimentButton = document.getElementById("complimentButton")
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};

let fotuneButton = document.getElementById("fortuneButton").onclick = function (){
    axios.get("http://localhost:4000/api/fortune")
        .then(function (response){
            const data = response.data;
            alert(data);
        });

};

let encouragementButton = document.getElementById("encouragementButton").onclick = function(){
    axios.get("http://localhost:4000/api/encouragement")
        .then(function (response){
            const data = response.data;
            alert(data);
        });
};

let inspirationButton = document.getElementById("inspirationButton").onclick = function(){
    axios.get("http://localhost:4000/api/inspiration")
        .then(function(response){
            const data = response.data;
            alert(data);
        });
};

const goalsContainer= document.querySelector('#goals-container')
const form = document.querySelector('form')

let goalButton = document.getElementById("postGoal").onclick = function(){
    axios.put("http://localhost:4000/api/goals")
        .then(function(response){
            const data = response.data;
            alert(data);
        });
};

const goalCallback = ({ data : goal }) => displayGoal(goal)
const errCallback = err => console.log(err)

const createGoal = body => axios.post("http://localhost:4000/api/goals", body)
        .then(goalCallback).catch(errCallback)
        // console.log("Is this working?")

function submitHandler(e){
    e.preventdefault()
    let goals = document.querySelector('#postgoal')
    let bodyObj ={
        goals : goals.value,
    }
    createGoal(bodyObj)
    goals.value = ''
    // console.log("Is this working?")
}

function createGoalCard(goal) {
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')
    goalCard.innerHTML = `<p class = "goals"> ${goal.goals}></p>`
    goalsContainer.appendChild(createGoalCard)
    // console.log("working?")
}

function displayGoal(arr) {
    goalsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGoalCard(arr[i])
        //console.log("Working?")
    }
}
// console.log("Working?")
form.addEventListener('submit', submitHandler)

