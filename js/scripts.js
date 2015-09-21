$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress };

  $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#address").val("");

  $(".contact").last().click(function() {//.last only binds the event to the most recently added contact... otherwise it would show in all contacts the info you just added.
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
    $(".firstName").text(newContact.firstName);
    $(".lastName").text(newContact.lastName);
    $(".address").text(newContact.address);
  });
  });
});
