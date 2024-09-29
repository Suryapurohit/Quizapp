const question=[
    {
        question:"which is largest animal in world",
        answer:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"what is the smallest contient in the world",
        answer:[
            {text:"asia",correct:false},
            {text:"australia",correct:true},
            {text:"artic",correct:false},
            {text:"africa",correct:false},
        ]
    }
    ,
    {
        question:"what is the largest desert in the world",
        answer:[
            {text:"sahara",correct:false},
            {text:"gobi",correct:true},
            {text:"antaratica",correct:false},
            {text:"kalahari",correct:false},
        ]
    },
    // {
    //     question:"which is largest animal in world",
    //     answer:[
    //         {text:"shark",correct:false},
    //         {text:"Blue whale",correct:true},
    //         {text:"Elephant",correct:false},
    //         {text:"Giraffe",correct:false},
    //     ]
    // },
    // {
    //     question:"which is largest animal in world",
    //     answer:[
    //         {text:"shark",correct:false},
    //         {text:"Blue whale",correct:true},
    //         {text:"Elephant",correct:false},
    //         {text:"Giraffe",correct:false},
    //     ]
    // },
    // {
    //     question:"which is largest animal in world",
    //     answer:[
    //         {text:"shark",correct:false},
    //         {text:"Blue whale",correct:true},
    //         {text:"Elephant",correct:false},
    //         {text:"Giraffe",correct:false},
    //     ]
    // }
]
const questionElement=document.getElementById("question");
const nextButton=document.getElementById("next-btn");
const answerbutton=document.getElementById("answer-buttons");
let currentQuestionindex=0;
let score=0;
function startquiz(){
    currentQuestionindex=0;
    score=0;
    nextButton.innerHTML="NEXT";
    showquestion();
}
function resetstate(){
    nextButton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);  
    }
}

function showquestion(){
    resetstate();
    let currentquestion=question[currentQuestionindex];
    let questionNo=currentQuestionindex+1;
    questionElement.innerHTML=questionNo+"."+currentquestion.question;

    currentquestion.answer.forEach(answer=>{
        let btn=document.createElement("button");
        btn.innerHTML=answer.text;
        btn.classList.add("btn");
        answerbutton.appendChild(btn);
        if(answer.correct){
            btn.dataset.correct=answer.correct;
        }
        btn.addEventListener("click",selectAnswer);

    })
}
function selectAnswer(e){
    const selectedbtn= e.target;
    const iscorrect = selectedbtn.dataset.correct ==="true";
    if(iscorrect)
    {
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display="block";

}

function showscore(){
    resetstate();
    questionElement.innerHTML=`you score ${score} out of ${question.length}`;
    // nextButton.style.display="block";
    nextButton.innerHTML="play again"
    nextButton.style.display="block";
}





function handleNextbutton(){
    currentQuestionindex++;
    if(currentQuestionindex <question.length){
        showquestion();
    }else{;
        showscore()
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionindex<question.length){
        handleNextbutton();
    }else{
        startquiz();
    }
})

startquiz();

