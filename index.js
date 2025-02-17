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


// Add a new button for 'Dates' with a love-themed design
const surpriseButton = document.getElementById('surpriseButton');
const datesButton = document.createElement('button');
datesButton.textContent = 'Dates';
datesButton.id = 'datesButton';
datesButton.style.marginLeft = '10px';
datesButton.style.padding = '10px 20px';
datesButton.style.backgroundColor = '#ff69b4'; // Pink for a love theme
datesButton.style.color = 'white';
datesButton.style.border = 'none';
datesButton.style.borderRadius = '5px';
datesButton.style.cursor = 'pointer';
datesButton.style.fontWeight = 'bold';
datesButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

// Add hover effect
datesButton.addEventListener('mouseenter', () => {
    datesButton.style.backgroundColor = '#ff1493'; // Deep pink on hover
});
datesButton.addEventListener('mouseleave', () => {
    datesButton.style.backgroundColor = '#ff69b4';
});

// Append the new button next to 'Surprise me'
surpriseButton.insertAdjacentElement('afterend', datesButton);

// Create the Dates popup
const datesPopup = document.createElement('div');
datesPopup.id = 'datesPopup';
datesPopup.style.position = 'fixed';
datesPopup.style.top = '50%';
datesPopup.style.left = '50%';
datesPopup.style.transform = 'translate(-50%, -50%)';
datesPopup.style.width = '65%';
datesPopup.style.backgroundColor = '#ffe4e1'; // Light pink background

datesPopup.style.color = '#d40073'; // Dark pink text for love theme
datesPopup.style.fontFamily = 'Cursive, sans-serif';
datesPopup.style.padding = '20px';
datesPopup.style.textAlign = 'left';
datesPopup.style.borderRadius = '10px';
datesPopup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
datesPopup.style.display = 'none';
datesPopup.style.zIndex = '1000';

// Add table content
const table = `
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr>
                <th style="border-bottom: 2px solid #d40073; padding: 10px;">Date</th>
                <th style="border-bottom: 2px solid #d40073; padding: 10px;">Where</th>
                <th style="border-bottom: 2px solid #d40073; padding: 10px;">When</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; max-width: 40px;">First Date!</td>
                <td style="padding: 10px; max-width: 40px;">Technopark</td>
                <td style="padding: 10px; max-width: 40px;">09 June 2024</td>
            </tr>
            <tr>
                <td style="padding: 10px; max-width: 40px;">2nd Date</td>
                <td style="padding: 10px; max-width: 40px;">Technopark AGAIN! (but at night haha)</td>
                <td style="padding: 10px; max-width: 40px;">19 November 2024</td>
            </tr>
            <tr>
                <td style="padding: 10px; max-width: 40px;">3rd Date (Special!!!)</td>
                <td style="padding: 10px; max-width: 40px;">Cinema - Za3zou3 film (someone really liked it hhhh)- Hassan 2 Mosque</td>
                <td style="padding: 10px; max-width: 40px;">21 November 2024</td>
            </tr>
            <tr>
                <td style="padding: 10px; max-width: 40px;">4th Date (To remember forever!! What a way to start the new year!!!)</td>
                <td style="padding: 10px; max-width: 40px;">Ain Diab beach</td>
                <td style="padding: 10px; max-width: 40px;">04 January 2025</td>
            </tr>
            <tr>
                <td style="padding: 10px; max-width: 40px;">5th Date</td>
                <td style="padding: 10px; max-width: 40px;">Ain Diab Beach - Anfa Park (someone wasnt in the mood hhhh)</td>
                <td style="padding: 10px; max-width: 40px;">9 February 2025</td>
            </tr>
        </tbody>
    </table>
    <button id="closeDatesPopup" style="margin-top: 20px; padding: 10px 20px; background-color: #d40073; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Close</button>
`;
datesPopup.innerHTML = table;

document.body.appendChild(datesPopup);

// Add overlay for Dates popup
const datesOverlay = document.createElement('div');
datesOverlay.id = 'datesOverlay';
datesOverlay.style.position = 'fixed';
datesOverlay.style.top = '0';
datesOverlay.style.left = '0';
datesOverlay.style.width = '100%';
datesOverlay.style.height = '100%';
datesOverlay.style.background = 'rgba(0, 0, 0, 0.5)';
datesOverlay.style.display = 'none';
datesOverlay.style.zIndex = '999';

document.body.appendChild(datesOverlay);

// Event listeners for Dates button
const showDatesPopup = () => {
    datesPopup.style.display = 'block';
    datesOverlay.style.display = 'block';
    // Adjust popup size for mobile devices
    if (window.innerWidth <= 768) {
        datesPopup.style.width = '80%';
        datesPopup.style.padding = '10px';
    } else {
        datesPopup.style.width = '85%';
        datesPopup.style.padding = '20px';
    }
};

const hideDatesPopup = () => {
    datesPopup.style.display = 'none';
    datesOverlay.style.display = 'none';
};

datesButton.addEventListener('click', showDatesPopup);
document.getElementById('closeDatesPopup').addEventListener('click', hideDatesPopup);
datesOverlay.addEventListener('click', hideDatesPopup);
