/* VARIABLES */

/* ROOM */

const roomName = '⚽️ Futsal | 1v1 2v2 3v3 4v4 ⚽️';
const maxPlayers = 25;
const roomPublic = true;
const token = ""; // Insert token here

var roomWebhook = ''; // Webhook này được sử dụng để gửi các chi tiết của căn phòng (trò chuyện, tham gia, rời đi); nó phải ở trong một kênh bất hòa riêng tư
var gameWebhook = ''; // Webhook này được sử dụng để gửi tóm tắt các trò chơi; nó phải nằm trong một kênh bất hòa công khai
var fetchRecordingVariable = true;
var timeLimit = 3;
var scoreLimit = 3;

var gameConfig = {
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    noPlayer: true,
}

if (typeof token == 'string' && token.length == 39) {
    gameConfig.token = token;
}

var room = HBInit(gameConfig);

const futsalMap = '{"name":"Futsal x1, x2, by trombadinha [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":65,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":65,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"line"},{"x":368,"y":171,"bCoef":1,"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"trait":"ballArea"},{"x":0,"y":171,"bCoef":0,"trait":"line"},{"x":0,"y":-171,"bCoef":0,"trait":"line"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":199,"trait":"kickOffBarrier"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":0,"y":-199,"trait":"kickOffBarrier"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-387.05760771891,"y":-63.053454903871994,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-388.05760771891,"y":65.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":389,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80],"_selected":true,"_data":{"mirror":[]}},{"x":390,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":-65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":-171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":-65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":-171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":8,"v1":9,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":0,"v1":10,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":171},{"v0":3,"v1":11,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-171},{"v0":12,"v1":13,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":9,"v1":8,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":15,"v1":14,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":16,"v1":17,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":18,"v1":19,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":20,"v1":21,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":110,"v1":111,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":112,"v1":113,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":114,"v1":115,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":116,"v1":117,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":118,"v1":119,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":371},{"v0":120,"v1":121,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":371},{"v0":122,"v1":123,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-371},{"v0":124,"v1":125,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-171,"canvas_rect":[-901,-304,901,304],"a":[-901,-171],"b":[901,-171]}}},{"normal":[0,-1],"dist":-171,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-171,"canvas_rect":[-901,-304,901,304],"a":[-901,171],"b":[901,171]}}},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-901,-304,901,304],"a":[-901,-200],"b":[901,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-901,-304,901,304],"a":[-901,200],"b":[901,200]}}},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-901,-304,901,304],"a":[-420,-304],"b":[-420,304]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-901,-304,901,304],"a":[420,-304],"b":[420,304]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true}';
const trainingMap = '{"name":"Futsal Training from HaxMaps","width":600,"height":300,"spawnDistance":170,"bg":{"type":"hockey","width":500,"height":200,"kickOffRadius":75,"cornerRadius":0},"traits":{"ballArea":{"bCoef":1,"cMask":["ball"]},"kickOffBarrier":{"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"goalNet":{"bCoef":0.1,"cMask":["ball"]},"ballAreaS":{"vis":false,"bCoef":1,"cMask":["ball"]},"kickOffBarrierS":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"player":{"radius":15,"invMass":0,"bCoef":1}},"vertexes":[{"x":-500,"y":200,"trait":"ballArea","vis":false,"color":"FFFFFF"},{"x":-500,"y":-200,"trait":"ballArea","vis":false},{"x":500,"y":200,"trait":"ballArea","color":"FFFFFF"},{"x":500,"y":50,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":0,"_selected":"segment"},{"x":500,"y":-84,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":0,"_selected":"segment"},{"x":500,"y":-200,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":506,"y":-84,"trait":"goalNet","curve":0,"color":"FFFFFF"},{"x":545,"y":-84,"trait":"goalNet","curve":0,"color":"FFFFFF"},{"x":545,"y":50,"trait":"goalNet","curve":0,"color":"FFFFFF"},{"x":505,"y":50,"trait":"goalNet","curve":0,"color":"FFFFFF"},{"x":0,"y":-200,"bCoef":0.5,"color":"FFFFFF"},{"x":0,"y":75,"bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"FFFFFF","curve":180},{"x":0,"y":-75,"bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"FFFFFF","curve":180},{"x":0,"y":75,"bCoef":0.5,"cMask":["blueKO"],"color":"FFFFFF","curve":0},{"x":0,"y":-75,"bCoef":0.5,"cMask":["blueKO"],"color":"FFFFFF","curve":0},{"x":0,"y":75,"bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"FFFFFF","curve":-180},{"x":0,"y":-75,"bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"FFFFFF","curve":-180},{"x":-278,"y":141,"bCoef":0.5,"color":"CCFFFF","curve":30},{"x":0,"y":-75,"bCoef":0.5,"color":"FFFFFF","curve":180},{"x":-102,"y":141,"bCoef":0.5,"color":"CCFFFF","curve":30}],"segments":[{"v0":8,"v1":9,"curve":0,"color":"FFFFFF","trait":"goalNet"},{"v0":9,"v1":10,"color":"FFFFFF","trait":"goalNet"},{"v0":10,"v1":11,"curve":0,"color":"FFFFFF","trait":"goalNet"},{"v0":12,"v1":6,"curve":0,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":2,"v1":0,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":0,"v1":1,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":1,"v1":5,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":5,"v1":4,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":3,"v1":2,"curve":0,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":14,"v1":13,"curve":180,"color":"FFFFFF","bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":16,"v1":15,"curve":0,"color":"FFFFFF","bCoef":0.5,"cMask":["blueKO"]},{"v0":3,"v1":4,"curve":0,"color":"FFFFFF","bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","_selected":true},{"v0":18,"v1":17,"curve":-180,"color":"FFFFFF","bCoef":0.5,"cMask":["blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier"}],"goals":[{"p0":[494,44],"p1":[494,-84],"team":"blue"}],"discs":[{"radius":5,"pos":[500,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[500,-84],"color":"FFFFFF","trait":"goalPost"},{"pos":[-380,135],"color":"FFFFFF","trait":"player"},{"pos":[344,101],"color":"FFFFFF","trait":"player"},{"pos":[-380,-135],"color":"FFFFFF","trait":"player"},{"pos":[344,-120],"color":"FFFFFF","trait":"player"}],"planes":[],"ballPhysics":{"radius":6.5,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFFFFF"},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.5}}';
const classicMap = '{"name":"FUTSAL QATAR 2022 4x4 (without bugs) by ALMOHADA [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":850,"height":350,"spawnDistance":120,"bg":{"type":"hockey","height":0,"width":0,"color":"718C5A"},"canBeStored":true,"vertexes":[{"x":-700,"y":-321,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":-90,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":91,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":321,"trait":"linha","color":"ECE1FF"},{"x":-701,"y":320,"trait":"linha","color":"111129"},{"x":701,"y":320,"trait":"linha","color":"111129"},{"x":700,"y":321,"trait":"linha","color":"ECE1FF"},{"x":700,"y":90,"trait":"linha","pos":[550,80],"color":"ECE1FF"},{"x":700,"y":-90,"trait":"linha","color":"ECE1FF"},{"x":700,"y":-321,"trait":"linha","color":"ECE1FF"},{"x":701,"y":-320,"trait":"linha","color":"111129"},{"x":-701,"y":-320,"trait":"linha","color":"111129"},{"x":-700,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-751,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-750,"y":-91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-750,"y":91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-751,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-700,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":700,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","pos":[550,80],"color":"ECE1FF","bias":10},{"x":751,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":750,"y":91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":750,"y":-91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":751,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":700,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":-698,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-600,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-600,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-698,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":-90,"trait":"parede","bias":40},{"x":698,"y":-318,"trait":"parede","bias":40,"color":"969EA8"},{"x":-698,"y":-318,"trait":"parede","bias":40,"color":"ECE1FF"},{"x":-698,"y":-90,"trait":"parede","bias":40,"color":"ECE1FF"},{"x":-698,"y":91,"trait":"parede","bias":40},{"x":-698,"y":318,"trait":"parede","bias":40,"color":"111129"},{"x":698,"y":318,"trait":"parede","bias":40,"color":"111129"},{"x":698,"y":90,"trait":"parede","pos":[550,80],"bias":49},{"x":0,"y":-350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-90,"trait":"linha","color":"F2F2F2"},{"x":0,"y":90,"trait":"linha","color":"F2F2F2"},{"x":460,"y":-3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":-2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":-4,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-685,"y":-320,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":-305,"trait":"linha","color":"ECE1FF"},{"x":685,"y":320,"trait":"linha","color":"ECE1FF"},{"x":700,"y":305,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":305,"trait":"linha","color":"ECE1FF"},{"x":-685,"y":320,"trait":"linha","color":"ECE1FF"},{"x":700,"y":-305,"trait":"linha","color":"ECE1FF"},{"x":685,"y":-320,"trait":"linha","color":"ECE1FF"},{"x":-698,"y":-96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-756.25,"y":-96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-756.25,"y":96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-698,"y":96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":756.25,"y":96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":756.25,"y":-96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":-96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-601.5,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-601.5,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":601.5,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":601.5,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":400,"y":-318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":400,"y":318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":600,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":600,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-400,"y":-318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-400,"y":318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-700,"y":-90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":-700,"y":90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":700,"y":-90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":700,"y":90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":-400,"y":-90,"trait":"linha","curve":90,"color":"ECE1FF"},{"x":-400,"y":90,"trait":"linha","curve":90,"color":"ECE1FF"},{"x":400,"y":-90,"trait":"linha","curve":-90,"color":"ECE1FF"},{"x":400,"y":90,"trait":"linha","curve":-90,"color":"ECE1FF"},{"x":-460,"y":-3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":-2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":-4,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":-1,"y":320,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","vis":false},{"x":-1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D4AC0D","vis":false},{"x":-1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":-701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-750,"y":-91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-51,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-31,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":29,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":49,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-11,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":9,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":750,"y":-91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-51,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-31,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":29,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":49,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-11,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":9,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":-735,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-750.8333333333333,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-735,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-750.8333333333333,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":749.3333333333333,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":735,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":749.3333333333333,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":735,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":-700,"y":-318.5,"trait":"linha","curve":-90,"color":"717171"},{"x":-700,"y":318.5,"trait":"linha","curve":-90,"color":"717171"},{"x":700,"y":-318.5,"trait":"linha","curve":90,"color":"717171"},{"x":700,"y":318.5,"trait":"linha","curve":90,"color":"717171"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":183,"color":"B7950B"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":-183,"color":"9A7D0A"},{"x":17.295238095238094,"y":36.16743655553608,"cMask":["wall"],"cGroup":["wall"],"color":"FBE37D"},{"x":21.551373210999365,"y":48.12766794079051,"cMask":["wall"],"cGroup":["wall"],"color":"FBE37D"},{"x":0.5660714285714286,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":15.383333333333333,"y":51,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":-15.102478214627542,"y":51,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F1C40F"},{"x":2,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F1C40F"},{"x":-21.74086163608197,"y":48.27370507261451,"cMask":["wall"],"cGroup":["wall"],"curve":-63,"color":"F1C40F"},{"x":21.54954361725646,"y":47.909936501464415,"cMask":["wall"],"cGroup":["wall"],"curve":-63,"color":"F1C40F"},{"x":17.295238095238094,"y":36.16380975024047,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":0},{"x":27.810714285714283,"y":60.40119047619047,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":0},{"x":-12.854335266350585,"y":-12.785992361468388,"cMask":["wall"],"cGroup":["wall"],"curve":-5,"color":"F1C40F"},{"x":20.646695734237582,"y":18.72353377237919,"cMask":["wall"],"cGroup":["wall"],"curve":-5,"color":"F1C40F"},{"x":-20.7,"y":-1,"cMask":["wall"],"cGroup":["wall"],"curve":9,"color":"D4AC0D"},{"x":4.295238095238094,"y":22.66018294494485,"cMask":["wall"],"cGroup":["wall"],"curve":9,"color":"FBE37D"},{"x":-16.830123078763606,"y":27.74832340614142,"cMask":["wall"],"cGroup":["wall"],"curve":-7,"color":"D4AC0D"},{"x":-6.164304831809051,"y":12.851915399576606,"cMask":["wall"],"cGroup":["wall"],"curve":-7,"color":"D4AC0D"},{"x":2.372740790737518,"y":1.4573444487073814,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"F1C40F"},{"x":10.485495563396794,"y":-9.06267393956184,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"F1C40F"},{"x":-25.722619047619045,"y":60.40119047619047,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"D4AC0D"},{"x":0.5660714285714286,"y":69.17913445283055,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"D4AC0D"},{"x":-15.397863070978943,"y":45.452173924909616,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":45.47190021098944,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.408806827001182,"y":44.1498084355034,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":44.16953472158321,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.419750583023422,"y":42.847442946097196,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":42.86716923217701,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":2,"y":-8.774172542149264,"cMask":["wall"],"cGroup":["wall"],"curve":186,"color":"B7950B"},{"x":2,"y":-8.774172542149264,"cMask":["wall"],"cGroup":["wall"],"curve":-186,"color":"9A7D0A"},{"x":0.2642600740769898,"y":11.850186460422716,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":12.569655515726534,"y":23.407815279689217,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":-15.261486141718102,"y":-6.9025175039976805,"cMask":["wall"],"cGroup":["wall"],"curve":20,"color":"D4AC0D"},{"x":-8.295361950462208,"y":0.22459110903362767,"cMask":["wall"],"cGroup":["wall"],"curve":20,"color":"D4AC0D"},{"x":-13.906089320814594,"y":-60.899200244591924,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-0.9390786571882304,"y":-45.174752338000204,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":16.09441099435831,"y":-60.71580033398497,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":13.64746395714984,"y":-43.71098723477586,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":19.975892420101196,"y":-36.21768810523994,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F"},{"x":-5.205509720938451,"y":-33.803447422514985,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":1.2021182442966682,"y":-23.54296828697071,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-4.928111606234725,"y":-19.820494317872292,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-5.493193725093485,"y":-10.017139340254602,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F"},{"x":15.219214152997544,"y":-25.355698049863857,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F"},{"x":22.011512086907548,"y":-15.764513541219038,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F"},{"x":-27.191417131645604,"y":-40.97260383420401,"cMask":["wall"],"cGroup":["wall"],"curve":40,"color":"F4D03F"},{"x":-12.6148625342372,"y":-44.21612804371298,"cMask":["wall"],"cGroup":["wall"],"curve":40,"color":"F4D03F"},{"x":-17.767192914900857,"y":-24.800406793140944,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","curve":40},{"x":-25.056487561941317,"y":-26.61925393006127,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-15.3869193149567,"y":46.75453941431583,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":46.77426570039565,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.375975558934456,"y":48.056904903722035,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":48.07663118980186,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-16.007125457791304,"y":48.791666295546165,"cMask":["wall"],"cGroup":["wall"],"curve":-36,"color":"F1C40F"},{"x":15.383333333333333,"y":48.5219780284246,"cMask":["wall"],"cGroup":["wall"],"curve":-36,"color":"FBE37D"},{"x":-27.4,"y":-33.136689888661664,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"C8A510"},{"x":-15,"y":52,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"D4AC0D"},{"x":1.0440476190476193,"y":-64.29568957030348,"cMask":["wall"],"cGroup":["wall"],"curve":-185,"color":"D4AC0D"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":-185,"color":"D4AC0D"},{"x":1.0440476190476193,"y":-65.7845238095238,"cMask":["wall"],"cGroup":["wall"],"curve":-187,"color":"D4AC0D"},{"x":2,"y":-10,"cMask":["wall"],"cGroup":["wall"],"curve":-187,"color":"D4AC0D"},{"x":-16.325330104189707,"y":36.45395417388959,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-21.8033987623963,"y":51.104939144912876,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":24.491789091335683,"y":-18.29674412536515,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":-6},{"x":14.428613802880756,"y":12.533708897020562,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":-6},{"x":-1.6535977641211121,"y":26.62280891272379,"cMask":["wall"],"cGroup":["wall"],"curve":25,"color":"F1C40F"},{"x":9.841760996090423,"y":36.96311178650215,"cMask":["wall"],"cGroup":["wall"],"curve":25,"color":"F1C40F"},{"x":-12.175163916413917,"y":31.046867620871236,"cMask":["wall"],"cGroup":["wall"],"curve":-7},{"x":-9.905765263704826,"y":41.23125159715103,"cMask":["wall"],"cGroup":["wall"],"curve":-7},{"x":0.5660714285714286,"y":69.17913445283055,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"F4D03F"},{"x":27.810714285714283,"y":59.44523809523809,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"F4D03F"},{"x":21,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F","curve":65},{"x":-21,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F","curve":65},{"x":-16.738643391619767,"y":38.63489537244617,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-25.722619047619045,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-6.2,"y":12,"cMask":["wall"],"cGroup":["wall"],"curve":-2,"color":"F1C40F"},{"x":16.795238095238094,"y":34.16018294494485,"cMask":["wall"],"cGroup":["wall"],"curve":-2,"color":"F1C40F"},{"x":31.2,"y":-33.6,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":15,"y":52,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":1.0440476190476193,"y":-64.29568957030348,"cMask":["wall"],"cGroup":["wall"],"curve":187,"color":"F1C40F"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":187,"color":"F1C40F"},{"x":1.0440476190476193,"y":-65.7845238095238,"cMask":["wall"],"cGroup":["wall"],"curve":185,"color":"F1C40F"},{"x":2,"y":-10,"cMask":["wall"],"cGroup":["wall"],"curve":185,"color":"F1C40F"},{"x":-34.411129288610425,"y":339.66523966511943,"cMask":["wall"]},{"x":-18.730521195897836,"y":349.07897229416335,"cMask":["wall"]},{"x":-34.411129288610425,"y":339.66523966511943,"cMask":["wall"]},{"x":-22.172605899176233,"y":330.2515070360754,"cMask":["wall"]},{"x":-29.05677530573297,"y":343.3488741721366,"cMask":["wall"]},{"x":-22.172605899176233,"y":330.2515070360754,"cMask":["wall"]},{"x":-8.977947869942483,"y":329.84221431307355,"cMask":["wall"]},{"x":-15.862117276499191,"y":340.4838251111232,"cMask":["wall"]},{"x":-8.977947869942483,"y":342.12099600313087,"cMask":["wall"]},{"x":-8.977947869942483,"y":335.1630197120984,"cMask":["wall"]},{"x":-2.476232319305552,"y":324.93070163705056,"cMask":["wall"]},{"x":-2.8586861752253867,"y":338.8466542191156,"cMask":["wall"]},{"x":-5.15340931074428,"y":329.84221431307355,"cMask":["wall"]},{"x":5.555298655010631,"y":330.2515070360754,"cMask":["wall"]},{"x":-2.8586861752253867,"y":337.4141296886089,"cMask":["wall"]},{"x":0.009717744173258325,"y":342.12099600313087,"cMask":["wall"]},{"x":17.41136818852499,"y":342.12099600313087,"cMask":["wall"]},{"x":23.339402955282225,"y":330.66079975907735,"cMask":["wall"]},{"x":16.45523354872546,"y":341.302410557127,"cMask":["wall"]},{"x":23.339402955282225,"y":342.9395814491347,"cMask":["wall"]},{"x":23.339402955282225,"y":335.9816051581022,"cMask":["wall"]},{"x":27.92884922632001,"y":329.4329215900716,"cMask":["wall"]},{"x":27.737622298360137,"y":343.7581668951385,"cMask":["wall"]},{"x":33.66565706511733,"y":329.84221431307355,"cMask":["wall"]},{"x":27.92884922632001,"y":336.39089788110414,"cMask":["wall"]}],"segments":[{"v0":0,"v1":1,"color":"ECE1FF","trait":"linha","x":-700},{"v0":2,"v1":3,"color":"ECE1FF","trait":"linha","x":-700},{"v0":6,"v1":7,"color":"ECE1FF","trait":"linha","x":700},{"v0":8,"v1":9,"color":"ECE1FF","trait":"linha","x":700},{"v0":12,"v1":13,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":-90},{"v0":14,"v1":15,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"x":-750},{"v0":16,"v1":17,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":80},{"v0":18,"v1":19,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":80},{"v0":20,"v1":21,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"x":750},{"v0":22,"v1":23,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":-90},{"v0":24,"v1":25,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":25,"v1":26,"curve":180,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":26,"v1":25,"curve":180,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":26,"v1":27,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":28,"v1":29,"curve":0,"color":"ECE1FF","trait":"linha","y":-150},{"v0":30,"v1":31,"curve":0,"color":"ECE1FF","trait":"linha","y":150},{"v0":32,"v1":33,"color":"969EA8","trait":"parede","bias":40,"x":698},{"v0":33,"v1":34,"color":"969EA8","trait":"parede","bias":40,"y":-318},{"v0":34,"v1":35,"color":"ECE1FF","trait":"parede","bias":40,"x":-698},{"v0":36,"v1":37,"color":"969EA8","trait":"parede","bias":40,"x":-698},{"v0":37,"v1":38,"color":"111129","trait":"parede","bias":40,"y":318},{"v0":38,"v1":39,"color":"969EA8","trait":"parede","bias":49,"x":698},{"v0":40,"v1":41,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":42,"v1":43,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":46,"v1":47,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":47,"v1":46,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":48,"v1":49,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":49,"v1":48,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":51,"v1":52,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":53,"v1":54,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":55,"v1":56,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":57,"v1":58,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":59,"v1":60,"bCoef":0,"trait":"rede2","bias":20,"y":-86.25},{"v0":60,"v1":61,"bCoef":0,"trait":"rede2","bias":40,"x":-606.25},{"v0":61,"v1":62,"bCoef":0,"trait":"rede2","bias":20,"y":86.25},{"v0":63,"v1":64,"trait":"rede2","bias":20,"y":86.25},{"v0":64,"v1":65,"trait":"rede2","bias":40,"x":606.25},{"v0":65,"v1":66,"trait":"rede2","bias":20,"y":-86.25},{"v0":67,"v1":68,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":-601.5},{"v0":69,"v1":70,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":601.5},{"v0":71,"v1":72,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":400},{"v0":73,"v1":74,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":571.5},{"v0":75,"v1":76,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":571.5},{"v0":77,"v1":78,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":-400},{"v0":79,"v1":80,"curve":0,"color":"AAB7B8","trait":"linha","y":150},{"v0":81,"v1":82,"curve":0,"color":"AAB7B8","trait":"linha","y":150,"x":700},{"v0":83,"v1":84,"curve":90,"color":"ECE1FF","trait":"linha","y":150,"x":-400},{"v0":85,"v1":86,"curve":-90,"color":"ECE1FF","trait":"linha","y":150,"x":400},{"v0":87,"v1":88,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":88,"v1":87,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":89,"v1":90,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":90,"v1":89,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":92,"v1":93,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":94,"v1":95,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":97,"v1":96,"curve":177,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":98,"v1":99,"curve":177,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":100,"v1":101,"curve":0,"color":"ECE1FF","trait":"linha","y":320},{"v0":102,"v1":103,"curve":0,"color":"ECE1FF","trait":"linha","y":-320},{"v0":104,"v1":105,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":106,"v1":107,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":108,"v1":109,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":110,"v1":111,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":112,"v1":113,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":114,"v1":115,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":116,"v1":117,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":118,"v1":119,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":120,"v1":121,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":122,"v1":123,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":124,"v1":125,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":90},{"v0":126,"v1":127,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":-90},{"v0":128,"v1":129,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":90},{"v0":130,"v1":131,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":-90},{"v0":132,"v1":133,"curve":-90,"color":"717171","trait":"linha","y":150,"x":-700},{"v0":134,"v1":135,"curve":90,"color":"717171","trait":"linha","y":150,"x":700},{"v0":138,"v1":139,"color":"FBE37D","cMask":["wall"],"cGroup":["wall"],"y":87},{"v0":140,"v1":141,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":143,"curve":-10,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":146,"v1":147,"curve":0,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"],"y":87},{"v0":148,"v1":149,"curve":-5,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":151,"curve":9,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":152,"v1":153,"curve":-7,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":154,"v1":155,"curve":9.971862000782721,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":156,"v1":157,"curve":-30.255631412293944,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"y":110},{"v0":158,"v1":159,"curve":-35.344670176935146,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":66},{"v0":160,"v1":161,"curve":-35.34467017693518,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":63},{"v0":162,"v1":163,"curve":-35.34467017693502,"color":"1E8449","cMask":["wall"],"cGroup":["wall"],"y":60},{"v0":166,"v1":167,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":20,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":170,"v1":171,"curve":19.980617854376742,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":172,"v1":173,"curve":19.825378294386724,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":173,"v1":174,"curve":20.095207626974666,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":171,"v1":175,"curve":19.83082240294392,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":175,"v1":176,"curve":19.870013082058666,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":176,"v1":177,"curve":20.056605062337646,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":177,"v1":178,"curve":19.824043161727953,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":174,"v1":179,"curve":19.87890896829948,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"]},{"v0":179,"v1":180,"curve":19.968942406277453,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":181,"v1":182,"curve":40.25099341278321,"vis":true,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":182,"v1":183,"curve":39.6593065347139,"vis":true,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":183,"v1":184,"curve":30.257096492338828,"vis":true,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":185,"v1":186,"curve":-35.34467017693512,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":69},{"v0":187,"v1":188,"curve":-35.34467017693499,"color":"28B463","cMask":["wall"],"cGroup":["wall"],"y":72},{"v0":189,"v1":190,"curve":-36,"color":"28B463","cMask":["wall"],"cGroup":["wall"],"y":75},{"v0":191,"v1":192,"curve":10,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":193,"v1":194,"curve":-185,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":195,"v1":196,"curve":-187,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":197,"v1":198,"curve":0,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":199,"v1":200,"curve":-6,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"]},{"v0":201,"v1":202,"curve":25,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":203,"v1":204,"curve":-7,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":205,"v1":206,"curve":-30.255631412293944,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"],"y":110},{"v0":207,"v1":208,"curve":65,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"y":48},{"v0":209,"v1":210,"curve":0,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":211,"v1":212,"curve":-2,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":213,"v1":214,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":215,"v1":216,"curve":187,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":217,"v1":218,"curve":185,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":219,"v1":220,"curve":3.3354726766396428,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":221,"v1":222,"curve":180.34830935060117,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":223,"v1":224,"curve":-112.01006530416386,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":225,"v1":226,"curve":-164.5409479979574,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":225,"v1":227,"curve":6.249175943120465,"color":"FFFFFF","cMask":["wall"]},{"v0":226,"v1":228,"curve":-123.41048974700357,"color":"FFFFFF","cMask":["wall"]},{"v0":229,"v1":230,"curve":-5.0801638679967285,"color":"FFFFFF","cMask":["wall"]},{"v0":231,"v1":232,"curve":-5.832108701461828,"color":"FFFFFF","cMask":["wall"]},{"v0":233,"v1":234,"curve":-107.1578018849103,"color":"FFFFFF","cMask":["wall"]},{"v0":234,"v1":235,"curve":-9.567778429804825,"color":"FFFFFF","cMask":["wall"]},{"v0":236,"v1":237,"curve":-164.54094799796243,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":236,"v1":238,"curve":6.249175943120352,"color":"FFFFFF","cMask":["wall"]},{"v0":237,"v1":239,"curve":-123.41048974700553,"color":"FFFFFF","cMask":["wall"]},{"v0":240,"v1":241,"color":"FFFFFF","cMask":["wall"]},{"v0":242,"v1":243,"curve":-70.6842360982381,"color":"FFFFFF","cMask":["wall"]}],"goals":[{"p0":[-708.25,-90],"p1":[-708.25,90],"team":"red"},{"p0":[708.25,90],"p1":[708.25,-90],"team":"blue"}],"discs":[{"radius":6.25,"invMass":1.5,"pos":[0,0],"color":"ffffff","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":5,"pos":[-700,90],"color":"D60000","trait":"traveRed"},{"radius":5,"pos":[-700,-90],"color":"D60000","trait":"traveRed"},{"radius":5,"pos":[700,90],"color":"247BE3","trait":"traveBlue"},{"radius":5,"pos":[700,-90],"color":"247BE3","trait":"traveBlue"},{"pos":[-700,320],"color":"969EA8","trait":"bandeiraRed"},{"pos":[-700,-320],"color":"969EA8","trait":"bandeiraRed"},{"pos":[700,320],"color":"969EA8","trait":"bandeiraBlue"},{"pos":[700,-320],"color":"969EA8","trait":"bandeiraBlue"}],"planes":[{"normal":[0,1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[0,1],"dist":-350,"canvas_rect":[-850,-350,850,350],"a":[-850,-350],"b":[850,-350]}}},{"normal":[1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[1,0],"dist":-780,"canvas_rect":[-850,-350,850,350],"a":[-780,-350],"b":[-780,350]}}},{"normal":[0,-1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[0,-1],"dist":-350,"canvas_rect":[-850,-350,850,350],"a":[-850,350],"b":[850,350]}}},{"normal":[-1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[-1,0],"dist":-780,"canvas_rect":[-850,-350,850,350],"a":[780,-350],"b":[780,350]}}}],"traits":{"rede":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"F2F2F2"},"rede2":{"vis":false,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},"parede":{"vis":false,"bCoef":1,"cMask":["ball"],"bias":10},"traveRed":{"radius":6,"invMass":0,"bCoef":0.5,"color":"E18977"},"traveBlue":{"radius":6,"invMass":0,"bCoef":0.5,"color":"85ACF3"},"bandeiraRed":{"radius":3,"color":"E18977","cMask":[""]},"bandeiraBlue":{"radius":3,"color":"85ACF3","cMask":[""]},"linha":{"cMask":[""],"color":"F2F2F2"},"hb":{"cMask":[""],"color":"F2F2F2"}},"ballPhysics":"disc0","playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.95},"joints":[],"redSpawnPoints":[[-530,0],[-135,90],[-135,-90],[-285,0],[-765,0]],"blueSpawnPoints":[[530,0],[135,90],[135,-90],[285,0],[765,0]]}';
const bigMap = '{"name":"Big","width":600,"height":270,"spawnDistance":350,"bg":{"type":"grass","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-550,"y":240,"trait":"ballArea"},{"x":-550,"y":80,"trait":"ballArea"},{"x":-550,"y":-80,"trait":"ballArea"},{"x":-550,"y":-240,"trait":"ballArea"},{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":80,"trait":"ballArea"},{"x":550,"y":-80,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-560,"y":-80,"trait":"goalNet"},{"x":-580,"y":-60,"trait":"goalNet"},{"x":-580,"y":60,"trait":"goalNet"},{"x":-560,"y":80,"trait":"goalNet"},{"x":560,"y":-80,"trait":"goalNet"},{"x":580,"y":-60,"trait":"goalNet"},{"x":580,"y":60,"trait":"goalNet"},{"x":560,"y":80,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[{"p0":[-550,80],"p1":[-550,-80],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"pos":[-550,80],"trait":"goalPost","color":"FFCCCC"},{"pos":[-550,-80],"trait":"goalPost","color":"FFCCCC"},{"pos":[550,80],"trait":"goalPost","color":"CCCCFF"},{"pos":[550,-80],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-240,"trait":"ballArea"},{"normal":[0,-1],"dist":-240,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-600,"bCoef":0.1},{"normal":[-1,0],"dist":-600,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
var currentStadium = 'training';
var bigMapObj = JSON.parse(futsalMap);

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
room.setKickRateLimit(6, 0, 0);

var masterPassword = 10000 + getRandomInt(90000);
var roomPassword = '';

/* OPTIONS */

var drawTimeLimit = Infinity;
var teamSize = 4;
var maxAdmins = 0;
var disableBans = false;
var debugMode = false;
var afkLimit = debugMode ? Infinity : 12;

var defaultSlowMode = 0.5;
var chooseModeSlowMode = 1;
var slowMode = defaultSlowMode;
var SMSet = new Set();

var hideClaimMessage = true;
var mentionPlayersUnpause = true;

/* OBJECTS */

class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class Game {
    constructor() {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class MutePlayer {
    constructor(name, id, auth) {
        this.id = MutePlayer.incrementId();
        this.name = name;
        this.playerId = id;
        this.auth = auth;
        this.unmuteTimeout = null;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    setDuration(minutes) {
        this.unmuteTimeout = setTimeout(() => {
            room.sendAnnouncement(
                `Bạn đã không bị tắt tiếng.`,
                this.playerId,
                announcementColor,
                "bold",
                HaxNotification.CHAT
            );
            this.remove();
        }, minutes * 60 * 1000);
        muteArray.add(this);
    }

    remove() {
        this.unmuteTimeout = null;
        muteArray.removeById(this.id);
    }
}

class MuteList {
    constructor() {
        this.list = [];
    }

    add(mutePlayer) {
        this.list.push(mutePlayer);
        return mutePlayer;
    }

    getById(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByPlayerId(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.playerId === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByAuth(auth) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    removeById(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }

    removeByAuth(auth) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

class HaxStatistics {
    constructor(playerName = '') {
        this.playerName = playerName;
        this.games = 0;
        this.wins = 0;
        this.winrate = '0.00%';
        this.playtime = 0;
        this.goals = 0;
        this.assists = 0;
        this.CS = 0;
        this.ownGoals = 0;
    }
}

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Role = { PLAYER: 0, ADMIN_TEMP: 1, ADMIN_PERM: 2, MASTER: 3 };
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
const Situation = { STOP: 0, KICKOFF: 1, PLAY: 2, GOAL: 3 };

var gameState = State.STOP;
var playSituation = Situation.STOP;
var goldenGoal = false;

var playersAll = [];
var players = [];
var teamRed = [];
var teamBlue = [];
var teamSpec = [];

var teamRedStats = [];
var teamBlueStats = [];

var banList = [];

/* STATS */

var possession = [0, 0];
var actionZoneHalf = [0, 0];
var lastWinner = Team.SPECTATORS;
var streak = 0;

/* AUTH */

var authArray = [];
var adminList = [
     ['thanhvu', 'thanhvu'],
    // ['INSERT_AUTH_HERE_2', 'NICK_OF_ADMIN_2'],
];
var masterList = [
     'thanhvu',
    // 'INSERT_MASTER_AUTH_HERE_2'
];

/* COMMANDS */

var commands = {
    help: {
        aliases: ['commands'],
        roles: Role.PLAYER,
        desc: `
	Lệnh này hiển thị tất cả các lệnh có sẵn. Nó cũng có thể hiển thị mô tả của một lệnh nói riêng.
Ví dụ: \'! Help bb\' sẽ hiển thị mô tả của lệnh \'bb\'.`,
        function: helpCommand,
    },
    claim: {
        aliases: [],
        roles: Role.PLAYER,
        desc: false,
        function: masterCommand,
    },
    afk: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Lệnh này khiến bạn đi AFK.
Nó có những hạn chế: thời gian AFK tối thiểu 1 phút, tối đa 5 phút và thời gian hồi chiêu 10 phút`,
        function: afkCommand,
    },
    afks: {
        aliases: ['afklist'],
        roles: Role.PLAYER,
        desc: `
        Lệnh này hiển thị tất cả những người chơi AFK.`,
        function: afkListCommand,
    },
    bb: {
        aliases: ['bye', 'gn', 'cya'],
        roles: Role.PLAYER,
        desc: `
	Lệnh này khiến bạn rời đi ngay lập tức (khuyến nghị sử dụng).`,
        function: leaveCommand,
    },
    me: {
        aliases: ['stat', 'stats'],
        roles: Role.PLAYER,
        desc: `
        Lệnh này hiển thị số liệu thống kê toàn cầu của bạn trong phòng.`,
        function: globalStatsCommand,
    },
    rename: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Lệnh này cho phép bạn đổi tên mình cho bảng xếp hạng.`,
        function: renameCommand,
    },
    games: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Lệnh này hiển thị 5 người chơi hàng đầu có nhiều trò chơi nhất trong phòng.`,
        function: statsLeaderboardCommand,
    },
    wins: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Lệnh này hiển thị 5 người chơi hàng đầu có nhiều chiến thắng nhất trong phòng.`,
        function: statsLeaderboardCommand,
    },
    goals: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Lệnh này hiển thị 5 cầu thủ hàng đầu có nhiều bàn thắng nhất trong phòng.`,
        function: statsLeaderboardCommand,
    },
    assists: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Lệnh này hiển thị 5 người chơi hàng đầu có nhiều pha kiến tạo nhất trong phòng.`,
        function: statsLeaderboardCommand,
    },
    cs: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Lệnh này hiển thị 5 người chơi hàng đầu có nhiều CS nhất trong phòng.`,
        function: statsLeaderboardCommand,
    },
    playtime: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Lệnh này hiển thị 5 người chơi hàng đầu có nhiều thời gian chơi nhất trong phòng.`,
        function: statsLeaderboardCommand,
    },
    training: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Lệnh này tải sân vận động đào tạo cổ điển.`,
        function: stadiumCommand,
    },
    classic: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Lệnh này tải sân vận động cổ điển.`,
        function: stadiumCommand,
    },
    big: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Lệnh này tải sân vận động lớn`,
        function: stadiumCommand,
    },
    rr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    Lệnh này khởi động lại trò chơi.`,
        function: restartCommand,
    },
    rrs: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    Lệnh này hoán đổi các đội và bắt đầu lại trò chơi.`,
        function: restartSwapCommand,
    },
    swap: {
        aliases: ['s'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Lệnh này hoán đổi các đội khi trò chơi dừng lại.`,
        function: swapCommand,
    },
    kickred: {
        aliases: ['kickr'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Lệnh này loại bỏ tất cả các cầu thủ của đội đỏ, bao gồm cả cầu thủ đã nhập lệnh. Bạn có thể đưa ra lý do của cú đá như một lý lẽ.`,
        function: kickTeamCommand,
    },
    kickblue: {
        aliases: ['kickb'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Lệnh này loại bỏ tất cả những người chơi từ đội xanh, bao gồm cả người chơi đã nhập lệnh. Bạn có thể đưa ra lý do của cú đá như một lý lẽ.`,
        function: kickTeamCommand,
    },
    kickspec: {
        aliases: ['kicks'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Lệnh này loại bỏ tất cả các cầu thủ trong đội khán giả, bao gồm cả cầu thủ đã nhập lệnh. Bạn có thể đưa ra lý do của cú đá như một lý lẽ..`,
        function: kickTeamCommand,
    },
    mute: {
        aliases: ['m'],
        roles: Role.ADMIN_TEMP,
        desc: `
        Lệnh này cho phép tắt tiếng người chơi. Anh ta sẽ không thể nói trong một khoảng thời gian nhất định và quản trị viên có thể bật tiếng bất cứ lúc nào.
    Phải mất 2 đối số:
    Đối số 1: #<id> trong đó <id> là id của`,
        function: muteCommand,
    },
    unmute: {
        aliases: ['um'],
        roles: Role.ADMIN_TEMP,
        desc: `
        Lệnh này cho phép bật tiếng ai đó.
    Phải mất 1 đối số:
    Đối số 1: #<id> trong đó <id> là id của trình phát bị tắt tiếng.
    HOẶC
    Đối số 1: <số> trong đó <số> là số được liên kết `,
        function: unmuteCommand,
    },
    mutes: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Lệnh này hiển thị danh sách những người chơi bị tắt tiếng.`,
        function: muteListCommand,
    },
    clearbans: {
        aliases: [],
        roles: Role.MASTER,
        desc: `
	Lệnh này bỏ cấm tất cả mọi người. Nó cũng có thể bỏ cấm một người chơi cụ thể bằng cách thêm ID của anh ta làm đối số.`,
        function: clearbansCommand,
    },
    bans: {
        aliases: ['banlist'],
        roles: Role.MASTER,
        desc: `
    Lệnh này hiển thị tất cả những người chơi đã bị cấm và ID của họ.`,
        function: banListCommand,
    },
    admins: {
        aliases: ['adminlist'],
        roles: Role.MASTER,
        desc: `
    Lệnh này hiển thị tất cả những người chơi là quản trị viên lâu dài.`,
        function: adminListCommand,
    },
    setadmin: {
        aliases: ['admin'],
        roles: Role.MASTER,
        desc: `
    Lệnh này cho phép đặt ai đó làm quản trị viên. Anh ta sẽ có thể kết nối với tư cách quản trị viên và có thể bị xóa bất cứ lúc nào bởi các bậc thầy.
Phải mất 1 đối số:
Đối số 1: #<id> trong đó <id> là id của người chơi t`,
        function: setAdminCommand,
    },
    removeadmin: {
        aliases: ['unadmin'],
        roles: Role.MASTER,
        desc: `
	Lệnh này cho phép xóa ai đó với tư cách quản trị viên.
Phải mất 1 đối số:
Đối số 1: #<id> trong đó <id> là id của người chơi được nhắm mục tiêu.
HOẶC
Đối số 1: <số> trong đó <số> là số được liên kết với`,
        function: removeAdminCommand,
    },
    password: {
        aliases: ['pw'],
        roles: Role.MASTER,
        desc: `
        Lệnh này cho phép thêm mật khẩu vào phòng.
    Phải mất 1 đối số:
    Đối số 1: <mật khẩu> trong đó <mật khẩu> là mật khẩu bạn muốn cho phòng.
    
    Để xóa mật khẩu phòng, sim`,
        function: passwordCommand,
    },
};

/* GAME */

var lastTouches = Array(2).fill(null);
var lastTeamTouched;

var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed = 0;
var playerRadius = 15;
var ballRadius = 10;
var triggerDistance = playerRadius + ballRadius + 0.01;

/* COLORS */

var welcomeColor = 0xc4ff65;
var announcementColor = 0xffefd6;
var infoColor = 0xbebebe;
var privateMessageColor = 0xffc933;
var redColor = 0xff4c4c;
var blueColor = 0x62cbff;
var warningColor = 0xffa135;
var errorColor = 0xa40000;
var successColor = 0x75ff75;
var defaultColor = null;

/* AUXILIARY */

var checkTimeVariable = false;
var checkStadiumVariable = true;
var endGameVariable = false;
var cancelGameVariable = false;
var kickFetchVariable = false;

var chooseMode = false;
var timeOutCap;
var capLeft = false;
var redCaptainChoice = '';
var blueCaptainChoice = '';
var chooseTime = 20;

var AFKSet = new Set();
var AFKMinSet = new Set();
var AFKCooldownSet = new Set();
var minAFKDuration = 0;
var maxAFKDuration = 30;
var AFKCooldown = 0;

var muteArray = new MuteList();
var muteDuration = 5;

var removingPlayers = false;
var insertingPlayers = false;

var stopTimeout;
var startTimeout;
var unpauseTimeout;
var removingTimeout;
var insertingTimeout;

var emptyPlayer = {
    id: 0,
};
stadiumCommand(emptyPlayer, "!training");

var game = new Game();

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

if (typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
}

function getDate() {
    let d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

/* MATH FUNCTIONS */

function getRandomInt(max) {
    // returns a random number between 0 and max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function pointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/* TIME FUNCTIONS */

function getHoursStats(time) {
    return Math.floor(time / 3600);
}

function getMinutesGame(time) {
    var t = Math.floor(time / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesReport(time) {
    return Math.floor(Math.round(time) / 60);
}

function getMinutesEmbed(time) {
    var t = Math.floor(Math.round(time) / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesStats(time) {
    return Math.floor(time / 60) - getHoursStats(time) * 60;
}

function getSecondsGame(time) {
    var t = Math.floor(time - Math.floor(time / 60) * 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsReport(time) {
    var t = Math.round(time);
    return Math.floor(t - getMinutesReport(t) * 60);
}

function getSecondsEmbed(time) {
    var t = Math.round(time);
    var t2 = Math.floor(t - Math.floor(t / 60) * 60);
    return `${Math.floor(t2 / 10)}${Math.floor(t2 % 10)}`;
}

function getTimeGame(time) {
    return `[${getMinutesGame(time)}:${getSecondsGame(time)}]`;
}

function getTimeEmbed(time) {
    return `[${getMinutesEmbed(time)}:${getSecondsEmbed(time)}]`;
}

function getTimeStats(time) {
    if (getHoursStats(time) > 0) {
        return `${getHoursStats(time)}h${getMinutesStats(time)}m`;
    } else {
        return `${getMinutesStats(time)}m`;
    }
}

function getGoalGame() {
    return game.scores.red + game.scores.blue;
}

/* REPORT FUNCTIONS */

function findFirstNumberCharString(str) {
    let str_number = str[str.search(/[0-9]/g)];
    return str_number === undefined ? "0" : str_number;
}

function getIdReport() {
    var d = new Date();
    return `${d.getFullYear() % 100}${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}${d.getDate() < 10 ? '0' : ''}${d.getDate()}${d.getHours() < 10 ? '0' : ''}${d.getHours()}${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}${d.getSeconds() < 10 ? '0' : ''}${d.getSeconds()}${findFirstNumberCharString(roomName)}`;
}

function getRecordingName(game) {
    let d = new Date();
    let redCap = game.playerComp[0][0] != undefined ? game.playerComp[0][0].player.name : 'Red';
    let blueCap = game.playerComp[1][0] != undefined ? game.playerComp[1][0].player.name : 'Blue';
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let year = d.getFullYear() % 100 < 10 ? '0' + (d.getFullYear() % 100) : (d.getFullYear() % 100);
    let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    return `${day}-${month}-${year}-${hour}h${minute}-${redCap}vs${blueCap}.hbr2`;
}

function fetchRecording(game) {
    if (gameWebhook != "") {
        let form = new FormData();
        form.append(null, new File([game.rec], getRecordingName(game), { "type": "text/plain" }));
        form.append("payload_json", JSON.stringify({
            "username": roomName
        }));

        fetch(gameWebhook, {
            method: 'POST',
            body: form,
        }).then((res) => res);
    }
}

/* FEATURE FUNCTIONS */

function getCommand(commandStr) {
    if (commands.hasOwnProperty(commandStr)) return commandStr;
    for (const [key, value] of Object.entries(commands)) {
        for (let alias of value.aliases) {
            if (alias == commandStr) return key;
        }
    }
    return false;
}

function getPlayerComp(player) {
    if (player == null || player.id == 0) return null;
    var comp = game.playerComp;
    var index = comp[0].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[0][index];
    index = comp[1].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[1][index];
    return null;
}

function getTeamArray(team, includeAFK = true) {
    if (team == Team.RED) return teamRed;
    if (team == Team.BLUE) return teamBlue;
    if (includeAFK) {
      return playersAll.filter((p) => p.team === Team.SPECTATORS);
    }
    return teamSpec;
}

function sendAnnouncementTeam(message, team, color, style, mention) {
    for (let player of team) {
        room.sendAnnouncement(message, player.id, color, style, mention);
    }
}

function teamChat(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    var emoji = player.team == Team.RED ? '??' : player.team == Team.BLUE ? '??' : '?';
    var message = `${emoji} [TEAM] ${player.name}: ${msgArray.join(' ')}`;
    var team = getTeamArray(player.team, true);
    var color = player.team == Team.RED ? redColor : player.team == Team.BLUE ? blueColor : null;
    var style = 'bold';
    var mention = HaxNotification.CHAT;
    sendAnnouncementTeam(message, team, color, style, mention);
}

function playerChat(player, message) {
    var msgArray = message.split(/ +/);
    var playerTargetIndex = playersAll.findIndex(
        (p) => p.name.replaceAll(' ', '_') == msgArray[0].substring(2)
    );
    if (playerTargetIndex == -1) {
        room.sendAnnouncement(
            `Người chơi không hợp lệ, hãy đảm bảo tên bạn đã nhập là chính xác.`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    var playerTarget = playersAll[playerTargetIndex];
    if (player.id == playerTarget.id) {
        room.sendAnnouncement(
            `Bạn không thể gửi PM cho chính mình!`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    var messageFrom = `🌎 [PM with ${playerTarget.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    var messageTo = `🌎 [PM with ${player.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    room.sendAnnouncement(
        messageFrom,
        player.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
    room.sendAnnouncement(
        messageTo,
        playerTarget.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* PHYSICS FUNCTIONS */

function calculateStadiumVariables() {
    if (checkStadiumVariable && teamRed.length + teamBlue.length > 0) {
        checkStadiumVariable = false;
        setTimeout(() => {
            let ballDisc = room.getDiscProperties(0);
            let playerDisc = room.getPlayerDiscProperties(teamRed.concat(teamBlue)[0].id);
            ballRadius = ballDisc.radius;
            playerRadius = playerDisc.radius;
            triggerDistance = ballRadius + playerRadius + 0.01;
            speedCoefficient = 100 / (5 * ballDisc.invMass * (ballDisc.damping ** 60 + 1));
        }, 1);
    }
}

function checkGoalKickTouch(array, index, goal) {
    if (array != null && array.length >= index + 1) {
        var obj = array[index];
        if (obj != null && obj.goal != null && obj.goal == goal) return obj;
    }
    return null;
}

/* BUTTONS */

function topButton() {
    if (teamSpec.length > 0) {
        if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
            room.setPlayerTeam(teamSpec[0].id, Team.RED);
            room.setPlayerTeam(teamSpec[1].id, Team.BLUE);
        } else if (teamRed.length < teamBlue.length)
            room.setPlayerTeam(teamSpec[0].id, Team.RED);
        else room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
    }
}

function randomButton() {
    if (teamSpec.length > 0) {
        if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
            var r = getRandomInt(teamSpec.length);
            room.setPlayerTeam(teamSpec[r].id, Team.RED);
            teamSpec = teamSpec.filter((spec) => spec.id != teamSpec[r].id);
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
        } else if (teamRed.length < teamBlue.length)
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.RED);
        else
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
    }
}

function blueToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (var i = 0; i < teamBlue.length; i++) {
        room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (var i = 0; i < teamRed.length; i++) {
        room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let i = 0; i < Math.max(teamRed.length, teamBlue.length); i++) {
        if (Math.max(teamRed.length, teamBlue.length) - teamRed.length - i > 0)
            room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
        else if (Math.max(teamRed.length, teamBlue.length) - teamBlue.length - i > 0)
            room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
        else break;
    }
    for (let i = 0; i < Math.min(teamRed.length, teamBlue.length); i++) {
        room.setPlayerTeam(
            teamBlue[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
            Team.SPECTATORS
        );
        room.setPlayerTeam(
            teamRed[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
            Team.SPECTATORS
        );
    }
}

function swapButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let player of teamBlue) {
        room.setPlayerTeam(player.id, Team.RED);
    }
    for (let player of teamRed) {
        room.setPlayerTeam(player.id, Team.BLUE);
    }
}

/* COMMAND FUNCTIONS */

/* PLAYER COMMANDS */

function leaveCommand(player, message) {
    room.kickPlayer(player.id, 'Bye !', false);
}

function helpCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        var commandString = 'Player commands :';
        for (const [key, value] of Object.entries(commands)) {
            if (value.desc && value.roles == Role.PLAYER) commandString += ` !${key},`;
        }
        commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        if (getRole(player) >= Role.ADMIN_TEMP) {
            commandString += `Admin commands :`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.ADMIN_TEMP) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':')
                commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        if (getRole(player) >= Role.MASTER) {
            commandString += `Master commands :`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.MASTER) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':') commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        commandString += "\nĐể nhận thông tin về một lệnh cụ thể, hãy nhập ''!help <tên lệnh>'.";
        room.sendAnnouncement(
            commandString,
            player.id,
            infoColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (msgArray.length >= 1) {
        var commandName = getCommand(msgArray[0].toLowerCase());
        if (commandName != false && commands[commandName].desc != false)
            room.sendAnnouncement(
                `\'${commandName}\' Lệnh :\n${commands[commandName].desc}`,
                player.id,
                infoColor,
                'bold',
                HaxNotification.CHAT
            );
        else
            room.sendAnnouncement(
                `Lệnh bạn đã cố gắng lấy thông tin không tồn tại. Để kiểm tra tất cả các lệnh có sẵn, hãy nhập \'! help\'`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
    }
}

function globalStatsCommand(player, message) {
    var stats = new HaxStatistics(player.name);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    var statsString = printPlayerStats(stats);
    room.sendAnnouncement(
        statsString,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function renameCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (localStorage.getItem(authArray[player.id][0])) {
        var stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
        if (msgArray.length == 0) {
            stats.playerName = player.name;
        } else {
            stats.playerName = msgArray.join(' ');
        }
        localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
        room.sendAnnouncement(
            `Bạn đã đổi tên thành công cho chính mình ${stats.playerName} !`,
            player.id,
            successColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        room.sendAnnouncement(
            `❌Bạn chưa chơi trò chơi nào trong phòng này !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function statsLeaderboardCommand(player, message) {
    var key = message.split(/ +/)[0].substring(1).toLowerCase();
    printRankings(key, player.id);
}

function afkCommand(player, message) {
    if (player.team == Team.SPECTATORS || players.length == 1) {
        if (AFKSet.has(player.id)) {
            if (AFKMinSet.has(player.id)) {
                room.sendAnnouncement(
                    `🚨Có tối thiểu ${minAFKDuration} phút của thời gian AFK. Đừng lạm dụng mệnh lệnh !`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else {
                AFKSet.delete(player.id);
                room.sendAnnouncement(
                    `😁 ${player.name} không AFK nữa !`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
                updateTeams();
                handlePlayersJoin();
            }
        } else {
            if (AFKCooldownSet.has(player.id)) {
                room.sendAnnouncement(
                    `🚨Bạn chỉ có thể AFK mỗi ${AFKCooldown} phút. Đừng lạm dụng mệnh lệnh !`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else {
                AFKSet.add(player.id);
                if (!player.admin) {
                    AFKMinSet.add(player.id);
                    AFKCooldownSet.add(player.id);
                    setTimeout(
                        (id) => {
                            AFKMinSet.delete(id);
                        },
                        minAFKDuration * 60 * 1000,
                        player.id
                    );
                    setTimeout(
                        (id) => {
                            AFKSet.delete(id);
                        },
                        maxAFKDuration * 60 * 1000,
                        player.id
                    );
                    setTimeout(
                        (id) => {
                            AFKCooldownSet.delete(id);
                        },
                        AFKCooldown * 60 * 1000,
                        player.id
                    );
                }
                room.setPlayerTeam(player.id, Team.SPECTATORS);
                room.sendAnnouncement(
                    `😪 ${player.name} đang afk!`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
                updateTeams();
                handlePlayersLeave();
            }
        }
    } else {
        room.sendAnnouncement(
            `🚨Bạn không thể AFK khi đang ở trong một đội !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function afkListCommand(player, message) {
    if (AFKSet.size == 0) {
        room.sendAnnouncement(
            "🚨 Không có ai trong danh sách AFK.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return;
    }
    var cstm = '?? AFK list : ';
    AFKSet.forEach((_, value) => {
        var p = room.getPlayer(value);
        if (p != null) cstm += p.name + `, `;
    });
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(cstm, player.id, announcementColor, 'bold', null);
}

function masterCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (parseInt(msgArray[0]) == masterPassword) {
        if (!masterList.includes(authArray[player.id][0])) {
            room.setPlayerAdmin(player.id, true);
            adminList = adminList.filter((a) => a[0] != authArray[player.id][0]);
            masterList.push(authArray[player.id][0]);
            room.sendAnnouncement(
                `🧑🏻‍💻${player.name} bây giờ là một căn phòng master !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Bạn đã là một Master rồi!`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* ADMIN COMMANDS */

function restartCommand(player, message) {
    instantRestart();
}

function restartSwapCommand(player, message) {
    room.stopGame();
    swapButton();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function swapCommand(player, message) {
    if (playSituation == Situation.STOP) {
        swapButton();
        room.sendAnnouncement(
            '☎️đổi đội !',
            null,
            announcementColor,
            'bold',
            null
        );
    } else {
        room.sendAnnouncement(
            `Vui lòng dừng trò chơi trước khi hoán đổi.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function kickTeamCommand(player, message) {
    var msgArray = message.split(/ +/);
    var reasonString = `Team kick by ${player.name}`;
    if (msgArray.length > 1) {
        reasonString = msgArray.slice(1).join(' ');
    }
    if (['!kickred', '!kickr'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamRed.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamRed[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickblue', '!kickb'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamBlue.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamBlue[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickspec', '!kicks'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamSpec.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamSpec[0].id, reasonString, false);
            }, i * 20)
        }
    }
}

function stadiumCommand(player, message) {
    var msgArray = message.split(/ +/);
    if (gameState == State.STOP) {
        if (['!classic'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(futsalMap ).name == 'Classic') {
                room.setDefaultStadium('Classic');
            } else {
                room.setCustomStadium(futsalMap );
            }
            currentStadium = 'classic';
        } else if (['!big'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(bigMap).name == 'Big') {
                room.setDefaultStadium('Big');
            } else {
                room.setCustomStadium(bigMap);
            }
            currentStadium = 'big';
        } else if (['!training'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(trainingMap);
            currentStadium = 'training';
        } else {
            room.sendAnnouncement(
                `Sân vận động không được công nhận.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Vui lòng dừng trò chơi trước khi sử dụng lệnh này.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function muteCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerMute = room.getPlayer(parseInt(msgArray[0]));
                var minutesMute = muteDuration;
                if (msgArray.length > 1 && parseInt(msgArray[1]) > 0) {
                    minutesMute = parseInt(msgArray[1]);
                }
                if (!playerMute.admin) {
                    var muteObj = new MutePlayer(playerMute.name, playerMute.id, authArray[playerMute.id][0]);
                    muteObj.setDuration(minutesMute);
                    room.sendAnnouncement(
                        `🔉${playerMute.name} đã bị tắt tiếng cho ${minutesMute} phút.`,
                        null,
                        announcementColor,
                        'bold',
                        null
                    );
                } else {
                    room.sendAnnouncement(
                        `Bạn đã bị tắt tiếng bởi admin.`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `Không có người chơi nào có ID như vậy trong phòng. Nhập "!help mute" để biết thêm thông tin.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Định dạng không chính xác cho đối số của bạn. Nhập "!help mute" để biết thêm thông tin.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Số đối số sai. Nhập "!help mute" để biết thêm thông tin.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function unmuteCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerUnmute = room.getPlayer(parseInt(msgArray[0]));
                if (muteArray.getByPlayerId(playerUnmute.id) != null) {
                    var muteObj = muteArray.getByPlayerId(playerUnmute.id);
                    muteObj.remove()
                    room.sendAnnouncement(
                        `🔈${playerUnmute.name} đã được bật tiếng !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `Người chơi không bị tắt tiếng !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `Không có người chơi nào có ID như vậy trong phòng. Nhập "!help unmute" để biết thêm thông tin.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) > 0 && muteArray.getById(parseInt(msgArray[0])) != null) {
            var playerUnmute = muteArray.getById(parseInt(msgArray[0]));
            playerUnmute.remove();
            room.sendAnnouncement(
                `🔈${playerUnmute.name} đã được bật tiếng !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Định dạng không chính xác cho đối số của bạn. Nhập "!help unmute" để biết thêm thông tin.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Số đối số sai. Nhập "!help unmute" để biết thêm thông tin.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function muteListCommand(player, message) {
    if (muteArray.list.length == 0) {
        room.sendAnnouncement(
            "❌Không có ai trong danh sách cấm.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '?? Mute list : ';
    for (let mute of muteArray.list) {
        cstm += mute.name + `[${mute.id}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

/* MASTER COMMANDS */

function clearbansCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        room.clearBans();
        room.sendAnnouncement(
            '✅Lệnh cấm đã được xóa !',
            null,
            announcementColor,
            'bold',
            null
        );
        banList = [];
    } else if (msgArray.length == 1) {
        if (parseInt(msgArray[0]) > 0) {
            var ID = parseInt(msgArray[0]);
            room.clearBan(ID);
            if (banList.length != banList.filter((p) => p[1] != ID).length) {
                room.sendAnnouncement(
                    `✅ ${banList.filter((p) => p[1] == ID)[0][0]} đã được bỏ cấm khỏi phòng !`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
            } else {
                room.sendAnnouncement(
                    `ID bạn đã nhập không có lệnh cấm liên quan đến. Nhập "!help clearbans" để biết thêm thông tin.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
            banList = banList.filter((p) => p[1] != ID);
        } else {
            room.sendAnnouncement(
                `ID không hợp lệ đã nhập. Nhập "!help clearbans" để biết thêm thông tin.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Số đối số sai. Nhập "!help clearbans" để biết thêm thông tin.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function banListCommand(player, message) {
    if (banList.length == 0) {
        room.sendAnnouncement(
            "📊Không có ai trong danh sách cấm.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '?? Ban list : ';
    for (let ban of banList) {
        cstm += ban[0] + `[${ban[1]}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function adminListCommand(player, message) {
    if (adminList.length == 0) {
        room.sendAnnouncement(
            "📊Không có ai trong danh sách quản trị viên.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📊 Admin list : ';
    for (let i = 0; i < adminList.length; i++) {
        cstm += adminList[i][1] + `[${i}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function setAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (!adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    if (!masterList.includes(authArray[playerAdmin.id][0])) {
                        room.setPlayerAdmin(playerAdmin.id, true);
                        adminList.push([authArray[playerAdmin.id][0], playerAdmin.name]);
                        room.sendAnnouncement(
                            `${playerAdmin.name} là admin!`,
                            null,
                            announcementColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    } else {
                        room.sendAnnouncement(
                            `Người chơi này đã là master rồi !`,
                            player.id,
                            errorColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    }
                } else {
                    room.sendAnnouncement(
                        `Người chơi này đã là quản trị viên vĩnh viễn!`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `Không có người chơi nào có ID như vậy trong phòng. Nhập "!help setadmin" để biết thêm thông tin.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Định dạng không chính xác cho đối số của bạn. Nhập "!help setadmin" để biết thêm thông tin.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Số đối số sai. Nhập "!help setadmin" để biết thêm thông tin.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function removeAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    room.setPlayerAdmin(playerAdmin.id, false);
                    adminList = adminList.filter((a) => a[0] != authArray[playerAdmin.id][0]);
                    room.sendAnnouncement(
                        `${playerAdmin.name} không còn là quản trị viên phòng nữa !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `Người chơi này không phải là quản trị viên lâu dài!`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `Không có người chơi nào có ID như vậy trong phòng. Nhập "!help removeadmin" để biết thêm thông tin.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) < adminList.length) {
            var index = parseInt(msgArray[0]);
            var playerAdmin = adminList[index];
            if (playersAll.findIndex((p) => authArray[p.id][0] == playerAdmin[0]) != -1) {
                // check if there is the removed admin in the room
                var indexRem = playersAll.findIndex((p) => authArray[p.id][0] == playerAdmin[0]);
                room.setPlayerAdmin(playersAll[indexRem].id, false);
            }
            adminList.splice(index);
            room.sendAnnouncement(
                `${playerAdmin[1]} không còn là quản trị viên phòng nữa !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Định dạng không chính xác cho đối số của bạn. Nhập "!help removeadmin" để biết thêm thông tin.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Số đối số sai. Nhập "!help removeadmin" để biết thêm thông tin.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function passwordCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray.length == 1 && msgArray[0] == '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `Mật khẩu phòng đã bị xóa.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        roomPassword = msgArray.join(' ');
        room.setPassword(roomPassword);
        room.sendAnnouncement(
            `Mật khẩu phòng đã được đặt thành ${roomPassword}`,
            player.id,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        if (roomPassword != '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `Mật khẩu phòng đã bị xóa.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Phòng hiện không có mật khẩu. Nhập "!help password" để biết thêm thông tin.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    if (game != undefined) game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0 && playSituation == Situation.PLAY) {
        if (scores.red != scores.blue) {
            if (!checkTimeVariable) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        if (drawTimeLimit != 0) {
            goldenGoal = true;
            room.sendAnnouncement(
                '⚽ Bàn thắng đầu tiên !',
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60 - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (!checkTimeVariable) {
            checkTimeVariable = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function instantRestart() {
    room.stopGame();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function resumeGame() {
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 1000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 500);
}

function endGame(winner) {
    if (players.length >= 2 * teamSize - 1) activateChooseMode();
    const scores = room.getScores();
    game.scores = scores;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement(
            `🏆 Đội đỏ thắng ${scores.red} - ${scores.blue} 🔴! Chuỗi hiện tại: ${streak}`,
            null,
            redColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(
            `🏆 Đội xanh thắng ${scores.blue} - ${scores.red} 🔵! Chuỗi hiện tại: ${streak}`,
            null,
            blueColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        streak = 0;
        room.sendAnnouncement(
            '🥇 Đã đạt đến giới hạn rút thăm !',
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    let possessionRedPct = (possession[0] / (possession[0] + possession[1])) * 100;
    let possessionBluePct = 100 - possessionRedPct;
    let possessionString = `🔴 ${possessionRedPct.toFixed(0)}% - ${possessionBluePct.toFixed(0)}% 🔵`;
    let actionRedPct = (actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1])) * 100;
    let actionBluePct = 100 - actionRedPct;
    let actionString = `?? ${actionRedPct.toFixed(0)}% - ${actionBluePct.toFixed(0)}% ??`;
    let CSString = getCSString(scores);
    room.sendAnnouncement(
        `📊 Kiểm soát bóng:🔴${possessionString}\n` +
        `📊 Vùng bóng lăn:🔴${actionString}\n` +
        `${CSString}`,
        null,
        announcementColor,
        'bold',
        HaxNotification.NONE
    );
    updateStats();
}

/* CHOOSING FUNCTIONS */

function activateChooseMode() {
    chooseMode = true;
    slowMode = chooseModeSlowMode;
    room.sendAnnouncement(
        `🐢 Chế độ chậm thay đổi để chọn thời lượng chế độ của: ${chooseModeSlowMode}s.`,
        null,
        announcementColor,
        'bold',
        HaxNotification.CHAT
    );
}

function deactivateChooseMode() {
    chooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != defaultSlowMode) {
        slowMode = defaultSlowMode;
        room.sendAnnouncement(
            `🐢 Chế độ chậm thay đổi để chọn thời lượng chế độ của: ${defaultSlowMode}s.`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    redCaptainChoice = '';
    blueCaptainChoice = '';
}

function getSpecList(player) {
    if (player == null) return null;
    var cstm = 'Players : ';
    for (let i = 0; i < teamSpec.length; i++) {
        cstm += teamSpec[i].name + `[${i + 1}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    let captain;
    if (teamRed.length <= teamBlue.length && teamRed.length != 0) {
        captain = teamRed[0];
    } else if (teamBlue.length < teamRed.length && teamBlue.length != 0) {
        captain = teamBlue[0];
    }
    if (captain != null) {
        room.sendAnnouncement(
            "Để chọn một người chơi, hãy nhập số của anh ấy vào danh sách đã cho hoặc sử dụng 'top', 'random' hoặc 'bottom'.",
            captain.id,
            infoColor,
            'bold',
            HaxNotification.MENTION
        );
        timeOutCap = setTimeout(
            (player) => {
                room.sendAnnouncement(
                    `🏃‍♀️Nhanh lên ${player.name}, chỉ ${Number.parseInt(String(chooseTime / 2))} giây còn lại để chọn!`,
                    player.id,
                    warningColor,
                    'bold',
                    HaxNotification.MENTION
                );
                timeOutCap = setTimeout(
                    (player) => {
                        room.kickPlayer(
                            player.id,
                            "Bạn đã không chọn đúng lúc !",
                            false
                        );
                    },
                    chooseTime * 500,
                    captain
                );
            },
            chooseTime * 1000,
            captain
        );
    }
    if (teamRed.length != 0 && teamBlue.length != 0) {
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
}

function chooseModeFunction(player, message) {
    var msgArray = message.split(/ +/);
    if (player.id == teamRed[0].id || player.id == teamBlue[0].id) {
        if (teamRed.length <= teamBlue.length && player.id == teamRed[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
                redCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} đã chọn Hàng đầu !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
                redCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chọn ngẫu nhiên !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
                redCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chọn dưới !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Số của bạn không hợp lệ !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.RED
                    );
                    room.sendAnnouncement(
                        `${player.name} chọn ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
        if (teamRed.length > teamBlue.length && player.id == teamBlue[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                blueCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chọn trên !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(
                    teamSpec[getRandomInt(teamSpec.length)].id,
                    Team.BLUE
                );
                blueCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chọn ngẫu nhiên !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
                blueCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chọn dưới !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Số của bạn không hợp lệ !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.BLUE
                    );
                    room.sendAnnouncement(
                        `${player.name} chọn ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
    }
}

function checkCaptainLeave(player) {
    if (
        (teamRed.findIndex((red) => red.id == player.id) == 0 && chooseMode && teamRed.length <= teamBlue.length) ||
        (teamBlue.findIndex((blue) => blue.id == player.id) == 0 && chooseMode && teamBlue.length < teamRed.length)
    ) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
}

function slowModeFunction(player, message) {
    if (!player.admin) {
        if (!SMSet.has(player.id)) {
            SMSet.add(player.id);
            setTimeout(
                (number) => {
                    SMSet.delete(number);
                },
                slowMode * 1000,
                player.id
            );
        } else {
            return true;
        }
    }
    return false;
}

/* PLAYER FUNCTIONS */

function updateTeams() {
    playersAll = room.getPlayerList();
    players = playersAll.filter((p) => !AFKSet.has(p.id));
    teamRed = players.filter((p) => p.team == Team.RED);
    teamBlue = players.filter((p) => p.team == Team.BLUE);
    teamSpec = players.filter((p) => p.team == Team.SPECTATORS);
}

function updateAdmins(excludedPlayerID = 0) {
    if (players.length != 0 && players.filter((p) => p.admin).length < maxAdmins) {
        let playerArray = players.filter((p) => p.id != excludedPlayerID && !p.admin);
        let arrayID = playerArray.map((player) => player.id);
        room.setPlayerAdmin(Math.min(...arrayID), true);
    }
}

function getRole(player) {
    return (
        !!masterList.find((a) => a == authArray[player.id][0]) * 2 +
        !!adminList.find((a) => a[0] == authArray[player.id][0]) * 1 +
        player.admin * 1
    );
}

function ghostKickHandle(oldP, newP) {
    var teamArrayId = getTeamArray(oldP.team, true).map((p) => p.id);
    teamArrayId.splice(teamArrayId.findIndex((id) => id == oldP.id), 1, newP.id);

    room.kickPlayer(oldP.id, 'Ghost kick', false);
    room.setPlayerTeam(newP.id, oldP.team);
    room.setPlayerAdmin(newP.id, oldP.admin);
    room.reorderPlayers(teamArrayId, true);

    if (oldP.team != Team.SPECTATORS && playSituation != Situation.STOP) {
        var discProp = room.getPlayerDiscProperties(oldP.id);
        room.setPlayerDiscProperties(newP.id, discProp);
    }
}

/* ACTIVITY FUNCTIONS */

function handleActivityPlayer(player) {
    let pComp = getPlayerComp(player);
    if (pComp != null) {
        pComp.inactivityTicks++;
        if (pComp.inactivityTicks == 60 * ((2 / 3) * afkLimit)) {
            room.sendAnnouncement(
                `🔈 ${player.name}, nếu bạn không di chuyển hoặc gửi tin nhắn trong lần tiếp theo ${Math.floor(afkLimit / 3)} giây, bạn sẽ bị kicks !`,
                player.id,
                warningColor,
                'bold',
                HaxNotification.MENTION
            );
            return;
        }
        if (pComp.inactivityTicks >= 60 * afkLimit) {
            pComp.inactivityTicks = 0;
            if (game.scores.time <= afkLimit - 0.5) {
                setTimeout(() => {
                    !chooseMode ? instantRestart() : room.stopGame();
                }, 10);
            }
            room.kickPlayer(player.id, 'AFK', false);
        }
    }
}

function handleActivityPlayerTeamChange(changedPlayer) {
    if (changedPlayer.team == Team.SPECTATORS) {
        let pComp = getPlayerComp(changedPlayer);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivityStop() {
    for (let player of players) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivity() {
    if (gameState === State.PLAY && players.length > 1) {
        for (let player of teamRed) {
            handleActivityPlayer(player);
        }
        for (let player of teamBlue) {
            handleActivityPlayer(player);
        }
    }
}

/* LINEUP FUNCTIONS */

function getStartingLineups() {
    var compositions = [[], []];
    for (let player of teamRed) {
        compositions[0].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    for (let player of teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

function handleLineupChangeTeamChange(changedPlayer) {
    if (gameState != State.STOP) {
        var playerLineup;
        if (changedPlayer.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[0][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[0].push(playerLineup);
            }
        } else if (changedPlayer.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[1][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[1].push(playerLineup);
            }
        }
        if (teamRed.some((r) => r.id == changedPlayer.id)) {
            // player leaves red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (teamBlue.some((r) => r.id == changedPlayer.id)) {
            // player leaves blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

function handleLineupChangeLeave(player) {
    if (playSituation != Situation.STOP) {
        if (player.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            var playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (player.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            var playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

/* TEAM BALANCE FUNCTIONS */

function balanceTeams() {
    if (!chooseMode) {
        if (players.length == 0) {
            room.stopGame();
            room.setScoreLimit(scoreLimit);
            room.setTimeLimit(timeLimit);
        } else if (players.length == 1 && teamRed.length == 0) {
            instantRestart();
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!training`);
            }, 5);
            room.setPlayerTeam(players[0].id, Team.RED);
        } else if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length && teamSpec.length > 0) {
            const n = Math.abs(teamRed.length - teamBlue.length);
            if (players.length == 2) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!classic`);
                }, 5);
            }
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.BLUE);
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.RED);
                }
            }
        } else if (Math.abs(teamRed.length - teamBlue.length) > teamSpec.length) {
            const n = Math.abs(teamRed.length - teamBlue.length);
            if (players.length == 1) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!training`);
                }, 5);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            } else if (teamSize > 2 && players.length == 5) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!classic`);
                }, 5);
            }
            if (players.length == teamSize * 2 - 1) {
                teamRedStats = [];
                teamBlueStats = [];
            }
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(
                        teamRed[teamRed.length - 1 - i].id,
                        Team.SPECTATORS
                    );
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(
                        teamBlue[teamBlue.length - 1 - i].id,
                        Team.SPECTATORS
                    );
                }
            }
        } else if (Math.abs(teamRed.length - teamBlue.length) < teamSpec.length && teamRed.length != teamBlue.length) {
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        } else if (teamSpec.length >= 2 && teamRed.length == teamBlue.length && teamRed.length < teamSize) {
            if (teamRed.length == 2) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!big`);
                }, 5);
            }
            topButton();
        }
    }
}

function handlePlayersJoin() {
    if (chooseMode) {
        if (teamSize > 2 && players.length == 6) {
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!big`);
            }, 5);
        }
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
    balanceTeams();
}

function handlePlayersLeave() {
    if (gameState != State.STOP) {
        var scores = room.getScores();
        if (players.length >= 2 * teamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamRed.length != teamBlue.length) {
            var rageQuitCheck = false;
            if (teamRed.length < teamBlue.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    rageQuitCheck = true;
                }
            } else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    rageQuitCheck = true;
                }
            }
            if (rageQuitCheck) {
                room.sendAnnouncement(
                    "Ragequit đã phát hiện, trò chơi đã kết thúc.",
                    null,
                    infoColor,
                    'bold',
                    HaxNotification.MENTION
                )
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 100);
                return;
            }
        }
    }
    if (chooseMode) {
        if (teamSize > 2 && players.length == 5) {
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!classic`);
            }, 5);
        }
        if (teamRed.length == 0 || teamBlue.length == 0) {
            room.setPlayerTeam(teamSpec[0].id, teamRed.length == 0 ? Team.RED : Team.BLUE);
            return;
        }
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        }
        if (streak == 0 && gameState == State.STOP) {
            if (Math.abs(teamRed.length - teamBlue.length) == 2) {
                var teamIn = teamRed.length > teamBlue.length ? teamRed : teamBlue;
                room.setPlayerTeam(teamIn[teamIn.length - 1].id, Team.SPECTATORS)
            }
        }
        if (teamRed.length == teamBlue.length && teamSpec.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }

        if (capLeft) {
            choosePlayer();
        } else {
            getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
        }
    }
    balanceTeams();
}

function handlePlayersTeamChange(byPlayer) {
    if (chooseMode && !removingPlayers && byPlayer == null) {
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        } else if (
            (teamRed.length == teamSize && teamBlue.length == teamSize) ||
            (teamRed.length == teamBlue.length && teamSpec.length < 2)
        ) {
            deactivateChooseMode();
            resumeGame();
        } else if (teamRed.length <= teamBlue.length && redCaptainChoice != '') {
            if (redCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
            } else if (redCaptainChoice == 'random') {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
            }
            return;
        } else if (teamBlue.length < teamRed.length && blueCaptainChoice != '') {
            if (blueCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
            } else if (blueCaptainChoice == 'random') {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.BLUE);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
            }
            return;
        } else {
            choosePlayer();
        }
    }
}

function handlePlayersStop(byPlayer) {
    if (byPlayer == null && endGameVariable) {
        if (chooseMode) {
            if (players.length == 2 * teamSize) {
                chooseMode = false;
                resetButton();
                for (var i = 0; i < teamSize; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        randomButton();
                    }, 200 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200 * teamSize);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else if (lastWinner == Team.BLUE) {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 10);
                } else {
                    resetButton();
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 300);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
            }
        } else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    swapButton();
                }
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 3 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 200);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 4) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                    }, 500);
                }, 500);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 2000);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 5 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200);
                setTimeout(() => {
                    topButton();
                }, 200);
                activateChooseMode();
            } else if (players.length == 6) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 1500);
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                        setTimeout(() => {
                            randomButton();
                        }, 500);
                    }, 500);
                }, 500);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            }
        }
    }
}

/* STATS FUNCTIONS */

/* GK FUNCTIONS */

function handleGKTeam(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? teamRed : teamBlue;
    let playerGK = teamArray.reduce((prev, current) => {
        if (team == Team.RED) {
            return (prev?.position.x < current.position.x) ? prev : current
        } else {
            return (prev?.position.x > current.position.x) ? prev : current
        }
    }, null);
    let playerCompGK = getPlayerComp(playerGK);
    return playerCompGK;
}

function handleGK() {
    let redGK = handleGKTeam(Team.RED);
    if (redGK != null) {
        redGK.GKTicks++;
    }
    let blueGK = handleGKTeam(Team.BLUE);
    if (blueGK != null) {
        blueGK.GKTicks++;
    }
}

function getGK(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? game.playerComp[0] : game.playerComp[1];
    let playerGK = teamArray.reduce((prev, current) => {
        return (prev?.GKTicks > current.GKTicks) ? prev : current
    }, null);
    return playerGK;
}

function getCS(scores) {
    let playersNameCS = [];
    let redGK = getGK(Team.RED);
    let blueGK = getGK(Team.BLUE);
    if (redGK != null && scores.blue == 0) {
        playersNameCS.push(redGK.player.name);
    }
    if (blueGK != null && scores.red == 0) {
        playersNameCS.push(blueGK.player.name);
    }
    return playersNameCS;
}

function getCSString(scores) {
    let playersCS = getCS(scores);
    if (playersCS.length == 0) {
        return "🎯 không CS";
    } else if (playersCS.length == 1) {
        return `🎯 ${playersCS[0]} đã có một CS.`;
    } else {
        return `🎯 ${playersCS[0]} và ${playersCS[1]} đã có một CS.`;
    }
}

/* GLOBAL STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of players) {
        if (player.position != null) {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (lastTeamTouched == playerTouch.team || lastTeamTouched == Team.SPECTATORS) {
            if (lastTouches[0] == null || (lastTouches[0] != null && lastTouches[0].player.id != playerTouch.id)) {
                game.touchArray.push(
                    new BallTouch(
                        playerTouch,
                        game.scores.time,
                        getGoalGame(),
                        ballPosition
                    )
                );
                lastTouches[0] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 1,
                    getGoalGame()
                );
                lastTouches[1] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 2,
                    getGoalGame()
                );
            }
        }
        lastTeamTouched = playerTouch.team;
    }
}

function getBallSpeed() {
    var ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function getGameStats() {
    if (playSituation == Situation.PLAY && gameState == State.PLAY) {
        lastTeamTouched == Team.RED ? possession[0]++ : possession[1]++;
        var ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? actionZoneHalf[0]++ : actionZoneHalf[1]++;
        handleGK();
    }
}

/* GOAL ATTRIBUTION FUNCTIONS */

function getGoalAttribution(team) {
    var goalAttribution = Array(2).fill(null);
    if (lastTouches[0] != null) {
        if (lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (lastTouches[1] != null && lastTouches[1].player.team == team) {
                goalAttribution = [lastTouches[0].player, lastTouches[1].player];
            } else {
                goalAttribution = [lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

function getGoalString(team) {
    var goalString;
    var scores = game.scores;
    var goalAttribution = getGoalAttribution(team);
    if (goalAttribution[0] != null) {
        if (goalAttribution[0].team == team) {
            if (goalAttribution[1] != null && goalAttribution[1].team == team) {
                goalString = `⚽ ${getTimeGame(scores.time)} Ghi bàn bơi ${goalAttribution[0].name}💪 ! Hổ trợ bởi ${goalAttribution[1].name}🤝🏻. Tốc độ bóng : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(
                        scores.time,
                        team,
                        goalAttribution[0],
                        goalAttribution[1]
                    )
                );
            } else {
                goalString = `⚽ ${getTimeGame(scores.time)} Ghi bàn bởi ${goalAttribution[0].name} 💪! Tốc độ bóng : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(scores.time, team, goalAttribution[0], null)
                );
            }
        } else {
            goalString = `😭 ${getTimeGame(scores.time)} Phản lưới nhà bởi ${goalAttribution[0].name} 😆! Tốc độ bóng : ${ballSpeed.toFixed(2)}km/h.`;
            game.goals.push(
                new Goal(scores.time, team, goalAttribution[0], null)
            );
        }
    } else {
        goalString = `⚽ ${getTimeGame(scores.time)} mục tiêu cho ${team == Team.RED ? 'red' : 'blue'} team 💪! Tốc độ bóng : ${ballSpeed.toFixed(2)}km/h.`;
        game.goals.push(
            new Goal(scores.time, team, null, null)
        );
    }

    return goalString;
}

/* ROOM STATS FUNCTIONS */

function updatePlayerStats(player, teamStats) {
    var stats = new HaxStatistics(player.name);
    var pComp = getPlayerComp(player);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    stats.games++;
    if (lastWinner == teamStats) stats.wins++;
    stats.winrate = ((100 * stats.wins) / (stats.games || 1)).toFixed(1) + `%`;
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    stats.CS += getCSPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
}

function updateStats() {
    if (
        players.length >= 2 * teamSize &&
        (
            game.scores.time >= (5 / 6) * game.scores.timeLimit ||
            game.scores.red == game.scores.scoreLimit ||
            game.scores.blue == game.scores.scoreLimit
        ) &&
        teamRedStats.length >= teamSize && teamBlueStats.length >= teamSize
    ) {
        for (let player of teamRedStats) {
            updatePlayerStats(player, Team.RED);
        }
        for (let player of teamBlueStats) {
            updatePlayerStats(player, Team.BLUE);
        }
    }
}

function printRankings(statKey, id = 0) {
    var leaderboard = [];
    statKey = statKey == "cs" ? "CS" : statKey;
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.length == 43)
            leaderboard.push([
                JSON.parse(localStorage.getItem(key)).playerName,
                JSON.parse(localStorage.getItem(key))[statKey],
            ]);
    }
    if (leaderboard.length < 5) {
        if (id != 0) {
            room.sendAnnouncement(
                'Chưa đủ trò chơi đã chơi !',
                id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        return;
    }
    leaderboard.sort(function (a, b) { return b[1] - a[1]; });
    var rankingString = `${statKey.charAt(0).toUpperCase() + statKey.slice(1)}> `;
    for (let i = 0; i < 5; i++) {
        let playerName = leaderboard[i][0];
        let playerStat = leaderboard[i][1];
        if (statKey == 'playtime') playerStat = getTimeStats(playerStat);
        rankingString += `#${i + 1} ${playerName} : ${playerStat}, `;
    }
    rankingString = rankingString.substring(0, rankingString.length - 2);
    room.sendAnnouncement(
        rankingString,
        id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* GET STATS FUNCTIONS */

function getGamePlayerStats(player) {
    var stats = new HaxStatistics(player.name);
    var pComp = getPlayerComp(player);
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    stats.CS += getCSPlayer(pComp);
    return stats;
}

function getGametimePlayer(pComp) {
    if (pComp == null) return 0;
    var timePlayer = 0;
    for (let j = 0; j < pComp.timeEntry.length; j++) {
        if (pComp.timeExit.length < j + 1) {
            timePlayer += game.scores.time - pComp.timeEntry[j];
        } else {
            timePlayer += pComp.timeExit[j] - pComp.timeEntry[j];
        }
    }
    return Math.floor(timePlayer);
}

function getGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    var goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team === pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getOwnGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    var goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team !== pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getAssistsPlayer(pComp) {
    if (pComp == null) return 0;
    var assistPlayer = 0;
    for (let goal of game.goals) {
        if (goal.assist != null) {
            if (authArray[goal.assist.id][0] == pComp.auth) {
                assistPlayer++;
            }
        }
    }
    return assistPlayer;
}

function getGKPlayer(pComp) {
    if (pComp == null) return 0;
    let GKRed = getGK(Team.RED);
    if (pComp.auth == GKRed?.auth) {
        return Team.RED;
    }
    let GKBlue = getGK(Team.BLUE);
    if (pComp.auth == GKBlue?.auth) {
        return Team.BLUE;
    }
    return Team.SPECTATORS;
}

function getCSPlayer(pComp) {
    if (pComp == null || game.scores == null) return 0;
    if (getGKPlayer(pComp) == Team.RED && game.scores.blue == 0) {
        return 1;
    } else if (getGKPlayer(pComp) == Team.BLUE && game.scores.red == 0) {
        return 1;
    }
    return 0;
}

function actionReportCountTeam(goals, team) {
    let playerActionSummaryTeam = [];
    let indexTeam = team == Team.RED ? 0 : 1;
    let indexOtherTeam = team == Team.RED ? 1 : 0;
    for (let goal of goals[indexTeam]) {
        if (goal[0] != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == goal[0].id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[0].id);
                playerActionSummaryTeam[index][1]++;
            } else {
                playerActionSummaryTeam.push([goal[0], 1, 0, 0]);
            }
            if (goal[1] != null) {
                if (playerActionSummaryTeam.find(a => a[0].id == goal[1].id)) {
                    let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[1].id);
                    playerActionSummaryTeam[index][2]++;
                } else {
                    playerActionSummaryTeam.push([goal[1], 0, 1, 0]);
                }
            }
        }
    }
    if (goals[indexOtherTeam].length == 0) {
        let playerCS = getGK(team)?.player;
        if (playerCS != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == playerCS.id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == playerCS.id);
                playerActionSummaryTeam[index][3]++;
            } else {
                playerActionSummaryTeam.push([playerCS, 0, 0, 1]);
            }
        }
    }

    playerActionSummaryTeam.sort((a, b) => (a[1] + a[2] + a[3]) - (b[1] + b[2] + b[3]));
    return playerActionSummaryTeam;
}

/* PRINT FUNCTIONS */

function printPlayerStats(stats) {
    let statsString = '';
    for (let [key, value] of Object.entries(stats)) {
        if (key == 'playerName') statsString += `${value}: `;
        else {
            if (key == 'playtime') value = getTimeStats(value);
            let reCamelCase = /([A-Z](?=[a-z]+)|[A-Z]+(?![a-z]))/g;
            let statName = key.replaceAll(reCamelCase, ' $1').trim();
            statsString += `${statName.charAt(0).toUpperCase() + statName.slice(1)}: ${value}, `;
        }
    }
    statsString = statsString.substring(0, statsString.length - 2);
    return statsString;
}

/* FETCH FUNCTIONS */

function fetchGametimeReport(game) {
    var fieldGametimeRed = {
        name: '🔴        **RED TEAM STATS**',
        value: '⭐️ __**Game Time:**__\n\n',
        inline: true,
    };
    var fieldGametimeBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: '⭐️ __**Game Time:**__\n\n',
        inline: true,
    };
    var redTeamTimes = game.playerComp[0].map((p) => [p.player, getGametimePlayer(p)]);
    var blueTeamTimes = game.playerComp[1].map((p) => [p.player, getGametimePlayer(p)]);

    for (let time of redTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeRed.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeRed.value += `\n${blueTeamTimes.length - redTeamTimes.length > 0 ? '\n'.repeat(blueTeamTimes.length - redTeamTimes.length) : ''
        }`;
    fieldGametimeRed.value += '=====================';

    for (let time of blueTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeBlue.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeBlue.value += `\n${redTeamTimes.length - blueTeamTimes.length > 0 ? '\n'.repeat(redTeamTimes.length - blueTeamTimes.length) : ''
        }`;
    fieldGametimeBlue.value += '=====================';

    return [fieldGametimeRed, fieldGametimeBlue];
}

function fetchActionsSummaryReport(game) {
    var fieldReportRed = {
        name: '🔴        **RED TEAM STATS**',
        value: '⭐️ __**Player Stats:**__\n\n',
        inline: true,
    };
    var fieldReportBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: '⭐️ __**Player Stats:**__\n\n',
        inline: true,
    };
    var goals = [[], []];
    for (let i = 0; i < game.goals.length; i++) {
        goals[game.goals[i].team - 1].push([game.goals[i].striker, game.goals[i].assist]);
    }
    var redActions = actionReportCountTeam(goals, Team.RED);
    if (redActions.length > 0) {
        for (let act of redActions) {
            fieldReportRed.value += `> **${act[0].team != Team.RED ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }
    var blueActions = actionReportCountTeam(goals, Team.BLUE);
    if (blueActions.length > 0) {
        for (let act of blueActions) {
            fieldReportBlue.value += `> **${act[0].team != Team.BLUE ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }

    fieldReportRed.value += `\n${blueActions.length - redActions.length > 0 ? '\n'.repeat(blueActions.length - redActions.length) : ''
        }`;
    fieldReportRed.value += '=====================';

    fieldReportBlue.value += `\n${redActions.length - blueActions.length > 0 ? '\n'.repeat(redActions.length - blueActions.length) : ''
        }`;
    fieldReportBlue.value += '=====================';

    return [fieldReportRed, fieldReportBlue];
}

function fetchSummaryEmbed(game) {
    var fetchEndgame = [fetchGametimeReport, fetchActionsSummaryReport];
    var logChannel = gameWebhook;
    var fields = [
        {
            name: '🔴        **RED TEAM STATS**',
            value: '=====================\n\n',
            inline: true,
        },
        {
            name: '🔵       **BLUE TEAM STATS**',
            value: '=====================\n\n',
            inline: true,
        },
    ];
    for (let i = 0; i < fetchEndgame.length; i++) {
        var fieldsReport = fetchEndgame[i](game);
        fields[0].value += fieldsReport[0].value + '\n\n';
        fields[1].value += fieldsReport[1].value + '\n\n';
    }
    fields[0].value = fields[0].value.substring(0, fields[0].value.length - 2);
    fields[1].value = fields[1].value.substring(0, fields[1].value.length - 2);

    var possR = possession[0] / (possession[0] + possession[1]);
    var possB = 1 - possR;
    var possRString = (possR * 100).toFixed(0).toString();
    var possBString = (possB * 100).toFixed(0).toString();
    var zoneR = actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1]);
    var zoneB = 1 - zoneR;
    var zoneRString = (zoneR * 100).toFixed(0).toString();
    var zoneBString = (zoneB * 100).toFixed(0).toString();
    var win = (game.scores.red > game.scores.blue) * 1 + (game.scores.blue > game.scores.red) * 2;
    var objectBodyWebhook = {
        embeds: [
            {
                title: `🧠 MATCH REPORT #${getIdReport()}`,
                description:
                    `**${getTimeEmbed(game.scores.time)}** ` +
                    (win == 1 ? '**Red Team** ' : 'Red Team ') + game.scores.red +
                    ' - ' +
                    game.scores.blue + (win == 2 ? ' **Blue Team**' : ' Blue Team') +
                    '\n```c\nPossession: ' + possRString + '% - ' + possBString + '%' +
                    '\nAction Zone: ' + zoneRString + '% - ' + zoneBString + '%\n```\n\n',
                color: 9567999,
                fields: fields,
                footer: {
                    text: `Recording: ${getRecordingName(game)}`,
                },
                timestamp: new Date().toISOString(),
            },
        ],
        username: roomName
    };
    if (logChannel != '') {
        fetch(logChannel, {
            method: 'POST',
            body: JSON.stringify(objectBodyWebhook),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    authArray[player.id] = [player.auth, player.conn];
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ?? JOIN (${playersAll.length + 1}/${maxPlayers})\n**` +
                    `${player.name}** [${authArray[player.id][0]}] {${authArray[player.id][1]}}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    room.sendAnnouncement(
        `
█░█░█ █▀▀ █░░ █░░ █▀▀ █▀█ █▀▄▀█ █▀▀
▀▄▀▄▀ ██▄ █▄▄ █▄▄ █▄▄ █▄█ █░▀░█ ██▄
👋🏻 Chào mừng bạn đến Server 👋🏻
⌨️ Gõ "!help" để xem các lệnh của phòng !! ⌨️
`,
        player.id,
        welcomeColor,
        'bold',
        HaxNotification.CHAT
    );
    updateTeams();
    updateAdmins();
    if (masterList.findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `Master ${player.name} đã kết nối với phòng !`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    } else if (adminList.map((a) => a[0]).findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `Admin ${player.name} đã ngắt kết nối với phòng !`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    }
    var sameAuthCheck = playersAll.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
    if (sameAuthCheck.length > 0 && !debugMode) {
        var oldPlayerArray = playersAll.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
        for (let oldPlayer of oldPlayerArray) {
            ghostKickHandle(oldPlayer, player);
        }
    }
    handlePlayersJoin();
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    if (AFKSet.has(changedPlayer.id) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendAnnouncement(
            `😪${changedPlayer.name} đã AFK !`,
            null,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }
    updateTeams();
    if (gameState != State.STOP) {
        if (changedPlayer.team != Team.SPECTATORS && game.scores.time <= (3 / 4) * game.scores.timeLimit && Math.abs(game.scores.blue - game.scores.red) < 2) {
            changedPlayer.team == Team.RED ? teamRedStats.push(changedPlayer) : teamBlueStats.push(changedPlayer);
        }
    }
    handleActivityPlayerTeamChange(changedPlayer);
    handlePlayersTeamChange(byPlayer);
};

room.onPlayerLeave = function (player) {
    setTimeout(() => {
        if (!kickFetchVariable) {
            if (roomWebhook != '') {
                var stringContent = `[${getDate()}] ?? LEAVE (${playersAll.length}/${maxPlayers})\n**${player.name}**` +
                    `[${authArray[player.id][0]}] {${authArray[player.id][1]}}`;
                fetch(roomWebhook, {
                    method: 'POST',
                    body: JSON.stringify({
                        content: stringContent,
                        username: roomName,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res);
            }
        } else kickFetchVariable = false;
    }, 10);
    handleLineupChangeLeave(player);
    checkCaptainLeave(player);
    updateTeams();
    updateAdmins();
    handlePlayersLeave();
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    kickFetchVariable = true;
    if (roomWebhook != '') {
        var stringContent = `[${getDate()}] ? ${ban ? 'BAN' : 'KICK'} (${playersAll.length}/${maxPlayers})\n` +
            `**${kickedPlayer.name}** [${authArray[kickedPlayer.id][0]}] {${authArray[kickedPlayer.id][1]}} was ${ban ? 'banned' : 'kicked'}` +
            `${byPlayer != null ? ' by **' + byPlayer.name + '** [' + authArray[byPlayer.id][0] + '] {' + authArray[byPlayer.id][1] + '}' : ''}`
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((ban && ((byPlayer != null &&
        (byPlayer.id == kickedPlayer.id || getRole(byPlayer) < Role.MASTER)) || getRole(kickedPlayer) == Role.MASTER)) || disableBans
    ) {
        room.clearBan(kickedPlayer.id);
        return;
    }
    if (byPlayer != null && getRole(byPlayer) < Role.ADMIN_PERM) {
        room.sendAnnouncement(
            'Bạn không được phép đá/cấm người chơi !',
            byPlayer.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(byPlayer.id, false);
        return;
    }
    if (ban) banList.push([kickedPlayer.name, kickedPlayer.id]);
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    if (gameState !== State.STOP && player.team != Team.SPECTATORS) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
    let msgArray = message.split(/ +/);
    if (!hideClaimMessage || msgArray[0] != '!claim') {
        if (roomWebhook != '')
            fetch(roomWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    content: `[${getDate()}] ?? CHAT\n**${player.name}** : ${message.replace('@', '@ ')}`,
                    username: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res);
    }
    if (msgArray[0][0] == '!') {
        let command = getCommand(msgArray[0].slice(1).toLowerCase());
        if (command != false && commands[command].roles <= getRole(player)) commands[command].function(player, message);
        else
            room.sendAnnouncement(
                `Lệnh bạn đã cố nhập không tồn tại cho bạn. Vui lòng nhập '!help' để nhận các lệnh có sẵn cho bạn.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        return false;
    }
    if (msgArray[0].toLowerCase() == 't') {
        teamChat(player, message);
        return false;
    }
    if (msgArray[0].substring(0, 2) === '@@') {
        playerChat(player, message);
        return false;
    }
    if (chooseMode && teamRed.length * teamBlue.length != 0) {
        var choosingMessageCheck = chooseModeFunction(player, message);
        if (choosingMessageCheck) return false;
    }
    if (slowMode > 0) {
        var filter = slowModeFunction(player, message);
        if (filter) return false;
    }
    if (!player.admin && muteArray.getByAuth(authArray[player.id][0]) != null) {
        room.sendAnnouncement(
            `Bạn đã bị tắt tiếng!`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return false;
    }
};

room.onPlayerActivity = function (player) {
    if (gameState !== State.STOP) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
};

room.onPlayerBallKick = function (player) {
    if (playSituation != Situation.GOAL) {
        var ballPosition = room.getBallPosition();
        if (game.touchArray.length == 0 || player.id != game.touchArray[game.touchArray.length - 1].player.id) {
            if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
            lastTeamTouched = player.team;
            game.touchArray.push(
                new BallTouch(
                    player,
                    game.scores.time,
                    getGoalGame(),
                    ballPosition
                )
            );
            lastTouches[0] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 1,
                getGoalGame()
            );
            lastTouches[1] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 2,
                getGoalGame()
            );
        }
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    clearTimeout(startTimeout);
    if (byPlayer != null) clearTimeout(stopTimeout);
    game = new Game();
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    gameState = State.PLAY;
    endGameVariable = false;
    goldenGoal = false;
    playSituation = Situation.KICKOFF;
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    teamRedStats = [];
    teamBlueStats = [];
    if (teamRed.length == teamSize && teamBlue.length == teamSize) {
        for (var i = 0; i < teamSize; i++) {
            teamRedStats.push(teamRed[i]);
            teamBlueStats.push(teamBlue[i]);
        }
    }
    calculateStadiumVariables();
};

room.onGameStop = function (byPlayer) {
    clearTimeout(stopTimeout);
    clearTimeout(unpauseTimeout);
    if (byPlayer != null) clearTimeout(startTimeout);
    game.rec = room.stopRecording();
    if (
        !cancelGameVariable && game.playerComp[0].length + game.playerComp[1].length > 0 &&
        (
            (game.scores.timeLimit != 0 &&
                ((game.scores.time >= 0.5 * game.scores.timeLimit &&
                    game.scores.time < 0.75 * game.scores.timeLimit &&
                    game.scores.red != game.scores.blue) ||
                    game.scores.time >= 0.75 * game.scores.timeLimit)
            ) ||
            endGameVariable
        )
    ) {
        fetchSummaryEmbed(game);
        if (fetchRecordingVariable) {
            setTimeout((gameEnd) => { fetchRecording(gameEnd); }, 500, game);
        }
    }
    cancelGameVariable = false;
    gameState = State.STOP;
    playSituation = Situation.STOP;
    updateTeams();
    handlePlayersStop(byPlayer);
    handleActivityStop();
};

room.onGamePause = function (byPlayer) {
    if (mentionPlayersUnpause && gameState == State.PAUSE) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Game bị tạm dừng bởi ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Game tạm dừng !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    clearTimeout(unpauseTimeout);
    gameState = State.PAUSE;
};

room.onGameUnpause = function (byPlayer) {
    unpauseTimeout = setTimeout(() => {
        gameState = State.PLAY;
    }, 2000);
    if (mentionPlayersUnpause) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Game bỏ tạm dừng bởi ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Game tiếp tục !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    if (
        (teamRed.length == teamSize && teamBlue.length == teamSize && chooseMode) ||
        (teamRed.length == teamBlue.length && teamSpec.length < 2 && chooseMode)
    ) {
        deactivateChooseMode();
    }
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    game.scores = scores;
    playSituation = Situation.GOAL;
    ballSpeed = getBallSpeed();
    var goalString = getGoalString(team);
    for (let player of teamRed) {
        var playerComp = getPlayerComp(player);
        team == Team.RED ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    for (let player of teamBlue) {
        var playerComp = getPlayerComp(player);
        team == Team.BLUE ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    room.sendAnnouncement(
        goalString,
        null,
        team == Team.RED ? redColor : blueColor,
        null,
        HaxNotification.CHAT
    );
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ${goalString}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit)) || goldenGoal) {
        endGame(team);
        goldenGoal = false;
        stopTimeout = setTimeout(() => {
            room.stopGame();
        }, 1000);
    }
};

room.onPositionsReset = function () {
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    playSituation = Situation.KICKOFF;
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
    console.log(`${url}\nmasterPassword : ${masterPassword}`);
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ?? LINK ${url}\nmasterPassword : ${masterPassword}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
    if (!changedPlayer.admin && getRole(changedPlayer) >= Role.ADMIN_TEMP) {
        room.setPlayerAdmin(changedPlayer.id, true);
        return;
    }
    updateAdmins(byPlayer != null && !changedPlayer.admin && changedPlayer.id == byPlayer.id ? changedPlayer.id : 0);
};

room.onKickRateLimitSet = function (min, rate, burst, byPlayer) {
    if (byPlayer != null) {
        room.sendAnnouncement(
            `Không được phép thay đổi giới hạn kickrate. Nó phải ở lại "6-0-0".`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setKickRateLimit(6, 0, 0);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    if (byPlayer !== null) {
        if (getRole(byPlayer) < Role.MASTER && currentStadium != 'other') {
            room.sendAnnouncement(
                `Bạn không thể thay đổi sân vận động theo cách thủ công! Vui lòng sử dụng các lệnh sân vận động.`,
                byPlayer.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
            stadiumCommand(emptyPlayer, `!${currentStadium}`);
        } else {
            room.sendAnnouncement(
                `Bản đồ đã thay đổi. Sau khi bạn hoàn thành bản đồ này, vui lòng sử dụng các lệnh của sân vận động.`,
                byPlayer.id,
                infoColor,
                'bold',
                HaxNotification.CHAT
            );
            currentStadium = 'other';
        }
    }
    checkStadiumVariable = true;
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getGameStats();
    handleActivity();
};
