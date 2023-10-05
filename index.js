// code your solution here
function saturdayFun() {
    console.log ("function exists")
}
saturdayFun()

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork() {
    console.log("function exist")
}

function mondayWork(defaultActivity = "go to the office") {
    return `This Monday, I will ${defaultActivity}.`
}

function wrapAdjective() {
    console.log("function exists")
}

function wrapAdjective(asterick = '*'){
return function (emphatic = 'a hard worker') {
return `You are ${asterick}${emphatic}${asterick}!`
 }
}