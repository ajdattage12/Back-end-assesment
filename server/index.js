const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = 
          ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = 
          ["A beautiful, smart and loving person will be coming into your life!",
          "A good friendship is often more important that an passionate romance.",
          "A hunch is creativity trying to tell you something.",
          "A lifetime of happiness lies ahead of you.",
          "A new perspective will come with the new year."
  ]
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune)
});

app.get("/api/encouragement", (req, res) =>{
  const encouragement = 
        [ "Belive in yourself and you will be unstoppable!",
        "A smooth sea never made a skilled sailor!",
        "Belive you can and your halfway there!",
        "We are all capable of amazing things!",
        "There is something in you that the world needs!",
        "Inhale. Exhale. All is well!"
        ]
    let randomIndex = Math.floor(Math.random() * encouragement.length);
    let randomEncouragement = encouragement[randomIndex];

    res.status(200).send(randomEncouragement)
});

app.get("/api/inspiration", (req, res) => {
  const inspiration =
      [ "Be the change you want to see in the world. - Mahatma Gandhi",
      "Success is most often achieved by those who don't know that failure is inevitable. -Coco Chanel",
      "Everybody is a genius. But if you jude a fish by its abiliity to climb a tree, it will its whole life believing that it is stupid. -Albert Einstein",
      "Opportunity is missed by most people because it is dressed in overalls and looks like work. -Thomas Edison",
      "Our lives begin to end the day we become silent about things that matter. -Dr. Martin Luther King"

      ]
    let randomIndex= Math.floor(Math.random() * inspiration.length);
    let randomInspiration = inspiration[randomIndex];

    res.status(200).send(randomInspiration)
})

app.post("/api/goals", createGoal = (req,res) =>{
    let {goals} = req.body;
    let newGoal = {
    goals : goals,
    }
    goals.push(newGoal)
    
    res.status(200).send(goals)
});

app.listen(4000, () => console.log("Server running on 4000"));
