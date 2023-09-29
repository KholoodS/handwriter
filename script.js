// Get references to HTML elements
const inputText = document.getElementById('inputText');
const convertButton = document.getElementById('convertButton');
const outputArea = document.getElementById('outputArea');

// Function to convert text to handwriting-style text
function convertToHandwriting(text) {
    // Define a character map for lowercase and uppercase letters
    const characterMap = {
        'a': '𝒶',
        'b': '𝒷',
        'c': '𝒸',
        'd': '𝒹',
        'e': '𝑒',
        'f': '𝒻',
        'g': '𝑔',
        'h': 'ℎ',
        'i': '𝒾',
        'j': '𝒿',
        'k': '𝓀',
        'l': '𝓁',
        'm': '𝓂',
        'n': '𝓃',
        'o': '𝑜',
        'p': '𝓅',
        'q': '𝓆',
        'r': '𝓇',
        's': '𝓈',
        't': '𝓉',
        'u': '𝓊',
        'v': '𝓋',
        'w': '𝓌',
        'x': '𝓍',
        'y': '𝓎',
        'z': '𝓏',
        'A': '𝒜',
        'B': 'ℬ',
        'C': '𝒞',
        'D': '𝒟',
        'E': 'ℰ',
        'F': 'ℱ',
        'G': '𝒢',
        'H': 'ℋ',
        'I': 'ℐ',
        'J': '𝒥',
        'K': '𝒦',
        'L': 'ℒ',
        'M': 'ℳ',
        'N': '𝒩',
        'O': '𝒪',
        'P': '𝒫',
        'Q': '𝒬',
        'R': 'ℛ',
        'S': '𝒮',
        'T': '𝒯',
        'U': '𝒰',
        'V': '𝒱',
        'W': '𝒲',
        'X': '𝒳',
        'Y': '𝒴',
        'Z': '𝒵'
    };

    // Convert the text
    let convertedText = '';
    for (let i = 0; i < text.length; i++) {
        const character = text[i];
        const convertedCharacter = characterMap[character] || character;
        convertedText += convertedCharacter;
    }

    return convertedText;
}

// Event listener for the "Convert" button
convertButton.addEventListener('click', () => {
    const textToConvert = inputText.value;
    const convertedText = convertToHandwriting(textToConvert);

    // Display the converted text
    outputArea.textContent = convertedText;
});
