// Split the array of punches into the specified number
//of 15 seconds intervals

//Left hand punches: 0 - Jab 1 - Hook 2 - Uppercut
//Right hand punches: 3 -Cross 4 - Hook 5 - Uppercut
function countPunchType(array, punchType){
    var count = 0;
    for(var i=0; i< array.length; i++){
        if(array[i].punch_type_id == punchType){
            count++;
        }
    }
    return count;
}

function getMaxInSet(array){
    var largest = array[0];
    for(var i =0; i < array.length; i++){
        if(largest < array[i]){
            largest = array[i];
        }
    }
}

function getIndexOfMaxInSet(array){
    var largest = array[0];
    var index = 0;
    for(var i= 0; i < array.length; i++){
        if(largest < array[i]){
            largest = array[i];
            index = i;
        }
    }
    return i;
}

function getIndexOfMinInSet(array){
    var smallest = array[0];
    var index = 0;
    for(var i=0; i < array.length; i++){
        if(smallest > array[i]){
            smallest = array[i];
            index = i;
        }
    }
    return i;
}
function getMinInSet(array){
    var smallest = array[0];
    for(var i =0; i < array.length; i++){
        if(smallest > array[i]){
            smallest = array[i];
        }
    }
}

function getRightHandData(array){
    var C =  countPunchType(array, 3);
    var H =  countPunchType(array, 4);
    var U = countPunchType(array, 5);
     return([C,H,U]);
 }

function getLeftHandData(array){
   var J =  countPunchType(array, 0);
   var H =  countPunchType(array, 1);
   var U = countPunchType(array, 2);
    return([J,H,U]);
}


function toBinsToGoalRate(toBins, goal){
    var perBin = goal / 12
    var temp = toBins;
    for(var i = 0; i < temp.length; i++){
          temp[i] = ((temp[i] / perBin) * 100);
      }
    return temp;
  }

function toBins(array, length){
    var bin = [];
    //Set number of elements and set all defaults to zero.
    for(var i = 0; i < length; i++){
        bin.push(0);
    }
    for(var i = 0; i < array.length; i++) {
        var seconds = toTotalseconds(array[i].ts);
        //1st Minute
        if(seconds >= 0 && seconds <= 15){ bin[0]+=1;}
        if(seconds > 15 && seconds <= 30){ bin[1]+=1;}
        if(seconds > 30 && seconds <= 45){ bin[2]+=1;}
        if(seconds > 45 && seconds <= 60){ bin[3]+=1;}
        //2nd Minute
        if(seconds > 60 && seconds <= 75){ bin[4]+=1;}
        if(seconds > 75 && seconds <= 90){ bin[5]+=1;}
        if(seconds> 90 && seconds  <= 105){ bin[6]+=1;}
        if(seconds > 115 && seconds <= 120){ bin[7]+=1;}
        //3rd Minute
        if(seconds > 130 && seconds <= 135){ bin[8]+=1;}
        if(seconds > 145 && seconds <= 150){ bin[9]+=1;}
        if(seconds > 160 && seconds <= 165){ bin[10]+=1;}
        if(seconds > 175 && seconds <= 180){ bin[11]+=1;}
    }
    
    return bin;
}

function toTotalseconds(ts){
    var total = 0;
    total+= getHoursAsInt(ts) * 60^2;
    total+= getMinsAsInt(ts) *60;
    total+= getSecsAsFloat(ts);
    return total;
}


//Only defined where 1st parameter is the dependent variable.
function isEarlierThan(ts1, ts2){
    return toTotalseconds(ts1) < toTotalseconds(ts2);
}

//Only defined where 1st parameter is the dependent variable.
function isLaterThan(ts1, ts2){
    return toTotalseconds(ts1) > toTotalseconds(ts2);
}




function getHoursAsInt(ts){
    var temp = ts.split(':',3);
    temp[3] = ts.substr(6);
    var hh;
    hh=parseInt(temp[0]); 
    return hh;
}
function getMinsAsInt(ts){
    var temp = ts.split(':',3);
    temp[3] = ts.substr(6);
    var mm;
    mm=parseInt(temp[1]); 
    return mm;
}
function getSecsAsFloat(ts){
    var temp =ts.split(':',3);
    temp[3] = ts.substr(6);
    var ss;
    ss=parseInt(temp[2]); 
    return ss;
}

function getHoursAsString(ts){
    var temp =ts.split(':',3);
    temp[3] = ts.substr(6);
    var hh;
    hh=temp[0]; 
    return hh;
}
function getMinsAsString(ts){
    var temp = ts.split(':',3);
    temp[3] = ts.substr(6);
    var mm;
    mm=temp[1]; 
    return mm;
}
function getSecsAsString(ts){
    var temp = ts.split(':',3);
    temp[3] = ts.substr(6);
    var ss;
    ss=temp[2]; 
    return ss;
}

export { getIndexOfMaxInSet};   
export { getIndexOfMinInSet};   
export {getMaxInSet};
export {getMinInSet};
export {getRightHandData};
export {getLeftHandData};
export { toBinsToGoalRate};
export {toBins};
export {isLaterThan};
export {toTotalseconds};
export {getHoursAsString};
export {getMinsAsString};
export {getSecsAsString };
export {getHoursAsInt };
export {getMinsAsInt };
export {getSecsAsFloat };
