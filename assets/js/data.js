var datosDispositivos = [
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",	 
		registros = [
			{
				"coordenadaX": "37",
				"coordenadaY": "37",
				"hora": "13:25:11",
				"fecha": "2017-08-11",
			},
			{
				"coordenadaX": "41",
				"coordenadaY": "41",
				"hora": "13:25:47",
				"fecha": "2017-08-11",
			},
			{
				"coordenadaX": "42",
				"coordenadaY": "42",
				"hora": "13:25:22",
				"fecha": "2017-08-11",
			},
			{
				"coordenadaX": "39",
				"coordenadaY": "39",
				"hora": "13:25:57",
				"fecha": "2017-08-11",
			},
			{
				"coordenadaX": "40",
				"coordenadaY": "40",
				"hora": "13:25:08",
				"fecha": "2017-08-11",
			}			
		]
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",	 
		registros = [
			{
				"coordenadaX": "47",
				"coordenadaY": "47",
				"hora": "13:34:21",
				"fecha": "2017-08-11",
			},
			{
				"coordenadaX": "31",
				"coordenadaY": "31",
				"hora": "13:34:58",
				"fecha": "2017-08-11",
			},
			{
				"coordenadaX": "32",
				"coordenadaY": "32",
				"hora": "13:34:59",
				"fecha": "2017-08-11",
			},
			{
				"coordenadaX": "33",
				"coordenadaY": "33",
				"hora": "13:34:59",
				"fecha": "2017-08-11",
			},
			{
				"coordenadaX": "31",
				"coordenadaY": "31",
				"hora": "13:34:58",
				"fecha": "2017-08-11",
			},{
				"coordenadaX": "33",
				"coordenadaY": "33",
				"hora": "13:35:00",
				"fecha": "2017-08-11",
			},		
		]
	}
]
/*
var registro = [
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",	 
		"rssi": "-37",
		"hora": "13:25:11",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-41",
		"hora": "13:25:47",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-42",
		"hora": "13:26:22",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-39",
		"hora": "13:26:57",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-39",
		"hora": "13:28:08",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-40",
		"hora": "13:28:43",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-39",
		"hora": "13:29:18",
		"fecha": "2017-08-11",
	}
	,{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-39",
		"hora": "13:29:53",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-40",
		"hora": "13:30:29",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-62",
		"hora": "13:33:03",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-55",
		"hora": "13:33:37",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:d7:b9:20",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-75",
		"hora": "13:34:12",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-47",
		"hora": "13:34:21",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-31",
		"hora": "13:34:58",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-32",
		"hora": "13:34:59",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-33",
		"hora": "13:34:59",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-31",
		"hora": "13:34:59",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-33",
		"hora": "13:34:00",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-31",
		"hora": "13:35:00",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-32",
		"hora": "13:35:00",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-31",
		"hora": "13:35:00",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-32",
		"hora": "13:35:00",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-32",
		"hora": "13:35:01",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-32",
		"hora": "13:35:01",
		"fecha": "2017-08-11",
	},
	{
		"origen": "b8:27:eb:b8:ab:8e",
		"mac": "00:28:F8:C9:E7:BB",
		"rssi": "-32",
		"hora": "13:35:01",
		"fecha": "2017-08-11",
	},

]

Bluecount*/