# Google material design icons
Package to provide material design icons for your angular material design (ngMaterial) app.

## Initialize your angular icon provider
The folder with all files of this package is available in the public url ```/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/```. Currently we only publish the ```svg-sprites``` because we think this is the best way to go for including icons into your project. You can initialize the icons as following:

```
angular.module("MyApp")
  .config(themeIcons);

function themeIcons ($mdIconProvider) {

  $mdIconProvider
    .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
    .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
    .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
    .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
    .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
    .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
    .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");

    // there are more icon sprites available, check out the material-design-icons page

};

```

## Links
* https://github.com/google/material-design-icons
* https://github.com/angular/material
* https://github.com/Urigo/angular-meteor
