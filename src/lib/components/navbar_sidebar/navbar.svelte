<script lang="ts">

    import LogoHimauntika from '$lib/assets/images/Logo.webp';
	import { fly } from 'svelte/transition';
	import Sidebar from './sidebar.svelte';

    const sosial_media = [
        {icon: "fab fa-instagram", link: ""}, {icon: "fab fa-facebook", link: ""}, {icon: "fab fa-tiktok", link: ""}, {icon: "fab fa-youtube", link: ""},
    ]
    
    let toggle: boolean = false;
    function toggle_sidebar() {
        toggle = !toggle;
    }
    
</script>

<nav class="fixed z-50 flex h-14 w-full justify-between items-center bg-sky-700 text-slate-200 border-b border-orange-500">
    <div class="flex gap-6 items-center max-md:ml-4 ml-8">
        <button class="w-6 hover:brightness-200" on:click={toggle_sidebar}><i class={`${toggle ? "fa fa-times" : "fa fa-bars"}`}></i></button>
        <div class="flex items-center gap-4">
            <img src={LogoHimauntika} alt="Logo Himauntika" width="40px" class="bg-white rounded-full">
            <a href="/"><h1 class="text-xl font-bold">HIMAUNTIKA</h1></a>
        </div>
    </div>
    <div class="flex items-center gap-12 max-md:mr-4 mr-8">
        <!-- <form action="">
            <input type="text" class="border-b bg-transparent outline-none pl-1 max-md:hidden" placeholder="Telusuri...">
            <button><i class="fa fa-search"></i></button>
        </form> -->
        <div class="flex items-center gap-5 text-xl max-md:hidden">
            {#each sosial_media as items}
                <a href={items.link} class="hover:brightness-200"><i class={items.icon}></i></a>
            {/each}
        </div>
    </div>
</nav>
{#if toggle}
    <div transition:fly={{x: -290, duration: 300, opacity: 100}} class="fixed z-[2]">
        <Sidebar/> <!-- component class fixed -->
    </div>
{/if}
