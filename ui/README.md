# Component QSlidingBtn

[![npm](https://img.shields.io/npm/v/quasar-ui-qslidingbtn.svg?label=quasar-ui-qslidingbtn)](https://www.npmjs.com/package/quasar-ui-qslidingbtn)
[![npm](https://img.shields.io/npm/dt/quasar-ui-qslidingbtn.svg)](https://www.npmjs.com/package/quasar-ui-qslidingbtn)

# Component QSlidingBtn
Allows you to have a button with icon and label. When toggled, the label is displayed with icon, otherwise just the icon is displayed.

# Properties (QSlidingBtnGroup)
| Property | Type | Description |
| -------- | ---- | ----------- |
| value   | Number, String | Model of the component defining the current SlidingBtn's name; If a Number is used, it does not define the SlidingBtn's index, but rather the SlidingBtn's name which can also be an Integer; Either use this property (along with a listener for 'input' event) OR use the v-model directive. |
| multiple | Boolean | Allow multiple SlingBtns to be extended at the same time |
| toggle | Boolean | Allow SlidingBtn to be toggled |
| type | String | Define the button HTML DOM type for SlidingBtn. Accepted values are: a, submit, button, reset |
| outline | Boolean | Use 'outline' design for SlidingBtn |
| push | Boolean | Use 'push' design for SlidingBtn |
| flat | Boolean | Use 'flat' design for SlidingBtn |
| glossy | Boolean | Use 'glossy' design for SlidingBtn |
| square | Boolean | Use 'square' design for SlidingBtn |
| unelevated | Boolean | Remove shadow on SlidingBtn |
| padding | String | Apply custom padding (vertical [horizontal]) to SlidingBtn; Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set |

# Properties (QSlidingBtn)
| Property | Type | Description |
| -------- | ---- | ----------- |
| value   | Boolean | toggles extended state |
| name | String, Number | name to be used by SlidingBtn and SlidingBtnGroup. If not set, one will be generated |
| label | String | The label that will be displayed when SlidingBtn is in extended state |
| icon | String | Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix |
| color | String | Color name for component from the Quasar Color Palette |
| text-color | String | Overrides text color (if needed); Color name from the Quasar Color Palette |
| disable | Boolean | Put component in disabled mode |
| tabindex | Number | Tabindex HTML attribute value |
| label-class | Array, String, Object | Class definitions to be attributed to the label container |
| label-style | Array, String, Object | Style definitions to be attributed to the label container |

# Usage
```html
    <div style="max-width: 400px;">
      Padding
      <q-sliding-btn-group
        v-model="model"
        padding="2px"
        unelevated
      >
        <q-sliding-btn
          name="1"
          icon="bookmark"
          label="Bookmark"
          text-color="teal-8"
        />
        <q-sliding-btn
          name="2"
          icon="event"
          label="Calendar"
          text-color="blue-grey-8"
        />
        <q-sliding-btn
          name="3"
          icon="alarm"
          label="Alarm"
          text-color="orange-8"
        />
        <q-sliding-btn
          name="4"
          icon="directions"
          label="Directions"
        />
      </q-sliding-btn-group>
    </div>

```


# Component Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

**OR**:

Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-qslidingbtn'
import 'quasar-ui-qslidingbtn/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="quasar-ui-qslidingbtn/dist/index.css"></style>

<script>
import { QSlidingBtn } from 'quasar-ui-qslidingbtn'

export default {
  components: {
    QSlidingBtn
  }
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-qslidingbtn'
import 'quasar-ui-qslidingbtn/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="quasar-ui-qslidingbtn/dist/index.css"></style>

<script>
import { QSlidingBtn } from 'quasar-ui-qslidingbtn'

export default {
  components: {
    QSlidingBtn
  }
}
</script>
```

## UMD variant

Exports `window.QSlidingBtn`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/quasar-ui-qslidingbtn/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/quasar-ui-qslidingbtn/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/quasar-ui-qslidingbtn/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```

# Project Setup
```bash
$ cd ui
$ yarn
$ cd dev
$ yarn
$ cd ..
```

# Developing
in `ui` folder
```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Building package
```bash
$ yarn build
```

# Adding Testing Components
in the `ui/dev/src/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

# Adding Assets
If you have a component that has assets, like language or icon-sets, you will need to provide these for UMD. In the `ui/build/script.javascript.js` file, you will find a couple of commented out commands that call `addAssets`. Uncomment what you need and add your assets to have them be built and put into the `ui/dist` folder.

# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
