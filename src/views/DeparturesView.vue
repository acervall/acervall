<style scoped lang="scss">
  #background {
    background: url(../../assets/img/landscape2.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    position: fixed;
  }
  #title {
    height: 30vh;
    position: fixed;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 0;
    h1 {
      font-size: 1em;
      text-align: center;
    }
  }
  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }

  .popupoverlay {
    margin-top: 50vh;
    position: relative;
  }
</style>

<template>
  <template v-if="this.$store.state.Departure != null">
    <div id="background">
      <div id="title">
        <h1>
          {{ this.$store.state.Departure[0].stop }}
        </h1>
      </div>
      <div class="popupoverlay">
        <div id="content">
          <table>
            <tr>
              <th>Linje</th>
              <th>Mot</th>
              <th>Tid</th>
              <th>Läge</th>
            </tr>
            <tr
              :key="journey.id"
              v-for="journey in this.$store.state.Departure"
            >
              <th>{{ journey.sname }}</th>
              <th>{{ journey.direction }}</th>
              <th>{{ journey.time }}</th>
              <th>{{ journey.track }}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
  export default {
    data() {
      return {
        backHome: this.$store.state.Departure
      }
    },
    created() {
      if (this.$store.state.Departure === null) {
        this.$router.push('/home')
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
