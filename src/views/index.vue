<template>
<div id="layout">
	<LayoutHeader/>

		<LayoutNav/>
		<LayoutMain/>


</div>
</template>
 
<script>
import LayoutHeader from './layout/Header.vue';
import LayoutMain from './layout/Main.vue';
import LayoutNav from './layout/Nav.vue';


export default {

name:"layout",
components:{
	LayoutHeader,
	LayoutMain,
	LayoutNav
},
setup(){},
data() {
  return {
	isCollapse: true
  };
}

}

</script>
 
<style lang="scss" scoped>
#layout {

background-color: #f2f2f2;
	}

</style>
