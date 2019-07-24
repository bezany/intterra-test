<template>
  <el-dialog
    title="Операция"
    visible
    width="30%"
    @close="close"
    class="dialog-panel"
    custom-class="inner-dialog"
    top="0"
    >
    Operation {{ operationId }}
    fieldId: {{ fieldId }}
    <span slot="footer">
      <el-button type="success"
      >Добавить операцию</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component({})
export default class Operation extends Vue {
  @Prop()
  public operationId!: string;
  @Prop()
  public fieldId!: string;

  public close() {
    this.$router.push({ name: 'field', params: { fieldId: this.fieldId }});
  }
}
</script>

<style scoped>
.dialog-panel /deep/ .inner-dialog {
  margin: 0;
  height: 100%
}
</style>
