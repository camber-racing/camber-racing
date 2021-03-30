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

const _2011 = [
  `/res/img/Team-Camber/team2011/abhilash%20raghunathan.jpg`,
  `/res/img/Team-Camber/team2011/ajay%20singh.jpg`,
  `/res/img/Team-Camber/team2011/akhilesh%20krishnan.jpg`,
  `/res/img/Team-Camber/team2011/akshay%20jain.jpg`,
  `/res/img/Team-Camber/team2011/anand%20kumar.jpg`,
  `/res/img/Team-Camber/team2011/aniket%20kumar.jpg`,
  `/res/img/Team-Camber/team2011/ansh%20verma.jpg`,
  `/res/img/Team-Camber/team2011/anupam%20chakraborty.jpg`,
  `/res/img/Team-Camber/team2011/archisman.jpg`,
  `/res/img/Team-Camber/team2011/avinash%20karthik.jpg`,
  `/res/img/Team-Camber/team2011/baibhab%20guru.jpg`,
  `/res/img/Team-Camber/team2011/karthik.jpg`,
  `/res/img/Team-Camber/team2011/kartik%20mohan.jpg`,
  `/res/img/Team-Camber/team2011/kaushik%20ramji.jpg`,
  `/res/img/Team-Camber/team2011/mahesh%20ramchandran.jpg`,
  `/res/img/Team-Camber/team2011/poojith%20raj.jpg`,
  `/res/img/Team-Camber/team2011/prakanshu%20bajpai.jpg`,
  `/res/img/Team-Camber/team2011/pritham%20reddy.jpg`,
  `/res/img/Team-Camber/team2011/pushkar%20venkat.jpg`,
  `/res/img/Team-Camber/team2011/raj%20lalwani.jpg`,
  `/res/img/Team-Camber/team2011/rashmi%20sharma.jpg`,
  `/res/img/Team-Camber/team2011/rishabh%20dugar.jpg`,
  `/res/img/Team-Camber/team2011/sandeep%20ganesh.jpg`,
  `/res/img/Team-Camber/team2011/sriram.jpg`,
  `/res/img/Team-Camber/team2011/sudha%20ramaswamy.jpg`,
  `/res/img/Team-Camber/team2011/tarun%20tripathy.jpg`,
];

const _2012 = [
  `/res/img/Team-Camber/team2012/abhinav%20kumar.jpg`,
  `/res/img/Team-Camber/team2012/aditya%20mekineni.jpg`,
  `/res/img/Team-Camber/team2012/akhilesh%20krishnan.jpg`,
  `/res/img/Team-Camber/team2012/aman%20singh.jpg`,
  `/res/img/Team-Camber/team2012/anand%20kumar.jpg`,
  `/res/img/Team-Camber/team2012/arka%20chattaraj.jpg`,
  `/res/img/Team-Camber/team2012/avinash%20karthik.jpg`,
  `/res/img/Team-Camber/team2012/harshin%20lalpet.jpg`,
  `/res/img/Team-Camber/team2012/kaushik%20ramji.jpg`,
  `/res/img/Team-Camber/team2012/phani%20chebiyyam.jpg`,
  `/res/img/Team-Camber/team2012/poojith%20kallaru.jpg`,
  `/res/img/Team-Camber/team2012/poojith%20raj.jpg`,
  `/res/img/Team-Camber/team2012/preetam%20reddy.jpg`,
  `/res/img/Team-Camber/team2012/rahul.jpg`,
  `/res/img/Team-Camber/team2012/raj%20lalwani.jpg`,
  `/res/img/Team-Camber/team2012/ratna.jpg`,
  `/res/img/Team-Camber/team2012/rishabh%20dugar.jpg`,
  `/res/img/Team-Camber/team2012/roshni%20francis.jpg`,
  `/res/img/Team-Camber/team2012/rupam%20srivastava.jpg`,
  `/res/img/Team-Camber/team2012/shailee%20upadhyay.jpg`,
  `/res/img/Team-Camber/team2012/shaleen%20bahadur.jpg`,
  `/res/img/Team-Camber/team2012/shubham%20sharma.jpg`,
  `/res/img/Team-Camber/team2012/siddhartha.jpg`,
  `/res/img/Team-Camber/team2012/vishnu%20prasad.jpg`,
  `/res/img/Team-Camber/team2012/vrushti%20modi.jpg`,
];

const _2013 = [
  `/res/img/Team-Camber/team2013/14.jpg`,
  `/res/img/Team-Camber/team2013/5.jpg`,
  `/res/img/Team-Camber/team2013/8.jpg`,
  `/res/img/Team-Camber/team2013/Aaradhya.jpg`,
  `/res/img/Team-Camber/team2013/Abhinav%20Kumar.jpg`,
  `/res/img/Team-Camber/team2013/Abhishek%20Kumar.jpg`,
  `/res/img/Team-Camber/team2013/aditya%20makineni.jpg`,
  `/res/img/Team-Camber/team2013/Aditya%20Trivedi.jpg`,
  `/res/img/Team-Camber/team2013/aman%20munjal.jpg`,
  `/res/img/Team-Camber/team2013/Aman%20Singh.jpg`,
  `/res/img/Team-Camber/team2013/Anshul%20Chaudhary.jpg`,
  `/res/img/Team-Camber/team2013/bharath%20iyer.jpg`,
  `/res/img/Team-Camber/team2013/Eeshan%20Geel.jpg`,
  `/res/img/Team-Camber/team2013/Gautam.jpg`,
  `/res/img/Team-Camber/team2013/Harshin%20Lalpet.jpg`,
  `/res/img/Team-Camber/team2013/Murali.jpg`,
  `/res/img/Team-Camber/team2013/murtaza%20khambaty.jpg`,
  `/res/img/Team-Camber/team2013/new10.jpg`,
  `/res/img/Team-Camber/team2013/Nilai.jpg`,
  `/res/img/Team-Camber/team2013/pavan%20theja.jpg`,
  `/res/img/Team-Camber/team2013/phani%20chebiyyam.jpg`,
  `/res/img/Team-Camber/team2013/Pritish%20Panda.jpg`,
  `/res/img/Team-Camber/team2013/rahul.jpg`,
  `/res/img/Team-Camber/team2013/ratna.jpg`,
  `/res/img/Team-Camber/team2013/rishi%20raj%20singh.jpg`,
  `/res/img/Team-Camber/team2013/Roshni%20Francis.jpg`,
  `/res/img/Team-Camber/team2013/Shailee%20Upadhyay.jpg`,
  `/res/img/Team-Camber/team2013/shreyas%20sansuddi%20(2).jpg`,
  `/res/img/Team-Camber/team2013/Siddhartha%20De.jpg`,
  `/res/img/Team-Camber/team2013/Vishwaprashanth%20kumar.jpg`,
];

const _2014 = [
  `/res/img/Team-Camber/team2014/Abhinav%20Kumar.jpg`,
  `/res/img/Team-Camber/team2014/Abhishek%20Kumar.jpg`,
  `/res/img/Team-Camber/team2014/Aditya%20Trivedi.jpg`,
  `/res/img/Team-Camber/team2014/Aman%20Munjal.jpg`,
  `/res/img/Team-Camber/team2014/Anshul.jpg`,
  `/res/img/Team-Camber/team2014/bharath%20iyer.jpg`,
  `/res/img/Team-Camber/team2014/Eeshan%20Geel.jpg`,
  `/res/img/Team-Camber/team2014/Gautam.jpg`,
  `/res/img/Team-Camber/team2014/Harshin%20Lalpet.jpg`,
  `/res/img/Team-Camber/team2014/Murali.jpg`,
  `/res/img/Team-Camber/team2014/murtaza.jpg`,
  `/res/img/Team-Camber/team2014/Nilai%20Suresh.jpg`,
  `/res/img/Team-Camber/team2014/Pavan%20Theja.jpg`,
  `/res/img/Team-Camber/team2014/Pritish%20Panda.jpg`,
  `/res/img/Team-Camber/team2014/Rahul%20kumar.jpg`,
  `/res/img/Team-Camber/team2014/Ratna.jpg`,
  `/res/img/Team-Camber/team2014/rishi%20raj%20singh.jpg`,
  `/res/img/Team-Camber/team2014/Siddhartha.jpg`,
  `/res/img/Team-Camber/team2014/Vishwaprashanth%20Kumar.jpg`,
];

const _2015 = [
  `/res/img/Team-Camber/team2015/aaradhya%20nagar.jpg`,
  `/res/img/Team-Camber/team2015/Abhishek%20Kumar.jpg`,
  `/res/img/Team-Camber/team2015/Aditya%20Trivedi.jpg`,
  `/res/img/Team-Camber/team2015/akbar.jpg`,
  `/res/img/Team-Camber/team2015/anil.jpg`,
  `/res/img/Team-Camber/team2015/Anshul%20Chaudhary.jpg`,
  `/res/img/Team-Camber/team2015/Divyansh.jpg`,
  `/res/img/Team-Camber/team2015/Eeshan%20Geel.jpg`,
  `/res/img/Team-Camber/team2015/Gautam.jpg`,
  `/res/img/Team-Camber/team2015/husain.jpg`,
  `/res/img/Team-Camber/team2015/kaustabh.jpg`,
  `/res/img/Team-Camber/team2015/lalwani.jpg`,
  `/res/img/Team-Camber/team2015/madhu.jpg`,
  `/res/img/Team-Camber/team2015/Murali.jpg`,
  `/res/img/Team-Camber/team2015/Nilai.jpg`,
  `/res/img/Team-Camber/team2015/prashanth.jpg`,
  `/res/img/Team-Camber/team2015/Pritish.jpg`,
  `/res/img/Team-Camber/team2015/rohan%20date.jpg`,
  `/res/img/Team-Camber/team2015/roni.jpg`,
  `/res/img/Team-Camber/team2015/salman.jpg`,
  `/res/img/Team-Camber/team2015/shivam.jpg`,
  `/res/img/Team-Camber/team2015/vaibhav%20kotnala.jpg`,
];

const _2016 = [
  `/res/img/Team-Camber/team2016/aaradhya.jpg`,
  `/res/img/Team-Camber/team2016/akbar.jpg`,
  `/res/img/Team-Camber/team2016/akhil.jpg`,
  `/res/img/Team-Camber/team2016/anil.jpg`,
  `/res/img/Team-Camber/team2016/atharva.jpg`,
  `/res/img/Team-Camber/team2016/Chirag%20Samdaria.jpg`,
  `/res/img/Team-Camber/team2016/deepak%20reddy.jpg`,
  `/res/img/Team-Camber/team2016/Divyansh.jpg`,
  `/res/img/Team-Camber/team2016/Kaustabh.jpg`,
  `/res/img/Team-Camber/team2016/madhu.jpg`,
  `/res/img/Team-Camber/team2016/Mriganka.jpg`,
  `/res/img/Team-Camber/team2016/pradeep.jpg`,
  `/res/img/Team-Camber/team2016/Priyanth%20Kumar.jpg`,
  `/res/img/Team-Camber/team2016/Rahul.jpg`,
  `/res/img/Team-Camber/team2016/rohan.jpg`,
  `/res/img/Team-Camber/team2016/ronak.jpg`,
  `/res/img/Team-Camber/team2016/roni.jpg`,
  `/res/img/Team-Camber/team2016/Sai%20Santosh.jpg`,
  `/res/img/Team-Camber/team2016/saiduth.jpg`,
  `/res/img/Team-Camber/team2016/salman.jpg`,
  `/res/img/Team-Camber/team2016/shivam.jpg`,
  `/res/img/Team-Camber/team2016/tarun%20kumar.jpg`,
  `/res/img/Team-Camber/team2016/uday.jpg`,
  `/res/img/Team-Camber/team2016/vaibhav%20kotnala.jpg`,
  `/res/img/Team-Camber/team2016/vaibhav%20lalwani.jpg`,
  `/res/img/Team-Camber/team2016/vv%20praveen.jpg`,
];

const _2017 = [
  `/res/img/Team-Camber/team2017/aditya.jpg`,
  `/res/img/Team-Camber/team2017/adyasha.jpg`,
  `/res/img/Team-Camber/team2017/akbar.jpg`,
  `/res/img/Team-Camber/team2017/akhil.jpg`,
  `/res/img/Team-Camber/team2017/akshay.jpg`,
  `/res/img/Team-Camber/team2017/anil.jpg`,
  `/res/img/Team-Camber/team2017/atharva.jpg`,
  `/res/img/Team-Camber/team2017/chundawat.jpg`,
  `/res/img/Team-Camber/team2017/deepak%20reddy.jpg`,
  `/res/img/Team-Camber/team2017/dhruv%20mehta.jpg`,
  `/res/img/Team-Camber/team2017/Divyansh.jpg`,
  `/res/img/Team-Camber/team2017/gopal.jpg`,
  `/res/img/Team-Camber/team2017/harshit.jpg`,
  `/res/img/Team-Camber/team2017/junaid.jpg`,
  `/res/img/Team-Camber/team2017/kakkar.jpg`,
  `/res/img/Team-Camber/team2017/krishna.jpg`,
  `/res/img/Team-Camber/team2017/kshitij%20soni.jpg`,
  `/res/img/Team-Camber/team2017/mobashir%20afzal.jpg`,
  `/res/img/Team-Camber/team2017/Mriganka.jpg`,
  `/res/img/Team-Camber/team2017/navneet.jpg`,
  `/res/img/Team-Camber/team2017/pradeep.jpg`,
  `/res/img/Team-Camber/team2017/praneet.jpg`,
  `/res/img/Team-Camber/team2017/rahul.jpg`,
  `/res/img/Team-Camber/team2017/ronak.jpg`,
  `/res/img/Team-Camber/team2017/roni.jpg`,
  `/res/img/Team-Camber/team2017/saiduth.jpg`,
  `/res/img/Team-Camber/team2017/shawn.jpg`,
  `/res/img/Team-Camber/team2017/shreya.jpg`,
  `/res/img/Team-Camber/team2017/uday.jpg`,
  `/res/img/Team-Camber/team2017/varun.jpg`,
];

const _2018 = [
  `/res/img/Team-Camber/team2018/abhinav%20roy.JPG`,
  `/res/img/Team-Camber/team2018/abhishek%20nanda.JPG`,
  `/res/img/Team-Camber/team2018/aditya%20chacko.JPG`,
  `/res/img/Team-Camber/team2018/adyasha%20nanda.JPG`,
  `/res/img/Team-Camber/team2018/akshay%20kumar.JPG`,
  `/res/img/Team-Camber/team2018/aman%20maheshwari.JPG`,
  `/res/img/Team-Camber/team2018/ambarish%20pradeep.JPG`,
  `/res/img/Team-Camber/team2018/anirudh%20reddy.JPG`,
  `/res/img/Team-Camber/team2018/ankur%20singh.JPG`,
  `/res/img/Team-Camber/team2018/aparajita%20singh.JPG`,
  `/res/img/Team-Camber/team2018/aparajito%20ganguli.JPG`,
  `/res/img/Team-Camber/team2018/arunav%20borah.JPG`,
  `/res/img/Team-Camber/team2018/atharva%20kadam.JPG`,
  `/res/img/Team-Camber/team2018/darpan%20yadav.JPG`,
  `/res/img/Team-Camber/team2018/dhruv%20mehta.JPG`,
  `/res/img/Team-Camber/team2018/g%20karthik.JPG`,
  `/res/img/Team-Camber/team2018/gautam%20kavuri.JPG`,
  `/res/img/Team-Camber/team2018/gopal%20dwivedi.JPG`,
  `/res/img/Team-Camber/team2018/harshit%20gambhir.JPG`,
  `/res/img/Team-Camber/team2018/hrishav%20paul.JPG`,
  `/res/img/Team-Camber/team2018/junaid%20singh.JPG`,
  `/res/img/Team-Camber/team2018/kanwarpal%20singh.JPG`,
  `/res/img/Team-Camber/team2018/kshitij%20soni.JPG`,
  `/res/img/Team-Camber/team2018/kunal%20kakkar.JPG`,
  `/res/img/Team-Camber/team2018/kunal%20pandey.JPG`,
  `/res/img/Team-Camber/team2018/md.%20fahim.JPG`,
  `/res/img/Team-Camber/team2018/pradyumn%20pandey.JPG`,
  `/res/img/Team-Camber/team2018/prakhar%20dixit.JPG`,
  `/res/img/Team-Camber/team2018/praneet%20ayyagari.JPG`,
  `/res/img/Team-Camber/team2018/s%20arvind.JPG`,
  `/res/img/Team-Camber/team2018/sai%20kiran.JPG`,
  `/res/img/Team-Camber/team2018/saiduth%20ramesh.JPG`,
  `/res/img/Team-Camber/team2018/shikhar%20sehgal.JPG`,
  `/res/img/Team-Camber/team2018/varun%20jain.JPG`,
  `/res/img/Team-Camber/team2018/vinith%20kishan.JPG`,
  `/res/img/Team-Camber/team2018/vishnu%20rajeev.JPG`,
  `/res/img/Team-Camber/team2018/yohann%20bhumgara.JPG`,
];

const _2019 = [
  `/res/img/Team-Camber/team2019/aayush%20kumar%20singh.jpg`,
  `/res/img/Team-Camber/team2019/abhinav%20roy.jpg`,
  `/res/img/Team-Camber/team2019/Abhishek%20nanda.jpg`,
  `/res/img/Team-Camber/team2019/aman%20maheshwari.jpg`,
  `/res/img/Team-Camber/team2019/ambareesh%20pradeep.jpg`,
  `/res/img/Team-Camber/team2019/ankit%20kr%20sahu.jpg`,
  `/res/img/Team-Camber/team2019/annkur%20singh.jpg`,
  `/res/img/Team-Camber/team2019/aparjito%20ganguli.jpg`,
  `/res/img/Team-Camber/team2019/aravind%20s.jpg`,
  `/res/img/Team-Camber/team2019/bishal%20sikdar.jpg`,
  `/res/img/Team-Camber/team2019/Darpan%20yadav.jpg`,
  `/res/img/Team-Camber/team2019/gautam%20kavuri.jpg`,
  `/res/img/Team-Camber/team2019/harshmeet%20singh.jpg`,
  `/res/img/Team-Camber/team2019/harvinde%20singh.jpg`,
  `/res/img/Team-Camber/team2019/junaid%20singh.jpg`,
  `/res/img/Team-Camber/team2019/karwarpal%20singh.jpg`,
  `/res/img/Team-Camber/team2019/kshitij%20singh.jpg`,
  `/res/img/Team-Camber/team2019/kunal%20kakkar.jpg`,
  `/res/img/Team-Camber/team2019/md%20Fahim.jpg`,
  `/res/img/Team-Camber/team2019/pradyumn%20pandey.jpg`,
  `/res/img/Team-Camber/team2019/prasanjeet%20das.jpg`,
  `/res/img/Team-Camber/team2019/rituraj%20das.jpg`,
  `/res/img/Team-Camber/team2019/saliq%20shah.jpg`,
  `/res/img/Team-Camber/team2019/satvik%20vatsa.jpg`,
  `/res/img/Team-Camber/team2019/shashwat%20geel.jpg`,
  `/res/img/Team-Camber/team2019/sourav%20pattnaik.jpg`,
  `/res/img/Team-Camber/team2019/sparsh%20agarwal.jpg`,
  `/res/img/Team-Camber/team2019/subodh%20dangi.jpg`,
  `/res/img/Team-Camber/team2019/sudha%20sindhuja.jpg`,
  `/res/img/Team-Camber/team2019/suresh%20kumar.jpg`,
  `/res/img/Team-Camber/team2019/tenzin.jpg`,
  `/res/img/Team-Camber/team2019/udit%20mini.jpg`,
  `/res/img/Team-Camber/team2019/yohann%20bhumgara.jpg`,
];

const _2020 = [
  `/res/img/Team-Camber/team2020/abhniav%20roy.jpg`,
  `/res/img/Team-Camber/team2020/abraham%20mathew.jpg`,
  `/res/img/Team-Camber/team2020/aditya%20agrawal.jpg`,
  `/res/img/Team-Camber/team2020/aditya%20reddy.jpg`,
  `/res/img/Team-Camber/team2020/ambareesh%20pradeep.jpg`,
  `/res/img/Team-Camber/team2020/aparjito%20ganguli.jpg`,
  `/res/img/Team-Camber/team2020/bishal%20sikdar.jpg`,
  `/res/img/Team-Camber/team2020/gautam%20kavuri.jpg`,
  `/res/img/Team-Camber/team2020/hariesh%20s.jpg`,
  `/res/img/Team-Camber/team2020/harshmeet%20singh.jpg`,
  `/res/img/Team-Camber/team2020/harvinde%20singh.jpg`,
  `/res/img/Team-Camber/team2020/kshitij%20singh.jpg`,
  `/res/img/Team-Camber/team2020/mohit%20galani.jpg`,
  `/res/img/Team-Camber/team2020/pranjal%20saxena.jpg`,
  `/res/img/Team-Camber/team2020/rasesh%20lagdev.jpg`,
  `/res/img/Team-Camber/team2020/saliq%20shah.jpg`,
  `/res/img/Team-Camber/team2020/shashwat%20geel.jpg`,
  `/res/img/Team-Camber/team2020/sourav%20pattnaik.jpg`,
  `/res/img/Team-Camber/team2020/subodh%20dangi.jpg`,
  `/res/img/Team-Camber/team2020/sudha%20sindhuja.jpg`,
  `/res/img/Team-Camber/team2020/suresh%20kumar.jpg`,
  `/res/img/Team-Camber/team2020/yohann%20bhumgara.jpg`,
];

const _2021 = [
  `/res/img/Team-Camber/team2021/Abraham.png`,
  `/res/img/Team-Camber/team2021/Bishal.png`,
  `/res/img/Team-Camber/team2021/Hariesh.png`,
  `/res/img/Team-Camber/team2021/Jayaditya.png`,
  `/res/img/Team-Camber/team2021/Kshitij.png`,
  `/res/img/Team-Camber/team2021/Pranjal.png`,
  `/res/img/Team-Camber/team2021/Rasesh.png`,
  `/res/img/Team-Camber/team2021/Saliq.png`,
  `/res/img/Team-Camber/team2021/Shashwat.png`,
  `/res/img/Team-Camber/team2021/Subodh.png`,
  `/res/img/Team-Camber/team2021/Sudha.png`,
  `/res/img/Team-Camber/team2021/Suresh.png`,
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
];

const updatePhtots = () => {
  allmembers[currentyear - 2011].forEach((mem) => {
    const image = document.createElement("img");
    image.classList.add("all-years");
    image.src = "./" + mem;
    mainDiv.appendChild(image);
  });
};

const photos = document.querySelector(".photos");
photos.appendChild(mainDiv);
updatePhtots();
