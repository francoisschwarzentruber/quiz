function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}


window.onload = function () {
    const answers = document.getElementsByTagName("answer");
    forEach(answers, (answer) => {
        answer.setAttribute("class", "answerable");
        answer.onclick = (evt) => {
            forEach(answer.parentNode.getElementsByTagName("answer"),
                (a) => {
                    a.setAttribute("class", "notanswered");
                    a.onclick = () => { };
                });
            answer.setAttribute("class", "answered");
            forEach(answer.parentNode.getElementsByTagName("explanation"),
                (a) => a.setAttribute("class", "explanationVisible"));
        };
    });
};


let currentQuestionNode = undefined;
function question(str) {
    currentQuestionNode = document.createElement("question");
    currentQuestionNode.innerHTML = str;
    document.body.appendChild(currentQuestionNode);
}


function answer(str) {
    const node = document.createElement("answer");
    node.innerHTML = str;
    currentQuestionNode.appendChild(node);
}

function goodAnswer(str) {
    const node = document.createElement("answer");
    node.setAttribute("good", "true");
    node.innerHTML = str;
    currentQuestionNode.appendChild(node);
}

function explanation(str) {
    const node = document.createElement("explanation");
    node.innerHTML = str;
    currentQuestionNode.appendChild(node);
}