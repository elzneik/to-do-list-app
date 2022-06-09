function newItem () { // set function

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
}