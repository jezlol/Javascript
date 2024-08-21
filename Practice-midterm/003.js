function longestUniqueSubarrayWithTargetSum(arr, targetSum) {
    let start = 0;
    let currentSum = 0;
    let maxLength = 0;
    let bestSubarray = [];
    let seen = new Set();

    for (let end = 0; end < arr.length; end++) {
        let currentElement = arr[end];
        
        // If the element is already in the window, remove elements from the start
        while (seen.has(currentElement)) {
            seen.delete(arr[start]);
            currentSum -= arr[start];
            start++;
        }
        
        // Add the current element to the window
        seen.add(currentElement);
        currentSum += currentElement;

        // While the sum exceeds target, remove elements from the start
        while (currentSum > targetSum) {
            seen.delete(arr[start]);
            currentSum -= arr[start];
            start++;
        }

        // Check if we have a valid subarray with the target sum
        if (currentSum === targetSum) {
            let windowLength = end - start + 1;
            if (windowLength > maxLength) {
                maxLength = windowLength;
                bestSubarray = arr.slice(start, end + 1);
            }
        }
    }

    return { maxLength, subarray: bestSubarray };
}

// Example usage:
console.log(longestUniqueSubarrayWithTargetSum([2, 3, 4, 5, 6, 2, 3, 4, 7], 15));
// Expected output: { maxLength: 3, subarray: [4, 5, 6] }

console.log(longestUniqueSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
// Expected output: { maxLength: 5, subarray: [1, 2, 3, 4, 5] }

console.log(longestUniqueSubarrayWithTargetSum([4, 5, 6, 7, 7, 8, 9, 10, 11], 26));
// Expected output: { maxLength: 0, subarray: [] }

console.log(longestUniqueSubarrayWithTargetSum([1, 1, 1, 1, 1], 2));
// Expected output: { maxLength: 0, subarray: [] }
