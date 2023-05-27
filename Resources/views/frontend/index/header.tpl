{extends file="parent:frontend/index/header.tpl"}

{block name="frontend_index_header_javascript_tracking"}
    {$smarty.block.parent}

    <script>var ntfxGoogleTagConfig = window.ntfxGoogleTagConfig = {$ntfxGoogleTagConfig|json_encode};</script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){literal} {{/literal}
            dataLayer.push(arguments);{literal}
        }{/literal}
    </script>
    <script>
        var ntfxTagManager = {
            consentGranted: function () {
                const gtmScript = document.createElement('script');
                gtmScript.setAttribute("data-name", "ntfx-google-tag");
                gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id={$ntfxGoogleTagConfig.googleId}';
                document.head.append(gtmScript);
                window.gtagConfig = {
                    'anonymize_ip': 'false',
                    'cookie_domain': 'none',
                    'cookie_prefix': '_ntfx_ga_track'
                };
                gtag('js', new Date());
                gtag('config', '{$ntfxGoogleTagConfig.googleId}', window.gtagConfig);
            },
            revokeConsent: function () {
                const gtmScript = document.querySelector('script[data-name="ntfx-google-tag"]');
                if (gtmScript) {
                    gtmScript.remove();
                }
            }
        }
    </script>
{/block}