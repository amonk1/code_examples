/*Quni recently started doing chat support, however there is not a chat ticket
type in Odo yet. Quni currently logs all chat tickets through phone tickets. 
After a 4 hour chat shift, it was taking Quni up to an hour to log all of their tickets.
One morning I wrote this JavaScript bookmarklet to cut down the amount of clicks to log
a phone ticket from 17 to 3, dramatically streamlining the process. */

javascript: (function () { 
document.querySelector("#Product").value = "ResearchSuite"; 
document.querySelector("#radioOtherPhone").checked = true; 
document.querySelector("#OtherPhone").disabled = false; 
document.querySelector("#OtherPhone").value = 1; 
document.querySelector("#CallDuration").value = 0; 
document.querySelector("#PhoneDriverCodes").value = 1; 
$("#InteractionCodes").append('<option value="OT|6">Other | Chat</option>');
}());