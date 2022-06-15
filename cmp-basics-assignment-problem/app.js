const nameInput = document.querySelector("#input-name");
const ratingInput = document.querySelector("#input-rating");
const addBtn = document.querySelector("#btn");
const coursesList = document.querySelector("#courses-list");

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

addBtn.addEventListener("click", () => {
  const enteredName = nameInput.value;
  const enteredRating = ratingInput.value;

  if (
    enteredName.trim().length <= 0 ||
    enteredRating <= 0 ||
    enteredRating <= 5 ||
    enteredRating.trim().length <= 0
  ) {
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredName + ": " + enteredRating;
  coursesList.appendChild(newItem);
  clear();
});
