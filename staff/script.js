const data = [
  ["Abuse of OOC", "Kick", "Kick", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP", "Reset", "Spamming OOC"],
  ["Combat Logging", "Educational + Warning", "2 Hour Ban", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP", "Reset", "Context dependent (may not be intentional)"],
  ["Cop Baiting", "Kick", "Kick", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP", "Reset", "Coach RP styles"],
  ["Exploiting", "72hr Ban", "PERM BAN (if intent proven)", "", "", "", "", "Needs proof; appeal possible"],
  ["Fail Roleplay", "Educational + Warning", "6 Hour Ban", "12 Hour Ban", "Initiate 3SP", "", "Reset", "Focus on RP improvement"],
  ["Fail to Follow Staff", "Warning", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", "", "Reset", "Genuine misunderstanding = education"],
  ["Forced RP / Interjection", "Educational + Warning", "6 Hour Ban", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP", "Reset", "Use educational tone"],
  ["Greenzone Breach", "Kick", "6 Hour Ban", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP", "Reset", "Clarify rules if unclear"],
  ["GTA Driving", "Kick", "6 Hour Ban", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP", "Reset", "Escalate if reckless"],
  ["Hacking / Modding", "PERM BAN (appealable)", "", "", "", "", "", "Appealable only with strong evidence"],
  ["Harassment", "Kick", "12 Hour Ban", "72 Hour Ban", "PERM BAN", "", "", "Escalate if repeated"],
  ["Meta Gaming", "Kick", "12 Hour Ban", "72 Hour Ban", "PERM BAN", "", "", "RP clarity often resolves it"],
  ["NITRP", "Kick", "Kick", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP", "Reset", "Use OOC talk first"],
  ["No Microphone", "Educational", "Kick", "72 Hour Ban", "PERM BAN", "", "", "Offer alternatives"],
  ["Out of Character Breach", "Educational + Warning", "Kick", "12 Hour Ban", "72 Hour Ban", "Initiate 3SP", "Reset", ""],
  ["Priority Status Breach", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP", "Reset", "Repeat consider 3SP."],
  ["RDM", "Kick", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", "Reset", "Low Tolerance"],
  ["Restricted Civ RP", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP", "Reset", "Suicidal RP = context needed"],
  ["Service Conduct Breach", "Educational + Warning", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", "", "Reset", ""],
  ["Sexual Remarks / Comments", "Warning", "72 Hour Ban", "PERM BAN (if repeated)", "", "", "", "Context dependent; consult Exec"],
  ["Specialist Scenes", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Initiate 3SP", "Reset", "Guided by RP scene setup"],
  ["Staff Impersonation", "24 Hour Ban", "PERM BAN", "", "", "", "", "Zero tolerance"],
  ["Toxic Behaviour", "Kick", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", "", "", "Requires staff mediation"],
  ["Trolling", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", "", "Reset", "Can be playful — judge tone"],
  ["VDM", "Kick", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Initiate 3SP", "Reset", "Low Tolerance"],
  ["Vulgar Language", "Kick", "24 Hour Ban", "72 Hour Ban", "1 Week Ban / PERM", "", "", "Slurs = zero tolerance; others = escalation"],
  ["", "", "", "", "", "", "", "Consider early 3SP initiation if low play-time."]
];

const tbody = document.querySelector("#punishmentTable tbody");

data.forEach(row => {
  const tr = document.createElement("tr");
  row.forEach((cell, i) => {
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


