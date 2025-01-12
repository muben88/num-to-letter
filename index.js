// Simple web app to translate numbers to letters and vice versa

// Mapping for number to letter (old phone keyboard layout)
const numberToLetterMap = {
    '2': 'A', '22': 'B', '222': 'C',
    '3': 'D', '33': 'E', '333': 'F',
    '4': 'G', '44': 'H', '444': 'I',
    '5': 'J', '55': 'K', '555': 'L',
    '6': 'M', '66': 'N', '666': 'O',
    '7': 'P', '77': 'Q', '777': 'R', '7777': 'S',
    '8': 'T', '88': 'U', '888': 'V',
    '9': 'W', '99': 'X', '999': 'Y', '9999': 'Z',
    '0': ' ' // Space character
};

// Reverse mapping for letter to number
const letterToNumberMap = Object.fromEntries(
    Object.entries(numberToLetterMap).map(([key, value]) => [value, key])
);

function translateNumbersToLetters(input) {
    return input.split('.')
                .map(segment => numberToLetterMap[segment] || '?')
                .join('');
}

function translateLettersToNumbers(input) {
    return input.toUpperCase().split('')
                .map(char => letterToNumberMap[char] || '?')
                .join('.');
}

// Simple HTML Interface
document.body.innerHTML = `
    <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <div class="overlay" id="overlay"></div>
        <div class="popup" id="popup">
            <p>
            في عامٍ جديدٍ يزهر بالأمازيغيةِ، <br>
            أكتب لكِ شعراً من قلبي بنبضِ الحريةِ،<br>
            حنان، يا زهرةً في بستانِ الحياة،<br>
            بحبكِ تزهر الأيام وتكتمل الحكايات.<br>

            عام أمازيغي سعيد أُهديكِ من الروح،<br>
            يا من بحضورها يزول كل جرحٍ وجروح،<br>
            في عينيكِ شمسٌ تشرقُ كل صباح،<br>
            وفي ابتسامتكِ عيدٌ يزيل الأتراح.<br>
<br>
            تهنئةٌ بمناسبة العام الجديد،<br>
            حبيبتي، أنتِ الفرحة وأنتِ المزيد،<br>
            كل عام وأنتِ أجمل وأبهى،<br>
            وأمازيغية الروح فيكِ أصفى وأسمى.<br>

            💛✨ⴰⵣⵓⵍ ⴰⵏⴳ ⵎⴰⵣⵉⴳ ⵙⴰⵏⴳ ⵉⴷⵔⴰⵔⵓ!
            </p>
            <button onclick="closePopup()">Close</button>
        </div>
        <button id="surpriseButton">Surprise me!!</button>
        <h1>Number-to-Letter Translator</h1>
        <p id="description">
        This project is a web-based "Number-to-Letter Translator" that mimics the input logic of an old mobile phone keypad. 
        Enter numbers to get corresponding letters or vice versa. Use the number <strong>0</strong> to represent spaces between words.
        </p>
        <div>
            <label for="input">Input:</label>
            <input type="text" id="input" style="width: 300px; margin: 10px;" />
        </div>
        <button id="toLetters">Translate to Letters</button>
        <button id="toNumbers">Translate to Numbers</button>
        <div style="margin-top: 20px;">
            <strong>Output:</strong>
            <p id="output" style="font-size: 18px; color: blue;"></p>
        </div>
    </div>
`;

// Event Listeners
document.getElementById('toLetters').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const output = translateNumbersToLetters(input);
    document.getElementById('output').textContent = output;
});

document.getElementById('toNumbers').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const output = translateLettersToNumbers(input);
    document.getElementById('output').textContent = output;
});

document.getElementById('surpriseButton').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
