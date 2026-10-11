let count = 0;
const countBtn = document.getElementById("countBtn");
const countOutput = document.getElementById("countOutput");
const resetBtn = document.getElementById("resetBtn");

console.log("countBtn:", countBtn);
console.log("countOutput:", countOutput);
console.log("resetBtn:", resetBtn);

countBtn.addEventListener("click", function(){
    count++;
    countOutput.textContent = count;
    console.log("countButton clicked");
    console.log("Current count:", count);
});

resetBtn.addEventListener("click", function(){
    count = 0;
    countOutput.textContent = count;
    console.log("resetButton clicked");
    console.log("Current count:", count);
});