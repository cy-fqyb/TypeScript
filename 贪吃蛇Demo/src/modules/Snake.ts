export default class Snake{
    // 表示蛇头的元素
    head:HTMLElement;
    // 蛇的身体
    snakeBody:HTMLCollection;
    // 蛇的容器
    element:HTMLElement;
    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div')!;
        this.snakeBody = this.element.getElementsByTagName('div')!
    }

    // 获取蛇头的坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X(value:number){
        if(this.X ===value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了');
        }
        

        // 判断蛇是否掉头
        if(this.snakeBody[1]&&(this.snakeBody[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10;
                
                
            }else{
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value+'px';
        this.checkHeadBody();
    }
    set Y(value:number){
        if(this.Y === value) return;
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了');
        }

        // 判断蛇是否掉头
        // console.log(this.snakeBody[2]&&(this.snakeBody[2] as HTMLElement).offsetLeft,this.head.offsetLeft);
        if(this.snakeBody[1]&&(this.snakeBody[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
                
                
            }else{
                value = this.Y + 10;
            }
        }
        
        this.moveBody();
        this.head.style.top = value+'px';
        this.checkHeadBody();
    }
    // 蛇的身体添加的方法
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }

    // 身体的移动方法
    moveBody(){
       for(let i = this.snakeBody.length-1;i>0;i--){
        let x = (this.snakeBody[i-1] as HTMLElement).offsetLeft;
        let y = (this.snakeBody[i-1] as HTMLElement).offsetTop;

        (this.snakeBody[i] as HTMLElement).style.left = x +'px';
        (this.snakeBody[i] as HTMLElement).style.top = y + 'px';
       }
    }

    // 检查身体和头部是否相撞的方法
    checkHeadBody(){
        for(let i = 1;i<this.snakeBody.length;i++){
            let bd = this.snakeBody[i] as HTMLElement;
            if(this.X === bd.offsetLeft&&this.Y === bd.offsetTop){
                //判断头部是否撞到身体
                throw new Error('撞到身体了')
            }
        }
    }
}