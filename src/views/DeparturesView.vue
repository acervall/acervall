<style scoped lang="scss">
  #background {
    background: url(../../assets/img/landscape3.jpg);
    background-size: 120vw;
    background-repeat: no-repeat;
    position: fixed;
    background-position-x: center;
    top: 0;
    width: 100vw;
    height: 40vh;
    z-index: -2;
  }
  #placeholder {
    height: 30vh;
    position: relative;
  }
  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }

  .content {
    padding-bottom: 10vh;
    padding-top: 3vh;
    background-color: #ffffff;
    overflow: scroll;
    border-radius: 6vh 6vh 0 0;
    width: 100vw;
    h1 {
      font-size: 1.2rem;
    }

    th {
      padding: 0 2vw;
      background-color: #b4cfc9;
      font-size: 0.9rem;
      height: 3vh;
      border-top: 2px solid #89b5ab;
      color: #205247;
    }
    td {
      padding: 0 2vw;
      height: 5vh;
      #sname {
        width: 90%;
        height: 80%;
        background-color: #205247;
        border-radius: 3px;
      }
    }
  }

  #depfil {
    margin: auto;
    width: 70%;
    button {
      background-color: transparent;
      font-size: 0.8rem;
      font-weight: 500;
      color: #808080;
    }
    .active {
      color: #89b5ab;
    }
  }
  #line {
    border: 2px solid #89b5ab;
    width: 25vw;
    height: 0;
    background-color: #89b5ab;
    border-radius: 5px;
  }

  .arrowicon {
    width: 3rem;
    height: 3rem;
    position: fixed;
    svg {
      path {
        fill: #ffffff;
      }
    }
  }
  #arrow {
    z-index: -2;
  }
  #arrowbtn {
    background-color: transparent !important;
  }
</style>

<template>
  <template v-if="this.$store.state.Departure != null">
    <div id="background"></div>

    <div id="placeholder">
      <svg
        class="arrowicon m-3"
        id="arrow"
        viewBox="0 0 320 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        />
      </svg>
      <button
        id="arrowbtn"
        class="selected m-3 arrowicon"
        @click="backHome()"
      ></button>
    </div>
    <!-- class="popupoverlay" -->
    <div class="content">
      <div class="d-flex justify-content-around mb-2" id="depfil">
        <button class="selected active">
          Departures
          <div id="line"></div>
        </button>
        <button class="selected">Filter</button>
      </div>

      <!-- id="content" -->
      <div id="board">
        <h1 class="m-3">{{ title }}</h1>
        <table class="table table-striped align-middle">
          <tr>
            <th>Linje</th>
            <th>Mot</th>
            <th>Tid</th>
            <th>Läge</th>
          </tr>
          <tbody>
            <tr
              :key="journey.id"
              v-for="journey in this.$store.state.Departure"
            >
              <td>
                <div
                  class="d-flex align-items-center justify-content-center"
                  id="sname"
                  :style="{
                    color: journey.fgColor,
                    'background-color': journey.bgColor
                  }"
                >
                  {{ journey.sname }}
                </div>
              </td>
              <td>{{ journey.direction }}</td>
              <td>{{ journey.time }}</td>
              <td>{{ journey.track }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        Departure: this.$store.state.Departure,
        departuresResult: null,
        title: null
        //this.$store.state.Departure[0].stop
      }
    },
    created() {
      console.log(this.$route.params.id)
      this.selectStop(this.$route.params.id)
      /*       if (this.$store.state.Departure === null) {
        this.$router.push('/home')
      }
      */
    },

    watch: {
      departuresResult() {
        if (
          this.$store.state.Departure != [] ||
          this.$store.state.Departure != null
        ) {
          this.title = this.$store.state.Departure[0].stop
        }
      }
    },

    methods: {
      backHome() {
        console.log('go back')
        this.$router.push('/home')
      },

      selectStop(id) {
        console.log('kör selectStop')
        this.$store.commit('clearDeparture')
        let today = new Date()
        let date =
          today.getFullYear() +
          '-' +
          ('0' + (today.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + today.getDate()).slice(-2)
        let time = today.getHours() + '%3A' + today.getMinutes()
        console.log(id, date, time, this.$store.state.token)
        axios({
          method: 'get',
          url: `https://api.vasttrafik.se/bin/rest.exe/v2/departureBoard?id=${id}&date=${date}&time=${time}&format=json`,
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`
          }
        })
          .then((response) => {
            this.departuresResult = response.data
            const stop = this.departuresResult.DepartureBoard.Departure[0].stop
            this.$store.commit('searchDepartures', this.departuresResult)
            this.$router.push(`/departures/${id}`)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<!--


-- API RESULT --


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
