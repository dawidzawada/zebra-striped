# zebra-striped 🦓

Generate barcodes natively in React Native with the ZXing library underhood!

## The story behind

When I was working on generating QR codes in one of the apps for a client, I realized that JS-based libraries like [BWIP JS](https://www.npmjs.com/package/bwip-js) are not very performant in React Native apps, where performance is especially important for keeping users happy.

I decided to experiment a little and learn about Expo Native Modules, Swift, and Kotlin. This led to the creation of zebra-striped - a performant, native-based library for generating various types of barcodes for React Native.

Feedback is highly appreciated!

## Supported code formats

| 1D Codes | 2D Codes    |
| -------- | ----------- |
| Code 128 | QR          |
| Code 39  | PDF417      |
| Code 93  | Aztec       |
| Codabar  | Data Matrix |
| EAN-13   |             |
| EAN-8    |             |
| ITF      |             |
| UPC-E    |             |
| UPC-A    |             |

## Usage

Here's a basic usage of **ZebraCode** component:

```
<ZebraCode
  value={"I'm very striped!"}
  format="qr"
  size={{width: 300, height: 300}}
/>
```

Want a custom colors? 🎨 I've got you covered:

```
<ZebraCode
  value={"I'm very striped!"}
  format="qr"
  size={{width: 300, height: 300}}
  onColor="#141414"
  offColor="#ffffff"
/>
```

(Colors are accepted only in HEX)

Or maybe you just want to have a data returned in Base64 format? Here's how you can do it:

```
const base64Image = getBase64Code("I'm base64'ed!", "qr", {
    width: 300,
    height: 300
});
```

```
const base64Image = getBase64Code("I'm custom-colored!", "qr", {
    width: 300,
    height: 300
}, "#141414", #ffffff);
```

## Installation

#### Add the package to your npm dependencies

```
npm install zebra-striped
```

### Installation in managed Expo projects

After installation you'll need to rebuild your dev client. Zebra 🦓 will not work in Expo Go.

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

### Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

#### Configure for iOS

Run `npx pod-install` after installing the npm package.

## Contributing

Contributions are very welcome, I'm open for any suggestions!
