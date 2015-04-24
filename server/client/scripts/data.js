var category_settings = {
	"1010": {
		"h": {
			"value": "area,rooms"
		},
		"s": {
			"value": "area,rooms,size,address"
		},
		"u": {
			"value": "area,rooms,size,address"
		}
	},
	"1020": {
		"h": {
			"value": "area,rooms"
		},
		"s": {
			"value": "area,rooms,size,address"
		},
		"u": {
			"value": "area,rooms,size,address"
		}
	},
	"1030": {
		"h": {
			"value": "area"
		},
		"s": {
			"value": "area,size,address"
		},
		"u": {
			"value": "area,size,address"
		}
	},
	"1040": {
		"h": {
			"value": "area"
		},
		"s": {
			"value": "area,size,address"
		},
		"u": {
			"value": "area,size,address"
		}
	},
	"1050": {
		"h": {
			"value": "area,size"
		},
		"u": {
			"value": "area,size,address"
		}
	},
	"2010": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area,regdate,mileage,gearbox,fuel"
		}
	},
	"2020": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area,regdate,mileage"
		}
	},
	"2030": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"2050": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"2060": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"3010": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"3020": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"3030": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"3040": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"4010": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"4020": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"4030": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"4040": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"5010": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"5020": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"5030": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"6010": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"6020": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"7010": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"8010": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"8020": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	},
	"9010": {
		"h": {
			"value": "area"
		},
		"u": {
			"value": "area"
		}
	},
	"9020": {
		"k": {
			"value": "area"
		},
		"s": {
			"value": "area"
		}
	}
};

var category_list = {
	2000: {
		"name": "Xe",
		"level": 0

	},
	2020: {
		"name": "Xe máy",
		"level": 1,
		'parent': 2000
	},
	2010: {
		"name": "Ô tô",
		"level": 1,
		'parent': 2000
	},
	2060: {
		"name": "Xe đạp",
		"level": 1,
		'parent': 2000
	},
	2050: {
		"name": "Xe tải, xe khác",
		"level": 1,
		'parent': 2000
	},
	2030: {
		"name": "Phụ tùng, phụ kiện xe",
		"level": 1,
		'parent': 2000
	},
	1000: {
		"name": "Bất động sản",
		"level": 0

	},
	1010: {
		"name": "Căn hộ/Chung cư",
		"level": 1,
		'parent': 1000
	},
	1020: {
		"name": "Nhà & Đất ở",
		"level": 1,
		'parent': 1000
	},
	1030: {
		"name": "Cơ sở thương mại",
		"level": 1,
		'parent': 1000
	},
	1040: {
		"name": "Đất nông nghiệp & trang trại",
		"level": 1,
		'parent': 1000
	},
	1050: {
		"name": "Phòng cho thuê",
		"level": 1,
		'parent': 1000
	},
	5000: {
		"name": "Đồ điện tử",
		"level": 0

	},
	5010: {
		"name": "Điện thoại và thiết bị di động",
		"level": 1,
		'parent': 5000
	},
	5020: {
		"name": "TV / Audio / Video / Camera",
		"level": 1,
		'parent': 5000
	},
	5030: {
		"name": "Máy tính và Phụ kiện",
		"level": 1,
		'parent': 5000
	},
	3000: {
		"name": "Nhà cửa & Vật dụng cá nhân",
		"level": 0

	},
	3020: {
		"name": "Đồ gia dụng & sân vườn",
		"level": 1,
		'parent': 3000
	},
	3040: {
		"name": "Đồng hồ/Trang sức",
		"level": 1,
		'parent': 3000
	},
	3030: {
		"name": "Quần áo",
		"level": 1,
		'parent': 3000
	},
	3010: {
		"name": "Đồ trẻ em",
		"level": 1,
		'parent': 3000
	},
	4000: {
		"name": "Giải trí/Thể thao/Sở thích",
		"level": 0

	},
	4020: {
		"name": "Thể thao & Hoạt động ngoài trời",
		"level": 1,
		'parent': 4000
	},
	4010: {
		"name": "Sở thích & Sưu tầm",
		"level": 1,
		'parent': 4000
	},
	4040: {
		"name": "Âm nhạc/Phim/Sách",
		"level": 1,
		'parent': 4000
	},
	4030: {
		"name": "Vật nuôi",
		"level": 1,
		'parent': 4000
	},
	8000: {
		"name": "Cơ hội kinh doanh",
		"level": 0

	},
	8010: {
		"name": "Dụng cụ chuyên dụng/Đồ dùng văn phòng",
		"level": 1,
		'parent': 8000
	},
	8020: {
		"name": "Mua & sang nhượng doanh nghiệp",
		"level": 1,
		'parent': 8000
	},
	6000: {
		"name": "Việc làm & Dịch vụ",
		"level": 0

	},
	6010: {
		"name": "Việc làm",
		"level": 1,
		'parent': 6000
	},
	6020: {
		"name": "Dịch vụ",
		"level": 1,
		'parent': 6000
	},
	9000: {
		"name": "Du lịch",
		"level": 0

	},
	9010: {
		"name": "Phòng khách sạn",
		"level": 1,
		'parent': 9000
	},
	9020: {
		"name": "Du lịch nước ngoài/trong nước",
		"level": 1,
		'parent': 9000
	},
	7000: {
		"name": "Các loại khác",
		"level": 0

	},
	7010: {
		"name": "Các loại khác",
		"level": 1,
		'parent': 7000
	}
};

var regionArray = {
	12: {
		"name": {
			"vi": "Hà Nội",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "74",
				"name": "Quận Ba Đình"
			},
			"1": {
				"id": "129",
				"name": "Quận Bắc Từ Liêm"
			},
			"2": {
				"id": "79",
				"name": "Quận Cầu Giấy"
			},
			"3": {
				"id": "75",
				"name": "Quận Đống Đa"
			},
			"4": {
				"id": "86",
				"name": "Quận Hà Đông"
			},
			"5": {
				"id": "76",
				"name": "Quận Hai Bà Trưng"
			},
			"6": {
				"id": "73",
				"name": "Quận Hoàn Kiếm"
			},
			"7": {
				"id": "80",
				"name": "Quận Hoàng Mai"
			},
			"8": {
				"id": "81",
				"name": "Quận Long Biên"
			},
			"9": {
				"id": "121",
				"name": "Quận Nam Từ Liêm"
			},
			"10": {
				"id": "78",
				"name": "Quận Tây Hồ"
			},
			"11": {
				"id": "77",
				"name": "Quận Thanh Xuân"
			},
			"12": {
				"id": "87",
				"name": "Thị Xã Sơn Tây"
			},
			"13": {
				"id": "122",
				"name": "Huyện Ba Vì"
			},
			"14": {
				"id": "92",
				"name": "Huyện Chương Mỹ"
			},
			"15": {
				"id": "88",
				"name": "Huyện Đan Phượng"
			},
			"16": {
				"id": "82",
				"name": "Huyện Đông Anh"
			},
			"17": {
				"id": "123",
				"name": "Huyện Gia Lâm"
			},
			"18": {
				"id": "89",
				"name": "Huyện Hoài Đức"
			},
			"19": {
				"id": "124",
				"name": "Huyện Mê Linh"
			},
			"20": {
				"id": "125",
				"name": "Huyện Mỹ Đức"
			},
			"21": {
				"id": "94",
				"name": "Huyện Phú Xuyên"
			},
			"22": {
				"id": "126",
				"name": "Huyện Phúc Thọ"
			},
			"23": {
				"id": "90",
				"name": "Huyện Quốc Oai"
			},
			"24": {
				"id": "83",
				"name": "Huyện Sóc Sơn"
			},
			"25": {
				"id": "91",
				"name": "Huyện Thạch Thất"
			},
			"26": {
				"id": "127",
				"name": "Huyện Thanh Oai"
			},
			"27": {
				"id": "84",
				"name": "Huyện Thanh Trì"
			},
			"28": {
				"id": "93",
				"name": "Huyện Thường Tín"
			},
			"29": {
				"id": "128",
				"name": "Huyện Ứng Hoà"
			},
			"30": {
				"id": "95",
				"name": "Quận huyện khác"
			}


		}
	},
	13: {
		"name": {
			"vi": "Tp Hồ Chí Minh",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "96",
				"name": "Quận 1"
			},
			"1": {
				"id": "97",
				"name": "Quận 2"
			},
			"2": {
				"id": "98",
				"name": "Quận 3"
			},
			"3": {
				"id": "99",
				"name": "Quận 4"
			},
			"4": {
				"id": "100",
				"name": "Quận 5"
			},
			"5": {
				"id": "101",
				"name": "Quận 6"
			},
			"6": {
				"id": "102",
				"name": "Quận 7"
			},
			"7": {
				"id": "103",
				"name": "Quận 8"
			},
			"8": {
				"id": "104",
				"name": "Quận 9"
			},
			"9": {
				"id": "105",
				"name": "Quận 10"
			},
			"10": {
				"id": "106",
				"name": "Quận 11"
			},
			"11": {
				"id": "107",
				"name": "Quận 12"
			},
			"12": {
				"id": "108",
				"name": "Quận Bình Tân"
			},
			"13": {
				"id": "109",
				"name": "Quận Bình Thạnh"
			},
			"14": {
				"id": "110",
				"name": "Quận Gò Vấp"
			},
			"15": {
				"id": "111",
				"name": "Quận Phú Nhuận"
			},
			"16": {
				"id": "112",
				"name": "Quận Tân Bình"
			},
			"17": {
				"id": "113",
				"name": "Quận Tân Phú"
			},
			"18": {
				"id": "114",
				"name": "Quận Thủ Đức"
			},
			"19": {
				"id": "115",
				"name": "Huyện Bình Chánh"
			},
			"20": {
				"id": "120",
				"name": "Huyện Cần Giờ"
			},
			"21": {
				"id": "116",
				"name": "Huyện Củ Chi"
			},
			"22": {
				"id": "117",
				"name": "Huyện Hóc Môn"
			},
			"23": {
				"id": "118",
				"name": "Huyện Nhà Bè"
			},
			"24": {
				"id": "119",
				"name": "Quận huyện khác"
			}


		}
	},
	10: {
		"name": {
			"vi": "Đông Bắc Bộ",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "59",
				"name": "Bắc Kạn"
			},
			"1": {
				"id": "60",
				"name": "Bắc Giang"
			},
			"2": {
				"id": "61",
				"name": "Cao Bằng"
			},
			"3": {
				"id": "62",
				"name": "Hà Giang"
			},
			"4": {
				"id": "63",
				"name": "Lạng Sơn"
			},
			"5": {
				"id": "130",
				"name": "Quảng Ninh"
			},
			"6": {
				"id": "64",
				"name": "Thái Nguyên"
			},
			"7": {
				"id": "65",
				"name": "Tuyên Quang"
			},
			"8": {
				"id": "66",
				"name": "Tỉnh khác"
			}


		}
	},
	11: {
		"name": {
			"vi": "Tây Bắc Bộ",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "67",
				"name": "Điện Biên"
			},
			"1": {
				"id": "68",
				"name": "Lai Châu"
			},
			"2": {
				"id": "69",
				"name": "Lào Cai"
			},
			"3": {
				"id": "70",
				"name": "Sơn La"
			},
			"4": {
				"id": "71",
				"name": "Yên Bái"
			},
			"5": {
				"id": "72",
				"name": "Tỉnh khác"
			}


		}
	},
	1: {
		"name": {
			"vi": "Các tỉnh lân cận Hà Nội",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "1",
				"name": "Bắc Ninh"
			},
			"1": {
				"id": "2",
				"name": "Phú Thọ"
			},
			"2": {
				"id": "3",
				"name": "Hà Nam"
			},
			"3": {
				"id": "4",
				"name": "Hải Dương"
			},
			"4": {
				"id": "5",
				"name": "Hòa Bình"
			},
			"5": {
				"id": "6",
				"name": "Hưng Yên"
			},
			"6": {
				"id": "7",
				"name": "Ninh Bình"
			},
			"7": {
				"id": "8",
				"name": "Vĩnh Phúc"
			},
			"8": {
				"id": "9",
				"name": "Tỉnh khác"
			}


		}
	},
	4: {
		"name": {
			"vi": "Hải Phòng Nam Định Thái Bình",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "19",
				"name": "Hải Phòng"
			},
			"1": {
				"id": "20",
				"name": "Nam Định"
			},
			"2": {
				"id": "21",
				"name": "Thái Bình"
			},
			"3": {
				"id": "23",
				"name": "Tỉnh khác"
			}


		}
	},
	8: {
		"name": {
			"vi": "Thanh Nghệ Tĩnh",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "49",
				"name": "Hà Tĩnh"
			},
			"1": {
				"id": "50",
				"name": "Nghệ An"
			},
			"2": {
				"id": "51",
				"name": "Thanh Hóa"
			},
			"3": {
				"id": "52",
				"name": "Tỉnh khác"
			}


		}
	},
	6: {
		"name": {
			"vi": "Bình Trị Thừa Thiên Huế",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "38",
				"name": "Quảng Bình"
			},
			"1": {
				"id": "39",
				"name": "Quảng Trị"
			},
			"2": {
				"id": "40",
				"name": "Thừa Thiên Huế"
			},
			"3": {
				"id": "41",
				"name": "Tỉnh khác"
			}


		}
	},
	3: {
		"name": {
			"vi": "Quảng Nam Đà Nẵng",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "16",
				"name": "Quảng Nam"
			},
			"1": {
				"id": "17",
				"name": "Đà Nẵng"
			},
			"2": {
				"id": "18",
				"name": "Tỉnh khác"
			}


		}
	},
	9: {
		"name": {
			"vi": "Tây Nguyên",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "53",
				"name": "Đắk Lắk"
			},
			"1": {
				"id": "54",
				"name": "Đắk Nông"
			},
			"2": {
				"id": "55",
				"name": "Kon Tum"
			},
			"3": {
				"id": "56",
				"name": "Gia Lai"
			},
			"4": {
				"id": "57",
				"name": "Lâm Đồng"
			},
			"5": {
				"id": "58",
				"name": "Tỉnh khác"
			}


		}
	},
	7: {
		"name": {
			"vi": "Nam Trung Bộ",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "42",
				"name": "Bình Thuận"
			},
			"1": {
				"id": "43",
				"name": "Bình Định"
			},
			"2": {
				"id": "44",
				"name": "Khánh Hòa"
			},
			"3": {
				"id": "45",
				"name": "Ninh Thuận"
			},
			"4": {
				"id": "46",
				"name": "Phú Yên"
			},
			"5": {
				"id": "47",
				"name": "Quảng Ngãi"
			},
			"6": {
				"id": "48",
				"name": "Tỉnh khác"
			}


		}
	},
	2: {
		"name": {
			"vi": "Đông Nam Bộ",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "10",
				"name": "Bà Rịa Vũng Tàu"
			},
			"1": {
				"id": "11",
				"name": "Bình Dương"
			},
			"2": {
				"id": "12",
				"name": "Bình Phước"
			},
			"3": {
				"id": "13",
				"name": "Đồng Nai"
			},
			"4": {
				"id": "14",
				"name": "Tây Ninh"
			},
			"5": {
				"id": "15",
				"name": "Tỉnh khác"
			}


		}
	},
	5: {
		"name": {
			"vi": "Cần Thơ - Tây Nam Bộ",
			"wo_tone": ""
		},

		"municipality": {

			"0": {
				"id": "24",
				"name": "An Giang"
			},
			"1": {
				"id": "25",
				"name": "Bạc Liêu"
			},
			"2": {
				"id": "26",
				"name": "Bến Tre"
			},
			"3": {
				"id": "27",
				"name": "Cần Thơ"
			},
			"4": {
				"id": "28",
				"name": "Cà Mau"
			},
			"5": {
				"id": "29",
				"name": "Đồng Tháp"
			},
			"6": {
				"id": "30",
				"name": "Hậu Giang"
			},
			"7": {
				"id": "31",
				"name": "Kiên Giang"
			},
			"8": {
				"id": "32",
				"name": "Long An"
			},
			"9": {
				"id": "33",
				"name": "Sóc Trăng"
			},
			"10": {
				"id": "34",
				"name": "Tiền Giang"
			},
			"11": {
				"id": "35",
				"name": "Trà Vinh"
			},
			"12": {
				"id": "36",
				"name": "Vĩnh Long"
			},
			"13": {
				"id": "37",
				"name": "Tỉnh khác"
			}


		}
	}
};

var category_typeList = {

	"2000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"2020": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"2010": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"2060": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"2050": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"2030": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"1000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"1010": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"1020": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"1030": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"1040": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"1050": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"5000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"5010": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"5020": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"5030": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"3000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"3020": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"3040": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"3030": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"3010": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"4000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"4020": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"4010": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"4040": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"4030": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"8000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"8010": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"8020": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"6000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"6010": {
		"k": "Tìm việc",
		"s": "Tìm người"
	},
	"6020": {
		"k": "Cần tìm",
		"s": "Cung cấp"
	},
	"9000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"9010": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"9020": {
		"k": "Cần tìm",
		"s": "Cung cấp"
	},
	"7000": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"7010": {
		"h": "Cần thuê",
		"k": "Cần mua",
		"s": "Cần bán",
		"u": "Cho thuê"
	},
	"exist": true
};