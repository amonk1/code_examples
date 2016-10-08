//Queue constructor
var Queue = function(){
	this.oldestIndex = 1;
	this.newestIndex = 1;
	this.data = {};
}

//Method to return size of queue
Queue.prototype.size = function(){
	return (this.newestIndex - this.oldestIndex);
}

//Method to enqueue a value
Queue.prototype.enqueue = function(data){
	this.data[this.newestIndex] = data;
	this.newestIndex++;
}

//Method to dequeue a value
Queue.prototype.dequeue = function(){
	//Control for empty queue
	if(this.oldestIndex === this.newestIndex)
		throw new Error('The queue is empty.')
	var deletedData = this.data[this.oldestIndex];

	delete this.data[this.oldestIndex];
	this.oldestIndex++;

	return deletedData;
}