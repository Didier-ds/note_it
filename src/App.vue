<script setup lang="ts">
import { ref } from '@vue/reactivity'
import type { Ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { EditorView } from "@codemirror/view"
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
const code: Ref<string> = ref("")
let myTheme = EditorView.theme({
  "&": {
    color: "white",
    backgroundColor: "#010c15"
  },
  ".cm-content": {
    caretColor: "transparent",
    fontFamily: 'Work Sans',
    letterSpacing: '.8px',
    fontSize: '.9em',
    fontWeight: 400,
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "white"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#dddddd5e"
  },
  ".cm-gutters": {
    backgroundColor: "#010c15 !important",
    color: "#dddddd5e",
    border: "none"
  }
}, { dark: true })
const extensions = [javascript(),oneDark, myTheme]

const style = {
  boxShadow: '0 20px 68px rgba(0,0,0,.55)',
  height: '100%', 
  width: '100%',
  backgroundColor: '#010c15 !important',
  fontFamily: 'Work Sans'
}
</script>

<template>
  <div class="view">
    <div class="w-8/12 h-[80vh] bg-[#010c15] rounded-md relative overflow-hidden">
    <div id="top_icons" class="p-4 left-0 top-0"><svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg></div>
      <codemirror v-model="code" placeholder="Code goes here..." :style="style"
        :autofocus="true" :extensions="extensions" :indent-with-tab="true" :tab-size="2" />
    </div>
  </div>
</template>

<style>
</style>
