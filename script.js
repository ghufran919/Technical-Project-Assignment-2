const btn = document.getElementById("calculate");

btn.addEventListener("click", function (e) { e.preventDefault(); 
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  
    const newLocal = weight / (height * height);
  if((height == '') || (height < 0) || (isNaN(height))){
    //NaN !== NaN
    alert("Tolong masukkan angka yang sesuai!");
    return;
  }
    
 else if (weight == '' || weight < 0 || isNaN(weight)){
    alert("Tolong masukkan angka yang sesuai!");
    return;
  }

//calculate BMI 
let BMI = (weight / (height * height/10000)).toFixed(2);

document.querySelector(
    "#result"
    ).innerHTML = `IMT kamu adalah<span id="result"> ${BMI}</span>`;

let status = "";

if (BMI < 18.5) {
  status = "Kekurangan Berat Badan";
}
if (BMI >= 18.5 && BMI < 24.9) {
  status = "Sehat";
}
if (BMI >= 25 && BMI < 29.9) {
  status = "Kelebihan Berat Badan";
}
if (BMI >= 30) {
  status = "Obesitas";
}

document.querySelector(
  "#comment"
).innerHTML = `Kamu termasuk dalam<span id="comment">${status}</span>`;

})
