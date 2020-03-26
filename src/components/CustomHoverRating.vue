<template>
  <div class="d-flex">
    <!-- <v-hover
      v-slot:default="{ hover }"
      v-for="i in 5"
      :key="i"
      open-delay="200"
      close-delay="200"
    >
      <v-tooltip bottom color="#757575">
        <template v-slot:activator="{ on }">
          <v-icon
            color="primary"
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
    </v-hover> -->
    
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  watch: {
    value(val) {
      this.hovered = val;
    }
  },
  data() {
    return {
      rating: 0,
      hovered: 0
    };
  },
  methods: {
    hoverMe(i) {
      this.hovered = i;
    },
    unhoverMe() {
      this.hovered = this.rating || 0;
    },
    clickMe() {
      this.rating = this.hovered;
      this.$emit("input", this.rating);
    }
  },
  created() {
    this.hovered = this.value;
  }
};
</script>
