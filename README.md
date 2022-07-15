# Sofascore APIs
This section document describe the APIs from [sofascore](http://sofascore.com).
Sofascore has a lot of data and in play statistics we will try to document here.


## sports







## leagues


## top leagues
https://www.sofascore.com/esi/top-leagues/football/GB?_=158169172

Response:
```json
{
   "sport":{
      "name":"Football",
      "slug":"football",
      "id":1
   },
   "leagues":[
      {
         "name":"LaLiga",
         "slug":"laliga",
         "category":{
            "name":"Spain",
            "slug":"spain",
            "priority":9,
            "id":32,
            "flag":"spain"
         },
         "id":8
      },
   ]
}
```

## seasons

This API returns an HTML response that will need to be parsed

https://www.sofascore.com/tournament/football/spain/laliga/8

HTML Response

```html
<div class="cell__content u-pos-absolute u-show-overflow">
    <div class="dropdown-wrapper">
        <div class="dropdown dropdown-select">
            <button type="button" class="btn dropdown__toggle dropdown__toggle--compact" data-toggle="dropdown">
                <span class="dropdown-label">
                    19/20
                </span>
                <span class="caret-dropdown theme-color"></span>                                        
            </button>
            <ul class="dropdown-menu dropdown__menu dropdown__menu--compact dropdown__menu--scroll js-uniqueTournament-page-seasons-select" role="menu">
                <li class="dropdown__item active">
                    <a class="pointer js-uniqueTournament-page-load-season"
                        data-uniqueTournament-id="8"
                        data-season-id="24127">19/20</a>
                </li>
                <li class="dropdown__item ">
                    <a class="pointer js-uniqueTournament-page-load-season"
                        data-uniqueTournament-id="8"
                        data-season-id="18020">18/19</a>
                </li>
            </ul>
        </div>
</div> 
```

## league details

https://www.sofascore.com/u-tournament/8/season/24127/json?_=158169933

```json
{
   "roundMatches":{
      "data":{
         "index":"25",
         "roundName":null
      },
      "tournaments":[
         {
            "tournament":{
               "name":"LaLiga",
               "slug":"laliga",
               "id":36,
               "uniqueId":8,
               "uniqueName":"LaLiga",
               "hasEventPlayerStatistics":true,
               "hasEventPlayerHeatMap":false
            },
            "category":{
               "name":"Spain",
               "slug":"spain",
               "priority":9,
               "id":32,
               "flag":"spain"
            },
            "season":{
               "name":"LaLiga 19\/20",
               "slug":"laliga-1920",
               "year":"19\/20",
               "id":24127
            },
            "hasEventPlayerStatistics":true,
            "hasEventPlayerHeatMap":false,
            "hasBoxScore":null,
            "events":[
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"qgbsBgb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Real Betis",
                     "slug":"real-betis",
                     "gender":"M",
                     "national":false,
                     "id":2816,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"RCD Mallorca",
                     "slug":"rcd-mallorca",
                     "gender":"M",
                     "national":false,
                     "id":2826,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280941,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Real Betis - RCD Mallorca",
                  "startTime":"20:00",
                  "formatedStartDate":"21.02.2020.",
                  "startTimestamp":1582315200,
                  "slug":"rcd-mallorca-real-betis",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"wgbsVgb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Celta Vigo",
                     "slug":"celta-vigo",
                     "gender":"M",
                     "national":false,
                     "id":2821,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Legan\u00e9s",
                     "slug":"leganes",
                     "gender":"M",
                     "national":false,
                     "id":2845,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280939,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Celta Vigo - Legan\u00e9s",
                  "startTime":"12:00",
                  "formatedStartDate":"22.02.2020.",
                  "startTimestamp":1582372800,
                  "slug":"leganes-celta-vigo",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"rgbsOgb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Barcelona",
                     "slug":"barcelona",
                     "gender":"M",
                     "disabled":false,
                     "national":false,
                     "id":2817,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Eibar",
                     "slug":"eibar",
                     "gender":"M",
                     "national":false,
                     "id":2839,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280937,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Barcelona - Eibar",
                  "startTime":"15:00",
                  "formatedStartDate":"22.02.2020.",
                  "startTimestamp":1582383600,
                  "slug":"eibar-barcelona",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"zgbsDgb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Real Sociedad",
                     "slug":"real-sociedad",
                     "gender":"M",
                     "national":false,
                     "id":2824,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Valencia",
                     "slug":"valencia",
                     "gender":"M",
                     "national":false,
                     "id":2828,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280932,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Real Sociedad - Valencia",
                  "startTime":"17:30",
                  "formatedStartDate":"22.02.2020.",
                  "startTimestamp":1582392600,
                  "slug":"valencia-real-sociedad",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"EgbsZgb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Levante",
                     "slug":"levante",
                     "gender":"M",
                     "national":false,
                     "id":2849,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Real Madrid",
                     "slug":"real-madrid",
                     "gender":"M",
                     "national":false,
                     "id":2829,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280933,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Levante - Real Madrid",
                  "startTime":"20:00",
                  "formatedStartDate":"22.02.2020.",
                  "startTimestamp":1582401600,
                  "slug":"levante-real-madrid",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"vgbsEAn",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Osasuna",
                     "slug":"osasuna",
                     "gender":"M",
                     "national":false,
                     "id":2820,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Granada",
                     "slug":"granada",
                     "gender":"M",
                     "disabled":false,
                     "national":false,
                     "id":33779,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280931,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Osasuna - Granada",
                  "startTime":"11:00",
                  "formatedStartDate":"23.02.2020.",
                  "startTimestamp":1582455600,
                  "slug":"granada-osasuna",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"AgbsKhb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Deportivo Alav\u00e9s",
                     "slug":"deportivo-alaves",
                     "gender":"M",
                     "national":false,
                     "id":2885,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Athletic Bilbao",
                     "slug":"athletic-bilbao",
                     "gender":"M",
                     "national":false,
                     "id":2825,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280910,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Deportivo Alav\u00e9s - Athletic Bilbao",
                  "startTime":"13:00",
                  "formatedStartDate":"23.02.2020.",
                  "startTimestamp":1582462800,
                  "slug":"deportivo-alaves-athletic-bilbao",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"ogbsGgb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Real Valladolid",
                     "slug":"real-valladolid",
                     "gender":"M",
                     "national":false,
                     "id":2831,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Espanyol",
                     "slug":"espanyol",
                     "gender":"M",
                     "disabled":false,
                     "national":false,
                     "id":2814,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280930,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Real Valladolid - Espanyol",
                  "startTime":"15:00",
                  "formatedStartDate":"23.02.2020.",
                  "startTimestamp":1582470000,
                  "slug":"real-valladolid-espanyol",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"Igbsjhb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Getafe",
                     "slug":"getafe",
                     "gender":"M",
                     "national":false,
                     "id":2859,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Sevilla",
                     "slug":"sevilla",
                     "gender":"M",
                     "disabled":false,
                     "national":false,
                     "id":2833,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280934,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Getafe - Sevilla",
                  "startTime":"17:30",
                  "formatedStartDate":"23.02.2020.",
                  "startTimestamp":1582479000,
                  "slug":"getafe-sevilla",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               },
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":25
                  },
                  "customId":"ugbsLgb",
                  "status":{
                     "code":0,
                     "type":"notstarted"
                  },
                  "homeTeam":{
                     "name":"Atl\u00e9tico Madrid",
                     "slug":"atletico-madrid",
                     "gender":"M",
                     "national":false,
                     "id":2836,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Villarreal",
                     "slug":"villarreal",
                     "gender":"M",
                     "national":false,
                     "id":2819,
                     "subTeams":[

                     ]
                  },
                  "homeScore":[

                  ],
                  "awayScore":[

                  ],
                  "time":[

                  ],
                  "changes":{
                     "changeTimestamp":0,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":false,
                  "id":8280938,
                  "statusDescription":"-",
                  "hasLiveForm":false,
                  "name":"Atl\u00e9tico Madrid - Villarreal",
                  "startTime":"20:00",
                  "formatedStartDate":"23.02.2020.",
                  "startTimestamp":1582488000,
                  "slug":"atletico-madrid-villarreal",
                  "uniqueTournamentId":8,
                  "hasLineups":false,
                  "hasLineupsList":false,
                  "hasStatistics":false,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":true,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":false
               }
            ]
         }
      ],
      "sport":{
         "name":"Football",
         "slug":"football",
         "id":1
      }
   }
}
```

## rounds

The number of rounds is given by the league details. We can count on the number of array elements, or simple get the last one and check the round element.

```json
{
  ...
      
        "rounds":[
         {
            "round":1,
            "name":null,
            "prefix":null,
            "round_start":"2019-08-16 19:00:00"
         },
        ...
      ],

  ...
}
```

## games per round

```json
{
   "roundMatches":{
      "data":{
         "index":"1",
         "roundName":null
      },
      "tournaments":[
         {
            "tournament":{
               "name":"LaLiga",
               "slug":"laliga",
               "id":36,
               "uniqueId":8,
               "uniqueName":"LaLiga",
               "hasEventPlayerStatistics":true,
               "hasEventPlayerHeatMap":false
            },
            "category":{
               "name":"Spain",
               "slug":"spain",
               "priority":9,
               "id":32,
               "flag":"spain"
            },
            "season":{
               "name":"LaLiga 19\/20",
               "slug":"laliga-1920",
               "year":"19\/20",
               "id":24127
            },
            "hasEventPlayerStatistics":true,
            "hasEventPlayerHeatMap":false,
            "hasBoxScore":null,
            "events":[
               {
                  "sport":{
                     "name":"Football",
                     "slug":"football",
                     "id":1
                  },
                  "roundInfo":{
                     "round":1
                  },
                  "customId":"rgbsAgb",
                  "status":{
                     "code":100,
                     "type":"finished"
                  },
                  "winnerCode":1,
                  "homeTeam":{
                     "name":"Athletic Bilbao",
                     "slug":"athletic-bilbao",
                     "gender":"M",
                     "national":false,
                     "id":2825,
                     "subTeams":[

                     ]
                  },
                  "awayTeam":{
                     "name":"Barcelona",
                     "slug":"barcelona",
                     "gender":"M",
                     "disabled":false,
                     "national":false,
                     "id":2817,
                     "subTeams":[

                     ]
                  },
                  "homeScore":{
                     "current":1,
                     "display":1,
                     "period1":0,
                     "period2":1,
                     "normaltime":1
                  },
                  "awayScore":{
                     "current":0,
                     "display":0,
                     "period1":0,
                     "period2":0,
                     "normaltime":0
                  },
                  "time":[

                  ],
                  "changes":{
                     "changeDate":"2019-08-16T20:52:35+00:00",
                     "changes":[
                        "status.code",
                        "status.description",
                        "status.type",
                        "homeScore.normaltime",
                        "awayScore.normaltime"
                     ],
                     "changeTimestamp":1565988755,
                     "hasExpired":true,
                     "hasHomeChanges":false,
                     "hasAwayChanges":false
                  },
                  "hasHighlights":false,
                  "hasHighlightsStream":false,
                  "hasGlobalHighlights":true,
                  "hasEventPlayerStatistics":true,
                  "hasEventPlayerHeatMap":true,
                  "id":8280661,
                  "statusDescription":"FT",
                  "hasLiveForm":true,
                  "name":"Athletic Bilbao - Barcelona",
                  "startTime":"19:00",
                  "formatedStartDate":"16.08.2019.",
                  "startTimestamp":1565982000,
                  "slug":"athletic-bilbao-barcelona",
                  "uniqueTournamentId":8,
                  "hasLineups":true,
                  "hasLineupsList":true,
                  "hasStatistics":true,
                  "hasSubScore":false,
                  "hasAggregatedScore":false,
                  "hasFirstToServe":false,
                  "hasDraw":true,
                  "votingEnabled":false,
                  "hasTime":false,
                  "isSyncable":true,
                  "confirmedLineups":true
               },
               
               ...
            ]
         }
      ],
      "sport":{
         "name":"Football",
         "slug":"football",
         "id":1
      }
   }
}
```


## game statictics

https://www.sofascore.com/event/8280668/json?_=158170189


```json
{
   "event":{
      "sport":{
         "name":"Football",
         "slug":"football",
         "id":1
      },
      "category":{
         "name":"Spain",
         "slug":"spain",
         "priority":9,
         "id":32,
         "flag":"spain"
      },
      "tournament":{
         "name":"LaLiga",
         "slug":"laliga",
         "id":36,
         "uniqueId":8,
         "uniqueName":"LaLiga",
         "hasEventPlayerStatistics":true,
         "hasEventPlayerHeatMap":false
      },
      "season":{
         "name":"LaLiga 19\/20",
         "slug":"laliga-1920",
         "year":"19\/20",
         "id":24127
      },
      "roundInfo":{
         "round":1
      },
      "customId":"wgbsEgb",
      "status":{
         "code":100,
         "description":"Ended",
         "type":"finished"
      },
      "winnerCode":2,
      "attendance":23614,
      "venue":{
         "city":{
            "name":"Vigo"
         },
         "stadium":{
            "name":"Municipal de Bala\u00eddos",
            "capacity":29000
         },
         "id":697,
         "hasImage":false,
         "country":{
            "name":"Spain",
            "flag":"spain"
         }
      },
      "referee":{
         "name":"Javier Estrada Fernandez",
         "id":70254,
         "yellowCardsPerGame":"5.38",
         "redCardsPerGame":"0.23",
         "country":{
            "name":"Spain",
            "flag":"spain"
         }
      },
      "homeTeam":{
         "name":"Celta Vigo",
         "slug":"celta-vigo",
         "gender":"M",
         "national":false,
         "id":2821,
         "shortName":"Celta",
         "subTeams":[

         ]
      },
      "awayTeam":{
         "name":"Real Madrid",
         "slug":"real-madrid",
         "gender":"M",
         "national":false,
         "id":2829,
         "shortName":"Real Madrid",
         "subTeams":[

         ]
      },
      "homeScore":{
         "current":1,
         "display":1,
         "period1":0,
         "period2":1,
         "normaltime":1
      },
      "awayScore":{
         "current":3,
         "display":3,
         "period1":1,
         "period2":2,
         "normaltime":3
      },
      "time":{
         "currentFormated":"",
         "overtimeFormated":"",
         "penaltiesFormated":"",
         "period1Formated":"",
         "period2Formated":"",
         "period3Formated":"",
         "period4Formated":"",
         "period5Formated":""
      },
      "changes":{
         "changeDate":"2019-08-17T16:55:01+00:00",
         "changes":[
            "status.code",
            "status.description",
            "status.type",
            "homeScore.normaltime",
            "awayScore.normaltime"
         ],
         "changeTimestamp":1566060901,
         "hasExpired":true,
         "hasHomeChanges":false,
         "hasAwayChanges":false
      },
      "hasLineups":true,
      "hasHighlights":false,
      "hasHighlightsStream":false,
      "hasGlobalHighlights":true,
      "hasEventPlayerStatistics":true,
      "detailId":1,
      "bestHomeTeamPlayer":{
         "player":{
            "id":180515,
            "name":"Rub\u00e9n Blanco",
            "shortName":"R. Blanco"
         },
         "value":"7.5"
      },
      "bestAwayTeamPlayer":{
         "player":{
            "id":3306,
            "name":"Karim Benzema",
            "shortName":"K. Benzema"
         },
         "value":"8.6"
      },
      "id":8280668,
      "awayRedCards":1,
      "statusDescription":"FT",
      "hasLiveForm":true,
      "hasHalfTimeScore":true,
      "name":"Celta Vigo - Real Madrid",
      "startTime":"15:00",
      "formatedStartDate":"17.08.2019.",
      "startTimestamp":1566054000,
      "slug":"real-madrid-celta-vigo",
      "hasLineupsList":true,
      "hasStatistics":true,
      "hasVenue":true,
      "hasSubScore":false,
      "hasAggregatedScore":false,
      "hasFirstToServe":false,
      "hasDraw":true,
      "votingEnabled":false,
      "hasTime":false,
      "isSyncable":true,
      "hasBet365LiveStream":true,
      "bet365ExcludedCountryCodes":[
         "AD",
         "AE",
         "BH",
         "DZ",
         "EG",
         "EH",
         "ES",
         "IL",
         "IQ",
         "IR",
         "JO",
         "KW",
         "LB",
         "LY",
         "MA",
         "OM",
         "PS",
         "QA",
         "SA",
         "SD",
         "SY",
         "TN",
         "UM",
         "US",
         "VI",
         "YE"
      ],
      "bet365AvailableCountriesNumber":79,
      "showEventNote":false,
      "confirmedLineups":true
   },
   "matchInfo":{
      "head2head":[
         {
            "name":"Wins",
            "team":"away",
            "value":3,
            "continued":true
         },
         {
            "name":"No losses",
            "team":"away",
            "value":6,
            "continued":true
         },
         {
            "name":"Without clean sheet",
            "team":"home",
            "value":12,
            "continued":true
         },
         {
            "name":"More than 2.5 goals",
            "team":"both",
            "value":9,
            "outOf":10,
            "continued":true
         },
         {
            "name":"Both teams scoring",
            "team":"both",
            "value":8,
            "outOf":10,
            "continued":true
         },
         {
            "name":"First to score",
            "team":"away",
            "value":4,
            "outOf":5,
            "continued":true
         },
         {
            "name":"First half winner",
            "team":"away",
            "value":4,
            "outOf":5,
            "continued":true
         }
      ],
      "general":[
         {
            "name":"More than 2.5 goals",
            "team":"both",
            "value":5,
            "outOf":7,
            "continued":true
         },
         {
            "name":"Both teams scoring",
            "team":"away",
            "value":5,
            "outOf":7,
            "continued":true
         },
         {
            "name":"First to concede",
            "team":"away",
            "value":6,
            "outOf":8,
            "continued":false
         }
      ]
   },
   "teamsForm":null,
   "winningOdds":{
      "home":{
         "fractionalValue":"17\/4",
         "expected":19,
         "actual":20,
         "decimalValue":"5.25",
         "americanValue":"425"
      },
      "away":{
         "fractionalValue":"57\/100",
         "expected":64,
         "actual":56,
         "decimalValue":"1.57",
         "americanValue":"-175"
      }
   },
   "incidents":[
      {
         "text":"FT 1 - 3",
         "time":90,
         "incidentType":"period",
         "incidentDescription":"Period",
         "incidentClass":"period",
         "timeSpecial":90
      },
      {
         "homeScore":1,
         "awayScore":3,
         "player":{
            "name":"Iker Losada",
            "slug":"iker-losada",
            "shortName":"I. Losada",
            "id":992331
         },
         "assist1":{
            "name":"Pape Cheikh",
            "slug":"pape-cheikh",
            "shortName":"P. Cheikh",
            "id":826551
         },
         "scoringTeam":1,
         "id":"126336459",
         "time":90,
         "addedTime":1,
         "playerTeam":1,
         "incidentType":"goal",
         "isHome":true,
         "incidentDescription":"Goal",
         "incidentClass":"regulargoal",
         "timeSpecial":90
      },
      {
         "length":4,
         "time":90,
         "text":"Injury time 4'",
         "incidentType":"injuryTime",
         "isHome":true,
         "incidentDescription":"Injury time",
         "incidentClass":"injuryTime",
         "timeSpecial":90
      },
      {
         "playerIn":{
            "name":"Iker Losada",
            "slug":"iker-losada",
            "shortName":"I. Losada",
            "id":992331
         },
         "playerOut":{
            "name":"Gabriel Fern\u00e1ndez",
            "slug":"gabriel-fernandez",
            "shortName":"G. Fern\u00e1ndez",
            "id":922896
         },
         "playerTeam":1,
         "id":"119365270",
         "time":88,
         "incidentType":"substitution",
         "isHome":true,
         "incidentDescription":"Substitution",
         "incidentClass":"substitutionin",
         "timeSpecial":88
      },
      {
         "type":"Yellow",
         "player":{
            "name":"Pape Cheikh",
            "slug":"pape-cheikh",
            "shortName":"P. Cheikh",
            "id":826551
         },
         "playerTeam":1,
         "reason":"Argument",
         "id":"119265788",
         "time":86,
         "reasonTranslationKey":"incident_card_reason_argument",
         "incidentType":"card",
         "isHome":true,
         "incidentDescription":"Yellow card",
         "incidentClass":"yellowcard",
         "timeSpecial":86
      },
      {
         "playerIn":{
            "name":"Pape Cheikh",
            "slug":"pape-cheikh",
            "shortName":"P. Cheikh",
            "id":826551
         },
         "playerOut":{
            "name":"Fran Beltran",
            "slug":"fran-beltran",
            "shortName":"F. Beltran",
            "id":835484
         },
         "playerTeam":1,
         "id":"119365269",
         "time":83,
         "incidentType":"substitution",
         "isHome":true,
         "incidentDescription":"Substitution",
         "incidentClass":"substitutionin",
         "timeSpecial":83
      },
      {
         "playerIn":{
            "name":"Luka Jovi\u0107",
            "slug":"luka-jovic",
            "shortName":"L. Jovi\u0107",
            "id":319129
         },
         "playerOut":{
            "name":"Karim Benzema",
            "slug":"karim-benzema",
            "shortName":"K. Benzema",
            "id":3306
         },
         "playerTeam":2,
         "id":"119365273",
         "time":81,
         "incidentType":"substitution",
         "isHome":false,
         "incidentDescription":"Substitution",
         "incidentClass":"substitutionin",
         "timeSpecial":81
      },
      {
         "homeScore":0,
         "awayScore":3,
         "player":{
            "name":"Lucas V\u00e1zquez",
            "slug":"lucas-vazquez",
            "shortName":"L. V\u00e1zquez",
            "id":255239
         },
         "assist1":{
            "name":"Karim Benzema",
            "slug":"karim-benzema",
            "shortName":"K. Benzema",
            "id":3306
         },
         "scoringTeam":2,
         "id":"126336462",
         "time":80,
         "playerTeam":2,
         "incidentType":"goal",
         "isHome":false,
         "incidentDescription":"Goal",
         "incidentClass":"regulargoal",
         "timeSpecial":80
      },
      {
         "playerIn":{
            "name":"Isco",
            "slug":"isco",
            "shortName":"Isco",
            "id":103417
         },
         "playerOut":{
            "name":"Gareth Bale",
            "slug":"gareth-bale",
            "shortName":"G. Bale",
            "id":15354
         },
         "playerTeam":2,
         "id":"119365272",
         "time":75,
         "incidentType":"substitution",
         "isHome":false,
         "incidentDescription":"Substitution",
         "incidentClass":"substitutionin",
         "timeSpecial":75
      },
      {
         "playerIn":{
            "name":"Pione Sisto",
            "slug":"pione-sisto",
            "shortName":"P. Sisto",
            "id":287943
         },
         "playerOut":{
            "name":"Stanislav Lobotka",
            "slug":"stanislav-lobotka",
            "shortName":"S. Lobotka",
            "id":150383
         },
         "playerTeam":1,
         "id":"119365268",
         "time":75,
         "incidentType":"substitution",
         "isHome":true,
         "incidentDescription":"Substitution",
         "incidentClass":"substitutionin",
         "timeSpecial":75
      },
      {
         "type":"Yellow",
         "player":{
            "name":"David Costas",
            "slug":"david-costas",
            "shortName":"D. Costas",
            "id":345333
         },
         "playerTeam":1,
         "reason":"Foul",
         "id":"119265560",
         "time":74,
         "reasonTranslationKey":"incident_card_reason_foul",
         "incidentType":"card",
         "isHome":true,
         "incidentDescription":"Yellow card",
         "incidentClass":"yellowcard",
         "timeSpecial":74
      },
      {
         "playerIn":{
            "name":"Lucas V\u00e1zquez",
            "slug":"lucas-vazquez",
            "shortName":"L. V\u00e1zquez",
            "id":255239
         },
         "playerOut":{
            "name":"Vin\u00edcius J\u00fanior",
            "slug":"vinicius-junior",
            "shortName":"V. J\u00fanior",
            "id":868812
         },
         "playerTeam":2,
         "id":"119365271",
         "time":69,
         "incidentType":"substitution",
         "isHome":false,
         "incidentDescription":"Substitution",
         "incidentClass":"substitutionin",
         "timeSpecial":69
      },
      {
         "type":"Yellow",
         "player":{
            "name":"\u00c1lvaro Odriozola",
            "slug":"alvaro-odriozola",
            "shortName":"\u00c1. Odriozola",
            "id":353250
         },
         "playerTeam":2,
         "reason":"Time wasting",
         "id":"119265563",
         "time":64,
         "reasonTranslationKey":"incident_card_reason_time_wasting",
         "incidentType":"card",
         "isHome":false,
         "incidentDescription":"Yellow card",
         "incidentClass":"yellowcard",
         "timeSpecial":64
      },
      {
         "homeScore":0,
         "awayScore":2,
         "player":{
            "name":"Toni Kroos",
            "slug":"toni-kroos",
            "shortName":"T. Kroos",
            "id":26502
         },
         "assist1":{
            "name":"Marcelo",
            "slug":"marcelo",
            "shortName":"Marcelo",
            "id":17787
         },
         "scoringTeam":2,
         "id":"126336461",
         "time":61,
         "playerTeam":2,
         "incidentType":"goal",
         "isHome":false,
         "incidentDescription":"Goal",
         "incidentClass":"regulargoal",
         "timeSpecial":61
      },
      {
         "type":"Red",
         "player":{
            "name":"Luka Modri\u0107",
            "slug":"luka-modric",
            "shortName":"L. Modri\u0107",
            "id":15466
         },
         "playerTeam":2,
         "reason":"Foul",
         "id":"119265562",
         "time":56,
         "reasonTranslationKey":"incident_card_reason_foul",
         "incidentType":"card",
         "isHome":false,
         "incidentDescription":"Red card",
         "incidentClass":"redcard",
         "timeSpecial":56
      },
      {
         "type":"Yellow",
         "player":{
            "name":"Gabriel Fern\u00e1ndez",
            "slug":"gabriel-fernandez",
            "shortName":"G. Fern\u00e1ndez",
            "id":922896
         },
         "playerTeam":1,
         "reason":"Foul",
         "id":"119265559",
         "time":49,
         "reasonTranslationKey":"incident_card_reason_foul",
         "incidentType":"card",
         "isHome":true,
         "incidentDescription":"Yellow card",
         "incidentClass":"yellowcard",
         "timeSpecial":49
      },
      {
         "text":"HT 0 - 1",
         "time":45,
         "incidentType":"period",
         "incidentDescription":"Period",
         "incidentClass":"period",
         "timeSpecial":45
      },
      {
         "length":1,
         "time":45,
         "text":"Injury time 1'",
         "incidentType":"injuryTime",
         "isHome":true,
         "incidentDescription":"Injury time",
         "incidentClass":"injuryTime",
         "timeSpecial":45
      },
      {
         "type":"Yellow",
         "player":{
            "name":"Vin\u00edcius J\u00fanior",
            "slug":"vinicius-junior",
            "shortName":"V. J\u00fanior",
            "id":868812
         },
         "playerTeam":2,
         "reason":"Foul",
         "id":"119265561",
         "time":36,
         "reasonTranslationKey":"incident_card_reason_foul",
         "incidentType":"card",
         "isHome":false,
         "incidentDescription":"Yellow card",
         "incidentClass":"yellowcard",
         "timeSpecial":36
      },
      {
         "homeScore":0,
         "awayScore":1,
         "player":{
            "name":"Karim Benzema",
            "slug":"karim-benzema",
            "shortName":"K. Benzema",
            "id":3306
         },
         "assist1":{
            "name":"Gareth Bale",
            "slug":"gareth-bale",
            "shortName":"G. Bale",
            "id":15354
         },
         "scoringTeam":2,
         "id":"126336460",
         "time":12,
         "playerTeam":2,
         "incidentType":"goal",
         "isHome":false,
         "incidentDescription":"Goal",
         "incidentClass":"regulargoal",
         "timeSpecial":12
      },
      {
         "type":"Yellow",
         "player":{
            "name":"Rub\u00e9n Blanco",
            "slug":"ruben-blanco",
            "shortName":"R. Blanco",
            "id":180515
         },
         "playerTeam":1,
         "reason":"Argument",
         "id":"119265558",
         "time":12,
         "reasonTranslationKey":"incident_card_reason_argument",
         "incidentType":"card",
         "isHome":true,
         "incidentDescription":"Yellow card",
         "incidentClass":"yellowcard",
         "timeSpecial":12
      },
      {
         "type":"Yellow",
         "player":{
            "name":"Denis Su\u00e1rez",
            "slug":"denis-suarez",
            "shortName":"D. Su\u00e1rez",
            "id":138383
         },
         "playerTeam":1,
         "reason":"Argument",
         "id":"119265557",
         "time":12,
         "reasonTranslationKey":"incident_card_reason_argument",
         "incidentType":"card",
         "isHome":true,
         "incidentDescription":"Yellow card",
         "incidentClass":"yellowcard",
         "timeSpecial":12
      },
      {
         "type":"Yellow",
         "player":{
            "name":"Kevin Vazquez",
            "slug":"kevin-vazquez",
            "shortName":"K. Vazquez",
            "id":795257
         },
         "playerTeam":1,
         "reason":"Foul",
         "id":"119265556",
         "time":7,
         "reasonTranslationKey":"incident_card_reason_foul",
         "incidentType":"card",
         "isHome":true,
         "incidentDescription":"Yellow card",
         "incidentClass":"yellowcard",
         "timeSpecial":7
      }
   ],
   "groupedIncidents":[

   ],
   "innings":null,
   "vote":{
      "vote1":11004,
      "vote2":52759,
      "voteX":10835,
      "vote1Percentage":"14.75",
      "voteXPercentage":"14.52",
      "vote2Percentage":"70.72",
      "vote1ScaledPercentage":20.86,
      "voteXScaledPercentage":20.54,
      "vote2ScaledPercentage":100
   },
   "highlights":[

   ],
   "statistics":{
      "periods":[
         {
            "period":"ALL",
            "groups":[
               {
                  "groupName":"Possession",
                  "statisticsItems":[
                     {
                        "name":"Ball possession",
                        "home":"56%",
                        "away":"44%",
                        "compareCode":1
                     }
                  ]
               },
               {
                  "groupName":"Shots",
                  "statisticsItems":[
                     {
                        "name":"Total shots",
                        "home":"7",
                        "away":"17",
                        "compareCode":2
                     },
                     {
                        "name":"Shots on target",
                        "home":"4",
                        "away":"11",
                        "compareCode":2
                     },
                     {
                        "name":"Shots off target",
                        "home":"2",
                        "away":"3",
                        "compareCode":2
                     },
                     {
                        "name":"Blocked shots",
                        "home":"1",
                        "away":"3",
                        "compareCode":2
                     }
                  ]
               },
               {
                  "groupName":"TVData",
                  "statisticsItems":[
                     {
                        "name":"Corner kicks",
                        "home":"6",
                        "away":"4",
                        "compareCode":1
                     },
                     {
                        "name":"Offsides",
                        "home":"5",
                        "away":"1",
                        "compareCode":1
                     },
                     {
                        "name":"Fouls",
                        "home":"17",
                        "away":"12",
                        "compareCode":1
                     },
                     {
                        "name":"Yellow cards",
                        "home":"6",
                        "away":"2",
                        "compareCode":1
                     },
                     {
                        "name":"Red cards",
                        "home":"0",
                        "away":"1",
                        "compareCode":2
                     }
                  ]
               },
               {
                  "groupName":"Shots extra",
                  "statisticsItems":[
                     {
                        "name":"Big chances",
                        "home":"5",
                        "away":"2",
                        "compareCode":1
                     },
                     {
                        "name":"Big chances missed",
                        "home":"4",
                        "away":"0",
                        "compareCode":1
                     },
                     {
                        "name":"Counter attacks",
                        "home":"3",
                        "away":"0",
                        "compareCode":1
                     },
                     {
                        "name":"Shots inside box",
                        "home":"5",
                        "away":"10",
                        "compareCode":2
                     },
                     {
                        "name":"Shots outside box",
                        "home":"2",
                        "away":"7",
                        "compareCode":2
                     },
                     {
                        "name":"Goalkeeper saves",
                        "home":"8",
                        "away":"2",
                        "compareCode":1
                     }
                  ]
               },
               {
                  "groupName":"Passes",
                  "statisticsItems":[
                     {
                        "name":"Passes",
                        "home":"521",
                        "away":"413",
                        "compareCode":1
                     },
                     {
                        "name":"Accurate passes",
                        "home":"462 (89%)",
                        "away":"348 (84%)",
                        "compareCode":1
                     },
                     {
                        "name":"Long balls",
                        "home":"18\/34 (53%)",
                        "away":"39\/65 (60%)",
                        "compareCode":2
                     },
                     {
                        "name":"Crosses",
                        "home":"5\/27 (19%)",
                        "away":"4\/11 (36%)",
                        "compareCode":1
                     }
                  ]
               },
               {
                  "groupName":"Duels",
                  "statisticsItems":[
                     {
                        "name":"Dribbles",
                        "home":"14\/22 (64%)",
                        "away":"11\/15 (73%)",
                        "compareCode":1
                     },
                     {
                        "name":"Possession lost",
                        "home":"115",
                        "away":"100",
                        "compareCode":1
                     },
                     {
                        "name":"Duels won",
                        "home":"44",
                        "away":"51",
                        "compareCode":2
                     },
                     {
                        "name":"Aerials won",
                        "home":"5",
                        "away":"13",
                        "compareCode":2
                     }
                  ]
               },
               {
                  "groupName":"Defending",
                  "statisticsItems":[
                     {
                        "name":"Tackles",
                        "home":"14",
                        "away":"13",
                        "compareCode":1
                     },
                     {
                        "name":"Interceptions",
                        "home":"7",
                        "away":"7",
                        "compareCode":3
                     },
                     {
                        "name":"Clearances",
                        "home":"5",
                        "away":"17",
                        "compareCode":2
                     }
                  ]
               }
            ]
         },
         {
            "period":"1ST",
            "groups":[
               {
                  "groupName":"Possession",
                  "statisticsItems":[
                     {
                        "name":"Ball possession",
                        "home":"58%",
                        "away":"42%",
                        "compareCode":1
                     }
                  ]
               },
               {
                  "groupName":"Shots",
                  "statisticsItems":[
                     {
                        "name":"Total shots",
                        "home":"1",
                        "away":"6",
                        "compareCode":2
                     },
                     {
                        "name":"Shots on target",
                        "home":"0",
                        "away":"5",
                        "compareCode":2
                     },
                     {
                        "name":"Shots off target",
                        "home":"1",
                        "away":"1",
                        "compareCode":3
                     },
                     {
                        "name":"Blocked shots",
                        "home":"0",
                        "away":"0",
                        "compareCode":3
                     }
                  ]
               },
               {
                  "groupName":"TVData",
                  "statisticsItems":[
                     {
                        "name":"Corner kicks",
                        "home":"2",
                        "away":"2",
                        "compareCode":3
                     },
                     {
                        "name":"Offsides",
                        "home":"2",
                        "away":"1",
                        "compareCode":1
                     },
                     {
                        "name":"Yellow cards",
                        "home":"3",
                        "away":"1",
                        "compareCode":1
                     },
                     {
                        "name":"Red cards",
                        "home":"0",
                        "away":"0",
                        "compareCode":3
                     }
                  ]
               },
               {
                  "groupName":"Shots extra",
                  "statisticsItems":[
                     {
                        "name":"Big chances",
                        "home":"1",
                        "away":"1",
                        "compareCode":3
                     },
                     {
                        "name":"Big chances missed",
                        "home":"1",
                        "away":"0",
                        "compareCode":1
                     },
                     {
                        "name":"Counter attacks",
                        "home":"0",
                        "away":"0",
                        "compareCode":3
                     },
                     {
                        "name":"Shots inside box",
                        "home":"1",
                        "away":"4",
                        "compareCode":2
                     },
                     {
                        "name":"Shots outside box",
                        "home":"0",
                        "away":"2",
                        "compareCode":2
                     },
                     {
                        "name":"Goalkeeper saves",
                        "home":"4",
                        "away":"0",
                        "compareCode":1
                     }
                  ]
               },
               {
                  "groupName":"Passes",
                  "statisticsItems":[
                     {
                        "name":"Passes",
                        "home":"294",
                        "away":"209",
                        "compareCode":1
                     },
                     {
                        "name":"Accurate passes",
                        "home":"257 (87%)",
                        "away":"179 (86%)",
                        "compareCode":1
                     },
                     {
                        "name":"Long balls",
                        "home":"14\/24 (58%)",
                        "away":"22\/34 (65%)",
                        "compareCode":2
                     },
                     {
                        "name":"Crosses",
                        "home":"1\/9 (11%)",
                        "away":"1\/5 (20%)",
                        "compareCode":3
                     }
                  ]
               },
               {
                  "groupName":"Duels",
                  "statisticsItems":[
                     {
                        "name":"Dribbles",
                        "home":"9\/10 (90%)",
                        "away":"4\/5 (80%)",
                        "compareCode":1
                     },
                     {
                        "name":"Duels won",
                        "home":"26",
                        "away":"17",
                        "compareCode":1
                     },
                     {
                        "name":"Aerials won",
                        "home":"3",
                        "away":"3",
                        "compareCode":3
                     }
                  ]
               },
               {
                  "groupName":"Defending",
                  "statisticsItems":[
                     {
                        "name":"Tackles",
                        "home":"8",
                        "away":"6",
                        "compareCode":1
                     },
                     {
                        "name":"Interceptions",
                        "home":"4",
                        "away":"2",
                        "compareCode":1
                     },
                     {
                        "name":"Clearances",
                        "home":"2",
                        "away":"7",
                        "compareCode":2
                     }
                  ]
               }
            ]
         },
         {
            "period":"2ND",
            "groups":[
               {
                  "groupName":"Possession",
                  "statisticsItems":[
                     {
                        "name":"Ball possession",
                        "home":"54%",
                        "away":"46%",
                        "compareCode":1
                     }
                  ]
               },
               {
                  "groupName":"Shots",
                  "statisticsItems":[
                     {
                        "name":"Total shots",
                        "home":"6",
                        "away":"11",
                        "compareCode":2
                     },
                     {
                        "name":"Shots on target",
                        "home":"4",
                        "away":"6",
                        "compareCode":2
                     },
                     {
                        "name":"Shots off target",
                        "home":"1",
                        "away":"2",
                        "compareCode":2
                     },
                     {
                        "name":"Blocked shots",
                        "home":"1",
                        "away":"3",
                        "compareCode":2
                     }
                  ]
               },
               {
                  "groupName":"TVData",
                  "statisticsItems":[
                     {
                        "name":"Corner kicks",
                        "home":"4",
                        "away":"2",
                        "compareCode":1
                     },
                     {
                        "name":"Offsides",
                        "home":"3",
                        "away":"0",
                        "compareCode":1
                     },
                     {
                        "name":"Yellow cards",
                        "home":"3",
                        "away":"1",
                        "compareCode":1
                     },
                     {
                        "name":"Red cards",
                        "home":"0",
                        "away":"1",
                        "compareCode":2
                     }
                  ]
               },
               {
                  "groupName":"Shots extra",
                  "statisticsItems":[
                     {
                        "name":"Big chances",
                        "home":"4",
                        "away":"1",
                        "compareCode":1
                     },
                     {
                        "name":"Big chances missed",
                        "home":"3",
                        "away":"0",
                        "compareCode":1
                     },
                     {
                        "name":"Counter attacks",
                        "home":"3",
                        "away":"0",
                        "compareCode":1
                     },
                     {
                        "name":"Shots inside box",
                        "home":"4",
                        "away":"6",
                        "compareCode":2
                     },
                     {
                        "name":"Shots outside box",
                        "home":"2",
                        "away":"5",
                        "compareCode":2
                     },
                     {
                        "name":"Goalkeeper saves",
                        "home":"4",
                        "away":"2",
                        "compareCode":1
                     }
                  ]
               },
               {
                  "groupName":"Passes",
                  "statisticsItems":[
                     {
                        "name":"Passes",
                        "home":"227",
                        "away":"204",
                        "compareCode":1
                     },
                     {
                        "name":"Accurate passes",
                        "home":"205 (90%)",
                        "away":"169 (83%)",
                        "compareCode":1
                     },
                     {
                        "name":"Long balls",
                        "home":"4\/10 (40%)",
                        "away":"17\/31 (55%)",
                        "compareCode":2
                     },
                     {
                        "name":"Crosses",
                        "home":"4\/18 (22%)",
                        "away":"3\/6 (50%)",
                        "compareCode":1
                     }
                  ]
               },
               {
                  "groupName":"Duels",
                  "statisticsItems":[
                     {
                        "name":"Dribbles",
                        "home":"5\/12 (42%)",
                        "away":"7\/10 (70%)",
                        "compareCode":2
                     },
                     {
                        "name":"Duels won",
                        "home":"18",
                        "away":"34",
                        "compareCode":2
                     },
                     {
                        "name":"Aerials won",
                        "home":"2",
                        "away":"10",
                        "compareCode":2
                     }
                  ]
               },
               {
                  "groupName":"Defending",
                  "statisticsItems":[
                     {
                        "name":"Tackles",
                        "home":"6",
                        "away":"7",
                        "compareCode":2
                     },
                     {
                        "name":"Interceptions",
                        "home":"3",
                        "away":"5",
                        "compareCode":2
                     },
                     {
                        "name":"Clearances",
                        "home":"3",
                        "away":"10",
                        "compareCode":2
                     }
                  ]
               }
            ]
         }
      ]
   },
   "liveForm":[
      {
         "minute":1,
         "value":10
      },
      {
         "minute":2,
         "value":8
      },
      {
         "minute":3,
         "value":18
      },
      {
         "minute":4,
         "value":27
      },
      {
         "minute":5,
         "value":19
      },
      {
         "minute":6,
         "value":11
      },
      {
         "minute":7,
         "value":-7
      },
      {
         "minute":8,
         "value":-1
      },
      {
         "minute":9,
         "value":-10
      },
      {
         "minute":10,
         "value":-19
      },
      {
         "minute":11,
         "value":-14
      },
      {
         "minute":12,
         "value":-8
      },
      {
         "minute":13,
         "value":-65
      },
      {
         "minute":14,
         "value":-33
      },
      {
         "minute":15,
         "value":-34
      },
      {
         "minute":16,
         "value":37
      },
      {
         "minute":17,
         "value":9
      },
      {
         "minute":18,
         "value":8
      },
      {
         "minute":19,
         "value":2
      },
      {
         "minute":20,
         "value":1
      },
      {
         "minute":21,
         "value":-5
      },
      {
         "minute":22,
         "value":-12
      },
      {
         "minute":23,
         "value":-8
      },
      {
         "minute":24,
         "value":14
      },
      {
         "minute":25,
         "value":14
      },
      {
         "minute":26,
         "value":16
      },
      {
         "minute":27,
         "value":18
      },
      {
         "minute":28,
         "value":20
      },
      {
         "minute":29,
         "value":17
      },
      {
         "minute":30,
         "value":10
      },
      {
         "minute":31,
         "value":5
      },
      {
         "minute":32,
         "value":7
      },
      {
         "minute":33,
         "value":48
      },
      {
         "minute":34,
         "value":20
      },
      {
         "minute":35,
         "value":12
      },
      {
         "minute":36,
         "value":-29
      },
      {
         "minute":37,
         "value":-21
      },
      {
         "minute":38,
         "value":-9
      },
      {
         "minute":39,
         "value":11
      },
      {
         "minute":40,
         "value":-12
      },
      {
         "minute":41,
         "value":-9
      },
      {
         "minute":42,
         "value":-11
      },
      {
         "minute":43,
         "value":-33
      },
      {
         "minute":44,
         "value":-3
      },
      {
         "minute":45,
         "value":-4
      },
      {
         "minute":45.5,
         "value":-28
      },
      {
         "minute":46,
         "value":-13
      },
      {
         "minute":47,
         "value":-40
      },
      {
         "minute":48,
         "value":-18
      },
      {
         "minute":49,
         "value":-8
      },
      {
         "minute":50,
         "value":29
      },
      {
         "minute":51,
         "value":19
      },
      {
         "minute":52,
         "value":7
      },
      {
         "minute":53,
         "value":47
      },
      {
         "minute":54,
         "value":37
      },
      {
         "minute":55,
         "value":19
      },
      {
         "minute":56,
         "value":19
      },
      {
         "minute":57,
         "value":11
      },
      {
         "minute":58,
         "value":56
      },
      {
         "minute":59,
         "value":31
      },
      {
         "minute":60,
         "value":50
      },
      {
         "minute":61,
         "value":28
      },
      {
         "minute":62,
         "value":-45
      },
      {
         "minute":63,
         "value":-13
      },
      {
         "minute":64,
         "value":-18
      },
      {
         "minute":65,
         "value":17
      },
      {
         "minute":66,
         "value":6
      },
      {
         "minute":67,
         "value":21
      },
      {
         "minute":68,
         "value":15
      },
      {
         "minute":69,
         "value":14
      },
      {
         "minute":70,
         "value":43
      },
      {
         "minute":71,
         "value":43
      },
      {
         "minute":72,
         "value":20
      },
      {
         "minute":73,
         "value":4
      },
      {
         "minute":74,
         "value":3
      },
      {
         "minute":75,
         "value":-3
      },
      {
         "minute":76,
         "value":-28
      },
      {
         "minute":77,
         "value":-18
      },
      {
         "minute":78,
         "value":-5
      },
      {
         "minute":79,
         "value":-4
      },
      {
         "minute":80,
         "value":-37
      },
      {
         "minute":81,
         "value":-14
      },
      {
         "minute":82,
         "value":-22
      },
      {
         "minute":83,
         "value":-10
      },
      {
         "minute":84,
         "value":-11
      },
      {
         "minute":85,
         "value":-36
      },
      {
         "minute":86,
         "value":-33
      },
      {
         "minute":87,
         "value":-20
      },
      {
         "minute":88,
         "value":-53
      },
      {
         "minute":89,
         "value":-25
      },
      {
         "minute":90,
         "value":26
      },
      {
         "minute":90.5,
         "value":29
      }
   ],
   "scoreGraph":null,
   "standingsAvailable":true,
   "pointByPoint":[

   ],
   "managerDuel":{
      "homeManagerWins":0,
      "draws":1,
      "awayManagerWins":3,
      "homeManager":{
         "name":"Francisco Escrib\u00e1 Segura",
         "slug":"francisco-escriba-segura",
         "shortName":"F. E. Segura",
         "id":108902
      },
      "awayManager":{
         "name":"Zin\u00e9dine Zidane",
         "slug":"zinedine-zidane",
         "shortName":"Z. Zidane",
         "id":785317
      }
   },
   "h2hDuel":{
      "draws":2,
      "homewins":3,
      "awaywins":13
   }
}
```

## lineups

https://www.sofascore.com/event/8280668/lineups/json?_=158170223

```json
{
   "homeTeam":{
      "formation":[
         "4",
         "2",
         "2",
         "2"
      ],
      "lineupsSorted":[
         {
            "player":{
               "name":"Rub\u00e9n Blanco",
               "slug":"ruben-blanco",
               "shortName":"R. Blanco",
               "id":180515,
               "hasImage":true
            },
            "position":1,
            "shirtNumber":13,
            "substitute":false,
            "positionName":"Goalkeeper",
            "positionNameshort":"G",
            "rating":"7.5",
            "captain":false
         },
         {
            "player":{
               "name":"Kevin Vazquez",
               "slug":"kevin-vazquez",
               "shortName":"K. Vazquez",
               "id":795257,
               "hasImage":true
            },
            "position":2,
            "shirtNumber":20,
            "substitute":false,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"6.2",
            "captain":false
         },
         {
            "player":{
               "name":"David Costas",
               "slug":"david-costas",
               "shortName":"D. Costas",
               "id":345333,
               "hasImage":true
            },
            "position":3,
            "shirtNumber":3,
            "substitute":false,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"6.1",
            "captain":false
         },
         {
            "player":{
               "name":"N\u00e9stor Araujo",
               "slug":"nestor-araujo",
               "shortName":"N. Araujo",
               "id":127585,
               "hasImage":true
            },
            "position":4,
            "shirtNumber":4,
            "substitute":false,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"6.5",
            "captain":false
         },
         {
            "player":{
               "name":"Lucas Olaza",
               "slug":"lucas-olaza",
               "shortName":"L. Olaza",
               "id":333595,
               "hasImage":true
            },
            "position":5,
            "shirtNumber":15,
            "substitute":false,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"6.5",
            "captain":false
         },
         {
            "player":{
               "name":"Stanislav Lobotka",
               "slug":"stanislav-lobotka",
               "shortName":"S. Lobotka",
               "id":150383,
               "hasImage":true
            },
            "position":6,
            "shirtNumber":14,
            "substitute":false,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"6.7",
            "captain":false
         },
         {
            "player":{
               "name":"Fran Beltran",
               "slug":"fran-beltran",
               "shortName":"F. Beltran",
               "id":835484,
               "hasImage":true
            },
            "position":7,
            "shirtNumber":8,
            "substitute":false,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"6.6",
            "captain":false
         },
         {
            "player":{
               "name":"Brais M\u00e9ndez",
               "slug":"brais-mendez",
               "shortName":"B. M\u00e9ndez",
               "id":845385,
               "hasImage":true
            },
            "position":8,
            "shirtNumber":23,
            "substitute":false,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"6.3",
            "captain":false
         },
         {
            "player":{
               "name":"Denis Su\u00e1rez",
               "slug":"denis-suarez",
               "shortName":"D. Su\u00e1rez",
               "id":138383,
               "hasImage":true
            },
            "position":9,
            "shirtNumber":6,
            "substitute":false,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"7.4",
            "captain":false
         },
         {
            "player":{
               "name":"Gabriel Fern\u00e1ndez",
               "slug":"gabriel-fernandez",
               "shortName":"G. Fern\u00e1ndez",
               "id":922896,
               "hasImage":true
            },
            "position":10,
            "shirtNumber":19,
            "substitute":false,
            "positionName":"Forward",
            "positionNameshort":"F",
            "rating":"5.9",
            "captain":false
         },
         {
            "player":{
               "name":"Iago Aspas",
               "slug":"iago-aspas",
               "shortName":"I. Aspas",
               "id":19356,
               "hasImage":true
            },
            "position":11,
            "shirtNumber":10,
            "substitute":false,
            "positionName":"Forward",
            "positionNameshort":"F",
            "rating":"6.3",
            "captain":true
         },
         {
            "player":{
               "name":"Iv\u00e1n Villar",
               "slug":"ivan-villar",
               "shortName":"I. Villar",
               "id":848980,
               "hasImage":true
            },
            "shirtNumber":25,
            "substitute":true,
            "positionName":"Goalkeeper",
            "positionNameshort":"G",
            "rating":"\u2013",
            "captain":false
         },
         {
            "player":{
               "name":"Jorge S\u00e1enz",
               "slug":"jorge-saenz",
               "shortName":"J. S\u00e1enz",
               "id":592098,
               "hasImage":true
            },
            "shirtNumber":16,
            "substitute":true,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"\u2013",
            "captain":false
         },
         {
            "player":{
               "name":"Joseph Aidoo",
               "slug":"joseph-aidoo",
               "shortName":"J. Aidoo",
               "id":796320,
               "hasImage":true
            },
            "shirtNumber":18,
            "substitute":true,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"\u2013",
            "captain":false
         },
         {
            "player":{
               "name":"Pape Cheikh",
               "slug":"pape-cheikh",
               "shortName":"P. Cheikh",
               "id":826551,
               "hasImage":true
            },
            "shirtNumber":24,
            "substitute":true,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"6.9",
            "captain":false
         },
         {
            "player":{
               "name":"Sergio Bermejo Lillo",
               "slug":"sergio-bermejo-lillo",
               "shortName":"S. B. Lillo",
               "id":949449,
               "hasImage":true
            },
            "shirtNumber":28,
            "substitute":true,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"\u2013",
            "captain":false
         },
         {
            "player":{
               "name":"Pione Sisto",
               "slug":"pione-sisto",
               "shortName":"P. Sisto",
               "id":287943,
               "hasImage":true
            },
            "shirtNumber":11,
            "substitute":true,
            "positionName":"Forward",
            "positionNameshort":"F",
            "rating":"6.6",
            "captain":false
         },
         {
            "player":{
               "name":"Iker Losada",
               "slug":"iker-losada",
               "shortName":"I. Losada",
               "id":992331,
               "hasImage":true
            },
            "shirtNumber":36,
            "substitute":true,
            "positionName":"Forward",
            "positionNameshort":"F",
            "rating":"7.4",
            "captain":false
         }
      ],
      "hasLineups":true,
      "confirmedLineups":true,
      "hasSubstitutes":true,
      "substitutions":{
         "287943":{
            "playerOut":{
               "name":"Stanislav Lobotka",
               "slug":"stanislav-lobotka",
               "shortName":"S. Lobotka",
               "id":150383,
               "hasImage":true
            },
            "time":75
         },
         "826551":{
            "playerOut":{
               "name":"Fran Beltran",
               "slug":"fran-beltran",
               "shortName":"F. Beltran",
               "id":835484,
               "hasImage":true
            },
            "time":83
         },
         "992331":{
            "playerOut":{
               "name":"Gabriel Fern\u00e1ndez",
               "slug":"gabriel-fernandez",
               "shortName":"G. Fern\u00e1ndez",
               "id":922896,
               "hasImage":true
            },
            "time":88
         }
      },
      "incidents":{
         "992331":[
            {
               "homeScore":1,
               "awayScore":3,
               "player":{
                  "name":"Iker Losada",
                  "slug":"iker-losada",
                  "shortName":"I. Losada",
                  "id":992331,
                  "hasImage":true
               },
               "assist1":{
                  "name":"Pape Cheikh",
                  "slug":"pape-cheikh",
                  "shortName":"P. Cheikh",
                  "id":826551,
                  "hasImage":true
               },
               "scoringTeam":1,
               "id":"126336459",
               "time":90,
               "addedTime":1,
               "playerTeam":1,
               "incidentType":"goal",
               "incidentClass":"regulargoal"
            }
         ],
         "922896":[
            {
               "playerIn":{
                  "name":"Iker Losada",
                  "slug":"iker-losada",
                  "shortName":"I. Losada",
                  "id":992331,
                  "hasImage":true
               },
               "playerOut":{
                  "name":"Gabriel Fern\u00e1ndez",
                  "slug":"gabriel-fernandez",
                  "shortName":"G. Fern\u00e1ndez",
                  "id":922896,
                  "hasImage":true
               },
               "playerTeam":1,
               "id":"119365270",
               "time":88,
               "incidentType":"substitution",
               "incidentClass":"substitutionin"
            },
            {
               "type":"Yellow",
               "player":{
                  "name":"Gabriel Fern\u00e1ndez",
                  "slug":"gabriel-fernandez",
                  "shortName":"G. Fern\u00e1ndez",
                  "id":922896,
                  "hasImage":true
               },
               "playerTeam":1,
               "reason":"Foul",
               "id":"119265559",
               "time":49,
               "incidentType":"card",
               "incidentClass":"yellowcard"
            }
         ],
         "826551":[
            {
               "type":"Yellow",
               "player":{
                  "name":"Pape Cheikh",
                  "slug":"pape-cheikh",
                  "shortName":"P. Cheikh",
                  "id":826551,
                  "hasImage":true
               },
               "playerTeam":1,
               "reason":"Argument",
               "id":"119265788",
               "time":86,
               "incidentType":"card",
               "incidentClass":"yellowcard"
            }
         ],
         "835484":[
            {
               "playerIn":{
                  "name":"Pape Cheikh",
                  "slug":"pape-cheikh",
                  "shortName":"P. Cheikh",
                  "id":826551,
                  "hasImage":true
               },
               "playerOut":{
                  "name":"Fran Beltran",
                  "slug":"fran-beltran",
                  "shortName":"F. Beltran",
                  "id":835484,
                  "hasImage":true
               },
               "playerTeam":1,
               "id":"119365269",
               "time":83,
               "incidentType":"substitution",
               "incidentClass":"substitutionin"
            }
         ],
         "150383":[
            {
               "playerIn":{
                  "name":"Pione Sisto",
                  "slug":"pione-sisto",
                  "shortName":"P. Sisto",
                  "id":287943,
                  "hasImage":true
               },
               "playerOut":{
                  "name":"Stanislav Lobotka",
                  "slug":"stanislav-lobotka",
                  "shortName":"S. Lobotka",
                  "id":150383,
                  "hasImage":true
               },
               "playerTeam":1,
               "id":"119365268",
               "time":75,
               "incidentType":"substitution",
               "incidentClass":"substitutionin"
            }
         ],
         "345333":[
            {
               "type":"Yellow",
               "player":{
                  "name":"David Costas",
                  "slug":"david-costas",
                  "shortName":"D. Costas",
                  "id":345333,
                  "hasImage":true
               },
               "playerTeam":1,
               "reason":"Foul",
               "id":"119265560",
               "time":74,
               "incidentType":"card",
               "incidentClass":"yellowcard"
            }
         ],
         "180515":[
            {
               "type":"Yellow",
               "player":{
                  "name":"Rub\u00e9n Blanco",
                  "slug":"ruben-blanco",
                  "shortName":"R. Blanco",
                  "id":180515,
                  "hasImage":true
               },
               "playerTeam":1,
               "reason":"Argument",
               "id":"119265558",
               "time":12,
               "incidentType":"card",
               "incidentClass":"yellowcard"
            }
         ],
         "138383":[
            {
               "type":"Yellow",
               "player":{
                  "name":"Denis Su\u00e1rez",
                  "slug":"denis-suarez",
                  "shortName":"D. Su\u00e1rez",
                  "id":138383,
                  "hasImage":true
               },
               "playerTeam":1,
               "reason":"Argument",
               "id":"119265557",
               "time":12,
               "incidentType":"card",
               "incidentClass":"yellowcard"
            }
         ],
         "795257":[
            {
               "type":"Yellow",
               "player":{
                  "name":"Kevin Vazquez",
                  "slug":"kevin-vazquez",
                  "shortName":"K. Vazquez",
                  "id":795257,
                  "hasImage":true
               },
               "playerTeam":1,
               "reason":"Foul",
               "id":"119265556",
               "time":7,
               "incidentType":"card",
               "incidentClass":"yellowcard"
            }
         ]
      },
      "color":{
         "player":{
            "number":"800000",
            "outline":"8ed1df"
         },
         "goalkeeper":{
            "number":"ffffff",
            "outline":"ff6600"
         }
      },
      "manager":{
         "id":108902,
         "name":"Francisco Escrib\u00e1 Segura",
         "slug":"francisco-escriba-segura"
      },
      "averageAge":{
         "eventPlayersAverageAge":24.17,
         "startersAverageAge":25.36,
         "substitutesAverageAge":22.29
      },
      "rating":"6.64"
   },
   "awayTeam":{
      "formation":[
         "4",
         "3",
         "3"
      ],
      "lineupsSorted":[
         {
            "player":{
               "name":"Thibaut Courtois",
               "slug":"thibaut-courtois",
               "shortName":"T. Courtois",
               "id":70988,
               "hasImage":true
            },
            "position":1,
            "shirtNumber":13,
            "substitute":false,
            "positionName":"Goalkeeper",
            "positionNameshort":"G",
            "rating":"6.8",
            "captain":false
         },
         {
            "player":{
               "name":"\u00c1lvaro Odriozola",
               "slug":"alvaro-odriozola",
               "shortName":"\u00c1. Odriozola",
               "id":353250,
               "hasImage":true
            },
            "position":2,
            "shirtNumber":19,
            "substitute":false,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"6.4",
            "captain":false
         },
         {
            "player":{
               "name":"Rapha\u00ebl Varane",
               "slug":"raphael-varane",
               "shortName":"R. Varane",
               "id":138310,
               "hasImage":true
            },
            "position":3,
            "shirtNumber":5,
            "substitute":false,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"6.9",
            "captain":false
         },
         {
            "player":{
               "name":"Sergio Ramos",
               "slug":"sergio-ramos",
               "shortName":"S. Ramos",
               "id":10710,
               "hasImage":true
            },
            "position":4,
            "shirtNumber":4,
            "substitute":false,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"6.9",
            "captain":true
         },
         {
            "player":{
               "name":"Marcelo",
               "slug":"marcelo",
               "shortName":"Marcelo",
               "id":17787,
               "hasImage":true
            },
            "position":5,
            "shirtNumber":12,
            "substitute":false,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"7.5",
            "captain":false
         },
         {
            "player":{
               "name":"Luka Modri\u0107",
               "slug":"luka-modric",
               "shortName":"L. Modri\u0107",
               "id":15466,
               "hasImage":true
            },
            "position":6,
            "shirtNumber":10,
            "substitute":false,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"5.9",
            "captain":false
         },
         {
            "player":{
               "name":"Casemiro",
               "slug":"casemiro",
               "shortName":"Casemiro",
               "id":122951,
               "hasImage":true
            },
            "position":7,
            "shirtNumber":14,
            "substitute":false,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"7.9",
            "captain":false
         },
         {
            "player":{
               "name":"Toni Kroos",
               "slug":"toni-kroos",
               "shortName":"T. Kroos",
               "id":26502,
               "hasImage":true
            },
            "position":8,
            "shirtNumber":8,
            "substitute":false,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"7.8",
            "captain":false
         },
         {
            "player":{
               "name":"Gareth Bale",
               "slug":"gareth-bale",
               "shortName":"G. Bale",
               "id":15354,
               "hasImage":true
            },
            "position":9,
            "shirtNumber":11,
            "substitute":false,
            "positionName":"Forward",
            "positionNameshort":"F",
            "rating":"7.4",
            "captain":false
         },
         {
            "player":{
               "name":"Karim Benzema",
               "slug":"karim-benzema",
               "shortName":"K. Benzema",
               "id":3306,
               "hasImage":true
            },
            "position":10,
            "shirtNumber":9,
            "substitute":false,
            "positionName":"Forward",
            "positionNameshort":"F",
            "rating":"8.6",
            "captain":false
         },
         {
            "player":{
               "name":"Vin\u00edcius J\u00fanior",
               "slug":"vinicius-junior",
               "shortName":"V. J\u00fanior",
               "id":868812,
               "hasImage":true
            },
            "position":11,
            "shirtNumber":28,
            "substitute":false,
            "positionName":"Forward",
            "positionNameshort":"F",
            "rating":"6.3",
            "captain":false
         },
         {
            "player":{
               "name":"Keylor Navas",
               "slug":"keylor-navas",
               "shortName":"K. Navas",
               "id":56113,
               "hasImage":true
            },
            "shirtNumber":1,
            "substitute":true,
            "positionName":"Goalkeeper",
            "positionNameshort":"G",
            "rating":"\u2013",
            "captain":false
         },
         {
            "player":{
               "name":"\u00c9der Milit\u00e3o",
               "slug":"eder-militao",
               "shortName":"\u00c9. Milit\u00e3o",
               "id":822519,
               "hasImage":true
            },
            "shirtNumber":3,
            "substitute":true,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"\u2013",
            "captain":false
         },
         {
            "player":{
               "name":"Nacho Fern\u00e1ndez",
               "slug":"nacho-fernandez",
               "shortName":"N. Fern\u00e1ndez",
               "id":69404,
               "hasImage":true
            },
            "shirtNumber":6,
            "substitute":true,
            "positionName":"Defender",
            "positionNameshort":"D",
            "rating":"\u2013",
            "captain":false
         },
         {
            "player":{
               "name":"Lucas V\u00e1zquez",
               "slug":"lucas-vazquez",
               "shortName":"L. V\u00e1zquez",
               "id":255239,
               "hasImage":true
            },
            "shirtNumber":17,
            "substitute":true,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"7.2",
            "captain":false
         },
         {
            "player":{
               "name":"Isco",
               "slug":"isco",
               "shortName":"Isco",
               "id":103417,
               "hasImage":true
            },
            "shirtNumber":22,
            "substitute":true,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"6.7",
            "captain":false
         },
         {
            "player":{
               "name":"James Rodr\u00edguez",
               "slug":"james-rodriguez",
               "shortName":"J. Rodriguez",
               "id":107414,
               "hasImage":true
            },
            "shirtNumber":16,
            "substitute":true,
            "positionName":"Midfielder",
            "positionNameshort":"M",
            "rating":"\u2013",
            "captain":false
         },
         {
            "player":{
               "name":"Luka Jovi\u0107",
               "slug":"luka-jovic",
               "shortName":"L. Jovi\u0107",
               "id":319129,
               "hasImage":true
            },
            "shirtNumber":18,
            "substitute":true,
            "positionName":"Forward",
            "positionNameshort":"F",
            "rating":"6.5",
            "captain":false
         }
      ],
      "hasLineups":true,
      "confirmedLineups":true,
      "hasSubstitutes":true,
      "substitutions":{
         "255239":{
            "playerOut":{
               "name":"Vin\u00edcius J\u00fanior",
               "slug":"vinicius-junior",
               "shortName":"V. J\u00fanior",
               "id":868812,
               "hasImage":true
            },
            "time":69
         },
         "103417":{
            "playerOut":{
               "name":"Gareth Bale",
               "slug":"gareth-bale",
               "shortName":"G. Bale",
               "id":15354,
               "hasImage":true
            },
            "time":75
         },
         "319129":{
            "playerOut":{
               "name":"Karim Benzema",
               "slug":"karim-benzema",
               "shortName":"K. Benzema",
               "id":3306,
               "hasImage":true
            },
            "time":81
         }
      },
      "incidents":{
         "3306":[
            {
               "playerIn":{
                  "name":"Luka Jovi\u0107",
                  "slug":"luka-jovic",
                  "shortName":"L. Jovi\u0107",
                  "id":319129,
                  "hasImage":true
               },
               "playerOut":{
                  "name":"Karim Benzema",
                  "slug":"karim-benzema",
                  "shortName":"K. Benzema",
                  "id":3306,
                  "hasImage":true
               },
               "playerTeam":2,
               "id":"119365273",
               "time":81,
               "incidentType":"substitution",
               "incidentClass":"substitutionin"
            },
            {
               "homeScore":0,
               "awayScore":1,
               "player":{
                  "name":"Karim Benzema",
                  "slug":"karim-benzema",
                  "shortName":"K. Benzema",
                  "id":3306,
                  "hasImage":true
               },
               "assist1":{
                  "name":"Gareth Bale",
                  "slug":"gareth-bale",
                  "shortName":"G. Bale",
                  "id":15354,
                  "hasImage":true
               },
               "scoringTeam":2,
               "id":"126336460",
               "time":12,
               "playerTeam":2,
               "incidentType":"goal",
               "incidentClass":"regulargoal"
            }
         ],
         "255239":[
            {
               "homeScore":0,
               "awayScore":3,
               "player":{
                  "name":"Lucas V\u00e1zquez",
                  "slug":"lucas-vazquez",
                  "shortName":"L. V\u00e1zquez",
                  "id":255239,
                  "hasImage":true
               },
               "assist1":{
                  "name":"Karim Benzema",
                  "slug":"karim-benzema",
                  "shortName":"K. Benzema",
                  "id":3306,
                  "hasImage":true
               },
               "scoringTeam":2,
               "id":"126336462",
               "time":80,
               "playerTeam":2,
               "incidentType":"goal",
               "incidentClass":"regulargoal"
            }
         ],
         "15354":[
            {
               "playerIn":{
                  "name":"Isco",
                  "slug":"isco",
                  "shortName":"Isco",
                  "id":103417,
                  "hasImage":true
               },
               "playerOut":{
                  "name":"Gareth Bale",
                  "slug":"gareth-bale",
                  "shortName":"G. Bale",
                  "id":15354,
                  "hasImage":true
               },
               "playerTeam":2,
               "id":"119365272",
               "time":75,
               "incidentType":"substitution",
               "incidentClass":"substitutionin"
            }
         ],
         "868812":[
            {
               "playerIn":{
                  "name":"Lucas V\u00e1zquez",
                  "slug":"lucas-vazquez",
                  "shortName":"L. V\u00e1zquez",
                  "id":255239,
                  "hasImage":true
               },
               "playerOut":{
                  "name":"Vin\u00edcius J\u00fanior",
                  "slug":"vinicius-junior",
                  "shortName":"V. J\u00fanior",
                  "id":868812,
                  "hasImage":true
               },
               "playerTeam":2,
               "id":"119365271",
               "time":69,
               "incidentType":"substitution",
               "incidentClass":"substitutionin"
            },
            {
               "type":"Yellow",
               "player":{
                  "name":"Vin\u00edcius J\u00fanior",
                  "slug":"vinicius-junior",
                  "shortName":"V. J\u00fanior",
                  "id":868812,
                  "hasImage":true
               },
               "playerTeam":2,
               "reason":"Foul",
               "id":"119265561",
               "time":36,
               "incidentType":"card",
               "incidentClass":"yellowcard"
            }
         ],
         "353250":[
            {
               "type":"Yellow",
               "player":{
                  "name":"\u00c1lvaro Odriozola",
                  "slug":"alvaro-odriozola",
                  "shortName":"\u00c1. Odriozola",
                  "id":353250,
                  "hasImage":true
               },
               "playerTeam":2,
               "reason":"Time wasting",
               "id":"119265563",
               "time":64,
               "incidentType":"card",
               "incidentClass":"yellowcard"
            }
         ],
         "26502":[
            {
               "homeScore":0,
               "awayScore":2,
               "player":{
                  "name":"Toni Kroos",
                  "slug":"toni-kroos",
                  "shortName":"T. Kroos",
                  "id":26502,
                  "hasImage":true
               },
               "assist1":{
                  "name":"Marcelo",
                  "slug":"marcelo",
                  "shortName":"Marcelo",
                  "id":17787,
                  "hasImage":true
               },
               "scoringTeam":2,
               "id":"126336461",
               "time":61,
               "playerTeam":2,
               "incidentType":"goal",
               "incidentClass":"regulargoal"
            }
         ],
         "15466":[
            {
               "type":"Red",
               "player":{
                  "name":"Luka Modri\u0107",
                  "slug":"luka-modric",
                  "shortName":"L. Modri\u0107",
                  "id":15466,
                  "hasImage":true
               },
               "playerTeam":2,
               "reason":"Foul",
               "id":"119265562",
               "time":56,
               "incidentType":"card",
               "incidentClass":"redcard"
            }
         ]
      },
      "color":{
         "player":{
            "number":"f3ea72",
            "outline":"003a75"
         },
         "goalkeeper":{
            "number":"ffffff",
            "outline":"ff0000"
         }
      },
      "manager":{
         "id":785317,
         "name":"Zin\u00e9dine Zidane",
         "slug":"zinedine-zidane"
      },
      "averageAge":{
         "eventPlayersAverageAge":27.94,
         "startersAverageAge":28.45,
         "substitutesAverageAge":27.14
      },
      "rating":"7.06"
   }
}
```

## odds

https://api.sofascore.com/api/v1/event/8280668/odds/1/all?_=158170261

```json
{
   "markets":[
      {
         "sourceId":82084532,
         "structureType":1,
         "marketId":1,
         "marketName":"Full time",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":5833445,
         "choices":[
            {
               "fractionalValue":"17\/4",
               "sourceId":206850538,
               "name":"1",
               "winning":false,
               "change":1
            },
            {
               "fractionalValue":"16\/5",
               "sourceId":206850540,
               "name":"X",
               "winning":false,
               "change":1
            },
            {
               "fractionalValue":"57\/100",
               "sourceId":206850542,
               "name":"2",
               "winning":true,
               "change":-1
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":1,
         "marketId":2,
         "marketName":"Double chance",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388199,
         "choices":[
            {
               "fractionalValue":"5\/4",
               "sourceId":206921468,
               "name":"1X",
               "winning":false,
               "change":1
            },
            {
               "fractionalValue":"1\/6",
               "sourceId":206921466,
               "name":"X2",
               "winning":true,
               "change":0
            },
            {
               "fractionalValue":"2\/9",
               "sourceId":206921467,
               "name":"12",
               "winning":true,
               "change":-1
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":1,
         "marketId":3,
         "marketName":"1st half",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388200,
         "choices":[
            {
               "fractionalValue":"7\/2",
               "sourceId":206921547,
               "name":"1",
               "winning":false,
               "change":1
            },
            {
               "fractionalValue":"13\/8",
               "sourceId":206921548,
               "name":"X",
               "winning":false,
               "change":1
            },
            {
               "fractionalValue":"11\/10",
               "sourceId":206921549,
               "name":"2",
               "winning":true,
               "change":-1
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":1,
         "marketId":4,
         "marketName":"Draw no bet",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388201,
         "choices":[
            {
               "fractionalValue":"11\/4",
               "sourceId":206921528,
               "name":"1",
               "winning":false,
               "change":1
            },
            {
               "fractionalValue":"1\/4",
               "sourceId":206921529,
               "name":"2",
               "winning":true,
               "change":-1
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":1,
         "marketId":5,
         "marketName":"Both teams to score",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388202,
         "choices":[
            {
               "fractionalValue":"8\/15",
               "sourceId":206922697,
               "name":"Yes",
               "winning":true,
               "change":1
            },
            {
               "fractionalValue":"11\/8",
               "sourceId":206922698,
               "name":"No",
               "winning":false,
               "change":-1
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":1,
         "marketId":6,
         "marketName":"First team to score",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388203,
         "choices":[
            {
               "fractionalValue":"7\/4",
               "sourceId":206921598,
               "name":"Celta Vigo",
               "winning":false,
               "change":1
            },
            {
               "fractionalValue":"18\/1",
               "sourceId":206921599,
               "name":"No goal",
               "winning":false,
               "change":0
            },
            {
               "fractionalValue":"4\/9",
               "sourceId":206921600,
               "name":"Real Madrid",
               "winning":true,
               "change":0
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":2,
         "marketId":9,
         "marketName":"Match goals",
         "choiceGroup":"0.5",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388212,
         "choices":[
            {
               "fractionalValue":"1\/50",
               "sourceId":206921991,
               "name":"Over",
               "winning":true,
               "change":0
            },
            {
               "fractionalValue":"18\/1",
               "sourceId":206921992,
               "name":"Under",
               "winning":false,
               "change":0
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":2,
         "marketId":9,
         "marketName":"Match goals",
         "choiceGroup":"1.5",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388211,
         "choices":[
            {
               "fractionalValue":"1\/7",
               "sourceId":206921993,
               "name":"Over",
               "winning":true,
               "change":0
            },
            {
               "fractionalValue":"9\/2",
               "sourceId":206921994,
               "name":"Under",
               "winning":false,
               "change":0
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":2,
         "marketId":9,
         "marketName":"Match goals",
         "choiceGroup":"2.5",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388205,
         "choices":[
            {
               "fractionalValue":"1\/2",
               "sourceId":206850543,
               "name":"Over",
               "winning":true,
               "change":1
            },
            {
               "fractionalValue":"13\/8",
               "sourceId":206850546,
               "name":"Under",
               "winning":false,
               "change":-1
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":2,
         "marketId":9,
         "marketName":"Match goals",
         "choiceGroup":"3.5",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388210,
         "choices":[
            {
               "fractionalValue":"6\/5",
               "sourceId":206921997,
               "name":"Over",
               "winning":true,
               "change":0
            },
            {
               "fractionalValue":"4\/6",
               "sourceId":206921998,
               "name":"Under",
               "winning":false,
               "change":0
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":2,
         "marketId":9,
         "marketName":"Match goals",
         "choiceGroup":"4.5",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388209,
         "choices":[
            {
               "fractionalValue":"11\/4",
               "sourceId":206921999,
               "name":"Over",
               "winning":false,
               "change":0
            },
            {
               "fractionalValue":"2\/7",
               "sourceId":206922000,
               "name":"Under",
               "winning":true,
               "change":0
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":2,
         "marketId":9,
         "marketName":"Match goals",
         "choiceGroup":"5.5",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388208,
         "choices":[
            {
               "fractionalValue":"11\/2",
               "sourceId":206922001,
               "name":"Over",
               "winning":false,
               "change":0
            },
            {
               "fractionalValue":"1\/9",
               "sourceId":206922002,
               "name":"Under",
               "winning":true,
               "change":0
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":2,
         "marketId":9,
         "marketName":"Match goals",
         "choiceGroup":"6.5",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388207,
         "choices":[
            {
               "fractionalValue":"12\/1",
               "sourceId":206922009,
               "name":"Over",
               "winning":false,
               "change":0
            },
            {
               "fractionalValue":"1\/25",
               "sourceId":206922011,
               "name":"Under",
               "winning":true,
               "change":0
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":2,
         "marketId":9,
         "marketName":"Match goals",
         "choiceGroup":"7.5",
         "isLive":false,
         "fid":82084532,
         "suspended":false,
         "id":6388206,
         "choices":[
            {
               "fractionalValue":"25\/1",
               "sourceId":206922012,
               "name":"Over",
               "winning":false,
               "change":1
            },
            {
               "fractionalValue":"1\/100",
               "sourceId":206922013,
               "name":"Under",
               "winning":true,
               "change":0
            }
         ]
      },
      {
         "sourceId":82084532,
         "structureType":1,
         "marketId":17,
         "marketName":"Asian handicap",
         "isLive":false,
         "fid":82084533,
         "suspended":false,
         "id":6388204,
         "choices":[
            {
               "fractionalValue":"57\/50",
               "sourceId":206850549,
               "name":"(0.75) Celta Vigo",
               "change":1
            },
            {
               "fractionalValue":"4\/5",
               "sourceId":206850552,
               "name":"(-0.75) Real Madrid",
               "change":-1
            }
         ]
      }
   ]
}
```
