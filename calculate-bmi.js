// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let calculation = weight / height**2
    if (calculation <= 18.5){
      return 'Underweight'
    } else if (calculation <= 25 && calculation > 18.5){
      return 'Normal'
    } else if (calculation <= 30 && calculation > 25){
      return 'Overweight'
    } else {
      return 'Obese'
    }
}

console.log(bmi(80, 1.80)); // Normal