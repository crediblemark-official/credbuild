import {
  __commonJS,
  __spreadValues,
  __toESM,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports, module) {
    "use strict";
    init_react_import();
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// lib/get-class-name-factory.ts
init_react_import();
var import_classnames = __toESM(require_classnames());
var getClassNameFactory = (rootClass, styles, config = { baseClass: "" }) => (options = {}) => {
  if (typeof options === "string") {
    const descendant = options;
    const style = styles[`${rootClass}-${descendant}`];
    if (style) {
      return config.baseClass + styles[`${rootClass}-${descendant}`] || "";
    }
    return "";
  } else if (typeof options === "object") {
    const modifiers = options;
    const prefixedModifiers = {};
    for (let modifier in modifiers) {
      prefixedModifiers[styles[`${rootClass}--${modifier}`]] = modifiers[modifier];
    }
    const c = styles[rootClass];
    return config.baseClass + (0, import_classnames.default)(__spreadValues({
      [c]: !!c
    }, prefixedModifiers));
  } else {
    return config.baseClass + styles[rootClass] || "";
  }
};
var get_class_name_factory_default = getClassNameFactory;

export {
  get_class_name_factory_default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
