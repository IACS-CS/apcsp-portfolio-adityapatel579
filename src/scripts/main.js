import "../styles/styles.css";
// Add imports here
import Aos from "aos";
import "aos/dist/aos.css";
console.log("What?");
console.log("Hello world, from main.js!");
if (typeof window !== "undefined") {
  // Put code that runs ONLY in the browser here -- this is most likely where
  // MOST of your code should go.
  //
  Aos.init();
  // If you see a SSR error, try moving your code here!
  console.log("Hello world, browser :-)");
}
