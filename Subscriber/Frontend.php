<?php

namespace NtfxGoogleTagToCookieConsent\Subscriber;

use Enlight\Event\SubscriberInterface;
use Shopware\Components\Plugin\ConfigReader;
use Shopware\Bundle\CookieBundle\CookieCollection;
use Shopware\Bundle\CookieBundle\Structs\CookieStruct;
use Shopware\Bundle\CookieBundle\Structs\CookieGroupStruct;

class Frontend implements SubscriberInterface {

    private $pluginDirectory;
    private $config;

    public static function getSubscribedEvents() {
        return array(
            'Enlight_Controller_Action_PostDispatchSecure_Frontend' => 'onFrontendPostDispatch',
            'CookieCollector_Collect_Cookies' => 'addGoogleTagCookie'
        );
    }

    public function __construct($pluginName, $pluginDirectory, ConfigReader $configReader) {

        $this->pluginDirectory = $pluginDirectory;
        $shop = Shopware()->Shop();
        $this->config = $configReader->getByPluginName($pluginName, $shop);
    }

    public function onFrontendPostDispatch(\Enlight_Event_EventArgs $args) {
        $controller = $args->getSubject();
        $view = $controller->View();
        
        $config['enabled'] = $this->config['enable_plugin'];
        $config['googleId'] = $this->config['google_tag_id'];
        $view->assign('ntfxGoogleTagConfig', $config);
        
        $view->addTemplateDir($this->pluginDirectory . '/Resources/views/');
    }

    public function addGoogleTagCookie(): CookieCollection {
        $collection = new CookieCollection();
        $collection->add(new CookieStruct(
                        'ntfxgoogletag',
                        '/^ntfxgoogletag$/',
                        'Google tag manager',
                        CookieGroupStruct::STATISTICS
        ));

        return $collection;
    }

}
