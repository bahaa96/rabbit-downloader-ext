
console.log("Background")


chrome.browserAction.onClicked.addListener(mainButtonClicked)

function mainButtonClicked(tab) {
    let message = {
        text: "Facebook"
    }
    chrome.tabs.sendMessage(tab.id, message)
}

function addDownload(options, cb) {    
    chrome.downloads.download(options, () => {
        cb()
    })
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const { action } = request
    switch(action.type) {
        case "ADD_DOWNLOAD":
            addDownload(action.download, () => {
            })
            return sendResponse({message: "Done"});            
        default:
            return sendResponse({message: "Nothing Received"});
    }   
});