# Smelly Code Smells :(

## Mysterious Names

- Unclear variable names like `const a = "increment"` and `const b = "counter"` make the code hard to read and maintain. I also felt that `let c = 0` to represent the counter would take a few seconds for the reader to process which could be easily avoided, so I used _Rename Variable_ to simply rename `c` to `counter`.
- I used _Rename Variable_ to rename the functions `bI`, `bD`, and `bR` to `buttonIncrement`, `buttonDecrement`, and `buttonReset` respectively; and the counter element `ctr` to `labelCounter` as well, to differentiate between the internal counter and the counter number being displayed.
- On the other hand, I decided to completely remove constants `a` and `b`, since their mere presence led to the next code smell.

## Inconsistent Style

- This particular code smell isn't present in Fowler's book, but it's still present in this code.
- The HTML for the counter is sometimes written as `<button id="dec">Decrement</button>`, and other times as `<button id="a">Increment</button>`.
- I fixed this inconsistency by sticking to the former style for handling HTML elements, such as changing `<button id="a">Increment</button>` to `<button id="increment">Increment</button>`.

## Duplicated Code

- Every time an event listener is added to an HTML element, namely the three buttons of the program, the code to update the counter display is duplicated across each function.
- I used _Extract Function_ on that piece of code and properly named it `updateDisplay()` in order to erase this issue.

## Primitive Obsession --> Shotgun Surgery

- In the program's previous state, adding a new button with similar functionality to the current three buttons would require the programmer to edit multiple places in the code:
  1. Add the button to the document.
  2. Grab the button from the document.
  3. Add an event listener to the button.
- This issue was a direct result of keeping each button as its own primitive object, rather than
- Instead of proceeding one step at a time on all buttons, I decided to proceed by implementing all steps one button at a time. This required me to use _Replace Primitive with Object_, leading me to keep each button stored in an array of buttons such that each button is shaped by a `Button` interface.
