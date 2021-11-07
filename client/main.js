let complimentButton = document.getElementById("complimentButton");
document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

let fotuneButton = (document.getElementById("fortuneButton").onclick =
  function () {
    axios.get("http://localhost:4000/api/fortune").then(function (response) {
      const data = response.data;
      alert(data);
    });
  });

let inspirationButton = (document.getElementById("inspirationButton").onclick =
  function () {
    axios
      .get("http://localhost:4000/api/inspiration")
      .then(function (response) {
        const inspirationDisplay = document.getElementById("inspirational-quotes");
        const inspirationList = document.createElement("ol");
        const inspirationQuotes = response.data;
        inspirationQuotes.forEach(quote => {
            const quoteItem = document.createElement("li");
            quoteItem.textContent = quote
            inspirationList.appendChild(quoteItem)
        });
        inspirationDisplay.replaceChildren(inspirationList)
      });
  });

const updateGoals = () => {
  axios.get("http://localhost:4000/api/goals").then((response) => {
    const goals = response.data;
    const goalDisplay = document.getElementById("goal-display");
    const goalList = document.createElement("ul");
    const goalSelect = document.getElementById('goals-modify');
    while(goalSelect.firstChild){
        goalSelect.removeChild(goalSelect.firstChild);
    }
    goals.forEach((goal) => {
      const goalItem = document.createElement("li");
      goalItem.textContent = goal;
      goalList.appendChild(goalItem);
      const goalOption = document.createElement('option');
      goalOption.value = goal;
      goalOption.textContent = goal;
      goalSelect.appendChild(goalOption);
    });
    goalDisplay.replaceChildren(goalList);
  });
};

const submitGoalButton = (document.getElementById("submitGoalButton").onclick =
  function (event) {
    event.preventDefault();
    const goalText = document.getElementById('goals').value;
    axios.post("http://localhost:4000/api/goals", {
        goals: [goalText]
    }).then((response) => {
      updateGoals();
    });
  });

const modifyGoalButton = (document.getElementById("modifyGoalButton").onclick =
  function (event) {
      event.preventDefault();
    const newGoalText = document.getElementById('goals').value;
    const currentSelectedGoal = document.getElementById('goals-modify').value;
    axios.put("http://localhost:4000/api/goals", {
        oldGoal: currentSelectedGoal,
        newGoal: newGoalText
    }).then((response) => {
      updateGoals();
    });
  });

const deleteButton = (document.getElementById("deleteGoalButton").onclick =
function (event) {
    event.preventDefault();
  const currentSelectedGoal = document.getElementById('goals-modify').value;
//   console.log(currentSelectedGoal);
  axios.delete("http://localhost:4000/api/goals", {
      params:{
        goal: currentSelectedGoal
      }
  }).then((response) => {
    updateGoals();
  });
});
