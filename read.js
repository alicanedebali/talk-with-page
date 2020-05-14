var x = document.body.getElementsByTagName("*");
//var x = document.getElementById("content").textContent;


if (speechSynthesis.speaking) {
        // SpeechSyn is currently speaking, cancel the current utterance(s)
	/*speechSynthesis.pause();
	setTimeout(function(){ console.log("Hello"); }, 1000);*/
	speechSynthesis.cancel();
}
else{
		console.log('speak')
	var message='';
	var msg = window.speechSynthesis;
	for(i=0; i<x.length;i++){
		if(x[i].tagName=='P' || x[i].tagName=='H1' || x[i].tagName=='H2' || x[i].tagName=='H3' || x[i].tagName=='H4'){ 
			message = message+' ' + x[i].textContent;
			
		}
		
	}
		message=new SpeechSynthesisUtterance(message)
		msg.speak(message);
}