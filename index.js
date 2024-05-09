/*below i declare the variables list ,savedContent and contentArray
list gets all the elements with the class contentPart
savedContent gets all the elements with the saved class
contentArray is a blank array */
let list = document.querySelectorAll(".contentPart");
let savedContent = document.querySelectorAll(".saved");
let contentArray = [];

/*the function below gets the innerHTML of the saved class elements stores them
under the blank array contentArray and it is stored in localStorage  */
function store() {
  savedContent = document.querySelectorAll(".saved");
  contentArray = [];
  savedContent.forEach((element) => {
    let content = element.innerHTML;
    contentArray.push(content);
  });
  localStorage.clear();
  localStorage.setItem("saved", JSON.stringify(contentArray));
}

/*below the saveAndLikeBtns creates a like button and save button and 
appends them to the contentPart elements*/
function saveAndLikeBtns() {
  list.forEach((element) => {
    let button = document.createElement("button");
    let formLikeButton = document.createElement("form");
    let likeButton = document.createElement("button");
    likeButton.classList = "not-liked";
    likeButton.innerHTML = "&#x2661;";
    likeButton.type = "button";

    likeButton.addEventListener("click", function () {
     this.classList.toggle("liked");
    });

    button.textContent = "Save For Later";
    button.classList = "save-for-later-button";
    button.addEventListener("click", function () {
      element.classList.toggle("saved");
      store();
      alert(`You have saved ${contentArray.length} items for later`);
    });

    formLikeButton.appendChild(likeButton);
    element.appendChild(formLikeButton);
    element.appendChild(button);
  });
}

/*below is the contentArray called from LocalStorage and the content is added 
to the mainpage id element*/
function printSaved() {
  contentArray = JSON.parse(localStorage.getItem("saved"));

  contentArray.forEach(function (element) {
    let mainPage = document.getElementById("main-page");
    let divElement = document.createElement("div");
    divElement.innerHTML = element;
    mainPage.appendChild(divElement);
  });
 
};

/*references 
help with changing the style of all style buttons
 https://www.w3schools.com/css/css_form.asp

 the links i used to help with jquery animate and jquery
 https://www.w3schools.com/jquery/eff_animate.asp
 https://www.w3schools.com/jquery/jquery_slide.asp
 https://api.jquery.com/animate/

 https://www.w3schools.com/jsref/prop_pushbutton_type.asp

 the videos i watched on jquery
 https://www.youtube.com/watch?v=9w9FB6J6euA
 https://www.youtube.com/watch?v=kVc_XfZY0vI
 https://www.youtube.com/watch?v=fW7rwCpD0FY

 */