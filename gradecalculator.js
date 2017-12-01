function calculateCurrentGrade(){
    var avg = averages();
    var weight = weights();
    var currentGrade = 0;
    for(var i = 0; i < avg.length;i++){
        currentGrade += (avg[i]*weight[i]);
    }
    currentGrade = Math.round(currentGrade*100);
    document.getElementById("currentGrade").innerHTML = "Your Current Grade: " + currentGrade + "%";
    return currentGrade;

}

function calculateFinalGrade(){
    document.getElementById("finalNeeded").innerHTML = "You Need: ";
    var finalWeight = (document.getElementById("finalWeight").value)/100;
    var wantedGrade = (document.getElementById("wantedGrade").value)/100;
    var currentGrade = calculateCurrentGrade()/100;
    console.log(currentGrade);
    var finalGrade = (wantedGrade - currentGrade)/finalWeight;
    console.log(finalGrade);
    finalGrade = Math.round(finalGrade*100);
    console.log(finalGrade);
    document.getElementById("finalNeeded").innerHTML = "You Need a " + finalGrade + "% on the final!";
}

function averages(){
    var homework = document.getElementById("homework").value;
    var quizzes = document.getElementById("quiz").value;
    var tests = document.getElementById("test").value;
    homework = homework.split(",");
    quizzes = quizzes.split(",");
    tests = tests.split(",");
    for(var i = 0; i < homework.length; i++){
        homework[i] = parseInt(homework[i]);
    }

    for(var a = 0; a < quizzes.length; a++){
        quizzes[a] = parseInt(quizzes[a]);
    }

    for(var b = 0; b < tests.length; b++){
        tests[b] = parseInt(tests[b]);
    }
    var homeworkSum = 0;
    var quizzesSum = 0;
    var testsSum = 0;

    for(var z = 0; z < homework.length; z++){
        homeworkSum += homework[z];
    }
    for(var x = 0; x < quizzes.length; x++){
        quizzesSum += quizzes[x];
    }
    for(var y= 0; y < tests.length; y++){
        testsSum += tests[y];
    }
    var homeworkAvg = homeworkSum/homework.length/100;
    var quizzesAvg = quizzesSum/quizzes.length/100;
    var testsAvg = testsSum/tests.length/100;
    var gradeArray = [];
    gradeArray.push(homeworkAvg,testsAvg,quizzesAvg);
    console.log(gradeArray);
    return gradeArray;

}

function weights(){
    var hwweight = parseInt(document.getElementById("homeworkWeight").value)/100;
    var quizweight = parseInt(document.getElementById("quizWeight").value)/100;
    var testweight = parseInt(document.getElementById("testWeight").value)/100;
    var finalWeight = parseInt(document.getElementById("finalWeight").value)/100;
    while(hwweight + quizweight + testweight + finalWeight !== 1) {
        var weightArray = [];
        weightArray.push(hwweight,testweight,quizweight);
        console.log(weightArray);
        return weightArray;
    }
    alert("You cannot have a weight greater than 100%");
}
