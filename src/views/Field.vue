<template>
  <div
  v-loading="loading"
  >
    <h3>Операции на поле {{ fieldId }}</h3>
    <div
    style="display:flex; justify-content: space-between; align-items: center;"
    >
      <div>
        <el-radio v-model="planned" :label="true">ЗАПЛАНИРОВАННЫЕ ОПЕРАЦИИ</el-radio>
        <el-radio v-model="planned" :label="false">ВЫПОЛНЕННЫЕ ОПЕРАЦИИ</el-radio>
      </div>
      <div>
        <el-button
        @click="$router.push({ name: 'new-operation' })"
        icon="el-icon-check"
        type="success"
        >Добавить операцию</el-button>
      </div>
    </div>
    
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
        :formatter="(row, column, cellValue) => dateFormatter(cellValue)"
        :sort-by="(row) => sortByDate(row.date)"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="type"
        label="Операция"
        :formatter="(row, column, cellValue) => typeFormatter(cellValue)"
        :sort-by="(row) => typeFormatter(row.type)"
        sortable
        >
      </el-table-column>
      <el-table-column
        label="Культура"
        sortable
        >
        <div>Пшеница</div>
      </el-table-column>
      <el-table-column
        prop="assessment"
        label="Качество"
        :sort-method="(a,b) => sortMethodAssessment(a.assessment, b.assessment)"
        sortable
        >
          <template v-slot="{ row, column, $index }">
            <AssessmentView
            :assessment="row.assessment"
            />
          </template>
      </el-table-column>
    </el-table>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  mapActions,
  mapGetters,
} from 'vuex';
import Operation, { OperationType, Assessment } from '@/models/Operation';
import TDate from '@/models/TDate';
import AssessmentView from '@/components/AssessmentView.vue';

@Component({
  components: {
    AssessmentView,
  },
  props: {
    fieldId: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    ...mapGetters(['plannedOperations', 'doneOperations']),
  },
  methods: {
    ...mapActions(['loadOperations']),
  },
})
export default class Field extends Vue {
  public loadOperations!: any;
  public plannedOperations!: Operation[];
  public doneOperations!: Operation[];
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

  get operations() {
    if (this.planned) {
      return this.plannedOperations;
    } else {
      return this.doneOperations;
    }
  }

  public dateFormatter(cellValue: TDate) {
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

  public typeFormatter(cellValue: OperationType) {
    return this.$t(OperationType[cellValue]);
  }

  public sortByDate(cellValue: TDate) {
    return cellValue.year * 10000 + cellValue.month * 100 + cellValue.day;
  }

  public sortMethodAssessment(a?: Assessment | null, b?: Assessment | null) {
    const aNil = a == null;
    const bNil = b == null;
    if (aNil && bNil) {
      return 0;
    }
    if (aNil) {
      return 1;
    }
    if (bNil) {
      return -1;
    }
    return (a as Assessment) - (b as Assessment);
  }
}
</script>

<style scoped>
.table /deep/ .table__clicked-row {
  cursor: pointer;
}
</style>
