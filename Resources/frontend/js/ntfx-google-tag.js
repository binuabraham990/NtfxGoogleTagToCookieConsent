(function ($, window) {

    if (ntfxGoogleTagConfig.enabled == true && ntfxGoogleTagConfig.googleId != '') {

        if (document.cookie.indexOf('"name":"ntfxgoogletag","active":true') !== -1) {
            ntfxTagManager.consentGranted();
        } else {
            ntfxTagManager.revokeConsent();
        }

        $.subscribe('plugin/swCookieConsentManager/onBuildCookiePreferences', function (event, plugin, preferences) {
            if (typeof preferences.groups.statistics.cookies === 'undefined') {
                ntfxTagManager.revokeConsent();
            } else if (typeof preferences.groups.statistics.cookies.ntfxgoogletag === 'undefined') {
                ntfxTagManager.revokeConsent();
            } else if (preferences.groups.statistics.cookies.ntfxgoogletag.active) {
                ntfxTagManager.consentGranted();
            }

        });
    }
})(jQuery, window);
