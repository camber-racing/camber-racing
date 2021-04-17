const carMenu = [
  "CR800",
  "LJM01",
  "Beast",
  "CR14",
  "CR15",
  "CR16",
  "CR18",
  "CRX",
];
const header = `<nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand" href="#" id="navbar-brand">
      <img src="res/img/logos/logo-without-bg.png"
        id="navbar-brand-img" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html"><span>Home</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./aboutus.html"><span>About Us</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="partners.html"><span>Partners</span></a>
        </li>
        <li class="nav-item dropdown show" >
          <a class="nav-link dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>The Paddock</span></a>
          <div class="dropdown-menu dropdown-carlist" aria-labelledby="dropdownMenuLink">
           </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="team.html"><span>Our Team</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact"><span>Contact Us</span></a>
        </li>
      </ul>
    </div>
  </nav>`;

const footer = `
  <footer class="camber-footer container-fluid" id="contact">
    <div class="footer-main text-center mb-2">
      <div class="footer-col content ">
        <h5 class="ml-mr-auto">Camber Racing</h5>
        <div class="social-media-icon footer-nav-links">
          <a href="https://www.facebook.com/camberracing/" target="_blank"><i class="fab fa-facebook-square" style="color:#3b5998;"></i></a>
          <a href="https://www.instagram.com/camberracing/" target="_blank"><i class="fab fa-instagram-square" style="color:#2f2f2f;"></i></a>
          <a href="https://www.youtube.com/channel/UC_UDIR7rodwCFUY5iEZ8F7A" target="_blank"><i class="fab fa-youtube-square" style="color:#b72727;"></i></a>
          <a href="#" target="_blank"><i class="fab fa-linkedin" style="color:#0d78b0;"></i></a>
        </div>
        <div class="ml-mr-auto footer-newsletter-button">
          <div class=" px-2 py-2 ">
            <a href="#">
              <h6>Subscribe to our Newsletter! <i class="fas fa-play"></i></h6>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div class=></div>
      <div class="footer-contact-us text-left ">
      <div>
        <h6 class="heading pl-3">Address</h6>
        <h6 class="pl-3">Camber Racing</h6>


        <div class="mb-3 pr-8 pl-3">
          <p>
            Department of Automobile Engineering SRM Institute of Science &
            Technology, Kattankulathur Tamil Nadu - 603203
          </p>
        </div>
      </div>
      <div>
        <h6 class="heading mb-3 pl-3">Contact Us</h6>
        <h6 class="pl-3">Kshitij Singh</h6>
        <div class="pl-3">
          <ul>
            <li>
              <span>Mail: captain.camberracing@gmail.com </span></i></a>
            </li>
            <li>
              <span>Mob: +91 81849 85356 </span></i></a>
            </li>
          </ul>
      </div>
        </div>


      </div>

      <div class="input-section ">
        <h6 class="heading mb-3  pl-3">GET IN TOUCH</h6>

        <div>

          <input class="my-3 ml-2 py-1 pl-3" type="text" placeholder="Name" />
          <input class="my-3 ml-2 py-1 pl-3" type="text" placeholder="Email Address" />
          <input class="my-3 ml-2 py-1 pl-3" type="text" placeholder="Company Name" />
          <input class="my-3 ml-2 py-4 pl-3 text-height-1" type="text"  placeholder="Message" rows="4" cols="50"/>
        </div>
        <div class="ml-2 footer-send-button">
          <div class=" py-2 align-items-center justify-content-center">
            <a href="#">
              <h6>Send</h6>
              </i>
            </a>
          </div>

        </div>

      </div>
    </div>

    <hr class="mx-5" />
    <div class="row hr-below mx-5">
      <div class="col-lg 8 col-md-7 col-sm-7 copyright">
        <small>&copy;Copyright Camber Racing SRMIST | 2020</small>
      </div>
      <div class="col-lg-4 col-md-5 col-sm-5 brand-mark">
        <small>Made with <span>&hearts;</span> from
          <a href= https://srmkzilla.net target=\"_blank\"><span>SRMKZILLA</span></a></small>
      </div>
    </div>

  </footer>`;

const headerEle = document.querySelector("header");
const footerEle = document.querySelector("footer");
window.onload = function () {
  const dropdownCarList = document.querySelector(".dropdown-carlist");

  carMenu.forEach((car) => {
    const carLink = document.createElement("a");
    carLink.classList.add("dropdown-item");
    carLink.href = `cars.html?car=${car}`;
    carLink.innerText = car;
    dropdownCarList.appendChild(carLink);
  });
};

headerEle.innerHTML = header;
footerEle.innerHTML = footer;
