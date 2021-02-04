<template>
	<div>
		<Navbar />
		<h1>App1</h1>
		<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
	</div>
</template>

<script>
import Navbar from '../../common/Navbar'

export default {
	name: 'App',

	components: {
		Navbar,
	}
}
</script>
