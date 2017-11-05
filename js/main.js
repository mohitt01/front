var me, socket;

$(document).ready(function() {
	setupSocket();
	$('.registration-page-cont .btn').click(goToRoster);
	$('.registration-page-cont input[type="text"]').enterPress(goToRoster);
	$('#switch-teams').click(switchRosterTeam);
	$('#start-game').click(goToGame);
	$('.send-msg input[type="submit"]').click(sendMessage);
	$('.game-page-cont input[type="text"]').enterPress(sendMessage);
});
