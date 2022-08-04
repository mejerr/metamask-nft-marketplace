// Components
import Homepage from './pages/Homepage.svelte';

// Export the route definition object
export default {
    // Exact path
    '/': Homepage,

    '/marketplace': Homepage,
    '/create': Homepage,

    // Catch-all, must be last
    '*': Homepage,
}