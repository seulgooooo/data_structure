var temperAvg = [["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"], [72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 73]];
var AVG = CalMatrix(6);
for (var i = 0; i < 6; i++) {
    console.log(temperAvg[0][i], "시 평균 기온 :", AVG[i]);
}

function CalMatrix(num) {
    var AVG = [];
    for (var i = 0; i < num; i++) { 
        AVG[i] = (temperAvg[1][i] + temperAvg[2][i]) / 2;
    }
    return AVG;
}
