rm -rf temp
mkdir -p temp

react-native bundle --platform ios --dev false --entry-file common.js \
  --bundle-output temp/common.ios.bundle --assets-dest temp

react-native bundle --platform android --dev false --entry-file common.js \
  --bundle-output temp/common.android.bundle --assets-dest temp
