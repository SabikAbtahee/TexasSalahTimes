const axios = require("axios");
const htmlparser2 = require("htmlparser2");

exports.getTimings = (req, res, next) => {
	 getTimes().then((item) => {
		const times = parseAzaanTimeFromHtml(item.data);
		const iqamaObjects = generateIqamaObjectFromTime(times);
	
        res.render("timings/index", {
            pageTitle: "Salah Timings",
            path: "/",
            iqamahs: iqamaObjects,
        });
     
     });
	
};

// function getTimes() {
//     return [];
// }
 function getTimes() {
	return axios.get(
		"https://us.mohid.co/tx/dallas/ialfm/masjid/widget/api/index/?m=prayertimings"
	);
}

function parseAzaanTimeFromHtml(data) {
	const html = data;

	let iqamas = [];
	let azaans = [];
	let isIqama = false;
	let isAzaan = false;
	const parser = new htmlparser2.Parser({
		onopentag(name, attributes) {
			if (name === "div" && attributes.class === "prayer_iqama_div") {
				isIqama = true;
			} else if (name === "div" && attributes.class === "prayer_azaan_div") {
				isAzaan = true;
			}
		},
		ontext(text) {
			if (isIqama) {
				const matches = text.match(/\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g);
				if (matches) {
					iqamas.push(...matches);
				}
				isIqama = false;
			} else if (isAzaan) {
				const matches = text.match(/\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g);
				if (matches) {
					azaans.push(...matches);
				}
				isAzaan = false;
			}
		},
	});

	parser.write(html);
	parser.end();

	return {
		Iqama: iqamas,
		Azaan: azaans,
	};
}

function generateIqamaObjectFromTime(data)
{ 
    if(data && data.Iqama.length > 0)
    {
        const iqamaTimes = data.Iqama;
        const iqamaObjects = [
            {
                Name: 'Fajr',
                Time: iqamaTimes[0].split(" ")[0],
                TimeText: iqamaTimes[0].split(" ")[1]
            },
            {
                Name: 'Dhuhr',
                Time: iqamaTimes[1].split(" ")[0],
                TimeText: iqamaTimes[1].split(" ")[1]
            },
            {
                Name: 'Asr',
                Time: iqamaTimes[2].split(" ")[0],
                TimeText: iqamaTimes[2].split(" ")[1]
            },
            {
                Name: 'Maghrib',
                Time: iqamaTimes[3].split(" ")[0],
                TimeText: iqamaTimes[3].split(" ")[1]
            },
            {
                Name: 'Isha',
                Time: iqamaTimes[4].split(" ")[0],
                TimeText: iqamaTimes[4].split(" ")[1]
            }
        ];

        return iqamaObjects;
    }
}
