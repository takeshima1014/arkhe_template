// import

import loadWebFont from "./module/loadWebFont";
import switchViewport from "./module/fixViewport";

const WebFont = [ 'Noto+Sans+JP:300,700','Zen+Maru+Gothic:500' ]; //Googleフォントの指定 (Array)
const minWindowWidth = 375; //最小ウインドウ幅

//イベント ******************************************************

//ぺージロード時に処理
document.addEventListener("DOMContentLoaded", () => {
	loadWebFont( WebFont );
	switchViewport(minWindowWidth);

}, false);

// リサイズ時に処理
window.addEventListener('resize', () => {
	switchViewport( minWindowWidth );
}, false);

//関数**********************************************************