<template>
  <div
  v-loading="loading"
  >
    Field {{ fieldId }}
    <el-button
    @click="$router.push({ name: 'operation', params: { operationId: 1 } })"
    >Show oper 1</el-button>
    <el-table
      :data="operations"
      row-key="id"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="date">
      </el-table-column>
      <el-table-column
        prop="type"
        label="type">
      </el-table-column>
      <el-table-column
        prop="area"
        label="area">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="comment">
      </el-table-column>
      <el-table-column
        prop="assessment"
        label="assessment">
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

  public async mounted() {
    this.loading = true;
    await this.loadOperations();
    this.loading = false;
  }
}
</script>
