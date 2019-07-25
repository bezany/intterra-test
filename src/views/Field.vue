<template>
  <div
  v-loading="loading"
  >
    <h3>Операции на поле {{ fieldId }}</h3>
    <el-radio v-model="planned" :label="true">ЗАПЛАНИРОВАННЫЕ ОПЕРАЦИИ</el-radio>
    <el-radio v-model="planned" :label="false">ВЫПОЛНЕННЫЕ ОПЕРАЦИИ</el-radio>
    <el-button
    @click="$router.push({ name: 'new-operation' })"
    >Добавить операцию</el-button>
    <el-table
      class="table"
      :data="operations"
      @row-click="rowClick"
      row-key="id"
      style="width: 100%"
      rowClassName='table__clicked-row'
      >
      <el-table-column
        prop="date"
        label="Дата"
        :formatter="dateFormatter"
        >
      </el-table-column>
      <el-table-column
        prop="type"
        label="Операция"
        :formatter="typeFormatter"
        >
      </el-table-column>
      <el-table-column
        label="Культура">
        <div>Пшеница</div>
      </el-table-column>
      <el-table-column
        prop="assessment"
        label="Качество">
      </el-table-column>
    </el-table>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  mapActions,
  mapState,
} from 'vuex';
import Operation, { OperationType, Assessment } from '@/models/Operation';
import TDate from '@/models/TDate';

@Component({
  props: {
    fieldId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(['operations']),
  },
  methods: {
    ...mapActions(['loadOperations']),
  },
})
export default class Field extends Vue {
  public loadOperations!: any;
  public operations!: Operation[];
  public loading: boolean = false;
  public planned: boolean = true;
  public async mounted() {
    this.loading = true;
    await this.loadOperations();
    this.loading = false;
  }
  public rowClick(row: any) {
    this.$router.push({ name: 'operation', params: { operationId: row.id } });
  }
  public dateFormatter(row: any, column: any, cellValue: TDate) {
    interface IMap {
        [key: number]: string;
    }
    const monthMap: IMap = {
      1: 'ЯНВ',
      2: 'ФЕВ',
      3: 'МАР',
      4: 'АПР',
      5: 'МАЙ',
      6: 'ИЮН',
      7: 'ИЮЛ',
      8: 'АВГ',
      9: 'СЕН',
      10: 'ОКТ',
      11: 'НОЯ',
      12: 'ДЕК',
    };
    return `${cellValue.day} ${monthMap[cellValue.month]} ${cellValue.year}`;
  }
  public typeFormatter(row: any, column: any, cellValue: OperationType) {
    return OperationType[cellValue];
  }
}
</script>

<style scoped>
.table /deep/ .table__clicked-row {
  cursor: pointer;
}
</style>
