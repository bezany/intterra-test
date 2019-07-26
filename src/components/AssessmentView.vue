<template>
  <div
  style="display: flex; align-items: center;"
  >
    <div
    :style="iconStyle"
    ></div>
    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Assessment } from '@/models/Operation';

@Component({})
export default class AssessmentView extends Vue {
  @Prop()
  public assessment!: Assessment;
  // computed
  get name() {
    if (this.assessment == null) {
      return 'Нет оценки';
    }
    return this.$t(Assessment[this.assessment]);
  }

  get iconStyle() {
    const colorMap: {
      [index in Assessment]: string
    } = {
      0: 'green',
      1: 'yellow',
      2: 'red',
    };
    return {
      'width': '20px',
      'height': '10px',
      'border-radius': '5px',
      'background-color': colorMap[this.assessment] || 'gray',
      'margin-right': '10px',
    };
  }
}
</script>
