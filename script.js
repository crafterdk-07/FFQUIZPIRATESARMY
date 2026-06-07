// Yaha aap apne questions aur unke sahi answers set karenge
// correctAnswer: 0 (matlab pehla option), 1 (dusra), 2 (teesra), 3 (chautha)
const quizData = [
    {
        question: "FreeFire Ka Pehla Map Konsa Hai?",
        options: ["Bermuda", "Purgatory", "Kalahari", "No-Name Map"],
        correctAnswer: 1
    },
    {
        question: "Freefire mein Ab tak kitne update aa chuke hai?",
        options: ["52", "53", "54", "55"],
        correctAnswer: 1
    },
    {
        question: "Aisi Shotgun Jiske Andar In-built Scope Hai?",
        options: ["M500", "SPAS", "Charge-Buster", "M1014"],
        correctAnswer: 1
    },
    {
        question: "Freefire Mein Jo OB Updates Aate hai (jaise ob42) to usme OB Ka full form kya hota hai?",
        options: ["open Beta", "Online Battle", "On Board", "Official Beta"],
        correctAnswer: 0
    },
    {
        question: "Freefire ka pehla pet konsa hai?",
        options: ["Robo", "Kitty", "Nighpanther", "Falcon"],
        correctAnswer: 1 
    },
    {
        question: "Freefire ka pehla official torunament kab hua?",
        options: ["2018", "2019", "2021", "2022"],
        correctAnswer: 1 
    },
    {
        question: "FreeFire India Mein Ban Kab Hua?",
        options: ["14 Feb 2021", "5 march 2021", "14 feb 2022", "5 march 2022"],
        correctAnswer: 2 
    },
    {
        question: "FreeFire ki Pehli 7 level upgrade hone wali EVO GUN konsi thi?",
        options: ["Cobra MP40", "Megalodan Scar", "BlueFlame Draco", "Booyah day UMP"],
        correctAnswer: 2
    },
    {
        question: "FreeFire ka Pehla Collab kiske sath hua?",
        options: ["Money Heist", "Ksmir", "One Punch Man", "Dj Alok"],
        correctAnswer: 3 
    },
    {
        question: "Freefire ka pehla awakened character konsa tha?",
        options: ["Hayato", "kelly", "Andrew", "Alwaro"],
        correctAnswer: 1 
    },
    {
        question: "Aisi Gun Jo SMG Ammo use karti hai aur Short Range and As a sniper bhi kaam karti hai?",
        options: ["CG15", "Gatling", "Crossbow", "VSS"],
        correctAnswer: 0
    },
    {
        question: "FreeFire ke Pehle Inida Offical Tournament ka naam kya tha?",
        options: ["FFIC", "FFPL", "FFITL", "FFMIC"],
        correctAnswer: 2
    }
];

const container = document.getElementById('quiz-container');

function loadQuiz() {
    quizData.forEach((item, index) => {
        const qNum = index + 1;
        let optionsHTML = '';

        item.options.forEach((opt, optIndex) => {
            optionsHTML += `
                <div class="option-row">
                    <div class="option-text">${opt}</div>
                    <div class="player-checks">
                        <label class="player-label radhe" title="Radhe">
                            <input type="radio" name="q${qNum}_radhe" value="${optIndex}">
                            R
                        </label>
                        <label class="player-label shivam" title="Shivam">
                            <input type="radio" name="q${qNum}_shivam" value="${optIndex}">
                            S
                        </label>
                        <label class="player-label yash" title="Yash">
                            <input type="radio" name="q${qNum}_yash" value="${optIndex}">
                            Y
                        </label>
                    </div>
                </div>
            `;
        });

        const cardHTML = `
            <div class="question-card">
                <h3 class="question-title">Q${qNum}. ${item.question}</h3>
                <div class="options-container">
                    ${optionsHTML}
                </div>
            </div>
        `;
        
        container.innerHTML += cardHTML;
    });
}

function submitQuiz() {
    let scores = {
        radhe: 0,
        shivam: 0,
        yash: 0
    };

    quizData.forEach((item, index) => {
        const qNum = index + 1;
        
        const radheAns = document.querySelector(`input[name="q${qNum}_radhe"]:checked`);
        const shivamAns = document.querySelector(`input[name="q${qNum}_shivam"]:checked`);
        const yashAns = document.querySelector(`input[name="q${qNum}_yash"]:checked`);

        if (radheAns && parseInt(radheAns.value) === item.correctAnswer) scores.radhe++;
        if (shivamAns && parseInt(shivamAns.value) === item.correctAnswer) scores.shivam++;
        if (yashAns && parseInt(yashAns.value) === item.correctAnswer) scores.yash++;
    });

    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('hidden');
    
    resultBox.innerHTML = `
        <h2 class="result-title">🎯 SQUAD SCORES 🎯</h2>
        <div class="score-row">
            <span class="score-name radhe">RADHE</span>
            <span class="score-points">${scores.radhe} / 12</span>
        </div>
        <div class="score-row">
            <span class="score-name shivam">SHIVAM</span>
            <span class="score-points">${scores.shivam} / 12</span>
        </div>
        <div class="score-row">
            <span class="score-name yash">YASH</span>
            <span class="score-points">${scores.yash} / 12</span>
        </div>
    `;
    
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

window.onload = loadQuiz;