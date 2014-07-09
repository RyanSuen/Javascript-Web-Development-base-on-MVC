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
		object.parent = this;    //将新建的object对象赋给object的parent属性。
		object.prototype = object.fn = Object.create(this,prototype);    //其它就是创建了一个object.prototype.init = function() {}
		object.created();    //调用created函数
		this.inherited(object);
		return object;
	},
	init: function() {
		var instance = Object.create(this.prototype);
		instance.parent = this;
		instance.init.apply(instance, arguments);
		return instance;
	}
};


var User = Model.create();
var user = User.init();