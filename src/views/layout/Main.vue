<template>
	<div id="main-warp">
	<div id="viewDiv"></div>
	</div>
</template>

<script>
import {loadModules} from 'esri-loader';
export default{
methods: {

//创建地图
_createMapView: function() {
	const _self = this;   //定义一个_self防止后续操作中this丢失
	const option = {      //定义一个包含有JS API中js开发包和css样式文件的对象
		url: 'http://localhost:1570/arcgis_js_v46_api/arcgis_js_api/library/4.6/init.js',
		css: 'http://localhost:1570/arcgis_js_v46_api/arcgis_js_api/library/4.6/esri/themes/light/main.css',
	};

	//通过loadModules来做衔接
	loadModules(['esri/Map',
	'esri/views/MapView',"dojo/domReady!"], option)
	.then(([Map, MapView]) => {
        var map = new Map({
            basemap: "streets",
        })
        var view = new MapView({
            container: "viewDiv",
            map: map,
            zoom: 3,
            center: [110, 40],
        })
/*	//业务代码在此处编写
	var map = new Map({
	basemap: "topo-vector"
	});

	var view = new MapView({
	container: "viewDiv",
	map: map,
	center: [-118.80500, 34.02700], // longitude, latitude
	zoom: 13
	});
*/
	view.ui.components = [];   //清除掉地图左上角默认的缩放图标
	}).catch((err) => {
	_self.$message('地图创建失败，' + err);
	});
	},
	}, 

mounted: function() {
this._createMapView();
}
}

</script>

<style lang="scss" scoped>
	@import "../../styles/config.scss";
	

	#main-warp {
			position:fixed;
left: $navMenu;
top: 75px;
right: 0;
bottom: 0;
border: solid 12px #f2f2f2;
border-bottom: none;
-webkit-box-sizing: border;
		}
#viewDiv {

	

	
		padding: 0;
		margin: 0;
		height: 100%;
		width: 100%;
	}
</style>
