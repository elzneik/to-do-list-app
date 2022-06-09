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
        li.toggleClass("strike");
    }

    $("input").on("dblclick", function crossOut) {
        li.toggleClass(strike);    // Question: I do not understand that line
    };

    // 3.1 adding the delete button (x)
    // let crossOutButton = $("crossOutButton");
    let crossOutButton = $("<crossOutButton> </crossOutButton>"); // Question: What is the difference between line 27 and 28
   crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    // $("crossOutButton").on("click").delete("li");
    crossOutButton.on("click", deleteListItem);  // Question: What is the difference to line 32 

    // 3.2 Adding class delete (display none) from the css
    function deleteListItem () {
        li.classList("delete");
    }

    // 4. Reordering the items
    $("list").sortable();
}