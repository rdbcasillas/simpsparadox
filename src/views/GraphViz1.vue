<template>
  <div id="scatterplot"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  mounted() {
    // Sample data showing a negative correlation between money and happiness
    const data = [
      // Data for City A (Positive correlation)
      { money: 10, happiness: 2, city: "A" },
      { money: 20, happiness: 4, city: "A" },
      { money: 30, happiness: 6, city: "A" },
      { money: 40, happiness: 8, city: "A" },
      { money: 50, happiness: 10, city: "A" },

      // Data for City B (Positive correlation)
      { money: 60, happiness: 5, city: "B" },
      { money: 70, happiness: 6, city: "B" },
      { money: 80, happiness: 7, city: "B" },
      { money: 90, happiness: 8, city: "B" },
      { money: 100, happiness: 9, city: "B" },

      // Additional data to skew the overall correlation (Negative correlation)
      { money: 110, happiness: 3, city: "C" },
      { money: 120, happiness: 2, city: "C" },
      { money: 130, happiness: 1, city: "C" },
    ];

    // Set up SVG dimensions
    const width = 500;
    const height = 600;

    // Create SVG element
    const svg = d3
      .select("#scatterplot")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Create scales
    const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);

    const yScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);

    // Create circles for each data point
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.money))
      .attr("cy", (d) => yScale(d.happiness))
      .attr("r", 5)
      .attr("fill", "snow");

    // Create X-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Create Y-axis
    svg.append("g").call(d3.axisLeft(yScale));
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
