mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFjYTc5IiwiYSI6ImNpbzYyZGVlNzAyNjd2d2x6dHY1MnR6MjgifQ.anutU5yQ38NCFEMAM4Ubdw';

var filterGroup = document.getElementById( 'filter-group' );
var places =  {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3954,43.64777 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"ArtReach Toronto c/o Tides Canada Initiatives",
                "Unit Number":"",
                "Address_w":"409 Richmond St W",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5V 1X3",
                "Full Address":"409 Richmond St W Toronto ON M5V 1X3 ",
                "Amount_Applied":283100,
                "Amount_Awarded":292000,
                "Timeline(m)":18,
                "Proj_Desc":"$292,000 over 18 months to facilitate capacity building and develop evaluation tools for emerging young leaders and grassroots groups, who are either applying for funding or implementing initiatives through the Grassroots Innovation Stream of the Youth Opportunities Fund. Funds will support the hiring of a Project Coordinator and program delivery costs",
                "Budget_Fund":"Capacity Building",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.8448,43.86928 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Oshawa Community Health Centre",
                "Unit Number":"",
                "Address_w":"115 Grassmere Ave.",
                "City":"Oshawa",
                "Province":"ON",
                "Postal Code":"L1H 3X7",
                "Full Address":"115 Grassmere Ave. Oshawa ON L1H 3X7 ",
                "Amount_Applied":1250000,
                "Amount_Awarded":971700,
                "Timeline(m)":48,
                "Proj_Desc":"$971,700 over four years to strengthen programming and mental health supports for Aboriginal youth living in and around Durham Region. Funding will support youth as they work collaboratively to create programs which will improve cultural knowledge, self-identity and mental health. Funding will also support participation in networking and volunteer opportunities.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth form and maintain healthy, close relationships; Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7963,43.32846 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Reach Out Centre for Kids (ROCK)",
                "Unit Number":"",
                "Address_w":"471 Pearl Street,",
                "City":"Burlington",
                "Province":"ON",
                "Postal Code":"L7R 4M4",
                "Full Address":"471 Pearl Street, Burlington ON L7R 4M4 ",
                "Amount_Applied":1081500,
                "Amount_Awarded":853200,
                "Timeline(m)":48,
                "Proj_Desc":"$853,200 over four years to establish a dedicated program centre for LGBTTQ youth and their families in Halton Region to access support, and foster positive youth development. This work will include establishing a youth advisory group.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3408,43.67955 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"WoodGreen Community Services",
                "Unit Number":"100",
                "Address_w":"815 Danforth Avenue",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4J 1L2",
                "Full Address":"815 Danforth Avenue Toronto ON M4J 1L2 ",
                "Amount_Applied":1170300,
                "Amount_Awarded":953600,
                "Timeline(m)":48,
                "Proj_Desc":"$953,600 over four years to provide support, mentorship and opportunities for youth in the adult correctional system to earn their high school diploma. The Look at My Life Project will provide one-on-one tutoring, support and information sessions for youth in custody. Youth enrolled in the program will also receive post-release supports in accessing employment, post-secondary education and housing.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"RY, NY, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth form and maintain healthy, close relationships; Youth have at least one consistent, caring person in their lives; Youth are engaged in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.6097,43.75417 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Amadeusz - The Look at My Life Project c/o Albion Neighbourhood Services",
                "Unit Number":"10",
                "Address_w":"86 Guided Court",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M9V 4K6",
                "Full Address":"86 Guided Court Toronto ON M9V 4K6 ",
                "Amount_Applied":225000,
                "Amount_Awarded":225000,
                "Timeline(m)":36,
                "Proj_Desc":"$225,000 over three years to provide support, mentorship and opportunities for young people in the adult correctional system to earn their high school diploma. The Look at My Life Project (TLMLP) will provide one-on-one tutoring, support and information sessions for youth in custody. Youth enrolled in the program will also receive post-release supports in accessing employment, post-secondary education and housing.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, LGBY, YDIS",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth have at least one consistent, caring person in their lives; Youth know about and easily navigate resources and opportunities in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4176,43.66363 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Eritrean Youth Collective c/o For Youth Initiative",
                "Unit Number":"",
                "Address_w":"703 Bloor st West",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6G 1L5",
                "Full Address":"703 Bloor st West Toronto ON M6G 1L5 ",
                "Amount_Applied":372600,
                "Amount_Awarded":365700,
                "Timeline(m)":60,
                "Proj_Desc":"$365,700 over five years to develop a leadership and mentorship program for Eritrean youth in Toronto. Young leaders will plan, lead and promote action within their social networks and the broader Eritrean community.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3832,43.65323 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Remembered Voices",
                "Unit Number":"",
                "Address_w":"",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"",
                "Full Address":" Toronto ON  ",
                "Amount_Applied":224600,
                "Amount_Awarded":225000,
                "Timeline(m)":36,
                "Proj_Desc":"$225,000 over three years to develop a weekly program for Aboriginal 2-Spirit, LGBT*Q and Asexual youth who are homeless or at risk for homelessness in Toronto. Designed, organized and run by Aboriginal youth, the weekly sessions will provide youth with a safe space and an opportunity to explore and access traditional languages, histories, art, land and cultural healing practices.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Form and Maintain health close relationships; Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4729,43.68387 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"The Forgiveness Project c/o For Youth Initiative",
                "Unit Number":"",
                "Address_w":"1652 Keele St.",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6M 3W3",
                "Full Address":"1652 Keele St. Toronto ON M6M 3W3 ",
                "Amount_Applied":370000,
                "Amount_Awarded":370000,
                "Timeline(m)":60,
                "Proj_Desc":"$370,000 over five years to engage youth aged 15-29 from Toronto in activities around forgiveness and restoration. Participants will gain access to monthly discussion-based workshops that will assist youth in understanding and reflecting on the concept of forgiveness.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Form and maintain healthy close relationships; Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5157,43.70069 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Young and Potential Fathers c/o YMCA GTA",
                "Unit Number":"18",
                "Address_w":"1901 Weston Rd",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M9N 3P5",
                "Full Address":"1901 Weston Rd Toronto ON M9N 3P5 ",
                "Amount_Applied":375000,
                "Amount_Awarded":375000,
                "Timeline(m)":60,
                "Proj_Desc":"$375,000 over five years to develop a network of community-based organizations and to recruit and train youth in the design of program initiatives that provide support to young racialized fathers.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their community; Youth have families and caregivers to help them thirve",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4034,43.65756 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"3rd Street Foundation c/o Access Alliance Multicultural Health and Community Services",
                "Unit Number":"500",
                "Address_w":"340 College St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5T 3A9",
                "Full Address":"340 College St Toronto ON M5T 3A9 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to mentor and train up to thirty-five youth in Jane and Finch area in an afterschool program focusing on leadership skills such as goal management training, cognitive behaviour intervention and negotiation.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth have one consistant caring person in their lives",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.0246,43.85945 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Afghan Mentorship Program c/o Herizon House",
                "Unit Number":"",
                "Address_w":"15 Harwood st s",
                "City":"Ajax",
                "Province":"ON",
                "Postal Code":"L1S 7H2",
                "Full Address":"15 Harwood st s Ajax ON L1S 7H2 ",
                "Amount_Applied":6000,
                "Amount_Awarded":6000,
                "Timeline(m)":12,
                "Proj_Desc":"$6,000 over one year to initiate a mentorship program with twenty Afghani youth in Durham. Mentorship activities will include a homework club and guest speaker sessions.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Grant_Outcome":"Youth Form and Maintain health close relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2878,43.69133 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Asha Bengali Girls Society c/o Access Alliance Multicultural Health and Community Services",
                "Unit Number":"",
                "Address_w":"3079 Danforth ave",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1L 1A8",
                "Full Address":"3079 Danforth ave Scarborough ON M1L 1A8 ",
                "Amount_Applied":17300,
                "Amount_Awarded":17300,
                "Timeline(m)":12,
                "Proj_Desc":"$17,300 for one year to fund Ashaâ€™s Empowerment Project. This program will serve Bengali-Canadian young women and girls. Located in East York, this program will support weekly workshops on topics like self-expression and media literacy, and help participants learn new skills like sports or arts projects.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Form and Maintain health close relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4504,43.66581 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Building it to Suit Youth (BITSY) c/o Youth Action Network",
                "Unit Number":"",
                "Address_w":"1489 Dupont St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6P 3S2",
                "Full Address":"1489 Dupont St Toronto ON M6P 3S2 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to build a safe space for marginalized youth at the Don Montgomery Community Recreation Centre in Toronto. A Youth Cabinet will be created to respond to youth needs and advocate on behalf of youth in the community and build programs for the space.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, LGBY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth are engaged in their community; Youth know about, and can easily access resources and opportunities in their commmunity",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3978,43.66829 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Sisters of the Soil c/o Canadian Roots Exchange",
                "Unit Number":"",
                "Address_w":"246 Bloor St W",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5S 1V4",
                "Full Address":"246 Bloor St W Toronto ON M5S 1V4 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to build solidarity between young women aged 12-18 in the indigenous and African Canadian communities in Toronto. They will participate in workshops with a theme of reconciliation, womenâ€™s empowerment and strengthening relations between these two communities.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Grant_Outcome":"Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3287,43.82174 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Gibson Youth Success Initiatives c/o Toronto Chinese Community Church",
                "Unit Number":"",
                "Address_w":"100 Acadia Ave",
                "City":"Markham",
                "Province":"ON",
                "Postal Code":"L3R 5A2",
                "Full Address":"100 Acadia Ave Markham ON L3R 5A2 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to provide academic support through a tutoring program for low-income, new immigrant and/or racialized youth in York Region. The program will also help young people to develop the necessary experience and leadership skills to become tutors to other youth.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth have at least one caring consistent person in their lives",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4295,43.66278 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"KeepRockinYou c/o Art Starts",
                "Unit Number":"2",
                "Address_w":"805 Dovercourt Rd",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6H 2X4",
                "Full Address":"805 Dovercourt Rd Toronto ON M6H 2X4 ",
                "Amount_Applied":23200,
                "Amount_Awarded":24700,
                "Timeline(m)":12,
                "Proj_Desc":"$24,700 over one year to engage ten girls aged 12-25 in weekly breakdancing workshops and sharing circles. These workshops will teach the fundamentals in breakdancing, connecting these to teamwork, overcoming challenges and fears, and thinking outside the box.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4176,43.64686 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Krafty Queers c/o SKETCH",
                "Unit Number":"",
                "Address_w":"180 Shaw",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6J 2W5",
                "Full Address":"180 Shaw Toronto ON M6J 2W5 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to provide a safe space for queer and trans-gendered youth in Toronto and Peel to socialize and create art with the help of program facilitators. Funding will allow this program to be free of charge, therefore decreasing barriers to participation.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4504,43.66581 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Out of the Box c/o Youth Action Network",
                "Unit Number":"",
                "Address_w":"1489 Dupont St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6P 3S2",
                "Full Address":"1489 Dupont St Toronto ON M6P 3S2 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to engage youth aged 15-25 in the Victoria Park and Eglinton areas of Scarborough in building trade skills. This is an intensive summer program designed to build social and support networks, gain skills training, enhance employment opportunities, while working within an anti-racist framework to explore systems barriers.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YCL, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth know about, and can easily access resources and opportunities in their commmunity",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4018,43.70619 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"PROSE c/o Centre for Community Learning & Development",
                "Unit Number":"",
                "Address_w":"110 Eglinton AveW",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4R 1A3",
                "Full Address":"110 Eglinton AveW Toronto ON M4R 1A3 ",
                "Amount_Applied":20800,
                "Amount_Awarded":20800,
                "Timeline(m)":12,
                "Proj_Desc":"$20,800 over one year to provide youth in Regent Park with weekly workshops. The workshops will be an opportunity for young people to learn about conflict resolution, self-care, sexual health and safety.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YCL, YP, DY",
                "Targ_Age":"15 to 19 years",
                "Grant_Outcome":"Youth form and maintain healthy and close relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7848,43.67664 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Regional Youth Roundtable c/o ACCESS Charity",
                "Unit Number":"",
                "Address_w":"",
                "City":"Peel",
                "Province":"ON",
                "Postal Code":"",
                "Full Address":" Peel ON  ",
                "Amount_Applied":24600,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to assemble a Regional Youth Roundtable for 17 youth-led organizations in Peel region. This roundtable will coordinate efforts in the youth sector in this region.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4278,43.89488 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Silver Linings 2013 c/o Community Living York South",
                "Unit Number":"",
                "Address_w":"101 Edward Avenue",
                "City":"Richmond Hill",
                "Province":"ON",
                "Postal Code":"L4C 5E5",
                "Full Address":"101 Edward Avenue Richmond Hill ON L4C 5E5 ",
                "Amount_Applied":17300,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to fund a pre-employment training program in Richmond Hill for youth with special needs. With the help of their parents, participants will receive the necessary training to operate a tuck shop inside a seniorâ€™s residence.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"YDIS",
                "Targ_Age":"12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth maintain healthy close relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3974,43.6695 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Voices of LGBT South Asian Youth c/o Planned Parenthood Toronto",
                "Unit Number":"",
                "Address_w":"36 Prince Arthur Ave",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5R 1A9",
                "Full Address":"36 Prince Arthur Ave Toronto ON M5R 1A9 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one year to build an online community for South Asian LGBTQQ youth in the Greater Toronto Area. The project will support the work of a community researcher, web designer, web developer and outreach/engagement coordinator.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, LGBY, YCL, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their community; Youth maintain healthy close relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3408,43.67955 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201314",
                "Org_Name":"Words of Wisdom (WOW) c/o WoodGreen Community Services",
                "Unit Number":"100",
                "Address_w":"815 Danforth Avenue",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4J 1L2",
                "Full Address":"815 Danforth Avenue Toronto ON M4J 1L2 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":12,
                "Proj_Desc":"$25,000 over one to create an empowerment program for young women in Regent Park, St. Jamestown and Moss Park in Toronto. The program will include a book club, guest speakers and workshop sessions related to the formation of identity.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years",
                "Grant_Outcome":"Youth are engaged in their community; Youth know about, and can easily access resources and opportunities in their commmunity",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4729,43.68387 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"For Youth Initiative",
                "Unit Number":"",
                "Address_w":"1652 Keele Street",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6M 3W3",
                "Full Address":"1652 Keele Street Toronto ON M6M 3W3 ",
                "Amount_Applied":251500,
                "Amount_Awarded":275000,
                "Timeline(m)":18,
                "Proj_Desc":"$275,000 over 18 months to deliver capacity-building supports and services to applicants and grant recipients of the OTF Youth Opportunities Fund. These will include mentorship, one-on-one coaching sessions and workshops, networking opportunities and facilitation supports. Funds will be used for staffing and program expenses.",
                "Budget_Fund":"Capacity Building",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3842,43.66767 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"The Students Commission of Canada",
                "Unit Number":"",
                "Address_w":"23 Isabella Street",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4Y 1M7",
                "Full Address":"23 Isabella Street Toronto ON M4Y 1M7 ",
                "Amount_Applied":25000,
                "Amount_Awarded":25000,
                "Timeline(m)":18,
                "Proj_Desc":"$25,000 over 18 months to undertake evaluation of the Youth Opportunities Fund (YOF) on behalf of OTF. Funds will be used to help YOF grantees build and implement an evaluation framework for their initiatives. Through group learning sessions and individual coaching, YOF grantees will build their skills, leadership and collaborative spirit around concepts of shared learning so that they can better respond to community issues identified through the evaluation process.",
                "Budget_Fund":"Capacity Building",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their community",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4278,43.89488 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Community Living York South",
                "Unit Number":"",
                "Address_w":"101 Edward Avenue",
                "City":"Richmond Hill",
                "Province":"ON",
                "Postal Code":"L4C 5E5",
                "Full Address":"101 Edward Avenue Richmond Hill ON L4C 5E5 ",
                "Amount_Applied":333600,
                "Amount_Awarded":335100,
                "Timeline(m)":36,
                "Proj_Desc":"$335,100 over 36 months to deliver the A.C.T 4 Youth model in York Region. This project will ensure youth aged 20-29 with intellectual disabilities have the support they need for a smooth transition into the community after completing Post-secondary education. Youth with intellectual disabilities will access services that promote independence and employment during this transition period. The A.C.T 4 Youth initiative will work together with existing community programs, grassroots initiatives and local networks for a comprehensive approach.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"YDIS, YP",
                "Targ_Age":"12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.6575,43.69786 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"CEREFRAC",
                "Unit Number":"4",
                "Address_w":"7171 Torbram Road",
                "City":"Mississauga",
                "Province":"ON",
                "Postal Code":"L4T 3W4",
                "Full Address":"7171 Torbram Road Mississauga ON L4T 3W4 ",
                "Amount_Applied":140000,
                "Amount_Awarded":140000,
                "Timeline(m)":24,
                "Proj_Desc":"$140,000 over 24 months to develop a peer mentorship program that will train French-speaking racialized youth as mentors for other newcomer youth who are facing similar challenges. Funding will support the development of a network of youth leaders in Peel Region, and will provide local service agencies with new ways of engaging with racialized and/or newcomer Francophone youth.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"RY, NY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth are enaged in their community; Youth Form and Maintain Healthy Close Relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.1989,43.76594 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"East Scarborough Storefront c/o Tides Canada Initiatives",
                "Unit Number":"",
                "Address_w":"4040 Lawrence Ave E.",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1E 2R2",
                "Full Address":"4040 Lawrence Ave E. Scarborough ON M1E 2R2 ",
                "Amount_Applied":670000,
                "Amount_Awarded":670000,
                "Timeline(m)":36,
                "Proj_Desc":"$670,000 over 36 months to engage youth and adult allies in building and sustaining an eco-system of youth programs and services in the Kingston Galloway and Orton Park community. Funding will be used to hire two young people to coordinate the project and lead outreach, complete a network map, and deliver four youth-led demonstration projects with four of the partnering organizations.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3974,43.6695 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Planned Parenthood Toronto",
                "Unit Number":"B",
                "Address_w":"36 Prince Arthur Avenue",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5R 1A9",
                "Full Address":"36 Prince Arthur Avenue Toronto ON M5R 1A9 ",
                "Amount_Applied":1210633,
                "Amount_Awarded":849100,
                "Timeline(m)":48,
                "Proj_Desc":"$849,100 over 48 months to enhance access to LGBTQ support services and to engage youth in strengthening the LGBTQ youth-sector in Toronto. Funding will support a comprehensive needs assessment, testing of new services to better meet needs, and new youth-led projects guided by a Youth Advisory Committee. Funds will also be used to launch a mobile service guide to improve service navigation. This investment will also be used to create safer communities for LGBTQ youth by launching a new social marketing campaign that will challenge homophobia, biphobia and transphobia.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"LGBY, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4195,43.80278 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Bad Subject c/o Leave Out Violence (LOVE) Ontario",
                "Unit Number":"436",
                "Address_w":"7171 Yonge St.",
                "City":"Thornhill",
                "Province":"ON",
                "Postal Code":"L3T 0C8",
                "Full Address":"7171 Yonge St. Thornhill ON L3T 0C8 ",
                "Amount_Applied":125000,
                "Amount_Awarded":100700,
                "Timeline(m)":24,
                "Proj_Desc":"$100,700 over 24 monthsto equip young people to build healthy, strong and trusting relationships through critical conversations on consent, sexual assault and rape culture. Bad Subject will use a workshop series and an on-line forum to engage young people in building a culture of consent in schools and communities. Funds will be used to hire a part-time project coordinator, to build an on-line platform and to engage youth as workshop facilitators.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth are enaged in their community; Youth Form and Maintain Healthy Close Relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.397,43.64735 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Driven Accelerator Group c/o Access Alliance Multicultural Health and Community Services",
                "Unit Number":"2",
                "Address_w":"20 Camden Street",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5V 1V1",
                "Full Address":"20 Camden Street Toronto ON M5V 1V1 ",
                "Amount_Applied":140836,
                "Amount_Awarded":140000,
                "Timeline(m)":24,
                "Proj_Desc":"$140,000 over 24 months to deliver an initiative called TechSpark that will address the challenges racialized and newcomer youth face, by using innovative technology based programming. The TechSpark program will aim to remove existing barriers to employment by providing youth with access to professional mentors, and the skills needed to obtain and maintain high demand jobs in the technology sector.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth maintain healthy close relationshps; Youth have at least one constant caring person",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.0793,43.82802 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Durham Region Writing Rainbow c/o The AIDS Committee of Durham Region",
                "Unit Number":"",
                "Address_w":"900 Krosno Blvd.",
                "City":"Pickering",
                "Province":"ON",
                "Postal Code":"L1W 1H4",
                "Full Address":"900 Krosno Blvd. Pickering ON L1W 1H4 ",
                "Amount_Applied":31600,
                "Amount_Awarded":32000,
                "Timeline(m)":12,
                "Proj_Desc":"$32,000 over 12 months to create a safe community space for LGBTTQ youth through a free weekly drop-in writing group. Funding will be used to provide an honorarium to three youth leaders, for youth outreach in Ajax-Pickering and to rent a consistent space for the weekly sessions.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Form and Maintain Healthy Close relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3289,43.76043 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Lifted by Purpose c/o SKETCH",
                "Unit Number":"214",
                "Address_w":"1244 York Mills Rd.",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M3A 1Y7",
                "Full Address":"1244 York Mills Rd. Toronto ON M3A 1Y7 ",
                "Amount_Applied":50000,
                "Amount_Awarded":70800,
                "Timeline(m)":24,
                "Proj_Desc":"$70,800 over 24 months to deliver two cycles of a twelve-week music-based stress management course for 20 young people. This program will focus on youth who have experiences with the justice system and who are living in low-income situations in priority neighbourhoods in Toronto. Through the weekly sessions, young people will improve their mental health as they learn to identify triggers and building cope skills with the help of music. Funds will be used to hire youth leaders, to engage peer mentors, to deliver the weekly music sessions and to produce a final video trailer.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, YDIS, YCL, YP",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7877,43.35775 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"North BurLINKton Community Group c/o Community Development Halton",
                "Unit Number":"",
                "Address_w":"860 Harrington Court",
                "City":"Burlington",
                "Province":"ON",
                "Postal Code":"L7N 3N4",
                "Full Address":"860 Harrington Court Burlington ON L7N 3N4 ",
                "Amount_Applied":201000,
                "Amount_Awarded":181700,
                "Timeline(m)":36,
                "Proj_Desc":"$181,700 over 36 months to create two to three neighbourhood spaces where young people can meet, make new friends, experience a sense of belonging, and gain leadership skills. High school aged youth in North Burlington will secure and animate these spaces with the support of adult allies. Funds will be used to support youth-led activities within the new neighbourhood spaces.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth build and maintain healthy, close relationships; Youth are engaged in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5242,43.75588 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Success Beyond Limits",
                "Unit Number":"",
                "Address_w":"755 Oakdale Road",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M3N 1P3",
                "Full Address":"755 Oakdale Road Toronto ON M3N 1P3 ",
                "Amount_Applied":231800,
                "Amount_Awarded":210000,
                "Timeline(m)":36,
                "Proj_Desc":"$210,000 over 36 months to work collaboratively with community partners, including the Toronto District School Board, to bring social, recreational and academic supports to middle-school youth in order reduce the achievement gap and connect young people to opportunities and experiences that will foster new skills, new relationships and expanded horizons. Funding will be used to hire one youth coordinator, to recruit and train 20 youth mentors, and to deliver mentorship and educational supports in a school setting in the Jane Finch neighbourhood in Toronto.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Grant_Outcome":"Youth form and maintain healthy, close relationships; Youth know about and easily navigate resources in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.624,43.58022 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"S.W.A.G. Youth Mentorship Program c/o African Community Services of Peel",
                "Unit Number":"2101",
                "Address_w":"145 Hillcrest Avenue",
                "City":"Mississauga",
                "Province":"ON",
                "Postal Code":"L5B 3Z1",
                "Full Address":"145 Hillcrest Avenue Mississauga ON L5B 3Z1 ",
                "Amount_Applied":90000,
                "Amount_Awarded":100300,
                "Timeline(m)":24,
                "Proj_Desc":"$100,300 over 24 months to deliver a program that develops the skills and capacity of racialized youth through mentorship, training, education, and positive relationships. S.W.A.G.(Success with Age and Guidance) is comprised of a group of young men under 30 years old all from the Region of Peel. Funds will support two 13-week mentorship sessions a year for youth aged 12 to 21 in the Peel Region.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth are engaged in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.1217,43.83146 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"The Power to Be International c/o Pueblito Canada",
                "Unit Number":"14b",
                "Address_w":"1822 Whites Road",
                "City":"Pickering",
                "Province":"ON",
                "Postal Code":"L1V 0B1",
                "Full Address":"1822 Whites Road Pickering ON L1V 0B1 ",
                "Amount_Applied":70000,
                "Amount_Awarded":71900,
                "Timeline(m)":24,
                "Proj_Desc":"$71,900 over 24 months to pilot a mentorship and leadership program that focuses on girlsâ€™ empowerment through critical engagement with information communication technology (ICT), social media and community building in virtual and physical settings. Funds will be used to hire one youth program coordinator, to deliver weekly engagement sessions, and to build a virtual platform for digital youth engagement.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YDIS, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Grant_Outcome":"Youth form and maintain healthy, close relationships; Youth are engaged in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5384,43.60362 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"F.E.A.T. for Children c/o Franklin Horner Community Centre",
                "Unit Number":"",
                "Address_w":"432 Horner Ave.",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M8W 2B2",
                "Full Address":"432 Horner Ave. Toronto ON M8W 2B2 ",
                "Amount_Applied":120630,
                "Amount_Awarded":129900,
                "Timeline(m)":36,
                "Proj_Desc":"$129,900 over 36 months to deliver a peer mentorship project that will provide positive role models to at-risk youth in high three risk communities. Each week, youth will have the opportunity to participate in a variety of sports, engage in the arts, and collaboratively prepare nutritious meals with mentors. The program will provide year-long supportive programming once a week for youth 12â€“ 20 years old who are affected by parental imprisonment.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth have at lease one consistent, caring person in their lives; Youth are engaged in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.1931,43.76243 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"IMPACT nâ€™ Communities c/o Operation Springboard",
                "Unit Number":"",
                "Address_w":"4301 Kingston Rd",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1E 2M9",
                "Full Address":"4301 Kingston Rd Scarborough ON M1E 2M9 ",
                "Amount_Applied":400000,
                "Amount_Awarded":300000,
                "Timeline(m)":36,
                "Proj_Desc":"$300,000 over 36 months to deliver the Violence Intervention (VIA) Ambassadors Project in four communities in East Scarborough. Youth in the program will receive capacity building and training in life and pro-social skills, violence prevention and intervention. During the final year of this project, VIAâ€™s will be part of a Scarborough Wide Youth Council that will be dedicated to leadership, violence intervention and community safety.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth build and maintain healthy, close relationships; Youth are engaged in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4386,43.66117 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Naadmaagit Ki Group c/o For Youth Initiative",
                "Unit Number":"",
                "Address_w":"56 Pauline Avenue",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6H 3M8",
                "Full Address":"56 Pauline Avenue Toronto ON M6H 3M8 ",
                "Amount_Applied":240000,
                "Amount_Awarded":263600,
                "Timeline(m)":48,
                "Proj_Desc":"$263,600 over 48 months to connect urban Aboriginal youth with Elders, their peers and adult mentors while engaging them in land-based and cultural learning in Toronto. Through these new relationships, young people will deepen their understanding of indigenous knowledge and will learn to apply indigenous knowledge to a range of activities. Youth will be supported to lead nature tours, cultural ceremonies, and increase indigenous presence on urban lands through restoration and planting. Funds will be used to pay honorariums to youth mentors and Elders, and to train youth in horticulture.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their communities; Youth form and maintain healthy, close relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4473,43.71666 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Persevere Until Success Happens (P.U.S.H.) c/o Unison Health and Community Services",
                "Unit Number":"",
                "Address_w":"700 Lawrence Ave W",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6A 3B4",
                "Full Address":"700 Lawrence Ave W Toronto ON M6A 3B4 ",
                "Amount_Applied":242236,
                "Amount_Awarded":171100,
                "Timeline(m)":36,
                "Proj_Desc":"$171,100 over 36 months to deliver the Push Elite program, to engage youth from the Lawrence Heights community in a life skills, leadership and fundamental basketball skills training program. The program will support youth who face barriers with academics, social skills and other life issues by providing opportunities to participate in sports, attend life skills workshops and access academic supports.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YDIS, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth are engaged in their communities; Youth know about and easily navigate resources in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3006,43.80065 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"Steeles Lâ€™Amoreaux Youth Empowerment (S.L.Y.E.) c/o Youthlink",
                "Unit Number":"410",
                "Address_w":"3850 Finch Ave East",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M1T 3T6",
                "Full Address":"3850 Finch Ave East Toronto ON M1T 3T6 ",
                "Amount_Applied":298920,
                "Amount_Awarded":300000,
                "Timeline(m)":36,
                "Proj_Desc":"$300,000 over 36 months to deliver a project called â€œThe Roadshowâ€ which aims to engage youth between the ages of 12-25 by connecting them to the broad spectrum of supports available in their local communities. The Roadshow will be held in schools, as well as private and residential spaces, where collaboratives of cross-sector organizations will promote and guide youth through the supports that meet their variety of needs. The project will target both youth in school as well as youth who are disengaged and out of school.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YDIS, LGBY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth know about and easily navigate resources in their communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3471,43.78522 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201415",
                "Org_Name":"The Next Edition c/o Youth Action Network",
                "Unit Number":"",
                "Address_w":"26 Houston Cres.",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M2J 3H8",
                "Full Address":"26 Houston Cres. Toronto ON M2J 3H8 ",
                "Amount_Applied":150000,
                "Amount_Awarded":150800,
                "Timeline(m)":24,
                "Proj_Desc":"$150,800 over 24 months to engage youth 14 to 25 in Toronto to cultivate their artistic â€˜voiceâ€™ and skills through music. Participating young people will learn to produce and promote socially-conscious music through live performances and digital media.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth are engaged in their communities; Youth form and maintain healthy, close relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4473,43.69559 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Black Women in Motion c/o For Youth Initiative",
                "Unit Number":"301",
                "Address_w":"659 Northcliffe Blvd",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6E 5B3",
                "Full Address":"659 Northcliffe Blvd Toronto ON M6E 5B3 ",
                "Amount_Applied":75000,
                "Amount_Awarded":70000,
                "Timeline(m)":12,
                "Proj_Desc":"$70,000 over 12 months to host â€˜This Means WAARâ€™, a conference for racialized youth living in low-income situations, who are in care or leaving care, in order to bring together young residents of Torontoâ€™s Weston Pellam Park neighbourhood to talk about rape culture. Funds will be used for staff salaries, events and the conference program delivery.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4189,43.65625 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"CANVAS Arts Action Program c/o Youth Assisting Youth",
                "Unit Number":"",
                "Address_w":"222 Montrose Aveneue",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6G 3G7",
                "Full Address":"222 Montrose Aveneue Toronto ON M6G 3G7 ",
                "Amount_Applied":132870,
                "Amount_Awarded":140000,
                "Timeline(m)":24,
                "Proj_Desc":"$140,000 over 24 months to run the nine-week â€˜Celebrate! Body Positive Improv Programâ€™ in schools and communities across the Greater Toronto Area. Youth will be equipped with creative tools to combat negative body image, gender-based violence, homophobia and transphobia. Funds will be used for staff and programming costs.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"LGBY, YDIS, YP, YILC",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.6926,43.69694 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Cipher c/o ACCESS",
                "Unit Number":"",
                "Address_w":"4 Alfred Keuhne Blvd",
                "City":"Brampton",
                "Province":"ON",
                "Postal Code":"L6T 4N3",
                "Full Address":"4 Alfred Keuhne Blvd Brampton ON L6T 4N3 ",
                "Amount_Applied":24965,
                "Amount_Awarded":33600,
                "Timeline(m)":12,
                "Proj_Desc":"$33,600 over 12 months to deliver workshops and a conference for racialized youth living in low-income situations in Peel Region and introduce them to computer coding and software design. Funds will be used for honorariums. program software, space and conference organizing.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, YP",
                "Targ_Age":"15 to 19 years",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3807,43.65673 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Legalswipe c/o Ontario Justice Education Network",
                "Unit Number":"",
                "Address_w":"10 Dundas Street East",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5B 2G9",
                "Full Address":"10 Dundas Street East Toronto ON M5B 2G9 ",
                "Amount_Applied":137089,
                "Amount_Awarded":137200,
                "Timeline(m)":24,
                "Proj_Desc":"$137,200 over 24 months to offer legal education workshops and further develop a software application that is designed to help Aboriginal, racialized and newcomer youth and youth living in rural and remote communities learn about their legal rights during interactions with law enforcement. Funds will be used for staffing and workshop supplies.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, YRR, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4387,43.88154 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Next Gen Men c/o 360kids Support Services",
                "Unit Number":"",
                "Address_w":"10415 Yonge St.",
                "City":"Richmond Hill",
                "Province":"ON",
                "Postal Code":"L4C 0Z3",
                "Full Address":"10415 Yonge St. Richmond Hill ON L4C 0Z3 ",
                "Amount_Applied":210000,
                "Amount_Awarded":210000,
                "Timeline(m)":36,
                "Proj_Desc":"$210,000 over 36 months to deliver after-school programs to develop social identity, self-awareness and healthy masculinity for boys ages 12 to 14 years in York Region and equip them to interact positively with peers, adults and the community. Funds will be used for staff salaries, programming and promotional materials.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, YRR",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.375,43.64616 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Parkour Toronto c/o For Youth Initiative",
                "Unit Number":"803",
                "Address_w":"25 The Esplanade",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5E 1W5",
                "Full Address":"25 The Esplanade Toronto ON M5E 1W5 ",
                "Amount_Applied":19407,
                "Amount_Awarded":19500,
                "Timeline(m)":12,
                "Proj_Desc":"$19,500 over 12 months to deliver Parkour classes, free outdoor meet-ups and monthly events for Aboriginal, racialized, newcomer, Francophone and LGBTTQ youth. This initiative will help them develop a healthier lifestyle and gain confidence and independence through a physical activity they enjoy. Funds will be used for staffing and travel expenses.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, FY, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.6121,43.58155 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Power to Girls Foundation c/o SKETCH Working Arts for Street-involved and Homeless Youth",
                "Unit Number":"502",
                "Address_w":"100 Dundas Street East",
                "City":"Mississauga",
                "Province":"ON",
                "Postal Code":"L5A 1W5",
                "Full Address":"100 Dundas Street East Mississauga ON L5A 1W5 ",
                "Amount_Applied":184151,
                "Amount_Awarded":185000,
                "Timeline(m)":36,
                "Proj_Desc":"$185,000 over 36 months to run â€˜Growing Independent Resilient Ladies (GIRL)â€™ a program for racialized female youth from lower income neighbourhoods in order to foster positive life decisions and build self-esteem through media literacy, access to resources, mentorship, and improved mother-daughter relationships. Funds will be used for staff salaries, workshops and program expenses.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Have Families & Caregivers to help them Thrive",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.183,43.80761 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"RISE Edutainment c/o VIBE Arts",
                "Unit Number":"",
                "Address_w":"8 Bobcat Terrance",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1B 6G5",
                "Full Address":"8 Bobcat Terrance Scarborough ON M1B 6G5 ",
                "Amount_Applied":210000,
                "Amount_Awarded":70000,
                "Timeline(m)":12,
                "Proj_Desc":"$70,000 over 12 months to create community gatherings for racialized youth in Scarborough and Toronto to address key social issues important to them (such as poverty, gang-violence or racism) in both artistic and non-artistic ways, with fellow youth and adult mentors. Funds will be used for staff salaries and the delivery of programming, conferences, and events.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, YP, DY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth are Engaged in their Communities; Youth Form & Maintain Healthy, Close Relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3727,43.67084 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"T-Miut c/o Tungasuvvingat Inuit",
                "Unit Number":"2415",
                "Address_w":"77 Howard Street",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4X 1J9",
                "Full Address":"77 Howard Street Toronto ON M4X 1J9 ",
                "Amount_Applied":210000,
                "Amount_Awarded":210000,
                "Timeline(m)":36,
                "Proj_Desc":"$210,000 over 36 months to create a space for Inuit youth in Toronto to meet, gather, and learn about the Inuk identity. T-Miut will develop a language curriculum, teach traditional skills such as beading games, sewing, singing, and drumming, and provide cultural teachings. Funds will be used to hire project coordinators, rent space, conduct outreach, and deliver programming.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.59,43.74305 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"World Changers Society c/o Rapport Youth Services",
                "Unit Number":"",
                "Address_w":"82 Stevenson Road",
                "City":"Etobicoke",
                "Province":"ON",
                "Postal Code":"M9V 2B5",
                "Full Address":"82 Stevenson Road Etobicoke ON M9V 2B5 ",
                "Amount_Applied":210000,
                "Amount_Awarded":140000,
                "Timeline(m)":24,
                "Proj_Desc":"$140,000 over 24 months to provide mentorship and life skills training for youth coming out of care to support their transition to independence. Funds will be used for staffing, equipment and resources to hold regular sessions between mentors (youth once in care now independent) and youth still in care in the Greater Toronto Area.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Have at Least One Consistent, Caring Person in their Lives",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4816,43.72513 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"BrAIDS for AIDS c/o Youth Action Network",
                "Unit Number":"2104",
                "Address_w":"55 George Appleton Way",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M3M 0A2",
                "Full Address":"55 George Appleton Way Toronto ON M3M 0A2 ",
                "Amount_Applied":59550,
                "Amount_Awarded":92000,
                "Timeline(m)":36,
                "Proj_Desc":"$92,000 over 36 months to deliver one-to-one sexual health education, counseling and referral sessions with young males in detention at the Roy McMurtry Youth Centre in Brampton. The information will be delivered through culturally-relevant mediums and community sexual health resources. Funds will be used for program staffing, transportation and supplies.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7584,43.68761 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"LAB B c/o Youth Action Network",
                "Unit Number":"104",
                "Address_w":"60 Queen Street",
                "City":"Brampton",
                "Province":"ON",
                "Postal Code":"L6V 1A9",
                "Full Address":"60 Queen Street Brampton ON L6V 1A9 ",
                "Amount_Applied":295692,
                "Amount_Awarded":300000,
                "Timeline(m)":36,
                "Proj_Desc":"$300,000 over 36 months to create a Creative Economy Co-opâ€™ program for racialized and newcomer youth in Peel Region. They will mentor youth who seek entrepreneurial skills and support them to reach workable milestones. Funds will support staffing and program costs.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Have at Least One Consistent, Caring Person in their Lives",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3658,43.65076 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Native Youth Sexual Health Network c/o Ontario Federation of Indigenous Friendship Centres",
                "Unit Number":"",
                "Address_w":"219 Front Street East",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5A 1E8",
                "Full Address":"219 Front Street East Toronto ON M5A 1E8 ",
                "Amount_Applied":400000,
                "Amount_Awarded":400000,
                "Timeline(m)":48,
                "Proj_Desc":"$400,000 over 48 months to work with Aboriginal youth across Ontario to mentor young leaders and create sustainable resources that can improve personal and community health and wellness. The Network will hold a youth summit and a Circle of Support, expand its â€˜Media as Arts Justiceâ€™ programming, and provide capacity and guidance to Indigenous youth living in remote, low-income areas throughout Ontario. Funds will support salaries and programming, and the planning and staging of the Youth Summit, gatherings and conferences.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, YRR, LGBY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5537,43.71519 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"REX Pride c/o Leave Out Violence Everywhere (LOVE)",
                "Unit Number":"",
                "Address_w":"21 Panorama Court",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M9W 3W7",
                "Full Address":"21 Panorama Court Toronto ON M9W 3W7 ",
                "Amount_Applied":387550,
                "Amount_Awarded":387000,
                "Timeline(m)":48,
                "Proj_Desc":"$387,000 over 48 months to coordinate a local support network for LGBTTQ youth and provide support and services to youth and youth-serving agencies in the Toronto neighbourhood of Rexdale. Funds will be used for project staffing, programming and marketing materials.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"LGBY, YP, DY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2974,43.79282 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"S.E.E.D.S. c/o Thornecliffe Neighbourhood Office (TNO)",
                "Unit Number":"",
                "Address_w":"804 Huntingwood Drive",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M1T 2L6",
                "Full Address":"804 Huntingwood Drive Toronto ON M1T 2L6 ",
                "Amount_Applied":92500,
                "Amount_Awarded":107700,
                "Timeline(m)":36,
                "Proj_Desc":"$107,700 over 36 months to deliver an after-school program, using a peer-learning model, for middle school youth in Torontoâ€™s neighbourhood improvement areas. Local post-secondary students will provide supports, helping the youth to form and maintain healthy, close relationships. Funds will be used for program delivery and staffing costs.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4251,43.84473 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Silver Linings Family CircleTuck Shop c/o Community Living York South",
                "Unit Number":"",
                "Address_w":"170 Red Maple Road",
                "City":"Richmond Hill",
                "Province":"ON",
                "Postal Code":"L4B 4T8",
                "Full Address":"170 Red Maple Road Richmond Hill ON L4B 4T8 ",
                "Amount_Applied":100000,
                "Amount_Awarded":100500,
                "Timeline(m)":36,
                "Proj_Desc":"$100,500 over 36 month to work with a professional job coach to enhance the skills of youth with developmental disabilities in York Region in order to increase their self-confidence and their employable skills. Funds will be used for staff salaries and honorariums for youth.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5154,43.69981 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"SoundCheck c/o The HopeWorks Connection",
                "Unit Number":"",
                "Address_w":"1844 Weston Rd",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M9N 1V9",
                "Full Address":"1844 Weston Rd Toronto ON M9N 1V9 ",
                "Amount_Applied":118675,
                "Amount_Awarded":137500,
                "Timeline(m)":36,
                "Proj_Desc":"$137,500 over 36 months to implement a music instruction and mentorship program for 15 to 24 years old racialized youth in the Weston Road Mt. Dennis area of Toronto to build healthy relationships and develop leadership, teamwork and self-confidence. Funds will be used for staff salaries, musician mentors and resources.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YDIS, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.381,43.66653 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Sunset Service c/o S SKETCH Working Arts for Street-involved and Homeless Youth",
                "Unit Number":"",
                "Address_w":"519 Church St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4Y 2C9",
                "Full Address":"519 Church St Toronto ON M4Y 2C9 ",
                "Amount_Applied":85920,
                "Amount_Awarded":108800,
                "Timeline(m)":36,
                "Proj_Desc":"$180,800 over 36 months to deliver monthly and weekly activities as well as develop and maintain an online social-spiritual space for LGBTTQ youth in the Greater Toronto Area. Funds will be used for programming and outreach, to hire a Multidisciplinary Spiritual Arts Programmer, Coordinator, and a Youth Peer Facilitator, all of whom will be youth who reflect the audiences engaged at their events.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, LGBY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3727,43.67084 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Trust 15 c/o YMCA of Greater Toronto",
                "Unit Number":"2415",
                "Address_w":"77 Howard Street",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4X 1J9",
                "Full Address":"77 Howard Street Toronto ON M4X 1J9 ",
                "Amount_Applied":300000,
                "Amount_Awarded":300000,
                "Timeline(m)":36,
                "Proj_Desc":"$300,000 over 36 months to provide leadership and mentorship opportunities for racialized and newcomer youth in the Toronto neighbourhood of Rexdale by offering workshops for their Men of Distinction and Ladies on the Rise programs. Funds will be used for staff salaries, workshops and educational excursions.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"RY, NY, YDIS, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.603,43.62129 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Dixie Bloor Neighbourhood Drop-In Centre",
                "Unit Number":"103",
                "Address_w":"3650 Dixie Road",
                "City":"Mississauga",
                "Province":"ON",
                "Postal Code":"L4Y 3V9",
                "Full Address":"3650 Dixie Road Mississauga ON L4Y 3V9 ",
                "Amount_Applied":823003,
                "Amount_Awarded":785400,
                "Timeline(m)":60,
                "Proj_Desc":"$785,400 over 60 months will be used by the Healthy City Stewardship Centre collaborative to make it easier for youth from marginalized backgrounds including racialized, newcomer, LGBTTQ, youth with disabilities or special needs to navigate and access employment resources in Peel. Funds will be used to hire a Youth Coordinator to oversee the project, develop and implement a strategy and deliver communications materials.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"RY, NY, YDIS, DY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3623,43.65987 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Peacebuilders International",
                "Unit Number":"300",
                "Address_w":"585 Dundas St E",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5A 2B7",
                "Full Address":"585 Dundas St E Toronto ON M5A 2B7 ",
                "Amount_Applied":526811,
                "Amount_Awarded":507300,
                "Timeline(m)":36,
                "Proj_Desc":"$507,300 over 36 months to build a pre-charge diversion process to serve Toronto area youth. The collaborative will do this work with support from partners in policing services and school boards. Funds will be used for staffing, strategy design, community engagement and coordination of the initiative.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"RY, NY, LGBY, FY, YDIS, DY, YCL, YP, YILC",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -81.174,46.39703 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Atikameksheng Organics c/o Atikameksheng Anishinawbek",
                "Unit Number":"",
                "Address_w":"634 Gabode Drive",
                "City":"Naughton",
                "Province":"ON",
                "Postal Code":"P0M 2M0",
                "Full Address":"634 Gabode Drive Naughton ON P0M 2M0 ",
                "Amount_Applied":210000,
                "Amount_Awarded":210000,
                "Timeline(m)":36,
                "Proj_Desc":"$210,000 over 36 months to engage young people to design and maintain a greenhouse in Atikameksheng Anishinabek community. Funds will be used for garden supplies, youth engagement, and staffing.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, YRR",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities;",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -81.6845,52.2078 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Fort Albany First Nation Youth Council c/o Fort Albany First Nation",
                "Unit Number":"",
                "Address_w":"PO Box 1",
                "City":"Fort Albany",
                "Province":"ON",
                "Postal Code":"P0L 1H0",
                "Full Address":"PO Box 1 Fort Albany ON P0L 1H0 ",
                "Amount_Applied":206400,
                "Amount_Awarded":210000,
                "Timeline(m)":36,
                "Proj_Desc":"$210,000 over 36 months to provide empowerment workshops, life skills training, camp retreats, and overall support for youth in Fort Albany First Nation. This initiative aims to increase the self-esteem and confidence of young people in the community. Funds will be used for staffing, training, and workshops.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, YRR",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -74.7418,45.00511 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Iakwaâ€™shatste Youth Fitness c/o The Aboriginal Sport and Wellness Council of Ontario",
                "Unit Number":"7",
                "Address_w":"167 International Rd",
                "City":"Akwesasne",
                "Province":"ON",
                "Postal Code":"K6H 5R7",
                "Full Address":"167 International Rd Akwesasne ON K6H 5R7 ",
                "Amount_Applied":70000,
                "Amount_Awarded":70000,
                "Timeline(m)":12,
                "Proj_Desc":"$70,000 over 12 months to provide access to professional sports and fitness training to athletically inclined youth in remote and underserved First Nations community in Akwesasne. Traditional healers and teachers will train youth to fight depression and anxiety by traditional means, with a focus on the mind, body and spirit. Funds will be used for staff and program delivery.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, RY, LGBY, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities;",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.6163,51.24997 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"MoCreebec Eeyoud Youth Council c/o MoCreebec Eeyoud",
                "Unit Number":"Box 4",
                "Address_w":"63 Hospital Drive",
                "City":"Moose Factory",
                "Province":"ON",
                "Postal Code":"P0L 1W0",
                "Full Address":"63 Hospital Drive Moose Factory ON P0L 1W0 ",
                "Amount_Applied":159000,
                "Amount_Awarded":140000,
                "Timeline(m)":12,
                "Proj_Desc":"$140,000 over 24 months to formally implement a youth council in the community of MoCreebec First Nation and create opportunities for youth to be engaged in meaningful ways. Funds will be used to support the engagement of youth, elders and community leaders.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities; Youth Have Families & Caregivers to help them Thrive",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -92.1704,53.8741 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Regaining Cultural Identity c/o Sachigo Lake First Nation",
                "Unit Number":"Box 20",
                "Address_w":"30 Airport Rd",
                "City":"Sachigo Lake",
                "Province":"ON",
                "Postal Code":"P0V 2P0",
                "Full Address":"30 Airport Rd Sachigo Lake ON P0V 2P0 ",
                "Amount_Applied":210000,
                "Amount_Awarded":210000,
                "Timeline(m)":36,
                "Proj_Desc":"$210,000 over 36 months to engage youth in Sachigo Lake First Nation through social supports and mentorship. Funds will be used for staffing, equipment and supplies.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.3206,44.30638 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Sacred Water Circle c/o Green Communities Canada",
                "Unit Number":"",
                "Address_w":"416 Chambers St",
                "City":"Peterborough",
                "Province":"ON",
                "Postal Code":"K9H 3V1",
                "Full Address":"416 Chambers St Peterborough ON K9H 3V1 ",
                "Amount_Applied":70000,
                "Amount_Awarded":70000,
                "Timeline(m)":12,
                "Proj_Desc":"$70,000 over 12 months to support local water experts and Indigenous elders and youth, to deepen their understanding of traditional knowledge and current, local and national issues related to water in Haliburton, Kawartha, Pine Ridge and Peterborough. Funds will be used for staff and youth salaries, space rental, training programs, and community gatherings.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, YRR, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.8936,43.33392 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"NGen c/o Boys and Girls Club of Hamilton",
                "Unit Number":"",
                "Address_w":"24 Main Street West",
                "City":"Hamilton",
                "Province":"ON",
                "Postal Code":"L0R 1J0",
                "Full Address":"24 Main Street West Hamilton ON L0R 1J0 ",
                "Amount_Applied":400000,
                "Amount_Awarded":400000,
                "Timeline(m)":48,
                "Proj_Desc":"$400,000 over 48 months to provide mentorship opportunities for youth in Hamilton and ensure they have access to safe spaces, can connect with other youth, and become active members in their communities. Funds will be used for youth salaries, program delivery and outreach.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, NY, RY, LGBY, YDIS, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -75.6645,45.32432 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Ohero:kon \"Under the Husk\" c/o Onake Corporation",
                "Unit Number":"",
                "Address_w":"236 Cooks Mill Crescent Akwesasne Mohawk Territory",
                "City":"Ottawa",
                "Province":"ON",
                "Postal Code":"K1V 2N1",
                "Full Address":"236 Cooks Mill Crescent Akwesasne Mohawk Territory Ottawa ON K1V 2N1 ",
                "Amount_Applied":400000,
                "Amount_Awarded":400000,
                "Timeline(m)":48,
                "Proj_Desc":"$400,000 over 48 months to expand its rites of passage initiative for Haudenosaunee youth facing barriers in order to provide more year-round support, skill-building, and community connecting in Akwesasne, and will share the initiative with other Haudenosaunee communities across Ontario. Funds will be used for project staffing, mentoring, travel and meeting costs, and project supplies including a shared garden.",
                "Budget_Fund":"Grassroots Innovation",
                "Targ_Pop":"IY, YRR",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.0993,43.06151 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"Six Nation Polytechnic",
                "Unit Number":"Box 700",
                "Address_w":"2160 Fourth Line",
                "City":"Ohsweken",
                "Province":"ON",
                "Postal Code":"N0A 1M0",
                "Full Address":"2160 Fourth Line Ohsweken ON N0A 1M0 ",
                "Amount_Applied":1852800,
                "Amount_Awarded":900000,
                "Timeline(m)":48,
                "Proj_Desc":"$900,000 over 48 months to systematize opportunities for Indigenous education and learning for First Nations youth by launching youth ambassador models for First Nations youth aged 13 to 24 to foster cultural resilience, cultural identity, and self-confidence. Funds will be used for staffing, curriculum development and delivery as well as ambassadors training and mobilization.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"IY, RY, YRR, DY, YCL, YP, YILC",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Grant_Outcome":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3842,43.66767 ]
            },
            "properties": {
                "FundProgram":"YOF",
                "FY":"FY201516",
                "Org_Name":"The Students Commission of Canada",
                "Unit Number":"",
                "Address_w":"23 Isabella St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4Y 1M7",
                "Full Address":"23 Isabella St Toronto ON M4Y 1M7 ",
                "Amount_Applied":1000000,
                "Amount_Awarded":700000,
                "Timeline(m)":48,
                "Proj_Desc":"$700,000 over 48 months to engage youth, supported by adult allies, to research and identify needs of youth facing barriers in the Kingston, Frontenac, Lennox and Addington communities. The collaborative wants to: decrease barriers to youth development; increase relevancy and participation of youth programs and services; and increase positive outcomes for youth. Funds will be used for salaries of staff and youth leaders, convenings and activity supplies.",
                "Budget_Fund":"Strategic Collaboration",
                "Targ_Pop":"IY, NY, RY, LGBY, YDIS, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Grant_Outcome":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities",
                "Service Type":""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4028,43.74861 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Midaynta Community Services",
                "Unit Number":"",
                "Address_w":"203 Old Yonge St",
                "City":"North York",
                "Province":"ON",
                "Postal Code":"M2P 1R3",
                "Full Address":"203 Old Yonge St North York ON M2P 1R3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3974,43.70016 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Midaynta Community Services",
                "Unit Number":"203",
                "Address_w":"1992 Yonge Street",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4S 1Z6",
                "Full Address":"1992 Yonge Street Toronto ON M4S 1Z6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4113,43.64186 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Canadian Training Institute",
                "Unit Number":"400",
                "Address_w":"901 King St. West",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5V 3H5",
                "Full Address":"901 King St. West Toronto ON M5V 3H5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7213,43.66167 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Brampton Multicultural Community Centre",
                "Unit Number":"303",
                "Address_w":"197 County Court Blvd.",
                "City":"Brampton",
                "Province":"ON",
                "Postal Code":"L6W 4P6",
                "Full Address":"197 County Court Blvd. Brampton ON L6W 4P6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7198,43.7184 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Brampton Multicultural Community Centre",
                "Unit Number":"107",
                "Address_w":"150 Central Park Drive",
                "City":"Brampton",
                "Province":"ON",
                "Postal Code":"L6T 2T9",
                "Full Address":"150 Central Park Drive Brampton ON L6T 2T9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7172,43.52989 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Brampton Multicultural Community Centre",
                "Unit Number":"42",
                "Address_w":"4120 Ridgeway Drive",
                "City":"Mississauga",
                "Province":"ON",
                "Postal Code":"L5L 5S9",
                "Full Address":"4120 Ridgeway Drive Mississauga ON L5L 5S9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4387,43.88154 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"360Â° Kids",
                "Unit Number":"C",
                "Address_w":"10415 Yonge St.",
                "City":"Richmond Hill",
                "Province":"ON",
                "Postal Code":"L4C 0Z3",
                "Full Address":"10415 Yonge St. Richmond Hill ON L4C 0Z3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -89.243,48.38942 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Kairos Youth Centre",
                "Unit Number":"",
                "Address_w":"231 Cameron Street",
                "City":"Thunder Bay",
                "Province":"ON",
                "Postal Code":"P7C 2H1",
                "Full Address":"231 Cameron Street Thunder Bay ON P7C 2H1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -83.0273,42.31108 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"New Beginnings",
                "Unit Number":"",
                "Address_w":"1015 Highland Ave",
                "City":"Windsor",
                "Province":"ON",
                "Postal Code":"N9A 1R6",
                "Full Address":"1015 Highland Ave Windsor ON N9A 1R6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -75.7188,45.40828 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"YouTurn Youth Support Services",
                "Unit Number":"303",
                "Address_w":"250 City Centre Avenue",
                "City":"Ottawa",
                "Province":"ON",
                "Postal Code":"K1R 6K7",
                "Full Address":"250 City Centre Avenue Ottawa ON K1R 6K7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3747,43.65646 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"Canadian Centre for Victims of Torture",
                "Unit Number":"",
                "Address_w":"192 Jarvis St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5B 2B7",
                "Full Address":"192 Jarvis St Toronto ON M5B 2B7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2683,43.73154 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"Canadian Centre for Victims of Torture",
                "Unit Number":"310",
                "Address_w":"2401 Eglinton Ave East",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M1K 2N8",
                "Full Address":"2401 Eglinton Ave East Toronto ON M1K 2N8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3022,43.72634 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"Canadian Centre for Victims of Torture",
                "Unit Number":"",
                "Address_w":"1527 Victoria Park Avenue",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M1L 2T3",
                "Full Address":"1527 Victoria Park Avenue Toronto ON M1L 2T3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4028,43.74861 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Midaynta Community Services",
                "Unit Number":"",
                "Address_w":"203 Old Yonge St",
                "City":"North York",
                "Province":"ON",
                "Postal Code":"M2P 1R3",
                "Full Address":"203 Old Yonge St North York ON M2P 1R3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3974,43.70016 ]
            },
            "properties": {
                "FundProgram":"GPIP",
                "FY":"FY201617",
                "Org_Name":"Midaynta Community Services",
                "Unit Number":"203",
                "Address_w":"1992 Yonge Street",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4S 1Z6",
                "Full Address":"1992 Yonge Street Toronto ON M4S 1Z6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5385,43.60325 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"F.E.A.T. for Children and Incarcerated Parents",
                "Unit Number":"",
                "Address_w":"432 Horner Avenue",
                "City":"Etobicoke",
                "Province":"ON",
                "Postal Code":"M8W 2B3",
                "Full Address":"432 Horner Avenue Etobicoke ON M8W 2B3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4555,43.69482 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"Yorktown Child and Family Centre",
                "Unit Number":"300",
                "Address_w":"2010 Eglinton Ave W",
                "City":"York",
                "Province":"ON",
                "Postal Code":"M6E 2K3",
                "Full Address":"2010 Eglinton Ave W York ON M6E 2K3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"NY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7546,43.59508 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"The Dam",
                "Unit Number":"109",
                "Address_w":"6850 Millcreek Drive",
                "City":"Mississauga",
                "Province":"ON",
                "Postal Code":"L5N 4J9",
                "Full Address":"6850 Millcreek Drive Mississauga ON L5N 4J9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"NY, RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -89.2212,48.43614 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"Thunder Bay Multicultural Association",
                "Unit Number":"",
                "Address_w":"17 N. Court Street",
                "City":"Thunder Bay",
                "Province":"ON",
                "Postal Code":"P7A 4T4",
                "Full Address":"17 N. Court Street Thunder Bay ON P7A 4T4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"NY, IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -81.0019,46.49173 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"Shkagamik-Kwe Health Centre",
                "Unit Number":"",
                "Address_w":"161 Applegrove St",
                "City":"Sudbury",
                "Province":"ON",
                "Postal Code":"P3C 1N2",
                "Full Address":"161 Applegrove St Sudbury ON P3C 1N2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"LGBY, IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.272,43.12058 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"Boys and Girls Club of Brantford",
                "Unit Number":"",
                "Address_w":"2 Edge Street",
                "City":"Brantford",
                "Province":"ON",
                "Postal Code":"N3T 6H1",
                "Full Address":"2 Edge Street Brantford ON N3T 6H1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"IY, YCL, NY, YP, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -76.4874,44.23271 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"Kingston Employment and Youth Services",
                "Unit Number":"",
                "Address_w":"182 Sydenham Street",
                "City":"Kingston",
                "Province":"ON",
                "Postal Code":"K7K 3M2",
                "Full Address":"182 Sydenham Street Kingston ON K7K 3M2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"NETY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.3258,44.30269 ]
            },
            "properties": {
                "FundProgram":"YMP",
                "FY":"FY201617",
                "Org_Name":"John Howard Society of Peterborough",
                "Unit Number":"",
                "Address_w":"305 Stewart Street",
                "City":"Peterborough",
                "Province":"ON",
                "Postal Code":"K9J 3N2",
                "Full Address":"305 Stewart Street Peterborough ON K9J 3N2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Mentorship"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3537,43.70244 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"Governing Council of the Salvation Army in Canada",
                "Unit Number":"",
                "Address_w":"2 Overlea Boulevard",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4H 1P4",
                "Full Address":"2 Overlea Boulevard Toronto ON M4H 1P4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.403,43.65648 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"St. Stephenâ€™s Community House",
                "Unit Number":"",
                "Address_w":"260 Augusta Ave",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5T 2L9",
                "Full Address":"260 Augusta Ave Toronto ON M5T 2L9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4291,44.05768 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"Family Services York Region",
                "Unit Number":"300",
                "Address_w":"1091 Gorham St.",
                "City":"Newmarket",
                "Province":"ON",
                "Postal Code":"L3Y 8X7",
                "Full Address":"1091 Gorham St. Newmarket ON L3Y 8X7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3151,43.86007 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"Family Services York Region",
                "Unit Number":"203",
                "Address_w":"4261 Highway 7",
                "City":"Unionville",
                "Province":"ON",
                "Postal Code":"L3R 9W6",
                "Full Address":"4261 Highway 7 Unionville ON L3R 9W6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4199,43.89007 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"Family Services York Region",
                "Unit Number":"18",
                "Address_w":"10610 Bayview Ave.",
                "City":"Richmond Hill",
                "Province":"ON",
                "Postal Code":"L4C 3N8",
                "Full Address":"10610 Bayview Ave. Richmond Hill ON L4C 3N8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -89.2481,48.38021 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"John Howard Society of Thunder Bay and District",
                "Unit Number":"",
                "Address_w":"315 S. Syndicate Ave.",
                "City":"Thunder Bay",
                "Province":"ON",
                "Postal Code":"P7E 1E2",
                "Full Address":"315 S. Syndicate Ave. Thunder Bay ON P7E 1E2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -81.0033,46.4933 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"Elizabeth Fry Society",
                "Unit Number":"",
                "Address_w":"204 Elm St",
                "City":"Sudbury",
                "Province":"ON",
                "Postal Code":"P3C 1V3",
                "Full Address":"204 Elm St Sudbury ON P3C 1V3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.8373,43.25657 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"John Howard Society of Hamilton, Burlington and Area",
                "Unit Number":"",
                "Address_w":"654 Barton St. East",
                "City":"Hamilton",
                "Province":"ON",
                "Postal Code":"L8L 3A2",
                "Full Address":"654 Barton St. East Hamilton ON L8L 3A2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -76.4846,44.23924 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"Youth Diversion Program",
                "Unit Number":"",
                "Address_w":"559 Bagot Street",
                "City":"Kingston",
                "Province":"ON",
                "Postal Code":"K7K 3E1",
                "Full Address":"559 Bagot Street Kingston ON K7K 3E1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.3258,44.30269 ]
            },
            "properties": {
                "FundProgram":"RJCM",
                "FY":"FY201617",
                "Org_Name":"John Howard Society of Peterborough",
                "Unit Number":"",
                "Address_w":"305 Stewart Street",
                "City":"Peterborough",
                "Province":"ON",
                "Postal Code":"K9J 3N2",
                "Full Address":"305 Stewart Street Peterborough ON K9J 3N2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"HIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Grant_Outcome":"",
                "Service Type":"Justice Focused Programming"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3853,43.6612 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Toronto Police Service",
                "Unit Number":"",
                "Address_w":"40 College Street",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5G 2J3",
                "Full Address":"40 College Street Toronto ON M5G 2J3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4151,44.00811 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"York Regional Police Service",
                "Unit Number":"",
                "Address_w":"47 Don Hillock Drive",
                "City":"Aurora",
                "Province":"ON",
                "Postal Code":"L4G 0S7",
                "Full Address":"47 Don Hillock Drive Aurora ON L4G 0S7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.9405,43.89852 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Durham Regional Police",
                "Unit Number":"",
                "Address_w":"605 Rossland Rd. E",
                "City":"Whitby",
                "Province":"ON",
                "Postal Code":"L1N 0B8",
                "Full Address":"605 Rossland Rd. E Whitby ON L1N 0B8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.8318,43.73977 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Peel Regional Police",
                "Unit Number":"",
                "Address_w":"7750 Hurontario Street",
                "City":"Brampton",
                "Province":"ON",
                "Postal Code":"L6V 3W6",
                "Full Address":"7750 Hurontario Street Brampton ON L6V 3W6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.8617,43.87466 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region HQ - Caledon",
                "Unit Number":"",
                "Address_w":"6211 Old Church Rd",
                "City":"Caledon East",
                "Province":"ON",
                "Postal Code":"L0N 1E0",
                "Full Address":"6211 Old Church Rd Caledon East ON L0N 1E0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -86.2687,48.62935 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Police Service - Pic River",
                "Unit Number":"",
                "Address_w":"20 Pic River Road",
                "City":"Heron Bay",
                "Province":"ON",
                "Postal Code":"P0T 1R0",
                "Full Address":"20 Pic River Road Heron Bay ON P0T 1R0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.9914,46.48982 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Sudbury Police Service",
                "Unit Number":"",
                "Address_w":"190 Brady Street",
                "City":"Sudbury",
                "Province":"ON",
                "Postal Code":"P3E 1C7",
                "Full Address":"190 Brady Street Sudbury ON P3E 1C7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -82.072,46.21175 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Police Service - Sagamok",
                "Unit Number":"",
                "Address_w":"Box 548",
                "City":"Massey",
                "Province":"ON",
                "Postal Code":"P0P 1P0",
                "Full Address":"Box 548 Massey ON P0P 1P0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -94.512,49.76749 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Kenora Detachment",
                "Unit Number":"",
                "Address_w":"350 Hwy 17A",
                "City":"Kenora",
                "Province":"ON",
                "Postal Code":"P9N 3X7",
                "Full Address":"350 Hwy 17A Kenora ON P9N 3X7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -93.9927,51.80424 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Pikangikum Detachment",
                "Unit Number":"",
                "Address_w":"Box 323",
                "City":"Pikangikum",
                "Province":"ON",
                "Postal Code":"P0V 2L0",
                "Full Address":"Box 323 Pikangikum ON P0V 2L0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -91.9164,50.10012 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Sioux Lookout Detachment",
                "Unit Number":"",
                "Address_w":"62 Queen St",
                "City":"Sioux Lookout",
                "Province":"ON",
                "Postal Code":"P8T 1A1",
                "Full Address":"62 Queen St Sioux Lookout ON P8T 1A1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -94.4323,49.77734 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Treaty Three Police Services",
                "Unit Number":"",
                "Address_w":"22 Homestake Road",
                "City":"Kenora",
                "Province":"ON",
                "Postal Code":"P9N 3X7",
                "Full Address":"22 Homestake Road Kenora ON P9N 3X7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -91.3333,52.95 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Weagamow Lake",
                "Unit Number":"",
                "Address_w":"Weagamow Lake GD",
                "City":"Weagamow Lake",
                "Province":"ON",
                "Postal Code":"P0V 2Y0",
                "Full Address":"Weagamow Lake GD Weagamow Lake ON P0V 2Y0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -89.8351,53.81876 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Big Trout Lake",
                "Unit Number":"",
                "Address_w":"Big Trout Lake",
                "City":"Big Trout Lake",
                "Province":"ON",
                "Postal Code":"P0V 1G0",
                "Full Address":"Big Trout Lake Big Trout Lake ON P0V 1G0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -93.3954,48.60809 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Fort Frances",
                "Unit Number":"",
                "Address_w":"320 Portage Ave",
                "City":"Fort Frances",
                "Province":"ON",
                "Postal Code":"P9A 3P6",
                "Full Address":"320 Portage Ave Fort Frances ON P9A 3P6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -81.3274,48.47245 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Timmins Police Service",
                "Unit Number":"",
                "Address_w":"185 Spruce Street South",
                "City":"Timmins",
                "Province":"ON",
                "Postal Code":"P4N 2M7",
                "Full Address":"185 Spruce Street South Timmins ON P4N 2M7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5216,46.32954 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Police Service - Dokis",
                "Unit Number":"",
                "Address_w":"469 Couchie Memorial Drive",
                "City":"North Bay",
                "Province":"ON",
                "Postal Code":"P1B 8G5",
                "Full Address":"469 Couchie Memorial Drive North Bay ON P1B 8G5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4526,46.31518 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"North Bay Police Service",
                "Unit Number":"",
                "Address_w":"135 Princess Street West",
                "City":"North Bay",
                "Province":"ON",
                "Postal Code":"P1B 6C2",
                "Full Address":"135 Princess Street West North Bay ON P1B 6C2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5216,46.32954 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Police Service - Nipissing",
                "Unit Number":"",
                "Address_w":"469 Couchie Memorial Drive",
                "City":"North Bay",
                "Province":"ON",
                "Postal Code":"P1B 8G5",
                "Full Address":"469 Couchie Memorial Drive North Bay ON P1B 8G5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3007,45.03729 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region HQ - Bracebridge",
                "Unit Number":"",
                "Address_w":"690 Cedar Lane",
                "City":"Bracebridge",
                "Province":"ON",
                "Postal Code":"P1L 1W9",
                "Full Address":"690 Cedar Lane Bracebridge ON P1L 1W9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7858,44.07866 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region - Nottawasaga Detachment",
                "Unit Number":"",
                "Address_w":"29 Main St W",
                "City":"Beeton",
                "Province":"ON",
                "Postal Code":"L0G 1A0",
                "Full Address":"29 Main St W Beeton ON L0G 1A0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.889,44.74939 ]
            },
            "properties": {
                "FundProgram":"AYIPI",
                "FY":"FY201617",
                "Org_Name":"Midland Police Service",
                "Unit Number":"",
                "Address_w":"250 Second Street",
                "City":"Midland",
                "Province":"ON",
                "Postal Code":"L4R 4K6",
                "Full Address":"250 Second Street Midland ON L4R 4K6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.1146,44.80851 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Christian Islands",
                "Unit Number":"",
                "Address_w":"Cedar Point Post Office",
                "City":"Christian Island",
                "Province":"ON",
                "Postal Code":"L0K 1C0",
                "Full Address":"Cedar Point Post Office Christian Island ON L0K 1C0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3528,44.64951 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Rama Police Services",
                "Unit Number":"",
                "Address_w":"7450 Williams Road",
                "City":"Rama",
                "Province":"ON",
                "Postal Code":"L3V 6H6",
                "Full Address":"7450 Williams Road Rama ON L3V 6H6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.6956,44.40104 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region - Barrie Detachment",
                "Unit Number":"",
                "Address_w":"20 Rose St",
                "City":"Barrie",
                "Province":"ON",
                "Postal Code":"L4M 2T2",
                "Full Address":"20 Rose St Barrie ON L4M 2T2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.2114,44.50088 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region - Collingwood Detachment",
                "Unit Number":"",
                "Address_w":"201 Ontario St",
                "City":"Collingwood",
                "Province":"ON",
                "Postal Code":"L9Y 4M4",
                "Full Address":"201 Ontario St Collingwood ON L9Y 4M4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.0173,44.51895 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region â€“ Huronia West Detachment",
                "Unit Number":"",
                "Address_w":"1000 River Rd W",
                "City":"Wasaga Beach",
                "Province":"ON",
                "Postal Code":"L9Z 1A2",
                "Full Address":"1000 River Rd W Wasaga Beach ON L9Z 1A2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7433,43.41532 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Halton Regional Police",
                "Unit Number":"",
                "Address_w":"1151 Bronte Road",
                "City":"Oakville",
                "Province":"ON",
                "Postal Code":"L6M 3L1",
                "Full Address":"1151 Bronte Road Oakville ON L6M 3L1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.2463,43.54293 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Guelph Police Service",
                "Unit Number":"",
                "Address_w":"15 Wyndham St. South",
                "City":"Guelph",
                "Province":"ON",
                "Postal Code":"N1H 4C6",
                "Full Address":"15 Wyndham St. South Guelph ON N1H 4C6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -81.2321,42.98815 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"London Police Services",
                "Unit Number":"",
                "Address_w":"601 Dundas Street",
                "City":"London",
                "Province":"ON",
                "Postal Code":"N6B 1X1",
                "Full Address":"601 Dundas Street London ON N6B 1X1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -83.0373,42.31828 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Windsor Police Service",
                "Unit Number":"",
                "Address_w":"150 Goyeau Street",
                "City":"Windsor",
                "Province":"ON",
                "Postal Code":"N9A 6J5",
                "Full Address":"150 Goyeau Street Windsor ON N9A 6J5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -83.1082,42.09223 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Amherstburg Police Service",
                "Unit Number":"",
                "Address_w":"532 Sandwich St S",
                "City":"Amherstburg",
                "Province":"ON",
                "Postal Code":"N9V 3R2",
                "Full Address":"532 Sandwich St S Amherstburg ON N9V 3R2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.2367,43.1512 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Brantford Police Service",
                "Unit Number":"",
                "Address_w":"344 Elgin Street",
                "City":"Brantford",
                "Province":"ON",
                "Postal Code":"N3S 7P5",
                "Full Address":"344 Elgin Street Brantford ON N3S 7P5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.8626,43.25614 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Hamilton Police Services",
                "Unit Number":"",
                "Address_w":"155 King William St.",
                "City":"Hamilton",
                "Province":"ON",
                "Postal Code":"l8r 1a7",
                "Full Address":"155 King William St. Hamilton ON l8r 1a7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -82.4864,42.59095 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Walpole Island Police Service",
                "Unit Number":"",
                "Address_w":"651 Tecumseh Rd",
                "City":"Wallaceburg",
                "Province":"ON",
                "Postal Code":"N8A 4K9",
                "Full Address":"651 Tecumseh Rd Wallaceburg ON N8A 4K9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.9459,44.56595 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Owen Sound Police Service",
                "Unit Number":"",
                "Address_w":"922 2nd Avenue West",
                "City":"Owen Sound",
                "Province":"ON",
                "Postal Code":"N4K 4M7",
                "Full Address":"922 2nd Avenue West Owen Sound ON N4K 4M7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.099,43.06187 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Six Nation Police Service",
                "Unit Number":"",
                "Address_w":"2112 4th Line",
                "City":"Ohsweken",
                "Province":"ON",
                "Postal Code":"N0A 1M0",
                "Full Address":"2112 4th Line Ohsweken ON N0A 1M0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -82.0026,43.09345 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Anishinabek - Kettle and Stony Point Police Services",
                "Unit Number":"",
                "Address_w":"RR #2, Box 795",
                "City":"Forest",
                "Province":"ON",
                "Postal Code":"N0N 1J0",
                "Full Address":"RR #2, Box 795 Forest ON N0N 1J0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2455,43.1608 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Niagara Police Service",
                "Unit Number":"",
                "Address_w":"68 Church Street",
                "City":"St. Catharines",
                "Province":"ON",
                "Postal Code":"L2R 3C6",
                "Full Address":"68 Church Street St. Catharines ON L2R 3C6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -83.0586,42.24476 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"LaSalle Police Services",
                "Unit Number":"",
                "Address_w":"1880 Normandy St.",
                "City":"LaSalle",
                "Province":"ON",
                "Postal Code":"N9H 1P8",
                "Full Address":"1880 Normandy St. LaSalle ON N9H 1P8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.751,43.13121 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Woodstock Police Services",
                "Unit Number":"",
                "Address_w":"615 Dundas St.",
                "City":"Woodstock",
                "Province":"ON",
                "Postal Code":"N4S 1E1",
                "Full Address":"615 Dundas St. Woodstock ON N4S 1E1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -81.1916,42.78002 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"St. Thomas Police Services",
                "Unit Number":"",
                "Address_w":"30 St. Catharine Street",
                "City":"St. Thomas",
                "Province":"ON",
                "Postal Code":"N5P 2V8",
                "Full Address":"30 St. Catharine Street St. Thomas ON N5P 2V8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -76.4956,44.25128 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Kingston Police Services",
                "Unit Number":"",
                "Address_w":"705 Division St",
                "City":"Kingston",
                "Province":"ON",
                "Postal Code":"K7K 4C2",
                "Full Address":"705 Division St Kingston ON K7K 4C2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.3188,44.30468 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Peterborough Police Services",
                "Unit Number":"",
                "Address_w":"500 Water St",
                "City":"Peterborough",
                "Province":"ON",
                "Postal Code":"K9J 7Y4",
                "Full Address":"500 Water St Peterborough ON K9J 7Y4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -77.3774,44.1617 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Belleville Police",
                "Unit Number":"",
                "Address_w":"93 Dundas St East",
                "City":"Belleville",
                "Province":"ON",
                "Postal Code":"K8N 1C2",
                "Full Address":"93 Dundas St East Belleville ON K8N 1C2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -75.6942,44.6071 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Brockville Police",
                "Unit Number":"",
                "Address_w":"2269 Parkedale Ave",
                "City":"Brockville",
                "Province":"ON",
                "Postal Code":"K6V 3G9",
                "Full Address":"2269 Parkedale Ave Brockville ON K6V 3G9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.1701,43.95907 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Cobourg Police",
                "Unit Number":"",
                "Address_w":"107 King Street West",
                "City":"Cobourg",
                "Province":"ON",
                "Postal Code":"K9A 2M4",
                "Full Address":"107 King Street West Cobourg ON K9A 2M4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -76.1592,44.3374 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Ganonoque Police Services",
                "Unit Number":"",
                "Address_w":"340 Herbert St",
                "City":"Ganonoque",
                "Province":"ON",
                "Postal Code":"K7G 1R1",
                "Full Address":"340 Herbert St Ganonoque ON K7G 1R1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -75.5291,44.72418 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"Prescott Police Services",
                "Unit Number":"",
                "Address_w":"200 Development Drive",
                "City":"Prescott",
                "Province":"ON",
                "Postal Code":"K0E 1T0",
                "Full Address":"200 Development Drive Prescott ON K0E 1T0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -75.6861,45.41257 ]
            },
            "properties": {
                "FundProgram":"SAYIPI",
                "FY":"FY201617",
                "Org_Name":"Ottawa Police Service",
                "Unit Number":"",
                "Address_w":"474 Elgin Street",
                "City":"Ottawa",
                "Province":"ON",
                "Postal Code":"K2P 2E6",
                "Full Address":"474 Elgin Street Ottawa ON K2P 2E6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -77.7293,44.04472 ]
            },
            "properties": {
                "FundProgram":"SYIPI",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region HQ - Northumberland",
                "Unit Number":"",
                "Address_w":"95 Dundas St E",
                "City":"Brighton",
                "Province":"ON",
                "Postal Code":"K0K 1H0",
                "Full Address":"95 Dundas St E Brighton ON K0K 1H0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"15 to 18 years",
                "Grant_Outcome":"",
                "Service Type":"Police-Youth Relationships"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3301,43.83231 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services York",
                "Unit Number":"200",
                "Address_w":"500 Hood Road",
                "City":"Markham",
                "Province":"ON",
                "Postal Code":"L3R 9Z3",
                "Full Address":"500 Hood Road Markham ON L3R 9Z3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YP, FY, IY",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.473,44.00936 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services York",
                "Unit Number":"101A",
                "Address_w":"24 Orchard Heights Blvd",
                "City":"Aurora",
                "Province":"ON",
                "Postal Code":"L4G 6T5",
                "Full Address":"24 Orchard Heights Blvd Aurora ON L4G 6T5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YP, FY, IY",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4725,44.24226 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services York",
                "Unit Number":"",
                "Address_w":"184 Simcoe Street",
                "City":"Keswick",
                "Province":"ON",
                "Postal Code":"L4P 2H7",
                "Full Address":"184 Simcoe Street Keswick ON L4P 2H7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YP, FY, IY",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5511,43.8095 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services York",
                "Unit Number":"9A",
                "Address_w":"8551 Weston Road",
                "City":"Vaughan",
                "Province":"ON",
                "Postal Code":"L4L 9R4",
                "Full Address":"8551 Weston Road Vaughan ON L4L 9R4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YP, FY, IY",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4093,43.65114 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Child Development Institute",
                "Unit Number":"",
                "Address_w":"197 Euclid Ave.",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6J 2J8",
                "Full Address":"197 Euclid Ave. Toronto ON M6J 2J8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YP",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -89.2624,48.35388 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Dilico Anishinabek Family Care",
                "Unit Number":"",
                "Address_w":"200 Anemki Place",
                "City":"Fort William First Nation",
                "Province":"ON",
                "Postal Code":"P7J 1L6",
                "Full Address":"200 Anemki Place Fort William First Nation ON P7J 1L6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"IY",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.9985,46.49465 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Child and Family Centre Sudbury",
                "Unit Number":"100",
                "Address_w":"62 Frood Rd",
                "City":"Sudbury",
                "Province":"ON",
                "Postal Code":"P3C 4Z3",
                "Full Address":"62 Frood Rd Sudbury ON P3C 4Z3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YP, IY",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.1146,43.07081 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Six Nations Social Services",
                "Unit Number":"",
                "Address_w":"15 Sunrise Court",
                "City":"Ohsweken",
                "Province":"ON",
                "Postal Code":"N0A 1M0",
                "Full Address":"15 Sunrise Court Ohsweken ON N0A 1M0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"IY",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -76.4967,44.26571 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Pathways for Children and Youth Kingston",
                "Unit Number":"215",
                "Address_w":"1201 Division Street",
                "City":"Kingston",
                "Province":"ON",
                "Postal Code":"K7K 6X4",
                "Full Address":"1201 Division Street Kingston ON K7K 6X4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YP",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.3042,44.30712 ]
            },
            "properties": {
                "FundProgram":"SNAP",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services Peterborough",
                "Unit Number":"275",
                "Address_w":"380 Armour Road",
                "City":"Peterborough",
                "Province":"ON",
                "Postal Code":"K9H 7L7",
                "Full Address":"380 Armour Road Peterborough ON K9H 7L7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"YRR, IY",
                "Targ_Age":"6 to 12 years",
                "Grant_Outcome":"",
                "Service Type":"Conflict Resolution/Anger Management Program"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2319,43.77647 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"East Metro Youth Services",
                "Unit Number":"",
                "Address_w":"1200 Markham Rd",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1H 3C3",
                "Full Address":"1200 Markham Rd Scarborough ON M1H 3C3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2809,43.78456 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Agincourt Community Services",
                "Unit Number":"100",
                "Address_w":"4155 Sheppard Ave E",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1S 1T4",
                "Full Address":"4155 Sheppard Ave E Scarborough ON M1S 1T4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3732,43.66073 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Anishnawbe Health Toronto",
                "Unit Number":"",
                "Address_w":"179 Gerrard St E",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5A 2E5",
                "Full Address":"179 Gerrard St E Toronto ON M5A 2E5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3698,43.65434 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Anishnawbe Health Toronto",
                "Unit Number":"",
                "Address_w":"225 Queen E",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5A 1S4",
                "Full Address":"225 Queen E Toronto ON M5A 1S4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4183,43.68175 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Anishnawbe Health Toronto",
                "Unit Number":"",
                "Address_w":"22 Vaughan Rd",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6G 2N1",
                "Full Address":"22 Vaughan Rd Toronto ON M6G 2N1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.1934,43.75746 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Boys & Girls Club of East Scarborough",
                "Unit Number":"",
                "Address_w":"100 Galloway Rd",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1E 1W7",
                "Full Address":"100 Galloway Rd Scarborough ON M1E 1W7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3997,43.70818 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Delisle Youth Services",
                "Unit Number":"255",
                "Address_w":"40 Orchard View Blvd",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4R 1B9",
                "Full Address":"40 Orchard View Blvd Toronto ON M4R 1B9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3327,43.70977 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Flemingdon Neighbourhood Services",
                "Unit Number":"",
                "Address_w":"10 Gateway Blvd",
                "City":"North York",
                "Province":"ON",
                "Postal Code":"M3C 3A1",
                "Full Address":"10 Gateway Blvd North York ON M3C 3A1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2888,43.80703 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Hong Fook Mental Health Association",
                "Unit Number":"",
                "Address_w":"3320 Midland Ave",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1V 5E6",
                "Full Address":"3320 Midland Ave Scarborough ON M1V 5E6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2053,43.81833 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Malvern Family Resource Centre",
                "Unit Number":"",
                "Address_w":"90 Littles Rd",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1B 5E2",
                "Full Address":"90 Littles Rd Scarborough ON M1B 5E2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3836,43.66188 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Native Child and Family Services Toronto",
                "Unit Number":"",
                "Address_w":"456 Yonge St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4Y 1W9",
                "Full Address":"456 Yonge St Toronto ON M4Y 1W9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3487,43.66209 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Native Child and Family Services Toronto",
                "Unit Number":"",
                "Address_w":"935 Dundas St E",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4M 1R4",
                "Full Address":"935 Dundas St E Toronto ON M4M 1R4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4393,43.63928 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Native Child and Family Services Toronto",
                "Unit Number":"",
                "Address_w":"179 Dowling Ave",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6K 3B2",
                "Full Address":"179 Dowling Ave Toronto ON M6K 3B2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2961,43.68959 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Neighbourhood Link",
                "Unit Number":"",
                "Address_w":"2802 Danforth Ave",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M4C 1N2",
                "Full Address":"2802 Danforth Ave Toronto ON M4C 1N2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2487,43.75524 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Rosalie Hall",
                "Unit Number":"",
                "Address_w":"3020 Lawrence Ave",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M1P 2T7",
                "Full Address":"3020 Lawrence Ave Toronto ON M1P 2T7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.1903,43.76759 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Scarborough Centre for Healthy Communities",
                "Unit Number":"",
                "Address_w":"100 Lawrence Ave E",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1E 2S1",
                "Full Address":"100 Lawrence Ave E Scarborough ON M1E 2S1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2207,43.80606 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Taibu Community Health Centre",
                "Unit Number":"1",
                "Address_w":"27 Tapscott Rd",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1B 4Y7",
                "Full Address":"27 Tapscott Rd Scarborough ON M1B 4Y7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2832,43.71772 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Youthlink",
                "Unit Number":"",
                "Address_w":"747 Warden Av",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1L 4A8",
                "Full Address":"747 Warden Av Scarborough ON M1L 4A8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5323,43.74973 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Jamaican Canadian Association",
                "Unit Number":"",
                "Address_w":"995 Arrow Rd",
                "City":"North York",
                "Province":"ON",
                "Postal Code":"M9M 2Z5",
                "Full Address":"995 Arrow Rd North York ON M9M 2Z5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4354,43.67981 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Black Action Defence Committee",
                "Unit Number":"",
                "Address_w":"944 St Clair Ave W",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6C 1C8",
                "Full Address":"944 St Clair Ave W Toronto ON M6C 1C8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3376,43.79397 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Griffin Centre",
                "Unit Number":"",
                "Address_w":"1126 Finch Ave W",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M3J 3J6",
                "Full Address":"1126 Finch Ave W Scarborough ON M3J 3J6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4758,43.76707 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Hincks-Dellcrest Centre",
                "Unit Number":"",
                "Address_w":"440 Jarvis St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M3J 3J6",
                "Full Address":"440 Jarvis St Toronto ON M3J 3J6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5201,43.76521 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Jane-Finch Community & Family Centre",
                "Unit Number":"",
                "Address_w":"4400 Jane St",
                "City":"North York",
                "Province":"ON",
                "Postal Code":"M3N 2K4",
                "Full Address":"4400 Jane St North York ON M3N 2K4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4028,43.74861 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Midaynta",
                "Unit Number":"",
                "Address_w":"203 Old Yonge St",
                "City":"North York",
                "Province":"ON",
                "Postal Code":"M2P 1R3",
                "Full Address":"203 Old Yonge St North York ON M2P 1R3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5192,43.74834 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Promoting Economic Action and Community Health (PEACH)",
                "Unit Number":"",
                "Address_w":"127 Eddystone Ave",
                "City":"North York",
                "Province":"ON",
                "Postal Code":"M3N 1H6",
                "Full Address":"127 Eddystone Ave North York ON M3N 1H6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4555,43.69482 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Yorktown Child and Family Centre",
                "Unit Number":"",
                "Address_w":"2010 Eglinton Ave W",
                "City":"York",
                "Province":"ON",
                "Postal Code":"M6E 2K3",
                "Full Address":"2010 Eglinton Ave W York ON M6E 2K3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.2873,43.69118 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Action for Neighbourhood Change",
                "Unit Number":"",
                "Address_w":"3079 Danforth Avenue",
                "City":"Scarborough",
                "Province":"ON",
                "Postal Code":"M1L 1A9",
                "Full Address":"3079 Danforth Avenue Scarborough ON M1L 1A9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4729,43.68387 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"For Youth Initiative - FYI",
                "Unit Number":"",
                "Address_w":"1652 Keele St",
                "City":"York",
                "Province":"ON",
                "Postal Code":"M6M 3W3",
                "Full Address":"1652 Keele St York ON M6M 3W3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.502,43.69866 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Jane St. Hub / Yorktown",
                "Unit Number":"",
                "Address_w":"1541 Jane S",
                "City":"North York",
                "Province":"ON",
                "Postal Code":"M9N 2R3",
                "Full Address":"1541 Jane S North York ON M9N 2R3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5705,43.71941 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Rexdale Community Health Centre",
                "Unit Number":"",
                "Address_w":"8 Taber Rd",
                "City":"Etobicoke",
                "Province":"ON",
                "Postal Code":"M9W 3A4",
                "Full Address":"8 Taber Rd Etobicoke ON M9W 3A4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4524,43.65698 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Roma Community Centre",
                "Unit Number":"",
                "Address_w":"2340 Dundas St W,",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6P 4A9",
                "Full Address":"2340 Dundas St W, Toronto ON M6P 4A9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5681,43.75486 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Somali Youth Association of Toronto",
                "Unit Number":"",
                "Address_w":"208 Duncanwoods Dr",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M9L 2E6",
                "Full Address":"208 Duncanwoods Dr Toronto ON M9L 2E6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4157,43.67142 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"St. Alban's Boys and Girls Club",
                "Unit Number":"",
                "Address_w":"843 Palmerston Avenue",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6G 2R8",
                "Full Address":"843 Palmerston Avenue Toronto ON M6G 2R8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4922,43.69312 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"The Learning Enrichment Foundation",
                "Unit Number":"",
                "Address_w":"116 Industry S",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6M 4L8",
                "Full Address":"116 Industry S Toronto ON M6M 4L8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4943,43.68885 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"The Learning Enrichment Foundation",
                "Unit Number":"",
                "Address_w":"1267 Weston Rd",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6M 4R2",
                "Full Address":"1267 Weston Rd Toronto ON M6M 4R2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5034,43.68859 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"The Learning Enrichment Foundation",
                "Unit Number":"",
                "Address_w":"55 Emmet Ave",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M6M 5A7",
                "Full Address":"55 Emmet Ave Toronto ON M6M 5A7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3578,43.66311 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Toronto Community Housing Corporation",
                "Unit Number":"",
                "Address_w":"220 Oak St",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5A 2E1",
                "Full Address":"220 Oak St Toronto ON M5A 2E1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.5845,43.74169 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"YMCA Rexdale Youth Resource Centre",
                "Unit Number":"",
                "Address_w":"1530 Albion Rd",
                "City":"Etobicoke",
                "Province":"ON",
                "Postal Code":"M9V 1B4",
                "Full Address":"1530 Albion Rd Etobicoke ON M9V 1B4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.8457,43.8962 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Boys & Girls Club of Durham Region",
                "Unit Number":"",
                "Address_w":"433 Eulalie Ave,",
                "City":"Oshawa",
                "Province":"ON",
                "Postal Code":"L1H 2C6",
                "Full Address":"433 Eulalie Ave, Oshawa ON L1H 2C6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.8698,43.92981 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Boys & Girls Club of Durham Region",
                "Unit Number":"",
                "Address_w":"150 Beatrice St E",
                "City":"Oshawa",
                "Province":"ON",
                "Postal Code":"L1G 7T6",
                "Full Address":"150 Beatrice St E Oshawa ON L1G 7T6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.0323,43.84183 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Barbara Black Centre for Youth Resources (The Youth Centre)",
                "Unit Number":"",
                "Address_w":"360 Bayly St W",
                "City":"Ajax",
                "Province":"ON",
                "Postal Code":"L1S 1P1",
                "Full Address":"360 Bayly St W Ajax ON L1S 1P1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.8654,43.89955 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Durham Family Court Clinic",
                "Unit Number":"",
                "Address_w":"44 Richmond St W",
                "City":"Oshawa",
                "Province":"ON",
                "Postal Code":"L1G 1C7",
                "Full Address":"44 Richmond St W Oshawa ON L1G 1C7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.8645,43.25708 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Wesley Urban Ministries Inc.",
                "Unit Number":"",
                "Address_w":"52 Catharine Street North",
                "City":"Hamilton",
                "Province":"ON",
                "Postal Code":"L8R 1J1",
                "Full Address":"52 Catharine Street North Hamilton ON L8R 1J1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3625,43.65615 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Good Shepherd Ministries",
                "Unit Number":"",
                "Address_w":"412 Queen St E",
                "City":"Toronto",
                "Province":"ON",
                "Postal Code":"M5A 1T3",
                "Full Address":"412 Queen St E Toronto ON M5A 1T3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.8192,43.24338 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Hamilton Regional Indian Centre",
                "Unit Number":"",
                "Address_w":"34 Ottawa St N",
                "City":"Hamilton",
                "Province":"ON",
                "Postal Code":"L8H 3Y7",
                "Full Address":"34 Ottawa St N Hamilton ON L8H 3Y7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.8668,43.25888 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Living Rock Ministries",
                "Unit Number":"",
                "Address_w":"30 Wilson St",
                "City":"Hamilton",
                "Province":"ON",
                "Postal Code":"L8R 1C5",
                "Full Address":"30 Wilson St Hamilton ON L8R 1C5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -81.2296,42.98914 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"London Inter-community Health Centre",
                "Unit Number":"",
                "Address_w":"659 Dundas St",
                "City":"London",
                "Province":"ON",
                "Postal Code":"N5W 2Y8",
                "Full Address":"659 Dundas St London ON N5W 2Y8 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -75.6466,45.43228 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Boys & Girls Club of Ottawa",
                "Unit Number":"",
                "Address_w":"430 McArthur Ave",
                "City":"Ottawa",
                "Province":"ON",
                "Postal Code":"K1K 1G5",
                "Full Address":"430 McArthur Ave Ottawa ON K1K 1G5 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.6399,43.59069 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"YMCA of Greater Toronto",
                "Unit Number":"",
                "Address_w":"151 City Centre Dr. Suite 800",
                "City":"Mississauga",
                "Province":"ON",
                "Postal Code":"L5B 1M7",
                "Full Address":"151 City Centre Dr. Suite 800 Mississauga ON L5B 1M7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.726,43.66126 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"African Canadian Legal Clinic",
                "Unit Number":"",
                "Address_w":"7755 Hurontario St Suite 310A",
                "City":"Brampton",
                "Province":"ON",
                "Postal Code":"L6W 4T1",
                "Full Address":"7755 Hurontario St Suite 310A Brampton ON L6W 4T1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.6389,43.72351 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Malton Neighbourhood Services",
                "Unit Number":"",
                "Address_w":"3540 Morning Star",
                "City":"Mississauga",
                "Province":"ON",
                "Postal Code":"L4T 1Y2",
                "Full Address":"3540 Morning Star Mississauga ON L4T 1Y2 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.7523,43.66257 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Fernie House",
                "Unit Number":"",
                "Address_w":"8500 McLaughlin Road",
                "City":"Brampton",
                "Province":"ON",
                "Postal Code":"L6Y 0N6",
                "Full Address":"8500 McLaughlin Road Brampton ON L6Y 0N6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -89.2624,48.35388 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Dilico Anishinabek Family Care",
                "Unit Number":"",
                "Address_w":"200 Anemki Pl",
                "City":"Thunder Bay",
                "Province":"ON",
                "Postal Code":"P7J 1H9",
                "Full Address":"200 Anemki Pl Thunder Bay ON P7J 1H9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -89.2791,48.38926 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Dilico / Franklin Dennis Cromarty High School",
                "Unit Number":"",
                "Address_w":"315 North Edward Street",
                "City":"Thunder Bay",
                "Province":"ON",
                "Postal Code":"P7C 4P3",
                "Full Address":"315 North Edward Street Thunder Bay ON P7C 4P3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -89.2408,48.41792 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Thunder Bay Counselling Centre",
                "Unit Number":"",
                "Address_w":"544 Winnipeg Ave",
                "City":"Thunder Bay",
                "Province":"ON",
                "Postal Code":"P7B 3S7",
                "Full Address":"544 Winnipeg Ave Thunder Bay ON P7B 3S7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -83.0273,42.31108 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"New Beginnings",
                "Unit Number":"",
                "Address_w":"1015 Highland Ave",
                "City":"Windsor",
                "Province":"ON",
                "Postal Code":"N9A 1R6",
                "Full Address":"1015 Highland Ave Windsor ON N9A 1R6 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -83.0397,42.30578 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"New Beginnings",
                "Unit Number":"",
                "Address_w":"1049 Janette Ave",
                "City":"Windsor",
                "Province":"ON",
                "Postal Code":"N9A 5A4",
                "Full Address":"1049 Janette Ave Windsor ON N9A 5A4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.4387,43.88154 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"360 Kids Support Services (Formerly Pathways)",
                "Unit Number":"C",
                "Address_w":"10415 Yonge St",
                "City":"Richmond Hill",
                "Province":"ON",
                "Postal Code":"L4C 0Z3",
                "Full Address":"10415 Yonge St Richmond Hill ON L4C 0Z3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -79.3659,44.31138 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"The Salvation Army Youth Shelter",
                "Unit Number":"",
                "Address_w":"20898 Dalton Rd",
                "City":"Sutton",
                "Province":"ON",
                "Postal Code":"L0E 1R0",
                "Full Address":"20898 Dalton Rd Sutton ON L0E 1R0 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -80.9998,46.49378 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Sudbury Action Centre for Youth",
                "Unit Number":"",
                "Address_w":"95 Pine St",
                "City":"Sudbury",
                "Province":"ON",
                "Postal Code":"P3C 1W9",
                "Full Address":"95 Pine St Sudbury ON P3C 1W9 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.3284,44.3076 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Peterborough Youth Services",
                "Unit Number":"",
                "Address_w":"459 Reid St",
                "City":"Peterborough",
                "Province":"ON",
                "Postal Code":"K9H 4G7",
                "Full Address":"459 Reid St Peterborough ON K9H 4G7 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -78.3219,44.30718 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"YES Shelter for Youth and Families",
                "Unit Number":"",
                "Address_w":"196 Brock St",
                "City":"Peterborough",
                "Province":"ON",
                "Postal Code":"K9H 2P4",
                "Full Address":"196 Brock St Peterborough ON K9H 2P4 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -76.5086,44.25873 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Pathways for Children and Youth",
                "Unit Number":"100",
                "Address_w":"31 Hyperion Court",
                "City":"Kingston",
                "Province":"ON",
                "Postal Code":"K7K 7G3",
                "Full Address":"31 Hyperion Court Kingston ON K7K 7G3 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":  [ -76.4846,44.23924 ]
            },
            "properties": {
                "FundProgram":"YOW",
                "FY":"FY201617",
                "Org_Name":"Youth Diversion Kingston",
                "Unit Number":"",
                "Address_w":"559 Bagot St",
                "City":"Kingston",
                "Province":"ON",
                "Postal Code":"K7K 3E1",
                "Full Address":"559 Bagot St Kingston ON K7K 3E1 ",
                "Amount_Applied":null,
                "Amount_Awarded":null,
                "Timeline(m)":null,
                "Proj_Desc":"",
                "Budget_Fund":"",
                "Targ_Pop":"",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Grant_Outcome":"",
                "Service Type":"Service Navigation"
            }
        }
    ]
};
var map = new mapboxgl.Map( {
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/light-v8', //stylesheet location
  center: [ -79.38, 43.6532 ], // starting position
  zoom: 14 // starting zoom
} );

map.on( 'load', function() {
  map.addSource( "places", {
      "type": "geojson",
      "data": "data/convertcsv.geojson"

  } );

    places.features.forEach( function( feature ) {
    var symbol = feature.properties[ 'FundProgram' ];
    var layerID = 'poi-' + symbol;

    if ( !map.getLayer( layerID ) ) {

      map.addLayer({
        "id": layerID,
        "type": "symbol",
        "source": "places",
        "layout": {
          "icon-image": "circle-11",
          'visibility': 'visible'
        },
        "filter": ["==", "FundProgram", symbol]
      });


      // Add checkbox and label elements for the layer.
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.id = layerID;
      input.checked = true;
      filterGroup.appendChild(input);
      // When the checkbox changes, update the visibility of the layer.


      var label = document.createElement('label');
      label.setAttribute('for', layerID);
      label.textContent = symbol;
      filterGroup.appendChild(label);

      input.addEventListener('change', function (e) {
        map.setLayoutProperty(layerID, 'visibility',
            e.target.checked ? 'visible' : 'none');

      });


      map.on('click', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['layerID']
        });
        var feature = features[0];

        var popup = new mapboxgl.Popup({
          anchor: 'top'
        })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('<h3>' + "Funding Program: " + feature.properties.FundProgram + '</h3>' +
                '<li>' + '<b>Organization name </b>' + feature.properties.Org_Name + '</li>' +
                '<li>' + '<b>City Served </b>' + feature.properties.City + '</li>' +
                '<li>' + '<b>Funding Year </b>' + feature.properties.FY + '</li>'
            )
            .addTo(map);
      });


      map.on('mousemove', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['layerID']
        });
        map.getCanvas().style.cursor = ( features.length ) ? 'pointer' : '';

      });


    }

    });
    map.addControl(new mapboxgl.Geocoder());

});


