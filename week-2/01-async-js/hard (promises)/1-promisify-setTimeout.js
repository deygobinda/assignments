/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promis = new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve()
        }, n *1000);
    })
    return promis
}

module.exports = wait;
