// missing number

const nums = [3, 0, 1]

const findMissingNum = (nums) => {
    let minimum = Math.min(...nums);
    let maximum = Math.max(...nums);
    if (minimum !== 0) {
        return 0;
    }
    if (nums.length == 1) {
        if (nums[0] == 0) {
            return 1
        }
        return nums[0] - 1;
    }
    let completeAnswer = 0;
    for (let i = minimum; i <= maximum; i++) {
        completeAnswer += i;
    }
    let arrAnswer = 0;
    for (let i = 0; i < nums.length; i++) {
        arrAnswer += nums[i];
    }

    if (arrAnswer !== completeAnswer) {
        return completeAnswer - arrAnswer;
    }


    return maximum + 1;
}

console.log(findMissingNum(nums))