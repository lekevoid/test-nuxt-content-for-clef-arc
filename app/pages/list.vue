<template>
	<div>
		<h1>Hello world again</h1>
		<div>
			<pre>
		{{ page }}
		</pre
			>
		</div>
	</div>
</template>

<script setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("docs").path(route.path).first();
});
</script>

<style lang="scss"></style>
