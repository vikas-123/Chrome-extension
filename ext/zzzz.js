
  // Select the target node (document body)
  var target = document.getElementById("container"); //fk
 //var target = document.getElementById("body-container"); yt
  
  //check the dom returned
  console.log(target);
  
  //create an array to store mutation records
  //var recordsArray = [];
  //var removedNodesArray = [];
  // var manipulatedObj = {};
  // Create an observer instance
  
  var observer = new MutationObserver(function(mutations) {/** this is the callback where you
         do what you need to do.
         The argument is an array of MutationRecords where the affected attribute is
         named "attributeName". There is a few other properties in a record
         but I'll let you work it out yourself.
      **/
    mutations.forEach(function(mutation) {
        
      var entry = {
         type : mutation.type,                            // Returns "attributes" if the mutation was an attribute mutation,
                                                          //"characterData" if it was a mutation to a CharacterData node
                                                          //and "childList" if it was a mutation to the tree of nodes.
        
        attributeName : mutation.attributeName,           //Returns the local name of the changed attribute, or null.
        oldValue : mutation.oldValue,                     /*The return value depends on the MutationRecord.type.
                                                          For attributes, it is the value of the changed attribute before the change.
                                                          For characterData, it is the data of the changed node before the change.
                                                          For childList, it is null*/
        manipulatedValue : mutation.target.textContent,   //shows manipulated text value
        addedNodes: mutation.addedNodes,                  // shows if nodes are added
        removedNodes : mutation.removedNodes,             //shows if nodes are removed
        target : mutation.target,                         //shows the target element of mutation
        innerHTML : mutation.target.innerHTML,            //shows innerHTML
        innerText : mutation.target.innerText,            //shows innerText
        manipulatedSrc: mutation.target.src               // shows manipulated Src
    
      
      };
      
       switch (entry.type) {
         
            case 'attributes':                          // case 1
              if (mutation.oldValue === null)
                console.log('added attribute', entry.attributeName, '', entry.manipulatedSrc, entry.target);
              else
                console.log('changed attribute', entry.attributeName, entry.oldValue, entry.manipulatedSrc, entry.target);
            break;
            
            
            case 'childList':
              if (entry.addedNodes.length > 0)        //case 2
                {   
                    var message = "Node Added";
                    console.log('added nodes are ', entry.addedNodes, entry.target);
                    console.log(message);
                    //chrome.runtime.sendMessage(message, function(response) { });
                }
                
              else if (entry.removedNodes.length > 0)
                { 
                     var message = "Node Removed";
                     console.log('removed nodes are', entry.removedNodes, entry.target );
                     console.log(message);
                     // chrome.runtime.sendMessage(message, function(response) { });  
                }
                                                                            
                break;
                
            case 'characterData' :                    //case 3
                 
                    /*chrome.runtime.sendMessage(message, function(response) {
                    //console.log('should work');
                    }); */
                    console.log("Old value is " + entry.oldValue + "manipulated value is " + entry.manipulatedValue , entry.target);
                    break;
                  
        }
        
      //console.log('Recording mutation:', entry.target);
      //console.log('Recording mutation:', entry);
      // console.log('Mutation is:' , mutation);
   
      

      // Send message to background.js so we can show notifications
          chrome.runtime.sendMessage(entry, function(response) {
          console.log('should work too');
      });
    });
 });

  // Configuration of the observer
  var config = {attributes:true,              //Set to true if mutations to target's attributes are to be observed.
                subtree: true,                //The subtree option will additionally allow every child node of the 
                                              //documentElement to be monitored for these same changes
                childList: true,              //he childList configuration option causes the observer to monitor the DOM 
                                              //for any nodes added or removed from the documentElement
                characterData:true,           //Set to true if mutations to target's data are to be observed.
                characterDataOldValue:true,   //Set to true if characterData is set to true and target's data before the 
                                              //mutation needs to be recorded.
                attributeOldValue:true        //Set to true if attributes is set to true and target's attribute value before the mutation 
                                              //needs to be recorded.
              };

  // Pass in the target node, as well as the observer options
  //function test(){
    
    observer.observe(target, config);
    
  //console.log(recordsArray);
    
/*    
 // Stop observing changes
 function disconnect(){
  
 observer.disconnect();

 }

setTimeout(disconnect,30000);

// Empty the queue of records

function test(){
  
var records = observer.takeRecords();
console.log(records[0]);

}

setTimeout(test,15000);

 */


