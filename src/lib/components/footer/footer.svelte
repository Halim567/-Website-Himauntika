<script lang="ts">
    import Logo from '$lib/assets/images/Logo.webp';

    const sosial_media = [
        {icons: "fab fa-instagram", link: ""}, {icons: "fab fa-facebook", link: ""},
        {icons: "fab fa-tiktok", link: ""}, {icons: "fab fa-youtube", link: ""}
    ];
</script>

<footer class="flex flex-col max-md:px-4 gap-12 px-16 bg-sky-800 text-slate-200 w-full pt-8 border-t border-orange-500">
    <div class='flex max-[1000px]:flex-col justify-between items-center max-[1000px]:gap-8'>
        <div class='flex gap-4 items-center max-[1000px]:flex-col'>
            <img src={Logo} alt='Test' width={75} class="bg-white rounded-full"/>
            <div class='max-[1000px]:text-center'>
                <h1>HIMAUNTIKA</h1>
                <p>Himpunan Mahasiswa Teknik Informatika Unis Tangerang</p>
            </div>
        </div>
        <div class='flex items-center gap-6 text-2xl'>
            {#each sosial_media as items}
                <a href={items.link} class="hover:brightness-200"><i class={items.icons}></i></a>
            {/each}
        </div>
    </div>
    <div class='flex items-center justify-between max-[1000px]:flex-col max-[1000px]:gap-8'>
        <div class='max-[1000px]:text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Cumque consequatur accusantium est voluptas officiis nihil odit! Cum quaerat<br/> maxime delectus suscipit quo pariatur.
        </div>
        <div class='text-end max-[1000px]:text-center'>
            Jl. Maulana Yusuf No.10,<br/>Babakan. Kec. Tangerang, Kota<br/>Tangerang, Banten 15118
        </div>
    </div>
    <div class='text-center border-t py-2'>
        <small>Copyright &copy; Himauntika Unis Tangerang 2023</small>
    </div>
</footer>