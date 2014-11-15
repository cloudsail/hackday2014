var mGridImages;
var mObjectsList;
var debug = document.getElementById("debug");

function Initialize()
{
	mObjectsList = new Array("bird","elephant","giraffe","lion","monkey","penguin","seahorse","snake","turtle");
	
	InitializeGrid();
	
	Instruction1();
}

function InitializeGrid()
{
	debug.value = "Initializing grid";
	
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

function Instruction1()
{
	PlayAudio("audioTest");
	
	// Make corresponding object draggable
	
}

function Instruction2()
{
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
	Initialize();
}
