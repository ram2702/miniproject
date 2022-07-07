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
export { workOutData, dietData };
