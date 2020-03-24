<template>
  <v-app>
    <v-container class="text-center">
      <v-col>
        <vue-rating-tooltip></vue-rating-tooltip>
      </v-col>
      <v-col>
        <custom-rating></custom-rating>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import TooltipRating from "./components/VuetifyRatingWithTooltip";
import HoverRating from "./components/CustomHoverRating";
export default {
  components: {
    "vue-rating-tooltip": TooltipRating,
    "custom-rating": HoverRating
  }
};
</script>
