this指向
全局环境window
对象内部方法this=>调用这些方法的对象
原型链中方法this=>调用它的对象
构造函数中this与被创建的新对象绑定
通过call和apply方法调用，this可绑定到方法指定的第一个对象上（如果第一个参数不是对象，js将其转为对象再指向）
bind永远都指向第一个参数对象，无论什么时候调用
函数被作为监听事件时，this指向触发该事件的元素（针对addEventListener事件）
延时函数指向window
内联事件this=>被内联处理函数调用，this监听器所在dom元素；被包含在函数内部执行，this等同于函数被调用
箭头函数没有this，只能通过call，apply，bind传值
call参数列表 apply数组 
call： 可传null或undefined，可传基本数据类型，函数可以有返回值，将函数添加到指定对象中国呢，用delete删除
apply：返回值调用有指定this值和参数的函数结果
原型：每一个对象都包含一个原型属性，用于关联另一个对象，关联后就能使用那个对象的属性和方法
构造函数：通过new新建一个对象的函数
实例：通过构造函数和new创建出来的对象
三者的关系：
实例.__proto__ === 原型
原型.constructor === 构造函数
构造函数.prototype === 原型
实例.constructor === 构造函数
Object.create  根据指定原型创建新的对象
Object.getPrototypeOf 获取对象原型
Object.setPrototypeOf 设置对象原型
Object.prototype.isPrototypeOf() 返回布尔，表示指定的对象是否在本对象的原型链中
