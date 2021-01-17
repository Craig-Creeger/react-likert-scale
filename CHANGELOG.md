Changelog
==========================

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


[3.0.1] - 2021-01-16
----------------------------

### Changes

  * The code is now minified.
  * The two dependencies have been removed.
  * The license has been switch to Creative Commons 0. You can use this sofware anywhere.


[3.0.0] - 2021-01-15
----------------------------

### Changes

Once again, this component is compatible with really old versions of React. It is written as a
Class component.

### Breaking Changes

For most people, this will not be a breaking change. This component is only an ES2015 (ES6) module.
Previously, it was exported as UMD.
  
[2.0.2] - 2021-01-13
----------------------------

### Changed

The Rollup configuration needed to be fixed to export the code correctly. Versions 2.0.0 and 2.0.1
were broken. Hopefully this version will be better. :)
### Deleted

This package no longer generates an ES Module. Instead, the component is now just a UMD modules.


[2.0.1] - 2021-01-11
----------------------------

### Added

- This Changelog was created.

### Changed

- React was always a peer dependency, but now it is explicitly called out as such in the
  `package.json` file.


[2.0.0] - 2021-01-11
----------------------------

### Breaking Changes

- React 16.8.0+ is new a required peer dependency. This is because this was re-written to use hooks.
- The default colors for the radio buttons has changed.

### Added

- It can now accept any valid DOM attribute and you can pass in a React ref.

### Changed

- The README was updated to be little easier to understand.
- The code was re-written to use React's functional components and hooks instead of Class
  components.
- All dependencies were updated.