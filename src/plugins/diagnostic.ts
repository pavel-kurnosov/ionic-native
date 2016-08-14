import {Cordova, Plugin, CordovaProperty} from './plugin';
declare var cordova: any;

/**
 * Both Android and iOS define constants for requesting and reporting the various permission states.
 *
 * Android
 * The following permission states are defined for Android:
 *
 * NOT_REQUESTED - App has not yet requested access to this permission. App can request permission and user will be prompted to allow/deny.
 * GRANTED - User granted access to this permission, the device is running Android 5.x or below, or the app is built with API 22 or below.
 * DENIED - User denied access to this permission (without checking "Never Ask Again" box). App can request permission again and user will be prompted again to allow/deny again.
 * DENIED_ALWAYS - User denied access to this permission and checked "Never Ask Again" box. App can never ask for permission again. The only way around this is to instruct the user to manually change the permission on the app permissions settings page.
 *
 * iOS
 * The following permission states are defined for iOS:
 *
 * NOT_REQUESTED - App has not yet requested access to this permission. App can request permission and user will be prompted to allow/deny.
 * DENIED - User denied access to this permission. App can never ask for permission again. The only way around this is to instruct the user to manually change the permission in the Settings app.
 * RESTRICTED - Permission is unavailable and user cannot enable it. For example, when parental controls are in effect for the current user.
 * GRANTED - User granted access to this permission. For location permission, this indicates the user has granted access to the permission "always" (when app is both in foreground and background).
 * GRANTED_WHEN_IN_USE - Used only for location permission. Indicates the user has granted access to the permission "when in use" (only when the app is in the foreground).
 *
 */
export const PermissionStatus = {
  NOT_REQUESTED: "not_determined",
  DENIED: "denied",
  RESTRICTED: "restricted",
  GRANTED: "authorized",
  GRANTED_WHEN_IN_USE: "authorized_when_in_use"
};

/**
 * Defines constants for the various Bluetooth hardware states
 *
 * Android
 * UNKNOWN - Bluetooth hardware state is unknown or unavailable
 * POWERED_OFF - Bluetooth hardware is switched off
 * POWERED_ON - Bluetooth hardware is switched on and available for use
 * POWERING_OFF- Bluetooth hardware is currently switching off
 * POWERING_ON- Bluetooth hardware is currently switching on

 * iOS
 * UNKNOWN - Bluetooth hardware state is unknown
 * RESETTING - Bluetooth hardware state is currently resetting
 * POWERED_OFF - Bluetooth hardware is switched off
 * POWERED_ON - Bluetooth hardware is switched on and available for use
 * UNAUTHORIZED- Bluetooth hardware use is not authorized for the current application
 *
 */

export const BluetoothState = {
  UNKNOWN: "unknown",
  RESETTING: "resetting",
  UNSUPPORTED: "unsupported",
  UNAUTHORIZED: "unauthorized",
  POWERED_OFF: "powered_off",
  POWERED_ON: "powered_on"
};

/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from 'ionic-native';
 * ```
 */
@Plugin({
  plugin: 'cordova.plugins.diagnostic',
  pluginRef: 'cordova.plugins.diagnostic',
  repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin',
  platforms: ['iOS', 'Android', 'Windows 10']
})
export class Diagnostic {
  /**
   * Checks if app is able to access device location.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows 10']
  })
  static isLocationAvailable(): Promise<boolean> { return; }

  /**
   * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
   * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows 10']
  })
  static isWifiAvailable(): Promise<boolean> { return; }

  /**
   * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
   * application is authorized to use it.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows 10']
  })
  static isCameraAvailable(): Promise<boolean> { return; }

  /**
   * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
   * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows 10']
  })
  static isBluetoothAvailable(): Promise<boolean> { return; }

  /**
   * Displays the device location settings to allow user to enable location services/change location mode
   * Note: On Android, you may want to consider using the Request Location Accuracy Plugin for Android to request the desired location accuracy without needing the user to manually do this on the Location Settings page.
   */
  @Cordova({
    platforms: ['Android', 'Windows 10'],
    sync: true
  })
  static switchToLocationSettings(): void { }

  /**
   * Displays mobile settings to allow user to enable mobile data.
   *
   */
  @Cordova({
    platforms: ['Android', 'Windows 10'],
    sync: true
  })
  static switchToMobileDataSettings(): void { }

  /**
   * Displays Bluetooth settings to allow user to enable Bluetooth.
   *
   */
  @Cordova({
    platforms: ['Android', 'Windows 10'],
    sync: true
  })
  static switchToBluetoothSettings(): void { }

  /**
   * Displays WiFi settings to allow user to enable WiFi.
   *
   */
  @Cordova({
    platforms: ['Android', 'Windows 10'],
    sync: true
  })
  static switchToWifiSettings(): void { }

  /**
   * Returns true if the WiFi setting is set to enabled, and is the same as (isWifiAvailable())[#iswifiavailable]
   * On Android this requires permission <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
   */
  @Cordova({
    platforms: ['Android', 'Windows 10']
  })
  static isWifiEnabled(): Promise<boolean> { return; }

  /**
   * Enables/disables WiFi on the device.
   *
   * Requires the following permissions for Android:
   *  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
   *  <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
   *
   * Requires the following capabilities for Windows 10 Mobile:
   *  <DeviceCapability Name="radios" />
   */
  @Cordova({
    platforms: ['Android', 'Windows 10']
  })
  static setWifiState(state: boolean): Promise<any> { return; }

  /**
   * Enables/disables Bluetooth on the device.
   *
   * Requires the following permissions on Android:
   *  <uses-permission android:name="android.permission.BLUETOOTH"/>
   *  <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
   *
   * Requires the following capabilities for Windows 10 Mobile:
   *  <DeviceCapability Name="radios" />
   */
  @Cordova({
    platforms: ['Android', 'Windows 10']
  })
  static setBluetoothState(state: boolean): Promise<any> { return; }

  /**
   * Returns true if the device setting for location is on.
   *
   * On Android this returns true if Location Mode is switched on.
   *
   * On iOS this returns true if Location Services is switched on.
   *
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static isLocationEnabled(): Promise<boolean> { return; }

  /**
   * Checks if the application is authorized to use location.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static isLocationAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the location authorization status for the application.
   *
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * @return {Promise<PermissionStatus>}
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static getLocationAuthorizationStatus(): Promise<any> { return; }

  /**
   * Returns the location authorization status for the application.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
   *
   * @return {Promise<PermissionStatus>}
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static requestLocationAuthorization(mode?: string): Promise<any> { return; }

  /**
   * Checks if camera hardware is present on device.
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static isCameraPresent(): Promise<boolean> { return; }

  /**
   * Checks if the application is authorized to use the camera.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static isCameraAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the camera authorization status for the application.
   * Notes for Android:
   * This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * @return {Promise<PermissionStatus>}
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static getCameraAuthorizationStatus(): Promise<any> { return; }

  /**
   * Requests camera authorization for the application.
   * Notes for Android:
   * This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   * This requests permission for both READ_EXTERNAL_STORAGE and CAMERA run-time permissions which must be added to AndroidManifest.xml
   *
   * Notes for iOS:
   * Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect.
   *
   * @return {Promise<PermissionStatus>}
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static requestCameraAuthorization(): Promise<any> { return; }

  /**
   * Checks if the application is authorized to use the microphone.
   * Notes for Android:
   *  This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
   *
   * Notes for iOS:
   *  Requires iOS 8+
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static isMicrophoneAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the camera authorization status for the application.
   * Notes for Android:
   * This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * @return {Promise<PermissionStatus>}
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static getMicrophoneAuthorizationStatus(): Promise<any> { return; }

  /**
   * Requests camera authorization for the application.
   * Notes for Android:
   * This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   * This requests permission for RECORD_AUDIO which must be added to AndroidManifest.xml
   *
   * Notes for iOS:
   * Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
   *
   * @return {Promise<PermissionStatus>}
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static requestMicrophoneAuthorization(): Promise<any> { return; }





  /**
   * Opens settings page for this app.
   * On Android, this opens the "App Info" page in the Settings app.
   *
   * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
   *
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  static switchToSettings(): Promise<any> { return; }

  /**
   * Checks if location mode is set to return high-accuracy locations from GPS hardware.
   *   Returns true if Location mode is enabled and is set to either:
   *   - Device only = GPS hardware only (high accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   */
  @Cordova()
  static isGpsLocationEnabled(): Promise<any> { return; }

  /**
   * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
   * Returns true if Location mode is enabled and is set to either:
   *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   */
  @Cordova()
  static isNetworkLocationEnabled(): Promise<any> { return; }

  /**
   * Checks if remote (push) notifications are enabled.
   * On iOS 8+, returns true if app is registered for remote notifications AND "Allow Notifications" switch is ON AND alert style is not set to "None" (i.e. "Banners" or "Alerts").
   * On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRegisteredForRemoteNotifications().
   */
  @Cordova()
  static isRemoteNotificationsEnabled(): Promise<any> { return; }

  /**
   * Indicates if the app is registered for remote (push) notifications on the device.
   * On iOS 8+, returns true if the app is registered for remote notifications and received its device token, or false if registration has not occurred, has failed, or has been denied by the user. Note that user preferences for notifications in the Settings app will not affect this.
   * On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRemoteNotificationsEnabled().
   */
  @Cordova()
  static isRegisteredForRemoteNotifications(): Promise<any> { return; }

}
