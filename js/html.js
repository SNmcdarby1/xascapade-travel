var dt = Date.parse(document.getElementById('ArrivalDate').value);
//stack overflow
function calculate() {
    var dd = document.getElementById('datedepart');
    var da = document.getElementById('ArrivalDate');
    var total = document.getElementById('total_cost');
    var hotel = document.getElementById('hotel5');
    this.form.controls['0 + 1 + 2 ...'].value

    if (!(dd.value * 1) || !(da.value * 1) || da.value > dd.value) {
        total.value = '0'; //you can set it to 'not allowed' also if you wish (instead of '0')
        return;
    }

    var days = Math.round((
        dd.value -
        da.value
    ) / 86400);
    var cost = days * prices[hotel.value];
    if (isNaN(cost))
        cost = 0;
    total.value = cost;
}


// Tabs function openLink(evt, linkName) {
var i, x, tablinks;
x = document.getElementsByClassName("myLink");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" teal", "");
}
document.getElementById(linkName).style.display = "block";
evt.currentTarget.className += " teal";

// autocomplete w3schhol snippet
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function() {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val
                .toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val
                        .length) +
                    "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] +
                    "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function() {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName(
                        "input")[
                        0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });


    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}
myFunction()
">Click me.</button>

function myFunction() {
    document.
    getElementById
        ("SAFARI").
    innerHTML
        = "THANK YOU";

}

function foo() {
    var result = []
    for (var i = 0; i < 3; i++) {
        result.push(function inner() {
            console.log(i)
        })
    }
    return result
}

const result = foo()
// The following will print `3`, three times...
for (var i = 0; i < 3; i++) {
    result[i]()
}
// I was inspared by this developers . i did most of my reserach but was not easy to understad how to do travel bookings and i came across this developer  https://res.perfectibe.com/scripts/pibe.js
// to guide me through my project

var now = new Date();
var -CheckIn = new Date();
var Checkout = new Date();
CheckIn.setDate(now.getDate() + 7);
Checkout.setDate(now.getDate() + 14);



function copyTextbox(obj1, obj2) {
    obj2.value = obj1.value;
}

function validateSearch() {
    alert_message = "";
    const newLocal = "frmArrSearch";
    formObj = document.forms[newLocal];

    if (formObj.safari.value == "" || formObj.any.value == formObj.safari.getAttribute("defValue")) {
        alert_message += " - safari packages 1\n";
    } else {
        formObj.accommodation.value = formObj.accommodation.value.split("-")[0];
    }
    if (formObj.txtActivities1.value == "" || formObj.Activities1.value == formObj.Activities1.getAttribute("defValue")) {
        alert_message += " - Specify a activity 1\n";
    } else {
        formObj.HireCar.value = formObj.txtHireCar1.value.split("-")[0];
    }
    if (dateDiff('d', formObj.txtDate1.value, dateAdd('d', 0, Today)) > 0) alert_message += " - Checkin date for  1 has to be atleast today or after\n";

    if (formObj.TripType[0].checked || formObj.TripType[2].checked) {
        if (formObj.txtLocation.value == "" || formObj.txtlocation2.value == formObj.txtLocation2.getAttribute("defValue")) {
            alert_message += " - Specify a lLocation 2\n";
        } else {
            formObj.txtsafariPackage2.value = formObj.txtSafariPackage2.value.split("-")[0];
        }
        if (formObj.txtaccommodation2.value == "" || formObj.Accommodation2.value == formObj.txtAcommodation2.getAttribute("defValue")) {
            alert_message += " - Specify a Destination City for Flight 2\n";
        } else {
            formObj.txtActivities2.value = formObj.txtActivities2.value.split("-")[0];
        }
        if (dateDiff('d', formObj.txtDate2.value, formObj.txtDate1.value) > 0) alert_message += " -  Date  has to be on or after the date of Flight 1\n";
    }

    if (alert_message != "") {
        alert("Please fix the following problems: \n" + alert_message);
        return false;
    }
    return true;
}
// I was inspared by this developers . i did most of my reserach but was not easy to understad how to do travel bookings and i came across this developer  https://res.perfectibe.com/scripts/pibe.js
// to guide me through my project
function qualityValue() {
    alert_message = "";
    formValuee = document.forms["input"];
    if ((formObj.txtInput.value == "" || formObj.any.value == formObj.any.getAttribute("defValue"))) alert_message += " - Specify booking\n";

    if (dateDiff('d', formObj.any.value, dateAdd('d', 0, Today)) > 0) alert_message += " -\n";

    if (dateDiff('d', formObj.any.value, formObj.txtany.value) > 0) alert_message += " -\n";
    if (dateDiff('d', formObj.txtany.value, formObj.txtany.value) > 0 || formObj.txtDate1.value == "mm/dd/yyyy" || formObj.txtDate2.value == "mm/dd/yyyy" || formObj.txtDates3.value == "mm/dd/yyyy") alert_message += " - Please Select Valid Date 1\n";
    if (alert_message != "") {
        alert("Please fix the following problems: \n" + alert_message);
        return false;
    }
    return true;
    // get qvalues

    function qualityValue() {
        varString: qualityValue {
            getAttribute(qualified: String)
            var String: StringConstructor();
            this(varString = inFinite
                function isFinite(number: number): boolean) {
                if `( let i ==> 0 )` {
                    InputDeviceInfo('book') {
                        qualityValue

                        function safari(params: book) {
                            else(i == > i + i + i()) {
                                globalThis.ActiveXObject: ValidityState

                                function value(params: safari) {
                                    bookSafari.apply

                                    function(bookings);

                                    function getComputedStyle(elt: Element, pseudoElt ? : string): CSSStyleDeclaration(addNewSafari);
                                    HTMLFormControlsCollection.apply(thisArg: any, argArray ? : any): any();
                                    var console: Console();

                                }
                            }
                        });

                });
        });

    console.log(any[Book]);