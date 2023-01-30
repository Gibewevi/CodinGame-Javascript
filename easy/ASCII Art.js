
// Function that replaces special characters
const replaceSpecialChars = (T) => {
    return T.replace("@", "?");
  };
  
  const L = parseInt(readline());
  const H = parseInt(readline());
  let T = readline();
  
  // Replace "@" with "?" and split the string into an array of characters
  T = replaceSpecialChars(T.toUpperCase()).split("");
  
  // List to store the rows
  let rows = [];
  
  // List to store the result
  let result = [];
  
  // Read and store H rows
  for (let i = 0; i < H; i++) {
    const row = readline();
    rows.push(row);
  }
  
  // Loop through each character in T
  for (let i = 0; i < T.length; i++) {
    for (let j = 0; j < H; j++) {
      c = T[i];
      let order = null;
      // Determine the position of the character in the rows
      if (
        T[i].charCodeAt(0) < "A".charCodeAt(0) ||
        T[i].charCodeAt(0) > "Z".charCodeAt(0)
      ) {
        order = 26 * L;
      } else {
        order = (T[i].charCodeAt(0) - 65) * L;
      }
      // Get the letter at the determined position
      let letter = rows[j].slice(order, order + L);
      // Add the letter to the result array
      if (result.length == H) {
        result[j] += letter;
      } else {
        result.push(letter);
      }
    }
  }
  
  // Log each row in the result array
  for (let i = 0; i < H; i++) {
    console.log(result[i]);
  }
  