// The User API object contains methods for each kind of request we'll make
var $userName = $("#user-name");
var $userEmail = $("#user-email");
var $userSubmitBtn = $("#userSubmit");
var $userPassword = $("#user-password");
var $userPassword2 = $("#confirm-password");
var $userList = $("#user-list");
var $showUsers = $("#show-users");

var userAPI = {
  getUser: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },

  saveUser: function(user) {
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
};

// showUsers gets new devices from the db and repopulates the list
var showUsers = function() {
  userAPI.getUser().then(function(data) {
    var $users = data.map(function(user) {
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

    $userList.empty();
    $userList.append($users);
  });
};

// addUser is called whenever we submit a new device
var addUser = function(event) {
  event.preventDefault();

  var user = {
    name: $userName.val().trim(),
    email: $userEmail.val().trim(),
    password: $userPassword.val().trim(),
    password2: $userPassword2.val().trim()
  };

  if (!(user.name && user.email && user.password)) {
    alert("You must enter username, email and password!");
    return;
  }

  userAPI.saveUser(user).then(function() {
    showUsers();
  });

  $userName.val().trim("");
  $userEmail.val().trim("");
  $userPassword.val().trim("");
  $userPassword2.val().trim("");
};

// deleteUser is called when an example's delete button is clicked
var deleteUser = function() {
  var userID = $(this)
    .parent()
    .attr("data-id");

  userAPI.removeUser(userID).then(function() {
    showUsers();
  });
};

// Add event listeners to the submit and delete buttons


$showUsers.on("click", showUsers);
$userSubmitBtn.on("click", addUser);
$userList.on("click", ".delete", deleteUser);
