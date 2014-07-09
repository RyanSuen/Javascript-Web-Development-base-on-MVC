/*
*创建模型对象
*/

//为对象添加Object.create()方法
if(typeof Object.create !== 'function') {
	Object.create =function(o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

//创建Model
var Model = {
	inherited: function() {},
	created: function() {},

	prototype: {
		init: function() {}
	},

	create: function() {
		var object = Object.create(this);    //此处this指Model这个对象
		object.parent = this;    //将新建的Model对象赋给object的parent属性。
		object.prototype = object.fn = Object.create(this,prototype);    //其它就是创建了一个object.prototype.init = function() {}
		object.created();    //调用created函数
		this.inherited(object);    //调用inherited函数
		return object;
	},
	init: function() {
		var instance = Object.create(this.prototype);     //创建instance对象，并添加类方法init
		instance.parent = this;    //将Model对象赋给instance的parent属性
		instance.init.apply(instance, arguments);    //让instance的init方法上下文指向instance
		return instance;
	}
};


var User = Model.create();
var user = User.init();
