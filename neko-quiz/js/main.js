'use strict';

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');

    const quizSet = [
        {q: 'What????' , c: ['aaaaa', 'bbbbb' ,'ccccc' , 'dddd']},
        {q: 'What????' , c: ['aaaaa', 'bbbbb' ,'ccccc' , 'dddd']},
        {q: 'What????' , c: ['aaaaa', 'bbbbb' ,'ccccc' , 'dddd']},
        {q: 'What????' , c: ['aaaaa', 'bbbbb' ,'ccccc' , 'dddd']},
        {q: 'What????' , c: ['aaaaa', 'bbbbb' ,'ccccc' , 'dddd']},
    ]

    //正誤判定する
    let currentNum = 0;
    function checkAnswer() {
        if(li.textContent === quizSet[currentNum].c[0]) {
            console.log('あたり！');
        }else{
            console.log('シャーーーーー！！！');
        }
}

    function setQuiz() {
        //問題文を表示
        question.textContent = quizSet[currentNum].q;

        //選択肢を小要素liを作って表示
        quizSet[currentNum].c.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () =>{
                checkAnswer(li);
        });
        choices.appendChild(li);
    });

}

setQuiz();




//次へボタンを押すと次の問題を表示
//正答数結果を表示する



}

//