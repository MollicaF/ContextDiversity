/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var listNumber = 1;

stimuli = [ ['ibis','calzone','Animals','0','Food','0','Different'],
            ['ibis','seahorse','Animals','0','Animals','1','Same'],
            ['ibis','nougat','Animals','0','Food','1','Different'],
            ['ibis','gnat','Animals','0','Animals','2','Same'],
            ['ibis','paella','Animals','0','Food','2','Different'],
            ['ibis','walrus','Animals','0','Animals','3','Same'],
            ['ibis','guacamole','Animals','0','Food','3','Different'],
            ['ibis','panda','Animals','0','Animals','4','Same'],
            ['ibis','meatloaf','Animals','0','Food','4','Different'],
            ['ibis','hen','Animals','0','Animals','5','Same'],
            ['ibis','oatmeal','Animals','0','Food','5','Different'],
            ['ibis','squirrel','Animals','0','Animals','6','Same'],
            ['ibis','ginger','Animals','0','Food','6','Different'],
            ['ibis','frog','Animals','0','Animals','7','Same'],
            ['ibis','rice','Animals','0','Food','7','Different'],
            ['ibis','monkey','Animals','0','Animals','8','Same'],
            ['ibis','cake','Animals','0','Food','8','Different'],
            ['ibis','horse','Animals','0','Animals','9','Same'],
            ['ibis','beer','Animals','0','Food','9','Different'],
            ['calzone','seahorse','Food','0','Animals','1','Different'],
            ['calzone','nougat','Food','0','Food','1','Same'],
            ['calzone','gnat','Food','0','Animals','2','Different'],
            ['calzone','paella','Food','0','Food','2','Same'],
            ['calzone','walrus','Food','0','Animals','3','Different'],
            ['calzone','guacamole','Food','0','Food','3','Same'],
            ['calzone','panda','Food','0','Animals','4','Different'],
            ['calzone','meatloaf','Food','0','Food','4','Same'],
            ['calzone','hen','Food','0','Animals','5','Different'],
            ['calzone','oatmeal','Food','0','Food','5','Same'],
            ['calzone','squirrel','Food','0','Animals','6','Different'],
            ['calzone','ginger','Food','0','Food','6','Same'],
            ['calzone','frog','Food','0','Animals','7','Different'],
            ['calzone','rice','Food','0','Food','7','Same'],
            ['calzone','monkey','Food','0','Animals','8','Different'],
            ['calzone','cake','Food','0','Food','8','Same'],
            ['calzone','horse','Food','0','Animals','9','Different'],
            ['calzone','beer','Food','0','Food','9','Same'],
            ['seahorse','nougat','Animals','1','Food','1','Different'],
            ['seahorse','gnat','Animals','1','Animals','2','Same'],
            ['seahorse','paella','Animals','1','Food','2','Different'],
            ['seahorse','walrus','Animals','1','Animals','3','Same'],
            ['seahorse','guacamole','Animals','1','Food','3','Different'],
            ['seahorse','panda','Animals','1','Animals','4','Same'],
            ['seahorse','meatloaf','Animals','1','Food','4','Different'],
            ['seahorse','hen','Animals','1','Animals','5','Same'],
            ['seahorse','oatmeal','Animals','1','Food','5','Different'],
            ['seahorse','squirrel','Animals','1','Animals','6','Same'],
            ['seahorse','ginger','Animals','1','Food','6','Different'],
            ['seahorse','frog','Animals','1','Animals','7','Same'],
            ['seahorse','rice','Animals','1','Food','7','Different'],
            ['seahorse','monkey','Animals','1','Animals','8','Same'],
            ['seahorse','cake','Animals','1','Food','8','Different'],
            ['seahorse','horse','Animals','1','Animals','9','Same'],
            ['seahorse','beer','Animals','1','Food','9','Different'],
            ['nougat','gnat','Food','1','Animals','2','Different'],
            ['nougat','paella','Food','1','Food','2','Same'],
            ['nougat','walrus','Food','1','Animals','3','Different'],
            ['nougat','guacamole','Food','1','Food','3','Same'],
            ['nougat','panda','Food','1','Animals','4','Different'],
            ['nougat','meatloaf','Food','1','Food','4','Same'],
            ['nougat','hen','Food','1','Animals','5','Different'],
            ['nougat','oatmeal','Food','1','Food','5','Same'],
            ['nougat','squirrel','Food','1','Animals','6','Different'],
            ['nougat','ginger','Food','1','Food','6','Same'],
            ['nougat','frog','Food','1','Animals','7','Different'],
            ['nougat','rice','Food','1','Food','7','Same'],
            ['nougat','monkey','Food','1','Animals','8','Different'],
            ['nougat','cake','Food','1','Food','8','Same'],
            ['nougat','horse','Food','1','Animals','9','Different'],
            ['nougat','beer','Food','1','Food','9','Same'],
            ['gnat','paella','Animals','2','Food','2','Different'],
            ['gnat','walrus','Animals','2','Animals','3','Same'],
            ['gnat','guacamole','Animals','2','Food','3','Different'],
            ['gnat','panda','Animals','2','Animals','4','Same'],
            ['gnat','meatloaf','Animals','2','Food','4','Different'],
            ['gnat','hen','Animals','2','Animals','5','Same'],
            ['gnat','oatmeal','Animals','2','Food','5','Different'],
            ['gnat','squirrel','Animals','2','Animals','6','Same'],
            ['gnat','ginger','Animals','2','Food','6','Different'],
            ['gnat','frog','Animals','2','Animals','7','Same'],
            ['gnat','rice','Animals','2','Food','7','Different'],
            ['gnat','monkey','Animals','2','Animals','8','Same'],
            ['gnat','cake','Animals','2','Food','8','Different'],
            ['gnat','horse','Animals','2','Animals','9','Same'],
            ['gnat','beer','Animals','2','Food','9','Different'],
            ['paella','walrus','Food','2','Animals','3','Different'],
            ['paella','guacamole','Food','2','Food','3','Same'],
            ['paella','panda','Food','2','Animals','4','Different'],
            ['paella','meatloaf','Food','2','Food','4','Same'],
            ['paella','hen','Food','2','Animals','5','Different'],
            ['paella','oatmeal','Food','2','Food','5','Same'],
            ['paella','squirrel','Food','2','Animals','6','Different'],
            ['paella','ginger','Food','2','Food','6','Same'],
            ['paella','frog','Food','2','Animals','7','Different'],
            ['paella','rice','Food','2','Food','7','Same'],
            ['paella','monkey','Food','2','Animals','8','Different'],
            ['paella','cake','Food','2','Food','8','Same'],
            ['paella','horse','Food','2','Animals','9','Different'],
            ['paella','beer','Food','2','Food','9','Same'],
            ['walrus','guacamole','Animals','3','Food','3','Different'],
            ['walrus','panda','Animals','3','Animals','4','Same'],
            ['walrus','meatloaf','Animals','3','Food','4','Different'],
            ['walrus','hen','Animals','3','Animals','5','Same'],
            ['walrus','oatmeal','Animals','3','Food','5','Different'],
            ['walrus','squirrel','Animals','3','Animals','6','Same'],
            ['walrus','ginger','Animals','3','Food','6','Different'],
            ['walrus','frog','Animals','3','Animals','7','Same'],
            ['walrus','rice','Animals','3','Food','7','Different'],
            ['walrus','monkey','Animals','3','Animals','8','Same'],
            ['walrus','cake','Animals','3','Food','8','Different'],
            ['walrus','horse','Animals','3','Animals','9','Same'],
            ['walrus','beer','Animals','3','Food','9','Different'],
            ['guacamole','panda','Food','3','Animals','4','Different'],
            ['guacamole','meatloaf','Food','3','Food','4','Same'],
            ['guacamole','hen','Food','3','Animals','5','Different'],
            ['guacamole','oatmeal','Food','3','Food','5','Same'],
            ['guacamole','squirrel','Food','3','Animals','6','Different'],
            ['guacamole','ginger','Food','3','Food','6','Same'],
            ['guacamole','frog','Food','3','Animals','7','Different'],
            ['guacamole','rice','Food','3','Food','7','Same'],
            ['guacamole','monkey','Food','3','Animals','8','Different'],
            ['guacamole','cake','Food','3','Food','8','Same'],
            ['guacamole','horse','Food','3','Animals','9','Different'],
            ['guacamole','beer','Food','3','Food','9','Same'],
            ['panda','meatloaf','Animals','4','Food','4','Different'],
            ['panda','hen','Animals','4','Animals','5','Same'],
            ['panda','oatmeal','Animals','4','Food','5','Different'],
            ['panda','squirrel','Animals','4','Animals','6','Same'],
            ['panda','ginger','Animals','4','Food','6','Different'],
            ['panda','frog','Animals','4','Animals','7','Same'],
            ['panda','rice','Animals','4','Food','7','Different'],
            ['panda','monkey','Animals','4','Animals','8','Same'],
            ['panda','cake','Animals','4','Food','8','Different'],
            ['panda','horse','Animals','4','Animals','9','Same'],
            ['panda','beer','Animals','4','Food','9','Different'],
            ['meatloaf','hen','Food','4','Animals','5','Different'],
            ['meatloaf','oatmeal','Food','4','Food','5','Same'],
            ['meatloaf','squirrel','Food','4','Animals','6','Different'],
            ['meatloaf','ginger','Food','4','Food','6','Same'],
            ['meatloaf','frog','Food','4','Animals','7','Different'],
            ['meatloaf','rice','Food','4','Food','7','Same'],
            ['meatloaf','monkey','Food','4','Animals','8','Different'],
            ['meatloaf','cake','Food','4','Food','8','Same'],
            ['meatloaf','horse','Food','4','Animals','9','Different'],
            ['meatloaf','beer','Food','4','Food','9','Same'],
            ['hen','oatmeal','Animals','5','Food','5','Different'],
            ['hen','squirrel','Animals','5','Animals','6','Same'],
            ['hen','ginger','Animals','5','Food','6','Different'],
            ['hen','frog','Animals','5','Animals','7','Same'],
            ['hen','rice','Animals','5','Food','7','Different'],
            ['hen','monkey','Animals','5','Animals','8','Same'],
            ['hen','cake','Animals','5','Food','8','Different'],
            ['hen','horse','Animals','5','Animals','9','Same'],
            ['hen','beer','Animals','5','Food','9','Different'],
            ['oatmeal','squirrel','Food','5','Animals','6','Different'],
            ['oatmeal','ginger','Food','5','Food','6','Same'],
            ['oatmeal','frog','Food','5','Animals','7','Different'],
            ['oatmeal','rice','Food','5','Food','7','Same'],
            ['oatmeal','monkey','Food','5','Animals','8','Different'],
            ['oatmeal','cake','Food','5','Food','8','Same'],
            ['oatmeal','horse','Food','5','Animals','9','Different'],
            ['oatmeal','beer','Food','5','Food','9','Same'],
            ['squirrel','ginger','Animals','6','Food','6','Different'],
            ['squirrel','frog','Animals','6','Animals','7','Same'],
            ['squirrel','rice','Animals','6','Food','7','Different'],
            ['squirrel','monkey','Animals','6','Animals','8','Same'],
            ['squirrel','cake','Animals','6','Food','8','Different'],
            ['squirrel','horse','Animals','6','Animals','9','Same'],
            ['squirrel','beer','Animals','6','Food','9','Different'],
            ['ginger','frog','Food','6','Animals','7','Different'],
            ['ginger','rice','Food','6','Food','7','Same'],
            ['ginger','monkey','Food','6','Animals','8','Different'],
            ['ginger','cake','Food','6','Food','8','Same'],
            ['ginger','horse','Food','6','Animals','9','Different'],
            ['ginger','beer','Food','6','Food','9','Same'],
            ['frog','rice','Animals','7','Food','7','Different'],
            ['frog','monkey','Animals','7','Animals','8','Same'],
            ['frog','cake','Animals','7','Food','8','Different'],
            ['frog','horse','Animals','7','Animals','9','Same'],
            ['frog','beer','Animals','7','Food','9','Different'],
            ['rice','monkey','Food','7','Animals','8','Different'],
            ['rice','cake','Food','7','Food','8','Same'],
            ['rice','horse','Food','7','Animals','9','Different'],
            ['rice','beer','Food','7','Food','9','Same'],
            ['monkey','cake','Animals','8','Food','8','Different'],
            ['monkey','horse','Animals','8','Animals','9','Same'],
            ['monkey','beer','Animals','8','Food','9','Different'],
            ['cake','horse','Food','8','Animals','9','Different'],
            ['cake','beer','Food','8','Food','9','Same'],
            ['horse','beer','Animals','9','Food','9','Different']];

stims = _.shuffle(stimuli);

// END OF STIMULI XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


var psiTurk = PsiTurk(uniqueId, adServerLoc);

var mycondition = condition;  
var mycounterbalance = counterbalance;

var pages = [
	"instructions/instruct-ready.html",
	"stage.html",
	"postquestionnaire.html"
];

psiTurk.preloadPages(pages); 

var instructionPages = [ 
	"instructions/instruct-ready.html"
];


/****************
* Practice         *
****************/

var Trial = function() {
	var startTime = 0;
	var stim = null;
	var listen = false;
    var side =  '';
	
	var next = function(){
	    if (stims.length == 0) {
	        finish();
	    } else {
            if (Math.random() > 0.5) {
	            stim = stims.shift();
                side = 'canonical';
	            right_r.textContent = stim[1];
	            left_r.textContent = stim[0];
	            listen = true;
	            startTime = new Date().getTime()
	        } else {
	            stim = stims.shift();
                side = 'noncanonical';
	            right_r.textContent = stim[0];
	            left_r.textContent = stim[1];
	            listen = true;
	            startTime = new Date().getTime()
            }
        }
	};
	
	var respond_l = function() {
	    listen = false;
	    var rt = new Date().getTime() - startTime;
	    psiTurk.recordTrialData([stim[0], stim[1], stim[2], stim[3], stim[4], stim[5], stim[6], side, left_r.textContent, rt, listNumber]);
	    next();
	};
	
	var respond_r = function() {
	    listen = false;
	    var rt = new Date().getTime() - startTime;
	    psiTurk.recordTrialData([stim[0], stim[1], stim[2], stim[3], stim[4], stim[5], stim[6], side, right_r.textContent, rt, listNumber]);
	    next();
	};
		
	var finish = function() {
		psiTurk.saveData({
            success: function(){
                psiTurk.completeHIT();
            }, 
            error: function(){var foo=bar;}});
	};

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	psiTurk.showPage('stage.html');
	var right_r = document.getElementById('w_right_r');
	var left_r = document.getElementById('w_left_r');
	
    $("#w_left_r").click(respond_l);
    $("#w_right_r").click(respond_r);
	next();
	
	
};

/****************
* Questionnaire *
****************/

var Quest = function() {

	record_responses = function() {

		$('input').each( function(i, val) {
			psiTurk.recordTrialData([this.id, this.value]);
		});
		$('select').each( function(i, val) {
			psiTurk.recordTrialData([this.id, this.value]);		
		});

	};

	psiTurk.showPage('postquestionnaire.html');
	
	$("#next").click(function () {
	    var form = document.getElementById("postquiz");
/*	    if (form["sound_check"].value != "koala") {
	    	alert("You have failed the sound check. Please try again.");
	    	psiTurk.recordTrialData(["The failed sound check."]);
	    	return false;
	    } else {*/
	    record_responses();
	    currentview = new Trial();
		//}
	});
    
	
};

var currentview;

/*******************
 * Run Task
 ******************/
$(window).load( function(){
    psiTurk.doInstructions(
    	instructionPages, 
    	function() { currentview = new Quest(); } 
    );
});

