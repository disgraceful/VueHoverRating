import { VRating } from 'vuetify/lib'
export const ExtendRating = {
    extends: VRating,
    name: "hover-rating",
    watch: {
        value(val) {
            this.internalValue = val;
            this.hoverIndex = val;
        }
    },
    methods: {
        createProps(index) {
            const props = {
                index: index,
                value: this.internalValue,
                click: this.createClickFn(index),
                isFilled: Math.floor(this.internalValue) > index,
                isHovered: Math.floor(this.hoverIndex) > index,
                mouseenter: this.createMouseEnterHandler(index),
                mouseleave: this.createMouseLeaveHandler(),
            }

            if (this.halfIncrements) {
                props.isHalfHovered = !props.isHovered && (this.hoverIndex - index) % 1 > 0
                props.isHalfFilled = !props.isFilled && (this.internalValue - index) % 1 > 0
            }
            return props
        },
        createMouseEnterHandler(index) {
            return (event) => {
                this.onMouseEnter(event, index);
            }
        },
        createMouseLeaveHandler() {
            return () => {
                if (this.internalValue <= 0) {
                    this.onMouseLeave();
                } else {
                    this.hoverIndex = this.internalValue
                }
            }
        },
    },
    created() {
        this.hoverIndex = this.internalValue;
    }
};

