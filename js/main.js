var mGridImages;
var mObjectsList;
var debug = document.getElementById("debug");
var elementDragged = null;

var audio1 = null;
var audio2 = null;
var audio3 = null;
var audio4 = null;

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

function PlayAudio1()
{
	audio1.play();
}

function PlayAudio2()
{
	audio2.play();
}

function PlayAudio3()
{
	audio3.play();
}

function PlayAudio4()
{
	audio4.play();
}

function EndPlay()
{
	audio1.removeEventListener('ended', PlayAudio2);
	audio2.removeEventListener('ended', PlayAudio3);
	audio3.removeEventListener('ended', PlayAudio4);
	audio4.removeEventListener('ended', EndPlay);
	
	audio1 = null;
	audio2 = null;
	audio3 = null;
	audio4 = null;
}

function PlayAudioCombined(a1, a2, a3, a4)
{
	audio1 = document.getElementById(a1);
	audio2 = document.getElementById(a2);
	audio3 = document.getElementById(a3);
	audio4 = document.getElementById(a4);
	
	audio1.addEventListener('ended', PlayAudio2);
	audio2.addEventListener('ended', PlayAudio3);
	audio3.addEventListener('ended', PlayAudio4);
	audio4.addEventListener('ended', EndPlay);
	
	PlayAudio1();
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
	PlayAudioCombined("audioPut", "audioMonkey", "audioAbove", "audioBird");
	
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
