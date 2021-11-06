const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
    "A beautiful, smart and loving person will be coming into your life!",
    "A good friendship is often more important that an passionate romance.",
    "A hunch is creativity trying to tell you something.",
    "A lifetime of happiness lies ahead of you.",
    "A new perspective will come with the new year.",
  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/inspiration", (req, res) => {
  const inspiration = [
    "Be the change you want to see in the world. - Mahatma Gandhi",
    "Success is most often achieved by those who don't know that failure is inevitable. -Coco Chanel",
    "Everybody is a genius. But if you jude a fish by its abiliity to climb a tree, it will its whole life believing that it is stupid. -Albert Einstein",
    "Opportunity is missed by most people because it is dressed in overalls and looks like work. -Thomas Edison",
    "Our lives begin to end the day we become silent about things that matter. -Dr. Martin Luther King",
  ];

  res.status(200).send(inspiration);
});

let savedGoals = [];

app.get(
  "/api/goals",
  (getGoal = (req, res) => {
    res.status(200).send(savedGoals);
  })
);

app.post(
  "/api/goals",
  (createGoal = (req, res) => {
    let { goals } = req.body;
    savedGoals = savedGoals.concat(goals);
    res.status(200).send();
  })
);

app.put(
  "/api/goals",
  (modifyGoal = (req, res) => {
    let { oldGoal, newGoal } = req.body;
    const goalIndex = savedGoals.indexOf(oldGoal);
    if (goalIndex > -1) {
      savedGoals.splice(goalIndex, 1, newGoal);
      res.status(200).send();
      return;
    }
    res.status(404).send();
  })
);

app.delete(
  "/api/goals",
  deleteGoal = (req, res) => {
    let {goal} = req.query;
    console.log(goal)
    const goalIndex = savedGoals.indexOf(goal);
    if (goalIndex > -1) {
      savedGoals.splice(goalIndex, 1);
      res.status(200).send();
      return;
    }
    res.status(404).send();
  })

app.listen(4000, () => console.log("Server running on 4000"));
