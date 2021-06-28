var temperAvg = [[72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 73]];
var AVG = CalMatrix(6);
for (var i = 0; i < 6; i++) {
    console.log(i + 10 ,"시 평균 기온 :", AVG[i]);
}

function CalMatrix(num) {
    var AVG = [];
    for (var i = 0; i < num; i++) { 
        AVG[i] = (temperAvg[0][i] + temperAvg[1][i]) / 2;
    }
    return AVG;
}
