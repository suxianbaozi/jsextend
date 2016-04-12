/**
 * 用来继承函数内部的属性和方法
 */
 
function getParent(instance,parent,arg){  
    instance.extend = parent;  
    instance.extend.apply(instance,arg);//传递参数  
    instance.extend = null;  
    delete instance.extend;  
}  
/**
 * 用来继承prototype
 */
Function.prototype.extend = function(parent){  
    this.prototype = parent.prototype;  
};  
