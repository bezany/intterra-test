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
    <el-form :model="operation" label-width="120px">
       <el-form-item label="Activity form">
        <el-input type="textarea" v-model="operation.comment"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button type="success"
      >Добавить операцию</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Operation, { OperationType, Assessment } from '@/models/Operation';

@Component({})
export default class OperationEdit extends Vue {
  @Prop()
  public operationId!: string;
  @Prop()
  public fieldId!: string;
  public operation: object = {};
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
