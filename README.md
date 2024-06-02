# quiz
Quiz builder + some quiz (in logic and probability theory)

Works directly without any library. Questions can be written in HTML or in JS (if you want for instance to customize questions).


## Write questions in HTML
Here is how to write a question and some answers in HTML.

     <question>
    Est-ce que la formule \(\exists x, \forall y, x = y\) est satisfiable ?
    <answer good>Oui</answer>
    <answer>Non</answer>
    <explanation>
      Être satisfiable c'est admettre au moins un modèle. Là, cette formule est vraie dans un modèle où le domaine n'a
      qu'un seul élément.
    </explanation>
    </question>


## Write questions in JS

Here is how to write a question and some answers in HTML.

    <script>
      question("Es-tu heureuse ?");
      answer("Non");
      goodAnswer("Oui");
    </script>