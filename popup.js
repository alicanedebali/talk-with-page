/*function injectTheScript() {
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "read.js"});
		
    });
}
*/
function talkTheScript() {
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "talk.js"});
		
    });
}
//document.getElementById('clickRead').addEventListener('click', injectTheScript);
document.getElementById('clickTalk').addEventListener('click', talkTheScript);