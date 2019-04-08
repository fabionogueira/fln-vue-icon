<template>
<div>
    <h1>ivue-icon test</h1>
    <vue-icon name="file-document-box-registered" size="48" color="blue"></vue-icon>
    <vue-icon symbol="file-document-box" size="48" color="red"></vue-icon>
</div>
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

export default {
    name: 'app'
}
</script>
