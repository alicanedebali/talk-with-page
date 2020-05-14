//chrome.browserAction.setBadgeText({text: String("5")});
chrome.browserAction.onClicked.addListener(function(tab) {  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "talk.js"});
		
    });
});

