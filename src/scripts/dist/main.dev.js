"use strict";

// Бургер меню
var burgerButton = document.querySelectorAll(".main-menu__burger-button");
var burgerMenu = document.querySelector(".burger-menu");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = burgerButton[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;
    i.addEventListener("click", function () {
      burgerMenu.classList.toggle("burger-menu__is-active");
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = burgerButton[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var b = _step4.value;
          b.classList.toggle("main-menu__burger-button-cross");
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    });
  } // Табы

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var tabsButton = document.querySelectorAll(".about-doctor__tab-button");
var tabsContainer = document.querySelectorAll(".about-doctor__tab-container");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop = function _loop() {
    var i = _step2.value;
    i.addEventListener("click", function () {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = tabsButton[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var b = _step5.value;
          b.classList.remove("tab-button-active");
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      i.classList.add("tab-button-active");
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = tabsContainer[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var c = _step6.value;
          c.classList.remove("tab-container-active");
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      document.querySelector("#" + i.value).classList.add("tab-container-active");
    });
  };

  for (var _iterator2 = tabsButton[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop();
  } // Форма
  // настройка select

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var allSelect = document.querySelectorAll(".form-bot__form-select");
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  var _loop2 = function _loop2() {
    var i = _step3.value;
    i.addEventListener("change", function () {
      if (i.value != "none") {
        i.classList.add("select-on");
        i.nextSibling.classList.remove("input-lable-none");
      }
    });
  };

  for (var _iterator3 = allSelect[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    _loop2();
  } // Маска для телефона
  // import IMask from "imask.min.js";

} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

document.querySelectorAll(".phone-mask").forEach(function (item) {
  var telMask = IMask(item, {
    mask: "+{7}(000)000-00-00"
  });
  /*Добавление и удаление класса при снятии фокуса с data-type="tel"*/

  telMask.on("accept", function () {
    item.setCustomValidity("Укажите полностью номер телефона.");
  });
  telMask.on("complete", function () {
    item.setCustomValidity("");
  });
}); // Слайдер https://www.npmjs.com/package/tiny-slider

if (document.querySelector(".injury__slider")) {
  var injury = tns({
    container: ".injury__slider",
    items: 2,
    autoWidth: true,
    gutter: 20,
    mouseDrag: true,
    loop: false,
    speed: 300,
    controls: false,
    nav: false
  });
}

if (document.querySelector(".how-working__slider")) {
  var howWorking = tns({
    container: ".how-working__slider",
    disable: true,
    items: 1,
    autoWidth: true,
    gutter: 250,
    mouseDrag: true,
    loop: false,
    speed: 400,
    controls: false,
    navPosition: "bottom",
    responsive: {
      768: {
        disable: false
      }
    }
  });
}

if (document.querySelector(".reviews__slider")) {
  var reviews = tns({
    container: ".reviews__slider",
    disable: true,
    items: 1,
    autoWidth: true,
    gutter: 20,
    mouseDrag: true,
    loop: false,
    speed: 350,
    controls: false,
    navPosition: "bottom",
    responsive: {
      768: {
        disable: false
      }
    }
  });
}

if (document.querySelector(".disease-page__slider")) {
  var diseasePage = tns({
    container: ".disease-page__slider",
    items: 1,
    gutter: 20,
    mouseDrag: true,
    // loop: false,
    speed: 350,
    controlsText: ["", ""],
    navPosition: "bottom"
  });
}