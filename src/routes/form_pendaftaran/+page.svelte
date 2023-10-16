<script lang="ts">
    import { superForm } from 'sveltekit-superforms/client';
    import type { PageData } from './$types';
	import { fade, scale } from 'svelte/transition';
	import Models from '$lib/components/models/models.svelte';
    
    export let data: PageData;
    const { form, errors, enhance, message, delayed } = superForm(data.form, {
        validators: {
            nama: nama => nama.length < 3 || nama === undefined ? "Nama lengkap wajib diisi!!" : null,
            nim: nim => nim === null || Number.isNaN(nim) ? "NIM wajib diisi!!" : null,
            semester: semester => semester === null || Number.isNaN(semester) ? "Semester wajib diisi" : null,
            alasan: alasan => alasan.length < 10 || alasan === undefined ? "Alasan kamu masuk himauntika apa?" : null
        },
    });
</script>

<svelte:head>
    <title>Pendaftaran</title>
</svelte:head>

<div class="flex h-screen items-center justify-center bg-url bg-no-repeat">
    {#if $message}
        <dialog class="fixed z-10 flex w-full h-screen backdrop-blur-sm items-center justify-center bg-sky-950 bg-opacity-50">
            <div in:scale={{ duration: 200 }} class="flex items-center justify-center">
                <Models message={$message}/>
            </div>
        </dialog>
    {/if}
    {#if $delayed}
        <dialog class="fixed z-10 flex w-full h-screen backdrop-blur-sm items-center justify-center bg-sky-950 bg-opacity-50">
            <i in:scale={{ duration: 200 }} class="fas fa-spinner fa-spin text-slate-100 text-9xl"></i>
        </dialog>
    {/if}
    <form method="POST" use:enhance action="?/createPesertaPendaftar" class="flex backdrop-blur-own inset-0 bg-slate-50 flex-col gap-8 border p-4 rounded max-md:w-[90%] w-[50%] shadow-lg">
        <h1 class="text-center underline">Form Pendaftaran</h1>
        <div class="flex flex-col gap-4">
            <label for="nama">Nama lengkap : </label>
            <input class={`${$errors.nama ? 'border-red-500' : undefined} input`} type="text" id="nama" name="nama" placeholder="Jonathan Liandi" bind:value={$form.nama}>
            {#if $errors.nama}
                <small transition:fade={{ duration: 150 }} class="text-red-500 absolute translate-y-[4.3rem]">{$errors.nama}</small>
            {/if}
        </div>
        <div class="flex flex-col gap-4">
            <label for="nama">NIM : </label>
            <input class={`${$errors.nim ? 'border-red-500' : undefined} input`} type="text" id="nim" name="nim" placeholder="NIM kamu" bind:value={$form.nim}>
            {#if $errors.nim}
                <small transition:fade={{ duration: 150 }} class="text-red-500 absolute translate-y-[4.3rem]">{$errors.nim}</small>
            {/if}
        </div>
        <div class="flex flex-col gap-4">
            <label for="nama">Semester : </label>
            <input class={`${$errors.semester ? 'border-red-500' : undefined} input`} type="text" id="semester" name="semester" placeholder="5" bind:value={$form.semester}>
            {#if $errors.semester}
                <small transition:fade={{ duration: 150 }} class="text-red-500 absolute translate-y-[4.3rem]">{$errors.semester}</small>
            {/if}
        </div>
        <div class="flex flex-col gap-4">
            <label for="nama">Alasan Masuk Himauntika : </label>
            <input class={`${$errors.alasan ? 'border-red-500' : undefined} input`} type="text" id="alasan" name="alasan" placeholder="1001 alasan..." bind:value={$form.alasan}>
            {#if $errors.alasan}
                <small transition:fade={{ duration: 150 }} class="text-red-500 absolute translate-y-[4.3rem]">{$errors.alasan}</small>
            {/if}
        </div>
        <div class="flex items-center gap-4 py-4">
            <button class="btn" type="submit">Kirim</button>
            <a href="/" class="btn-danger">Kembali</a>
        </div>
    </form>
</div>
