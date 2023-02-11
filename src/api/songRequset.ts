import  axiosRequest from "@/utils/request";

import {SongerLocation, SongInfo, TopSongerListItem} from '@/types/song';

interface SongerRankRes {
  artists:TopSongerListItem[],
  // 地区
  type:SongerLocation,
  // 更新时间：时间戳
  updateTime:number,
}

export const getSongItemById = (ids:string|number)=>axiosRequest<SongInfo>({
  url: '/song/detail',
  params:{
    ids
  }
});

export const getTopSongerList = (type:SongerLocation)=> axiosRequest<SongerRankRes>({
  url: '/toplist/artist',
  params:{
    type
  }
});


