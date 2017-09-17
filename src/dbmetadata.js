"use strict";
/**
* File: dbmetadata.ts
* Author: dmiller4991@gmail.com
*
* Description:
*       A class that holds all the Meta Data relevant to the MongoDB
*
*/
var DBMetaData = (function () {
    function DBMetaData(name, pass) {
        this.name = name;
        this.pass = pass;
        this.username = name;
        this.password = pass;
    }
    DBMetaData.prototype.setUsername = function (name) {
        this.username = name;
    };
    DBMetaData.prototype.setPassword = function (pass) {
        this.password = pass;
    };
    DBMetaData.prototype.getUsername = function () {
        return this.username;
    };
    DBMetaData.prototype.getPassword = function () {
        return this.password;
    };
    DBMetaData.prototype.getObj = function (id) {
        return {
            message: "Hello world!"
        };
    };
    DBMetaData.prototype.setUrl = function (url) {
        this.address = url;
    };
    DBMetaData.prototype.getUrl = function () {
        return this.address;
    };
    return DBMetaData;
}());
module.exports = DBMetaData;
