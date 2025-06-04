function calculateBMI(){
  let weightInput = prompt("Enter your weight in kg");
  let heightInput = prompt("Enter your height in cm");

  let weight = parseFloat(weightInput);
  let heightcm = parseFloat(heightInput);

  let height = heightcm/100;

  let bmi = weight/height **2;
  
  let message = "";

  if (bmi < 18.5) {
    message = "Underweight";
  } 
  else if (bmi >= 18.5 && bmi <= 24.9) {
    message = "Healthy";
  } 
  else if (bmi >= 25 && bmi <= 29.9) {
    message = "Overweight";
  } 
  else if (bmi >= 30) {
    message = "Obese";
  }

  document.getElementById("result").innerHTML = `YOUR BMI is: ${bmi.toFixed(2)} and you are ${message}`;
}