## Preguntas

¿qué diferencia hay entre un signal y un computed, y cuál se parece a useState y cuál a useMemo?

Signal: guarda estado y se puede cambiar. Se parece a useState.

Computed: calcula un valor a partir de signals. No se edita directo. Se parece a useMemo.

¿qué pasa si el filtro hace new Catalogo() en lugar de inject(Catalogo)?

Si haces new Catalogo(), creas otra instancia.

Resultado: el filtro y la lista ya no comparten estado.

Con inject(Catalogo), todos usan el mismo servicio y todo queda sincronizado.