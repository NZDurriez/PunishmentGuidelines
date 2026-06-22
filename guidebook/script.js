const data = [
  ["Abuse of OOC", "Kick", "Kick", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP"],
  ["Combat Logging", "Educational + Warning", "2 Hour Ban", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP"],
  ["Cop Baiting", "Kick", "Kick", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP"],
  ["Exploiting", "72hr Ban", "PERM BAN (if intent proven)", "", "", ""],
  ["Fail Roleplay", "Educational + Warning", "6 Hour Ban", "12 Hour Ban", "Initiate 3SP", ""],
  ["Fail to Follow Staff", "Warning", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", ""],
  ["Forced RP / Interjection", "Educational + Warning", "6 Hour Ban", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP"],
  ["Greenzone Breach", "Kick", "6 Hour Ban", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP"],
  ["GTA Driving", "Kick", "6 Hour Ban", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP"],
  ["Hacking / Modding", "PERM BAN (appealable)", "", "", "", ""],
  ["Harassment", "Kick", "12 Hour Ban", "72 Hour Ban", "PERM BAN", ""],
  ["Meta Gaming", "Kick", "12 Hour Ban", "72 Hour Ban", "PERM BAN", ""],
  ["NITRP", "Kick", "Kick", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP"],
  ["No Microphone", "Educational", "Kick", "72 Hour Ban", "PERM BAN", ""],
  ["Out of Character Breach", "Educational + Warning", "Kick", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP"],
  ["Priority Status Breach", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP"],
  ["RDM", "Kick", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP"],
  ["Restricted Civ RP", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP"],
  ["Service Conduct Breach", "Educational + Warning", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", ""],
  ["Sexual Remarks / Comments", "Warning", "72 Hour Ban", "PERM BAN (if repeated)", "", ""],
  ["Specialist Scenes", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP"],
  ["Staff Impersonation", "24 Hour Ban", "PERM BAN", "", "", ""],
  ["Toxic Behaviour", "Kick", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", ""],
  ["Trolling", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", ""],
  ["VDM", "Kick", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP"],
  ["Vulgar Language", "Kick", "24 Hour Ban", "72 Hour Ban", "1 Week Ban / PERM", ""]
];

const tbody = document.querySelector("#punishmentTable tbody");

data.forEach(row => {
  const tr = document.createElement("tr");
  row.forEach(cell => {
    const td = document.createElement("td");
    td.textContent = cell;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = tbody.querySelectorAll("tr");
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});


