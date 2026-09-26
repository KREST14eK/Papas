const pages = {
    home: {
        title: 'Главная',
        content: `
            <section class="welcome-panel" aria-labelledby="welcome-title">
                <div class="welcome-copy">
                    <p class="eyebrow"><span class="status-dot"></span> Академия покера MS</p>
                    <h1 id="welcome-title">Игра начинается<br>с ясного решения.</h1>
                    <p class="welcome-description">Разбирайтесь в стратегии, учитесь думать на несколько ходов вперёд и собирайте свою игру по частям.</p>
                    <div class="welcome-actions">
                        <a class="button button-primary" href="courses.html">Смотреть курсы <span aria-hidden="true">↗</span></a>
                        <a class="text-link" href="streams.html">Расписание стримов <span aria-hidden="true">→</span></a>
                    </div>
                </div>
                <div class="table-art" aria-hidden="true">
                    <div class="table-ring"></div>
                    <div class="playing-card card-one"><span>A</span><b>♠</b></div>
                    <div class="playing-card card-two"><span>K</span><b>♦</b></div>
                    <div class="chip chip-red"><i></i></div>
                    <div class="chip chip-blue"><i></i></div>
                    <span class="table-mark">MS&nbsp; / &nbsp;POKER</span>
                </div>
            </section>

            <section class="section-block" aria-labelledby="overview-title">
                <div class="section-heading">
                    <div><p class="eyebrow">Ваше пространство</p><h2 id="overview-title">Всё для следующего уровня</h2></div>
                    <span class="section-note">Платформа готовится к запуску</span>
                </div>
                <div class="overview-grid">
                    <a class="overview-item" href="courses.html">
                        <span class="item-index">01</span><span class="item-icon">♧</span>
                        <span class="item-title">Каталог курсов</span><span class="item-detail">Найдите свою следующую тему</span><span class="item-arrow">↗</span>
                    </a>
                    <a class="overview-item" href="my-courses.html">
                        <span class="item-index">02</span><span class="item-icon">▤</span>
                        <span class="item-title">Моё обучение</span><span class="item-detail">Курсы и ваш прогресс</span><span class="item-arrow">↗</span>
                    </a>
                    <a class="overview-item" href="streams.html">
                        <span class="item-index">03</span><span class="item-icon">◉</span>
                        <span class="item-title">Прямые эфиры</span><span class="item-detail">Разборы игры вместе с экспертами</span><span class="item-arrow">↗</span>
                    </a>
                </div>
            </section>
            <section class="latest-post-block" aria-labelledby="latest-post-title" hidden>
                <div class="section-heading"><div><p class="eyebrow">Свежая публикация</p><h2 id="latest-post-title">Последний пост</h2></div><a class="text-link" href="posts.html">Все посты <span aria-hidden="true">→</span></a></div>
                <article class="latest-post-card"></article>
            </section>
            <section class="bottom-note"><span class="note-mark">MS</span><p><strong>Покер — это решения.</strong> Мы поможем принимать их увереннее.</p><div class="bottom-note-actions"><a href="register.html">Присоединиться <span aria-hidden="true">→</span></a><a href="login.html">Войти</a></div></section>
        `
    },
    courses: {
        title: 'Курсы',
        content: `
            <div class="page-intro"><p class="eyebrow">Учитесь в своём темпе</p><h1>Каталог курсов</h1><p>Практичные знания о покере — от основ до продвинутой стратегии.</p></div>
            <section class="course-list content-loading" aria-live="polite"><p>Загружаем курсы…</p></section>
        `
    },
    course: {
        title: 'Курс',
        content: `
            <section class="course-detail content-loading" aria-live="polite"><p>Загружаем курс…</p></section>
        `
    },
    'my-courses': {
        title: 'Мои курсы',
        content: `
            <div class="page-intro"><p class="eyebrow">Личный прогресс</p><h1>Мои курсы</h1><p>Здесь будут собраны ваши занятия и прогресс обучения.</p></div>
            <section class="empty-panel"><div class="empty-visual" aria-hidden="true"><span>▤</span></div><p class="eyebrow">Ваше обучение</p><h2>Пока нет активных курсов</h2><p>Когда вы выберете курс, он появится в этом разделе.</p><a class="button button-secondary" href="courses.html">Открыть каталог</a></section>
        `
    },
    cart: {
        title: 'Корзина',
        content: `
            <div class="page-intro"><p class="eyebrow">Выбранное обучение</p><h1>Корзина</h1><p>Курсы, которые вы решите добавить, будут ждать здесь.</p></div>
            <section class="empty-panel"><div class="empty-visual" aria-hidden="true"><span>♧</span></div><p class="eyebrow">Ничего лишнего</p><h2>Корзина пока пуста</h2><p>Загляните в каталог, чтобы найти подходящий курс.</p><a class="button button-secondary" href="courses.html">Перейти к курсам</a></section>
        `
    },
    streams: {
        title: 'Стримы',
        content: `
            <div class="page-intro"><p class="eyebrow">Игра в прямом эфире</p><h1>Стримы и разборы</h1><p>Смотрите игру, задавайте вопросы и разбирайте решения вместе с командой MS.</p></div>
            <section class="stream-content content-loading" aria-live="polite"><p>Загружаем эфиры…</p></section>
        `
    },
    posts: {
        title: 'Посты',
        content: `
            <div class="page-intro"><p class="eyebrow">Новости и заметки</p><h1>Посты MS Poker</h1><p>Обновления, разборы раздач и полезные мысли о покере.</p></div>
            <section class="post-list content-loading" aria-live="polite"><p>Загружаем публикации…</p></section>
        `
    },
    admin: {
        title: 'Конструктор',
        content: `
            <div class="page-intro"><p class="eyebrow">Только для администратора</p><h1>Управление MS Poker</h1><p>Выберите раздел для редактирования.</p></div>
            <nav class="editor-hub" aria-label="Инструменты администратора">
                <a href="admin-courses.html"><span class="hub-icon">♧</span><span><strong>Курсы</strong><small>Программы, материалы и видео</small></span><b>↗</b></a>
                <a href="admin-posts.html"><span class="hub-icon">▧</span><span><strong>Посты</strong><small>Текстовые публикации и обложки</small></span><b>↗</b></a>
                <a href="admin-schedule.html"><span class="hub-icon">▦</span><span><strong>Расписание</strong><small>Тема, дата и анонс эфира</small></span><b>↗</b></a>
                <a href="admin-streams.html"><span class="hub-icon">◉</span><span><strong>Управление эфиром</strong><small>Опубликовать ссылку на YouTube Live</small></span><b>↗</b></a>
            </nav>
        `
    },
    'admin-courses': {
        title: 'Конструктор курсов',
        content: `
            <div class="page-intro"><p class="eyebrow">Администрирование / Курсы</p><h1>Новый курс</h1><p>Один курс может состоять из нескольких последовательных уроков.</p></div>
            <form class="editor-form editor-panel course-editor" data-kind="course"><label for="course-title">Название курса</label><input id="course-title" name="title" required maxlength="120" placeholder="Например, основы турнирной стратегии"><label for="course-summary">Краткое описание</label><input id="course-summary" name="summary" maxlength="220" placeholder="Для кого этот курс и чему он научит"><label for="course-body">Описание курса</label><textarea id="course-body" name="body" rows="5" placeholder="Цели, программа и результат обучения"></textarea><div class="lesson-heading"><div><h2>Уроки курса</h2><p>Добавь от 1 до 30 видеоуроков по порядку.</p></div><button class="button button-secondary add-lesson" type="button"><span aria-hidden="true">＋</span> Добавить урок</button></div><div class="lesson-editor-list"></div><label for="course-status">Публикация курса</label><select id="course-status" name="status"><option value="draft">Сохранить как черновик</option><option value="published">Опубликовать курс</option></select><p class="form-note">Для каждого урока выбери видеофайл или укажи прямую ссылку на видео. Загруженные файлы сейчас сохраняются в публичный Supabase Storage: ссылки можно извлечь из браузера. Не загружай туда платный или приватный материал.</p><button class="button button-primary" type="submit">Сохранить курс и уроки</button><p class="form-status" role="status"></p></form>
        `
    },
    'admin-posts': {
        title: 'Конструктор постов',
        content: `
            <div class="page-intro"><p class="eyebrow">Администрирование / Посты</p><h1>Новый пост</h1><p>Подготовьте публикацию для раздела новостей.</p></div>
            <form class="editor-form editor-panel" data-kind="post"><label for="post-title">Заголовок</label><input id="post-title" name="title" required maxlength="120" placeholder="Заголовок публикации"><label for="post-summary">Краткое описание</label><input id="post-summary" name="summary" maxlength="220" placeholder="Короткий анонс"><label for="post-body">Текст поста</label><textarea id="post-body" name="body" rows="10" placeholder="Текст публикации"></textarea><label for="post-image">Обложка</label><input id="post-image" name="media" type="file" accept="image/jpeg,image/png,image/webp"><label for="post-status">Публикация</label><select id="post-status" name="status"><option value="draft">Сохранить как черновик</option><option value="published">Опубликовать</option></select><button class="button button-primary" type="submit">Сохранить пост</button><p class="form-status" role="status"></p></form>
        `
    },
    'admin-schedule': {
        title: 'Расписание эфиров',
        content: `
            <div class="page-intro"><p class="eyebrow">Администрирование / Расписание</p><h1>Анонс эфира</h1><p>Опубликуйте тему, дату и обложку будущей трансляции.</p></div>
            <form class="editor-form editor-panel" data-kind="schedule"><label for="schedule-title">Тема эфира</label><input id="schedule-title" name="title" required maxlength="120" placeholder="Разбор турнирной раздачи"><label for="schedule-summary">Описание</label><input id="schedule-summary" name="summary" maxlength="220" placeholder="Кратко о предстоящем эфире"><label for="schedule-date">Дата и время начала</label><input id="schedule-date" name="scheduled_at" type="datetime-local" required><label for="schedule-image">Обложка эфира</label><input id="schedule-image" name="media" type="file" accept="image/jpeg,image/png,image/webp"><label for="schedule-video-id">ID трансляции YouTube <span class="label-note">можно добавить позже</span></label><input id="schedule-video-id" name="live_video_id" placeholder="YouTube video ID"><label for="schedule-status">Статус</label><select id="schedule-status" name="status"><option value="draft">Черновик</option><option value="published">Опубликовать анонс</option></select><button class="button button-primary" type="submit">Сохранить расписание</button><p class="form-status" role="status"></p></form>
        `
    },
    'admin-streams': {
        title: 'Управление эфиром',
        content: `
            <div class="page-intro"><p class="eyebrow">Администрирование / Эфиры</p><h1>Управление эфиром</h1><p>Запустите эфир в YouTube Studio или OBS и подключите его к странице MS Poker.</p></div>
            <form class="editor-form editor-panel" data-kind="stream"><label for="stream-title">Название эфира</label><input id="stream-title" name="title" required maxlength="120" placeholder="Покерный разбор в прямом эфире"><label for="stream-summary">Описание для зрителей</label><input id="stream-summary" name="summary" maxlength="220" placeholder="Что будет в эфире"><label for="stream-video-id">ID видео YouTube Live</label><input id="stream-video-id" name="live_video_id" required pattern="[A-Za-z0-9_-]{6,20}" placeholder="ID из ссылки на трансляцию"><p class="form-note">Вставьте ID из URL youtube.com/watch?v=ID. Саму трансляцию запустите через YouTube Studio; зрители увидят её на странице «Стримы».</p><input type="hidden" name="status" value="live"><button class="button button-primary" type="submit">Опубликовать эфир</button><p class="form-status" role="status"></p></form>
        `
    },
    login: {
        title: 'Войти',
        content: `
            <div class="auth-layout"><section class="auth-aside"><img src="assets/ms-poker-mark.svg" alt="Логотип MS Poker"><p class="eyebrow">MS Poker</p><h1>Хорошая игра начинается с тебя.</h1><p>Войдите в аккаунт, чтобы следить за своим обучением.</p></section><section class="auth-panel"><p class="eyebrow">С возвращением</p><h2>Войти в аккаунт</h2><p class="auth-hint">Вход по электронной почте и паролю.</p><form id="login-form"><label for="login-email">Электронная почта</label><input id="login-email" name="email" type="email" placeholder="name@example.com" autocomplete="email" required><label for="login-password">Пароль</label><input id="login-password" name="password" type="password" placeholder="Ваш пароль" autocomplete="current-password" required><button class="button button-primary" type="submit">Войти</button><p class="form-status" role="status"></p></form><button class="text-button" type="button" id="reset-password">Забыли пароль?</button><p class="auth-switch">Ещё нет аккаунта? <a href="register.html">Регистрация</a></p></section></div>
        `
    },
    register: {
        title: 'Регистрация',
        content: `
            <div class="auth-layout"><section class="auth-aside"><img src="assets/ms-poker-mark.svg" alt="Логотип MS Poker"><p class="eyebrow">MS Poker</p><h1>Тренируйся. Разбирай. Играй.</h1><p>Создайте аккаунт и продолжайте обучение с любого устройства.</p></section><section class="auth-panel"><p class="eyebrow">Первый шаг</p><h2>Создать аккаунт</h2><p class="auth-hint">Регистрация по электронной почте.</p><form id="register-form"><label for="register-name">Имя</label><input id="register-name" name="name" type="text" placeholder="Как к вам обращаться" autocomplete="name" required><label for="register-email">Электронная почта</label><input id="register-email" name="email" type="email" placeholder="name@example.com" autocomplete="email" required><label for="register-password">Пароль</label><input id="register-password" name="password" type="password" minlength="8" placeholder="Не менее 8 символов" autocomplete="new-password" required><button class="button button-primary" type="submit">Создать аккаунт</button><p class="form-status" role="status"></p></form><p class="auth-switch">Уже зарегистрированы? <a href="login.html">Войти</a></p></section></div>
        `
    }
};

const navigation = [
    { id: 'home', label: 'Главная', href: 'index.html', icon: '⌂' },
    { id: 'courses', label: 'Курсы', href: 'courses.html', icon: '♧' },
    { id: 'my-courses', label: 'Мои курсы', href: 'my-courses.html', icon: '▤' },
    { id: 'cart', label: 'Корзина', href: 'cart.html', icon: '♢' },
    { id: 'streams', label: 'Стримы', href: 'streams.html', icon: '◉' },
    { id: 'posts', label: 'Посты', href: 'posts.html', icon: '▧' }
];

const currentPage = document.body.dataset.page || 'home';
const page = pages[currentPage] || pages.home;
const adminPages = new Set(['admin', 'admin-courses', 'admin-posts', 'admin-schedule', 'admin-streams']);
const isAdminPage = adminPages.has(currentPage);
const app = document.querySelector('#app');

app.innerHTML = `
    <div class="site-shell">
        <aside class="sidebar">
            <button class="brand-toggle" type="button" aria-label="Свернуть боковую панель" title="Свернуть или развернуть меню"><img src="assets/ms-poker-mark.svg" alt=""><span>MS <b>Poker</b></span><span class="collapse-indicator" aria-hidden="true">‹</span></button>
            <p class="nav-caption">Платформа</p>
            <nav class="primary-nav" aria-label="Основная навигация">
                ${navigation.map(item => `<a class="nav-link${currentPage === item.id ? ' is-active' : ''}" href="${item.href}" title="${item.label}"${currentPage === item.id ? ' aria-current="page"' : ''}><span class="nav-icon" aria-hidden="true">${item.icon}</span><span class="nav-label">${item.label}</span></a>`).join('')}
            </nav>
            <div class="sidebar-bottom"><span class="sidebar-rule"></span><a id="admin-nav" class="nav-link" href="admin.html" title="Управление"><span class="nav-icon" aria-hidden="true">✎</span><span class="nav-label">Управление</span></a><div class="auth-guest-links"><a class="nav-link${currentPage === 'login' ? ' is-active' : ''}" href="login.html" title="Войти"${currentPage === 'login' ? ' aria-current="page"' : ''}><span class="nav-icon" aria-hidden="true">↗</span><span class="nav-label">Войти</span></a><a class="join-link" href="register.html"><span class="nav-label">Создать аккаунт</span><span aria-hidden="true">→</span></a></div><div class="auth-user-links" hidden><span class="signed-in-email"></span><button class="signout-button" type="button">Выйти</button></div><p class="sidebar-footnote">© 2026 MS Poker</p></div>
        </aside>
        <div class="main-column">
            <header class="topbar"><div class="breadcrumb"><span>MS Poker</span><span class="breadcrumb-divider">/</span><strong>${page.title}</strong></div><div class="topbar-actions"><span class="topbar-user" hidden></span><button class="topbar-signout" type="button" hidden>Выйти</button><button class="theme-toggle" type="button" aria-label="Включить тёмную тему" title="Переключить тему"><span class="theme-icon" aria-hidden="true">☾</span></button></div></header>
            <main class="page-content">${isAdminPage ? '<section class="empty-panel access-check"><p class="eyebrow">MS Poker</p><h2>Проверяем права доступа…</h2></section>' : page.content}</main>
            <footer class="site-footer"><span>MS Poker</span><span>Учись видеть больше за столом.</span><a href="streams.html">Стримы <span aria-hidden="true">↗</span></a></footer>
        </div>
    </div>
`;

const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const savedTheme = localStorage.getItem('ms-poker-theme');
const sidebarToggle = document.querySelector('.brand-toggle');

if (localStorage.getItem('ms-poker-sidebar') === 'collapsed') {
    document.body.classList.add('sidebar-collapsed');
}

function updateSidebarControl() {
    const isCollapsed = document.body.classList.contains('sidebar-collapsed');
    sidebarToggle.setAttribute('aria-label', isCollapsed ? 'Развернуть боковую панель' : 'Свернуть боковую панель');
    sidebarToggle.querySelector('.collapse-indicator').textContent = isCollapsed ? '›' : '‹';
}

sidebarToggle.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-collapsed');
    localStorage.setItem('ms-poker-sidebar', document.body.classList.contains('sidebar-collapsed') ? 'collapsed' : 'expanded');
    updateSidebarControl();
});
updateSidebarControl();

if (savedTheme === 'dark') {
    document.documentElement.dataset.theme = 'dark';
}

function updateThemeControl() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
    themeIcon.textContent = isDark ? '☼' : '☾';
}

updateThemeControl();
themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('ms-poker-theme', nextTheme);
    updateThemeControl();
});

const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const formatDate = value => value ? new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium' }).format(new Date(value)) : '';
const config = window.MS_POKER_CONFIG || {};
const authForms = [document.querySelector('#login-form'), document.querySelector('#register-form')].filter(Boolean);
let supabaseClient = null;
let currentUser = null;

function setFormMessage(form, message, isError = false) {
    const status = form.querySelector('.form-status');
    if (!status) return;
    status.textContent = message;
    status.classList.toggle('is-error', isError);
}

function authErrorMessage(error) {
    const message = error?.message || 'Не удалось выполнить запрос. Проверьте подключение и настройки Supabase.';
    if (/invalid login credentials/i.test(message)) return 'Неверная почта или пароль.';
    if (/user already registered/i.test(message)) return 'Аккаунт с такой почтой уже существует. Попробуйте войти.';
    if (/password should be at least/i.test(message)) return 'Пароль слишком короткий.';
    if (/email not confirmed/i.test(message)) return 'Сначала подтвердите почту по ссылке из письма.';
    return message;
}

function renderPublicEntries(kind, entries) {
    const list = document.querySelector(kind === 'post' ? '.post-list' : '.course-list');
    if (!list) return;
    if (!entries.length) {
        list.innerHTML = `<section class="empty-panel"><div class="empty-visual" aria-hidden="true"><span>${kind === 'post' ? '▧' : '♠'}</span></div><p class="eyebrow">MS Poker</p><h2>${kind === 'post' ? 'Постов пока нет' : 'Каталог пока пуст'}</h2><p>Опубликованные материалы появятся здесь.</p></section>`;
        return;
    }
    list.innerHTML = entries.map(entry => `
        <article class="${kind === 'post' ? 'post-card' : 'course-card'}">
            ${entry.media_url && kind === 'post' ? `<img class="content-cover" src="${escapeHTML(entry.media_url)}" alt="Обложка: ${escapeHTML(entry.title)}">` : ''}
            <p class="eyebrow">${kind === 'post' ? 'Пост' : 'Курс'} · ${formatDate(entry.created_at)}</p>
            <h2>${escapeHTML(entry.title)}</h2>
            ${entry.summary ? `<p class="post-summary">${escapeHTML(entry.summary)}</p>` : ''}
            ${entry.body ? `<p class="post-body">${escapeHTML(entry.body).replace(/\n/g, '<br>')}</p>` : ''}
            ${kind === 'course' ? `<p class="course-lesson-count">${Number(entry.ms_poker_lessons?.[0]?.count || 0)} уроков</p><a href="course.html?id=${encodeURIComponent(entry.id)}" class="text-link">Открыть курс <span aria-hidden="true">→</span></a>` : ''}
            ${entry.video_url ? `<a class="post-video" href="${escapeHTML(entry.video_url)}" target="_blank" rel="noopener noreferrer">Смотреть видео ↗</a>` : ''}
        </article>
    `).join('');
}

function renderLessonPlayer(lesson) {
    if (lesson.media_url) return `<video class="content-video" controls preload="metadata" src="${escapeHTML(lesson.media_url)}"></video>`;
    let videoUrl;
    try { videoUrl = new URL(lesson.video_url); } catch { return ''; }
    if (videoUrl.protocol !== 'https:') return `<a class="post-video" href="${escapeHTML(videoUrl.href)}" target="_blank" rel="noopener noreferrer">Открыть видео ↗</a>`;
    const youtubeHost = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be', 'www.youtube-nocookie.com'].includes(videoUrl.hostname);
    if (youtubeHost) {
        const videoId = videoUrl.hostname.endsWith('youtu.be') ? videoUrl.pathname.slice(1) : videoUrl.searchParams.get('v') || videoUrl.pathname.split('/').filter(Boolean).pop();
        if (!/^[A-Za-z0-9_-]{6,20}$/.test(videoId || '')) return '';
        return `<div class="stream-frame"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}" title="${escapeHTML(lesson.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
    }
    if (videoUrl.hostname === 'vk.com' && videoUrl.pathname === '/video_ext.php') {
        return `<div class="stream-frame"><iframe src="${escapeHTML(videoUrl.href)}" title="${escapeHTML(lesson.title)}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" allowfullscreen></iframe></div>`;
    }
    if (/\.(mp4|webm|m3u8)$/i.test(videoUrl.pathname)) return `<video class="content-video" controls preload="metadata" src="${escapeHTML(videoUrl.href)}"></video>`;
    return `<a class="post-video" href="${escapeHTML(videoUrl.href)}" target="_blank" rel="noopener noreferrer">Открыть видео ↗</a>`;
}

function renderStreams(entries) {
    const list = document.querySelector('.stream-content');
    if (!list) return;
    const live = entries.find(entry => entry.kind === 'stream' && entry.status === 'live' && /^[A-Za-z0-9_-]{6,20}$/.test(entry.live_video_id || ''));
    const schedule = entries.filter(entry => entry.kind === 'schedule');
    list.innerHTML = `${live ? `<article class="live-stream"><div class="stream-frame"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(live.live_video_id)}" title="${escapeHTML(live.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="live-caption"><span class="live-badge">В эфире</span><h2>${escapeHTML(live.title)}</h2><p>${escapeHTML(live.summary)}</p></div></article>` : ''}${schedule.length ? `<section class="schedule-list"><p class="eyebrow">Расписание</p>${schedule.map(entry => `<article class="schedule-card">${entry.media_url ? `<img src="${escapeHTML(entry.media_url)}" alt="" class="schedule-cover">` : ''}<div><p class="eyebrow">${formatDate(entry.scheduled_at)}</p><h2>${escapeHTML(entry.title)}</h2><p>${escapeHTML(entry.summary)}</p></div></article>`).join('')}</section>` : ''}${!live && !schedule.length ? '<section class="empty-panel"><div class="empty-visual live-visual" aria-hidden="true"><span>◉</span></div><p class="eyebrow">Расписание</p><h2>Ближайших эфиров пока нет</h2><p>Новое расписание появится здесь.</p></section>' : ''}`;
}

async function loadPublicContent() {
    if (!supabaseClient) {
        document.querySelectorAll('.content-loading').forEach(el => { el.innerHTML = '<p>Не удалось подключиться к Supabase. Проверьте config.js и загрузку SDK.</p>'; });
        return;
    }
    if (currentPage === 'home') {
        const { data: latestPost, error } = await supabaseClient.from('ms_poker_content').select('id,title,summary,body,media_url,created_at').eq('kind', 'post').eq('status', 'published').order('created_at', { ascending: false }).limit(1).maybeSingle();
        if (!error && latestPost) {
            const section = document.querySelector('.latest-post-block');
            section.querySelector('.latest-post-card').innerHTML = `${latestPost.media_url ? `<img class="latest-post-cover" src="${escapeHTML(latestPost.media_url)}" alt="Обложка: ${escapeHTML(latestPost.title)}">` : ''}<div class="latest-post-copy"><p class="eyebrow">${formatDate(latestPost.created_at)}</p><h3>${escapeHTML(latestPost.title)}</h3>${latestPost.summary ? `<p>${escapeHTML(latestPost.summary)}</p>` : latestPost.body ? `<p>${escapeHTML(latestPost.body)}</p>` : ''}<a class="text-link" href="posts.html">Читать в разделе постов <span aria-hidden="true">→</span></a></div>`;
            section.hidden = false;
        }
        return;
    }
    if (currentPage === 'courses' || currentPage === 'posts') {
        const kind = currentPage === 'courses' ? 'course' : 'post';
        const selection = kind === 'course' ? '*, ms_poker_lessons(count)' : '*';
        const { data, error } = await supabaseClient.from('ms_poker_content').select(selection).eq('kind', kind).eq('status', 'published').order('created_at', { ascending: false });
        if (error) {
            document.querySelector(`.${kind === 'course' ? 'course-list' : 'post-list'}`).innerHTML = `<p class="inline-error">${escapeHTML(error.message)}. Проверь, что выполнил supabase-content.sql.</p>`;
            return;
        }
        renderPublicEntries(kind, data || []);
    }
    if (currentPage === 'course') {
        const courseId = new URLSearchParams(location.search).get('id');
        const detail = document.querySelector('.course-detail');
        if (!courseId || !/^[0-9a-f-]{36}$/i.test(courseId)) {
            detail.innerHTML = '<section class="empty-panel"><h2>Курс не найден</h2><a class="button button-secondary" href="courses.html">К каталогу</a></section>';
            return;
        }
        const { data: course, error: courseError } = await supabaseClient.from('ms_poker_content').select('*').eq('id', courseId).eq('kind', 'course').eq('status', 'published').maybeSingle();
        if (courseError || !course) {
            detail.innerHTML = '<section class="empty-panel"><h2>Курс не найден</h2><p>Он мог быть снят с публикации.</p><a class="button button-secondary" href="courses.html">К каталогу</a></section>';
            return;
        }
        const { data: lessons, error: lessonsError } = await supabaseClient.from('ms_poker_lessons').select('*').eq('course_id', courseId).eq('status', 'published').order('position', { ascending: true });
        if (lessonsError) {
            detail.innerHTML = `<p class="inline-error">${escapeHTML(lessonsError.message)}. Проверь, что выполнил обновлённый supabase-content.sql.</p>`;
            return;
        }
        detail.innerHTML = `<a class="text-link" href="courses.html">← Все курсы</a><header class="page-intro course-detail-heading"><p class="eyebrow">Курс · ${lessons.length} уроков</p><h1>${escapeHTML(course.title)}</h1>${course.summary ? `<p>${escapeHTML(course.summary)}</p>` : ''}${course.body ? `<p>${escapeHTML(course.body).replace(/\n/g, '<br>')}</p>` : ''}</header><section class="course-lesson-list">${lessons.length ? lessons.map((lesson, index) => `<article class="course-lesson"><div class="lesson-title-row"><span class="lesson-number">${String(index + 1).padStart(2, '0')}</span><div><h2>${escapeHTML(lesson.title)}</h2><span class="lesson-duration">${lesson.duration_minutes ? `${lesson.duration_minutes} мин` : ''}</span></div></div>${lesson.description ? `<p>${escapeHTML(lesson.description)}</p>` : ''}${renderLessonPlayer(lesson)}</article>`).join('') : '<section class="empty-panel"><h2>Уроки готовятся</h2></section>'}</section>`;
    }
    if (currentPage === 'streams') {
        const { data, error } = await supabaseClient.from('ms_poker_content').select('*').in('kind', ['stream', 'schedule']).in('status', ['published', 'live']).order('scheduled_at', { ascending: true });
        if (error) {
            document.querySelector('.stream-content').innerHTML = `<p class="inline-error">${escapeHTML(error.message)}. Проверь, что выполнил supabase-content.sql.</p>`;
            return;
        }
        renderStreams(data || []);
    }
}

async function getUserRole(user) {
    if (!user || !supabaseClient) return null;
    const { data, error } = await supabaseClient.from('profiles').select('role').eq('id', user.id).maybeSingle();
    if (error) throw error;
    return data?.role || null;
}

function updateAuthNavigation(user, role) {
    currentUser = user;
    document.querySelector('.auth-guest-links').hidden = Boolean(user);
    document.querySelector('.auth-user-links').hidden = !user;
    document.querySelector('.signed-in-email').textContent = user?.email || '';
    document.querySelector('#admin-nav').hidden = role !== 'admin';
    document.querySelector('.topbar-user').hidden = !user;
    document.querySelector('.topbar-user').textContent = user?.email || '';
    document.querySelector('.topbar-signout').hidden = !user;
}

function showAccessDenied(message, showLogin = false) {
    const main = document.querySelector('.page-content');
    main.innerHTML = `<section class="empty-panel access-denied"><div class="empty-visual" aria-hidden="true"><span>⌑</span></div><p class="eyebrow">Доступ ограничен</p><h2>${showLogin ? 'Войдите в аккаунт' : 'Нет прав администратора'}</h2><p>${escapeHTML(message)}</p><a class="button button-secondary" href="${showLogin ? `login.html?next=${encodeURIComponent(location.pathname.split('/').pop())}` : 'index.html'}">${showLogin ? 'Перейти ко входу' : 'На главную'}</a></section>`;
}

function renderEditorHub() {
    document.querySelector('.page-content').innerHTML = pages.admin.content;
}

function renderAdminEditor() {
    document.querySelector('.page-content').innerHTML = pages[currentPage].content;
    const form = document.querySelector('.editor-form');
    if (currentPage === 'admin-courses') initializeLessonEditor(form);
    form.addEventListener('submit', async event => {
        event.preventDefault();
        const submit = form.querySelector('[type="submit"]');
        submit.disabled = true;
        setFormMessage(form, 'Сохраняем…');
        try {
            const values = new FormData(form);
            if (form.dataset.kind === 'course') {
                await saveCourseWithLessons(form, values);
                return;
            }
            const media = values.get('media');
            let mediaUrl = null;
            if (media instanceof File && media.size) {
                if (media.size > 100 * 1024 * 1024) throw new Error('Файл больше разрешённых 100 МБ.');
                const safeName = media.name.replace(/[^A-Za-z0-9._-]/g, '-');
                const path = `${currentUser.id}/${crypto.randomUUID()}-${safeName}`;
                const { error: uploadError } = await supabaseClient.storage.from('ms-poker-media').upload(path, media, { contentType: media.type, upsert: false });
                if (uploadError) throw uploadError;
                mediaUrl = supabaseClient.storage.from('ms-poker-media').getPublicUrl(path).data.publicUrl;
            }
            const videoId = String(values.get('live_video_id') || '').trim();
            if (videoId && !/^[A-Za-z0-9_-]{6,20}$/.test(videoId)) throw new Error('Укажи корректный ID видео YouTube, а не полную ссылку.');
            const scheduled = values.get('scheduled_at');
            const row = {
                kind: form.dataset.kind,
                title: String(values.get('title') || '').trim(),
                summary: String(values.get('summary') || '').trim(),
                body: String(values.get('body') || '').trim(),
                media_url: mediaUrl,
                video_url: String(values.get('video_url') || '').trim() || null,
                live_video_id: videoId || null,
                scheduled_at: scheduled ? new Date(scheduled).toISOString() : null,
                status: String(values.get('status') || 'draft'),
                created_by: currentUser.id
            };
            const { error } = await supabaseClient.from('ms_poker_content').insert(row);
            if (error) throw error;
            form.reset();
            setFormMessage(form, 'Сохранено в Supabase.');
        } catch (error) {
            setFormMessage(form, authErrorMessage(error), true);
        } finally {
            submit.disabled = false;
        }
    });
}

function createLessonRow(index) {
    const row = document.createElement('article');
    row.className = 'lesson-editor-row';
    row.dataset.lesson = '';
    row.innerHTML = `<div class="lesson-row-header"><span class="lesson-number">${String(index).padStart(2, '0')}</span><strong>Урок ${index}</strong><button class="remove-lesson" type="button" aria-label="Удалить урок ${index}" title="Удалить урок">×</button></div><label>Название урока</label><input name="lesson_title" required maxlength="120" placeholder="Например, позиция за столом"><label>Описание урока</label><textarea name="lesson_description" rows="2" maxlength="500" placeholder="Что разберём в этом видео"></textarea><div class="lesson-source-grid"><div><label>Продолжительность, минут</label><input name="lesson_duration" type="number" min="1" max="15" step="1" value="10" required></div><div><label>Ссылка на видео (YouTube, VK или файл)</label><input name="lesson_video_url" type="url" placeholder="https://..."></div></div><label>Или загрузить видео (MP4/WebM, до 100 МБ)</label><input name="lesson_file" type="file" accept="video/mp4,video/webm">`;
    return row;
}

function initializeLessonEditor(form) {
    const list = form.querySelector('.lesson-editor-list');
    const addButton = form.querySelector('.add-lesson');
    list.append(createLessonRow(1));
    updateLessonRows(list);
    addButton.addEventListener('click', () => {
        const count = list.querySelectorAll('[data-lesson]').length;
        if (count >= 30) return;
        list.append(createLessonRow(count + 1));
        updateLessonRows(list);
    });
    list.addEventListener('click', event => {
        const removeButton = event.target.closest('.remove-lesson');
        if (!removeButton || list.querySelectorAll('[data-lesson]').length <= 1) return;
        removeButton.closest('[data-lesson]').remove();
        updateLessonRows(list);
    });
}

function updateLessonRows(list) {
    const rows = [...list.querySelectorAll('[data-lesson]')];
    rows.forEach((row, index) => {
        const number = index + 1;
        row.querySelector('.lesson-number').textContent = String(number).padStart(2, '0');
        row.querySelector('.lesson-row-header strong').textContent = `Урок ${number}`;
        row.querySelector('.remove-lesson').setAttribute('aria-label', `Удалить урок ${number}`);
        row.querySelector('.remove-lesson').disabled = rows.length === 1;
    });
    const addButton = document.querySelector('.add-lesson');
    addButton.disabled = rows.length >= 30;
    addButton.setAttribute('aria-label', rows.length >= 30 ? 'Достигнут лимит в 30 уроков' : 'Добавить урок');
}

async function saveCourseWithLessons(form, values) {
    const rows = [...form.querySelectorAll('[data-lesson]')];
    if (!rows.length || rows.length > 30) throw new Error('Добавь от 1 до 30 уроков.');
    const lessons = rows.map((row, index) => {
        const title = row.querySelector('[name="lesson_title"]').value.trim();
        const description = row.querySelector('[name="lesson_description"]').value.trim();
        const duration = Number(row.querySelector('[name="lesson_duration"]').value);
        const videoUrl = row.querySelector('[name="lesson_video_url"]').value.trim();
        const file = row.querySelector('[name="lesson_file"]').files[0] || null;
        if (!title) throw new Error(`Укажи название урока ${index + 1}.`);
        if (!Number.isInteger(duration) || duration < 1 || duration > 15) throw new Error(`Для урока ${index + 1} укажи длительность от 1 до 15 минут.`);
        if (Boolean(videoUrl) === Boolean(file)) throw new Error(`Для урока ${index + 1} выбери ровно один источник: ссылку или файл.`);
        if (file && file.size > 100 * 1024 * 1024) throw new Error(`Видео урока ${index + 1} больше разрешённых 100 МБ.`);
        return { position: index + 1, title, description, duration, videoUrl, file };
    });

    for (const lesson of lessons) {
        if (!lesson.file) continue;
        setFormMessage(form, `Проверяем длительность урока ${lesson.position} из ${lessons.length}…`);
        const actualDuration = await readVideoDuration(lesson.file);
        if (actualDuration > 15 * 60) throw new Error(`Видео урока ${lesson.position} длиннее 15 минут.`);
        lesson.duration = Math.max(1, Math.ceil(actualDuration / 60));
    }

    const { data: course, error: courseError } = await supabaseClient.from('ms_poker_content').insert({
        kind: 'course',
        title: String(values.get('title')).trim(),
        summary: String(values.get('summary') || '').trim(),
        body: String(values.get('body') || '').trim(),
        status: 'draft',
        created_by: currentUser.id
    }).select('id').single();
    if (courseError) throw courseError;

    const lessonRows = [];
    for (const lesson of lessons) {
        let mediaUrl = null;
        if (lesson.file) {
            setFormMessage(form, `Загружаем урок ${lesson.position} из ${lessons.length}…`);
            const safeName = lesson.file.name.replace(/[^A-Za-z0-9._-]/g, '-');
            const path = `${currentUser.id}/${course.id}/${crypto.randomUUID()}-${safeName}`;
            const { error: uploadError } = await supabaseClient.storage.from('ms-poker-media').upload(path, lesson.file, { contentType: lesson.file.type, upsert: false });
            if (uploadError) throw uploadError;
            mediaUrl = supabaseClient.storage.from('ms-poker-media').getPublicUrl(path).data.publicUrl;
        }
        lessonRows.push({
            course_id: course.id,
            title: lesson.title,
            description: lesson.description,
            duration_minutes: lesson.duration,
            position: lesson.position,
            video_url: lesson.videoUrl || null,
            media_url: mediaUrl,
            status: 'published',
            created_by: currentUser.id
        });
    }

    setFormMessage(form, `Сохраняем ${lessonRows.length} уроков…`);
    const { error: lessonsError } = await supabaseClient.from('ms_poker_lessons').insert(lessonRows);
    if (lessonsError) throw lessonsError;

    const requestedStatus = String(values.get('status') || 'draft');
    if (requestedStatus === 'published') {
        const { error: publishError } = await supabaseClient.from('ms_poker_content').update({ status: 'published' }).eq('id', course.id);
        if (publishError) throw publishError;
    }
    form.reset();
    const list = form.querySelector('.lesson-editor-list');
    list.replaceChildren(createLessonRow(1));
    updateLessonRows(list);
    setFormMessage(form, requestedStatus === 'published' ? 'Курс и уроки опубликованы.' : 'Курс и уроки сохранены как черновик.');
}

function readVideoDuration(file) {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        const objectUrl = URL.createObjectURL(file);
        video.preload = 'metadata';
        video.onloadedmetadata = () => {
            URL.revokeObjectURL(objectUrl);
            if (Number.isFinite(video.duration)) resolve(video.duration);
            else reject(new Error('Не удалось определить длительность видеофайла.'));
        };
        video.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            reject(new Error('Не удалось прочитать видеофайл. Проверь, что это MP4 или WebM.'));
        };
        video.src = objectUrl;
    });
}

async function initializeSupabase() {
    if (!config.SUPABASE_URL || !config.SUPABASE_PUBLISHABLE_KEY || !window.supabase?.createClient) {
        authForms.forEach(form => setFormMessage(form, 'Проверь config.js и загрузку Supabase SDK.', true));
        if (isAdminPage) showAccessDenied('Подключение Supabase не настроено.');
        await loadPublicContent();
        return;
    }
    supabaseClient = window.supabase.createClient(config.SUPABASE_URL, config.SUPABASE_PUBLISHABLE_KEY);
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    if (userError && userError.name !== 'AuthSessionMissingError') console.warn('Supabase auth session check failed:', userError.message);
    let role = null;
    if (user) {
        try { role = await getUserRole(user); }
        catch (error) { console.warn('Could not read profile role:', error.message); }
    }
    updateAuthNavigation(user, role);

    if (isAdminPage) {
        if (!user) {
            showAccessDenied('Для этого раздела войдите в аккаунт.', true);
            return;
        }
        if (role !== 'admin') {
            showAccessDenied(role ? 'Этот аккаунт не назначен администратором.' : 'Не найдена роль admin в profiles. Выполни SQL-схему и назначь роль своему профилю.');
            return;
        }
        if (currentPage === 'admin') renderEditorHub();
        else renderAdminEditor();
        return;
    }

    await loadPublicContent();
}

document.querySelector('#login-form')?.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!supabaseClient) { setFormMessage(form, 'Supabase ещё не подключился. Проверьте соединение и config.js.', true); return; }
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    setFormMessage(form, 'Входим…');
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email: form.elements.email.value.trim(), password: form.elements.password.value });
    if (error) {
        setFormMessage(form, authErrorMessage(error), true);
        submit.disabled = false;
        return;
    }
    let role = null;
    try { role = await getUserRole(data.user); } catch (roleError) { console.warn('Profile role lookup failed:', roleError.message); }
    updateAuthNavigation(data.user, role);
    const next = new URLSearchParams(location.search).get('next');
    const target = next && /^admin(?:-[a-z]+)?\.html$/.test(next) && role === 'admin' ? next : role === 'admin' ? 'admin.html' : 'index.html';
    setFormMessage(form, 'Вход выполнен.');
    location.assign(target);
});

document.querySelector('#register-form')?.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!supabaseClient) { setFormMessage(form, 'Supabase ещё не подключился. Проверьте соединение и config.js.', true); return; }
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    setFormMessage(form, 'Создаём аккаунт…');
    const { data, error } = await supabaseClient.auth.signUp({
        email: form.elements.email.value.trim(),
        password: form.elements.password.value,
        options: { data: { display_name: form.elements.name.value.trim() }, emailRedirectTo: new URL('index.html', location.href).href }
    });
    if (error) {
        setFormMessage(form, authErrorMessage(error), true);
        submit.disabled = false;
        return;
    }
    if (data.session) {
        setFormMessage(form, 'Аккаунт создан, вы вошли.');
        location.assign('index.html');
    } else {
        setFormMessage(form, 'Аккаунт создан. Если подтверждение email включено в Supabase, проверьте почту.');
        submit.disabled = false;
    }
});

document.querySelector('#reset-password')?.addEventListener('click', async event => {
    const form = document.querySelector('#login-form');
    const email = form.elements.email.value.trim();
    if (!email) { setFormMessage(form, 'Сначала укажите электронную почту.', true); return; }
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo: new URL('login.html', location.href).href });
    setFormMessage(form, error ? authErrorMessage(error) : 'Если аккаунт с этой почтой существует, инструкция отправлена.', Boolean(error));
});

document.querySelector('.signout-button').addEventListener('click', async () => {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
    location.assign('index.html');
});

document.querySelector('.topbar-signout').addEventListener('click', async () => {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
    location.assign('index.html');
});

initializeSupabase();