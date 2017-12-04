function calculateCurrentGrade(){
    var avg = averages();
    var weight = weights();
    var currentGrade = 0;
    for(var i = 0; i < avg.length;i++){
        currentGrade += (avg[i]*weight[i]);
    }
    currentGrade = Math.round(currentGrade*100);
    document.getElementById("currentGrade").innerHTML = "Your Current Grade: " + currentGrade + "%";
    individualGrade();
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

function averages(){
    var homework = document.getElementById("homework").value;
    var quizzes = document.getElementById("quiz").value;
    var tests = document.getElementById("test").value;
    var final = document.getElementById("final").value;
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
    var finalSum = 0;

    for(var z = 0; z < homework.length; z++){
        homeworkSum += homework[z];
    }
    for(var x = 0; x < quizzes.length; x++){
        quizzesSum += quizzes[x];
    }
    for(var y= 0; y < tests.length; y++){
        testsSum += tests[y];
    }
    for(var v=0; v< final.length; v++){
        finalSum += final[v]
    }
    var homeworkAvg = homeworkSum/homework.length/100;
    var quizzesAvg = quizzesSum/quizzes.length/100;
    var testsAvg = testsSum/tests.length/100;
    var finalAvg = finalSum/100;
    var gradeArray = [];
    gradeArray.push(homeworkAvg,quizzesAvg,testsAvg,finalAvg);
    console.log(gradeArray);
    return gradeArray;

}

function weights(){
    var hwweight = parseInt(document.getElementById("homeworkWeight").value)/100;
    var quizweight = parseInt(document.getElementById("quizWeight").value)/100;
    var testweight = parseInt(document.getElementById("testWeight").value)/100;
    var finalWeight = parseInt(document.getElementById("finalWeight").value)/100;
        var weightArray = [];
        weightArray.push(hwweight,quizweight,testweight,finalWeight);
        console.log(weightArray);
        return weightArray;
    }
function individualGrade(){
    var gradeavg = averages();
    var weightavg = weights();
    var hwGrade = gradeavg[0]*weightavg[0];
    var quizGrade = gradeavg[1]*weightavg[1];
    var testGrade = gradeavg[2]*weightavg[2];
    console.log(testGrade);
    console.log(quizGrade);
    console.log(hwGrade);

}
