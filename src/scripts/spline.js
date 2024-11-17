function removeLogo() {
  var shadowRoot = document.querySelectorAll("spline-viewer");
  for (var i = 0; i < shadowRoot.length; i++) {
    var logo = shadowRoot[i].shadowRoot.querySelector("#logo");
    logo.remove();
    var canvas = shadowRoot[i].shadowRoot.querySelector("canvas");
    console.log(canvas);
  }
}

window.onload = function () {
  removeLogo();
};
