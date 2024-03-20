/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000 * t);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000 * t);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000 * t);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();
  const p1 = wait1(t1);
  const p2 = wait2(t2);
  const p3 = wait3(t3);

  return Promise.all([p1, p2, p3]).then(() => {
    const endTime = new Date().getTime();
    return endTime - startTime;
  });
}

module.exports = calculateTime;
