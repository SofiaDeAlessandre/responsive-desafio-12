import { resolve } from 'path'

export default {
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ejercicioA: resolve(__dirname, 'pages/ejercicio-a/ejercicio-a.html'),
                ejercicioB: resolve(__dirname, 'pages/ejercicio-b/ejercicio-b.html'),
                ejercicioC: resolve(__dirname, 'pages/ejercicio-c/ejercicio-c.html'),
                ejercicioD: resolve(__dirname, 'pages/ejercicio-d/ejercicio-d.html'),
            }
        }
    }
}