import App from './App.svelte';

declare global {
	interface Window {
	  web3: any;
	  ethereum: any;
	  Web3Modal: any;
	  Box: any;
	  box: any;
	  space: any;
	}
}

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;