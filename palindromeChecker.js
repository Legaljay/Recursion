//Palindrome Checker

/*

1. Start with a word as input.
2. Initialize a left counter to 0, pointing to the beginning of the word.
3. Initialize a right counter to the length of the word minus 1, pointing to the end of the word.
4. Repeat the following steps while the left counter is less than the right counter:
   - If the character at the left counter is not equal to the character at the right counter, return false.
   - Increment the left counter by 1.
   - Decrement the right counter by 1.
5. If the loop completes without returning false, return true to indicate that the word is a palindrome.

*/

//Implementation 

function isPalindrome(word) {
    // Initialize left counter to the beginning of the word
    let left = 0;
  
    // Initialize right counter to the end of the word
    let right = word.length - 1;
  
    // Repeat the following steps while left counter is less than right counter
    while (left < right) {
      // If the characters at left and right positions are not equal, the word is not a palindrome
      if (word[left] !== word[right]) {
        return false;
      }
  
      // Move the left counter one position to the right
      left++;
  
      // Move the right counter one position to the left
      right--;
    }
  
    // If the loop completes without returning false, the word is a palindrome
    return true;
  }

  