"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_big_calendar_1 = require("react-big-calendar");
var moment_1 = require("moment");
var react_1 = require("react");
var dragAndDrop_1 = require("react-big-calendar/lib/addons/dragAndDrop");
require("react-big-calendar/lib/addons/dragAndDrop/styles.css");
require("react-big-calendar/lib/css/react-big-calendar.css");
var router_1 = require("next/router");
var fetcher = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return fetch.apply(void 0, args).then(function (res) { return res.json(); });
};
var localizer = react_big_calendar_1.momentLocalizer(moment_1["default"]);
var MyCalendar = function (props) {
    var router = router_1.useRouter();
    // const {data , error} = useSWR('api/consent', fetcher);
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // const res = await fetch('api/consent')
            // const url = await res.json();
            // router.push(url)
            console.log(data);
            console.log(status);
            return [2 /*return*/];
        });
    }); };
    var url = router.asPath;
    var token = url.match(/code=/);
    if (token) {
        fetch("api/setCredentials", {
            method: "POST",
            mode: "cors",
            credentials: 'same-origin',
            body: JSON.stringify({ credential: token.input })
        });
    }
    var _a = react_1.useState([
        {
            title: 'Learn cool stuff',
            start: new Date(),
            end: new Date()
        },
    ]), events = _a[0], setEvents = _a[1];
    var onEventResize = function (data) {
        var start = data.start, end = data.end;
        setEvents(function (currentEvents) {
            var firstEvent = {
                start: new Date(start),
                end: new Date(end)
            };
            return __spreadArrays(currentEvents, [firstEvent]);
        });
    };
    var onEventDrop = function (data) {
        console.log(data);
    };
    return (React.createElement("div", null,
        React.createElement(DnDCalendar, { localizer: localizer, events: events, style: { height: "60vh" }, className: "w-[60vw] h-[60vh]" }),
        React.createElement("button", { onClick: handleClick }, "Authorize")));
};
var DnDCalendar = dragAndDrop_1["default"](react_big_calendar_1.Calendar);
exports["default"] = MyCalendar;
