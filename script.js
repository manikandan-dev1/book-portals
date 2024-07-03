//slecting want element.
var plusebutton=document.getElementById("pluse-popup-button")
var overlay=document.getElementById("popup-box-overlay")
var popupbox=document.getElementById("popup-boxid")

plusebutton.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

//selecting cavel button.
var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})

//slecting container,add-book,book-title-input,book-author-input,book-discription-input.

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var titleinput=document.getElementById("book-title-input")
var authoinput=document.getElementById("book-author-input")
var contentinput=document.getElementById("content-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titleinput.value}</h2>
            <h5>${authoinput.value}</h5>
            <p>${contentinput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}