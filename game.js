const challenges = [
    // NIVEL 1 (1-5) - Objetivo: 1 jugador intermedio
    { start: "Lionel Messi", end: "Luis Suárez", count: 1, difficulty: 1, solution: "Messi → (Barcelona) → Neymar → (Barcelona) → Luis Suárez" },
    { start: "Cristiano Ronaldo", end: "Casemiro", count: 1, difficulty: 1, solution: "Cristiano → (Real Madrid) → Modric → (Real Madrid) → Casemiro" },
    { start: "Erling Haaland", end: "Robert Lewandowski", count: 1, difficulty: 1, solution: "Haaland → (City) → Gündogan → (Barça) → Lewandowski" },
    { start: "Vinícius Jr.", end: "Jude Bellingham", count: 1, difficulty: 1, solution: "Vinícius → (Real Madrid) → Rodrygo → (Real Madrid) → Bellingham" },
    { start: "Mbappé", end: "Ousmane Dembélé", count: 1, difficulty: 1, solution: "Mbappé → (PSG) → Hakimi → (PSG) → Dembélé" },

    // NIVEL 2 (6-10) - Objetivo: 2 jugadores intermedios
    { start: "Messi", end: "Cristiano Ronaldo", count: 2, difficulty: 2, solution: "Messi → (PSG) → Sergio Ramos → (Real Madrid) → Keylor Navas → (Real Madrid) → Cristiano" },
    { start: "Mbappé", end: "Paolo Maldini", count: 2, difficulty: 2, solution: "Mbappé → (PSG) → Messi → (Barcelona) → Ronaldinho → (Milan) → Maldini" },
    { start: "Ronaldinho", end: "Erling Haaland", count: 2, difficulty: 2, solution: "Ronaldinho → (Milan) → Ibrahimovic → (Milan) → Donnarumma → (City) → Haaland" },
    { start: "Mbappé", end: "Harry Kane", count: 2, difficulty: 2, solution: "Mbappé → (PSG) → Marquinhos → (PSG) → Lucas Moura → (Spurs) → Kane" },
    { start: "Neymar Jr.", end: "Kevin De Bruyne", count: 2, difficulty: 2, solution: "Neymar → (Barça) → Alexis Sánchez → (ManUtd) → Romelu Lukaku → (Chelsea) → De Bruyne" },

    // NIVEL 3 (11-15) - Objetivo: 3 jugadores intermedios
    { start: "Michael Laudrup", end: "Dani Carvajal", count: 3, difficulty: 3, solution: "Laudrup → (Barcelona) → Guardiola → (Barcelona) → Figo → (Real Madrid) → Casillas → (Real Madrid) → Carvajal" },
    { start: "Zlatan Ibrahimovic", end: "Bellingham", count: 3, difficulty: 3, solution: "Zlatan → (PSG) → Maxwell → (PSG) → Cavani → (ManUtd) → Jadon Sancho → (Dortmund) → Bellingham" },
    { start: "Zinedine Zidane", end: "Thomas Müller", count: 3, difficulty: 3, solution: "Zidane → (Real Madrid) → Casillas → (Real Madrid) → James → (Bayern) → Neuer → (Bayern) → Müller" },
    { start: "Leonardo Bonucci", end: "Diego Maradona", count: 3, difficulty: 3, solution: "Bonucci → (Juventus) → Dani Alves → (Barcelona) → Xavi → (Barcelona) → Riquelme → (Boca) → Maradona" },
    { start: "Marco Van Basten", end: "Harry Maguire", count: 3, difficulty: 3, solution: "Van Basten → (Milan) → Maldini → (Milan) → Kaká → (Real Madrid) → Cristiano → (Manchester United) → Maguire" },

    // NIVEL 4 (16-20) - Objetivo: 4 jugadores intermedios
    { start: "Lionel Messi", end: "Diego Maradona", count: 4, difficulty: 4, solution: "Messi → (Barcelona) → Henry → (Arsenal) → Vieira → (Milan) → Baggio → (Juventus) → Ferrara → (Napoli) → Maradona" },
    { start: "Peter Schmeichel", end: "Miguel Merentiel", count: 4, difficulty: 4, solution: "Schmeichel → (Manchester United) → Giggs → (Manchester United) → Cristiano → (Juventus) → Bonucci → (Juventus) → Paredes → (Boca) → Merentiel" },
    { start: "Marcelo Gallardo", end: "Lamine Yamal", count: 4, difficulty: 4, solution: "Gallardo → (River) → Aimar → (Zaragoza) → G. Milito → (Barcelona) → Messi → (Barcelona) → Ter Stegen → (Barcelona) → Yamal" },
    { start: "Diego Milito", end: "Franck Ribery", count: 4, difficulty: 4, solution: "D. Milito → (Inter) → Sneijder → (Real Madrid) → Raúl → (Schalke) → Neuer → (Bayern) → Robben → (Bayern) → Ribery" },
    { start: "Andrea Pirlo", end: "Karim Benzema", count: 4, difficulty: 4, solution: "Pirlo → (Milan) → Shevchenko → (Chelsea) → Drogba → (Chelsea) → Hazard → (Chelsea) → Courtois → (Real Madrid) → Benzema" },

    // NIVEL 5 (21-25) - Objetivo: 2 jugadores intermedios
    { start: "Javier Zanetti", end: "Vincent Kompany", count: 2, difficulty: 5, solution: "Zanetti → (Inter) → Pirlo → (Juventus) → Tevez → (City) → Kompany" },
    { start: "Juan R. Riquelme", end: "Yann Sommer", count: 2, difficulty: 5, solution: "Riquelme → (Barcelona) → Puyol → (Barcelona) → Alexis Sánchez → (Inter) → Sommer" },
    { start: "Roberto Baggio", end: "Robinho", count: 2, difficulty: 5, solution: "Baggio → (Inter) → Ronaldo Nazário → (Real Madrid) → Roberto Carlos → (Real Madrid) → Robinho" },
    { start: "Romário", end: "Paul Pogba", count: 2, difficulty: 5, solution: "Romário → (Barcelona) → Stoichkov → (Parma) → Buffon → (Juventus) → Pogba" },
    { start: "Gabriel Batistuta", end: "Carlos Tevez", count: 2, difficulty: 5, solution: "Batistuta → (Roma) → Totti → (Roma) → De Rossi → (Boca) → Tevez" },

    // NIVEL 6 (26-30) - Objetivo: 4 jugadores intermedios (極 - Extremo)
    { start: "Samuel Eto'o", end: "Pedri", count: 4, difficulty: 6, solution: "Eto'o → (Barcelona) → Puyol → (Barcelona) → Xavi → (Barcelona) → Iniesta → (Barcelona) → Busquets → (Barcelona) → Pedri" },
    { start: "Thierry Henry", end: "David Trezeguet", count: 4, difficulty: 6, solution: "Henry → (Arsenal) → Bergkamp → (Arsenal) → Vieira → (Juventus) → Nedved → (Juventus) → Del Piero → (Juventus) → Trezeguet" },
    { start: "Ronaldo Nazário", end: "Luka Modric", count: 4, difficulty: 6, solution: "Ronaldo Nazário → (Real Madrid) → Roberto Carlos → (Real Madrid) → Sergio Ramos → (Real Madrid) → Benzema → (Real Madrid) → Kroos → (Real Madrid) → Modric" },
    { start: "Cafu", end: "Wayne Rooney", count: 4, difficulty: 6, solution: "Cafu → (Milan) → Seedorf → (Milan) → Kaká → (Real Madrid) → Cristiano → (Manchester United) → Evra → (Manchester United) → Rooney" },
    { start: "Van Basten", end: "Haaland", count: 4, difficulty: 6, solution: "Van Basten → (Milan) → Maldini → (Milan) → Pirlo → (Juve) → Pogba → (ManUtd) → Sancho → (Dortmund) → Haaland" }
];

let players = [];
let scores = {};
let currentChallengeIdx = 0;
let levelOrder = []; 
let currentLevelShuffled = -1; 

const STATE_KEY = 'futbolConnectState';

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-game-btn');
const solveBtn = document.getElementById('solve-btn');
const failBtn = document.getElementById('fail-btn');
const stealModal = document.getElementById('steal-modal');
const solutionModal = document.getElementById('solution-modal');
const scoreSelectionModal = document.getElementById('score-selection-modal');
const levelIntroModal = document.getElementById('level-intro-modal');
const fullscreenBtn = document.getElementById('global-fullscreen-btn');
const nextGameBtn = document.getElementById('next-game-btn');

// Fullscreen Toggle
if(fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleFullscreen);
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener('fullscreenchange', () => {
    if (fullscreenBtn) {
        fullscreenBtn.innerHTML = document.fullscreenElement ? '⛶ Pantalla Chica' : '⛶ Pantalla Completa';
    }
});

// Initialize from LocalStorage if exists
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
        try {
            const state = JSON.parse(saved);
            players = state.players;
            scores = state.scores;
            currentChallengeIdx = state.currentChallengeIdx;
            levelOrder = state.levelOrder || [];
            currentLevelShuffled = state.currentLevelShuffled !== undefined ? state.currentLevelShuffled : -1;

            startScreen.classList.add('hidden');
            gameScreen.classList.remove('hidden');
            loadLevel(false, true);
            renderScoreboard();
        } catch (e) {
            localStorage.removeItem(STATE_KEY);
        }
    }
});

function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function saveState() {
    const state = { players, scores, currentChallengeIdx, levelOrder, currentLevelShuffled };
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
}

function showResetModal() {
    document.getElementById('reset-confirm-modal').classList.remove('hidden');
}

function confirmReset() {
    localStorage.removeItem(STATE_KEY);
    location.reload();
}

// Password Modal Logic
const passwordModal = document.getElementById('password-modal');
const passwordInput = document.getElementById('game-password-input');
const confirmPwdBtn = document.getElementById('confirm-password-btn');
const pwdError = document.getElementById('password-error');

// Start Game (Step 1: Check inputs, Step 2: Show Password Modal)
startBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.player-input');
    players = [];
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            const name = input.value.trim();
            players.push(name);
            scores[name] = 0;
        }
    });

    if (players.length < 2) {
        alert("¡Cargá por lo menos a 2 pibes!");
        return;
    }

    // Si ya hay una clave en el .env / Vercel, pedirla
    const correctPwd = import.meta.env.VITE_GAME_PASSWORD;
    
    if (correctPwd && correctPwd !== "") {
        passwordModal.classList.remove('hidden');
        passwordInput.focus();
        pwdError.classList.add('hidden');
    } else {
        // Si no hay clave, pasar directo (para desarrollo)
        finalizeStart();
    }
});

confirmPwdBtn.addEventListener('click', () => {
    const entered = passwordInput.value.trim();
    const correctPwd = import.meta.env.VITE_GAME_PASSWORD;

    if (entered === correctPwd) {
        passwordModal.classList.add('hidden');
        finalizeStart();
    } else {
        pwdError.classList.remove('hidden');
        passwordInput.value = "";
    }
});

// Soporte para Enter en el input de password
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') confirmPwdBtn.click();
});

function finalizeStart() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    currentLevelShuffled = 0;
    levelOrder = shuffleArray([...players]);
    
    saveState();
    renderScoreboard();
    loadLevel(true); 
}

function loadLevel(forceIntro = false, isRefresh = false) {
    const chall = challenges[currentChallengeIdx];
    const levelNum = Math.floor(currentChallengeIdx / 5);

    if (currentLevelShuffled !== levelNum) {
        levelOrder = shuffleArray([...players]);
        currentLevelShuffled = levelNum;
    }

    if ((forceIntro || currentChallengeIdx % 5 === 0) && !isRefresh) {
        showLevelIntro(chall);
    }

    document.getElementById('current-game-num').textContent = currentChallengeIdx + 1;
    document.getElementById('difficulty-level').textContent = `Nivel ${chall.difficulty}`;
    document.getElementById('start-player-name').textContent = chall.start;
    document.getElementById('end-player-name').textContent = chall.end;
    document.getElementById('required-count').textContent = `Objetivo: ${chall.count} jugadores`;

    const dots = document.getElementById('dots-container');
    dots.innerHTML = '';
    for(let i=0; i < chall.count; i++) {
        const d = document.createElement('div');
        d.className = 'dot active';
        dots.appendChild(d);
    }

    updateTurnDisplay();
    saveState();
}

function showLevelIntro(chall) {
    const base = chall.difficulty * 10;
    document.getElementById('intro-level-title').innerText = `¡ARRANCA EL NIVEL ${chall.difficulty}!`;
    document.getElementById('intro-level-goal').innerText = `Objetivo: Unir con ${chall.count} jugador(es)`;
    
    document.getElementById('lvl-p-less').innerText = `${base + 10} pts`;
    document.getElementById('lvl-p-exact').innerText = `${base} pts`;
    document.getElementById('lvl-p-more').innerText = `${Math.max(0, base - 5)} pts`;
    
    levelIntroModal.classList.remove('hidden');
}

function updateTurnDisplay() {
    const playerInTurn = levelOrder[currentChallengeIdx % players.length];
    document.getElementById('active-player-name').textContent = playerInTurn;
    renderScoreboard();
}

function renderScoreboard() {
    const list = document.getElementById('score-list');
    list.innerHTML = '';
    const playerInTurn = levelOrder[currentChallengeIdx % players.length];

    players.forEach((p) => {
        const activeClass = p === playerInTurn ? 'active-turn' : '';
        const div = document.createElement('div');
        div.className = `score-list-item ${activeClass}`;
        const nameSpan = document.createElement('span');
        nameSpan.textContent = p;
        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score-value';
        scoreSpan.textContent = `${scores[p]} pts`;
        div.appendChild(nameSpan);
        div.appendChild(scoreSpan);
        list.appendChild(div);
    });
}

// Logic: Solve
solveBtn.addEventListener('click', () => {
    const playerInTurn = levelOrder[currentChallengeIdx % players.length];
    openScoreSelection(playerInTurn);
});

// Logic: Fail (Steal)
failBtn.addEventListener('click', () => {
    const playerInTurn = levelOrder[currentChallengeIdx % players.length];
    const stealList = document.getElementById('steal-candidates');
    stealList.innerHTML = '';
    players.forEach((p) => {
        if (p !== playerInTurn) {
            const btn = document.createElement('button');
            btn.className = 'steal-btn';
            btn.textContent = p;
            btn.onclick = () => {
                stealModal.classList.add('hidden');
                openScoreSelection(p);
            };
            stealList.appendChild(btn);
        }
    });
    stealModal.classList.remove('hidden');
});

function openScoreSelection(winnerName) {
    window.currentWinner = winnerName;
    const chall = challenges[currentChallengeIdx];
    const basePoints = chall.difficulty * 10;
    
    document.getElementById('ref-less-btn').innerHTML = `Uso menos <b>(+${basePoints + 10} pts)</b>`;
    document.getElementById('ref-exact-btn').innerHTML = `Uso los que pedía <b>(+${basePoints} pts)</b>`;
    document.getElementById('ref-more-btn').innerHTML = `Uso más <b>(+${Math.max(0, basePoints - 5)} pts)</b>`;
    
    scoreSelectionModal.classList.remove('hidden');
}

function submitScore(type) {
    const chall = challenges[currentChallengeIdx];
    let points = chall.difficulty * 10;
    
    if (type === 'less') points += 10; 
    if (type === 'more') points = Math.max(0, points - 5); 

    scores[window.currentWinner] += points;
    scoreSelectionModal.classList.add('hidden');
    saveState();
    showSolution();
}

function showSolution() {
    const chall = challenges[currentChallengeIdx];
    const path = document.getElementById('solution-path');
    path.innerHTML = chall.solution.split('→').map(n => {
        const text = n.trim();
        if (text.startsWith('(')) {
            return `<span class="club-node">${text}</span>`;
        }
        return `<span class="path-node">${text}</span>`;
    }).join(' <span class="arrow">➔</span> ');
    solutionModal.classList.remove('hidden');
    renderScoreboard();
}

function handleNextChallenge() {
    solutionModal.classList.add('hidden');
    currentChallengeIdx++;
    if (currentChallengeIdx < challenges.length) {
        loadLevel();
    } else {
        showEnd();
    }
}

function showEnd() {
    localStorage.removeItem(STATE_KEY);
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    const sorted = [...players].sort((a,b) => scores[b] - scores[a]);
    const finalScores = document.getElementById('final-scores');
    finalScores.innerHTML = '';
    sorted.forEach((p, i) => {
        const div = document.createElement('div');
        div.className = 'final-row';
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${i+1}. ${p}`;
        const scoreB = document.createElement('b');
        scoreB.textContent = `${scores[p]} pts`;
        div.appendChild(nameSpan);
        div.appendChild(scoreB);
        finalScores.appendChild(div);
    });
}

// Export functions to window for HTML onclick handlers (since this is now a module)
window.showResetModal = showResetModal;
window.closeAllModals = closeAllModals;
window.submitScore = submitScore;
window.handleNextChallenge = handleNextChallenge;
window.confirmReset = confirmReset;
window.showSolution = showSolution; // Useful to have global just in case
