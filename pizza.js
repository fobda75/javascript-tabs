$(document).ready(function () {
    // event handlers always go here
    $("#tabs a").on("click", showTab);
    $("#animateButton").on("click", animateSandwich);
});

// This function is required by Bootstrap to show/hide the selected tab
function showTab(event) {
    event.preventDefault();
    $(this).tab("show");
}
