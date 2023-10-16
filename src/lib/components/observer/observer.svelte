<script lang="ts">
    import { onMount } from "svelte";
    
    let container: HTMLElement;
    let visible: boolean = false;

    onMount(() => {
        if (typeof IntersectionObserver !== "undefined" && container) {
            const observer = new IntersectionObserver (entries => {
                visible = entries[0].isIntersecting;
                if (entries[0].boundingClientRect.y < 0) visible = true;
                }, {
                    rootMargin: '0px 0px -200px 0px'
                }
            );

            observer.observe(container);

            return function () {
                observer.disconnect();
            };
        }
    });
</script>

<div bind:this={container}>
    <div class={`${visible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-24 opacity-0 pointer-events-none'} transition-all duration-1000 ease-in-out`}>
        <slot />
    </div>
</div>
