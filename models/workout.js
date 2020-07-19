// Requiring files/packages
const mongoose = require("mongoose");

// Creating mongoose schema
const Schema = mongoose.Schema;

// Creating new schema using mongoose
const workoutSchema = new.Schema(
  {
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        distance: {
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
      },
    ],
    day: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Exporting for use in other files
module.exports = Workout;
