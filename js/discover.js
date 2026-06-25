const characterIds = Object.keys(characters);

let currentIndex =
parseInt(
    localStorage.getItem("discoverIndex")
) || 0;

const cardInner =
document.getElementById(
    "cardInner"
);

const frontImage =
document.getElementById(
    "frontImage"
);

const backImage =
document.getElementById(
    "backImage"
);

const leftPreview =
document.getElementById(
    "leftPreview"
);

const rightPreview =
document.getElementById(
    "rightPreview"
);

const characterName =
document.getElementById(
    "characterName"
);

const characterTitle =
document.getElementById(
    "characterTitle"
);

const characterDescription =
document.getElementById(
    "characterDescription"
);

const prevBtn =
document.getElementById(
    "prevBtn"
);

const nextBtn =
document.getElementById(
    "nextBtn"
);

const homeBtn =
document.getElementById(
    "homeBtn"
);

const accessoriesBtn =
document.getElementById(
    "accessoriesBtn"
);

renderCharacter();

function renderCharacter(){

    const id =
    characterIds[
        currentIndex
    ];

    const character =
    characters[id];

    frontImage.src =
    character.image;

    backImage.src =
    character.backCard;

    characterName.textContent =
    character.name;

    characterTitle.textContent =
    character.title || "";

    characterDescription.textContent =
    character.description || "";

    const prevIndex =

    (currentIndex - 1 +
    characterIds.length)

    %

    characterIds.length;

    const nextIndex =

    (currentIndex + 1)

    %

    characterIds.length;

    leftPreview.src =

    characters[
        characterIds[
            prevIndex
        ]
    ].image;

    rightPreview.src =

    characters[
        characterIds[
            nextIndex
        ]
    ].image;

    cardInner.classList.remove(
        "flipped"
    );

    localStorage.setItem(
        "discoverIndex",
        currentIndex
    );

}

cardInner.addEventListener(
    "click",
    ()=>{

        cardInner.classList.toggle(
            "flipped"
        );

    }
);

nextBtn.addEventListener(
    "click",
    ()=>{

        currentIndex++;

        if(
            currentIndex >=
            characterIds.length
        ){

            currentIndex = 0;

        }

        renderCharacter();

    }
);

prevBtn.addEventListener(
    "click",
    ()=>{

        currentIndex--;

        if(
            currentIndex < 0
        ){

            currentIndex =
            characterIds.length - 1;

        }

        renderCharacter();

    }
);

homeBtn.addEventListener(
    "click",
    ()=>{

        window.location.href =
        "index.html";

    }
);

accessoriesBtn.addEventListener(
    "click",
    ()=>{

        window.location.href =
        "accessories.html";

    }
);

document.addEventListener(
    "keydown",
    (event)=>{

        if(event.key==="ArrowRight"){

            nextBtn.click();

        }

        if(event.key==="ArrowLeft"){

            prevBtn.click();

        }

    }
);