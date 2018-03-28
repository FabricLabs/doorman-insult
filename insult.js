module.exports = function (Doorman) {
	const insults = [
		'you egg',
		'you sandy bathing suit',
		'you chunky carton of milk',
		'you white crayon',
		'you coatless eskimo',
		'you wobbly chair leg',
		'you armpit sweat stain',
		'you unnecessary stock footage',
		'you cup of cold creamerless coffee'
	];

	function resolveMention(usertxt) {
		var userid = usertxt;
		if (usertxt.startsWith('<@!')) {
			userid = usertxt.substr(3, usertxt.length - 4);
		} else {
			if (usertxt.startsWith('<@')) {
				userid = usertxt.substr(2, usertxt.length - 3);
			}
		}
		return userid;
	}
	return {
		commands: [
			'insult'
		],
		'insult': {
			usage: '<@mention>',
			description: 'Insult someone (or everyone)',
			process: (msg, suffix, isEdit, cb) => {
				var randomnumber = Math.floor(Math.random() * (insults.length - 1 + 1)) + 1;
				cb({
					reply: resolveMention(suffix),
					embed: {
						description: insults[randomnumber]
					}
				}, msg);
			}
		}
	}
}