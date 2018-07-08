//Functionality added: If a checkbox is checked while the user is holding the shift key, all checkboxes before it are searched for nearest checked checkbox,
//if found, all checkboxes between clicked one and nearest checked one before it, are checked.

//----------------------------------------------------------------------------------------------

//This is an array containing all the checkboxes in the page.
var arrOfCheckboxes = document.querySelectorAll(".inbox .item input");

//Looping through the array of checkboxes to add event listeners containing the derired functionality for each checkbox.
//element: array element itself is passed on each iteration.
//index: the element's index is passed on each iteration.
arrOfCheckboxes.forEach(function(element, index) {

    //Adding event listener for checkboxes.
    element.addEventListener('click', function(event) {

        //Conditions for desired functionality to occur are as follows:
        //      - event.shiftKey: shift key is pressed when the checkbox is checked
        //      - element.checked == true: this makes sure that to use the functionality, the checkbox that the user clicked 
        //        should be unchecked before clicking it (or checked after clicking it, as in this if condition), meaning that
        //        clicking an already checked checkbox (unchecking it) won't trigger the functionality.
        if (event.shiftKey && element.checked == true) {

            //Looping through all elements before clicked element (index-1 -> 0), trying to find a checked checkbox so we can 
            //fill all checkboxes in between clicked checkbox and first checked checkbox before it.
            for (var i = index - 1; i >= 0; i--) {

                //Condition to see if we found a checked checkbox before the clicked checkbox.
                if (arrOfCheckboxes[i].checked == true) {

                    //If checked checkboxbox before clicked checkbox is found, we loop from the first elemnt after the found checked checkbox (i + 1)
                    //up to the element before our already clicked checkbox (index - 1) and check all elements of this loop.
                    for (var j = i + 1; j <= index - 1; j++) {
                        arrOfCheckboxes[j].checked = true;
                    }

                    //The for loop breaks after the first checked checkbox is found to prevent going down further in the list. 
                    break;

                }
            }
        }
    });
})