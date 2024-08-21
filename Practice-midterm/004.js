function groupByProperty(array, property) {
    return array.reduce((result, currentObject) => {
        // Get the value of the specified property
        const key = currentObject[property];
        
        // Check if this key exists in the result object
        if (!result[key]) {
            // If not, initialize it with an empty array
            result[key] = [];
        }
        
        // Push the current object into the appropriate group
        result[key].push(currentObject);
        
        return result;
    }, {});
}

const data = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "San Francisco" },
    { name: "Charlie", age: 25, city: "New York" },
    { name: "David", age: 30, city: "Los Angeles" },
    { name: "Eve", age: 35, city: "San Francisco" },
];

console.log(groupByProperty(data, "age"));
console.log(groupByProperty(data, "city"));
