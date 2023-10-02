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
        <router-link to="/objective">Learning Objectives</router-link>
      </template>
      What are we trying to do here?
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>
        <router-link to="/surgeon"
          >Helping Uncle pick the right surgeon</router-link
        >
      </template>
      Your uncle needs to undergo a knee replacement surgery. Can you help them
      choose the right surgeon?
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>
        <router-link to="/graphviz1"
          >What’s wrong with people of Paradoxia?
        </router-link>
      </template>
      Are the people in this city becoming unhappy with increasing income?
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>
        <router-link to="/"
          >Unpacking the data from your lemonade business</router-link
        >
      </template>
      Is it really a paradox? Let's deconstruct it by better understanding the
      data from your lemonade business.
    </WelcomeItem>
  </div>
</template>
