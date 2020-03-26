<template>
  <v-app>
    <v-container class="px-6">
      <v-row align="center">
        <v-col cols="auto">
          <v-text-field
            label="Change rating"
            v-model.number="rating"
          ></v-text-field>
        </v-col>
        <v-col>Rating: {{ rating }}</v-col>
      </v-row>
      <v-col>
        <vue-rating-tooltip v-model="numericRating"></vue-rating-tooltip>
      </v-col>
      <v-col>
        <custom-rating v-model="numericRating"></custom-rating>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import TooltipRating from "./components/VuetifyRatingWithTooltip";
import HoverRating from "./components/CustomHoverRating";
export default {
  data() {
    return {
      rating: 3
    };
  },
  computed: {
    numericRating() {
      return this.rating ? +this.rating : 0;
    }
  },
  components: {
    "vue-rating-tooltip": TooltipRating,
    "custom-rating": HoverRating
  }
};
</script>
