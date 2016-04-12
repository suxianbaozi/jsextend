# jsextend
一个用来实现javascript继承的类库


####用法
```javascript
//父类
function Parent(){  
    this.name = '老王';  
    this.daren = function(){  
        console.log('我是'+this.name+',我要打人了');  
    }  
}  
Parent.prototype = {  
    chuanmen:function(){  
        console.log('我是'+this.name+',我去串门了');  
    }  
};  

//子类  
function Child(name){  

    //继承继承，注意注意
    getParent(this,Parent,arguments);  
    this.name = name;  
}  
//继承prototype
Child.extend(Parent);  
  
var laoWang = new Parent();  
laoWang.daren();  
laoWang.chuanmen();  
  
var xiaoMing = new Child('小明');  
xiaoMing.daren();  
laoWang.chuanmen();  
  
var xiaoMing = new Child('小明的妹妹');  
xiaoMing.daren();  
laoWang.chuanmen();  
```
