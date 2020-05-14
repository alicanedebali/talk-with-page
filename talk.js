var SpeechRecognition , SpeechGrammarList ,SpeechRecognitionEvent, grammar, recognition, speechRecognitionList
SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

grammar = '#JSGF V1.0;'

recognition = new SpeechRecognition();
speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'tr-TR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


var back=['önceki','önce','geri','beri','beriki'];
var next=['sonra','sonraki','ileri','ileriki','öbür','öbürsü','öbürkü','öbürki'];
var search=["ara","Google","Google'da","bul","kaç","ne","kaçta"];
var startRead=["oku","okumaya","başla"];
var stopRead=["dur","kes","kapat","bitir","durdu"]
recognition.start();

recognition.onresult = function(event) { 
	if(event.results[0][0].transcript.split(" ")){
	var res = event.results[0][0].transcript.split(" ");
	}
	else{
	var res=[event.results[0][0].transcript];
}
var alrt='';
	res.forEach(key =>  {
		if(back.includes(key)){
			alrt='back';
			window.history.go(-1);
		}
		else if(next.includes(key)){
			alrt='next';
			window.history.go(+1);}
		else if(search.includes(key)){
			var x= res.indexOf(key);
			delete res[x]
			var searchText=res.join(" ");
			alrt='search';
			window.open('http://google.com/search?q='+searchText);
	}
		else if(startRead.includes(key)){
			alrt='startread';
			var x = document.body.getElementsByTagName("*");
			var message='';
			var msg = window.speechSynthesis;
			for(i=0; i<x.length;i++){
				if(x[i].tagName=='P' || x[i].tagName=='H1' || x[i].tagName=='H2' || x[i].tagName=='H3' || x[i].tagName=='H4'){ 
				message = message+' ' + x[i].textContent;
			
		}
		
		}
		message=new SpeechSynthesisUtterance(message)
		msg.speak(message);
}else if(stopRead.includes(key)){
	alrt='stopread';
	speechSynthesis.cancel();
}
	});
if(alrt==''){
alert("Söylediklerinizin karşılığı bulunmamakta. Lütfen tekrar söyleyiniz");
}
  console.log('Confidence: ' + event.results[0][0].transcript);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
}


