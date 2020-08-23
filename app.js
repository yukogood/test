const quiz = [
    {
    question: 'ゆうこは、誰に似てる？',
    answers:[   
        '石原さとみ',
        '妖怪人間ベム',
        '化け物',
        '鬼'
    ],
    correct:'石原さとみ'
 }, {
    question: 'ゆうこを宝石に例えると',
    answers:[   
        '光輝くダイヤモンド',
        '宝石なわけない',
        '偽物のダイヤモンド',
        '砕けた宝石',
    ],
    correct:'光輝くダイヤモンド'
 },{
    question: 'ゆうこを花に例えると',
    answers:[   
        '毒花',
        '美しい薔薇',
        '花より雑草',
        '人食い花',
    ],
    correct:'美しい薔薇'

 }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題
const setupQuiz = () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
                buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('よくわかったね！正解！');
        score++;
      } else {
        window.alert('そんなわけないだろーーー！！不正解');
      }

      quizIndex++;
      if(quizIndex < quizLength){
       //問題数がまだあればこちらを実行
        setupQuiz();
      } else {
       //問題数がまだあればこちらを実行
        window.alert('これで終了！あなたの正解率は' + score + '/' + quizLength +'です');
      }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength)  {
  $button[handlerIndex].addEventListener('click',(e) => {  
    clickHandler(e);
 });
 handlerIndex++;
}
