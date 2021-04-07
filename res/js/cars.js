const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const car = urlParams.get("car");

const CR800 = {
  name: `CR800`,
  year: `2010`,

  desc: `Since we had no earlier experience of manufacturing a race car, we first decided to get that out of the way by coming up with a prototype vehicle. We wanted to avoid the situation of turning up at the competition with the first car we collectively built. Thus came into existence the CR800, our first prototype. This was a car which was built from whatever scrap material we could find in and around the University. The team went down to brass tacks and we entered the vast ocean that is motorsport engineering!
    The CR800 was the first big success we had and we unveiled it publically at SRM University’s biggest national cultural fest ‘Milan 2011’ in March in front of 2000+ people. We generated a lot of interest during this event post the launch.`,
  achievements: null,

  specs: [
    `Three-cylinder engine, Suzuki F8B`,
    `5 Speed (4+1) Synchromesh Gearbox`,
    `Arc Welded Tubular Space Frame Chassis`,
    `Glass fibre Reinforced Plastic Body`,
    `Double A-arm suspension`,
    `Direct Actuated Spring Damper units both front & rear`,
    `Tires: 185/60 R13 JK Tyre Ultima`,
    `Brake: 4 outboard brake disks`,
  ],
  noOfPics: 1,
};

const LJM01 = {
  name: `LJM_01`,
  year: `2011`,
  desc: `LJM01 was the successor for the first car and prototype CR800. If CR800 meant embarking upon the way of professionalism and success, LJM01 was surely an important future for achieving this feat. It is a prized possession of our team as each and every inch of the car was made to near to perfection on a very tight schedule. The design departments fastidious approach allowed the team to come up with new or more innovative and alternative ways to manufacture and build the car from scratch rather than connecting the shortcoming observed in the CR800.
    The car had outdone a lot of the other teams in the racing season for 2011 for SUPRASAE. The marketing efforts that we put in for the season also meant that we were one of the best branded teams at the competition.`,

  achievements: [
    `2nd Place Marketing Presentation`,
    `24th Place Overall`,
    `Official Supra SAE display vehicle at the 16th APAC`,
  ],

  specs: [
    `Three-cylinder engine, Suzuki F8B`,
    `5 Speed (4+1) Synchromesh Gearbox`,
    `MIG Welded Tubular Space Frame Chassis`,
    `Glass fibre Reinforced Plastic Body`,
    `Multi-layered Aluminium Sheet Crashbox`,
    `Double A-arm suspension`,
    `Direct Actuated Spring Damper units both front & rear`,
    `Custom Designed Al 6061 Uprights`,
    `Tires: 145/70 R12 Bridgestone `,
    `Brake: 4 outboard brake disks`,
    `Steering gear: Centralized mechanism`,
  ],
  noOfPics: 1,
};

const Beast = {
  name: `The Beast`,
  year: `2012`,
  desc: `With our first outing done, and setting our eyes at the Championship of the coming season, we started off, determined to bounce back. And thus came into existence, our next car, redefining performance and perfection- The BEAST!
With a detailed review of the errors committed on the last car, the design team made a comprehensive effort, modelling and assembling even the most intricate components resulting in the most effective and frugal designs. Once the designs were frozen, the fabrication team took charge and delivered an accurate car, completely in agreement with our designs. The extra effort, put in, focusing on the body works was highly fruitful resulting in the addition of an elegant style quotient to the aesthetics. With a mix of speed, power, stability and reliability, the nick name -The BEAST -was justified.
This polar white race vehicle impressed everyone at the event with its amazing performance and the results do the talking.`,

  achievements: [
    `1st place Overall`,
    `2nd place Endurance`,
    `2nd place Autocross`,
    `2nd place Skidpad`,
    `5th place Acceleration `,
  ],

  specs: [
    `Three-cylinder engine, Suzuki F8B`,
    `5 Speed (4+1) Synchromesh Gearbox`,
    `MIG Welded Tubular Space Frame Chassis`,
    `Glass fibre Reinforced Plastic Body`,
    `Multi-layered Aluminium Sheet Crashbox`,
    `Double A-arm suspension`,
    `Direct Actuated Spring Damper units both front & rear`,
    `Custom designed Al 6061 Uprights and Wheel Hubs `,
    `Tires: 165/60 R13 Apollo Acelere `,
    `Brake: 4 outboard brake disks`,
    `Steering gear: Customized steering rack system by Sona Group`,
  ],
  noOfPics: 2,
};
const CR14 = {
  name: `CR14`,
  year: `2014`,
  desc: `The learning from the Beast were carried forward to our next vehicle, the CR14. With a major change in the powertrain of the vehicle shifting from 800cc to a 610cc engine capacity limit, the main target to make a light and compact vehicle with a high power to weight ratio was achieved in the CR14. The team, for the first time incorporated the use of Carbon fibre in the vehicle as one of the measures to reduce the weight of the vehicle. The CR14 was a major step forward for the team after the Beat.
`,

  achievements: [
    `SUPRA SAE INDIA 2014`,
    `Endurance- 2nd Place`,
    `Fuel Efficiency- 1st Place`,
    `Skidpad- 1st Place`,
    `Overall- 1st Place`,
  ],

  specs: [
    `Single Cylinder KTM 390 Engine`,
    `6 Speed sequential gearbox`,
    `TIG Welded Tubular Spaceframe Chassis`,
    `Glass Fibre Reinforced plastic body`,
    `Carbon Fibre Impact Attenuator`,
    `Suspension: Pushrod Actuated Double Wishbone setup`,
    `Dampers: Ohlins TTX25`,
    `Tires: Hoosier R25B 20.5*7.0/R13 slicks`,
    `Custom Designed Pedal Assembly and Brake Rotors`,
    `Customised Rack and Pinion Steering System`,
  ],
  noOfPics: 1,
};

const CR15 = {
  name: `CR15`,
  year: `2015`,

  desc: `Designed for the 2015-2016 season, this masterpiece showed its mettle in Formula Student Germany 2015 by being the only Indian team on track for the dynamic events. This vehicle had also bagged the runner up spot in formula Student India in 2016.`,
  achievements: [
    `Formula Student India 2016:`,
    `3rd in Endurance`,
    `2nd in Skidpad`,
    `2nd in Autocross`,
    `2nd in Acceleration`,
    `3rd in Fuel Efficiency`,
    `2nd in Business Plan Presentation`,
    `2nd in Design Event`,
    `Best Tech Ready Team Title`,
  ],

  specs: [
    `Wheelbase – 1560mm`,
    `Track Width – 1180/1140mm`,
    `Single Cylinder KTM 390 Engine`,
    `6 Speed sequential gearbox`,
    `Drexler Limited Slip Differential`,
    `TIG Welded Tubular Spaceframe Chassis`,
    `Carbon Fibre Reinforced bodyworks`,
    `Suspension: Pushrod Actuated Double Wishbone setup`,
    `Dampers: Ohlins TTX25`,
    `Tires: Hoosier R25B 20.5*7.0/R13 slicks`,
    `Custom Designed Pedal Assembly and Brake Rotors`,
    `Custom Designed Steering Gearbox with 270 deg lock to lock`,
  ],
  noOfPics: 1,
};

const CR16 = {
  name: `CR16`,
  year: `2016-17`,
  desc: `Having participated in FSG 15, the team went all out to put their learnings to practice. CR-16 was a major step up from the previous cars, with both its performance and stunning looks. Weighing in at 195kgs, this car was also equipped with the team’s first Aero kit.`,

  achievements: [
    `Formula Bharat 2017:`,
    `Design Event – 2nd Place`,
    `Cost Event – 2nd Place`,
    `Overall – 3rd Place`,
  ],

  specs: [
    `Wheelbase – 1540mm`,
    `Track Width – 1140/1120mm`,
    `Single Cylinder KTM 390 Engine`,
    `6 Speed sequential gearbox`,
    `Drexler Limited Slip Differential`,
    `TIG Welded Tubular Spaceframe Chassis`,
    `Carbon Fibre Reinforced bodyworks`,
    `Full Carbon Fibre Aero kit`,
    `Front Suspension: Direct Actuated Double Wishbone setup`,
    `Rear Suspension: Pushrod Actuated Double Wishbone setup`,
    `Dampers: Ohlins TTX25`,
    `Tires: Hoosier R25B 18.0*6.0/R10 slicks`,
    `Custom Designed Pedal Assembly and Brake Rotors`,
    `Custom Designed Steering Gearbox with 220 deg lock to lock`,
  ],
  noOfPics: 1,
};

const CR18 = {
  name: `CR18`,
  year: `2018`,
  desc: `CR-18 was built upon the idea of performance and speed and was the team’s first turbo charged car. The car also featured a fully in house manufactured Aero kit. It was the fastest car at Supra 18, clocking 5.4 seconds in the acceleration event.`,

  achievements: [`Supra SAE India 2018`, `1st Place Acceleration`],

  specs: [
    `Wheelbase – 1540mm`,
    `Track Width – 1140/1120mm`,
    `Single Cylinder KTM 390 Engine (Turbo-charged)`,
    `6 Speed sequential gearbox`,
    `Drexler Limited Slip Differential`,
    `TIG Welded Tubular Spaceframe Chassis`,
    `Carbon Fibre Reinforced bodyworks`,
    `Carbon Fibre Front and Rear Wings`,
    `Suspension: Pushrod Actuated Double Wishbone setup`,
    `Dampers: Ohlins TTX25`,
    `Tires: Hoosier R25B 18.0*6.0/R10 slicks`,
    `Custom Designed Pedal Assembly and Brake Rotors`,
    `Custom Designed Steering Gearbox with 220 deg lock to lock`,
  ],
  noOfPics: 1,
};
const CRX = {
  name: `CR-X`,
  year: `2019`,
  desc: `The 10th edition of team saw the built of a masterpiece namely ‘CR-X’. It was not only one of the lightest cars in the event but also fastest among the ‘single cylinder’ engines. The team clocked one of the best acceleration times, 5.038 seconds at Formula Bharat 2019.`,
  achievements: [
    `Formula Bharat 2019`,
    `Design Event – 3rd Place`,
    `Business Plan Presentation – 2nd Place`,
  ],
  specs: [
    `Wheelbase – 1540mm`,
    `Track Width – 1140/1120mm`,
    `Single Cylinder KTM 390 Engine`,
    `6 Speed sequential gearbox`,
    `Drexler Limited Slip Differential`,
    `TIG Welded Tubular Spaceframe Chassis`,
    `Carbon Fibre Reinforced bodyworks`,
    `Suspension: Pushrod Actuated Double Wishbone setup`,
    `Dampers: Ohlins TTX25`,
    `Tires: Hoosier R25B 18.0*6.0/R10 slicks`,
    `Custom Designed Pedal Assembly and Brake Rotors`,
    `Custom Designed Steering Gearbox with 220 deg lock to lock`,
  ],
  noOfPics: 1,
};

const carlist = [CR800, LJM01, Beast, CR14, CR15, CR16, CR18, CRX];
const mainDiv = document.getElementById(`car-list`);

carlist.map((car, id) => {
  const eachCar = document.createElement("div");

  eachCar.classList.add("cars");

  const photoDiv = document.createElement("div");
  const photo = [];
  for (let i = 0; i < car.noOfPics; i++) {
    photo[i] = document.createElement("img");
    photo[i].src = `./res/img/carList/${id + 1}-${i + 1}.jpg`;
    photoDiv.appendChild(photo[i]);
  }

  const content = document.createElement("div");

  const name = document.createElement("h1");
  const desc = document.createElement("p");
  const achievementsList = document.createElement("div");
  const specsList = document.createElement("div");

  if (car.specs != null) {
    const heading = document.createElement("h3");
    heading.innerHTML = `Specifications`;
    specsList.appendChild(heading);
    car.specs.map((spec) => {
      const li = document.createElement("li");
      li.innerHTML = spec;
      specsList.appendChild(li);
    });
  }

  if (car.achievements != null) {
    const heading = document.createElement("h3");
    heading.innerHTML = `Achievements`;
    achievementsList.appendChild(heading);
    car.achievements.map((achievement) => {
      const li = document.createElement("li");
      li.innerHTML = achievement;
      achievementsList.appendChild(li);
    });
  }

  name.innerHTML = car.name + `&nbsp; (${car.year})`;
  desc.innerHTML = car.desc;

  if (id % 2 == 0) {
    eachCar.classList.add("even");
  } else {
    eachCar.classList.add("odd");
  }

  content.appendChild(name);
  content.appendChild(desc);
  content.appendChild(achievementsList);
  content.appendChild(specsList);

  eachCar.appendChild(content);
  eachCar.appendChild(photoDiv);

  eachCar.classList.add("myBorder");
  mainDiv.appendChild(eachCar);
});
