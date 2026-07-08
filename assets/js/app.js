// Course Data Management
class CourseManager {
    constructor() {
        this.course = null;
        this.currentModuleIndex = 0;
        this.currentLessonIndex = 0;
        this.completedLessons = [];
        this.startTime = null;
        this.loadProgress();
    }

    async loadCourse() {
        try {
            const response = await fetch('data/course.json');
            this.course = await response.json();
        } catch (error) {
            console.error('Error loading course:', error);
            this.course = this.getDefaultCourse();
        }
    }

    getDefaultCourse() {
        return {
            title: 'Historia Familiar',
            description: 'Aprende a investigar y documentar tu árbol genealógico',
            modules: [
                {
                    id: 'intro',
                    title: 'Introducción a la Genealogía',
                    icon: '📚',
                    lessons: [
                        {
                            id: 'lesson1',
                            title: '¿Qué es la Genealogía?',
                            content: '<p>La genealogía es el estudio de la historia familiar y las líneas de descendencia. Es una búsqueda apasionante que nos permite conectar con nuestras raíces y comprender cómo nuestros antepasados moldearon nuestra historia.</p><p><strong>¿Por qué investigar nuestra historia familiar?</strong></p><ul><li>Conectar con nuestras raíces culturales</li><li>Comprender mejor nuestra identidad</li><li>Preservar historias importantes</li><li>Crear un legado para futuras generaciones</li></ul>',
                            exercise: {
                                type: 'reflection',
                                question: '¿Cuál es la generación más antigua que recuerdas en tu familia?',
                                placeholder: 'Escribe tu respuesta aquí...'
                            }
                        },
                        {
                            id: 'lesson2',
                            title: 'Herramientas y Recursos',
                            content: '<p>Para investigar tu historia familiar necesitarás varios recursos.</p><h3>Recursos en línea</h3><ul><li>Ancestry.com - Base de datos masiva</li><li>FamilySearch.org - Gratuito y accesible</li><li>FindMyPast - Registros especializados</li></ul><h3>Recursos locales</h3><ul><li>Archivos civiles municipales</li><li>Iglesias y registros religiosos</li><li>Bibliotecas locales</li><li>Notarías</li></ul>',
                            exercise: {
                                type: 'checklist',
                                items: ['Crear cuenta en FamilySearch', 'Explorar archivos locales', 'Hacer lista de documentos necesarios']
                            }
                        }
                    ]
                },
                {
                    id: 'research',
                    title: 'Técnicas de Investigación',
                    icon: '🔍',
                    lessons: [
                        {
                            id: 'lesson3',
                            title: 'Recopilación de Información Familiar',
                            content: '<p>El primer paso es recopilar toda la información que ya tienes en tu familia.</p><h3>Información a recopilar:</h3><ul><li>Nombres completos de parientes</li><li>Fechas de nacimiento, matrimonio y fallecimiento</li><li>Lugares de residencia</li><li>Ocupaciones</li><li>Historias y anécdotas familiares</li></ul><p>Comienza con lo que sabes y trabaja hacia el pasado, verificando cada dato con múltiples fuentes.</p>',
                            exercise: {
                                type: 'form',
                                fields: [
                                    { label: 'Nombre del pariente', type: 'text' },
                                    { label: 'Relación contigo', type: 'text' },
                                    { label: 'Fecha de nacimiento', type: 'date' }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'documentation',
                    title: 'Documentación y Organización',
                    icon: '🗂️',
                    lessons: [
                        {
                            id: 'lesson4',
                            title: 'Creando tu Árbol Genealógico',
                            content: '<p>Una vez que tengas información, es hora de organizarla visualmente.</p><p>Un árbol genealógico típicamente muestra:</p><ul><li>Generaciones (de arriba hacia abajo o de abajo hacia arriba)</li><li>Relaciones familiares (matrimonios, hermanos)</li><li>Información clave de cada persona</li></ul><p>Puedes crear tu árbol manualmente (en papel) o usando software especializado.</p>',
                            exercise: {
                                type: 'reflection',
                                question: 'Describe cómo planeas organizar tu información genealógica.',
                                placeholder: 'Mi plan de organización...'
                            }
                        }
                    ]
                }
            ]
        };
    }

    getTotalLessons() {
        return this.course.modules.reduce((total, module) => total + module.lessons.length, 0);
    }

    getProgress() {
        return Math.round((this.completedLessons.length / this.getTotalLessons()) * 100);
    }

    markLessonComplete(moduleIndex, lessonIndex) {
        const lessonId = `${moduleIndex}-${lessonIndex}`;
        if (!this.completedLessons.includes(lessonId)) {
            this.completedLessons.push(lessonId);
            this.saveProgress();
        }
    }

    getCurrentLesson() {
        return this.course.modules[this.currentModuleIndex].lessons[this.currentLessonIndex];
    }

    getCurrentModule() {
        return this.course.modules[this.currentModuleIndex];
    }

    hasNextLesson() {
        const currentModule = this.getCurrentModule();
        return this.currentLessonIndex < currentModule.lessons.length - 1;
    }

    hasPrevLesson() {
        return this.currentLessonIndex > 0;
    }

    nextLesson() {
        if (this.hasNextLesson()) {
            this.currentLessonIndex++;
            return true;
        }
        return false;
    }

    prevLesson() {
        if (this.hasPrevLesson()) {
            this.currentLessonIndex--;
            return true;
        }
        return false;
    }

    nextModule() {
        if (this.currentModuleIndex < this.course.modules.length - 1) {
            this.currentModuleIndex++;
            this.currentLessonIndex = 0;
            return true;
        }
        return false;
    }

    isLastLesson() {
        return this.currentModuleIndex === this.course.modules.length - 1 &&
               this.currentLessonIndex === this.getCurrentModule().lessons.length - 1;
    }

    saveProgress() {
        localStorage.setItem('courseProgress', JSON.stringify({
            completedLessons: this.completedLessons,
            currentModule: this.currentModuleIndex,
            currentLesson: this.currentLessonIndex,
            startTime: this.startTime
        }));
    }

    loadProgress() {
        const saved = localStorage.getItem('courseProgress');
        if (saved) {
            const data = JSON.parse(saved);
            this.completedLessons = data.completedLessons || [];
            this.currentModuleIndex = data.currentModule || 0;
            this.currentLessonIndex = data.currentLesson || 0;
            this.startTime = data.startTime ? new Date(data.startTime) : new Date();
        } else {
            this.startTime = new Date();
            this.saveProgress();
        }
    }

    resetProgress() {
        this.completedLessons = [];
        this.currentModuleIndex = 0;
        this.currentLessonIndex = 0;
        this.startTime = new Date();
        this.saveProgress();
    }
}

// UI Controller
class UIController {
    constructor(courseManager) {
        this.manager = courseManager;
        this.currentView = 'welcome';
    }

    async initialize() {
        await this.manager.loadCourse();
        this.renderModulesNav();
        this.updateProgressBadge();
        this.attachEventListeners();
        this.showWelcome();
    }

    renderModulesNav() {
        const nav = document.getElementById('modulesNav');
        nav.innerHTML = '';

        this.manager.course.modules.forEach((module, moduleIndex) => {
            const li = document.createElement('li');
            li.className = 'module-item';
            
            const link = document.createElement('a');
            link.className = 'module-link';
            if (moduleIndex === this.manager.currentModuleIndex) {
                link.classList.add('active');
            }

            const completedCount = module.lessons.filter(lesson => {
                return this.manager.completedLessons.includes(`${moduleIndex}-${module.lessons.indexOf(lesson)}`);
            }).length;

            link.innerHTML = `
                <span class="module-icon">${module.icon}</span>
                <span>${module.title}</span>
                <span class="module-status">${completedCount}/${module.lessons.length}</span>
            `;

            link.addEventListener('click', () => {
                this.manager.currentModuleIndex = moduleIndex;
                this.manager.currentLessonIndex = 0;
                this.showLesson();
            });

            li.appendChild(link);
            nav.appendChild(li);
        });

        // Update module count
        document.getElementById('moduleCount').textContent = 
            `El curso contiene ${this.manager.course.modules.length} módulos con ${this.manager.getTotalLessons()} lecciones en total.`;
    }

    updateProgressBadge() {
        document.getElementById('progressPercent').textContent = `${this.manager.getProgress()}%`;
    }

    showWelcome() {
        this.hideAllSections();
        document.getElementById('welcomeSection').classList.add('visible');
        this.currentView = 'welcome';
    }

    showLesson() {
        this.hideAllSections();
        const lesson = this.manager.getCurrentLesson();
        const module = this.manager.getCurrentModule();

        document.getElementById('moduleBreadcrumb').textContent = module.title;
        document.getElementById('lessonBreadcrumb').textContent = lesson.title;
        document.getElementById('lessonTitle').textContent = lesson.title;
        document.getElementById('lessonBody').innerHTML = lesson.content;

        // Render exercise if present
        const exerciseContainer = document.getElementById('exerciseContainer');
        if (lesson.exercise) {
            exerciseContainer.style.display = 'block';
            this.renderExercise(lesson.exercise);
        } else {
            exerciseContainer.style.display = 'none';
        }

        // Update navigation
        this.updateLessonNavigation();

        document.getElementById('lessonSection').classList.add('visible');
        this.currentView = 'lesson';
        this.manager.markLessonComplete(this.manager.currentModuleIndex, this.manager.currentLessonIndex);
        this.updateProgressBadge();
    }

    renderExercise(exercise) {
        const container = document.getElementById('exerciseContent');
        container.innerHTML = '';

        switch(exercise.type) {
            case 'reflection':
                container.innerHTML = `
                    <div class="exercise-item">
                        <label class="exercise-label">${exercise.question}</label>
                        <textarea class="exercise-input" placeholder="${exercise.placeholder}" rows="4"></textarea>
                        <button class="btn btn-primary btn-small exercise-button">Guardar Respuesta</button>
                    </div>
                `;
                break;

            case 'checklist':
                container.innerHTML = `
                    <div class="exercise-item">
                        ${exercise.items.map((item, idx) => `
                            <label style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; cursor: pointer;">
                                <input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;">
                                <span>${item}</span>
                            </label>
                        `).join('')}
                    </div>
                `;
                break;

            case 'form':
                container.innerHTML = `
                    <div class="exercise-item">
                        ${exercise.fields.map((field, idx) => `
                            <div style="margin-bottom: 1rem;">
                                <label class="exercise-label">${field.label}</label>
                                <input type="${field.type}" class="exercise-input" placeholder="${field.label}">
                            </div>
                        `).join('')}
                        <button class="btn btn-primary btn-small exercise-button">Enviar Formulario</button>
                    </div>
                `;
                break;
        }
    }

    updateLessonNavigation() {
        const prevBtn = document.getElementById('prevLessonBtn');
        const nextBtn = document.getElementById('nextLessonBtn');
        const currentLesson = this.manager.currentLessonIndex + 1;
        const totalLessons = this.manager.getCurrentModule().lessons.length;

        prevBtn.style.display = this.manager.hasPrevLesson() ? 'block' : 'none';
        nextBtn.style.display = this.manager.hasNextLesson() || this.manager.currentModuleIndex < this.manager.course.modules.length - 1 ? 'block' : 'none';

        document.getElementById('lessonProgressText').textContent = `${currentLesson} de ${totalLessons}`;
        document.getElementById('lessonProgressBar').style.width = `${(currentLesson / totalLessons) * 100}%`;
    }

    showSummary() {
        this.hideAllSections();
        const module = this.manager.getCurrentModule();
        
        document.getElementById('summaryTitle').textContent = `Módulo completado: ${module.title}`;
        document.getElementById('summaryContent').innerHTML = `
            <p>Has completado todas las lecciones del módulo <strong>${module.title}</strong></p>
            <p>Sigue adelante con el siguiente módulo para continuar tu aprendizaje.</p>
        `;

        document.getElementById('summarySection').classList.add('visible');
        this.currentView = 'summary';
    }

    showCompletion() {
        this.hideAllSections();
        const totalTime = Math.round((new Date() - this.manager.startTime) / 1000 / 60);
        
        document.getElementById('totalLessons').textContent = this.manager.getTotalLessons();
        document.getElementById('totalTime').textContent = totalTime < 60 ? `${totalTime}m` : `${Math.floor(totalTime / 60)}h`;

        document.getElementById('completionSection').classList.add('visible');
        this.currentView = 'completion';
    }

    hideAllSections() {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('visible');
        });
    }

    attachEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => {
            this.showLesson();
        });

        document.getElementById('backBtn').addEventListener('click', () => {
            this.showWelcome();
        });

        document.getElementById('prevLessonBtn').addEventListener('click', () => {
            if (this.manager.prevLesson()) {
                this.showLesson();
            }
        });

        document.getElementById('nextLessonBtn').addEventListener('click', () => {
            if (this.manager.nextLesson()) {
                this.showLesson();
            } else if (this.manager.nextModule()) {
                if (this.manager.isLastLesson()) {
                    // It's the last module
                    this.showCompletion();
                } else {
                    this.showSummary();
                }
            } else {
                this.showCompletion();
            }
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
            if (confirm('¿Está seguro de que desea reiniciar el curso? Se perderá todo el progreso.')) {
                this.manager.resetProgress();
                this.renderModulesNav();
                this.updateProgressBadge();
                this.showWelcome();
            }
        });

        document.getElementById('reviewModuleBtn').addEventListener('click', () => {
            this.manager.currentLessonIndex = 0;
            this.showLesson();
        });

        document.getElementById('nextModuleBtn').addEventListener('click', () => {
            if (this.manager.nextModule()) {
                this.showLesson();
            } else {
                this.showCompletion();
            }
        });

        document.getElementById('restartBtn').addEventListener('click', () => {
            this.manager.resetProgress();
            this.renderModulesNav();
            this.updateProgressBadge();
            this.showWelcome();
        });
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    const manager = new CourseManager();
    const ui = new UIController(manager);
    await ui.initialize();
});
