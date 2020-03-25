<template>
    <div class="widgetbox">
        <div class="widgetbox-test">box</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class WidgetBox extends Vue {

}
</script>

<style lang="scss">
.widgetbox {
    position: absolute;
    // width: 200px;
    height: auto;
    z-index: 999;

    &-test {
        background: #fff;
        resize: both;
        overflow: auto;
    }
}
</style>