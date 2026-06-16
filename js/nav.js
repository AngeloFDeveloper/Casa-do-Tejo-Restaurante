/* nav.js — injeta o cabeçalho em todas as páginas */
(function () {
    document.currentScript.insertAdjacentHTML('afterend', `
<header class="header">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="header_content d-flex flex-row align-items-center justify-content-between">
                    <div class="logo">
                        <a href="index.html">
                            <div>Casa do Tejo</div>
                            <div>restaurante</div>
                        </a>
                    </div>
                    <nav class="main_nav ml-auto">
                        <ul class="d-flex flex-row align-items-center justify-content-end">
                            <li><a href="menu.html">ementa</a></li>
                            <li><a href="about.html">sobre</a></li>
                            <li><a href="contact.html">contacto</a></li>
                            <li class="nav_cta"><a href="tel:+351213456789">Reservar</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
    <div class="hamburger">
        <div class="menu_toggle d-flex flex-row align-items-center justify-content-start">
            <span>menu</span>
            <div class="hamburger_container">
                <div class="menu_hamburger">
                    <div class="line_1 hamburger_lines"></div>
                    <div class="line_2 hamburger_lines"></div>
                    <div class="line_3 hamburger_lines"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="menu trans_800">
    <div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">
        <ul>
            <li><a href="menu.html">ementa</a></li>
            <li><a href="about.html">sobre nós</a></li>
            <li><a href="contact.html">contacto</a></li>
        </ul>
    </div>
    <a href="tel:+351213456789" class="menu_reservations_phone">
        <i class="fa fa-phone" style="margin-right:8px;font-size:11px;"></i>Reservar por telefone
    </a>
</div>
`);
}());
