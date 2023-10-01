<template>
  <b-container class="learning-objective" fluid>
    <b-row>
      <b-col>
        <h1 class="display-4">Learning Objective</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <b-card-text>
            <p>
              The primary goal of this learning experience is to equip students
              with a comprehensive understanding of Simpson's Paradox. By the
              end of this lesson, students will be able to:
            </p>
            <b-list-group>
              <b-list-group-item>
                <strong>
                  Understand and articulate what Simpson's Paradox is</strong
                >, including its mathematical and statistical underpinnings.
                Students should be able to explain why this paradox occurs and
                the conditions that give rise to it.
              </b-list-group-item>
              <b-list-group-item>
                <strong>
                  Develop the skill to immediately recognize situations,
                  particularly in data analysis and interpretation </strong
                >, where Simpson's Paradox could potentially distort or mislead
                conclusions. Students should be equipped to critically evaluate
                data in such scenarios.
              </b-list-group-item>
              <b-list-group-item>
                <strong>
                  Familiarize themselves with real-world examples where
                  Simpson's Paradox manifests </strong
                >. This includes but is not limited to fields like healthcare,
                economics, and social sciences. Students should be able to
                identify and discuss instances of the paradox in various
                contexts.
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
// You can add any script logic here if needed
</script>

<style scoped>
/* Add your styles here */

.learning-objective {
  padding: 20px;
  width: 1000px;
}

.card-body {
  background-color: black !important;
}

/* Style for list group items */
.list-group-item {
  background-color: black;
  font-size: 20px !important;
  color: snow;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: var(--color-text);
  border-color: var(--color-border);
}

p {
  background-color: black;
  font-size: 20px !important;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: var(--color-text);
  border-color: var(--color-border);
}

.list-group-item:hover {
  background-color: var(--color-background-mute);
}
</style>
