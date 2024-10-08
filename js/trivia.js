/*****************************************************************
    Name: trivia.js
    Purpose: Implement functionality for trivia page
    Author: Chris Alex
    DrexelId: cpa49 
 ******************************************************************/
    const questions = [
        {
            question: "Where do I go to watch 76ers games?",
            image: "images/Wells_Fargo_Center.jpg",
            options: ["Wells Fargo Center", "TD Garden", "Lincoln Field Center", "MetLife Stadium"],
            answer: "a"
        },
        {
            question: "What is this bell called?",
            image: "images/Liberty_Bell.jpg",
            options: ["Bell of Good luck", "Bow Bell", "Liberty Bell", "Benjamin Franklin Bell"],
            answer: "c"
        },
        {
            question: "What food do Philadelphians heavily consume?",
            image: "images/food.jpg",
            options: ["Cheesecake", "Pretzel", "Coffee", "Chicken Over Rice"],
            answer: "b"
        },
        {
            question: "What does WAWA mean?",
            image: "images/Wawa.jpg",
            options: ["Snow Goose", "Cow", "Weirdo Alert Weirdo Alert", "Hoagie"],
            answer: "a"
        },
        {
            question: "What musical instrument was first built at Philadelphia in 1775?",
            image: "images/Instrument.jpg",
            options: ["Guitar", "Trumpet", "Drum", "Piano"],
            answer: "d"
        },
        {
            question: "Which place is famous for its farmers crops and international food?",
            image: "images/Reading_Terminal_Market.jpg",
            options: ["Pennsylvania Convention Center", "Rittenhouse Square", "The Shops at Liberty Place", "Reading Terminal Market"],
            answer: "d"
        },
        {
            question: "An interactive science and technology museum that is good for kids",
            image: "images/Franklin_Institute.jpg",
            options: ["Pennsylvania Convention Center", "Franklin Institute", "National Constitutional Center", "Penn's Landing"],
            answer: "b"
        },
        {
            question: "What is this method of transportation called?",
            image: "images/Trolley.jpg",
            options: ["Car", "Trolleybus", "Trolley", "Regional Rail"],
            answer: "c"
        },
        {
            question: "What is Philadelphia's government/municipal building called?",
            image: "images/City_Hall.jpg",
            options: ["City Hall", "White House", "Frankford", "Mayor Office"],
            answer: "a"
        },
        {
            question: "Which street is in between 13th and 15th street?",
            image: "images/Broad_Street.jpg",
            options: ["Callowhill Street", "14th Street", "Broad Street", "Race Street"],
            answer: "c"
        },
        {  
            question: "What is this station called?",
            image: "images/Frankford.jpg",
            options: ["Olney Transportation Center", "Frankford Transportation Center", "NRG Station", "69th Street Transportation Center"],
            answer: "b"
        },
        {
            question: "What is a Philadelphia sports team?",
            image: "images/eagles.png",
            options: ["Ravens", "Steelers", "Eagles", "Falcons"],
            answer: "c"
        },
        {
            question: "Which is not a regional rail line?",
            image: "images/Regional_Rail.jpg",
            options: ["East Trenton Line", "Fox Chase Line", "Media/Wawa Line", "Chestnut Hill West Line"],
            answer: "a"
        },
        {
            question: "Oldest street in Philadelphia?",
            image: "images/Elfreth's_Alley.jpg",
            options: ["Market Street", "1st Street", "Broad Street", "Elfreth's Alley"],
            answer: "d"
        },
        {
            question: "Where can I find Parx Casino, Philadelphia's #1 casino in?",
            image: "images/Parx_Casino.jpg",
            options: ["Philadelphia", "Upper Darby", "Chester", "Bensalem"],
            answer: "d"
        },
    ];
    
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let attempts = 0;
    let mode = 'easy'; // Default mode is set to easy
    let timer;
    let timeLeft;
    
    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const imageContainer = document.getElementById('image-container');
        const optionsContainer = document.getElementById('options');
        const timerElement = document.getElementById('timer');
    
        questionElement.innerText = currentQuestion.question;
        imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="Question Image">`;
        optionsContainer.innerHTML = ''; //clear previous option
    
        //Makes the options a radio button. From Geeksforgreeks.org
        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement('input');
            optionElement.type = "radio";
            optionElement.name = "answer";
            optionElement.value = index;
            optionElement.addEventListener('change', () => checkAnswer(parseInt(optionElement.value)));
            const label = document.createElement('label');
            label.innerText = option;
            optionsContainer.appendChild(optionElement);
            optionsContainer.appendChild(label);
            optionsContainer.appendChild(document.createElement('br'));
        });
    
        // Timer for difficult mode
        if (mode === 'difficult') {
            timeLeft = 10; //  in seconds
            timerElement.innerText = `Time left: ${timeLeft} seconds`;
            clearInterval(timer); // Clear timer
            timer = setInterval(() => {
                timeLeft--;
                timerElement.innerText = `Time left: ${timeLeft} seconds`;
    
                if (timeLeft < 5) {
                    timerElement.classList.add('less-than-5');
                } else {
                    timerElement.classList.remove('less-than-5');
                }
    
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    alert("Time's up!");
                    nextQuestion();
                }
            }, 1000); // Updates the timer every second
        } else {
            clearInterval(timer);
            timerElement.innerText = ''; 
        }
    
        // Update mode indicator for the html display
        document.getElementById('modeIndicator').innerText = `Mode: ${mode === 'easy' ? 'Easy' : 'Difficult'}`;
    }
    
    function checkAnswer(index) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedOption = currentQuestion.options[index];
        const correctOptionIndex = currentQuestion.answer.charCodeAt(0) - 97; // Converts 'a', 'b', 'c', 'd' to 0, 1, 2, 3. From ChatGPT
        const correctOption = currentQuestion.options[correctOptionIndex];
    
        //Answer attempts feature
        if (selectedOption === correctOption) {
            if (mode === 'easy' && attempts === 1) {
                correctAnswers += 0.5; // 1/2 credit given for right answer in second attempt
            } else {
                correctAnswers++; 
            }
            alert('Correct!');
        } else {
            if (mode === 'easy' && attempts === 0) { // For easy mode, allow two attempts
                attempts++;
                alert('Incorrect! You have one more attempt.');
                return;
            }
            alert(`Incorrect! The correct answer is: ${correctOption}`);
        }
    
        attempts = 0; 
        clearInterval(timer); 
        nextQuestion();
    }
    
    //Next question
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            displayScore();
        }
    }
    
    //Displays score at end of quiz
    function displayScore() {
        const score = `${correctAnswers}/${questions.length}`;
    
        if (correctAnswers > 0.9 * questions.length) {
            alert(`Excellent! Your score: ${score}`);
        } else if (correctAnswers > 0.8 * questions.length) {
            alert(`Good job! Your score: ${score}`);
        } else if (correctAnswers >= 0.65 * questions.length && correctAnswers <= 0.8 * questions.length) {
            alert(`Nice try. Your score: ${score}. Try again?`);
        } else {
            alert(`Your score: ${score}. Try again for a better score.`);
        }
    }
    
    //Resets quiz
    function resetQuiz() {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        attempts = 0;
        clearInterval(timer); 
        displayQuestion();
    }
    
    function setMode(selectedMode) {
        mode = selectedMode;
        // Reset the mode buttons style
        document.getElementById('easyMode').classList.remove('selected-mode');
        document.getElementById('difficultMode').classList.remove('selected-mode');
        // Add selected style to the clicked mode button
        document.getElementById(selectedMode + 'Mode').classList.add('selected-mode');
        resetQuiz(); // Reset the quiz when mode changes
    }
    
    // Display the first question when the page loads/reloads
    displayQuestion();