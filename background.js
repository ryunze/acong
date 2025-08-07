// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    
//     if (message.action === "switch-watermark") {
//         chrome.tabs.query({
//             active: true,
//             currentWindow: true
//         }, (tabs) => {
//             const tab = tabs[0];
//             if (tab && tab.id) {
//                 chrome.scripting.executeScript({
//                     target: {
//                         tabId: tab.id
//                     },
//                     func: (message) => {
//                         localStorage.setItem('switchWatermark', message.data.status);
//                         console.log(message);
//                     },
//                     args: [message]
//                 });
//                 sendResponse(message);
//             }
//         });
//     }

//     if (message.action === "change-logo-image") {
//         chrome.tabs.query({
//             active: true,
//             currentWindow: true
//         }, (tabs) => {
//             const tab = tabs[0];
//             if (tab && tab.id) {
//                 chrome.scripting.executeScript({
//                     target: {
//                         tabId: tab.id
//                     },
//                     func: (message) => {
//                         localStorage.setItem('switchWatermark', message.data.status);
//                         console.log(message);
//                     },
//                     args: [message]
//                 });
//                 sendResponse(message);
//             }
//         });
//     }

//     return true;

// });