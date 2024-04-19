<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="Sidenav" class="sidenav">
		<img src="/img/cc-1.png" width="80%"/>
			
		<a class="active" href="index.html">首页</a>
		<a href="News-Center.html">资讯中心</a>
		<a href="Media-Center.html">媒体中心</a>
		<a href="Time-Corridor.html">时光回廊</a>
		<a href="About-Us.html">关于我们</a>

		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&#8249;</a>
			
		<div class="link">
			<button class="btn-bilibili"></button>
			<button class="btn-cloudmusic"></button>
			<button class="btn-qqmusic"></button>
			<button class="btn-weibo"></button>
		</div>
			
		<p>© 2023-2024 CFP. All Rights Reserved.<br />*站内素材均来自粉丝投稿和官方渠道</p>
	</div>
		
	<div id="Topnav" class="topnav">
		<img src="/img/cc-1.png" height="80%" onclick="openNav()"/>
			
		  <a class="active" href="index.html">首页</a>
		  <a href="News-Center.html">资讯中心</a>
		  <a href="Media-Center.html">媒体中心</a>
		  <a href="Time-Corridor.html">时光回廊</a>
		  <a href="About-Us.html">关于我们</a>
			
		  <a href="javascript:void(0);" class="icon" onclick="openNav()">
		    <span>&#9776;</span>
		  </a>
	</div>
		
	<!-- 内容 -->
	<div id="main">
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
</style>
