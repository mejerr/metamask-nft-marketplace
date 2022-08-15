// Pages
import Homepage from './pages/Homepage.svelte';
import Marketplace from './pages/Marketplace.svelte';

export default {
    // Exact path
    '/': Homepage,

    '/marketplace': Marketplace,
    '/home': Homepage,
    '/create': Homepage,

    // Catch-all, must be last
    '*': Homepage,
}