const userInputName = document.getElementById("userInputname");
const userInputAge = document.getElementById("userInputage");
const saveButton = document.getElementById("saveButton");
const resultHeading = document.getElementById("resultHeading");
const nameResult = document.getElementById("nameResult");
const ageResult = document.getElementById("ageResult");

saveButton.addEventListener("click", () => {
    const name = userInputName.value.trim();
    const age = userInputAge.value.trim();

    if (name && age) {
        resultHeading.style.display = "block";
        nameResult.style.display = "block";
        ageResult.style.display = "block";

        nameResult.textContent = `Name: ${name}`;
        ageResult.textContent = `Age: ${age}`;
    }
});