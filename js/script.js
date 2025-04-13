// 1
logItems(['Mango', 'Poly', 'Ajax']);
function logItems(array) {
    for (let i = 0; i < array.length; ) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  
  // Приклад виклику:

  //
  

// 3
function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
  
    for (let word of words) {
      if (word.length > longestWord) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  const result = findLongestWord("JavaScript це дуже цікава мова");
  console.log(result);