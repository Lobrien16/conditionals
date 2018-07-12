const username = process.argv[2];
if (username) {
    console.log("Hello", username)
} else {
    console.log ("You must provide a user name");
}

console.log("You find yourself in a store shopping...");
let health = 100
let money = 100

const item = process.argv[3];
if (item === "jacket") {
money -=40;
health +=20;
console.log("You bought a jacket");
}
else if (item === "candy") { 
    money -= 10;
    console.log ("You bought candy");
}
else if ( item === "paint") {
    paint -= 30;
    console.log ("You bought paint");
}
else if (item === "hammer") {
    hammer -= 70;
    console.log ("You bought hammer");
}
else { 
    console.log ("You bought nothing");
}

console.log(`You have ${money} dollars left.`);
console.log ("You exit the store and find yourself in the middle of an anti-android protest!")
console.log("You could run or stay...");
const randomPerson = Math.random() > .5 ? "John" : "Felipe"; 

const choice = process.argv[4]
const message = process.argv[5];
if (!choice){
    console.log("You shut down due to inactivity and get robbed of all your money");
    money = 0 
} else if (choice !== "run" && randomPerson === "Felipe"){
    console.log("The protesters attack you...");
    if (item !== "jacket"){
        console.log("...but Felipe, a fellow android shows up to help you escape them");   
    }else {
        console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
        health -= 50

    }
} else if (choice === "run" && randomPerson === "Felipe"){
    console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
    if (item === "hammer" || item === "jacket") {
        console.log("...and holds you for questioning for suspicious activity");
        money = 0
    } else {
        console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go."); 
    }
} else {
    if (item === "paint") {
        console.log("You boldy protest by painting a pro-android message...");   

        if (message) {
            console.log(`..."${message.toUpperCase()}"`);

        } else {
            console.log(`..."WE ARE ALIVE"`);   
        } 

    } else {
        console.log(`Nothing interesting happens, but at least you got that ${item}`);  
    }
}

let score = 0;
score += money + health;

if (choice) {
    score += 10
}

if (message) {
    score += 10
}

console.log("The end");
console.log(`Score: ${score}`);