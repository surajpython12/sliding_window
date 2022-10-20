var maxSlidingWindow = function(nums, k) {
    let i = 0; let j =0;
    let queues = [];
    let result = [];

    while(j<nums.length){
        while(queues.length>0 && queues[0]<nums[j]){
            queues.shift()
        }
        queues.push(nums[j])
        if(j-i+1 === k){
            result.push(queues[0])
            if(queues[0] == nums[j]){
                queues.shift()
            }
            i++;

        }
        j++
        

    }
    
    return result


    
};
let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
console.log(maxSlidingWindow(nums,k))





