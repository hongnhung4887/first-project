
const start = prompt('start: ')
const end = prompt('End: ')
const step = prompt('step: ')

document.getElementById('output1').innerHTML = 'Start number:' + start;
document.getElementById('output2').innerHTML = 'End number: ' + end;
document.getElementById('output3').innerHTML = 'Step number: ' + step;


const sNum = parseInt(start)
const eNum = parseInt(end)
const stNum = parseInt(step)

const myArray = []

while (sNum <= eNum) {
    myArray.push(sNum)
    sNum += stNum
}

document.getElementById('output4').innerHTML = 'Array: ' + myArray;


// function getArray(start, end, step) {



//     //    const message = prompt('Enter a message')
//     //    alert('Your input is: ' + message)
//     //    const output = document.getElementById("output")
//     //    output.innerHTML = 'Your message is ' + message
// }

// getArray(start, end, step);
// function getSum(){}

// function getBinary(){}

