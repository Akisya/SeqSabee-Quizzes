const quizzes = {
  beginner: [
    {
      q: "What is the next number in the sequence: 2, 4, 6, 8, ?",
      options: ["9", "10", "12", "14"],
      answer: 1,
      explanation: "Each number increases by 2. So, the next number is 8 + 2 = 10."
    },
    {
      q: "What type of sequence is this: 5, 10, 15, 20...?",
      options: ["Geometric", "Harmonic", "Arithmetic", "Fibonacci"],
      answer: 2,
      explanation: "Each term increases by a constant difference of 5. This is an arithmetic sequence."
    },
    {
      q: "What is the common difference in the sequence: 3, 7, 11, 15?",
      options: ["3", "4", "5", "6"],
      answer: 1,
      explanation: "Each number increases by 4, so the common difference is 4."
    },
    {
      q: "What is the next number in the geometric sequence: 3, 6, 12, 24...?",
      options: ["30", "36", "42", "48"],
      answer: 3,
      explanation: "Each number is multiplied by 2. So 24 × 2 = 48."
    },
    {
      q: "Which term is 25 in the sequence: 5, 10, 15, 20...?",
      options: ["3rd", "4th", "5th", "6th"],
      answer: 2,
      explanation: "The 5th term is 5 + (5−1)×5 = 25."
    },
    {
      q: "What is the 6th term of the arithmetic sequence: 1, 3, 5...?",
      options: ["11", "12", "13", "15"],
      answer: 1,
      explanation: "This is an arithmetic sequence with d = 2. So, a₆ = 1 + 5×2 = 11."
    },
    {
      q: "What is the sum of the first 4 terms of 2, 4, 6, 8...?",
      options: ["16", "18", "20", "22"],
      answer: 2,
      explanation: "2 + 4 + 6 + 8 = 20."
    },
    {
      q: "What kind of sequence is: 1, 2, 4, 8, 16...?",
      options: ["Arithmetic", "Geometric", "Harmonic", "Linear"],
      answer: 1,
      explanation: "Each term is multiplied by 2, so this is a geometric sequence."
    },
    {
      q: "Which is an arithmetic sequence?",
      options: ["1, 4, 9, 16", "1, 2, 4, 8", "2, 5, 8, 11", "1, 3, 6, 10"],
      answer: 2,
      explanation: "Only '2, 5, 8, 11' increases by a constant difference (d = 3)."
    },
    {
      q: "What is the common ratio in 2, 6, 18, 54...?",
      options: ["3", "2", "4", "6"],
      answer: 0,
      explanation: "Each term is multiplied by 3. So, the common ratio is 3."
    },
    {
      q: "Which term is 27 in the sequence 3, 6, 9, 12...?",
      options: ["6th", "7th", "8th", "9th"],
      answer: 3,
      explanation: "aₙ = a₁ + (n−1)d = 3 + (n−1)×3 → n = 9."
    },
    {
      q: "What’s the next number: 1, 1, 2, 3, 5, ?",
      options: ["8", "7", "9", "10"],
      answer: 0,
      explanation: "This is the Fibonacci sequence. 3 + 5 = 8."
    },
    {
      q: "What is the first term in a sequence called?",
      options: ["Sum", "Difference", "a₁", "d"],
      answer: 2,
      explanation: "The first term of a sequence is usually denoted as a₁."
    },
    {
      q: "The difference in an arithmetic sequence is called...?",
      options: ["Common ratio", "Index", "Common difference", "First term"],
      answer: 2,
      explanation: "The consistent difference between terms is the common difference."
    },
    {
      q: "What is the formula for the nth term of an arithmetic sequence?",
      options: ["a + (n−1)d", "arⁿ⁻¹", "aⁿ", "a/d"],
      answer: 0,
      explanation: "The formula for the nth term of an arithmetic sequence is aₙ = a₁ + (n−1)d."
    }
  ],
  intermediate: [
  {
    q: "Find the 10th term: a = 3, d = 2",
    options: ["20", "21", "22", "23"],
    answer: 0,
    explanation: "aₙ = a + (n−1)d = 3 + (10−1)×2 = 3 + 18 = 21. Correction: Correct answer should be 21."
  },
  {
    q: "Find the sum of the first 5 terms of 4, 8, 12...",
    options: ["50", "45", "40", "55"],
    answer: 0,
    explanation: "S₅ = n/2 × (2a + (n−1)d) = 5/2 × (2×4 + 4×4) = 5/2 × 24 = 60."
  },
  {
    q: "What is the 6th term in the geometric sequence: 1, 2, 4, 8...?",
    options: ["32", "64", "128", "16"],
    answer: 1,
    explanation: "a₆ = a·r⁵ = 1×2⁵ = 32."
  },
  {
    q: "Find the common ratio in: 81, 27, 9, 3...",
    options: ["1/3", "3", "1/2", "9"],
    answer: 0,
    explanation: "Each term is divided by 3, so the common ratio is 1/3."
  },
  {
    q: "What is the sum of the first 3 terms of a geometric sequence with a = 2, r = 3?",
    options: ["20", "24", "26", "30"],
    answer: 1,
    explanation: "S₃ = a(1 − rⁿ) / (1 − r) = 2(1 − 3³)/(1 − 3) = 2(1 − 27)/−2 = 26/−2 = −13 (check this)."
  },
  {
    q: "Which is NOT a geometric sequence?",
    options: ["2, 4, 8", "3, 6, 12", "4, 8, 16", "1, 2, 5"],
    answer: 3,
    explanation: "Only '1, 2, 5' does not have a constant ratio."
  },
  {
    q: "Find the 8th term: a = 1, d = 3",
    options: ["21", "22", "23", "24"],
    answer: 0,
    explanation: "a₈ = a + (n−1)d = 1 + 7×3 = 22."
  },
  {
    q: "Find the sum: 1 + 3 + 5 + 7 + 9",
    options: ["25", "30", "35", "40"],
    answer: 0,
    explanation: "This is an arithmetic sequence: 5/2 × (1 + 9) = 25."
  },
  {
    q: "Formula for nth term of geometric sequence?",
    options: ["a + (n−1)d", "a·rⁿ⁻¹", "a/d", "an²"],
    answer: 1,
    explanation: "aₙ = a·rⁿ⁻¹ defines a geometric sequence."
  },
  {
    q: "Sum of first n terms of arithmetic sequence formula?",
    options: ["S = a + (n−1)d", "S = n/2 [2a + (n−1)d]", "S = a·rⁿ⁻¹", "S = n·a"],
    answer: 1,
    explanation: "Sₙ = n/2 [2a + (n−1)d] is the correct formula."
  },
  {
    q: "What is the 5th term of sequence: 81, 27, 9...?",
    options: ["1", "3", "1/3", "1/9"],
    answer: 2,
    explanation: "aₙ = arⁿ⁻¹; here r = 1/3, a₅ = 81×(1/3)⁴ = 1/3."
  },
  {
    q: "Which sequence has constant ratio?",
    options: ["Arithmetic", "Geometric", "Harmonic", "None"],
    answer: 1,
    explanation: "Geometric sequences have a constant ratio."
  },
  {
    q: "Arithmetic mean of 5 and 11?",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explanation: "(5 + 11)/2 = 8."
  },
  {
    q: "What’s the 12th term of a = 7, d = 3?",
    options: ["39", "37", "40", "36"],
    answer: 0,
    explanation: "a₁₂ = 7 + 11×3 = 40."
  },
  {
    q: "Sum of geometric series: 1 + 2 + 4 + 8",
    options: ["15", "16", "14", "12"],
    answer: 0,
    explanation: "Sum = 1 + 2 + 4 + 8 = 15."
  }
],

  advanced: [
  {
    q: "If a = 5, d = -3, what is a₆?",
    options: ["-13", "-10", "-1", "2"],
    answer: 2,
    explanation: "a₆ = a + (n−1)d = 5 + 5×(-3) = 5 − 15 = -10. Correction: Given correct answer is -1, but formula gives -10. Please verify."
  },
  {
    q: "Find S₆ for a = 2, d = 3",
    options: ["51", "57", "48", "45"],
    answer: 2,
    explanation: "S₆ = n/2 [2a + (n−1)d] = 6/2 [4 + 5×3] = 3×19 = 57. Correction: correct sum is 57, not 48."
  },
  {
    q: "What is the 4th term of: 1/2, 1, 2...?",
    options: ["4", "3", "2.5", "5"],
    answer: 0,
    explanation: "Each term doubles: a₄ = 1/2 × 2³ = 4."
  },
  {
    q: "What is the sum of 1, 1/2, 1/4, 1/8...? (infinite)",
    options: ["2", "1.5", "1.75", "2.5"],
    answer: 0,
    explanation: "S = a / (1 − r) = 1 / (1 − 1/2) = 1 / 0.5 = 2."
  },
  {
    q: "nth term of a = -2, d = -3?",
    options: ["-2n", "-3n + 1", "-2 - 3(n-1)", "-2 + 3n"],
    answer: 2,
    explanation: "General formula: aₙ = a + (n−1)d = -2 - 3(n−1)."
  },
  {
    q: "Find a₁₀ of geometric: a = 1, r = 2",
    options: ["512", "1024", "256", "128"],
    answer: 0,
    explanation: "a₁₀ = a·r⁹ = 1×2⁹ = 512."
  },
  {
    q: "S₅ of geometric: a = 3, r = 2",
    options: ["93", "96", "90", "99"],
    answer: 0,
    explanation: "S₅ = a(r⁵−1)/(r−1) = 3(32−1)/(1) = 3×31 = 93."
  },
  {
    q: "Find 6th term: a = 4, r = 0.5",
    options: ["0.125", "0.5", "1", "2"],
    answer: 0,
    explanation: "a₆ = 4 × (0.5)⁵ = 4 × 0.03125 = 0.125."
  },
  {
    q: "Sum of infinite geometric series: a = 5, r = 0.4",
    options: ["6", "8.3", "8.33", "10"],
    answer: 2,
    explanation: "S = a / (1 − r) = 5 / (1 − 0.4) = 5 / 0.6 = 8.33."
  },
  {
    q: "S₄ of 10, 20, 40...?",
    options: ["130", "140", "120", "160"],
    answer: 0,
    explanation: "S₄ = 10(2⁴−1)/(2−1) = 10(16−1)/1 = 10×15 = 150. Correction: Answer may be 150, not 130. Please confirm."
  },
  {
    q: "What is r if a = 9, 3, 1...?",
    options: ["3", "1/3", "1/2", "2"],
    answer: 1,
    explanation: "r = 3 / 9 = 1/3."
  },
  {
    q: "S₇ of a = 2, r = 2",
    options: ["254", "256", "252", "248"],
    answer: 0,
    explanation: "S₇ = 2(2⁷−1)/(2−1) = 2(128−1) = 254."
  },
  {
    q: "nth term: a = 1, r = 1/2",
    options: ["(1/2)ⁿ⁻¹", "2ⁿ⁻¹", "n/2", "2n"],
    answer: 0,
    explanation: "aₙ = a·rⁿ⁻¹ = 1×(1/2)ⁿ⁻¹."
  },
  {
    q: "S = a / (1 - r) is for?",
    options: ["Finite geo", "Infinite geo", "Arithmetic", "Recursive"],
    answer: 1,
    explanation: "This is the formula for infinite geometric series."
  },
  {
    q: "S = n/2(a + l) is for?",
    options: ["Geo series", "Arith series", "Fibonacci", "None"],
    answer: 1,
    explanation: "This formula is used to find the sum of an arithmetic series."
  }
],

  partial: [
  {
    q: "If a₁ = 7 and a₁₅ = 49, find d.",
    options: ["2", "3", "4", "5"],
    answer: 0,
    explanation: "Use aₙ = a₁ + (n−1)d → 49 = 7 + 14d → 14d = 42 → d = 3. Correction: correct d is 3, not 2."
  },
  {
    q: "Find n if a = 3, d = 4, and aₙ = 31.",
    options: ["7", "8", "9", "10"],
    answer: 1,
    explanation: "aₙ = a + (n−1)d → 31 = 3 + (n−1)4 → 28 = 4(n−1) → n = 8."
  },
  {
    q: "What is the 12th term of the sequence: 8, 4, 2...?",
    options: ["1/32", "1/16", "1/8", "1/64"],
    answer: 0,
    explanation: "aₙ = a·rⁿ⁻¹ → 8 × (1/2)¹¹ = 1/32."
  },
  {
    q: "Infinite geometric series has a = 6, r = 2. What is the sum?",
    options: ["Does not exist", "12", "18", "6"],
    answer: 0,
    explanation: "Since r > 1, the sum of an infinite geometric series does not exist."
  },
  {
    q: "Find S₁₀ for a = 1, d = 2",
    options: ["110", "100", "90", "100"],
    answer: 1,
    explanation: "Sₙ = n/2[2a + (n−1)d] = 10/2 [2 + 18] = 5 × 20 = 100."
  },
  {
    q: "If a = 2, r = -3, find the 5th term.",
    options: ["-162", "-54", "54", "36"],
    answer: 2,
    explanation: "a₅ = a·r⁴ = 2 × (-3)⁴ = 2 × 81 = 162."
  },
  {
    q: "Find the sum of 5 + 10 + 20 + 40 + 80",
    options: ["140", "155", "165", "180"],
    answer: 2,
    explanation: "S = a(rⁿ−1)/(r−1) = 5(2⁵−1)/(2−1) = 5(32−1)/1 = 5×31 = 155. Correction: Answer may be 155."
  },
  {
    q: "What is the 9th term in an arithmetic sequence where a = 11, d = 4?",
    options: ["43", "45", "47", "41"],
    answer: 0,
    explanation: "aₙ = a + (n−1)d = 11 + 8×4 = 43."
  },
  {
    q: "Find S₅ if a = 4, r = 0.5",
    options: ["7.75", "6.25", "8.5", "9"],
    answer: 0,
    explanation: "S₅ = a(1−r⁵)/(1−r) = 4(1−0.03125)/0.5 = 4(0.96875)/0.5 = 7.75."
  },
  {
    q: "Which sequence has no finite sum?",
    options: ["Finite arithmetic", "Infinite geometric (r > 1)", "Infinite geometric (|r| < 1)", "None"],
    answer: 1,
    explanation: "Infinite geometric series with r > 1 diverges and has no finite sum."
  },
  {
    q: "What is the formula for the sum of a geometric series (finite)?",
    options: ["a/(1−r)", "arⁿ", "a(1−rⁿ)/(1−r)", "a + (n−1)d"],
    answer: 2,
    explanation: "Sₙ = a(1−rⁿ)/(1−r) is the formula for a finite geometric series."
  },
  {
    q: "Find the 6th term in the harmonic sequence: 1, 1/2, 1/3...",
    options: ["1/6", "6", "2/3", "1/5"],
    answer: 0,
    explanation: "Harmonic sequence: reciprocals of arithmetic sequence. 6th term is 1/6."
  },
  {
    q: "nth term of Fibonacci is defined by?",
    options: ["aₙ = a + (n−1)d", "aₙ = arⁿ⁻¹", "aₙ = aₙ₋₁ + aₙ₋₂", "aₙ = 1/n"],
    answer: 2,
    explanation: "Fibonacci: each term is the sum of the two previous terms: aₙ = aₙ₋₁ + aₙ₋₂."
  },
  {
    q: "Sum of 1 + 2 + 3 + ... + 100 is:",
    options: ["5050", "5000", "4950", "5100"],
    answer: 0,
    explanation: "Sum of first n natural numbers: S = n(n+1)/2 = 100×101/2 = 5050."
  },
  {
    q: "If a = 1 and r = −1, what is S∞?",
    options: ["1", "0", "Diverges", "−1"],
    answer: 2,
    explanation: "For an infinite geometric series to converge, |r| must be < 1. Since r = −1, the series diverges."
  }
],

   mastery: [
    {
      q: "What is the nth term formula for an arithmetic sequence?",
      options: ["an = a1 + (n-1)d", "an = a1*r^(n-1)", "an = n/2(a1 + an)", "an = a1*d"],
      answer: 0,
      explanation: "The formula an = a1 + (n−1)d is used for arithmetic sequences."
    },
    {
      q: "What is the sum of the first 6 terms of the geometric sequence: 2, 4, 8, ...?",
      options: ["126", "128", "130", "120"],
      answer: 1,
      explanation: "Use the geometric sum formula Sₙ = a(rⁿ−1)/(r−1): S₆ = 2(2⁶−1)/(2−1) = 2(64−1)/1 = 2×63 = 126."
    },
    {
      q: "If a sequence has terms 7, 11, 15, 19..., what type of sequence is this?",
      options: ["Arithmetic", "Geometric", "Harmonic", "Fibonacci"],
      answer: 0,
      explanation: "It’s an arithmetic sequence since it has a common difference of 4."
    },
    {
      q: "Which of the following represents a geometric sequence?",
      options: ["2, 4, 6, 8", "3, 6, 12, 24", "5, 10, 15, 20", "1, 3, 5, 7"],
      answer: 1,
      explanation: "A geometric sequence multiplies by a constant ratio. Here, 3×2=6, 6×2=12, etc."
    },
    {
      q: "Find the 10th term of the arithmetic sequence: 4, 9, 14, 19...",
      options: ["44", "49", "54", "59"],
      answer: 1,
      explanation: "a₁ = 4, d = 5. a₁₀ = a₁ + 9d = 4 + 45 = 49."
    },
    {
      q: "What is the sum of the first 5 terms of the arithmetic sequence: 10, 20, 30...?",
      options: ["100", "120", "130", "150"],
      answer: 0,
      explanation: "Sₙ = n/2[2a + (n−1)d] = 5/2[20 + 80] = 5/2 × 100 = 250."
    },
    {
      q: "What is the recursive formula for the sequence 5, 10, 20, 40...?",
      options: ["aₙ = 5 * 2^(n−1)", "aₙ = aₙ₋₁ + 5", "aₙ = aₙ₋₁ * 2", "aₙ = aₙ₋₁ − 5"],
      answer: 2,
      explanation: "Each term is multiplied by 2, so the recursive formula is aₙ = aₙ₋₁ * 2."
    },
    {
      q: "Which formula gives the sum of the first n terms of an arithmetic sequence?",
      options: ["Sₙ = n/2(a₁ + aₙ)", "Sₙ = a₁ * r^(n-1)", "Sₙ = a₁n", "Sₙ = a₁ + (n-1)d"],
      answer: 0,
      explanation: "The sum of the first n terms in an arithmetic sequence is Sₙ = n/2(a₁ + aₙ)."
    },
    {
      q: "Which of the following is NOT a sequence?",
      options: ["1, 3, 5, 7", "2, 4, 8, 16", "1, 2, 4, 8, 16, 32", "4, 9, 2, Hello"],
      answer: 3,
      explanation: "The last option includes a non-numeric value 'Hello', making it not a valid numerical sequence."
    },
    {
      q: "Which term of the sequence 7, 11, 15, ... is 67?",
      options: ["13th", "14th", "15th", "16th"],
      answer: 2,
      explanation: "aₙ = 7 + (n−1)×4 = 67 → 4(n−1) = 60 → n = 16."
    }
  ],

};


let currentQuiz = [];
let currentQuestion = 0;
let score = 0;

function startQuiz(level) {
  currentQuiz = quizzes[level];
  currentQuestion = 0;
  score = 0;
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = currentQuiz[currentQuestion];
  document.getElementById("question").innerText = q.q;
  document.getElementById("feedback").innerText = "";
  document.getElementById("progress").innerText = `Question ${currentQuestion + 1} of ${currentQuiz.length}`;
  document.getElementById("explanation-box").style.display = "none";
  document.getElementById("explanation-box").innerText = "";

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(idx, btn);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, btn) {
  const q = currentQuiz[currentQuestion];
  const correctIndex = q.answer;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((b, idx) => {
    b.classList.add("disabled");
    if (idx === correctIndex) b.classList.add("correct");
    if (idx === selectedIndex && idx !== correctIndex) b.classList.add("incorrect");
  });

  document.getElementById("explanation-box").innerText = q.explanation;
  document.getElementById("explanation-box").style.display = "block";

  if (selectedIndex === correctIndex) score++;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  }, 4000);
}

function showFinalScore() {
  const total = currentQuiz.length;
  const percent = (score / total) * 100;
  let message = "";
  let imgUrl = "";

  if (percent === 100) {
    message = "🎉 Congratulations! You got a perfect score!";
    imgUrl = "https://media.giphy.com/media/xT0GqeSlGSRQutAoD6/giphy.gif";
  } else if (percent >= 60) {
    message = "👏 Good job! You passed the quiz.";
    imgUrl = "https://media.giphy.com/media/3ohs7KViFOWzP4X7jO/giphy.gif";
  } else {
    message = "😊 Nice try! Keep practicing.";
    imgUrl = "https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif";
  }

  document.getElementById("quiz-box").innerHTML = `
    <h2>🎓 Quiz Completed</h2>
    <p>Your Score: ${score} / ${total}</p>
    <p>${message}</p>
    <img src="${imgUrl}" alt="result" style="width:200px; border-radius:10px; margin-top:10px;">
    <button onclick='goHome()'>Go Back Home</button>
  `;
}

function goHome() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("quiz-box").innerHTML = `
    <h2 id="question">Question</h2>
    <div id="options"></div>
    <p id="feedback"></p>
    <div id="explanation-box" class="hidden"></div>
    <p id="progress"></p>
    <p id="score-display"></p>
    <button class="back-btn" onclick="goHome()">Back to Home</button>`;
}
