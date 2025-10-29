// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

interface Button {
  label: string;
  updateCounter(): void;
}

const allButtons: Button[] = [
  {
    label: "increment",
    updateCounter() {
      counter++;
    },
  },
  {
    label: "decrement",
    updateCounter() {
      counter--;
    },
  },
  {
    label: "reset",
    updateCounter() {
      counter = 0;
    },
  },
];

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="decrement">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the counter span element from the document
  const labelCounter = document.getElementById("counter");
  if (!labelCounter) return;
  for (const button of allButtons) {
    const element = document.getElementById(button.label) as HTMLButtonElement;
    element.addEventListener("click", () => {
      button.updateCounter();
      updateDisplay();
    });
    if (!element) return;
  }

  function updateDisplay() {
    // Update the counter display
    labelCounter!.innerHTML = `${counter}`;
    // Update the document title
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  }
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
