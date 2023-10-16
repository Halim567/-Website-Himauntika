import { fail, type Actions } from "@sveltejs/kit";
import { z } from "zod";
import { prisma } from "$lib/server/database";
import { message, setError, superValidate } from 'sveltekit-superforms/server';

const ModelData = z.object({
    nama: z.string().min(3, "Nama lengkap wajib diisi!!"),
    nim: z.number({ invalid_type_error: "NIM harus berupa angka" })
        .positive("NIM tidak bisa negatif").min(5, "NIM kamu kurang panjang").nullable(),
    semester: z.number({ invalid_type_error: "Semester harus berupa angka" })
        .positive("Semester tidak bisa negatif").min(1, "Semester wajib diisi!!").nullable(),
    alasan: z.string().min(10, "Alasan kamu daftar himauntika apa?")
});

export async function load(request: Request) {
    const form = await superValidate(request, ModelData);
    return { form };
}

// async function sleep(ms: number) { //Hanya untuk debugging
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

export const actions: Actions = {
    createPesertaPendaftar: async function ({ request }) {
        const formData = await superValidate(request, ModelData);

        if (!formData.valid || formData.data.nim === null || formData.data.semester === null) {
            return fail(400, { formData });
        }

        // await sleep(2000); //Hanya untuk debugging

        try {
            const nim_sudah_digunakan = await prisma.pesertaPendaftar.findUnique({ where: { nim: formData.data.nim } });

            if (nim_sudah_digunakan) {
                return setError(formData, 'nim', 'NIM sudah digunakan');
            }

            await prisma.pesertaPendaftar.create({
               data: {
                nama: formData.data.nama,
                nim: formData.data.nim ?? undefined,
                semester: formData.data.semester ?? undefined,
                alasan: formData.data.alasan
               }
            });
        } catch(err) {
            return fail(500, { message: "Terjadi kesalahan pada server", formData })
        }

        return message(formData, "Silahkan klik tombol \"Kembali\" untuk kembali kehalaman utama");
    }
};