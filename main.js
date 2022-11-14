
let myDiv = $("<div>Click Here</div>");
let parentElem = $("#form");
let ul = $("<ul></ul>");

parentElem.append(myDiv);
parentElem.append(ul);

let input = $("#inputElem")

myDiv.on("click", function()
{
    let newItem = $(`<li>${input.val()}</li>`)
    ul.append(newItem);

    input.val("");
})

//instead of .style
// page.css(
//     {
//         backgroundColor: "lightblue";
//         color: white:
//     }
// )

