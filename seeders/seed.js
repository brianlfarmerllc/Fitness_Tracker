let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {
        type: "resistance",
        name: "Dumbell Squats",
        duration: 8,
        weight: 50,
        reps: 15,
        sets: 4
      },
      {
        type: "resistance",
        name: "Barbell Squats",
        duration: 10,
        weight: 300,
        reps: 6,
        sets: 5
      },
      {
        type: "resistance",
        name: "Deadlift",
        duration: 12,
        weight: 300,
        reps: 6,
        sets: 5
      },
      {
        type: "resistance",
        name: "Pull Up's",
        duration: 10,
        weight: 215,
        reps: 12,
        sets: 5
      },
      {
        type: "resistance",
        name: "Bent Over Row",
        duration: 8,
        weight: 165,
        reps: 12,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {
        type: "cardio",
        name: "Mountain Biking",
        duration: 90,
        distance: 16
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 8,
        weight: 100,
        reps: 10,
        sets: 4
      },
      {
        type: "resistance",
        name: "Lateral Raises",
        duration: 10,
        weight: 30,
        reps: 12,
        sets: 5
      },
      {
        type: "resistance",
        name: "Bench Press",
        duration: 12,
        weight: 225,
        reps: 8,
        sets: 5
      },
      {
        type: "resistance",
        name: "Pushups",
        duration: 12,
        weight: 215,
        reps: 20,
        sets: 5
      },
      {
        type: "resistance",
        name: "Dips",
        duration: 8,
        weight: 215,
        reps: 15,
        sets: 4
      }
    ],
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 30,
        distance: 3
      }
    ],
  }
];

db.Workout.deleteMany({})

  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
