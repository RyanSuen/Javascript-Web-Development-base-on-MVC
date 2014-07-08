/*
**实现面向对象编程
*/

var Class = function(parent) {    //parent是父类，通过Class新建的子类继承于它,此处可传可不传，不伟就不继承。
    
    var klass = function() {
        this.init.apply(this, arguments);   //把initb函数变成相当于构造函数，生成实例就执行。
    };

    //改变klass的原型，实现从parent继承
    if(parent) {    //如果传入父类才继承
        var subclass = function() {};
        subclass.prototype = parent.prototype;    //说明是基于原型的继承
        klass.prototype = new subclass();
    }

    //等同于构造函数
    klass.prototype.init = function() {
        //我们可以在这里对新生成的实例做初始化
    };

    //定义 prototype 的别名
    klass.fn = klass.prototype;

    //定义类的别名
    klass.fn.parent = klass;

    klass._super = klass._proto_;    //?用法不详

    //给类添加属性
    klass.extend = function(obj) {
        var extended = obj.extended;    //个人认为没有用
        for (var i in obj) {
            klass[i] = obj[i];
        }

        if (extended) {    //个人认为没有用
            extended(klass);
        }
    };

    //给实例添加属性
    klass.include = function(obj) {
        var included = obj.included;    //个人认为没有用
        for (var i in obj) {
            klass.fn[i] = obj[i];
        }
        if (included) included(klass);    //个人认为没有用
    };

    return klass;
};

/*
*****************************************************************************************
*****************************************************************************************
*/
//对如上Class的应用
var Person = new Class();    //新建Person类


/*如下这两段代码基本没用
Person.extend({       //每次为类和实例添加方法的时候，都将这两个方法添加进去才有用。
    extended: function(klass) {
        console.log(klass, ' was extended!');    
    }
});

Person.include({
    included: function(klass) {
        console.log(klass, ' waw included!');
    }
});
*/

Person.extend({
    find: function(id) {
        console.log(id);
    },
    exists: function(id) {
        console.log("exists ", id);
    }
});

Person.include({
    save: function(id) {
        console.log("save", id);
    },
    destroy: function(id) {
        console.log('destroy', id);
    }
});