/*
*添加私有函数
*/


var Person = function() {};

(function() {    //通过匿名函数来创建私有作用域
	
	var findById = function(id) {
		//someCode
		console.log(id);
	};

	Person.find = function(id) {
		console.log(typeof id);
		if(typeof id =='number') {
			return findById(id);
		}
	};

})();

//如果我们直接调用findById()函数，会报错，因为它不是全局函数。可直接调用说明它是全局函数。
//而我把它传给了Person.find,所以通过它可能调用。
//findById(12);

//成功编写了只能在Person内部才能调用的函数
Person.find(12);
