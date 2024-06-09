function* generateTasks() {
  try {
    yield "Start task";
    yield "Continue tasks";
    yield "Almost done with task";
  
    // console.log(generator.next()); // { value: 1, done: false }
    // console.log(numbers.return(100));
  } catch (error) {
    console.error('A problem ocurred', error)
  }
}

const tasks = generateTasks();

console.log(tasks.next().value); // Outputs: "Start task"
console.log(tasks.next().value); // Outputs: "Continue task"
tasks.throw(new Error("Oops! Something went wrong.")) // Outputs: "A problem ocurred: Oops! Something went wrong."
console.log(tasks.next()); // Outputs: { value: undefined, done: true }


function* infiniteNumbers() {
  let index = 0;
  while (true) {
    index++;
  }

}

