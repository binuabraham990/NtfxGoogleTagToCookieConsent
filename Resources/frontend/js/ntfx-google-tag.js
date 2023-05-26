(function ($, window) {

    if (ntfxGoogleTagConfig.enabled == true && ntfxGoogleTagConfig.googleId != '') {
        $.subscribe('plugin/swCookieConsentManager/onBuildCookiePreferences', function (event, plugin, preferences) {
            ntfxTagManager.consentGranted();
        });
    }
})(jQuery, window);