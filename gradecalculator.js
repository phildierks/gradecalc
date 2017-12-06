function calculateCurrentGrade(){
    var homework = averageArray(document.getElementById("homework").value);
    var quiz = averageArray(document.getElementById("quiz").value);
    var test = averageArray(document.getElementById("test").value);
    var midterm = averageArray(document.getElementById("midterm").value);
    var gradeArray = [];
    gradeArray.push(homework,quiz,test,midterm);
    console.log(gradeArray);
    var weight = weights();
    var currentGrade = 0;
    for(var i = 0; i < gradeArray.length;i++){
        currentGrade += (gradeArray[i]*weight[i]);
    }
    var weightSum = weight[0]+weight[1]+weight[2]+weight[3];
    if(weightSum >= 1){
        alert("Your Weights Cannot Add up to 100, What about your Final?");
        document.getElementById("currentGrade").innerHTML = "";
        return;
    }
    currentGrade = currentGrade/weightSum;
    currentGrade = Math.round(currentGrade*100);
    if(isNaN(currentGrade)){
        alert("You made an Error when entering your Grades");
        document.getElementById("currentGrade").innerHTML = "";
        return;
    }
    document.getElementById("currentGrade").innerHTML = "Your Current Grade: " + currentGrade + "%";
    colorCode(document.getElementById("hw"),homework);
    colorCode(document.getElementById("quizzes"),quiz);
    colorCode(document.getElementById("tests"),test);
    colorCode(document.getElementById("mid"),midterm);
    return currentGrade;
}



function calculateFinalGrade(){
    document.getElementById("finalNeeded").innerHTML = "";
    var weight = weights();
    var weightSum = weight[0]+weight[1]+weight[2]+weight[3];
    var finalWeight = 1-weightSum;
    finalWeight*=100;
    var wantedGrade = document.getElementById("wantedGrade").value;
    var currentGrade = calculateCurrentGrade();
    if(isNaN(currentGrade)){
        document.getElementById("finalNeeded").innerHTML = "";
        return;
    }
    if(isNaN(wantedGrade)){
        alert("You made an Error when entering your wanted grade");
        document.getElementById("wantedGrade").value = "";
        return;
    }
    if(isNaN(finalWeight)){
       alert("You made an Error when entering your final weight");
       document.getElementById("finalWeight").value = "";
        return;
    }
    console.log(currentGrade);
    var finalGrade = ((wantedGrade*100)-currentGrade*(100-finalWeight))/finalWeight;
    console.log(finalGrade);
    finalGrade = Math.round(finalGrade);
    console.log(finalGrade);
    if(finalGrade < 0 ){
        document.getElementById("finalNeeded").innerHTML = "You don't need to take the final because you have already assured that Grade for yourself!";
    }else{
    document.getElementById("finalNeeded").innerHTML = "You Need a " + finalGrade + "% on the final!";
}
}



function averageArray(arr){
    arr = arr.split(",");
    for(var i = 0; i < arr.length; i++){
        if (arr[i].match(/[a-z]/i)) {
            alert("You cannot have letters in your grades");
            return;
        }
        if (arr[i]<0) {
            alert("You cannot have a negative grade");
            return;
        }
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
        for(var i = 0;i<weightArray.length;i++){
            if (weightArray[i]<0) {
                alert("You cannot have a negative weight");
                document.getElementById("currentGrade").innerHTML = "";
                return;
            }
        }
        console.log(weightArray);
        return weightArray;
    }



function colorCode(element,avg){
    if(avg > .89){
        element.style.background = "#91ff35";
    }
    if(avg > .79 && avg <= .89){
        element.style.background = "#ffa6fa";
    }
    if(avg > .69 && avg <= .79){
        element.style.background = "yellow";
    }
    if(avg > .59 && avg <= .69){
        element.style.background = "orange";
    }
    if(avg <= .59){
        element.style.background = "red";
    }
    if(isNaN(avg)){
        element.style.background = "white";
    }
}


