//Constructor function to make a node
function Node(data) {
	this.data = data;
	this.next = null;
}

//Constructor function for the Linked List
function LinkedList(){
	this.length = 0;
	this.head = null;
}

//Method to add values to the Linked List
LinkedList.prototype.add = function(value){
	var node = new Node(value);
	var currentNode = this.head;

	//Case 1: The list is empty
	if(!currentNode){
		this.head = node;
		this.length++;

		return node;
	}	

	//Case 2: The list is not empty
	//First, loop through to end of list
	while(currentNode.next){
		currentNode = currentNode.next;
	}

	//Now at the end of list, set value
	currentNode.next = node;

	this.length++;

	return node;
}

//Method to return node at specific location
LinkedList.prototype.nodeAt = function(position){
	var currentNode = this.head;
	var length = this.length;
	var count = 1;

	//Control for bad input
	if(length == 0 || position < 1 || position > length)
		throw new Error('Invalid node position.')

	//For valid position, loop through list until you get to the position
	while(count < position){
		currentNode = currentNode.next;
		count++;
	}
	return currentNode;
}

//Method to return first position of a value
LinkedList.prototype.find = function(value){
	var currentNode = this.head;
	var length = this.length;
	var count = 1;

	//Check for first position
	if(currentNode.data == value)
		return count;

	//Loop through linked list until value is found
	while(count < length){
		currentNode = currentNode.next;
		count++;

		if(currentNode.data == value)
			return count;
	}

	//Throw error if value is not found
	throw new Error('Value not found in list.');

}
//Method to remove the node at a position
LinkedList.prototype.remove = function(position){
	var currentNode = this.head;
	var length = this.length;
	var count = 0;
	var precedingNode = null;
	var nodeToDelete = null;
	deletedNode = null;

	//Case 1: invalid position
	if(position < 0 || position > length)
		throw new Error('Invalid node position');

	//Case 2: first node is removed
	if(position === 1){
		this.head = currentNode.next;
		deletedNode = currentNode;
		currentNode = null;
		this.length--;

		return deletedNode;
	}

	//Case 3: Other node is removed
	while(count < position){
		precedingNode = currentNode;
		nodeToDelete = currentNode.net;
		count++;
	}

	precedingNode.next = nodeToDelete.next;
	nodeToDelete = null;
	this.length--;

	return deletedNode;
}
//Method to recursively reverse a Linked List
LinkedList.prototype.reverse = function(){
	if(!this.head)
		return;

	function reverse(current){
		if(!current.next)
			return current;

		var head = reverse(current.next);
		var nextnode = current.next;
		nextnode.next = current;
		current.next = null;
		return head;
	}

	this.head = reverse(this.head);
}



