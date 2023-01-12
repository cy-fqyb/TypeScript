// 以abstract标记的类是抽象类，不能用它来创建对象，只能用来继承，人话就是模板的模板
abstract class person {
    static age:number;
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }
    static hanshu(age:number):void{
       console.log(`年龄是${age}`);
       
    }
    // 抽象方法，没有方法体，用来提醒继承时重写该方法
    abstract hanshu2():void

}
class person2 extends person {
    static hanshu(age:number){
        super.hanshu(age+10)
    }
    hanshu2(): void {
        
    }
}
// let p = new person('张三',28)
console.log(person2.hanshu(25));


