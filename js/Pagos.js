document.addEventListener('DOMContentLoaded', () => {
    const preguntas = document.querySelectorAll('.preg');
    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            const id = pregunta.getAttribute('data-id');
            const resp = document.querySelector(`.preg-container[data-id="${id}"] .resp`);
            const icon = pregunta.querySelector('i');
            resp.classList.toggle('visible-resp');
            icon.classList.toggle('icono-activo');
        });
    });

    const categorias = document.querySelectorAll('.categoria');
    const sections = document.querySelectorAll('.main-container > div');

    categorias.forEach(categoria => {
        categoria.addEventListener('click', () => {
            categorias.forEach(cat => cat.classList.remove('activo'));
            categoria.classList.add('activo');

            sections.forEach(section => section.classList.remove('visible'));
            const id = categoria.getAttribute('data-id');
            document.querySelector(`.${id}`).classList.add('visible');
        });
    });
});
