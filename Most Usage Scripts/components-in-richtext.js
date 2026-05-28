/*

1. Wrap the component inside a div and assign a unique ID to that wrapper.
2. Inside the Rich Text element, add:
<div data-component="ID"></div>
Replace "ID" with the same component ID wherever you want the component to appear.

*/
// to add component in rich text 
$(document).ready(function () {
  $("[data-component]").each(function () {
    const name = $(this).data("component");
    const component = $("#" + name).html();
    if (component) $(this).html(component);
  });
});
