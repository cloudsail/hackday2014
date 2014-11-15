var mGridImages;
var mObjectsList;
var debug = document.getElementById("debug");
var elementDragged = null;

var setElem1Name;
var setElem2Name;
var refElem1Name;
var refElem2Name;
var refElem3Name;

var audio1 = null;
var audio2 = null;
var audio3 = null;
var audio4 = null;

function Initialize()
{
	var button = document.getElementById("startBtn");
	button.disabled = true;
	
	if (button.value === "Play Again!")
	{
		for (i = 1; i <= 9; i++)
		{
			$('#space' + i).empty();
		}
		
		$('#objectsList').empty();
		
		InitializeObjects();
		InitializeGrid();
	}
	
	Instruction1();
}

function ResetGame()
{
	alert("You Won!");
	
	var button = document.getElementById("startBtn");
	button.value = "Play Again!";
	button.disabled = false;
	
	InitializeObjectsArray();
}

function InitializeObjectsArray()
{
	mObjectsList = new Array("bird","elephant","giraffe","lion","monkey","penguin","seahorse","snake","turtle");
}

function InitializeObjects()
{
	var index1 = Math.floor(Math.random() * (mObjectsList.length - 1));
	setElem1Name = mObjectsList.splice(index1, 1)[0];
	
	var index2 = Math.floor(Math.random() * (mObjectsList.length - 1));
	setElem2Name = mObjectsList.splice(index2, 1)[0];
	
	for (i = 0; i < mObjectsList.length; i++)
	{
		$('<li id=\"' + mObjectsList[i] + '\" class="pic-4"><span class="img img-' + mObjectsList[i] + '\"></span></li>').appendTo('#objectsList');
	}
}

function InitializeGrid()
{
	mGridImages = new Array(3);
	for (var i in mGridImages)
	{
		i = new Array(3);
	}
	
	var elem1 = document.createElement("img");
	elem1.src = "img/" + setElem1Name + ".jpg";
	
	var elem2 = document.createElement("img");
	elem2.src = "img/" + setElem2Name + ".jpg";
	
	document.getElementById("space4").appendChild(elem1);
	document.getElementById("space9").appendChild(elem2);
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
	var index = Math.floor(Math.random() * (mObjectsList.length - 1));
	elemName = mObjectsList.splice(index, 1)[0];
	refElem1Name = elemName;

	PlayAudioCombined("audioPut", "audio" + elemName, "audioAbove", "audio" + setElem1Name);
	
	$('#' + elemName).draggable({
		containment: '#content',
		stack: '#objectsList li',
		cursor: 'move',
		revert: true
	});
	$('#space1').droppable({
		accept: '#objectsList li',
		drop: function (e, ui) {
			ui.draggable.draggable( 'disable' );
			$(this).droppable( 'disable' );
			ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
			ui.draggable.draggable( 'option', 'revert', false );
			
			Instruction2();
		}
	});
}

function Instruction2()
{
	var index = Math.floor(Math.random() * (mObjectsList.length - 1));
	elemName = mObjectsList.splice(index, 1)[0];
	
	PlayAudioCombined("audioPut", "audio" + elemName, "audioBelow", "audio" + setElem1Name);
	
	$('#' + elemName).draggable({
		containment: '#content',
		stack: '#objectsList li',
		cursor: 'move',
		revert: true
	});
	$('#space7').droppable({
		accept: '#objectsList li',
		drop: function (e, ui) {
			ui.draggable.draggable( 'disable' );
			$(this).droppable( 'disable' );
			ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
			ui.draggable.draggable( 'option', 'revert', false );
			
			Instruction3();
		}
	});
}

function Instruction3()
{
	var index = Math.floor(Math.random() * (mObjectsList.length - 1));
	elemName = mObjectsList.splice(index, 1)[0];
	
	PlayAudioCombined("audioPut", "audio" + elemName, "audioBeside", "audio" + setElem2Name);
	
	$('#' + elemName).draggable({
		containment: '#content',
		stack: '#objectsList li',
		cursor: 'move',
		revert: true
	});
	$('#space8').droppable({
		accept: '#objectsList li',
		drop: function (e, ui) {
			ui.draggable.draggable( 'disable' );
			$(this).droppable( 'disable' );
			ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
			ui.draggable.draggable( 'option', 'revert', false );
			
			Instruction4();
		}
	});
}

function Instruction4()
{
	var index = Math.floor(Math.random() * (mObjectsList.length - 1));
	elemName = mObjectsList.splice(index, 1)[0];
	refElem3Name = elemName;
	
	PlayAudioCombined("audioPut", "audio" + elemName, "audioBeside", "audio" + refElem1Name);
	
	$('#' + elemName).draggable({
		containment: '#content',
		stack: '#objectsList li',
		cursor: 'move',
		revert: true
	});
	$('#space2').droppable({
		accept: '#objectsList li',
		drop: function (e, ui) {
			ui.draggable.draggable( 'disable' );
			$(this).droppable( 'disable' );
			ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
			ui.draggable.draggable( 'option', 'revert', false );
			
			Instruction5();
		}
	});
}

function Instruction5()
{
	var index = Math.floor(Math.random() * (mObjectsList.length - 1));
	elemName = mObjectsList.splice(index, 1)[0];
	refElem2Name = elemName;
	
	PlayAudioCombined("audioPut", "audio" + elemName, "audioAbove", "audio" + setElem2Name);
	
	$('#' + elemName).draggable({
		containment: '#content',
		stack: '#objectsList li',
		cursor: 'move',
		revert: true
	});
	$('#space6').droppable({
		accept: '#objectsList li',
		drop: function (e, ui) {
			ui.draggable.draggable( 'disable' );
			$(this).droppable( 'disable' );
			ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
			ui.draggable.draggable( 'option', 'revert', false );
			
			Instruction6();
		}
	});
}

function Instruction6()
{
	var index = Math.floor(Math.random() * (mObjectsList.length - 1));
	elemName = mObjectsList.splice(index, 1)[0];
	
	PlayAudioCombined("audioPut", "audio" + elemName, "audioBelow", "audio" + refElem3Name);
	
	$('#' + elemName).draggable({
		containment: '#content',
		stack: '#objectsList li',
		cursor: 'move',
		revert: true
	});
	$('#space5').droppable({
		accept: '#objectsList li',
		drop: function (e, ui) {
			ui.draggable.draggable( 'disable' );
			$(this).droppable( 'disable' );
			ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
			ui.draggable.draggable( 'option', 'revert', false );
			
			Instruction7();
		}
	});
}

function Instruction7()
{
	var index = Math.floor(Math.random() * (mObjectsList.length - 1));
	elemName = mObjectsList.splice(index, 1)[0];
	
	PlayAudioCombined("audioPut", "audio" + elemName, "audioAbove", "audio" + refElem2Name);
	
	$('#' + elemName).draggable({
		containment: '#content',
		stack: '#objectsList li',
		cursor: 'move',
		revert: true
	});
	$('#space3').droppable({
		accept: '#objectsList li',
		drop: function (e, ui) {
			ui.draggable.draggable( 'disable' );
			$(this).droppable( 'disable' );
			ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
			ui.draggable.draggable( 'option', 'revert', false );
			ResetGame();
		}
	});
}

window.onload = function() {
	InitializeObjectsArray();
	
	InitializeObjects();
	InitializeGrid();
}
