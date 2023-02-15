<template>
  <MerFunktioner @emitvaluex="customeventfunktion" propvalue="hej" />
  <img src="/assets/avatar/avatar1.jpg" />
  <img src="/assets/avatar/avatar9.jpg" />
  <img src="/assets/avatar/avatar8.jpg" />
  <img src="/assets/avatar/avatar7.jpg" />
  <img src="/assets/avatar/avatar6.jpg" />
  <img src="/assets/avatar/avatar5.jpg" />
  <img src="/assets/avatar/avatar4.jpg" />
  <img src="/assets/avatar/avatar3.jpg" />
  <img src="/assets/avatar/avatar2.jpg" />
</template>

<script>
  import MerFunktioner from '../components/MerFunktioner.vue'

  export default {
    name: 'LiteFunktioner',

    data() {
      return {
        newvalue: null
      }
    },

    components: {
      MerFunktioner
    },

    methods: {
      customeventfunktion(x) {
        console.log(`tagit emot värdet ${x}`)
      }
    }
  }
</script>
