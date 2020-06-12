// requiring all database and schema info from models folder
const db = require("../models/index");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.findOne({}).sort({ _id: -1 })
            .then(workout => {

                // console.log(workout)
                
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.post("/api/workouts", (req, res) => {
        console.log("\n" + req + "\n");
    })
};

