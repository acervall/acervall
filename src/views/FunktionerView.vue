<template>
  <MerFunktioner @emitvaluex="customeventfunktion" propvalue="hej" />
  <p>testar</p>
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
