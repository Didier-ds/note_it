<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { computed, onMounted, Ref, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { myTheme, oneDark } from "./utils/"
import { db, fbRef, set, onValue } from './utils/firebase'
const note: Ref<string> = ref("")
const noteRef = computed(() => {
  const userId = 0
  return fbRef(db, `/users/${userId}`);
})

// code editor custom style
const style = {
  height: '100%',
  width: '100%',
  backgroundColor: '#010c15 !important',
  fontFamily: 'Work Sans'
}

// code editor extension
const extensions = [myTheme, oneDark]


// function to save to db
const save = () => {
  set(noteRef.value, {
    note: note.value
  })
}

// function to listen to db
const listen = () => {
  onValue(noteRef.value, (snapshot: any) => {
    const data = snapshot.val();
    note.value = data.note;
  })
}
watch(note, () => {
  save()
})

onMounted(() => {
  listen();
})
</script>

<template>
  <div class="view">
    <div class="editor_box">
      <div id="top_icons" class="p-4 left-0 top-0"><svg xmlns="http://www.w3.org/2000/svg" width="54" height="14"
          viewBox="0 0 54 14">
          <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
            <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle>
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle>
            <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle>
          </g>
        </svg></div>
      <codemirror v-model="note" placeholder="Share text..." :style="style" :autofocus="true" :extensions="extensions"
        :indent-with-tab="true" :tab-size="2" />
    </div>
  </div>
</template>

<style>
</style>
