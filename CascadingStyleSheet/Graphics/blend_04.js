function blendModeChanged() {
  var blendMode = document.getElementById("blendModesList").options[
    document.getElementById("blendModesList").selectedIndex].value;
  document.getElementById("wrapper").style.backgroundBlendMode = blendMode + ', normal';
  document.getElementById("wrapper").style.webkitBackgroundBlendMode = blendMode + ', normal';
}

function backgroundColorChanged() {
  var backgroundColor = document.getElementById("backgroundColorPicker").value;
  document.getElementById("wrapper").style.backgroundColor = backgroundColor;
}

function backgroundImageChanged() {
  var selectedImage = document.getElementById("backgroundImageList").options[
    document.getElementById("backgroundImageList").selectedIndex];

  var backgroundImage = selectedImage.value;
  document.getElementById("wrapper").style.backgroundImage = "url(" + backgroundImage + ")";
}

function load() {
  if (navigator.userAgent.indexOf('Chrome') === -1) {
    $("#backgroundColorPicker").spectrum(
      {color: "#f00",
       showButtons: false,
       change: function(color) {
         document.getElementById("wrapper").style.backgroundColor = color.toHexString();
       }});
  }
  document.getElementById("blendModesList").addEventListener("change", blendModeChanged, false);
  document.getElementById("backgroundColorPicker").addEventListener("change", backgroundColorChanged, false);
  document.getElementById("backgroundImageList").addEventListener("change", backgroundImageChanged, false);
}
