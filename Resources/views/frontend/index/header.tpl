{extends file="parent:frontend/index/header.tpl"}

{block name="frontend_index_header_javascript_tracking"}
    {$smarty.block.parent}

    <script>var ntfxGoogleTagConfig = window.ntfxGoogleTagConfig = {$ntfxGoogleTagConfig|json_encode};</script>
    <script>
        // Define dataLayer and the gtag function.
        window.dataLayer = window.dataLayer || [];
        function gtag(){literal}{{/literal}dataLayer.push(arguments);{literal}}{/literal}

        // Default ad_storage to 'denied'.
        gtag('consent', 'default', {
            'ad_storage': 'denied'
        });
    </script>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){literal}{{/literal}w[l]=w[l]||[];w[l].push({literal}{{/literal}'gtm.start':
    new Date().getTime(),event:'gtm.js'{literal}}{/literal});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    {literal}}{/literal})(window,document,'script','dataLayer','{$ntfxGoogleTagConfig.googleId}');</script>
    <!-- End Google Tag Manager -->
    
    <!-- Update this section based on your business requirements -->
    <script>
        var ntfxTagManager = {
            consentGranted: function () {
                gtag('consent', 'update', {
                    'ad_storage': 'granted'
                });
            }
        }
    </script>
{/block}