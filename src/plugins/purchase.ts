import {Plugin, Cordova, CordovaProperty} from './plugin';

declare var window;

/**
 * @name Purchase plugin
 *
 * @description
 * This plugin allows In-App Purchases to be made from Cordova and PhoneGap applications, on Android, iOS and Windows (Store/Phone)
 *
 * It lets you handle all platforms with a single codebase.
 * https://github.com/j3k0/cordova-plugin-purchase/wiki/HOWTO#setup-android-applications
 *
 */
@Plugin({
  plugin: 'cc.fovea.cordova.purchase',
  pluginRef: 'window.store',
  repo: 'https://github.com/j3k0/cordova-plugin-purchase',
  install: 'ionic plugin add cc.fovea.cordova.purchase --variable BILLING_KEY=ANDROID_KEY',
  platforms:['iOS', 'Android', 'Windows Phone 8']
})
export class Purchase {

  /**
   * Get store which is the main object of the plugin
   * @return store - for more reference read - https://github.com/j3k0/cordova-plugin-purchase/tree/master/doc
   */
  @CordovaProperty
  static get store() {
    return window.store;
  }
}
