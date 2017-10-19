# Booknshelf Chrome Extension

### Dependencies

* [node + npm](https://nodejs.org/)
* (Optional) [Visual Studio Code](https://code.visualstudio.com/)

### Building the extension

Download dependencies
```
npm install
```
Open in Visual Studio Code project
```
File > Open Folder
```
Build in watch mode
using either terminal
```
npm run build
```
or using Visual Studio Code
```
type `Ctrl + Shift + B`
```
Load extension to chrome
* Open `chrome://extensions`
* Enable `Developer mode` checkbox
* Click `Load unpacked extension...`
* Load `dist` directory

### Project Structure
```
├── .vscode                     # Visual Studio settings
├── dist                        # Chrome Extension directory
│   ├── js                      # Generated JavaScript files
│   └── manifest.json           # Extension Manifest file
├── package.json                # Npm package declaration
├── src                         # Src files
├── tsconfig.json               # TS to JS preferences
└── webpack.config.js           # Webpack settings
```

### Attribution
This project is based on [Chibat's Extension TypeScript Starter](https://github.com/chibat/chrome-extension-typescript-starter.git)