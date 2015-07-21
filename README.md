# Ionic Toastr

**Ionic Toastr** is an extension of the [angular-toastr](https://github.com/Foxandxss/angular-toastr) project.


The extension integrates toasts with the [ionic framework's](http://ionicframework.com) color palette.
  
## Demo

Coming soon....


## Installation

Follow the instructions on the [angular-toastr](https://github.com/Foxandxss/angular-toastr) repository.

When your application is running and toasts are being displayed then it is time to change the colours of the toasts to match the ionic color palette.

The process is very simple:

## Coding time

Open scss/ionic.app.scss and after the import for the ionic scss files, add the import for ionic-toastr.scss

```scss
@import "<location of ionic-toastr.scss>/ionic-toastr.scss";
```

Remember then to recompile the scss file using 


``` javascript
gulp sass
```

on the command line.

## Source Project

This repository contains a sample ionic project together with a set of checkins showing each step to integrate toasts into your ionic project.


## Credits

Thanks to [Jesus Rodriguez](https://github.com/Foxandxss/) for his port of the original CodeSeven library

Thanks to the  guys at [CodeSeven/toastr](https://github.com/CodeSeven/toastr) for creating the original implementation.

## License

Mit License: [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)


