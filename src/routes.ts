// Pages
import Homepage from './pages/Homepage.svelte';
import Marketplace from './pages/Marketplace.svelte';
import Createpage from './pages/Createpage/Createpage.svelte';

export default {
    // Exact path
    '/': Homepage,

    '/marketplace': Marketplace,
    '/home': Homepage,
    '/create': Createpage,

    // Catch-all, must be last
    '*': Homepage,
}