import twentyeightthirtyaberdeenavenue from '../assets/twentyeightthirtyaberdeenavenue.jpg';
import twelveteneastfirststreet from '../assets/twelveteneastfirststreet.jpg';
import fourthirtheensouthfleetstreet from '../assets/fourthirtheensouthfleetstreet.jpg';

const locationList = [
	{
		"ID": 1,
		"NAME": "Kurt Cobain's Very First Home",
		"DESCRIPTION": "Kurt spent his first year in this home from 1967 until 1968. The following year the family moved to Aberdeen.",
		"TYPE": "Residence",
		"ADDRESS1": "2830 Aberdeen Ave",
		"ADDRESS2": "Hoquiam, WA 98550",
		"COORDINATES": [46.974102, -123.858889],
		"IMAGE": twentyeightthirtyaberdeenavenue,
		"IMAGEALTTEXT": "Kurt Cobain's Very First Home"
	},
	{
		"ID": 2,
		"NAME": "Kurt Cobain's Childhood Home",
		"DESCRIPTION": "Kurt’s home from 1968 to 1978, from the time he was a toddler until his parents divorced.",
		"TYPE": "Residence",
		"ADDRESS1": "1210 East 1st St",
		"ADDRESS2": "Aberdeen, WA 98520",
		"COORDINATES": [46.9829827, -123.8062302],
		"IMAGE": twelveteneastfirststreet,
		"IMAGEALTTEXT": "Kurt Cobain's Childhood Home",
	},
	{
		"ID": 3,
		"NAME": "Kurt Cobain's Father's Home",
		"DESCRIPTION": "Kurt lived in with his father from late 1978 to March 1982 following his parents' divorce.",
		"TYPE": "Residence",
		"ADDRESS1": "413 Fleet St",
		"ADDRESS2": "Montesano, WA 98563",
		"COORDINATES": [46.978115, -123.603495],
		"IMAGE": fourthirtheensouthfleetstreet,
		"IMAGEALTTEXT": "Kurt Cobain's Father's Home",
	}
]

export default locationList;