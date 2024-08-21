function findUniqueSubstrings(str1, str2, n) {
    const substrings1 = new Set();
    const substrings2 = new Set();
    const uniqueSubstrings = [];

    // Generate all substrings of length n for str1
    for (let i = 0; i <= str1.length - n; i++) {
        substrings1.add(str1.substring(i, i + n));
    }

    // Generate all substrings of length n for str2
    for (let i = 0; i <= str2.length - n; i++) {
        substrings2.add(str2.substring(i, i + n));
    }

    // Find substrings that are in str1 but not in str2
    substrings1.forEach(substring => {
        if (!substrings2.has(substring)) {
            uniqueSubstrings.push(substring);
        }
    });

    return uniqueSubstrings;
}

// Test cases
console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg", 3)); // Output: ['abc', 'bcd', 'cde', 'def', 'efa', 'fab']
console.log(findUniqueSubstrings("hellohello", "helloworld", 2)); // Output: ['oh']
console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4)); // Output: ['avas', 'vasc', 'ascr', 'ptjs']
console.log(findUniqueSubstrings("aaaaa", "aaaaa", 2)); // Output: []
