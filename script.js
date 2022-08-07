const btn = document.getElementById("calculate");

btn.addEventListener("click", function (e) { e.preventDefault(); 
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  
  if((height == '') || (height < 0) || (isNaN(height))){
    //NaN !== NaN
    alert("Tolong masukkan angka yang sesuai!");
    return;
  }
    
 else if (weight == '' || weight < 0 || isNaN(weight)){
    alert("Tolong masukkan angka yang sesuai!");
    return;
  }

else
//calculate BMI

})
