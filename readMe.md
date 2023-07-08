## isPalindrome

The `isPalindrome` function is used to determine if a given word is a palindrome.

### Syntax

```javascript
function isPalindrome(word)
```

### Parameters

- `word` (string): The word to be checked for palindrome.

### Return Value

- `true` if the word is a palindrome.
- `false` if the word is not a palindrome.

### Description

The `isPalindrome` function takes a word as input and checks if it is a palindrome using counters and loops. It compares characters at corresponding positions from the beginning and end of the word until the middle is reached. If any of the characters at corresponding positions are not equal, the function returns `false`, indicating that the word is not a palindrome. If all characters are equal, the function returns `true`, indicating that the word is a palindrome.

### Example

```javascript
const word1 = "radar";
console.log(isPalindrome(word1)); // Output: true

const word2 = "hello";
console.log(isPalindrome(word2)); // Output: false
```

### Algorithm

The `isPalindrome` function follows the following algorithm:

1. Start with a word as input.
2. Initialize a left counter to 0, pointing to the beginning of the word.
3. Initialize a right counter to the length of the word minus 1, pointing to the end of the word.
4. Repeat the following steps while the left counter is less than the right counter:
   - If the character at the left counter is not equal to the character at the right counter, return false.
   - Increment the left counter by 1.
   - Decrement the right counter by 1.
5. If the loop completes without returning false, return true to indicate that the word is a palindrome.

### Notes

- The function is case-sensitive, so "Racecar" and "racecar" would be considered different words and yield `false` as the result.
- The function assumes that the input is a valid string. No type-checking is performed on the input parameter.