<style></style>

<template>
  <div id="searchInput" class="p-3">
    <div class="navbar bar">
      <input
        class="selected"
        type="text"
        @keyup="findStop()"
        v-model="search"
        placeholder="Search a route"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'FindStop',
    created() {
      this.getToken()
    },
    data() {
      return {
        search: null,
        searchResult: []
      }
    },

    props: ['Departure'],

    methods: {
      getToken() {
        axios({
          method: 'post',
          url: 'https://api.vasttrafik.se/token',
          data: 'grant_type=client_credentials&scope=0',
          headers: {
            Authorization:
              'Basic NEtaRVoxU1BOb2NmSmxBZGRSdzk0YnNnVmZnYTpabHdSeDliVjVTUzhFR0ZRejJjMWVGV2JsOTRh', // Lägg in värdet från Västtrafik
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then((response) => {
          const result = response.data.access_token
          this.$store.commit('saveToken', result)
        })
      },

      findStop() {
        if (this.search.length === 3) {
          const search = this.search
          let searchResult = this.searchResult
          axios({
            method: 'get',
            url: `https://api.vasttrafik.se/bin/rest.exe/v2/location.name?input=${search}&format=json`,
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`
            }
          }).then((response) => {
            const result = response.data
            this.$store.commit('updateLocation', result)
            console.log(result)
          })
        }
      }
    }
  }
</script>
