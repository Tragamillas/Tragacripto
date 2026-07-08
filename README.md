<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# 🌳 Historia Familiar - Curso Interactivo

Un recurso didáctico web interactivo diseñado para enseñarte cómo investigar, documentar y preservar la historia de tu familia.

## 📚 Descripción

Este curso te guiará a través del fascinante proceso de la investigación genealógica. Aprenderás técnicas prácticas, descubrirás recursos valiosos y construirás tu propio árbol genealógico. Cada módulo incluye lecciones teóricas y ejercicios prácticos para reforzar tu aprendizaje.

### ¿Qué aprenderás?

- 📚 **Fundamentos de la genealogía** - Conceptos básicos y por qué es importante investigar tu historia familiar
- 🔍 **Técnicas de investigación** - Cómo encontrar y verificar información sobre tus antepasados
- 🗂️ **Documentación y organización** - Métodos para organizar y documentar tu investigación
- 🚀 **Tópicos avanzados** - Estrategias para investigaciones difíciles y preservación del legado familiar

## 🚀 Comenzar

### Opción 1: En línea (Recomendado)

Visita el sitio web del curso:
- [Historia Familiar - Versión en línea](https://tragamillas.github.io/Tragacripto/) (una vez configurado GitHub Pages)

### Opción 2: Localmente

1. Clona este repositorio:
```bash
git clone https://github.com/Tragamillas/Tragacripto.git
cd Tragacripto
```

2. Abre `index.html` en tu navegador:
```bash
# En macOS
open index.html

# En Linux
xdg-open index.html

# O simplemente arrastra el archivo a tu navegador
```

3. Alternativamente, usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Luego abre: http://localhost:8000
```

## 📖 Estructura del Curso

### Módulos Disponibles

1. **Introducción a la Genealogía**
   - ¿Qué es la genealogía?
   - Herramientas y recursos disponibles

2. **Técnicas de Investigación Efectiva**
   - Recopilación de información familiar
   - Búsqueda en registros públicos

3. **Documentación y Organización**
   - Creando tu árbol genealógico
   - Sistema de organización y archivo

4. **Tópicos Avanzados**
   - Investigación de líneas difíciles
   - Preservando tu legado familiar

## 💾 Características

- ✅ **Interactivo** - Ejercicios prácticos en cada lección
- ✅ **Progreso automático** - Se guarda tu avance en el navegador
- ✅ **Responsive** - Funciona en desktop, tablet y móvil
- ✅ **Sin requisitos** - Funciona sin necesidad de servidor backend
- ✅ **Contenido estructurado** - Lecciones claras y bien organizadas

## 📊 Sistema de Progreso

El curso automaticamente guarda tu progreso:
- Tu posición actual en el curso
- Lecciones completadas
- Tiempo dedicado al aprendizaje

Tu progreso se almacena localmente en tu navegador. Puedes reiniciar el curso en cualquier momento.

## 📁 Estructura de Archivos

```
Tragacripto/
├── index.html              # Página principal del curso
├── assets/
│   ├── css/
│   │   └── styles.css     # Estilos del sitio
│   └── js/
│       └── app.js         # Lógica de la aplicación
├── data/
│   └── course.json        # Contenido del curso
├── lessons/               # (Opcional) Archivos de lecciones adicionales
├── images/                # Imágenes y recursos visuales
├── README.md              # Este archivo
└── LICENSE                # Licencia MIT
```

## 🛠️ Personalización

### Agregar nuevas lecciones

Edita `data/course.json` para añadir módulos o lecciones:

```json
{
  "id": "nuevo-modulo",
  "title": "Título del Módulo",
  "icon": "📌",
  "lessons": [
    {
      "id": "leccion1",
      "title": "Título de la Lección",
      "content": "Contenido HTML aquí",
      "exercise": {
        "type": "reflection",
        "question": "Pregunta para el estudiante",
        "placeholder": "Texto de ayuda"
      }
    }
  ]
}
```

### Tipos de ejercicios disponibles

1. **reflection** - Preguntas de reflexión abierta
2. **checklist** - Listas de verificación
3. **form** - Formularios con campos

### Modificar estilos

Los colores y estilos se definen en `assets/css/styles.css` usando variables CSS en `:root`.

## 🌐 Desplegar en GitHub Pages

1. Asegúrate que el repositorio sea público
2. Ve a Settings → Pages
3. Selecciona "main" como rama de origen
4. Selecciona "root" como carpeta de origen
5. El sitio estará disponible en: `https://[usuario].github.io/Tragacripto/`

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios significativos:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mi-feature`)
3. Commit tus cambios (`git commit -am 'Agregar nueva feature'`)
4. Push a la rama (`git push origin feature/mi-feature`)
5. Abre un Pull Request

## 📧 Contacto

Para preguntas o sugerencias sobre el curso, por favor abre una issue en el repositorio.

## 🎓 Recursos Adicionales

### Sitios de interés para genealogía

- [FamilySearch.org](https://www.familysearch.org) - Base de datos genealógica gratuita
- [Ancestry.com](https://www.ancestry.com) - La mayor base de datos genealógica
- [MyHeritage.com](https://www.myheritage.com) - Plataforma con herramientas de árboles

### Archivos locales (Ejemplos)

- Archivos Municipales
- Registros Parroquiales
- Bibliotecas Locales
- Notarías

## 📈 Roadmap

- [ ] Agregar más módulos avanzados
- [ ] Incluir videos tutoriales
- [ ] Crear ejercicios interactivos con validación
- [ ] Agregar sistema de certificados
- [ ] Traducción a otros idiomas
- [ ] Integración con APIs genealógicas
- [ ] Foro de comunidad

---

**Última actualización:** 2024
**Versión:** 1.0.0

</footer>
