
# fln-vue-icon v0.1.1

A simple tool and component vue to create svg icons.

### Installation
```sh
$ npm install fln-vue-icon
```

### Usage 01
```html
<!-- index.html -->
<body>
    <div id="app"></div>
    
    <!-- set icons definitions -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <!-- https://materialdesignicons.com/ -->
        <symbol id="file-document-box" viewBox="0 0 24 24">
            <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
        </symbol>
    </defs>
    </svg>
</body>
```

```html
<!-- App.vue -->
<template>
    <vue-icon symbol="file-document-box" size="48" color="red"></vue-icon>
</template>
<script>
    import Vue from 'vue'
    import flnvueicon from 'fln-vue-icon'
    
    // resgister component
    Vue.component('vue-icon', flnvueicon.component)
    
    let app = new Vue({
        el: '#app'
    })
</script>
```

### Usage 02

```html
App.vue
<template>
    <vue-icon name="file-document-box-registered" size="48" color="red"></vue-icon>
</template>
<script>
    import Vue from 'vue'
    import flnvueicon from 'fln-vue-icon'
    
    // resgister component
    Vue.component('vue-icon', flnvueicon.component)

    // resgister icon
    flnvueicon.manager.set('file-document-box-registered', {
        content: '<path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />',
        viewBox: '0 0 24 24'
    })
    
    let app = new Vue({
        el: '#app'
    })
</script>
```