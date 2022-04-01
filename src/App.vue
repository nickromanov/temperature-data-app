<template @saveData="saveData">
    <header>
        <h1>Temperature data</h1>
        <h2>(An example table + view editing scenario)</h2>
        <router-link to="/">Data</router-link>
        |
        <router-link to="/editing">Editing</router-link>
    </header>
    <router-view/>
    <Message
            v-if="messageState.isVisible"
            class="td-App-Message"
            :severity="messageState.severity"
            :closable="false">{{messageState.message}}
    </Message>
</template>
<script lang="ts">
	import { Vue } from 'vue-class-component';
	import { appStore } from '@/store';
	import { getData } from '@/service/api';
	import { IMessageState } from '@/./globalTypes';

	export default class HelloWorld extends Vue {
		private editingRows: [] = [];

		created() {
			appStore.actions.setList(getData());
		}

		get messageState(): IMessageState {
			return appStore.state.messageState
		}
	}
</script>
<style>

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    nav {
        padding: 30px;
    }

    a {
        font-weight: bold;
        color: #2c3e50;
    }

    a.router-link-exact-active {
        color: #42b983;
    }

    .td-App-Message {
        position: absolute;
        right: 1%;
        bottom: 8px;
        min-width: 15%;
    }

</style>
