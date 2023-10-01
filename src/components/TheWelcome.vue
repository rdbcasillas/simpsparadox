<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <div>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>
        <router-link to="/objective">Learning Objective</router-link>
      </template>
      What are we trying to do here?
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>
        <router-link to="/surgeon">Helping a friend</router-link>
      </template>
      A friend needs to undergo knee replacement surgery. Can you help them
      choose the right surgeon?
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>
        <router-link to="/surgeon">More money = less happiness? </router-link>
      </template>
      Are the people in this city becoming unhappy with increasing income?
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>
        <router-link to="/surgeon">Is it really a paradox though? </router-link>
      </template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its
      sustainability. You can help us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a
      >.
    </WelcomeItem>
  </div>
</template>
