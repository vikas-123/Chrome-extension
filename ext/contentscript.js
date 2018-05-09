/*// Setup a new observer to get notified of changes
var observer = new MutationObserver(mutationCallback);

// Observe a specific DOM node / subtree
observer.observe(node, config);

// Stop observing changes
observer.disconnect();

// Empty the queue of records
observer.takeRecords();
*/

var observer = new MutationObserver(function (mutations) {
    // Whether you iterate over mutations..
    mutations.forEach(function (mutation) {
      // or use all mutation records is entirely up to you
      var entry = {
        mutation: mutation,
        el: mutation.target,
        value: mutation.target.textContent,
        oldValue: mutation.oldValue
      };
      console.log('Recording mutation:', entry);
    });
  });
  

var options = {
  subtree: true,
  childList: true,
  attributes: false,
  characterData:true,
  attributeOldValue:true
};

observer.observe(target, options);

var editor = document.querySelector('#editor');

observer.observe(editor, config);

observer.disconnect();


elements = document.getElementsByClassName(names);
var target = document.querySelector('#some-id');


/*$(document).ready(function() {
  // Select the target node (tweet modal)
  var target = $('.PermalinkOverlay-modal').get(0);

  // Create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {

      // Get the Twitter modal window replies count
      var loneTweetsCount = $('.PermalinkOverlay-body .ThreadedConversation--loneTweet .tweet').length
      var threadedTweetsCount = $('.PermalinkOverlay-body .ThreadedConversation .tweet').length
      var total = loneTweetsCount + threadedTweetsCount

      // Send message to background.js so we can set the badge text
      chrome.extension.sendMessage({'count': total})

    });
  });

  // Configuration of the observer
  var config = { attributes:true, subtree: true };

  // Pass in the target node, as well as the observer options
  observer.observe(target, config);

});

*/



/* 
      var origTitle = document.title;

      // function to change title when focusing on tab
      function oldTitle() {
        document.title = origTitle;
      }

      // function to change title when un-focusing on tab
      function newTitle() {
        document.title = 'HELLO WORLD';
      }

      // bind functions to blur and focus events
      window.onblur = newTitle;
      window.onfocus = oldTitle;*/