<template>
    <header>
        <h1>Temperature data</h1>
        <h2>(An example table + view editing scenario)</h2>
        <br/>
        <router-link to="/">Data</router-link>
        |
        <router-link to="/editing">Editing</router-link>

    </header>
    <main>
        <router-view/>
    </main>
    <footer>
        <Message
                v-if="messageState.isVisible"
                class="td-App-Message"
                :severity="messageState.severity"
                :closable="false">{{messageState.message}}
        </Message>
    </footer>
</template>
<script lang="ts">
	import { Vue } from 'vue-class-component';
	import { appStore } from '@/store';
	import { IMessageState } from '@/./globalTypes';

	export default class HelloWorld extends Vue {

		/**
		 * Loading data when created
		 */
		async created(): Promise<void> {
			appStore.actions.loadList();
		}

		/**
		 * Message settings prop
		 */
		get messageState(): IMessageState {
			return appStore.state.messageState
		}

	}
</script>
<style>
    a {
        font-weight: bold;
        color: #2c3e50;
    }

    a.router-link-exact-active {
        color: #42b983;
    }

    #app {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 8px;
        height: 100%;
        grid-template-areas: 'header' 'main' 'footer';
    }

    .td-App-Message {
        position: absolute;
        right: 1%;
        bottom: 8px;
        min-width: 15%;
    }

    .td-App-Create {
        margin: 1rem;
    }


    #app > header {
        grid-area: header;
    }

    #app > main {
        grid-area: main;
        width: 75%;
        margin: auto;
    }

    #app > footer {
        position: sticky;
        bottom: 0;
        grid-area: footer;
    }
</style>
