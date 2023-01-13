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
        this.head.style.left = value+'px';
    }
    set Y(value:number){
        this.head.style.top = value+'px';
    }
    // 蛇的身体添加的方法
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
}