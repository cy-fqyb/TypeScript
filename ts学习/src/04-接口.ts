// 接口就是用来定义一个类的结构，接口就是对类进行一个限制
interface myInterFace {
    name:string,
    sex:string,
    age:number
}
interface myInterFace {
    work:string
}
class person implements myInterFace {
    name: string
    sex: string
    age: number
    work: string
    private _sexTrue: string
   constructor(){
    this.age = 28;
    this.name = '张三';
    this.sex = '男',
    this.work = "前端开发";
    this._sexTrue = '变态'
   }
    get sexTrue(){
        return this._sexTrue
    }
    set sexTrue(value:string){
        this._sexTrue = value
    }
}
let p = new person()
p.sexTrue = '女'
console.log(p);

export {}