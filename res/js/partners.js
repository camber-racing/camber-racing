const partnersDiv = document.querySelector(".partners");
const sponsors = [
  ["Altair", "https://www.altair.com/"],
  ["Ansys", "https://www.ansys.com/en-in"],
  ["ASAP Hardware", "https://www.asaphardwaresolutions.com/"],
  ["Aurora Bearings", "http://www.aurorabearing.com/index.html"],
  ["Calspan", "https://www.calspan.com/"],
  ["Bisco Ultimate", "http://biscoultimate.com/"],
  ["Eastern Offshore", "http://www.easternoffshore.in/"],
  ["Electronics Devices", "https://www.electronicsdevices.com/"],
  ["Exelus 3D", "https://www.linkedin.com/company/exelus-3d/"],
  ["Gamma Technologies", "https://www.gtisoft.com/"],
  ["Henkel", "https://www.henkel.in/"],
  ["Honicel", "http://www.honicel.com/"],
  ["HP", "https://www.hindustanpetroleum.com/"],
  ["Igus", "https://www.igus.in/"],
  ["IPG Automotive", "https://ipg-automotive.com/"],
  ["JCB", "https://www.jcb.com/en-in"],
  ["Knight", "https://www.knightwraps.com/"],
  ["KR Composites", "https://www.krcomposites.com/"],
  [
    "Lotus",
    "https://www.lotuscars.com/engineering-software/#:~:text=A%20market%20leading%20application%20for,changes%20to%20proposed%20geometry%20and",
  ],
  ["Mathworks", "https://www.mathworks.com/"],
  ["Motul", "https://www.motul.com/"],
  ["MyPitCrew", "https://mypitcrew.in/"],
  ["Ocean Sparkle", "http://www.oceansparkle.com/"],
  ["Pragati", "https://www.pragatimarine.com/"],
  ["Rallynuts", "https://www.rallynuts.com/"],
  ["Ricardo", "https://ricardo.com/"],
  ["Sadhav", "https://www.sadhav.com/"],
  ["Siddhgiri", ""],
  ["Sigma Weld", "http://www.sigmaweld.com/"],
  ["Solidworks", "https://www.solidworks.com/"],
  ["SRM IST", "https://www.srmist.edu.in/"],
  ["Sudarshan", "http://www.sudarshanauto.com/"],
  ["Zircotec", "https://www.zircotec.com/"],
];

sponsors.forEach((sponsor) => {
  const image = document.createElement("img");
  const link = document.createElement("a");

  link.href = sponsor[1];
  link.target = "_blank";
  image.src = `./res/img/sponsors/${sponsor[0]}.png`;

  link.appendChild(image);
  partnersDiv.appendChild(link);
});
