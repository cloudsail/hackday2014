var mGridImages;
var mObjectsList;
var debug = document.getElementById("debug");
var elementDragged = null;

function Initialize()
{
	document.getElementById("startBtn").disabled = true;
	mObjectsList = new Array("bird","elephant","giraffe","lion","monkey","penguin","seahorse","snake","turtle");
	
	InitializeGrid();
	
	Instruction1();
}

function InitializeGrid()
{
	mGridImages = new Array(3);
	for (var i in mGridImages)
	{
		i = new Array(3);
	}
	
	var elem1 = document.createElement("img");
	elem1.src = "img/bird-rev.jpg";
	
	var elem2 = document.createElement("img");
	elem2.src = "img/elephant-rev.jpg";
	
	document.getElementById("space4").appendChild(elem1);
	document.getElementById("space9").appendChild(elem2);
}

function InitializeObjects()
{
}

function PlayAudio(audioId)
{
	var audio = document.getElementById(audioId);
	audio.play();
}

function HandleDragStart(e)
{
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.innerHTML);
	elementDragged = this;
	
	return false;
}

function HandleDragEnd(e)
{
	elementDragged = null;
}

function HandleDrop(e)
{
	if (e.preventDefault) e.preventDefault();
	if (e.stopPropagation) e.stopPropagation(); 
	
	this.innerHTML = e.dataTransfer.getData('text/html');
	
	return false;
}

function HandleDragOver(e)
{
	if (e.preventDefault) e.preventDefault();

	e.dataTransfer.dropEffect = 'move';

	return false;
}

function Instruction1()
{
	PlayAudio("audioTest");
	
	// Make corresponding object draggable
	var monkey = document.getElementById("monkey");
	monkey.setAttribute("draggable", "true");
	monkey.addEventListener('dragstart', HandleDragStart);
	monkey.addEventListener('dragend', HandleDragEnd);
	
	// Make corresponding space receive the object
	var space1 = document.getElementById("space1");
	space1.addEventListener('dragover', HandleDragOver);
	space1.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault();
		if (e.stopPropagation) e.stopPropagation(); 
	
		this.innerHTML = e.dataTransfer.getData('text/html');
		
		document.getElementById("objectsList").removeChild(elementDragged);
		
		Instruction2();
		return false;
	});
}

function Instruction2()
{
	space1.removeEventListener('dragover', HandleDragOver);
	space1.removeEventListener('drop', HandleDrop);
	
	PlayAudio("audioTest");
	
	var snake = document.getElementById("snake");
	snake.setAttribute("draggable", "true");
	snake.addEventListener('dragstart', HandleDragStart);
	snake.addEventListener('dragend', HandleDragEnd);
	
	var space7 = document.getElementById("space7");
	space7.addEventListener('dragover', HandleDragOver);
	space7.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault();
		if (e.stopPropagation) e.stopPropagation(); 
	
		this.innerHTML = e.dataTransfer.getData('text/html');
		
		document.getElementById("objectsList").removeChild(elementDragged);
		
		Instruction3();
		return false;
	});
}

function Instruction3()
{
}

function Instruction4()
{
}

function Instruction5()
{
}

function Instruction6()
{
}

function Instruction7()
{
}

window.onload = function() {
}
