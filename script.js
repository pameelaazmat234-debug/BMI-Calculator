
function changeHieghtToMeter(feet, inches)
{
    let height = inches + (feet * 12);
    let meters = height *  0.0254;
    return meters;
}

function calculateBmi(weight, hightinMeters)
{
    let Bmi = weight / (hightinMeters * hightinMeters);
    return Bmi;
}

let butto = document.getElementById("calculate-button");
butto.addEventListener("click", function()
{
    console.log("button clicked");
    let age = Number(document.getElementById("age").value);
    let hieghtinInFeet = Number(document.getElementById("feet").value);
    let hieghtinInInches = Number(document.getElementById("inches").value);
    let weight = Number(document.getElementById("wieght").value);
    let result = document.getElementById("result-text");
    if(age < 0 ||hieghtinInFeet < 0 ||  hieghtinInInches < 0 || weight < 0 )
    {
        result.innerHTML = "Invalid! Age or Weight or height Cannot Be Negative."
        result.style.color = "red";
        return;
    }
    if(hieghtinInFeet == "" || weight == "" || age == "")
    {
        result.innerHTML = "Please Enter Age, Hieght And Wieght";
        result.style.color = "Red";
        return;
    }
    let height = changeHieghtToMeter(hieghtinInFeet, hieghtinInInches);
    let calculte = calculateBmi(weight, height);
    
    if(calculte < 18.5)
    {
        result.innerHTML = "Underwieght: " + calculte;
        result.style.color = "orange";
    }
    else if(calculte < 25)
    {
        result.innerHTML = "Normal: " + calculte;
        result.style.color = "green";
    }
    else if(calculte < 30)
    {
        result.innerHTML = "Overwieght: " + calculte;
        result.style.color = "Darkred";
    }
    if(age < 18)
    {
        result.innerHTML += "(Teen: use growth chart for accuracy)";
    }
    else if(age > 60)
    {
        result.innerHTML += "(Older adult: BMI may be less accurate)";
    }

})
let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
    let age = document.getElementById("age").value = "";
    let hieghtinInFeet = document.getElementById("feet").value = "";
    let hieghtinInInches = document.getElementById("inches").value = "";
    let weight = document.getElementById("wieght").value = "";
    let result1 = document.getElementById("result-text");
    result1.innerHTML = "";
    
})
 
