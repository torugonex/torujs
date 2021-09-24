let n;
//let string = [];
let question = [];
let answer = [];
let numberYes = [];
let numberNo = [];
let result;

function preload() {
  result = loadStrings('test.txt');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
//	frameRate(1);
    textAlign(CENTER);
//    for (let i =0; i < 5; i++) {
        question[1] = "菅首相の前の首相は？";
        answer[1] = "安倍晋三";
        question[2] = "新国立劇場の設計者は？";
        answer[2] = "柳澤孝彦＋TAK建築研究所";
        question[3] = "パキスタンの首都は？";
        answer[3] = "イスラマバード"
        question[4] = "西暦2000年はうるう年か平年か？";
        answer[4] = "うるう年"
//    }
    questions = new Questions(question);
    n = 0;
    fill(255);
    textSize(30);
    text("push ↓", width/2, height/2);
    text(result,200,200);
}
  
function draw() {
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        n++;
        if (n < question.length) {
            questions.showQuestion(n);
        } else {
            questions.endShow();
        }
    }
    if (keyCode === RIGHT_ARROW) {
        questions.countYes(n);
    }
    if (keyCode === LEFT_ARROW) {
        questions.countNo(n);
    }
    if (key === "e") {
        questions.endShow();
    }
}

class Questions {
    constructor(question) {
        this.question = question;
        this.position;
    }

    showQuestion(n) {
        background(0);
        fill(255);
　　　　textSize(20);
        text("Q. "+str(n),width/2,height/2-100);
        textSize(30);
        text(this.question[n],width/2,height/2);
        textSize(20);
        text("Do you know the answer?", width/2, height/2+170);
        textSize(15);
        text("if Yes, push →",width/2+150, height/2+200);
        text("if No, push ←",width/2-150, height/2+200);
        text("for next question, push ↓",width/2, height/2+250)
    }

    countYes(n) {
        fill(255);
        textSize(20);
        text("Q."+str(n)+" "+answer[n], width/2+300, 100+n*10);
        numberYes.push(n);
    }

    countNo(n) {
        fill(255);
        textSize(20);
        text("Q."+str(n)+" "+answer[n], width/2-300, 100+n*10);
        numberNo.push(n);    
    }

    endShow() {
        background(0);
        textAlign(LEFT);
        textSize(20);
        //答を知らなかった問題を列挙
        text("you don't know the answer of below questions", 100, 100);
        for (let j = 0; j < numberNo.length; j++) {
            text(str(numberNo[j])+" "+this.question[numberNo[j]], 150, 130+30*j); 
        }
        //答を知っていた問題を列挙
        text("you know the answer of below questions", width/2+100, 100);
        for (let j = 0; j < numberYes.length; j++) {
            text(str(numberYes[j])+" "+this.question[numberYes[j]], width/2+150, 130+30*j);
        }
    }
}
