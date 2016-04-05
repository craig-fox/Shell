(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _example = require("./example");

console.log("Divide 37 with 4 and you have " + (0, _example.mod)(37, 4) + " left over");
console.log("There are " + _example.wonders + " ancient wonders");

var recipe = {
    name: 'Lemon Dream Cake',
    sugarContent: '200g'
};

var cake = new _example.Cake(recipe);

console.log("The delicious " + cake.getName() + " cake has " + cake.getSugarContent() + " of sugar");

var field1 = { name: "Field 1", snakes: "noslitheryreptileshere" },
    field2 = { name: "Field 2", snakes: "absolutelynotasinglesnakehereIpromise" };

function checkForSnakes(field) {
    console.log("Looking for snakes in " + field.name);
    var snakes = (0, _example.findSnakes)(field.snakes);
    var message = snakes.length > 0 ? "Found a snake!" : "No snakes here";
    console.log(message);
}

checkForSnakes(field1);
checkForSnakes(field2);

},{"./example":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mod = function mod(a, b) {
    return a % b;
};

var wonders = 7;

var Cake = function () {
    function Cake(recipe) {
        _classCallCheck(this, Cake);

        this.name = recipe.name;
        this.sugarContent = recipe.sugarContent;
    }

    _createClass(Cake, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getSugarContent",
        value: function getSugarContent() {
            return this.sugarContent;
        }
    }]);

    return Cake;
}();

function findSnakes(text) {
    var pattern = /snake/i;
    var snakes = pattern.exec(text) || [];
    return snakes;
}

exports.mod = mod;
exports.wonders = wonders;
exports.Cake = Cake;
exports.findSnakes = findSnakes;

},{}]},{},[1]);
