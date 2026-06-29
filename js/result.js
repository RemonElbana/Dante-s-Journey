    /* RESULT PAGE */
    /* ========================================= */

    const answers = getAnswers();

    if (!answers || answers.length !== 3) {

        window.location.href = "index.html";

    }

    const code = answers.join("");

    const pool = outcomes[code];

    if (!pool) {

        window.location.href = "index.html";

    }

    const selectedCharacterId =
    pool[
        Math.floor(
            Math.random() * pool.length
        )
    ];

    const character =
    characters[selectedCharacterId];

    if (!character) {

        console.error(
            "Character not found:",
            selectedCharacterId
        );

        window.location.href =
        "index.html";

    }


    /* ========================================= */
    /* ELEMENTS */
    /* ========================================= */

    const cardInner =
    document.getElementById(
        "cardInner"
    );

    const cardContainer =
    document.querySelector(
        ".card-container"
    );

    const characterImage =
    document.getElementById(
        "characterImage"
    );

    const clickText =
    document.getElementById(
        "clickText"
    );

    const resultInfo =
    document.getElementById(
        "resultInfo"
    );

    const resultSentence =
    document.getElementById(
        "resultSentence"
    );

    const claimBtn =
    document.getElementById(
        "claimBtn"
    );

    const claimPopup =
    document.getElementById(
        "claimPopup"
    );


    /* ========================================= */
    /* VARIABLES */
    /* ========================================= */

    let revealed = false;


    /* ========================================= */
    /* CHARACTER LOCATIONS */
    /* ========================================= */

    const characterLocations = {

        "virgil": "Limbo",

        "griffin": "Heaven",

        "beatrice": "Heaven",

        "dante": "Purgatorio",

        "minos": "Hell",

        "harpies": "Hell",

        "magaera": "Hell",

        "alecto": "Hell",

        "tisiphone": "Hell",

        "charon": "Hell",

        "tiresias": "Hell",

        "the-giant": "Hell",

        "the-whore": "Hell",

        "cherubim": "Heaven",

        "marcus-cato": "Purgatorio",

        "lucifer": "Hell",

        "gerione": "Hell",

        "old-man-of-crete": "Hell",

        "angel": "Heaven",

    };


    /* ========================================= */
    /* SETUP */
    /* ========================================= */

    characterImage.src =
    character.image;

    const characterLocation =
        characterLocations[selectedCharacterId] || "Unknown";

    resultSentence.innerHTML =
    `You are "<u>${character.name}</u>" from "<u>${characterLocation}</u>"`;

    claimBtn.style.display =
    "none";

    /* ========================================= */
    /* REVEAL */
    /* ========================================= */

    cardInner.addEventListener(
        "click",
        revealCharacter
    );

    function revealCharacter(){

        if(revealed){

            return;

        }

        revealed = true;

        clickText.classList.add(
            "hide"
        );

        cardInner.classList.add(
            "flipped"
        );

        cardContainer.classList.add(
            "glow"
        );

        setTimeout(()=>{

            resultInfo.classList.add(
                "show"
            );

            claimBtn.style.display =
            "block";

            requestAnimationFrame(()=>{

                claimBtn.classList.add(
                    "show"
                );

            });

        },850);

    }


    /* ========================================= */
    /* CLAIM CHARACTER */
    /* ========================================= */

    claimBtn.addEventListener(
        "click",
        claimReward
    );

    function claimReward(){

        /* Add To Collection */

        const isNew =
        claimCharacter(
            selectedCharacterId
        );

        /* ========================================= */
        /* DOWNLOAD CHARACTER IMAGE */
        /* ========================================= */

        const downloadLink =
        document.createElement("a");

        downloadLink.href =
        character.image;

        downloadLink.download =
        `${character.name}.png`;

        document.body.appendChild(
            downloadLink
        );

        downloadLink.click();

        document.body.removeChild(
            downloadLink
        );

        /* Save Current Character */

        localStorage.setItem(

            "discoverIndex",

            Object.keys(
                characters
            ).indexOf(
                selectedCharacterId
            )

        );

        if(isNew){

            claimPopup.querySelector("h2").textContent =
            "Character Added";

            claimPopup.querySelector("p").textContent =
            `${character.name} has been added to your collection.`;

        }

        else{

            claimPopup.querySelector("h2").textContent =
            "Already Collected";

            claimPopup.querySelector("p").textContent =
            `${character.name} is already in your collection.`;

        }

        claimPopup.classList.add(
            "show"
        );

        claimBtn.disabled = true;

        setTimeout(()=>{

            window.location.href =
            "discover.html";

        },1500);

    }


    /* ========================================= */
    /* PREVENT DOUBLE CLICK */
    /* ========================================= */

    cardInner.addEventListener(

        "dblclick",

        (event)=>{

            event.preventDefault();

        }

    );
