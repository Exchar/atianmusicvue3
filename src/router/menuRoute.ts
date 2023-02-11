import {MenuOption, NIcon} from "naive-ui";
import {Component, h} from "vue";
import {RouterLink} from "vue-router";
import {LibraryMusicRound as MusicIcon} from "@vicons/material";
import {
  BookOutline as BookIcon,
  PersonCircleOutline as UserIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from "@vicons/ionicons5";
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
export const menuOptions:MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Home',
            params: {
            }
          }
        },
        { default: () => '云村' }
      ),
    key: 'music',
    icon: renderIcon(MusicIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'MyMusic',
            params: {
            }
          }
        },
        { default: () => '我的' }
      ),
    key: 'mine',
    icon: renderIcon(UserIcon)
  },
  // {
  //   label: '1973年的弹珠玩具',
  //   key: 'pinball-1973',
  //   icon: renderIcon(BookIcon),
  //   disabled: true,
  //   children: [
  //     {
  //       label: '鼠',
  //       key: 'rat'
  //     }
  //   ]
  // },
  // {
  //   label: '寻羊冒险记',
  //   key: 'a-wild-sheep-chase',
  //   disabled: true,
  //   icon: renderIcon(BookIcon)
  // },
  {
    label: '',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
];