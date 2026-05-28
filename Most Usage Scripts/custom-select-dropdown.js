/*
Add this Attributes to your Html Structure

[data-select="wrapper"] - Add this to Wrapper containing dropdown and input field
[data-select="dropdown"] - Add this to dropdown
[data-select="toggle"] - Add this to dropdown toggle
[data-select="label"] - Add this to label you want replace when option is selected
[data-select="input"] - Add this to hidden input field
*/

// Custom Select Dropdown
$(document).ready(function () {

  $('[data-select="option"]').on('click', function (e) {
    e.preventDefault();

    const $wrap = $(this).closest('[data-select="wrapper"]');
    const value = $(this).text().trim();

    $wrap.find('[data-select="label"]').text(value);
    $wrap.find('[data-select="input"]').val(value);

    // active state
    $wrap.find('[data-select="option"]').removeClass('active');
    $(this).addClass('active');

    // close dropdown
    $wrap.find('[data-select="toggle"]').trigger('w-close');
  });

});
