function saveAnswers(data){

    localStorage.setItem(
        "answers",
        JSON.stringify(data)
    );

}

function getAnswers(){

    return JSON.parse(
        localStorage.getItem("answers")
    );

}

function clearAnswers(){

    localStorage.removeItem(
        "answers"
    );

}