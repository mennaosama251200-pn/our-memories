/* ================================
   الصفحات
================================ */

let currentPage = 0;

const pages = [
    "home",
    "counterPage",
    "memory1",
    "memory2",
    "memory3",
    "questions",
    "end"
];


function showPage() {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });


    document
        .getElementById(pages[currentPage])
        .classList.add("active");
}


function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage();
    }
}


function previousPage() {

    if (currentPage > 0) {

        currentPage--;

        showPage();
    }
}


/* ================================
   العداد
   البداية: 5 يوليو 2024
================================ */

const startDate =
    new Date("2024-07-05T00:00:00");


function updateCounter() {

    const now = new Date();

    let years =
        now.getFullYear()
        -
        startDate.getFullYear();

    let months =
        now.getMonth()
        -
        startDate.getMonth();

    let days =
        now.getDate()
        -
        startDate.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days +=
            previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    const difference =
        now - startDate;


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const seconds =
        totalSeconds % 60;


    const totalMinutes =
        Math.floor(
            totalSeconds / 60
        );


    const minutes =
        totalMinutes % 60;


    const totalHours =
        Math.floor(
            totalMinutes / 60
        );


    const hours =
        totalHours % 24;


    document.getElementById("years")
        .textContent = years;

    document.getElementById("months")
        .textContent = months;

    document.getElementById("days")
        .textContent = days;

    document.getElementById("hours")
        .textContent = hours;

    document.getElementById("minutes")
        .textContent = minutes;

    document.getElementById("seconds")
        .textContent = seconds;
}


updateCounter();

setInterval(
    updateCounter,
    1000
);


/* ================================
   الأسئلة
================================ */

let questionNumber = 0;


const questions = [

    {
        question:
            "بتحبي الدادي ? ❤️",

        answers: [
            "اوي اوي 🌸",
            "💕بموت فيك",
            "لؤه بعشقك❤️"
        ]
    },

    {
        question:
            "اكتر دلع بتحبي مني 💕? ",

        answers: [
            "غزلتي🦌",
            "غدوشه💕",
            "صغنني🐣"
        ]
    },

    {
          question:
            "عاوزه نعمل ذكريات جديده سوا? 🌷",

        answers: [
            "طبعاا ❤️",
            "اكيد ! 💕",
            "مستحيل ابعد! 🌸"
        ]
    }

];


function loadQuestion() {

    const question =
        questions[questionNumber];


    document
        .getElementById("questionNumber")
        .textContent =
        `Question ${questionNumber + 1}`;


    document
        .getElementById("question")
        .textContent =
        question.question;


    const answers =
        document.getElementById("answers");


    answers.innerHTML = "";


    question.answers.forEach(text => {

        const button =
            document.createElement("button");


        button.textContent = text;


        button.onclick = function () {

            selectAnswer(button);

        };


        answers.appendChild(button);

    });


    document
        .getElementById("result")
        .textContent = "";
}


function selectAnswer(button) {

    document
        .querySelectorAll(
            "#answers button"
        )
        .forEach(btn => {

            btn.disabled = true;

        });


    button.classList.add("selected");


    document
        .getElementById("result")
        .textContent =
        "يخلاثي علي الشاطره ❤️";
}


function nextQuestion() {

    if (
        questionNumber <
        questions.length - 1
    ) {

        questionNumber++;

        loadQuestion();

    } else {

        currentPage =
            pages.indexOf("end");

        showPage();
    }
}


/* أول سؤال */

loadQuestion();