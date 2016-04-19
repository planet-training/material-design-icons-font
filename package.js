Package.describe({
  summary: "Material design icons from google (font)",
  name:"planettraining:material-design-icons-font",
  version: "2.2.3",
  git:"https://github.com/planet-training/material-design-icons-font.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addFiles(['design-icons.css'],'client');
  api.addAssets([
    /* icon sprites */
    'bower_components/material-design-icons/iconfont/MaterialIcons-Regular.eot',
    'bower_components/material-design-icons/iconfont/MaterialIcons-Regular.ttf',
    'bower_components/material-design-icons/iconfont/MaterialIcons-Regular.woff',
    'bower_components/material-design-icons/iconfont/MaterialIcons-Regular.woff2'


  ], "client");
});
