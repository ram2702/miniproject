var workOutData = {
  name: "Workout",

  att1: ["Workout No", 3],
  att2: ["Calories Burned", 800],
  att3: ["StepCount", 8000],
  att4: ["WorkOut Left", 1],
  progress: 0,
};
workOutData.progress =
  workOutData.att1[1] / (workOutData.att1[1] + workOutData.att4[1]);
var dietData = {
  name: "Diet",

  att1: ["Diet Entered", 2],
  att2: ["Calorie Limit", 2600],
  att3: ["Calorie Intake", 800],
  att4: ["Calories Left", 1800],
  progress: 0,
};
dietData.progress = dietData.att1[1] / 3;
dietData.progress = dietData.progress.toFixed(2);
const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
export { workOutData, dietData, UserData };
