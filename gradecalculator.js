function calculateCurrentGrade(){
    var homework = averageArray(document.getElementById("homework").value);
    var quiz = averageArray(document.getElementById("quiz").value);
    var test = averageArray(document.getElementById("test").value);
    var midterm = averageArray(document.getElementById("midterm").value);
    var gradeArray = [];
    gradeArray.push(homework,quiz,test,midterm);
    var weight = weights();
    var currentGrade = 0;
    for(var i = 0; i < gradeArray.length;i++){
        currentGrade += (gradeArray[i]*weight[i]);
    }
    currentGrade = Math.round(currentGrade*100);
    document.getElementById("currentGrade").innerHTML = "Your Current Grade: " + currentGrade + "%";
    colorCode(document.getElementById("hw"),homework);
    return currentGrade;
}

function calculateFinalGrade(){
    document.getElementById("finalNeeded").innerHTML = "You Need: ";
    var finalWeight = (document.getElementById("finalWeight").value);
    var wantedGrade = (document.getElementById("wantedGrade").value);
    var currentGrade = calculateCurrentGrade();
    console.log(currentGrade);
    var finalGrade = (wantedGrade - currentGrade)/finalWeight;
    console.log(finalGrade);
    finalGrade = Math.round(finalGrade*100);
    console.log(finalGrade);
    document.getElementById("finalNeeded").innerHTML = "You Need a " + finalGrade + "% on the final!";
}



function averageArray(arr){
    arr = arr.split(",");
    for(var i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    var sum = 0;
    for(var a = 0; a < arr.length; a++){
        sum += arr[a];
    }
    return sum/arr.length/100;
}

function weights(){
    var hwweight = parseInt(document.getElementById("homeworkWeight").value)/100;
    var quizweight = parseInt(document.getElementById("quizWeight").value)/100;
    var testweight = parseInt(document.getElementById("testWeight").value)/100;
    var midtermWeight = parseInt(document.getElementById("midtermWeight").value)/100;
        var weightArray = [];
        weightArray.push(hwweight,quizweight,testweight,midtermWeight);
        console.log(weightArray);
        return weightArray;
    }
function colorCode(element,avg){

    if(avg > .89){
        element.style.background = "green";
    }



}


