<header class="header-nav bg-transparent">
    <div class="container d-flex justify-centent-center">
        <div class="logo-container">
            <a class="navbar-brand" href="javascript:;">
                <svg>
                    <use class="icon-anim" href="../assets/sprite.svg#logo"></use>
                </svg>
            </a>
        </div>
        <nav class="main-navbar ms-auto remove-transition-md">
            <ul>
                <!-- <li>
                    <a class="nav-links active" aria-current="page" href="javascript:;">Design</a>
                </li> -->
                <li class="<?= ($activePage == 'design') ? 'active' : ''; ?>">
                    <a href="javascript:;">
                        <span>Design</span>
                    </a>
                </li>
                <li class="<?= ($activePage == 'development') ? 'active' : ''; ?>">
                    <a href="javascript:;">
                        <span>Développement</span>
                    </a>
                </li>
                <li class="<?= ($activePage == 'illustration') ? 'active' : ''; ?>">
                    <a href="javascript:;">
                        <span>Illustration</span>
                    </a>
                </li>
            </ul>
            <a class="btn btn-primary" href="javascript:;">Contactez-moi</a>
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