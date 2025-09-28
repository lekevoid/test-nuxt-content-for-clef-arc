<template>
	<div>
		<h1>Hello world again</h1>
		<ContentRenderer v-if="pagedata" :value="pagedata" />
		<div v-else>Page missing</div>
	</div>
</template>

<script setup>
const route = useRoute();
const { data: pagedata } = await useAsyncData(route.path, () => {
	return queryCollection("docs").path(route.path).first();
});
</script>

<style lang="scss"></style>
