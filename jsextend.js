function getParent(instance,parent,arg){  
    instance.extend = parent;  
    instance.extend.apply(instance,arg);//传递参数  
    instance.extend = null;  
    delete instance.extend;  
}  
  
Function.prototype.extend = function(parent){  
    this.prototype = parent.prototype;  
};  
