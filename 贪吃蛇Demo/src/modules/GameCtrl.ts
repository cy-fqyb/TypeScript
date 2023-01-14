// 引入其他类
import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

// 游戏控制类
export default class GameCtrl {
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    direction:string;
    // 设置一个变量用来保存蛇是否存活
    isLive = true;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);
        this.direction = ''
        this.init();
    }

    // 游戏的初始化方法
    init(){
        // 绑定键盘监听事件
        document.addEventListener('keydown',this.keydownHandle.bind(this))
        this.run();
    }
    keydownHandle(event:KeyboardEvent){
        // 检测按键是否合法
        this.direction = event.key;
    }
    // 蛇移动的方法
    run(){
        // 获取蛇现在的坐标
        let x = this.snake.X;
        let y = this.snake.Y;

        switch(this.direction){
            case 'ArrowUp': y -= 10;break;
            case 'ArrowDown': y += 10;break;
            case 'ArrowLeft': x -= 10;break;
            case 'ArrowRight': x += 10;break;
        }

        // 检测蛇是否吃到食物
       this.checkEat(x,y);
       try {
         this.snake.X = x;
         this.snake.Y = y;
       } catch (e:any) {
         alert(e.message)
         this.isLive = false;
       }
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
    }
    checkEat(x:number,y:number){
        if (this.food.X === x&&this.food.Y === y){
            // 改变食物位置
            this.food.changeFood();
            // 分数改变
            this.scorePanel.addScore();
            
        }
    }
}