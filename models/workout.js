const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            duration:{
                type: Number,
            },
            distance:{
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
        }
    ],

    totalDuration:Number
});

WorkoutSchema.methods.calcDuration = function() {
    this.totalDuration = this.exercises.duration;
    return this.totalDuration
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;