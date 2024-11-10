function removeLogo() {
  var shadowRoot = document.querySelectorAll("spline-viewer");
  for (var i = 0; i < shadowRoot.length; i++) {
    var logo = shadowRoot[i].shadowRoot.querySelector("#logo");
    logo.remove();
  }
}

window.onload = function () {
  removeLogo();
};
