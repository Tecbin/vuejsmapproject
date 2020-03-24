<template>

  <body >
    <div id="viewDiv">
    </div>
  </body>
</template>
 
<script>
import {loadModules} from 'esri-loader';
 
export default {
  name: 'Map',
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
            'esri/views/MapView'], option)
                .then(([Map, MapView]) => {
                    
                    //业务代码在此处编写
                    var map = new Map({
                      basemap: "topo-vector"
                    });

