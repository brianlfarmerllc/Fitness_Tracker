// requiring all database and schema info from models folder
const db = require("../models/index");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.findOne({}).sort({ _id: -1 })
            .then(workout => {
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
                date: new Date().setDate(new Date().getDate()-2),
                exercises: [],
            },
        )
            .then(newWorkout => {
                res.json(newWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).sort({_id: -1}).limit(1)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
       
    })

    app.get("/api/workouts/routines", (req, res) => {
        db.Workout.find({}).sort({_id: -1})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    })

    app.get("/api/workouts/routines/:day", (req, res) => {
        db.Workout.find({ day:req.params.day })
        .then(routine => {
            res.json(routine);
        })
        .catch(err => {
            res.json(err);
        });
    })
};

