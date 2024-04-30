'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');

var SQLitePorter = /** @class */ (function (_super) {
    tslib.__extends(SQLitePorter, _super);
    function SQLitePorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLitePorter.prototype.importSqlToDb = function (db, sql) { return core.cordova(this, "importSqlToDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.prototype.exportDbToSql = function (db) { return core.cordova(this, "exportDbToSql", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.prototype.importJsonToDb = function (db, json) { return core.cordova(this, "importJsonToDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.prototype.exportDbToJson = function (db) { return core.cordova(this, "exportDbToJson", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.prototype.wipeDb = function (db) { return core.cordova(this, "wipeDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorter.pluginName = "SQLitePorter";
    SQLitePorter.plugin = "uk.co.workingedge.cordova.plugin.sqliteporter";
    SQLitePorter.pluginRef = "cordova.plugins.sqlitePorter";
    SQLitePorter.repo = "https://github.com/dpa99c/cordova-sqlite-porter";
    SQLitePorter.platforms = ["Amazon Fire OS", "Android", "BlackBerry 10", "Browser", "iOS", "Tizen", "Windows", "Windows Phone"];
    SQLitePorter.decorators = [
        { type: core$1.Injectable }
    ];
    return SQLitePorter;
}(core.IonicNativePlugin));

exports.SQLitePorter = SQLitePorter;
