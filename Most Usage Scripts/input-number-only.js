/*

Add these attributes to your HTML structure:
maxlength="10" - Add this to the input field to limit the number length to 10 digits.

*/

// Prevent alphabets in all phone inputs
document.querySelectorAll('input[type="tel"]').forEach(input => {
  input.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });
});
