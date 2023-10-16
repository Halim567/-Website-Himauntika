<script lang="ts">
    import Navbar from "$lib/components/navbar_sidebar/navbar.svelte";
    import Footer from "$lib/components/footer/footer2.svelte";
    import LogoHimauntika from '$lib/assets/images/Logo.webp';
	import { fade, fly } from "svelte/transition";
	import Observer from "$lib/components/observer/observer.svelte";
    import Org from '$lib/assets/images/org.png';


    let toggle_baca_selengkapnya = false;

    function fn_toggle_baca_sedikit() {
        toggle_baca_selengkapnya = false;
    }

    function fn_toggle_baca_selengkapnya() {
        toggle_baca_selengkapnya = true;
    }
</script>

<svelte:head>
    <title>Himauntika</title>
</svelte:head>

<Navbar/>
<div class="overflow-hidden bg-url h-[50rem] w-full flex items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-2 text-slate-100">
        <img src={LogoHimauntika} alt="Logo Himauntika" class="w-[200px] max-sm:w-[175px] bg-white rounded-full shadow-md">
        <h1 class="text-3xl font-bold text-shadow">HIMAUNTIKA</h1>
        <p class="text-xl text-shadow max-sm:text-center max-sm:px-10">Himpunan Mahasiswa Teknik Informatika Unis Tangerang</p>
    </div>
</div>


<!-- START OF JELEK -->
<main class="flex flex-col">
    <div>
        <Observer>
            <div class="text-xl max-md:px-8 max-md:py-12 p-32 text-justify flex flex-col gap-6 font-Montserrat">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi illum quo! Ipsam doloribus voluptate ipsum facere totam culpa optio. Provident omnis sit placeat assumenda recusandae consequuntur vero quaerat. Nam minus facilis perspiciatis id similique. Quam maxime suscipit tempore aperiam fugiat.</h1>
                <div>
                    {#if !toggle_baca_selengkapnya}
                        <button in:fade={{ delay: 350 }} on:click={fn_toggle_baca_selengkapnya} class="absolute hover:brightness-125 transition-all text-blue-400">Baca selengkapnya...</button>
                    {/if}
                    {#if toggle_baca_selengkapnya}
                        <div transition:fly={{ y: -20, duration: 300 }} class="text-xl text-justify flex flex-col gap-6">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tempora soluta eveniet voluptates commodi est, quo harum cumque corrupti, placeat quasi mollitia similique laboriosam reiciendis ea. Molestiae modi consequuntur veniam laboriosam nam voluptas iusto ipsa odio culpa ullam aperiam, et doloribus maxime! Reprehenderit fuga, perspiciatis dolorum suscipit recusandae ducimus. Totam dignissimos provident repellendus, cupiditate soluta a maiores perferendis! Eum dolore velit necessitatibus ullam maxime molestiae amet enim quas, iure obcaecati vel eaque, beatae id laudantium.</h1>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptas repellendus repellat fugit magnam dolore nihil aspernatur ratione illo libero, ipsam non in temporibus ea quos consequuntur at sint cumque sapiente possimus itaque dolores suscipit ducimus! Veniam deleniti quod ducimus laudantium vel dicta magnam distinctio tenetur corporis, laborum doloremque. Veritatis sit neque obcaecati debitis quaerat expedita cumque voluptate, alias tenetur itaque quibusdam labore molestiae atque, possimus earum soluta iusto eligendi accusantium facere. Reiciendis corporis recusandae possimus voluptates totam aliquid commodi.</h1>
                            <div>
                                <button on:click={fn_toggle_baca_sedikit} class="hover:brightness-125 transition-all text-blue-400">Baca sedikit...</button>
                            </div>
                        </div>
                    {/if}
                </div>
           </div>
        </Observer>
    </div>
    <div class="bg-sky-50 py-40 max-md:px-8 px-28 text-slate-50 font-Montserrat text-justify">
        <div class="bg-cyan-500 rotate-3 shadow-md absolute max-md:h-24 max-md:w-24 h-36 max-md:right-3 w-36 rounded-3xl right-16 -translate-y-4"></div>
        <div class="bg-sky-500 rounded-3xl flex max-md:px-8 px-24 text-center shadow-xl">
            <div class="flex flex-col gap-16 py-16">
                <Observer>
                    <div class="flex flex-col gap-8">
                        <h1 class="text-5xl font-bold">VISI</h1>
                        <p>Meningkatkan kualitas dan  kreatifitas mahasiswa khususnya dalam bidang akademik Teknik Informatika guna memajukan sistem komputerisasi Kampus UNIS Tangerang, serta menanamkan jiwa persaudaraan yang dilandaskan dengan iman dan takwa dikalangan mahasiswa Teknik Informatika guna melahirkan mahasiswa yang unggul demi memajukan Fakultas Teknik Informatika UNIS Tangerang agar lebih di kenal oleh masyarakat luas</p>
                    </div>
                </Observer>
                <Observer>
                    <div class="flex flex-col gap-8">
                        <h1 class="text-5xl font-bold text-center">MISI</h1>
                        <ol class="list-decimal flex flex-col px-8 gap-4 max-md:text-justify text-start">
                            <li>Membantu kemajuan sistem komputerisasi Fakultas Teknik Informatika dan kampus UNIS Tangerang</li>
                            <li>Membangkitkan mental dan kemampuan terpendam yang dimiliki mahasiswa Teknik Informatika guna membangun mereka agar menjadi pribadi yang mandiri</li>
                            <li>Menyelenggarakan perkumpulan belajar dalam bidang akademik Teknik Informatka guna menciptakan Mahasiswa Teknik Informatika yang Cerdas dan mandiri.</li>
                            <li>Menyiapkan sumber daya manusia yang berkualitas di bidang teknologi</li>
                            <li>Menghasilkan generasi muda yang terampil, berkualitas, mandiri dan berwawasan luas.</li>
                            <li>Membuat usaha-usaha lain yang sesuai dengan identitas dan azas organisasi serta berguna untuk mencapai tujuan untuk menciptakan mahsiswa dan mahasiswai Fakultas Teknik Informatika yang dapat berkreatifitas dalam bidang akademik Teknik informatika.</li>
                        </ol>
                    </div>
                </Observer>
            </div>
        </div>
        <div class="bg-cyan-500 shadow-md max-md:h-24 max-md:w-24 absolute -rotate-12 h-32 w-32 rounded-3xl -translate-y-20 left-16 max-md:left-2 max-md:-translate-y-14"></div>
    </div>
    <div class="bg-gradient font-Montserrat text-slate-100 pt-28 pb-24 max-md:px-8 px-28">
        <div class="flex flex-col gap-20">
            <Observer>
                <div class="flex flex-col gap-4 font-bold overflow-x-auto">
                    <h1 class="text-5xl max-md:text-2xl font-bold text-center">STRUKTUR ORGANISASI</h1>
                    <p class="text-2xl max-md:text-lg text-center">PERIODE 1965-1966</p>
                </div>
                <img src={Org} class="max-md:mt-24" alt="">
            </Observer>
        </div>
    </div>
    <!-- ON PROGRESS -->
    <div class="flex flex-col bg-slate-50">
        <div>
            <Observer>
                <div class="py-32 px-52 font-Montserrat max-md:px-12 flex flex-col gap-12 text-justify">
                    <h1 class="text-5xl max-md:text-2xl text-sky-500 font-bold">DIVISI HIMAUNTIKA</h1>
                    <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur quasi nesciunt sequi saepe provident non voluptate omnis expedita esse!Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur assumenda veritatis autem laudantium magni consequuntur blanditiis officia iure voluptatem impedit fuga esse repellendus recusandae enim, laborum iste voluptatibus perspiciatis. Et maxime tenetur odio maiores iste aliquam, beatae quisquam quaerat in minus debitis officia temporibus praesentium sed ex, suscipit aspernatur!</p>
                </div>
            </Observer>
        </div>
        <Observer>
            <div class="py-32 px-52 max-md:px-12 font-Montserrat flex flex-col gap-16 text-justify">
                <div class="flex flex-col gap-4 font-bold">
                    <h1 class="text-5xl max-md:text-2xl text-sky-500">KETUA DAN WAKIL</h1>
                    <p class="text-2xl max-md:text-lg">PERIODE 1965-1966</p>
                </div>
                <div class="flex items-center justify-center gap-32 max-md:flex-col max-md:gap-24 text-slate-100">
                    <div class="flex flex-col gap-4">
                        <div class="card-ketua font-bold bg-sky-500 border rounded-3xl pl-6 pb-3 h-[320px] w-[320px] flex flex-col shadow-lg justify-end">
                            <h1>DN Aidit Maulana Ramdhani</h1>
                            <h1>Ketua Himauntika</h1>
                        </div>
                        <p class="text-center text-blue-600">Lihat Profile</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="card-wakil font-bold bg-sky-500 border rounded-3xl pl-6 pb-3 h-[320px] w-[320px] shadow-lg flex flex-col justify-end">
                            <h1>Jawir Samsudin</h1>
                            <h1>Wakil Ketua Himauntika</h1>
                        </div>
                        <p class="text-center text-blue-600">Lihat Profile</p>
                    </div>
                </div>
            </div>
        </Observer>
        <div class="py-32 px-52 max-md:px-12 font-Montserrat flex flex-col gap-12 text-justify">
            <h1 class="text-5xl max-md:text-2xl text-sky-500 font-bold">PRESTASI HIMAUNTIKA</h1>
        </div>
    </div>
</main>
<!-- END OF JELEK -->

<Footer/>
