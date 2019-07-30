// The User API object contains methods for each kind of request we'll make
var userAPI = {

  getUser: function () {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },

  saveUser: function (user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },

  removeUser: function (id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
}

// showUsers gets new devices from the db and repopulates the list
var showUsers = function () {
  userAPI.getUser().then(function (data) {
    var $users = data.map(function (user) {
      var $a = $("<a>")
        .text(user.name)
        .attr("href", "/user/" + user.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": user.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $("#user-list").empty();
    $("#user-list").append($users);
  });
};

// addUser is called whenever we submit a new device
var addUser = function (event) {
  event.preventDefault();

  var user = {
    name: $("#user-name").val().trim(),
    email: $("#user-email").val().trim(),
    password: $("#user-password").val().trim(),
    password2: $("#confirm-password").val().trim(),
  };

  userAPI.saveUser(user).then(function () {
    showUsers();
  });

  $("#user-name").val("");
  $("#user-email").val("");
  $("#user-password").val("");
  $("#confirm-password").val("");
};

// deleteUser is called when an example's delete button is clicked
var deleteUser = function () {

  var userID = $(this)
    .parent()
    .attr("data-id");

  userAPI.removeUser(userID).then(function () {
    showUsers();
  });
};

// Add event listeners to the submit and delete buttons

$("#show-users").on("click", showUsers);
$("#userSubmit").on("click", addUser);
$("#user-list").on("click", ".delete", deleteUser);