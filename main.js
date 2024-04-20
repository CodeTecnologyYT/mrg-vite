import './style.css'
import contentMainUrl from './public/seccion1.png'
import contentAboutUsUrl from './public/seccion2.png'
import contentContactUrl from './public/seccion3.png'
document.querySelector('#app').innerHTML = `
  <div class="page">
    <header>
        <nav>
            <div class="header_logo">MRG</div>
            <ul class="header_menu">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#our">Acerca de nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li class="contacto"><a class="button button_primary" target="_blank" href="https://wa.me/message/PG2XXY5JXDTVL1">Contactanos</a></li>
            </ul>
        </nav>
    </header>
    <main id="home">
        <div class="main_container_image">
            <img src="${contentMainUrl}">
        </div>
        <div class="main_content">
            <h1>SOPORTE, ASESORIA Y VENTA DE MAQUINAS DE COSER</h1>
            <p>Nos especializamos en la reparación, mantenimiento y 
                venta de repuestos para máquinas de coser. Cuento con 
                años de experiencia en soluciones confiables y eficientes 
                para tu equipo. Confía en nosotros para mantener tus máquinas en perfecto estado. 
                ¡Contáctanos hoy mismo!</p>
            <button class="button button_primary">Ver servicios</button>
        </div>
    </main>
    <section id="our" class="section_aboutus">
        <div class="section_aboutus_content">
           <h2>ACERCA DE NOSOTROS</h2>
           <p>Bienvenidos a nuestro servicio técnico especializado en máquinas de coser y 
              maquinaria industrial. Con más de XX años de experiencia en el sector, 
              nos enorgullecemos de ofrecer soluciones expertas y eficientes para todos los 
              problemas relacionados con tu equipo.</p>
           <p>Nuestro equipo de técnicos altamente cualificados está dedicado a brindar un servicio 
              de calidad y confianza, con un enfoque en la satisfacción total del cliente. Ya sea que 
              necesites una reparación, mantenimiento preventivo o asesoramiento técnico, estamos aquí 
              para ayudarte.</p> 
        </div>
        <div class="section_aboutus_image">
            <img src="${contentAboutUsUrl}" alt="">
        </div>
    </section>
    <section id="services" class="section_services">
        <div class="section_services_container">
            <h2>SERVICIOS</h2>
            <div class="section_services_list">
                <div class="section_services_item">
                    <h3>01</h3>
                    <h3>Asesoria</h3>
                    <p>Te ayudamos a elegir la maquinaria de coser perfecta para tu negocio. Nuestros expertos
                        analizan tus necesidades y presupuesto para recomendarte las mejores opciones.</p>
                </div>
                <div class="section_services_item">
                    <h3>02</h3>
                    <h3>Reparación y mantenimiento</h3>
                    <p>Ofrecemos servicios expertos de reparación y mantenimiento para máquinas de coser. Nuestro 
                    equipo de técnicos altamente capacitados está listo para solucionar cualquier problema que pueda 
                    tener tu máquina, asegurando su funcionamiento óptimo y prolongando su vida útil.</p>
                </div>
                <div class="section_services_item">
                    <h3>03</h3>
                    <h3>Ajustes y calibración</h3>
                    <p>Ofrecemos servicios de ajuste y calibración para máquinas de coser. Nuestros expertos aseguran 
                    que tu máquina funcione de manera óptima, realizando ajustes precisos para garantizar su rendimiento 
                    y durabilidad. </p>
                </div>
                <div class="section_services_item">
                    <h3>04</h3>
                    <h3>Venta de repuestos y maquinas</h3>
                    <p>Ofrecemos una amplia selección de repuestos y accesorios para máquinas de coser. Ya sea que 
                    necesites una aguja nueva, una bobina o cualquier otra pieza, tenemos lo que necesitas para mantener 
                    tu máquina en óptimas condiciones.</p>
                </div> 
            </div>
        </div>
    </section>
    <section class="section_contact">
        <div class="section_contact_image">
            <img src="${contentContactUrl}" alt="">
        </div>
        <div class="section_contact_container">
             <h2>Contactanos</h2>
             <a href="https://wa.me/message/PG2XXY5JXDTVL1" target="_blank" class="contact_whatshap">
                <i class="fa-brands fa-whatsapp"></i>
                <span>Envianos un mensaje</span>
             </a>
             <a href="https://www.youtube.com/@MRG0130" target="_blank" class="contact_youtube">
                <i class="fa-brands fa-youtube"></i>
                <span>Mira nuestro contenido</span>
             </a>
        </div>
    </section>
    <footer>
        <p>Derecho Reservados</p>
    </footer>
  </div>
  <div class="loading">
    <div>
        <p>MRG</p>
        <p><i class="fa-solid fa-spinner fa-spin"></i></p>   
    </div>
  </div>
`
let pageSelector = document.querySelector(".page");
pageSelector.style.display = "none";
let loadingSelector = document.querySelector(".loading");
window.addEventListener("load", (event) => {
    pageSelector.style.display = "block";
    pageSelector.classList.add('animate__animated',"animate__fadeIn");
    loadingSelector.style.display ="none";
})