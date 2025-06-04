function calculateBMI(){
  let weightInput = prompt("Enter your weight in kg");
  let heightInput = prompt("Enter your height in cm");

  let weight = parseFloat(weightInput);
  let heightcm = parseFloat(heightInput);

  let height = heightcm/100;

  let bmi = weight/height **2;
  
  document.getElementById("result").innerHTML = `YOUR BMI is: ${bmi.toFixed(2)}`;
}