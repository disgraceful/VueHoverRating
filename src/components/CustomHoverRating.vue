<template>
  <div>
    <v-hover v-slot:default="{ hover }" v-for="i in 5" :key="i">
      <v-tooltip bottom color="#757575">
        <template v-slot:activator="{ on }">
          <v-icon
            color="primary"
            class="pl-1"
            v-on="on"
            @mouseover="hoverMe(i)"
            @mouseleave="unhoverMe"
            @click="clickMe"
          >
            {{ hover || hovered >= i ? "mdi-star" : "mdi-star-outline" }}
          </v-icon>
        </template>
        <span>{{ i }}</span>
      </v-tooltip>
    </v-hover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      hovered: 0,
      clicked: false
    };
  },
  methods: {
    hoverMe(i) {
      this.hovered = i;
    },
    unhoverMe() {
      if (!this.clicked) {
        this.hovered = this.rating || 0;
      }
    },
    clickMe() {
      this.clicked = true;
      this.rating = this.hovered;
    },
    clear() {
      this.hovered = 0;
      this.rating = 0;
    }
  }
};
</script>
