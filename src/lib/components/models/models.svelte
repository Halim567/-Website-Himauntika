<script lang="ts">
    export let message: string;
</script>


<div class="flex items center flex-col max-md:w-3/4 justify-center gap-4 p-8 backdrop-blur-md border rounded shadow-md bg-slate-100">
    <i class="far fa-check-circle text-9xl text-center text-green-500"></i>
    <h1 class="text-2xl text-center max-sm:text-xl">Pendaftaran berhasil</h1>
    <p class="text-center max-sm:text-sm">{message}</p>
    <div class="flex items-center justify-center">
        <a href="/" class="btn">Kembali</a>
    </div>
</div>