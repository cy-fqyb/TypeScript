import './style/index.scss'
import Food from './modules/Food';
import ScorePanel from './modules/ScorePanel';
// 测试代码
const food = new Food()
food.changeFood()
console.log(food.X,food.Y,food.element);

