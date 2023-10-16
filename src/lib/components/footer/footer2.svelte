<script lang="ts">
    import Logo from '$lib/assets/images/Logo.webp';

    const sosial_media = [
        {icons: "fab fa-instagram", link: ""}, {icons: "fab fa-facebook", link: ""},
        {icons: "fab fa-tiktok", link: ""}, {icons: "fab fa-youtube", link: ""}
    ];

    const navigas_footer = [
        {nama: 'Profile', link: '/'}, {nama: 'Visi Misi', link: '/'}, {nama: 'Struktural', link: '/'}, {nama: 'Kontak', link: '/'}
    ];

    let tahun: string = new Date().getFullYear().toString();
</script>

<footer class="flex flex-col max-md:items-center max-md:justify-center max-md:gap-16 max-md:px-4 gap-8 bg-sky-700 text-slate-200 w-full pt-8 border-t border-orange-500">
    <div class='px-16 max-md:px-8 max-md:gap-12 flex max-[1000px]:flex-col justify-between items-center max-[1000px]:gap-8'>
        <div class='flex gap-4 items-center max-[1000px]:flex-col'>
            <img src={Logo} alt='Test' width={75} class="bg-white rounded-full"/>
            <div class='max-[1000px]:text-center'>
                <h1>HIMAUNTIKA</h1>
                <p>Himpunan Mahasiswa Teknik Informatika Unis Tangerang</p>
            </div>
        </div>
        <div class="flex gap-6 items-center">
            {#each navigas_footer as items}
                <a class="hover:brightness-200" href={items.link}>{items.nama}</a>
            {/each}
        </div>
    </div>
    <div class='px-16 max-md:gap-12 max-md:px-8 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:gap-8'>
        <div class='max-[1000px]:text-center text-sm flex items-center justify-center'>
            Jl. Maulana Yusuf No.10,<br/>Babakan. Kec. Tangerang, Kota Tangerang, Banten 15118
        </div>
        <div class='flex items-center gap-6 text-2xl'>
            {#each sosial_media as items}
                <a href={items.link} class="hover:brightness-200"><i class={items.icons}></i></a>
            {/each}
        </div>
    </div>
    <div class='text-center max-md:w-screen py-2 bg-sky-800'>
        <small>Copyright &copy; Himauntika Unis Tangerang {tahun}</small>
    </div>
</footer>

