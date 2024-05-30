
function checkKey(keyTimes) {
    var longestDuration = 0;
    var slowestKey = null;
  
    for (let i = 1; i < keyTimes.length; i++) {
      var currentKey = keyTimes[i][0];
      var previousTime = keyTimes[i - 1][1];
      var currentTime = keyTimes[i][1];
      var currentDuration = currentTime - previousTime;
  
      if (currentDuration > longestDuration) {
        longestDuration = currentDuration;
        slowestKey = currentKey;
      }
    }
  
    return slowestKey;
  }

var keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15],[5,100]];
console.log(checkKey(keyTimes));
