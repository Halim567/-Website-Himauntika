<script lang="ts">
    import { slide } from 'svelte/transition';

    const tentang = [
        {nama: "Visi Misi Himauntika", link: "/"},
        {nama: "Ketua dan Wakil Ketua", link: "/"},
    ];
    const Keanggotaan = [
        {nama: "Struktural Himauntika", link: "/"},
        {nama: "Anggota Himauntika", link: "/"},
        {nama: "Divisi Himauntika", link: "/"},
    ];
    const sosial_media = [
        {icon: "fab fa-instagram", link: ""}, {icon: "fab fa-facebook", link: ""}, {icon: "fab fa-tiktok", link: ""}, {icon: "fab fa-youtube", link: ""},
    ];

    //reactive kontent
    let open_tentang: boolean = false;
    function open_tentang_toggle() {
        open_tentang = !open_tentang;
    }

    let open_keanggotaan: boolean = false;
    function open_keanggotaan_toggle() {
        open_keanggotaan = !open_keanggotaan;
    }
</script>

<div class="w-[18rem] h-screen bg-sky-700 flex justify-center shadow-xl text-slate-200 overflow-y-auto">
    <div class="flex flex-col gap-6 translate-y-20 text-lg h-fit w-full">
        <div class="mx-10">
            <button on:click={open_tentang_toggle} class="py-2 -ml-1 hover:brightness-200 flex items-center justify-between w-full">Tentang Himauntika <i class={`${open_tentang ? 'rotate-90' : 'rotate-0'} transition-all fas fa-angle-right text-sm mt-[.15rem]`}></i></button>
            {#if open_tentang}
                <div
                    transition:slide
                    class="text-slate-400 flex flex-col gap-4 border-l border-slate-400"
                >
                    {#each tentang as items}
                        <a href={items.link} class="border-l border-slate-400 hover:brightness-200 -ml-px pl-6 text-sm">{items.nama}</a>
                    {/each}
                </div>
            {/if}
        </div>
        <div class="mx-10">
            <button on:click={open_keanggotaan_toggle} class="py-2 -ml-1 hover:brightness-200 flex items-center justify-between w-full">Struktural Himauntika <i class={`${open_keanggotaan ? 'rotate-90' : 'rotate-0'} transition-all fas fa-angle-right text-sm mt-[.15rem]`}></i></button>
            {#if open_keanggotaan}
                <div
                    transition:slide
                    class="text-slate-400 flex flex-col gap-4 border-l border-slate-400"
                >
                    {#each Keanggotaan as items}
                        <a href={items.link} class="border-l border-slate-400 hover:brightness-200 -ml-px pl-6 text-sm">{items.nama}</a>
                    {/each}
                </div>
            {/if}
        </div>
        <div class="mx-10 py-2 ">
            <a href="/form_pendaftaran" class="py-2 -ml-1 hover:brightness-200 mx-10">Pendaftaran Anggota</a>
        </div>
        <div class="text-xl gap-6 mx-10 max-md:flex hidden">
            {#each sosial_media as items}
                <a href={items.link} class="hover:brightness-200"><i class={items.icon}></i></a>
            {/each}
        </div>
    </div>
</div>