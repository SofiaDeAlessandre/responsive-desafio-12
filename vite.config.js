import { resolve } from 'path'

export default {
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ejercicioA: resolve(__dirname, 'pages/ejercicioA/ejercicio-a.html'),
                ejercicioB: resolve(__dirname, 'pages/ejercicioB/ejercicio-b.html'),
                ejercicioC: resolve(__dirname, 'pages/ejercicioC/ejercicio-c.html'),
                ejercicioD: resolve(__dirname, 'pages/ejercicioD/ejercicio-d.html'),
            }
        }
    }
}