function getSubArrays(nums){
    let arrayLength = 3;
    let numberOfSubArrays = (nums.length - arrayLength) + 1;
    let mainAray = [];
    let j = 0


    for(let i = 0; i < numberOfSubArrays; i++) {
        let subArray = [];

        let index = 0;
        let count = 0;
        for(; j < nums.length; j++) {
            subArray[index] = nums[j];
            count++;
            if(count === arrayLength) break;
            index++
        }
        mainAray.push(subArray)
        j = j - 1;
    }
    return mainAray;
}

function getSumOfSubArrays(numbers){
    let nums = getSubArrays(numbers);
    let sum = 0;
    let sums = [];
    for(let i = 0; i < nums.length; i++){
        sum = 0
        for(let j = 0; j < nums[i].length; j++){
            sum += nums[i][j];
        }
        sums.push(sum);
    }
    return sums;
}

function getHighestSubArray(numbers){
    let subArrays = getSubArrays(numbers);
    let sums = getSumOfSubArrays(numbers);
    let largest = sums[0];

    for(let i = 0; i < sums.length; i++){
        if(sums[i] > largest){
            largest = sums[i];
        }
    }
    return subArrays[sums.indexOf(largest)];
}

module.exports = {getSubArrays, getSumOfSubArrays, getHighestSubArray};