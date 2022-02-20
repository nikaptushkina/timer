// argv array for everything in the command line + slice to get ride of path to node and path to code
const data = process.argv.slice(2);

// skips the negative values and not a number values
let inputs = data.filter(number => {
  return number > 0;
});

// TIMER FUNCTION
const timer = function() {
  for (const num of inputs) {
    setTimeout(() => {
      return process.stdout.write('\x07');
    }, num * 1000)
  }
};

// TEST CODE
timer(inputs);
