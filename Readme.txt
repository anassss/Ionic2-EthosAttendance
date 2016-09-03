D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2>ionic start EthosAttendance blank --v2 --ts
Creating Ionic app in folder D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance based on blank project
Downloading: https://github.com/driftyco/ionic2-app-base/archive/typescript.zip
[=============================]  100%  0.0s
Downloading: https://github.com/driftyco/ionic2-starter-blank/archive/typescript.zip
[=============================]  100%  0.0s
Installing npm packages...

Adding initial native plugins
[=============================]  100%  0.0s

Saving your Ionic app state of platforms and plugins
Saved platform
Saved plugins
Saved package.json

? ? ? ?  Your Ionic app is ready to go! ? ? ? ?

Make sure to cd into your new app directory:
  cd EthosAttendance

To run your app in the browser (great for initial development):
  ionic serve

To run on iOS:
  ionic run ios

To run on Android:
  ionic run android

To test your app on a device easily, try Ionic View:
  http://view.ionic.io

New! Add push notifications, update your app remotely, and package iOS and Android apps with the Ionic Platform!
https://apps.ionic.io/signup

New to Ionic? Get started here: http://ionicframework.com/docs/v2/getting-started


=================================================================================================================

Creating a New Provider
Let�s look at adding a new provider (also known as a service), which will be used to make an HTTP request to an API. 
> ionic g provider WebServices

=================================================================================================================

D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance>ionic platform add android
Adding android project...
Creating Cordova project for the Android platform:
        Path: platforms\android
        Package: com.ionicframework.ethosattendance854071
        Name: EthosAttendance
        Activity: MainActivity
        Android target: android-23
Android project created with cordova-android@5.2.2
Installing "cordova-plugin-console" for android
Installing "cordova-plugin-device" for android
Installing "cordova-plugin-splashscreen" for android
Installing "cordova-plugin-statusbar" for android
Installing "cordova-plugin-whitelist" for android

               This plugin is only applicable for versions of cordova-android greater than 4.0. If you have a previous platform version, you do *not* need this plugin since the whitelist will be built in.

Installing "ionic-plugin-keyboard" for android
Running command: "C:\Program Files\nodejs\node.exe" "D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance\hooks\after_prepare\010_add_platform_class.js" "D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance"
add to body class: platform-android
Saving platform to package.json file

D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance>adb devices
List of devices attached
* daemon not running. starting it now on port 5037 *
* daemon started successfully *
LGD8558208c056  device


D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance>ionic build android

Running 'build:before' gulp task before build
[23:28:10] Starting 'clean'...
[23:28:10] Finished 'clean' after 36 ms
[23:28:10] Starting 'build'...
[23:28:10] Starting 'sass'...
[23:28:10] Starting 'html'...
[23:28:10] Starting 'fonts'...
[23:28:10] Starting 'scripts'...
[23:28:10] Finished 'html' after 72 ms
[23:28:10] Finished 'fonts' after 106 ms
[23:28:10] Finished 'scripts' after 131 ms
[23:28:12] Finished 'sass' after 1.6 s
[23:28:29] Finished 'build' after 19 s
[23:28:29] Starting 'build:before'...
[23:28:29] Finished 'build:before' after 28 μs

Running command: "C:\Program Files\nodejs\node.exe" "D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance\hooks\after_prepare\010_add_platform_class.js" "D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance"
add to body class: platform-android
ANDROID_HOME=D:\DOCUMENTS\Android\sdk
JAVA_HOME=C:\Program Files\Java\jdk1.8.0_66
Downloading http://services.gradle.org/distributions/gradle-2.13-all.zip
.....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
Unzipping C:\Users\Anasss\.gradle\wrapper\dists\gradle-2.13-all\7hsc6vr6mi3i6i5m7q9hj4ci1q\gradle-2.13-all.zip to C:\Users\Anasss\.gradle\wrapper\dists\gradle-2.13-all\7hsc6vr6mi3i6i5m7q9hj4ci1q
Starting a new Gradle Daemon for this build (subsequent builds will be faster).
Download https://repo1.maven.org/maven2/com/android/tools/build/gradle/2.1.0/gradle-2.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/build/gradle-core/2.1.0/gradle-core-2.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/build/builder/2.1.0/builder-2.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/lint/lint/25.1.0/lint-25.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/build/transform-api/2.0.0-deprecated-use-gradle-api/transform-api-2.0.0-deprecated-use-gradle-api.pom
Download https://repo1.maven.org/maven2/com/android/tools/build/gradle-api/2.1.0/gradle-api-2.1.0.pom
Download https://repo1.maven.org/maven2/com/android/databinding/compilerCommon/2.1.0/compilerCommon-2.1.0.pom
Download https://repo1.maven.org/maven2/org/ow2/asm/asm/5.0.3/asm-5.0.3.pom
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-parent/5.0.3/asm-parent-5.0.3.pom
Download https://repo1.maven.org/maven2/org/ow2/ow2/1.3/ow2-1.3.pom
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-commons/5.0.3/asm-commons-5.0.3.pom
Download https://repo1.maven.org/maven2/net/sf/proguard/proguard-gradle/5.2.1/proguard-gradle-5.2.1.pom
Download https://repo1.maven.org/maven2/net/sf/proguard/proguard-parent/5.2.1/proguard-parent-5.2.1.pom
Download https://repo1.maven.org/maven2/org/jacoco/org.jacoco.core/0.7.4.201502262128/org.jacoco.core-0.7.4.201502262128.pom
Download https://repo1.maven.org/maven2/org/jacoco/org.jacoco.build/0.7.4.201502262128/org.jacoco.build-0.7.4.201502262128.pom
Download https://repo1.maven.org/maven2/org/antlr/antlr/3.5.2/antlr-3.5.2.pom
Download https://repo1.maven.org/maven2/org/antlr/antlr-master/3.5.2/antlr-master-3.5.2.pom
Download https://repo1.maven.org/maven2/org/sonatype/oss/oss-parent/9/oss-parent-9.pom
Download https://repo1.maven.org/maven2/com/android/tools/build/builder-model/2.1.0/builder-model-2.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/build/builder-test-api/2.1.0/builder-test-api-2.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/sdklib/25.1.0/sdklib-25.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/sdk-common/25.1.0/sdk-common-25.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/common/25.1.0/common-25.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/build/manifest-merger/25.1.0/manifest-merger-25.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/ddms/ddmlib/25.1.0/ddmlib-25.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/jack/jack-api/0.10.0/jack-api-0.10.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/jill/jill-api/0.10.0/jill-api-0.10.0.pom
Download https://repo1.maven.org/maven2/com/squareup/javawriter/2.5.0/javawriter-2.5.0.pom
Download https://repo1.maven.org/maven2/org/sonatype/oss/oss-parent/7/oss-parent-7.pom
Download https://repo1.maven.org/maven2/org/bouncycastle/bcpkix-jdk15on/1.48/bcpkix-jdk15on-1.48.pom
Download https://repo1.maven.org/maven2/org/bouncycastle/bcprov-jdk15on/1.48/bcprov-jdk15on-1.48.pom
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-tree/5.0.3/asm-tree-5.0.3.pom
Download https://repo1.maven.org/maven2/com/android/tools/lint/lint-checks/25.1.0/lint-checks-25.1.0.pom
Download https://repo1.maven.org/maven2/org/eclipse/jdt/core/compiler/ecj/4.4.2/ecj-4.4.2.pom
Download https://repo1.maven.org/maven2/com/android/tools/annotations/25.1.0/annotations-25.1.0.pom
Download https://repo1.maven.org/maven2/com/google/guava/guava/17.0/guava-17.0.pom
Download https://repo1.maven.org/maven2/com/google/guava/guava-parent/17.0/guava-parent-17.0.pom
Download https://repo1.maven.org/maven2/com/android/databinding/baseLibrary/2.1.0/baseLibrary-2.1.0.pom
Download https://repo1.maven.org/maven2/com/tunnelvisionlabs/antlr4/4.5/antlr4-4.5.pom
Download https://repo1.maven.org/maven2/com/tunnelvisionlabs/antlr4-master/4.5/antlr4-master-4.5.pom
Download https://repo1.maven.org/maven2/commons-io/commons-io/2.4/commons-io-2.4.pom
Download https://repo1.maven.org/maven2/org/apache/commons/commons-parent/25/commons-parent-25.pom
Download https://repo1.maven.org/maven2/org/apache/apache/9/apache-9.pom
Download https://repo1.maven.org/maven2/com/googlecode/juniversalchardet/juniversalchardet/1.0.3/juniversalchardet-1.0.3.pom
Download https://repo1.maven.org/maven2/net/sf/proguard/proguard-base/5.2.1/proguard-base-5.2.1.pom
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-debug-all/5.0.1/asm-debug-all-5.0.1.pom
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-parent/5.0.1/asm-parent-5.0.1.pom
Download https://repo1.maven.org/maven2/org/antlr/antlr-runtime/3.5.2/antlr-runtime-3.5.2.pom
Download https://repo1.maven.org/maven2/org/antlr/ST4/4.0.8/ST4-4.0.8.pom
Download https://repo1.maven.org/maven2/com/android/tools/layoutlib/layoutlib-api/25.1.0/layoutlib-api-25.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/dvlib/25.1.0/dvlib-25.1.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/repository/25.1.0/repository-25.1.0.pom
Download https://repo1.maven.org/maven2/com/google/code/gson/gson/2.2.4/gson-2.2.4.pom
Download https://repo1.maven.org/maven2/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1.pom
Download https://repo1.maven.org/maven2/org/apache/commons/commons-parent/33/commons-parent-33.pom
Download https://repo1.maven.org/maven2/org/apache/apache/13/apache-13.pom
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpclient/4.1.1/httpclient-4.1.1.pom
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpcomponents-client/4.1.1/httpcomponents-client-4.1.1.pom
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/project/4.1.1/project-4.1.1.pom
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpmime/4.1/httpmime-4.1.pom
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpcomponents-client/4.1/httpcomponents-client-4.1.pom
Download https://repo1.maven.org/maven2/net/sf/kxml/kxml2/2.3.0/kxml2-2.3.0.pom
Download https://repo1.maven.org/maven2/com/android/tools/lint/lint-api/25.1.0/lint-api-25.1.0.pom
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-analysis/5.0.3/asm-analysis-5.0.3.pom
Download https://repo1.maven.org/maven2/com/tunnelvisionlabs/antlr4-runtime/4.5/antlr4-runtime-4.5.pom
Download https://repo1.maven.org/maven2/com/tunnelvisionlabs/antlr4-annotations/4.5/antlr4-annotations-4.5.pom
Download https://repo1.maven.org/maven2/com/intellij/annotations/12.0/annotations-12.0.pom
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpcore/4.1/httpcore-4.1.pom
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpcomponents-core/4.1/httpcomponents-core-4.1.pom
Download https://repo1.maven.org/maven2/commons-logging/commons-logging/1.1.1/commons-logging-1.1.1.pom
Download https://repo1.maven.org/maven2/org/apache/commons/commons-parent/5/commons-parent-5.pom
Download https://repo1.maven.org/maven2/org/apache/apache/4/apache-4.pom
Download https://repo1.maven.org/maven2/commons-codec/commons-codec/1.4/commons-codec-1.4.pom
Download https://repo1.maven.org/maven2/org/apache/commons/commons-parent/11/commons-parent-11.pom
Download https://repo1.maven.org/maven2/com/android/tools/external/lombok/lombok-ast/0.2.3/lombok-ast-0.2.3.pom
Download https://repo1.maven.org/maven2/org/abego/treelayout/org.abego.treelayout.core/1.0.1/org.abego.treelayout.core-1.0.1.pom
Download https://repo1.maven.org/maven2/com/android/tools/build/gradle/2.1.0/gradle-2.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/build/gradle-core/2.1.0/gradle-core-2.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/build/builder/2.1.0/builder-2.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/lint/lint/25.1.0/lint-25.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/build/transform-api/2.0.0-deprecated-use-gradle-api/transform-api-2.0.0-deprecated-use-gradle-api.jar
Download https://repo1.maven.org/maven2/com/android/tools/build/gradle-api/2.1.0/gradle-api-2.1.0.jar
Download https://repo1.maven.org/maven2/com/android/databinding/compilerCommon/2.1.0/compilerCommon-2.1.0.jar
Download https://repo1.maven.org/maven2/org/ow2/asm/asm/5.0.3/asm-5.0.3.jar
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-commons/5.0.3/asm-commons-5.0.3.jar
Download https://repo1.maven.org/maven2/net/sf/proguard/proguard-gradle/5.2.1/proguard-gradle-5.2.1.jar
Download https://repo1.maven.org/maven2/org/jacoco/org.jacoco.core/0.7.4.201502262128/org.jacoco.core-0.7.4.201502262128.jar
Download https://repo1.maven.org/maven2/org/antlr/antlr/3.5.2/antlr-3.5.2.jar
Download https://repo1.maven.org/maven2/com/android/tools/build/builder-model/2.1.0/builder-model-2.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/build/builder-test-api/2.1.0/builder-test-api-2.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/sdklib/25.1.0/sdklib-25.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/sdk-common/25.1.0/sdk-common-25.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/common/25.1.0/common-25.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/build/manifest-merger/25.1.0/manifest-merger-25.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/ddms/ddmlib/25.1.0/ddmlib-25.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/jack/jack-api/0.10.0/jack-api-0.10.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/jill/jill-api/0.10.0/jill-api-0.10.0.jar
Download https://repo1.maven.org/maven2/com/squareup/javawriter/2.5.0/javawriter-2.5.0.jar
Download https://repo1.maven.org/maven2/org/bouncycastle/bcpkix-jdk15on/1.48/bcpkix-jdk15on-1.48.jar
Download https://repo1.maven.org/maven2/org/bouncycastle/bcprov-jdk15on/1.48/bcprov-jdk15on-1.48.jar
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-tree/5.0.3/asm-tree-5.0.3.jar
Download https://repo1.maven.org/maven2/com/android/tools/lint/lint-checks/25.1.0/lint-checks-25.1.0.jar
Download https://repo1.maven.org/maven2/org/eclipse/jdt/core/compiler/ecj/4.4.2/ecj-4.4.2.jar
Download https://repo1.maven.org/maven2/com/android/tools/annotations/25.1.0/annotations-25.1.0.jar
Download https://repo1.maven.org/maven2/com/google/guava/guava/17.0/guava-17.0.jar
Download https://repo1.maven.org/maven2/com/android/databinding/baseLibrary/2.1.0/baseLibrary-2.1.0.jar
Download https://repo1.maven.org/maven2/com/tunnelvisionlabs/antlr4/4.5/antlr4-4.5.jar
Download https://repo1.maven.org/maven2/commons-io/commons-io/2.4/commons-io-2.4.jar
Download https://repo1.maven.org/maven2/com/googlecode/juniversalchardet/juniversalchardet/1.0.3/juniversalchardet-1.0.3.jar
Download https://repo1.maven.org/maven2/net/sf/proguard/proguard-base/5.2.1/proguard-base-5.2.1.jar
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-debug-all/5.0.1/asm-debug-all-5.0.1.jar
Download https://repo1.maven.org/maven2/org/antlr/antlr-runtime/3.5.2/antlr-runtime-3.5.2.jar
Download https://repo1.maven.org/maven2/org/antlr/ST4/4.0.8/ST4-4.0.8.jar
Download https://repo1.maven.org/maven2/com/android/tools/layoutlib/layoutlib-api/25.1.0/layoutlib-api-25.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/dvlib/25.1.0/dvlib-25.1.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/repository/25.1.0/repository-25.1.0.jar
Download https://repo1.maven.org/maven2/com/google/code/gson/gson/2.2.4/gson-2.2.4.jar
Download https://repo1.maven.org/maven2/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1.jar
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpclient/4.1.1/httpclient-4.1.1.jar
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpmime/4.1/httpmime-4.1.jar
Download https://repo1.maven.org/maven2/net/sf/kxml/kxml2/2.3.0/kxml2-2.3.0.jar
Download https://repo1.maven.org/maven2/com/android/tools/lint/lint-api/25.1.0/lint-api-25.1.0.jar
Download https://repo1.maven.org/maven2/org/ow2/asm/asm-analysis/5.0.3/asm-analysis-5.0.3.jar
Download https://repo1.maven.org/maven2/com/tunnelvisionlabs/antlr4-runtime/4.5/antlr4-runtime-4.5.jar
Download https://repo1.maven.org/maven2/com/tunnelvisionlabs/antlr4-annotations/4.5/antlr4-annotations-4.5.jar
Download https://repo1.maven.org/maven2/com/intellij/annotations/12.0/annotations-12.0.jar
Download https://repo1.maven.org/maven2/org/apache/httpcomponents/httpcore/4.1/httpcore-4.1.jar
Download https://repo1.maven.org/maven2/commons-logging/commons-logging/1.1.1/commons-logging-1.1.1.jar
Download https://repo1.maven.org/maven2/commons-codec/commons-codec/1.4/commons-codec-1.4.jar
Download https://repo1.maven.org/maven2/com/android/tools/external/lombok/lombok-ast/0.2.3/lombok-ast-0.2.3.jar
Download https://repo1.maven.org/maven2/org/abego/treelayout/org.abego.treelayout.core/1.0.1/org.abego.treelayout.core-1.0.1.jar
Incremental java compilation is an incubating feature.
:preBuild UP-TO-DATE
:preDebugBuild UP-TO-DATE
:checkDebugManifest
:CordovaLib:preBuild UP-TO-DATE
:CordovaLib:preDebugBuild UP-TO-DATE
:CordovaLib:compileDebugNdk UP-TO-DATE
:CordovaLib:compileLint
:CordovaLib:copyDebugLint UP-TO-DATE
:CordovaLib:mergeDebugProguardFiles
:CordovaLib:packageDebugRenderscript UP-TO-DATE
:CordovaLib:checkDebugManifest
:CordovaLib:prepareDebugDependencies
:CordovaLib:compileDebugRenderscript
:CordovaLib:generateDebugResValues
:CordovaLib:generateDebugResources
:CordovaLib:packageDebugResources
:CordovaLib:compileDebugAidl
:CordovaLib:generateDebugBuildConfig
:CordovaLib:mergeDebugShaders
:CordovaLib:compileDebugShaders
:CordovaLib:generateDebugAssets
:CordovaLib:mergeDebugAssets
:CordovaLib:processDebugManifest
:CordovaLib:processDebugResources
:CordovaLib:generateDebugSources
:CordovaLib:incrementalDebugJavaCompilationSafeguard
:CordovaLib:compileDebugJavaWithJavac
:CordovaLib:compileDebugJavaWithJavac - is not incremental (e.g. outputs have changed, no previous execution, etc.).
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
:CordovaLib:processDebugJavaRes UP-TO-DATE
:CordovaLib:transformResourcesWithMergeJavaResForDebug
:CordovaLib:transformClassesAndResourcesWithSyncLibJarsForDebug
:CordovaLib:mergeDebugJniLibFolders
:CordovaLib:transformNative_libsWithMergeJniLibsForDebug
:CordovaLib:transformNative_libsWithSyncJniLibsForDebug
:CordovaLib:bundleDebug
:prepareAndroidCordovaLibUnspecifiedDebugLibrary
:prepareDebugDependencies
:compileDebugAidl
:compileDebugRenderscript
:generateDebugBuildConfig
:mergeDebugShaders
:compileDebugShaders
:generateDebugAssets
:mergeDebugAssets
:generateDebugResValues
:generateDebugResources
:mergeDebugResources
:processDebugManifest
:processDebugResources
:generateDebugSources
:incrementalDebugJavaCompilationSafeguard
:compileDebugJavaWithJavac
:compileDebugJavaWithJavac - is not incremental (e.g. outputs have changed, no previous execution, etc.).
Note: D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance\platforms\android\src\org\apache\cordova\splashscreen\SplashScreen.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
:compileDebugNdk UP-TO-DATE
:compileDebugSources
:prePackageMarkerForDebug
:transformClassesWithDexForDebug
To run dex in process, the Gradle daemon needs a larger heap.
It currently has approximately 910 MB.
For faster builds, increase the maximum heap size for the Gradle daemon to more than 2048 MB.
To do this set org.gradle.jvmargs=-Xmx2048M in the project gradle.properties.
For more information see https://docs.gradle.org/current/userguide/build_environment.html
:mergeDebugJniLibFolders
:transformNative_libsWithMergeJniLibsForDebug
:processDebugJavaRes UP-TO-DATE
:transformResourcesWithMergeJavaResForDebug
:validateDebugSigning
:packageDebug
:zipalignDebug
:assembleDebug
:cdvBuildDebug

BUILD SUCCESSFUL

Total time: 55 mins 16.744 secs
Built the following apk(s):
        D:/DOCUMENTS/Courses/Mobile and CloudComputing,  SSUET/Module B/Ionic2/EthosAttendance/platforms/android/build/outputs/apk/android-debug.apk

D:\DOCUMENTS\Courses\Mobile and CloudComputing,  SSUET\Module B\Ionic2\EthosAttendance>