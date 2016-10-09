//Stack Constructor
var Stack = function(){
	this.top = null;
	this.size = 0;
}
//Node Constructor
var Node = function(data){
	this.data=data;
	this.previous = null;
}
//Method to push a value on top of the stack
Stack.prototype.push = function(data){
	var node = new Node(data);

	node.previous = this.top;
	this.top = node;
	this.size++;

	return this.top;
}
//Method to pop a value off the top off the stack
Stack.prototype.pop = function(){
	//Control for empty stack
	if(!this.top)
		throw new Error('There are no items in the stack.');

	var temp = this.top;
	this.top = this.top.previous;


	this.size--;

	return temp;
}
//Method to peek at the top value without removing it
Stack.prototype.peek = function () {
	//Control for empty stack
	if(!this.top)
		throw new Error('There are no items in the stack.');

	return this.top;
}