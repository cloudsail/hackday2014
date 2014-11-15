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

function InitializeObjects()
{
}

function InitializeGrid()
{
	mGridImages = new Array(3);
	for (var i in mGridImages)
	{
		i = new Array(3);
	}
	
	var elem1 = document.createElement("img");
	elem1.src = "img/bird.jpg";
	
	var elem2 = document.createElement("img");
	elem2.src = "img/elephant.jpg";
	
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
	PlayAudioCombined("audioPut", "audioMonkey", "audioAbove", "audioBird");
	
	// Make corresponding object draggable
	//var monkey = document.getElementById("monkey");
	//monkey.setAttribute("draggable", "true");
	//monkey.addEventListener('dragstart', HandleDragStart);
	//monkey.addEventListener('dragend', HandleDragEnd);
	//monkey.addEventListener('touchstart', HandleTouchStart);
	//monkey.addEventListener('touchmove', HandleTouchMove);
	$('#monkey').draggable({
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
	
	// Make corresponding space receive the object
	//var space1 = document.getElementById("space1");
	//space1.addEventListener('dragover', HandleDragOver);
	//space1.addEventListener('drop', function(e) {
	//	if (e.preventDefault) e.preventDefault();
	//	if (e.stopPropagation) e.stopPropagation(); 
	//
	//	this.innerHTML = e.dataTransfer.getData('text/html');
		
	//	document.getElementById("objectsList").removeChild(elementDragged);
		
	//	Instruction2();
	//	return false;
	//});
}

function Instruction2()
{
	//space1.removeEventListener('dragover', HandleDragOver);
	//space1.removeEventListener('drop', HandleDrop);
	
	PlayAudioCombined("audioPut", "audioSnake", "audioBelow", "audioBird");
	
	$('#snake').draggable({
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
	
	/*var snake = document.getElementById("snake");
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
	});*/
}

function Instruction3()
{
	//space7.removeEventListener('dragover', HandleDragOver);
	//space7.removeEventListener('drop', HandleDrop);
	
	PlayAudioCombined("audioPut", "audioPenguin", "audioBeside", "audioElephant");
	$('#penguin').draggable({
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
	
	/*var penguin = document.getElementById("penguin");
	penguin.setAttribute("draggable", "true");
	penguin.addEventListener('dragstart', HandleDragStart);
	penguin.addEventListener('dragend', HandleDragEnd);
	
	var space8 = document.getElementById("space8");
	space8.addEventListener('dragover', HandleDragOver);
	space8.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault();
		if (e.stopPropagation) e.stopPropagation(); 
	
		this.innerHTML = e.dataTransfer.getData('text/html');
		
		document.getElementById("objectsList").removeChild(elementDragged);
		
		Instruction4();
		return false;
	});*/
}

function Instruction4()
{
	//space8.removeEventListener('dragover', HandleDragOver);
	//space8.removeEventListener('drop', HandleDrop);
	
	PlayAudioCombined("audioPut", "audioLion", "audioBeside", "audioMonkey");
	$('#lion').draggable({
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
	
	/*var lion = document.getElementById("lion");
	lion.setAttribute("draggable", "true");
	lion.addEventListener('dragstart', HandleDragStart);
	lion.addEventListener('dragend', HandleDragEnd);
	
	var space2 = document.getElementById("space2");
	space2.addEventListener('dragover', HandleDragOver);
	space2.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault();
		if (e.stopPropagation) e.stopPropagation(); 
	
		this.innerHTML = e.dataTransfer.getData('text/html');
		
		document.getElementById("objectsList").removeChild(elementDragged);
		
		Instruction5();
		return false;
	});*/
}

function Instruction5()
{
	//space2.removeEventListener('dragover', HandleDragOver);
	//space2.removeEventListener('drop', HandleDrop);
	
	PlayAudioCombined("audioPut", "audioGiraffe", "audioAbove", "audioElephant");
	
	$('#giraffe').draggable({
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
	
	/*var giraffe = document.getElementById("giraffe");
	giraffe.setAttribute("draggable", "true");
	giraffe.addEventListener('dragstart', HandleDragStart);
	giraffe.addEventListener('dragend', HandleDragEnd);
	
	var space6 = document.getElementById("space6");
	space6.addEventListener('dragover', HandleDragOver);
	space6.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault();
		if (e.stopPropagation) e.stopPropagation(); 
	
		this.innerHTML = e.dataTransfer.getData('text/html');
		
		document.getElementById("objectsList").removeChild(elementDragged);
		
		Instruction6();
		return false;
	});*/
}

function Instruction6()
{
	//space6.removeEventListener('dragover', HandleDragOver);
	//space6.removeEventListener('drop', HandleDrop);
	
	PlayAudioCombined("audioPut", "audioTurtle", "audioBelow", "audioLion");
	
	$('#turtle').draggable({
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
	
	/*var turtle = document.getElementById("turtle");
	turtle.setAttribute("draggable", "true");
	turtle.addEventListener('dragstart', HandleDragStart);
	turtle.addEventListener('dragend', HandleDragEnd);
	
	var space5 = document.getElementById("space5");
	space5.addEventListener('dragover', HandleDragOver);
	space5.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault();
		if (e.stopPropagation) e.stopPropagation(); 
	
		this.innerHTML = e.dataTransfer.getData('text/html');
		
		document.getElementById("objectsList").removeChild(elementDragged);
		
		Instruction7();
		return false;
	});*/
}

function Instruction7()
{
	//space5.removeEventListener('dragover', HandleDragOver);
	//space5.removeEventListener('drop', HandleDrop);
	
	PlayAudioCombined("audioPut", "audioSeahorse", "audioAbove", "audioGiraffe");
	
	$('#seahorse').draggable({
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
		}
	});
	
	/*var seahorse = document.getElementById("seahorse");
	seahorse.setAttribute("draggable", "true");
	seahorse.addEventListener('dragstart', HandleDragStart);
	seahorse.addEventListener('dragend', HandleDragEnd);
	
	var space3 = document.getElementById("space3");
	space3.addEventListener('dragover', HandleDragOver);
	space3.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault();
		if (e.stopPropagation) e.stopPropagation(); 
	
		this.innerHTML = e.dataTransfer.getData('text/html');
		
		document.getElementById("objectsList").removeChild(elementDragged);
		
		return false;
	});*/
}

window.onload = function() {
}
