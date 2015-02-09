define(function() {

    return {
     
        hasUtag: false,
        
        clickArgs: {
            clicknameBase: "clickbase",
            eventtype: "uotrack",
            linkTrackEvents: "none",
            linkTrackVars: "prop41"
        },
        
        pageViewArgs: {
            cst: 'news',
            hostname: 'www.usatoday.com',
            ssts: 'news',
            contenttype: 'social player'
        },
     
        setPageViewArgs: function(options) {
            $.extend(this.pageViewArgs, options);
            return this;
        },
     
        setClickArgs: function(options) {
            $.extend(this.clickArgs, options);
            return this;
        },
     
        click: function(eventName, options) {
            if (window.utag) {
                eventName = eventName.replace(/ /g, '-');
                if (options) {
                    options = $.extend(false, this.clickArgs, options);
                }
                else if (eventName) {
                    // replace event name spaces with '-'
                    eventName = eventName.replace(/ /g, '-');
                    options = $.extend(false, this.clickArgs, {
                        clickName: this.clickArgs.clicknameBase + eventName
                    });
                }
                else {
                    options = this.clickArgs;
                }
                window.utag.track('link', options);
            }
            else {
                this.loadUtag();
            }

        },
     
        // load utag script, loading with require causes errors, utag requires utag_data
        loadUtag: function() {
            window.utag_data = $.extend(false, this.pageViewArgs, {
                partner_type: 'basic'
            });
            var self = this,
                useSSL = 'https:' === document.location.protocol,
                src = (useSSL ? 'https:' : 'http:') + '//tealium.hs.llnwd.net/o43/utag/gci/usat/prod/utag.js',
                script = document.createElement('script');
            script.src = src;
            document.getElementsByTagName('head')[0].appendChild(script);

        },
     
        pageView: function(eventName, options) {
            if (window.utag) {
                if (options) {
                    options = $.extend(false, this.pageViewArgs, options);
                }
                else if (eventName)  {
                    // replace event name spaces with '-'
                    eventName = eventName.replace(/ /g, '-');
                    options = $.extend(false, this.pageViewArgs, {
                        ssts: this.pageViewArgs.ssts + '/' + eventName
                    });
                }
                else {
                    options = this.pageViewArgs;
                }
                // initial page load, needed to use utag
                if (!this.hasUtag) {
                    options = $.extend(false, options, {
                        partner_type: 'basic'
                    });
                    this.hasUtag = true;
                }
                window.utag.track('view', options);
            }
            else {
                this.loadUtag();
            }
        }
    };

});