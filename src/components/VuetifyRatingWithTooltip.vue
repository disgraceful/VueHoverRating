<template>
  <hover-rating v-model="rating" hover>
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
  data() {
    return {
      rating: 2
    };
  }
};
</script>
