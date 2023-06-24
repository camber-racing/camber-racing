//years to be displayed in the navbar selector
const years = [
  2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
];

//members from each year with position

const _2011 = [
  [`Pushkar Venkat Narayan`, `Team Captain`],
  [`Tarun Kumar Tripathy`, `Corporate Director`],
  [`Karthik Mohan`, `Technical Director`],
  [`Ajay Kumar Singh`, `Powertrain`],
  [`Akshay Jain`, `Suspension `],
  [`Aniket Kumar`, `Electrical & Electronics `],
  [`Baibhab Guru`, `Electrical & Electronics `],
  [`Preetham Reddy`, `Suspension `],
  [`Anupam Chakraborty`, `Suspension`],
  [`Akhilesh Krishnan`, `Brakes `],
  [`Anand Kumar`, `Brakes/ Driver`],
  [`Rishabh Dugar`, `Aerodynamics/ Body `],
  [`Prakanshu Bajpai`, `Chassis `],
  [`Sudha Ramaswamy`, `Suspension `],
  [`Ansh Verma`, `Chassis`],
  [`Archisman Sen`, `Accounts/ Driver`],
  [`Abhilash Raghunathan`, `Body/ Driver`],
  [`Mahesh Ramachandran`, `Electrical & Electronics `],
  [`Rashmi Sharma`, `Electrical & Electronics `],
  [`Avinash Karthik`, `Fabrication `],
  [`Sandeep Ganesh`, `Fabrication `],
  [`Raj Lalwani`, `Fabrication `],
  [`Kaushik Ramji`, `Fabrication `],
  [`Poojith Raj Kalluru`, `Fabrication `],
];

const _2012 = [
  [`Preetham Reddy`, `Team Captain`],
  [`Akhilesh Krishnan`, `Corporate Director`],
  [`Rishabh Dugar`, `Brand Manager`],
  [`Anand Kumar`, `Fabrication Head and Technical Incharge`],
  [`Avinash Karthik`, `Steering Incharge`],
  [`Ramji Kaushik`, `Chassis Department and Sourcing`],
  [`Raj Lalwani`, `Designer and Drafter`],
  [`Arka Chattaraj`, `Engines and Inventory Management`],
  [`Aman Singh Kakar`, `Suspension Department and Fabricator`],
  [`Shreyas Sansuddi`, `Chassis Department Member`],
  [`Roshni Francis`, `Steering Department Member `],
  [`Poojith Raj`, `Component Sourcing and Fabricator`],
  [`Phani Chebiyyam`, `Chassis Department Member`],
  [`Aditya Makineni`, `Suspension Department and Fabricator`],
  [`Shailee Upadhyay`, `Suspension Department and Fabricator`],
  [`Rupam Shrivastava`, `Chassis Department Member`],
  [`Harshin Lalpet`, `Material Procurement and Fabricator`],
  [`Vrushti Modi`, `Electrical Department`],
  [`Abhinav Kumar`, `Steering Department Member `],
  [`Ratna Mitheysh`, `Suspension Department and Fabricator`],
  [`Rahul Kumar Singh`, `Brakes Department and Fabricator`],
  [`Shaleen Bahadur`, `Brakes Department and Fabricator`],
  [`Shubham Sharma`, `Fabricator`],
  [`Shidhartha De`, `Driver`],
  [`Vishnu Prasad`, `Driver`],
];

const _2013 = [
  [`Phani Chebiyyam`, `Team Captain| Chassis Lead`],
  [`Aditya Makineni`, `Technical Director | Vehicle Dynamics Lead`],
  [`Aman Singh Kakar`, `Vehicle Dynamics Engineer`],
  [`Shailee Upadhyay`, `Vehicle Dynamics Engineer`],
  [`Roshni Francis`, `Electronics Lead`],
  [`Shreyas Sansuddi`, `Chassis Lead`],
  [`Rahul Kumar Singh`, `Brakes Lead`],
  [`Ratna Mitheysh`, `Vice Captain | Vehicle Dynamics Engineer`],
  [`Abhinav Kumar`, `Steering Lead | Accounts`],
  [`Shidhartha De`, `Powertrain Engineer`],
  [`Harshin Lalpet`, `Chassis & Composites Engineer`],
  [`Murtaza Khambaty`, `Powertrain Engineer`],
  [`Rishi Raj Singh`, `Corporate & Marketing Associate`],
  [`Pavan Teja`, `Suspension Engineer`],
  [`Vishwaprashanth Kumar`, `Electronics Engineer`],
  [`Murali Krishnan`, `Powertrain Engineer`],
  [`Bharath Iyer`, `Corporate & Marketing Associate`],
  [`Anshul Chaudhry`, `Steering & CAD Engineer`],
  [`Eeshaan Geel`, `Chassis & CAD Engineer`],
  [`Pritish Panda`, `Brakes Engineer`],
  [`Aditya Trivedi`, `Powertrain Engineer`],
  [`Aman Munjal`, `Electronics Engineer`],
  [`Gautham K Ram`, `Suspension Engineer`],
  [`Nilai Suresh`, `Suspension Engineer`],
  [`Abhishek Kumar `, `Chassis & CAD Engineer`],
  ,
];

const _2014 = [
  [`Ratna Mitheysh`, `Suspension Lead`],
  [`Abhinav Kumar`, `Steering Lead`],
  [`Rishi Raj Singh`, `Corporate Director`],
  [`Rahul Kumar Singh`, `Brakes & Wheel Assembly Lead`],
  [`Harshin Lalpet`, `Chassis`],
  [`Murtaza Khambaty`, `Powertrain Lead`],
  [`Shidhartha De`, `Powertrain Lead `],
  [`Murali Krishnan`, `Powertrain Engineer`],
  [`Aditya Trivedi`, `Powertrain Engineer`],
  [`Vishwaprashanth Kumar`, `Electronics Engineer`],
  [`Aman Munjal`, `Electronics Engineer`],
  [`Eeshaan Geel`, `Chassis & CAD Engineer`],
  [`Abhishek Kumar`, `Chassis & CAD Engineer`],
  [`Pritish Panda`, `Brakes Engineer`],
  [`Anshul Chaudhry`, `Steering & CAD Engineer`],
  [`Gautham K Ram`, `Suspension Engineer`],
  [`Nilai Suresh`, `Suspension Engineer`],
  [`Pavan Teja`, `"Suspension Engineer`],
  [`Bharath Iyer`, `Corporate & Marketing Associate`],
];

const _2015 = [
  [`Prashanth Kumar`, `Captain And Electronics Lead`],
  [`Anshul Chaudhary`, `Project Manager/Steering And Aero Lead`],
  [`Pritish Panda,`, `Brakes Lead`],
  [`Gautham K ram`, `Suspension Lead`],
  [`Nilai Suresh`, `Driver And Suspension Lead`],
  [`Eeshaan Geel`, `Wheel Assembly Lead`],
  [`Abhishek Kumar`, `Chassis Lead`],
  [`Murali Krishnan`, `Drivetrain Lead`],
  [`Aditya Trivedi`, `Powertrain Lead`],
  [`Salman Siddiqui`, `Powertrain Engineer`],
  [`Bvn Madhu`, `Suspension Engineer`],
  [`Shivam Bhatia`, `Suspension Engineer`],
  [`Kaustabh Ro`, `Wheel Assembly Engineer`],
  [`Aaradhya Naga`, `Senior Corporate Executive`],
  [`Vaibhav Kotnala`, `Steering Engineer`],
  [`Vaibhav Lalwani`, `Drivetrain Engineer`],
  [`Rohan Dat`, `Chassis Engineer`],
  [`Roni Ayan De`, `Suspension Engineer`],
  [`Anil Kumar Chaval`, `Powertrain Engineer`],
  [`Akbar Ali Bai`, `Brakes Engineer`],
];

const _2016 = [
  [`BVN Madhu`, `Team Captain `],
  [`Kaustabh Roy`, `Project Manager`],
  [`Aaradhya Nagar`, `Corporate Director`],
  [`Shivam Bhatia`, `Technical Director`],
  [`Salman Siddiqui`, `Technical Director`],
  [`Rohan Date`, `Chassis Lead`],
  [`Vaibhav Kotnala `, `Steering Lead`],
  [`Vaibhav Lalwani `, `Drivetrain Lead`],
  [`Ronak Hemani `, `Vehicle Dynamics Engineer`],
  [`Divyansh Tyagi `, `Vehicle Dynamics Engineer`],
  [`Roni Ayan Deb `, `Vehicle Dynamics Engineer`],
  [`Anil Kumar `, `Powertrain Engineer`],
  [`Akbar Ali Baig `, `Brakes/ Aerodynamics Engineer`],
  [`Uday Leekha `, `Brakes Engineer`],
  [`Rahul Jaiswal `, `Drivetrain Engineer`],
  [`Akhil Linga `, `Powertrain Engineer`],
  [`V.V. Praveen `, `Powertrain Engineer`],
  [`Deepak Reddy `, `Electrical Engineer`],
  [`Pradeep Kumar `, `Vehicle Dynamics Engineer`],
  [`Tarun Kumar `, `Drivetrain Engineer`],
  [`Atharva Kadam `, `Chassis Engineer`],
  [`Saiduth Ramesh `, `Powertrain/ Aerodynamics Engineer`],
  [`Priyanth Kumar`, `Electrical Engineer`],
  [`Sai Santosh `, `Electrical Engineer`],
  [`Chirag Samdaria `, `Corporate Associate`],
];

const _2017 = [
  [`Anil Kumar `, `Team Captain `],
  [`Ronak Hemani `, `Project Manager`],
  [`Akhil Linga`, `Chief Powertrain Engineer`],
  [`Roni Ayan Deb`, `Chief Vehicle Dynamics Engineer`],
  [`Rahul Jaiswal`, `Vehicle Testing Lead`],
  [`Divyansh tyagi`, `Cost Report Lead`],
  [`Akbar Ali Baig`, `Business Plan Lead`],
  [`Pradeep Kumar`, `Manufacturing Lead  VD `],
  [`VV Praveen`, `Manufacturing Lead  Powertrain `],
  [`Mriganka Kumar`, `Sponsorship Manager`],
  [`Uday Leekha`, `Inventory And Pits Control Manager`],
  [`Deepak Reddy`, `Logistics`],
  [`Krishna Bhargav`, `Website And App Devoloper`],
  [`Aditya Chacko ABRAHAM`, `Content Management Associate`],
  [`Adyasha Nanda`, `Business Plan Associate`],
  [`Akshay Kumar`, `Transmissions System`],
  [`Anirudh Chundawat`, `Pit Design And Fab Bay Maintanence`],
  [`Atharva Kadam`, `Frame`],
  [`Dhruv Mehta`, `Engine Electronics`],
  // [`Arunav Borah`, ``],
  [`Gopal Krishna Dwivedi`, `Intake`],
  [`Harshit Gambhir`, `Driver Console`],
  [`Junaid Singh`, `"Ride And Roll Rate`],
  [`Kshitij Soni`, `Steering Systems`],
  [`Kunal Kakkar`, `Wheel Assembly`],
  [`Mobashir Afzal`, `Fab Bay Maintanence`],
  [`Navneet Kumar`, `Vehicle Part Testing`],
  [`Praneet Ayyagari`, `Branding And Publicity Associate`],
  [`Saiduth Ramesh`, `Aero Pack Design`],
  [`Shawn Simeon`, `Media`],
  [`Shreya Manglam`, `Pit Design And Fab Bay Maintanence`],
  [`Varun Jain`, `DAQ  Vehicle Testing `],
];

const _2018 = [
  [`Saiduth Ramesh`, `Team Captain`],
  [`Atharva Kadam`, `Project Manager & Cost Report Lead`],
  [`Adyasha Nanda`, `Corporate Director & Buisness Plan Lead`],
  [`Kshitij Soni`, `Chief Vehicle Dynamics Engineer`],
  [`Akshay Kumar`, `CHIEF Powertrain Engineer`],
  [`Dhruv Mehta`, `Electrical & Electronics Lead`],
  [`Praneet Ayyagari`, `Finance Manager`],
  [`Gopal Dwivedi`, `Manufacturing Lead`],
  [`Anirudh Reddy`, `Driver Training Lead`],
  [`Harshit Gambhir`, `Electrical & Driverless Lead`],
  [`Varun Jain`, `Chief Vehicle Testing Engineer`],
  [`Arunav Bohra`, `CFD Lead`],
  [`Kunal Kakkar`, `Wheel Assembly`],
  [`Junaid Singh`, `Tires & Ride & Roll Rate`],
  [`K. Gautam`, `Kinematics`],
  [`Pradyumn Pandey`, `Frame And Ergonomics`],
  [`Ankur Singh`, `R & R Rate & Vehicle Part Testing`],
  [`S. Aravind`, `Brakes & Vehicle Part Testing`],
  [`Kunal Pandey`, `Brakes`],
  [`Darpan Yadav`, `Steering & Tires`],
  [`Vinith Kishan`, `Aero Design`],
  [`Aparajito Ganguli`, `Composites`],
  [`Yohann Bhumgara`, `Composites`],
  [`Aman Maheshwari`, `Cooling System`],
  [`Shikhar Sehgal`, `Intake`],
  [`Abhishek Nanda`, `Exhaust`],
  [`Kanwarpal Singh`, `Engine Mods & Control System`],
  [`Abhinav Roy`, `Engine Electronics`],
  [`MD FAHIM`, `Transmission`],
  [`Aditya Abraham`, `Senior Corporate Excecutive`],
  [`Aromal Jacob`, `Corporate Excecutive`],
  [`Sai Kiran`, `Media Excecutive`],
  [`Vishnu Rajeev`, `Corporate Excecutive`],
  [`Karthik Ganesh`, `Corporate Excecutive`],
  [`Ambarish Pradeep`, `C.F.D.`],
  [`Hrishav Paul`, `Machining Coder`],
  [`Aparajita Singh`, `Driverless`],
  [`Prakhar Dixit`, `Driverless`],
];

const _2019 = [
  [`Kunal Kakkar`, `Team Captain`],
  [`Aman Maheshwari`, `Project Manager`],
  [`Junaid Singh`, `Corporate Director`],
  [`Ankur Singh`, `Technical Director -VD`],
  [`Abhishek Nanda`, `Technical Director - Powertrain`],
  [`Md Fahim`, `Media & PR Lead`],
  [`Kanwarpal Singh Sekhon`, `Research & Development Lead`],
  [`Aravind S`, `Vehicle Testing Lead`],
  [`Darpan Yadav`, `Manufacturing Lead`],
  [`Pradyumn Pandey`, `Finance Manager `],
  [`Tenzin`, `Driverless Lead`],
  [`Aparajito Ganguli `, `Powertrain Engineer - Intake System`],
  [`Sourav Pattnaik`, `Powertrain Engineer - Cooling System`],
  [`Harshmeet Singh`, `Powertrain Engineer - Exhaust System`],
  [`Harvinder Singh`, `Powertrain Engineer - Engine Tuning & Mods`],
  [`Gautam Kavuri`, `Vehicle Dynamicist - Suspension`],
  [`Satvik Vatsa`, `Vehicle Dynamicist - Wheel Assembly`],
  [`Sparsh Agarwal`, `Vehicle Dynamicist - Suspension`],
  [`Ayush Singh`, `Vehicle Dynamicist - Chassis`],
  [`Yohann Bhumgara`, `Vehicle Dynamicist - Composites & Manufacturing`],
  [`Ambarish Pradeep`, `Vehicle Dynamicist - Aerodynamics `],
  [`Abhinav Roy`, `Electrical & Electronics Engineer`],
  [`Prasannjeet Singh`, `Corporate Executive`],
  [`Bishal Sikdar`, `Corporate Executive`],
  [`Kshitij Singh`, `Vehicle Dynamics Associate - Chassis`],
  [`Rituraj Das`, `Poertrain Associate - Engine Mods`],
  [`Saliq Shah`, `Powertain Associate - Engine mods`],
  [`Ankit Kumar Sahu`, `Vehicle Dynamics Associate - Aerodynamics`],
  [`Subodh Dangi`, `Vehicle Dynamics Associate - Suspension`],
  [`Sudha Sindhuja Nayani`, `Corporate Executive`],
  [`Suresh kumar`, `Vehicle Dynamics Associate - Brakes`],
  [`Udit Mini`, `Electrical & Electronics Associate`],
  [`Shashwat Geel`, `Vehicle Dynamics Associate - Steering`],
  ,
];

const _2020 = [
  [`Gautam Kavuri`, `Team Captain`],
  [`Abhinav Roy`, `Project Manager/ Electrical Lead`],
  [`Aparajito Ganguly`, `Corporate Lead`],
  [`Yohann Bhumgara`, `R&D and Testing Lead`],
  [`Sourav Pattnaik`, `Technical Director`],
  [`Ambarish Pradeep`, `Aerodynamics Lead`],
  [`Harshmeet Singh`, `Manufacturing Lead`],
  [`Harvinder Singh`, `Finance Director`],
  [`Kshitij Singh`, `Vehicle Dynamicist - Chassis`],
  [`Shashwat Geel`, `Vehicle Dynamicist - Steering`],
  [`Subodh Dangi `, `Vehicle Dynamicist - Suspension`],
  [`Suresh Kumar`, `Vehicle Dynamicist - Brakes`],
  [`Saliq Shamim Shah`, `Powertrain Engineer - Intake`],
  [`Bishal Sikdar `, `Corporate Executive`],
  [`Sudha Sindhuja Nayani`, `Corporate Executive`],
  [`Aditya Agrawal`, `Vehicle Dynamics Associate - Aerodynamics`],
  [`Rasesh Lagdev`, `Composites Associate`],
  [`Abraham K Mathew`, `Powertrain Associate - Intake`],
  [`Hariesh Sekar`, `Electrical and Electronics Associate`],
  [`Mohit Galani`, `Powertrain Associate - Cooling System`],
  [`Pranjal Saxena`, `Powertrain Associate - Drivetrain`],
  [`Jayaditya Reddy J`, `Vehicle Dynamics Associate - Steering`],
];

const _2021 = [
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
  [`Sidharth V Menon`, `Corporate Executive`],
  [`Nitinshan Fredrick W`, `Vehicle Dynamics Engineer`],
];

const _2022 = [
  ["Jayaditya Reddy J ", " Team Captain"],
  ["Pranjal Saxena ", " Project Manager"],
  ["Abraham K Mathew ", " Technical Director, Finance Manager"],
  ["Sidharth V Menon ", " Corporate Manager, Media Lead"],
  ["Nitinshan Fredrick W ", " Manufacturing Lead"],
  ["Hariesh Sekar ", " Electrical And Electronics Lead"],
];

const _2023 = [
  ["Ashwin Ganeshan ", " Team Captain"],
  ["Athul Jebi ", " Project Manager"],
  ["Athul K B ", " Technical Director, Finance Manager"],
  ["Dattatreya Nagireggdy ", " Corporate Manager, Media Lead"],
  ["David Amruth ", " Manufacturing Lead"],
  ["Glenn Paul Aby ", " Electrical And Electronics Lead"],
  ["Pareekshith Indeever ", " Corporate Manager, Media Lead"],
  ["Polepalle Hashwanth ", " Manufacturing Lead"],
  ["Riya Srivastava ", " Electrical And Electronics Lead"],
  ["Ujjwal Parwani ", " Manufacturing Lead"],
  ["Vrishab Davey ", " Electrical And Electronics Lead"],
];

//selecting navbar and div to display the current team
const nav = document.querySelector(".nav");
const currentTeamEle = document.querySelector(".current-team");

//making links for each year in navbar
years.forEach((year) => {
  const span = document.createElement("span");
  span.classList.add("nav-link");
  span.innerHTML = year;
  nav.appendChild(span);
});

// select all span in navbar
const yearElements = document.querySelectorAll(".nav span");
let currentyear = 2023;
let folder = `./res/img/Team-Camber/team${currentyear}`;

yearElements[0].classList.add("active");

const selectYear = (year) => {
  year.classList.add("active");
  currentyear = year.innerText;
  folder = `./res/img/Team-Camber/team${currentyear}`;
  updatePhtots();
  yearElements.forEach((y) => {
    if (y != year) {
      y.classList.remove("active");
    }
  });
};

yearElements.forEach((year) => {
  year.addEventListener("click", (event) => {
    selectYear(year);
  });
});

const allmembers = [
  _2011,
  _2012,
  _2013,
  _2014,
  _2015,
  _2016,
  _2017,
  _2018,
  _2019,
  _2020,
  _2021,
  _2022,
  _2023,
];

const updatePhtots = () => {
  currentTeamEle.innerHTML = null;

  allmembers[currentyear - 2011].forEach((member) => {
    const memberbox = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("p");
    const position = document.createElement("p");

    image.classList.add("all-years");
    position.classList.add("position");
    name.classList.add("name");

    name.innerHTML = "<br />" + member[0] + " <br />";
    position.innerHTML = member[1] + " <br />";

    let photoFileName = member[0].toLowerCase().trim();

    if ((currentyear >= 2015 && currentyear <= 2017) || currentyear >= 2021) {
      photoFileName = photoFileName.substring(0, photoFileName.indexOf(" "));
    }

    if (currentyear == 2016 && member[0].includes("Vaibhav")) {
      let commonName = "vaibhav";
      if (member[0].includes("Kotnala")) {
        photoFileName = commonName + "k";
      } else {
        photoFileName = commonName + "l";
      }
    }

    let extension = ".jpg";
    if (currentyear >= 2021) {
      extension = ".png";
    }

    if (currentyear === 2023 && member[0].includes("Athul")) {
      let commonName = "athul";
      if (member[0].includes("Jebi")) {
        photoFileName = commonName + " Jebi";
      } else {
        photoFileName = commonName + " K";
      }
    }

    const url = `./res/img/Team-Camber/team${currentyear}/${photoFileName}${extension}`;
    image.src = url;

    memberbox.appendChild(image);
    memberbox.appendChild(name);
    memberbox.appendChild(position);

    currentTeamEle.appendChild(memberbox);
  });
};

updatePhtots();
