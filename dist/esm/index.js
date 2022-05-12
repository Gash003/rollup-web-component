/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var template = document.createElement('template');
template.innerHTML = "\n  <div>\n    Hello Weather App\n  </div>\n";
var WeatherCard = /** @class */ (function (_super) {
    __extends(WeatherCard, _super);
    function WeatherCard() {
        var _this = _super.call(this) || this;
        _this._shadowRoot = _this.attachShadow({ 'mode': 'open' });
        _this._shadowRoot.appendChild(template.content.cloneNode(true));
        return _this;
    }
    WeatherCard.prototype.connectedCallback = function () {
        var xmlHttp = new XMLHttpRequest();
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=".concat(this.latitude, "&lon=").concat(this.longitude, "&appid=b86d21440d8c9a110912a2eb0845abb4");
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        console.log(xmlHttp.responseText);
        this.$card = this._shadowRoot.querySelector('div');
        var responseObj = JSON.parse(xmlHttp.responseText);
        var $townName = document.createElement('p');
        $townName.innerHTML = "Town: ".concat(responseObj.name);
        this._shadowRoot.appendChild($townName);
        var $temperature = document.createElement('p');
        $temperature.innerHTML = "".concat(responseObj.main.temp - 273, " &deg;C");
        this._shadowRoot.appendChild($temperature);
    };
    Object.defineProperty(WeatherCard.prototype, "longitude", {
        get: function () {
            return this.getAttribute('longitude');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherCard.prototype, "latitude", {
        get: function () {
            return this.getAttribute('latitude');
        },
        enumerable: false,
        configurable: true
    });
    return WeatherCard;
}(HTMLElement));
window.customElements.define('weather-card', WeatherCard);

export { WeatherCard };
//# sourceMappingURL=index.js.map
