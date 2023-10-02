<template>
  <b-container class="surgeonpage">
    <b-row>
      <b-col>
        <h1>Help Your Uncle Choose a Surgeon</h1>
        <p>
          Imagine your Uncle needs a knee replacement surgery. You're helping
          them choose a surgeon based on readmission rates after five years.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <!-- Surgeon A Card -->
      <b-col md="6">
        <b-card
          title="Surgeon A"
          img-src="./surgeon1.jpg"
          img-alt="Image"
          img-height="250px"
          img-top
          tag="article"
          style="max-width: 20rem; max-height: 40rem"
          class="mb-2"
        >
          <b-card-text>
            78% of knee surgeries performed don't need further repair for next 5
            years
          </b-card-text>
        </b-card>
      </b-col>
      <!-- Surgeon B Card -->
      <b-col md="6">
        <b-card
          title="Surgeon B"
          img-src="./surgeon2.jpg"
          img-alt="Image"
          img-height="250px"
          img-top
          tag="article"
          style="max-width: 20rem; max-height: 40rem"
          class="mb-2"
        >
          <b-card-text>
            83% of knee surgeries performed don't need further repair for next 5
            years
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <!-- User Choice -->
    <b-row>
      <b-col>
        <p>Which surgeon would you choose for your Uncle's knee surgery?</p>
        <b-form-radio-group v-model="selectedSurgeon">
          <b-form-radio value="Surgeon A" @change="updateSelectedSurgeon"
            >Surgeon A</b-form-radio
          >
          <b-form-radio value="Surgeon B" @change="updateSelectedSurgeon"
            >Surgeon B</b-form-radio
          >
          <b-form-radio value="notsure" @change="updateSelectedSurgeon"
            >Can't Say
          </b-form-radio>
        </b-form-radio-group>

        <b-button @click="showRealDataFunc = true">See Detailed Data</b-button>
      </b-col>
    </b-row>
    <!-- Real Data Visualization -->
    <b-row>
      <b-col>
        <h2>Here's the Real Data</h2>
        <!-- Insert Data Visualization for Combined, Robotic, and Manual Surgeries -->
        <b-table :fields="fields" :items="items" striped>
          <template slot="treatment" slot-scope="data">
            <div class="d-flex justify-content-center">
              <div>Stone Size</div>
              <div class="ml-auto">Treatment</div>
            </div>
          </template>
          <template slot="treatmentA" slot-scope="data">
            <div>
              <strong>Group {{ data.item.groupA }}</strong
              ><br />
              {{ data.item.treatmentA }}
            </div>
          </template>
          <template slot="treatmentB" slot-scope="data">
            <div>
              <strong>Group {{ data.item.groupB }}</strong
              ><br />
              {{ data.item.treatmentB }}
            </div>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <h4>What does the tabular data highlight?</h4>
      <div>
        <p>
          At first glance, based on the overall success rates of readmissions
          after a year, Surgeon B seemed to be the better choice for knee
          replacement surgeries. The initial data suggested that patients
          operated on by Surgeon B were less likely to be readmitted within a
          year, making Surgeon B appear more skilled.
        </p>

        <p>
          However, when we dig deeper into the data and separate it based on the
          type of surgery—robotic or manual—the story changes dramatically. The
          more detailed table reveals that Surgeon A actually has a higher
          success rate in both types of surgeries when compared to Surgeon B.
        </p>

        <p>
          So, while the combined data initially led us to believe that Surgeon B
          was the better option, a closer look shows that Surgeon A is, in fact,
          more successful in both robotic and manual knee surgeries. This is a
          classic example of Simpson's Paradox, where aggregated data can lead
          to a misleading conclusion that is reversed when the data is separated
          into meaningful categories.
        </p>

        <p>
          This underscores the importance of examining data in detail and
          considering hidden variables before making any decisions or judgments.
        </p>
      </div>
    </b-row>
    <b-row>
      <h5>
        Next, let's look at another situation where even graphical data can be
        potentially misleading.
      </h5>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selectedSurgeon: null,
      showRealData: false,
      fields: [
        { key: "treatment", label: "Surgeon/Type" },
        { key: "treatmentA", label: "Surgeon A", tdClass: "sur1" },
        { key: "treatmentB", label: "Surgeon B" },
      ],
      items: [
        {
          treatment: "Manual Surgeries",
          groupA: 1,
          treatmentA: "93% (81/87)",
          groupB: 2,
          treatmentB: "87% (234/270)",
        },
        {
          treatment: "Robotic Surgeries",
          groupA: 3,
          treatmentA: "73% (192/263)",
          groupB: 4,
          treatmentB: "69% (55/80)",
        },
        {
          treatment: "Both",
          treatmentA: "78% (273/350)",
          treatmentB: "83% (289/350)",
        },
      ],
    };
  },
  methods: {
    updateSelectedSurgeon(surgeon) {
      this.selectedSurgeon = surgeon;
      console.log("user selected", surgeon);
    },
    showRealDataFunc() {
      this.showRealData = true;
    },
  },
};
</script>

<style>
.card-text,
.card-title {
  color: black;
}
.surgeonpage {
  padding: 20px;
  width: 1000px;
}
.table {
  color: snow;
}
.sur1 {
  font-weight: bold;
}
</style>
