function lengthOfLongestSubstring(s) {
    let max = 0;
    let start = 0;
    let map = new Map();
    let longestSubstring = "";
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(map.get(s[i]) + 1, start);
        }
        map.set(s[i], i);
        if (i - start + 1 > max) {
            max = i - start + 1;
            longestSubstring = s.substring(start, i + 1);
        }
    }
    return { maxLen: max, longestSubstring: longestSubstring };
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));