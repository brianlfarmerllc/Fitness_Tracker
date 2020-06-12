// requiring all database and schema info from models folder
const db = require("../models/index");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.findOne({}).sort({ _id: -1 })
            .then(workout => {
                console.log(workout)
                res.json(workout);
                
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, { new: true })
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    })
    

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(
            {
                date: Date.now(),
                exercises: [],
            },
        )
            .then(newWorkout => {
                console.log(newWorkout)
                res.json(newWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7).sort({date:1})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
       
    })
};

