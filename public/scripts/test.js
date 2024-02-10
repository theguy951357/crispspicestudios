import Waypoint from "./waypoints/lib/noframework.waypoints"

var paragraph1 = new Waypoint({
    element: document.getElementById("about"),
    handler: function() {
      notify('I did the college thing!')
      w3.showElement(document.getElementById("unique-id"))
      w3.addClass(document.getElementById("unique-id"), "w3-animate-zoom-slow")
      this.disable()
    },
    offset: '50%'
  })