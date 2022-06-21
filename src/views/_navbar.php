<header class="header-nav<?= (isset($transparentMainNav) && $transparentMainNav) ? " bg-transparent" : " bg-white" ?>">
    <div class="container d-flex justify-centent-center">
        <div class="logo-container">
            <a href="/">
                <svg>
                    <use href="/assets/sprite.svg#logo"></use>
                </svg>
            </a>
        </div>
        <nav class="main-navbar ms-auto remove-onload-transition-md">
            <ul>
                <li class="<?= ($activePage == 'design') ? 'active' : ''; ?>">
                    <a href="/design.php">
                        <span>Design</span>
                    </a>
                </li>
                <li class="<?= ($activePage == 'development') ? 'active' : ''; ?>">
                    <a href="/development.php">
                        <span>Développement</span>
                    </a>
                </li>
                <li class="<?= ($activePage == 'illustration') ? 'active' : ''; ?>">
                    <a href="/illustration.php">
                        <span>Illustration</span>
                    </a>
                </li>
            </ul>
            <a class="btn btn-primary" href="mailto:meloscavezzoni@gmail.com">Contactez-moi</a>
        </nav>
        <div class="navbar-toggle-wrapper ms-auto">
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</header>