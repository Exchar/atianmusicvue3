// 歌曲信息
export interface SongInfo {
	name:string;
}
export enum SongerLocation {
	china=1,
	amer=2,
	jor=3,
	japan=4
}
export interface TopSongerListItem {
	// id
	id:number,
	// 专辑数量
	albumSize:string;
	// 别名
	alias:string[],
	// 简要描述
	briefDesc:string,
	img1v1Id:number,
	img1v1Id_str:string,
	img1v1Url:string,
//   最近排名
	lastRank:number,
//   单曲数量
	musicSize:number,
//   歌手姓名
	name:string,
	picId:number,
	picId_str:string,
	picUrl:string,
//   粉丝数量
	score:number,
//   话题数量
	topicPerson:number,
	trans:string,
}

