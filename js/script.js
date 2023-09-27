const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello, World! This is the world:',
      imageUrl: 'https://picsum.photos/536/354'
    }
  }
}).mount('#app')


/*
  ## Passaggi HTML e Javascript
  1. in Html inserire il tag h1 con dentro il data vuejs e un tag img con la direttava v-bind per il source dell'immagine
  2. dichiarare l'oggetto con le funzioni di vue
  3. collegare quest'oggetto a un elemento container in html
  4. in data inserire le due variabili 
*/
