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
