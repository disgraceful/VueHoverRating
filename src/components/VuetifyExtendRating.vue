<template>
  <extend-rating
    :value="value"
    @input="$emit('input', $event.target.value)"
    extend
  >
    <template v-slot:item="props">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon
            :color="
              props.isFilled || props.isextended ? 'teal' : 'grey lighten-1'
            "
            large
            @click="props.click"
            @mouseenter="props.mouseenter"
            @mouseleave="props.mouseleave"
            v-on="on"
          >
            {{ props.isextended ? "mdi-heart" : "mdi-heart-outline" }}
          </v-icon>
        </template>
        <span>{{ props.index + 1 }}</span>
      </v-tooltip>
    </template>
  </extend-rating>
</template>

<script>
import { ExtendRating } from "../ExtendRating";
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  components: {
    "extend-rating": ExtendRating
  }
};
</script>
