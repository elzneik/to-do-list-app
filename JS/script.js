function newItem () { 

    // jQuery
    // 1. Adding a new item to the list of items

    let li = $("<li> </li>");
    let inputValue = $("#input").val();
    // let text = $(" ");
    li.append("inputValue");

    if (inputValue === " ") {
        alert("You must write something")
    } else {
        $("#list").append(li);
    }

    // 2. Crossing out an item from the list
    function crossOut() {
        li.addClass("strike");
    }

    $("input").on("dblclick", function crossOut) {
        li.toggleClass(strike);    // Question: I do not understand that line
    };

    // 3. adding the delete button (x)
    // let crossOutButton = $("crossOutButton");
    let crossOutButton = $("<crossOutButton> </crossOutButton>"); // Question: What is the difference between line 27 and 28
   crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    $("crossOutButton").on("click").delete("li");
}