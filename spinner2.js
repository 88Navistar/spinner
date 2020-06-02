spinners = ["\r|   ", "\r/   ", "\r-   ", "\r|\   "];
//const spinners = '\r|    \r/    \r-    \r|'  ; 
let delay = 0;
for (const spin of spinners) {
    setTimeout(() => {
    process.stdout.write(spin); 
  }, delay);
    delay += 400
};
