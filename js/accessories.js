/* ========================================= */
/* ACCESSORIES PAGE */
/* ========================================= */

let currentIndex = 0;


/* ========================================= */
/* ELEMENTS */
/* ========================================= */

const currentAccessory =
document.getElementById(
    "currentAccessory"
);

const leftPreview =
document.getElementById(
    "leftPreview"
);

const rightPreview =
document.getElementById(
    "rightPreview"
);

const accessoryName =
document.getElementById(
    "accessoryName"
);

const accessoryOwner =
document.getElementById(
    "accessoryOwner"
);

const previousBtn =
document.getElementById(
    "previousBtn"
);

const nextBtn =
document.getElementById(
    "nextBtn"
);

const homeBtn =
document.getElementById(
    "homeBtn"
);

const charactersBtn =
document.getElementById(
    "charactersBtn"
);


/* ========================================= */
/* UPDATE */
/* ========================================= */

function updateAccessory(){

    const current =
    accessories[currentIndex];

    const previous =
    accessories[
        (currentIndex - 1 + accessories.length)
        % accessories.length
    ];

    const next =
    accessories[
        (currentIndex + 1)
        % accessories.length
    ];

    currentAccessory.classList.remove(
        "change"
    );

    void currentAccessory.offsetWidth;

    currentAccessory.classList.add(
        "change"
    );

    currentAccessory.src =
    current.image;

    leftPreview.src =
    previous.image;

    rightPreview.src =
    next.image;

    accessoryName.textContent =
    current.name;

    accessoryOwner.textContent =
    current.owner;

}


/* ========================================= */
/* NEXT */
/* ========================================= */

nextBtn.addEventListener(

    "click",

    ()=>{

        currentIndex++;

        if(
            currentIndex >= accessories.length
        ){

            currentIndex = 0;

        }

        updateAccessory();

    }

);


/* ========================================= */
/* PREVIOUS */
/* ========================================= */

previousBtn.addEventListener(

    "click",

    ()=>{

        currentIndex--;

        if(
            currentIndex < 0
        ){

            currentIndex =
            accessories.length - 1;

        }

        updateAccessory();

    }

);


/* ========================================= */
/* CLICK SIDE PREVIEW */
/* ========================================= */

leftPreview.addEventListener(

    "click",

    ()=>{

        previousBtn.click();

    }

);

rightPreview.addEventListener(

    "click",

    ()=>{

        nextBtn.click();

    }

);


/* ========================================= */
/* HOME */
/* ========================================= */

homeBtn.addEventListener(

    "click",

    ()=>{

        window.location.href =
        "index.html";

    }

);


/* ========================================= */
/* CHARACTERS */
/* ========================================= */

charactersBtn.addEventListener(

    "click",

    ()=>{

        window.location.href =
        "discover.html";

    }

);


/* ========================================= */
/* KEYBOARD */
/* ========================================= */

document.addEventListener(

    "keydown",

    (event)=>{

        if(event.key==="ArrowLeft"){

            previousBtn.click();

        }

        if(event.key==="ArrowRight"){

            nextBtn.click();

        }

    }

);


/* ========================================= */
/* INIT */
/* ========================================= */

updateAccessory();
