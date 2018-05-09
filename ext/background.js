chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
          console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
          //console.log(request);
          var finalAnswer = JSON.stringify(request);
          
          chrome.notifications.create('id', {type: 'basic',
                                                  iconUrl: 'icon.png',
                                                  title: 'Webpage Manipulated',
                                                  requireInteraction : true,
                                                  message: finalAnswer,
                                                  }, function(notificationId) {});          
 
  });
  
  
 