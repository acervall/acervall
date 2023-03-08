<style></style>

<template>
  <div class="p-3">
    <template v-if="this.$store.state.LocationList !== []">
      <ul id="stopSelector" class="list-group list-group-flush">
        <li
          v-for="stop in this.$store.state.StopLocation"
          :key="stop"
          @click="selectStop(stop.id)"
          class="list-group-item"
        >
          <RouterLink to="/departures/:id" class="list-group-item-action link">
            {{ stop.name }}
          </RouterLink>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'StopSelector',
    data() {
      return {
        departuresResult: null
      }
    },
    methods: {
      selectStop(id) {
        this.$store.commit('clearDeparture')
        let today = new Date()
        let date =
          today.getFullYear() +
          '-' +
          ('0' + (today.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + today.getDate()).slice(-2)
        let time = today.getHours() + '%3A' + today.getMinutes()
        axios({
          method: 'get',
          url: `https://api.vasttrafik.se/bin/rest.exe/v2/departureBoard?id=${id}&date=${date}&time=${time}&format=json`,
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`
          }
        })
          .then((response) => {
            this.departuresResult = response.data
            this.$store.commit('searchDepartures', this.departuresResult)
            this.$router.push(`/departures/${id}`)
            console.log('här', this.departuresResult)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    emits: ['select']
  }
</script>

<!--
  journeyNumber: Number,
  type: String,
  stopid: Number,
  stop: String,
  time: String,
  date: String,
  journeyid: Number,
  direction: String,
  track: String,
  rtTime: String,
  rtDate: String,
  fgColor: String,
  bgColor: String,
  stroke: String,
  accessibility: String,
  JourneyDetailRef: Object
}

{
  "DepartureBoard": {
    "noNamespaceSchemaLocation": "http://api.vasttrafik.se/v1/hafasRestDepartureBoard.xsd",
    "servertime": "15:32",
    "serverdate": "2023-02-10",
    "Departure": [
      {
        "name": "Spårvagn 1",
        "sname": "1",
        "journeyNumber": "141",
        "type": "TRAM",
        "stopid": "9022014001950002",
        "stop": "Centralstationen, Göteborg",
        "time": "15:27",
        "date": "2023-02-10",
        "journeyid": "9015014500100141",
        "direction": "Östra Sjukhuset",
        "track": "B",
        "rtTime": "15:32",
        "rtDate": "2023-02-10",
        "fgColor": "#006C93",
        "bgColor": "#FFFFFF",
        "stroke": "Solid",
        "accessibility": "wheelChair",
        "JourneyDetailRef": {
          "ref": "https://api.vasttrafik.se/bin/rest.exe/v2/journeyDetail?ref=598989%2F205952%2F582498%2F91586%2F80%3Fdate%3D2023-02-10%26station_evaId%3D1950002%26station_type%3Ddep%26format%3Djson%26"
        }
      },
    ]
  }
}
-->
