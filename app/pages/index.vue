<template>
	<div>
		<h1>Hello world</h1>
		<ContentRenderer v-if="home" :value="home" />
		<div v-else>Home not found</div>
	</div>
</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection("content").first());

useSeoMeta({
	title: home.value?.title,
	description: home.value?.description,
});
</script>

<style lang="scss"></style>
