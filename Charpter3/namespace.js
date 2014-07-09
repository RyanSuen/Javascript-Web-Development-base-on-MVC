//js可能通过给对象添加属性来管理一个命名空间，这个命名空间也可以是函数，也可以是变量。
//如：
var User = {
	records: [],
	fetchRemote: function() {}
	//,......
};

//改进版
/*
var user =new User();
user.destroy();
*/
var User = function(atts) {
	this.attribues = atts||{};
};

//destroy函数是和具体的user相关的函数
User.prototype.destroy = function() {};

//对于和具体user不相关的函数，可以直接添加在类上
User.fetchRemote = function() {};