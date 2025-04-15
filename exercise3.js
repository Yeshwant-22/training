// 1. Delayed Execution (setTimeout)
// function delaying(delay){
//     setTimeout(() => {
//         console.log("Hello, After 3 seconds");
//     },delay)
// };
// delaying(3000);

// 2. Repeated Execution (setInterval)
// function repeat(){
//     let count = 0;
//     let interval = setInterval(() => {
//     console.log("hello, Every 2 seconds");
//     count += 2;
//     if(count >= 10){
//         clearInterval(interval);
//     }
// },2000);
// }
// repeat();

// 3. Fetch Data from API (fetch)
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));

// 4. Creating a Simple Promise
function delayedPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promise Resolved");
        }, 2000);
    });
}
delayedPromise().then(message => console.log(message));

// 5. Implementing a Callback Function
function processData(callback) {
    setTimeout(() => {
        callback("Data Processed");
    }, 2000);
}
processData(data => console.log(data));

// 6. Using async/await with setTimeout
async function waitAndLog() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Waited 3 seconds");
}
waitAndLog();

// 7. Fetch API with Async/Await
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

// 8. Promise Chaining
function step1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 1"), 1000);
    });
}
function step2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 2"), 2000);
    });
}
step1().then(result1 => {
    console.log(result1);
    return step2();
}).then(result2 => {
    console.log(result2);
});

// 9. Parallel Execution with Promise.all
function task1() {
    return new Promise(resolve => setTimeout(() => resolve("Task 1 Done"), 2000));
}
function task2() {
    return new Promise(resolve => setTimeout(() => resolve("Task 2 Done"), 3000));
}
Promise.all([task1(), task2()]).then(results => console.log(results));

// 10. Stop Interval on Condition (clearInterval)
function countNumbers() {
    let count = 1;
    let interval = setInterval(() => {
        console.log(count);
        if (count === 5) {
            clearInterval(interval);
        }
        count++;
    }, 1000);
}
countNumbers();