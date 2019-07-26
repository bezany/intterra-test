<template>
  <el-dialog
    :title="operationId == null ? 'Создание операции' : 'Редактирование операции'"
    visible
    width="30%"
    @close="close"
    class="dialog-panel"
    custom-class="inner-dialog"
    top="0"
    >
    <div>Операция: {{ operationId }}</div>
    <div>Поле: {{ fieldId }}</div>
    <el-form :model="operation" label-width="120px">
       <el-form-item label="Комментарий">
        <el-input type="textarea" v-model="operation.comment"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button type="success"
      >Сохранить операцию</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Operation, { OperationType, Assessment } from '@/models/Operation';
import {
  mapActions,
} from 'vuex';

@Component({
  methods: {
    ...mapActions(['operationById']),
  },
})
export default class OperationEdit extends Vue {
  @Prop()
  public operationId!: string;
  @Prop()
  public fieldId!: string;
  public operationById!: any;
  public operation: object = {};
  public close() {
    this.$router.push({ name: 'field', params: { fieldId: this.fieldId }});
  }
  public async mounted() {
    this.operation = (await this.operationById(this.operationId)) || {};
  }
}
</script>

<style scoped>
.dialog-panel /deep/ .inner-dialog {
  margin: 0;
  height: 100%
}
</style>
