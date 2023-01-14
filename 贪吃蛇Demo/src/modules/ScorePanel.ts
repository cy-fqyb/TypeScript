import Snake from "./Snake";
// 分数统计类
export default class ScorePanel {
    score = 0;
    level = 1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    maxLevel:number;
    snake:Snake;
    // 设置一个变量用来设置多少分是蛇的长度增加
    upLevel:number;
    constructor(maxLevel:number =10,upLevel:number=1){
        this.snake = new Snake();
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upLevel = upLevel;
    }
    // 分数增加的方法
    addScore(){
        // 分数自增
        this.scoreEle.innerHTML = ++this.score+'';

        // 判断蛇的长度是否增加
        if(this.score%this.upLevel===0){
            this.levelUp();
            this.snake.addBody()
        }
    }

    // 蛇的长度增加的方法
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level+'';
        }
    }
}