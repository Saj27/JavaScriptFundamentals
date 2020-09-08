function a (){
    if (window.location.href.indexOf("?t=") > -1) {
        if (window.location.href.indexOf("?t=") > -1) {
            var $lis = $('.breadcrumb li');
            var count = 0;
            var arr = [];
            for (var i = 0; i < $lis.length; i++) {
                count = count + 1;
                arr.push($('.breadcrumb li:eq(' + i + ')').text());
            }
        }


        if (arr.find(a => a.includes("TV"))) {
            if (window.location.href.indexOf("hitachi") > -1) {
                var m_variable = "TV_HITACHI"
            } else if (window.location.href.indexOf("sharp") > -1) {
                var m_variable = "TV_SHARP";
            } else if (window.location.href.indexOf("singer")) {
                var m_variable = "TV_SINGER";
            } else if (window.location.href.indexOf("skyworth")) {
                var m_variable = "TV_SKYWORTH";
            } else if (window.location.href.indexOf("samsung")) {
                var m_variable = "TV_SAMSUNG";
            } else if (window.location.href.indexOf("sony")) {
                var m_variable = "TV_SONY";
            } else if (window.location.href.indexOf("tcl")) {
                var m_variable = "TV_TCL";
            } else if (window.location.href.indexOf("unic")) {
                var m_variable = "TV_UNIC";
            }


            var attribute_TV = [
                "TV_HITACHI",
                "TV_SHARP",
                "TV_SINGER",
                "TV_SKYWORTH",
                "TV_SAMSUNG",
                "TV_SONY",
                "TV_TCL",
                "TV_UNIC",
            ];


        } else if (arr.find(a => a.includes("Mobile"))) {
            if (window.location.href.indexOf("apple") > -1) {
                var m_variable = "MOBILE_APPLE";
            } else if (window.location.href.indexOf("gpo") > -1) {
                var m_variable = "MOBILE_GPO";
            } else if (window.location.href.indexOf("samsung") > -1) {
                var m_variable = "MOBILE_SAMSUNG";
            } else if (window.location.href.indexOf("huawei") > -1) {
                var m_variable = "MOBILE_HUAWEI";
            }


            var attribute_Mobile = [
                "MOBILE_APPLE",
                "MOBILE_GPO",
                "MOBILE_SAMSUNG",
                "MOBILE_HUAWEI",
            ];


            // console.log(attribute_Mobile);
        } else if (arr.find(a => a.includes("Refrigerators"))) {
            var attribute_REFRIGERATOR = [
                "REFRIGERATOR_BEKO",
                "REFRIGERATOR_HITACHI",
                "REFRIGERATOR_SINGER",
                "REFRIGERATOR_SISIL",
                "REFRIGERATOR_SAMSUNG",
                "REFRIGERATOR_WHIRLPOOL",
            ];
            if (window.location.href.indexOf("beko") > -1) {
                var m_variable = "REFRIGERATOR_BEKO";
            } else if (window.location.href.indexOf("hitachi") > -1) {
                var m_variable = "REFRIGERATOR_HITACHI";
            } else if (window.location.href.indexOf("singer") > -1) {
                var m_variable = "REFRIGERATOR_SINGER";
            } else if (window.location.href.indexOf("samsung") > -1) {
                var m_variable = "REFRIGERATOR_SAMSUNG";
            } else if (window.location.href.indexOf("whirlpool") > -1) {
                var m_variable = "REFRIGERATOR_WHIRLPOOL";
            }



        } else if (arr.find(a => a.includes("Kitchen"))) {
            var attribute_KITCHEN = [
                "KITCHEN_APPLIANCES_SINGER",
                "KITCHEN_APPLIANCES_WELNESS",
                "KITCHEN_APPLIANCES_REGNIS",
                "KITCHEN_APPLIANCES_NIKAI",
                "KITCHEN_APPLIANCES_TEFAL",
                "KITCHEN_APPLIANCES_KENWOOD",
                "KITCHEN_APPLIANCES_PANASONIC",
                "KITCHEN_APPLIANCES_SISIL",
                "KITCHEN_APPLIANCES_THERMOS",
                "KITCHEN_APPLIANCES_PRESTIGE",
                "KITCHEN_APPLIANCES_MOULINEX",
                "KITCHEN_APPLIANCES_KRUPS",
            ];

            if (window.location.href.indexOf("singer") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_SINGER";
            } else if (window.location.href.indexOf("welness") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_WELNESS";
            }else if (window.location.href.indexOf("regnis") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_REGNIS";
            } else if (window.location.href.indexOf("nikai") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_NIKAI";
            } else if (window.location.href.indexOf("tefal") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_TEFAL";
            } else if (window.location.href.indexOf("kenwood") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_KENWOOD";
            } else if (window.location.href.indexOf("panasonic") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_PANASONIC";
            } else if (window.location.href.indexOf("sisil") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_SISIL";
            } else if (window.location.href.indexOf("thermos") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_THERMOS";
            } else if (window.location.href.indexOf("prestige") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_PRESTIGE";
            } else if (window.location.href.indexOf("moulinex") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_MOULINEX";
            } else if (window.location.href.indexOf("krups") > -1) {
                var m_variable = "KITCHEN_APPLIANCES_KRUPS";
            }


        } else if (arr.find(a => a.includes("Furniture"))) {
            var attribute_Furniture = [
                "FURNITURE"
            ];
            var m_variable = "FURNITURE";
        } else {
            var m_variable = "other";
        }

        return m_variable;
        console.log(m_variable);




        let urlPath_s = m_variable;
        let categArray_s = ["TV_HITACHI",
            "TV_SHARP",
            "TV_SINGER",
            "TV_SKYWORTH",
            "TV_SAMSUNG",
            "TV_SONY",
            "TV_TCL",
            "TV_UNIC",
            "MOBILE_APPLE",
            "MOBILE_GPO",
            "MOBILE_SAMSUNG",
            "MOBILE_HUAWEI",
            "REFRIGERATOR_BEKO",
            "REFRIGERATOR_HITACHI",
            "REFRIGERATOR_SINGER",
            "REFRIGERATOR_SISIL",
            "REFRIGERATOR_SAMSUNG",
            "REFRIGERATOR_WHIRLPOOL",
            "KITCHEN_APPLIANCES_SINGER",
            "KITCHEN_APPLIANCES_",
            "KITCHEN_APPLIANCES_REGNIS",
            "KITCHEN_APPLIANCES_NIKAI",
            "KITCHEN_APPLIANCES_TEFAL",
            "KITCHEN_APPLIANCES_KENWOOD",
            "KITCHEN_APPLIANCES_PANASONIC",
            "KITCHEN_APPLIANCES_SISIL",
            "KITCHEN_APPLIANCES_THERMOS",
            "KITCHEN_APPLIANCES_PRESTIGE",
            "KITCHEN_APPLIANCES_MOULINEX",
            "KITCHEN_APPLIANCES_KRUPS",
            "FURNITURE"];
        var index_s;
        for (index_s = 0; index_s < categArray_s.length; ++index_s) {
            if((categArray_s[index_s]) ===urlPath_s){
                return categArray_s[index_s];

                console.log(categArray_s[index_s]);
            }
        }
        return "general";




        // console.log(categArray[index]);




    }
}