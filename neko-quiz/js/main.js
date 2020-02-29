'use strict';

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');

    const quizSet = [
        {q: 'ねこが食べちゃいけないものは？' , c: ['たまねぎ', 'ささみ' ,'きゃべつ' , '生卵']},
        {q: 'ねこがふみふみしているときの気持ちで誤っているのは？' , c: ['むかつくわ〜', 'かまって〜' ,'ねむたい' , '落ち着くわ〜']},
        {q: 'ねこがすりすりするときの気持ちは？' , c: ['においつけとこ', 'いいにおいで癒される〜','はやくあそぼ〜' ]},
        {q: 'ねこがしっぽを振るときの気持ちは？' , c: ['むかつくわ〜', '興奮してきた！' ,'ワクワク！' , 'お腹すいた']},
        {q: 'ねこがゴロンしてお腹を見せるときの気持ちは？' , c: ['こっち見て！', 'つかれた！' ,'お腹すいた！' , 'ねむい！']},
        {q: 'ねこがゴロンしてお腹を見せるときの気持ちは１？' , c: ['こっち見て！', 'つかれた！' ,'お腹すいた！' , 'ねむい！']},
        {q: 'ねこがゴロンしてお腹を見せるときの気持ちは２？' , c: ['こっち見て！', 'つかれた！' ,'お腹すいた！' , 'ねむい！']},
        {q: 'ねこがゴロンしてお腹を見せるときの気持ちは３？' , c: ['こっち見て！', 'つかれた！' ,'お腹すいた！' , 'ねむい！']},
        {q: 'ねこがゴロンしてお腹を見せるときの気持ちは４？' , c: ['こっち見て！', 'つかれた！' ,'お腹すいた！' , 'ねむい！']},
        {q: 'ねこがゴロンしてお腹を見せるときの気持ちは５？' , c: ['こっち見て！', 'つかれた！' ,'お腹すいた！' , 'ねむい！']},

    ];

    
    let currentNum = 0;
    let isAnswerd; 

        function shuffle(arr) {

            //配列全体の中からランダムな要素を選ぶ           
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() *  (i + 1));
                [arr[j],arr[i]]=[arr[i],arr[j]];
            }
            //最後の要素と入れ替える
            return arr;
        }
    
    function checkAnswer(li) {
        if (isAnswerd === true) {
            return;
        }
        

        if(li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            btn.classList.remove('disabled');
        } else {
            li.classList.add('wrong');
        }
        
    }

    function setQuiz() {
        isAnswerd = false;
        question.textContent = quizSet[currentNum].q;

        while (choices.firstChild){
            choices.removeChild(choices.firstChild);
        }

        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        shuffledChoices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click' , () => {
                checkAnswer(li);

            });
            choices.appendChild(li);
        });


        if (currentNum === quizSet.length -1) {
        btn.textContent = '成績をみる';

    }

    }


setQuiz();

btn.addEventListener('click' , () => {
    if(btn.classList.contains('disabled')){

        return;
    }
    btn.classList.add('disabled');
    currentNum++;
    setQuiz();

});

let score =0 ;



}