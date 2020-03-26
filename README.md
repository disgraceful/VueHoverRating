## Description

Vuetify VRating component has slot for customizing icons

```html
 <v-rating>
    <template v-slot:item="props">
        <v-icon
          large
          @click="props.click"
        >
          {{ props.isFilled ? 'mdi-star-circle' : 'mdi-circle-outline' }}
        </v-icon>
    </template>
</v-rating>
```

However `mouseenter` and `mouseleave` events defined on the `VRating` component. Therefore even with `hover` property set to true, hover functionality will not be avaliable while using slots. I found two solutions (there are obviously more and better ones!).

### Use Vuetify VHover

This solution only provides visual effect of hover functionality, for rating logic (v-model, input event, etc) additional methods are required.

```html
<v-hover v-slot:default="{ hover }" v-for="i in 5" :key="i">
    <v-icon>
        {{ hover? "mdi-star" : "mdi-star-outline" }}
    </v-icon>
</v-hover>
```

### Extend Existing VRating component

Override `createProps` function by re-declaring it and add `mouseenter` and `mousleave` listeners to prop object. Same listeners used in parent VRating component

```js
import { VRating } from "vuetify/lib";
export const ExtendRating = {
  createProps(index) {
    const props = {
      //vuetify logic
      mouseenter: this.createMouseEnterHandler(index),
      mouseleave: this.createMouseLeaveHandler()
    };
    return props;
  }

  createMouseEnterHandler(index) {
    return (event) => {
        this.onMouseEnter(event, index);
    }
  },

  createMouseLeaveHandler() {
    return () => {
        this.onMouseLeave();
    }
   }
};
```

## More

Both ways can be used to implement more than simple hover functionality. For example add `VTooltip` to highlight rating value.

```html
<v-hover v-slot:default="{ hover }" v-for="i in 5" :key="i">
    <v-tooltip bottom>
       <template v-slot:activator="{ on }">
         <v-icon color="primary" v-on="on">
           {{ hover ? "mdi-star" : "mdi-star-outline" }}
         </v-icon>
       </template>
       <span>{{ i }}</span>
    </v-tooltip>
</v-hover>
```
