/* ========================================= */
/* CREDITS PAGE */
/* ========================================= */

const homeBtn =
document.getElementById(
    "homeBtn"
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
/* OPEN EXTERNAL LINKS */
/* ========================================= */

document
.querySelectorAll(
    '.credits-page a'
)
.forEach(link=>{

    link.addEventListener(

        "click",

        ()=>{

            console.log(

                "Opening:",

                link.href

            );

        }

    );

});