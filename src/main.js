
var validate = require('./validate');
var argv = require('optimist').argv;
var game = require('./game');

(function() {
    var host, maps, teams;
    var mapsTeams = validate.getMapsAndTeams(argv._);
    maps = mapsTeams[0];
    teams = mapsTeams[1];
    if (argv.host) {
        host = validate.stripLeadingPaths([argv.host]);
    }

    validate.validate(maps, teams);

    function callback(round, winner) {
        throw winner + ' won after round ' + round;
    }

    game.runGame(maps[0], teams[0], teams[1]);

}).call(this);