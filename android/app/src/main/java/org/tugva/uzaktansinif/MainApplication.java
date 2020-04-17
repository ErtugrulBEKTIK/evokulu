package org.tugva.uzaktansinif;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativecommunity.rnpermissions.RNPermissionsPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.reactnativecommunity.cameraroll.CameraRollPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.reactnativecommunity.imageeditor.ImageEditorPackage;
import io.codebakery.imagerotate.ImageRotatePackage;
import org.reactnative.camera.RNCameraPackage;
import com.horcrux.svg.SvgPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import io.invertase.firebase.RNFirebasePackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ImageResizerPackage(),
          new RNSoundPackage(),
          new ImageEditorPackage(),
          new ImageRotatePackage(),
          new CameraRollPackage(),
          new RNCameraPackage(),
          new RNPermissionsPackage(),
          new SvgPackage(),
          new LottiePackage(),
          new RNFirebasePackage(),
          new ReactNativePushNotificationPackage(),
          new LinearGradientPackage(),
          new VectorIconsPackage(),
          new AsyncStoragePackage(),
          new RNGestureHandlerPackage(),
          new ReanimatedPackage(),
          new RNFirebaseMessagingPackage(),
          new RNFirebaseNotificationsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
