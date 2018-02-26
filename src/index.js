module.exports = function getZerosCount(number, base) {

    var i = 2;
    var repb = base;
    var cofArray = [];
    
    while (i <= base) {
        if (repb % i === 0) {
            repb = repb/i;
            cofArray.push([i,1]);
        } else {
            i++;
        }
    } 
    
    
    for (var i = 0; i< cofArray.length - 1; i++) {
        if (cofArray[i][0] === cofArray[i+1][0]) {
            cofArray[i][1]++;
            cofArray.splice(i+1, 1);
            i--;
        }
    }
    
    
    function someSum(number, cof) {
        var result = 0;
        var check = true;
        var i = 1;
        
        while (check) {
            result = result + Math.floor(number/Math.pow(cof,i));
            i++;
            if (number < Math.pow(cof,i)) {
                check = false;
            }
        }

        return result;
    }
    
    var min = Math.floor(1/cofArray[0][1] * someSum(number,cofArray[0][0]));
    
    for (var i = 1; i < cofArray.length; i++) {
        if (min > Math.floor(1/cofArray[i][1] * someSum(number,cofArray[i][0]))) {
            min = Math.floor(1/cofArray[i][1] * someSum(number,cofArray[i][0]));
        }
    }
    
    return min;
}