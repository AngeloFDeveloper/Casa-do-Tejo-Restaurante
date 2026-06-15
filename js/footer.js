/* footer.js — injeta o rodapé em todas as páginas */
(function () {
    document.currentScript.insertAdjacentHTML('afterend', `
<footer class="footer">
    <div class="container">
        <div class="row">

            <div class="col-lg-3 footer_col">
                <div class="footer_logo">
                    <div class="footer_logo_title">Casa do Tejo</div>
                    <div class="footer_logo_subtitle">restaurante</div>
                </div>
                <div class="copyright">
                    <p style="line-height:1.2;">&copy; ${new Date().getFullYear()} Casa do Tejo. Todos os direitos reservados.</p>
                </div>
            </div>

            <div class="col-lg-6 footer_col">
                <div class="footer_about">
                    <p>No coração de Lisboa, à beira do Tejo, celebramos os sabores da nossa terra com uma cozinha portuguesa contemporânea. Produtos locais, técnicas modernas, alma portuguesa — todos os dias, ao almoço e ao jantar.</p>
                </div>
            </div>

            <div class="col-lg-3 footer_col">
                <div class="footer_contact">
                    <ul>
                        <li class="d-flex flex-row align-items-start justify-content-start">
                            <div><div class="footer_contact_title">Morada:</div></div>
                            <div class="footer_contact_text">Rua do Terreiro do Paço, 12 — 1100-148 Lisboa</div>
                        </li>
                        <li class="d-flex flex-row align-items-start justify-content-start">
                            <div><div class="footer_contact_title">Telefone:</div></div>
                            <div class="footer_contact_text">+351 21 345 67 89</div>
                        </li>
                        <li class="d-flex flex-row align-items-start justify-content-start">
                            <div><div class="footer_contact_title">Email:</div></div>
                            <div class="footer_contact_text">reservas@casadotejo.pt</div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</footer>
`);
}());
