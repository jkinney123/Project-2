// Get references to page elements
var $deviceName = $("#device-name");
var $deviceDescription = $("#device-description");
var $submitBtn = $("#deviceSubmit");
var $deviceList = $("#device-list");
var $deviceStatus = $("#device-status");
var $deviceShow = $("#show-devices");
var $toggleSwitch = $("device-control");

// The API object contains methods for each kind of request we'll make
var API = {
  saveDevice: function(device) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/devices",
      data: JSON.stringify(device)
    });
  },

  updateDevice: function(device, id) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "api/devices" + id,
      data: JSON.stringify(device)
    });
  },
  getDevices: function() {
    return $.ajax({
      url: "api/devices",
      type: "GET"
    });
  },
  deleteDevice: function(id) {
    return $.ajax({
      url: "api/devices/" + id,
      type: "DELETE"
    });
  }
};

// refreshDevices gets new devices from the db and repopulates the list
var refreshDevices = function() {
  API.getDevices().then(function(data) {
    var $devices = data.map(function(device) {
      var $a = $("<a>")
        .text(device.name)
        .attr("href", "/device/" + device.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": device.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $deviceList.empty();
    $deviceList.append($devices);
  });
};

// handleFormSubmit is called whenever we submit a new device
// Save the new device to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var device = {
    name: $deviceName.val().trim(),
    description: $deviceDescription.val().trim()
  };

  if (!(device.name && device.description)) {
    alert("You must enter a device name and description!");
    return;
  }

  API.saveDevice(device).then(function() {
    refreshDevices();
  });

  $deviceName.val("");
  $deviceDescription.val("");
  $deviceStatus === false;
};

// handleDeleteBtnClick is called when an device's delete button is clicked
// Remove the device from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteDevice(idToDelete).then(function() {
    refreshDevices();
  });
};

var deviceControl = function() {
  console.log(
    "This is toggle:  " + document.getElementById("device-control").checked
  );
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$deviceList.on("click", ".delete", handleDeleteBtnClick);
$toggleSwitch.on("click", deviceControl);

refreshDevices();

// $("#toggle-demo").bootstrapToggle("toggle");

// var test = function() {
//   console.log(
//     "This is toggle:  " + document.getElementById("toggle-demo").checked
//   )
// }

// $("#toggle-group").on('click', test);

var string = "Home Security Systems";
var str = string.split("");
var el = document.getElementById("str");
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 90);
})();
