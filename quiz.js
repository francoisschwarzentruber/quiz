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
            forEach(evt.target.parentNode.getElementsByTagName("answer"),
                (a) => {
                    a.setAttribute("class", "notanswered");
                    a.onclick = () => { };
                });
            evt.target.setAttribute("class", "answered");
            forEach(evt.target.parentNode.getElementsByTagName("explanation"),
                (a) => a.setAttribute("class", "explanationVisible"));
        };
    });
};


