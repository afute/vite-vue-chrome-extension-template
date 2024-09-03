chrome.runtime.onInstalled.addListener(():void => {
    chrome.action.openPopup(():void => {
        console.log("onInstalled openPopup");
    });
});
