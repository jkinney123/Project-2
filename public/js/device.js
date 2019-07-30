// The Device API object contains methods for each kind of request we'll make
var deviceAPI = {

  getDevice: function () {
    return $.ajax({
      url: "api/devices",
      type: "GET"
    });
  },

  saveDevice: function (device) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/devices",
      data: JSON.stringify(device)
    });
  },

  removeDevice: function (id) {
    return $.ajax({
      url: "api/devices/" + id,
      type: "DELETE"
    });
  }
};

// showDevices gets new devices from the db and populates the list
var showDevices = function () {
  deviceAPI.getDevice().then(function (data) {
    var $devices = data.map(function (device) {
      var $a = $("<a>")
        .text(device.device)
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

    $("#device-list").empty();
    $("#device-list").append($devices);
  });
};

// addDevice is called whenever we submit a new device
var addDevice = function (event) {
  event.preventDefault();

  var device = {
    device: $("#device-text").val().trim(),
    status: $("#device-description").val().trim()
  };

  if (!(device.device && device.status)) {
    alert("You must enter an example text and description!");
    return;
  }

  deviceAPI.saveDevice(device).then(function () {
    showDevices();
  });

  $("#device-text").val("");
  $("#device-description").val("");
};

// deleteDevice is called when an example's delete button is clicked
var deleteDevice = function () {
  
  var deviceID = $(this)
    .parent()
    .attr("data-id");

  deviceAPI.removeDevice(deviceID).then(function () {
    showDevices();
  });
};

// Add event listeners to the submit and delete buttons
$("#show-devices").on("click", showDevices);
$("#deviceSubmit").on("click", addDevice);
$("#device-list").on("click", ".delete", deleteDevice);
