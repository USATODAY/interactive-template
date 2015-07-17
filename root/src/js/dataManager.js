define([
    'jquery',
    'underscore',
    'config'
    ],
    function(jQuery, _, config) {
        return function(dataURL, parseFunction) {
            this.getDataURL = function() {
                var hostname = window.location.hostname;
                var dataURLSplit = dataURL.split('/');
                var filename = dataURLSplit[dataURLSplit.length - 1];
                if ((hostname == "localhost" || hostname == "10.0.2.2")) {
                    dataURL = 'data/' + filename;
                } else if (hostname == "www.gannett-cdn.com") {
                    dataURL = dataURL;
                } else {
                    dataURL = "http://" + hostname + "/services/webproxy/?url=" + dataURL;
                }
                return dataURL;
            };
            this.getData = function(callback) {
                var _this = this;
                var proxyDataURL = this.getDataURL();
                jQuery.getJSON(proxyDataURL, function(data) {
                    var parsedData = _this.parseData(data);
                    return callback(parsedData);
                });
            };
            this.parseData = parseFunction || function(data) { return data; };

            
        };
});
