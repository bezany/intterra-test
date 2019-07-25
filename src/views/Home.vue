<template>
  <div class="home">
    <el-card
    style="width: 200px"
    :body-style="{ padding: '0px'}">
      <img
      height="200"
      src="https://cs9.pikabu.ru/post_img/big/2017/07/17/10/1500307763126196468.jpg" class="image">
      <div style="padding: 14px;">
        <span>Поле 123</span>
        <div class="bottom clearfix">
          <time class="time">123 га</time>
          <el-button type="text" class="button"
          @click="$router.push({ name: 'field', params: { fieldId: 123 } })"
          >Просмореть операции</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>
