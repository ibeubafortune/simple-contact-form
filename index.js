const queryTypeLabel = document.querySelectorAll(".query-type-label");
const generalEnquiryInputEl = document.querySelector("#general-enquiry");
const supportRequestInputEl = document.querySelector("#support-request");
const generalEnquiryLabel = document.querySelector(".general-enquiry");
const supportRequestLabel = document.querySelector(".support-request");
const divvy = document.querySelectorAll(".query-type-div");
const queryTypeEl = document.querySelector(".query-type");
const queryTypeInputEl = document.querySelectorAll(".query-type-input");
const firstNameInputEl = document.getElementById("first-name");
const notValidMessage = document.querySelector(".validation-message");
const submitBtn = document.querySelector(".submit-btn");
const contactForm = document.querySelector(".contact-form");

queryTypeInputEl.forEach((input) =>
  input.addEventListener("click", function () {
    input.classList.toggle("active");
  })
);
// const supportRequestInputEl = document.querySelector("#support-request");

// divvy.forEach((div)=>{
//   div.addEventListener("click", ()=>{
//     div.firstChild.checked === true
//   })
// })

// queryTypeInputEl.forEach((input, i, arr) =>
//   input.addEventListener("click", (e) => {
// e.target.srcElement.parentElement.classList.toggl("active");
// input.value === "off"
//   ? divvy[i].classList.remove("active")
//   : divvy[i].classList.add("active");

//     console.log(input);

//   })
// );

function changeStyle(label){
    // label.style.outline = 0
    label.style.border = "1.5px solid hsl(169, 82%, 27%)";
    label.style.background = "hsl(148, 38%, 91%)";
}

function sameStyle(label){
  label.style.border = "1px solid grey";
  label.style.background = "white"
}

generalEnquiryInputEl.addEventListener("click", () => {
  changeStyle(generalEnquiryLabel)
  sameStyle(supportRequestLabel)
});
supportRequestInputEl.addEventListener("click", () => {
  changeStyle(supportRequestLabel)
  sameStyle(generalEnquiryLabel)
});



// firstNameInputEl.setCustomValidity("This field is required")

// contactForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//        let input= this.querySelector("input")
//     if(!input.value){
//         input.setCustomValidity("This field is required")
//     } else {
//         this.submit()
//     }

//   if (!firstNameInputEl.checkValidity()) {
//     notValidMessage.classList.remove("hidden")
//     notValidMessage.textContent = firstNameInputEl.validationMessage;
//   }
// });
