<script setup lang="ts">
import { h, ref, Component } from 'vue';
import {darkTheme, NIcon} from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import {
  BookOutline as BookIcon,
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  Sunny as SunIcon
} from '@vicons/ionicons5';
import {
  IosMoon as MoonIcon,
} from '@vicons/ionicons4';
import {
  UserAvatar as UserIconLine
} from '@vicons/carbon';
import {BuiltInGlobalTheme} from "naive-ui/lib/themes/interface";
import {menuOptions as preyMenuOptions} from "@/router/menuRoute";

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = ref<MenuOption[]>(preyMenuOptions);
const topMenuOptions = [
  {
    label: '帮助',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
];
const inverted = ref(false);

const darkThemeIns = ref<null | BuiltInGlobalTheme>(null);
const isDark = ref(false);

// 主题改变
function themeChange() {
  if(isDark.value){
  //   启用暗黑主题
    inverted.value = true;
    darkThemeIns.value = darkTheme;
  }else{
  //   启用浅色主题
    inverted.value = false;
    darkThemeIns.value = null;
  }
}
const dropdownOptions = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
];
const activeMenu = ref('');
setTimeout(()=> {
  activeMenu.value = 'music';
},0);
</script>
<template>
  <n-config-provider :theme="darkThemeIns">
    <n-space vertical :style="{
    height:'100%'
  }" class="my-global-space">
        <n-layout>
          <n-layout-header :inverted="inverted" bordered>
            <div class="my-top-menu" style="overflow: hidden">
              <div class="fe-fr flex-box">
                <n-menu mode="horizontal" :inverted="inverted" :options="topMenuOptions" />
                <n-switch v-model:value="isDark" @update:value="themeChange">
                  <template #checked>
                    <n-icon>
                      <MoonIcon></MoonIcon>
                    </n-icon>
                  </template>
                  <template #unchecked>
                    <n-icon color="#fffc75">
                      <SunIcon></SunIcon>
                    </n-icon>
                  </template>
                </n-switch>
                <span style="margin-left:8px;margin-right:8px">
                  <n-dropdown :options="dropdownOptions">
                    <n-avatar round size="small" class="flex-box">
                      <n-icon size="24">
                        <user-icon-line></user-icon-line>
                      </n-icon>
                    </n-avatar>
                </n-dropdown>
                </span>

              </div>
            </div>
          </n-layout-header>
          <n-layout has-sider class="my-layout">
            <n-layout-sider
                bordered
                class="my-layout-side"
                show-trigger
                collapse-mode="width"
                :collapsed-width="4"
                :width="240"
                :native-scrollbar="false"
                :inverted="inverted"
                :show-collapsed-content="false"
                style="height:100%"
            >
              <n-menu
                  :inverted="inverted"
                  :collapsed-width="64"
                  :collapsed-icon-size="22"
                  :options="menuOptions"
                  accordion
                  default-value="music"
                  v-model:value="activeMenu"
                  default-expand-all
              />
            </n-layout-sider>
            <n-layout class="my-main-content">
              <n-scrollbar max-height="calc(100vh - 66px)">
                <!--          主要窗口区域-->
                <router-view></router-view>
              </n-scrollbar>
            </n-layout>
          </n-layout>
          <n-layout-footer :inverted="inverted" bordered>
            <p style="text-align:center">川ICP</p>
          </n-layout-footer>
        </n-layout>
    </n-space>
  </n-config-provider>

</template>
<style lang="scss">
.my-global-space{
  overflow-y:hidden;
}
.my-main-content{
  height: 100%;
}
.my-layout{
  height: calc(100vh - 66px)
}
.my-layout-side{
  height:100%
}
.my-avatar{
  width:24px
}
</style>