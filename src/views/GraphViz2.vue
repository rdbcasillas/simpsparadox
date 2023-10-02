<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <div id="d3-container"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  mounted() {
    // Read the CSV file
    d3.csv("./admission_data_berkeley.csv").then((data) => {
      this.generateVisualization(data);
    });
  },
  methods: {
    generateVisualization(data) {
      console.log(data);
      // Calculate the overall admission rates by gender
      const genderData = d3.rollup(
        data,
        (v) => d3.mean(v, (d) => d.admitted),
        (d) => d.gender
      );

      const admissionData = Array.from(genderData, ([key, value]) => ({
        gender: key,
        admission_rate: value * 100,
      }));

      // Set up SVG dimensions
      const width = 300;
      const height = 200;
      const margin = { top: 20, right: 20, bottom: 50, left: 50 };

      // Create SVG container
      const svg = d3
        .select("#d3-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Create scales
      const xScale = d3
        .scaleBand()
        .domain(admissionData.map((d) => d.gender))
        .range([0, width])
        .padding(0.3);

      const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

      // Add axes
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

      svg.append("g").call(d3.axisLeft(yScale));

      // Add bars
      svg
        .selectAll(".bar")
        .data(admissionData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.gender))
        .attr("y", (d) => yScale(d.admission_rate))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - yScale(d.admission_rate));

      // Add labels, titles, or other SVG elements as needed
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.bar {
  fill: snow;
}
</style>
