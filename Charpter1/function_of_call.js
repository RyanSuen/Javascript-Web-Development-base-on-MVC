/*
*函数的调用
*/

//区别call 和 apply
//相同点：都是更换方法执行的上下文
//function.apply(obj, [arg1, arg2, arg3,......]);   //obj为：目标的上下文(它是一个对象)
//function.caa(obj, arg1, arg2, arg3,......);

/*
$('.clicky').click(function() {
	$(this).hide();   //this 指向当前节点
});

$('p').each(function() {
	$(this).remove();    //指向本次迭代
});
*/


//(一)为了访问原始的上下文，如下是一种很见的模式
var clicky = {
	wasClicked: function() {},
	addListeners:function() {
		var self = this;
		$('.clicky').click(function() {
			self.wasClicked();
		});
	}
};

click.addListeners();


//（二）然而我们可以全用别一种办法让代码变得干净一些
var proxy = function(fun, thisObject) {
	return (function() {
		return fun.apply(thisObject,arguments);
	});
};

var clicky = {
	wasClicked: function() {},
	addListeners:function() {
		$('.clicky').click(proxy(this.wasClicked, this));   //这里的this指的是clicky这个对象。
	}
};

//jQuery里也有实现了这个功能的API，  $.proxy(function, context);




// 如下不是很懂，将一个调用委托给另一个调用。,甚至可以传入参数。
var App = {
	log: function() {
		if(typeof console == 'undefined') {
			return ;
		}

		//将参数转换为合适的数组
		var args = jQuery.makeArray(arguments);

		//插入一个新参数
		args.unshift('xxxx');
		console.log.apply(console,args);
	}
};