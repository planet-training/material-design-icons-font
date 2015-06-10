Package.describe({
  summary: "Material design icons from google (font)",
  name:"planettraining:material-design-icons-font",
  version: "2.0.0",
  git:"https://github.com/planet-training/material-design-icons-font.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addFiles([
    /* icon sprites */
    'bower_components/material-design-icons/iconfont/MaterialIcons-Regular.eot',
    'bower_components/material-design-icons/iconfont/MaterialIcons-Regular.ttf',
    'bower_components/material-design-icons/iconfont/MaterialIcons-Regular.woff',
    'bower_components/material-design-icons/iconfont/MaterialIcons-Regular.woff2',

    'design-icons.css'
  ], "client");
});