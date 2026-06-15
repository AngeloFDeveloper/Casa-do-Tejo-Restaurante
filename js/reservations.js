/* reservations.js — injeta a secção de reservas em todas as páginas */
(function () {
    document.currentScript.insertAdjacentHTML('afterend', `
<div class="reservations text-center">
    <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1800&q=85" data-speed="0.8"></div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="reservations_content d-flex flex-column align-items-center justify-content-center">
                    <div class="res_stars page_subtitle">5 Estrelas</div>
                    <div class="res_title">Fazer uma Reserva</div>
                    <div class="res_form_container">
                        <form action="#" id="res_form" class="res_form">
                            <div class="d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                <input type="text" id="datepicker" class="res_input" placeholder="Data" required="required">
                                <select class="res_input res_select" required="required">
                                    <option selected="">11:00</option>
                                    <option>11:30</option>
                                    <option>12:00</option>
                                    <option>12:30</option>
                                    <option>13:00</option>
                                    <option>19:00</option>
                                    <option>19:30</option>
                                    <option>20:00</option>
                                    <option>20:30</option>
                                    <option>21:00</option>
                                </select>
                                <select class="res_select">
                                    <option disabled="" selected="">2 pessoas</option>
                                    <option>3 pessoas</option>
                                    <option>4 pessoas</option>
                                    <option>5 pessoas</option>
                                    <option>6 pessoas</option>
                                    <option>7+ pessoas</option>
                                </select>
                            </div>
                            <button class="res_button">Reservar Mesa</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`);
}());
