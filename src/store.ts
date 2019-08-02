import Vue from 'vue';
import Vuex from 'vuex';
// import FieldService from './FieldService';
import * as FieldService from './FieldService.js';
import Operation, { OperationType, Assessment } from './models/Operation';

Vue.use(Vuex);

// const fieldService = new FieldService();
const fieldService: any = {
  ...FieldService,
};

export default new Vuex.Store({
  state() {
    return {
      operations: [],
    };
  },
  mutations: {
    setOperations(state: any, operations: Operation[]) {
      state.operations = operations;
    },
  },
  actions: {
    async loadOperations({ commit }): Promise<void> {
      const operations = await fieldService.getOperations();
      commit('setOperations', operations);
    },
    async operationById({ }, operId) {
      return fieldService.getOperation(operId);
    },
  },
  getters: {
    plannedOperations(state) {
      return state.operations.filter((el: Operation) => {
        return el.assessment == null;
      });
    },
    doneOperations(state) {
      return state.operations.filter((el: Operation) => {
        return el.assessment != null;
      });
    },
  },
});
