<script setup lang="ts">
import {SongRequest} from '@/api';
import {TopSongerListItem} from "@/types/song";
import {onMounted, ref} from 'vue';



// const value = ref<string>('50');

// function requestClick() {
//   const val:string|number =  value.value;
//   SongRequest.getSongItemById(val).then(res=> {
//     console.log(res);
//   });
// }

const songerList = ref<TopSongerListItem[]|[]>([]);

async function getSongerList() {
  await SongRequest.getTopSongerList(1).then(res=> {
    console.log(res);
    songerList.value = res.list?.artists||[];
    console.log(songerList.value);
  }).catch(e=> {
    console.log(e);
  });
}

onMounted(()=> {
  // 获取歌手列表
  getSongerList();
});
</script>
<template>
<!--<n-button color="#8a2be2" type="primary" secondary>这是一个按钮</n-button>-->
  <n-space vertical>
    <div class="my-songer-container">
      <div class="my-grid-songer-item" v-for="songer in songerList" :key="songer.id">
        <n-image lazy :src="songer.img1v1Url" object-fit="contain" height="120"></n-image>
        {{songer.name}}
      </div>
    </div>
  </n-space>
</template>

<style lang="scss">
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
.my-songer-container{
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.my-grid-songer-item{
  padding:8px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>