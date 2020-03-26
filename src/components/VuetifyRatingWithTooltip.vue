<template>
  <hover-rating
    :value="value"
    @input="$emit('input', $event.target.value)"
    hover
  >
    <template v-slot:item="props">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon
            :color="
              props.isFilled || props.isHovered ? 'teal' : 'grey lighten-1'
            "
            large
            @click="props.click"
            @mouseenter="props.mouseenter"
            @mouseleave="props.mouseleave"
            v-on="on"
          >
            {{ props.isHovered ? "mdi-heart" : "mdi-heart-outline" }}
          </v-icon>
        </template>
        <span>{{ props.index + 1 }}</span>
      </v-tooltip>
    </template>
  </hover-rating>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>
