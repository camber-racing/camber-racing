const nav = document.querySelector(".nav");
const currentTeamEle = document.querySelector(".current-team");

currentTeamEle.classList.add("current-team");

const currentTeam = [
  [`Kshitij Singh`, `Captain/Chassis Lead`],
  [`Subodh Dangi `, `Project Manager/Suspension Lead`],
  [`Shashwat Geel`, `Techinal Lead - Vehicle Dynamics/Steering Lead`],
  [
    `Saliq Shamim Shah`,
    `Techinal Lead - Powertrain/ Intake and Electronics Lead`,
  ],
  [`Suresh Kumar`, `Manufacturing,	   R&D, Testing Lead/Brakes Lead`],
  [`Bishal Sikdar `, `Corporate and Finance Manager`],
  [`Sudha Sindhuja Nayani`, `Corporate and Media Lead`],
  [`Rasesh Lagdev`, `Composites Engineer`],
  [`Abraham K Mathew`, `Intake System Engineer`],
  [`Hariesh Sekar`, `Electrical and Electronics Engineer`],
  [`Pranjal Saxena`, `Drivetrain Engineer`],
  [`Jayaditya Reddy J`, `Steering Engineer`],
  [
    `Abhishek Malhotra`,
    `Corporate & Media Executive/ Vehicle Dynamics Engineer`,
  ],
  [`Sidharth V Menon`, `Corporate Executive`],
  [`Prince Kumar`, `Vehicle Dynamics Engineer`],
  [`Nitinshan Fredrick W`, `Vehicle Dynamics Engineer`],
  [`Sriram R`, `Vehicle Dynamics Engineer`],
  [`Harin Bhatt`, `Manufacturing`],
];

const years = [
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
];

currentTeam.forEach((member) => {
  const memberbox = document.createElement("div");
  const name = document.createElement("span");
  const position = document.createElement("span");
  const image = document.createElement("img");
  position.classList.add("position");
  name.classList.add("name");

  image.src = `./res/img/Team-Camber/team2021/${member[0].substr(
    0,
    member[0].indexOf(" ")
  )}.png`;

  name.innerHTML = "<br />" + member[0] + " <br />";
  position.innerHTML = member[1] + " <br />";

  memberbox.appendChild(image);
  memberbox.appendChild(name);
  memberbox.appendChild(position);

  currentTeamEle.appendChild(memberbox);
});

years.forEach((year) => {
  const span = document.createElement("span");
  span.classList.add("nav-link");
  span.innerHTML = year;
  nav.appendChild(span);
});

const yearElements = document.querySelectorAll(".nav span");
let currentyear = 2011;
let folder = `./res/img/Team-Camber/team${currentyear}`;
let mainDiv = document.createElement("div");
mainDiv.classList.add("all-div");

const selectYear = (year) => {
  year.classList.add("active");
  currentyear = year.innerText;
  folder = `./res/img/Team-Camber/team${currentyear}`;
  document.createElement("div");
  updatePhtots();
  console.log(currentyear);
  yearElements.forEach((y) => {
    if (y != year) {
      y.classList.remove("active");
    }
  });
};

yearElements[0].classList.add("active");

yearElements.forEach((year) => {
  year.addEventListener("click", (event) => {
    mainDiv.innerHTML = "";
    selectYear(year);
  });
});

const updatePhtots = () => {
  $.ajax({
    url: folder,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|png|PNG|JPG)$/)) {
            const image = document.createElement("img");
            image.classList.add("all-years");
            image.src = "." + val;
            mainDiv.appendChild(image);
          }
        });
    },
  });
};

const photos = document.querySelector(".photos");
photos.appendChild(mainDiv);
updatePhtots();
