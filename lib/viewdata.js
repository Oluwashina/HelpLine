
// Where Ip connection is kept

function ViewData() {}

ViewData.prototype.ControllerRouteURL = "https://helplineendsarz.herokuapp.com/";
// ViewData.prototype.ControllerRouteURL = "http://192.168.88.112:4000/";

ViewData.prototype.storeUserDetails = function(key, value) { $.cookie(key, value) };
ViewData.prototype.getStoredUserDetail = function(key) { return $.cookie(key) };
ViewData.prototype.deleteStoredUserDetail = function(key) { $.removeCookie(key) };
ViewData.prototype.clearUserDetails = function() {
    var cookies = $.cookie();
    for (var cookie in cookies) {
        $.removeCookie(cookie);
    }
};