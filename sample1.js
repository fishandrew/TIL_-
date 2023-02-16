var person = {}
person.name = 'egoing';
person.introduce = function(){
    return 'My name is '+this.name;
}
document.write(person.introduce());

var person1 = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
document.write(person.introduce());

//생성자 new
function Person(){}
var p1 = new Person();
p1.name = 'egoing';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p1.introduce()+"<br />");
 
var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p2.introduce());

// 전역 개체(Global object) Web -> window
function func () {
    alert('Hell0?');
}
func();
window.func();

var o = {
    'func_':function(){
        alert('Hell0?');
    } 
}
o.func_();
window.o.func_();
//this
//생성자의 this
function func_this(){
    if(window === this){
        document.write("window === this");
    }
}
func_this(); 
// result 'window === this'

var funcThis = null; 
 
function Func(){
    funcThis = this;
}
var o1 = Func();
if(funcThis === window){
    document.write('window <br />');
}
 
var o2 = new Func();
if(funcThis === o2){
    document.write('o2 <br />');
}

// result window o2
//apply, call
var o = {}
var p = {}
function func_swich(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func_swich();
func_swich.apply(o);
func_swich.apply(p);
//result window o p

// 상속 inheritance
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
// result My name is egoing

function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
// prototype은 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능을 의미

function Person_(name){
    this.name = name;
}
Person_.prototype.name=null;
Person_.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person_();
 
var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");

//----------------------------------------------

function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}
 
var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");

//result My name is egoing 
//       hello world

//prototype
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp);
//result true

//prototype 2
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
var s = new Super();
Sub.prototype = s;
s.ultraProp =2;
 
var o = new Sub();
console.log(o.ultraProp);
/*1. 객체 o에서 ultraProp을 찾는다
2. 없다면 Sub.prototype.ultraProp를 찾는다.
3. 없다면 Super.prototype.ultraProp를 찾는다.
4. 없다면 Ultra.prototype.ultraProp를 찾는다.  */
