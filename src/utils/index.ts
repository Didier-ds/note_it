import { EditorView } from "@codemirror/view"
import { oneDark } from '@codemirror/theme-one-dark'

const myTheme = EditorView.theme({
    "&": {
      color: "white",
      backgroundColor: "#010c15"
    },
    ".cm-content": {
      caretColor: "transparent",
      color: "white !important",
      fontFamily: 'Work Sans',
      letterSpacing: '.8px',
      fontSize: '.9em',
      fontWeight: 400,
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "white"
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#2c313a"
    },
    ".cm-gutters": {
      backgroundColor: "#010c15 !important",
      color: "#dddddd5e",
      border: "none"
    }
  }, { dark: true })

  export { myTheme, oneDark }