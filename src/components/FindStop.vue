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

    methods: {
      getToken() {
        console.log('get token')
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
          //this.$store.commit('saveToken', result)
          this.setToken(result)
        })
      },

      setToken(result) {
        console.log('commit token from find stop, starting timer')
        this.$store.commit('saveToken', result)
        setTimeout(() => {
          console.log('resetToken from Findstop timeout')
          //this.$store.commit('resetToken')
          this.getToken()
          this.$router.push('/home')
        }, 3600000)
        /* 3600000 */
      },

      findStop() {
        if (this.search.length > 2) {
          const search = this.search
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
