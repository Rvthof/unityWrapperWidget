## UnityWrapperWidget
This widget let's you set up the files to load a Unity file in a Mendix app using WebGL.
It uses https://github.com/jeffreylanters/react-unity-webgl for this.

## Usage
The widget needs to load 4 specific files that come with a Unity file.
For this, it needs four filedocument public URL's to the files.

In order to get a FileDocument's URL, use the GetGUID call from the Community Commons which is available on the Mendix Marketplace.
You can then construct the URL like this: '/file?guid='+$GUID

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
