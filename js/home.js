const startBtn =
document.getElementById("startBtn");

const discoverBtn =
document.getElementById("discoverBtn");

const creditsBtn =
document.getElementById("creditsBtn");

startBtn.addEventListener(
    "click",
    () => {

        window.location.href =
        "quiz.html";

    }
);

discoverBtn.addEventListener(
    "click",
    () => {

        window.location.href =
        "discover.html";

    }
);

creditsBtn.addEventListener(
    "click",
    () => {

        window.location.href =
        "credits.html";

    }
);