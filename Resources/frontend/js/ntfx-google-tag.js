(function ($, window) {

    if (ntfxGoogleTagConfig.enabled == true && ntfxGoogleTagConfig.googleId != '') {

//        let givenCookiePreferences = JSON.parse($.getCookie('cookiePreferences'));
//        let ntfxTagCookie = givenCookiePreferences.groups.statistics.cookies;
//        if (typeof ntfxTagCookie !== undefined && typeof ntfxTagCookie.ntfxgoogletag !== undefined && ntfxTagCookie.active) {
//            ntfxTagManager.consentGranted();
//        } else {
//            ntfxTagManager.revokeConsent();
//        }
//
//
//
//        $.subscribe('plugin/swCookieConsentManager/onBuildCookiePreferences', function (event, plugin, preferences) {
//            console.log(preferences);
//            if (typeof preferences.groups.statistics.cookies == undefined) {
//                ntfxTagManager.revokeConsent();
//            } else if (typeof preferences.groups.statistics.cookies.ntfxgoogletag === 'undefined') {
//                ntfxTagManager.revokeConsent();
//            } else if (preferences.groups.statistics.cookies.ntfxgoogletag.active) {
//                ntfxTagManager.consentGranted();
//            }
//
//        });

        let givenCookiePreference = $.getCookie('cookiePreferences');
        if (givenCookiePreference.indexOf('"name":"ntfxgoogletag","active":true') !== -1) {
            ntfxTagManager.consentGranted();
        } else {
            ntfxTagManager.revokeConsent();
        }

        $.subscribe('plugin/swCookieConsentManager/onBuildCookiePreferences', function (event, plugin, preferences) {
            let givenCookiePreference = $.getCookie('cookiePreferences');
            if (givenCookiePreference.indexOf('"name":"ntfxgoogletag","active":true') !== -1) {
                ntfxTagManager.consentGranted();
            } else {
                ntfxTagManager.revokeConsent();
            }
        });
    }
})(jQuery, window);