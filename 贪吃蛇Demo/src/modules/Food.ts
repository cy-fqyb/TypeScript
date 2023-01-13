// 定义一个食物类
export default class Food {
    // 定义一个属性用来保存食物的元素
    element:HTMLElement;
    constructor(){
        // !的意思是说明该项属性不会为空
        this.element = document.getElementById('food')!;
    }
    // 定义一个获取食物水平坐标的方法
    get X(){
        return this.element.offsetLeft
    }
    // 定义一个方法用来获取食物的y轴坐标
    get Y(){
        return this.element.offsetTop
    }
    // 定义一个修改食物位置的方法
    changeFood(){
        // 生成一个随机的位置
        let top:number = Math.floor(Math.random()*30)*10;
        let left:number = Math.floor(Math.random()*30)*10;
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}
