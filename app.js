/* Click li button => button turns grey*/
let prevButton = null;
const rateBtns = document.querySelectorAll(".card ul li");
const ratedNum = document.querySelector(".selected-num");

for (let i = 0; i < rateBtns.length; i++) {
  rateBtns[i].addEventListener("click", (e) => {
    const rateBtn = rateBtns[i];
    rateBtn.classList.toggle("active");
    /* Only one button is selected */
    if (prevButton !== null) {
      prevButton.classList.remove("active");
    }
    prevButton = e.target;
    /* Update rate num */
    ratedNum.textContent = rateBtn.textContent;
    /* Only submit when a button is clicked!!!! */

    if (rateBtn.classList.contains("active")) {
      /* Click submit button => show Rating and Thank you state */
      const submitBtn = document.querySelector(".btn-submit");
      const submitMessage = document.querySelector(".submit-message-active");
      const form = document.querySelector("form");

      submitBtn.addEventListener("click", function () {
        submitMessage.classList.remove("d-none");
        form.classList.add("d-none");
      });
    }
  });
}
