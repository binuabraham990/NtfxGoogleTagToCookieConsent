<?php

namespace NtfxGoogleTagToCookieConsent;

use Shopware\Components\Plugin;
use Symfony\Component\DependencyInjection\ContainerBuilder;

/**
 * Shopware-Plugin NtfxGoogleTagToCookieConsent.
 */
class NtfxGoogleTagToCookieConsent extends Plugin
{

    /**
    * @param ContainerBuilder $container
    */
    public function build(ContainerBuilder $container)
    {
        $container->setParameter('ntfx_google_tag_to_cookie_consent.plugin_dir', $this->getPath());
        parent::build($container);
    }

}
