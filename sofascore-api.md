# Sofascore APIs
This section document describe the APIs from [sofascore](http://sofascore.com).
Sofascore has a lot of data and in play statistics we will try to document here.

## base url
`https://api.sofascore.com/api/v1`

## Enums

### sports enum
```text
football
basketball
tennis
```

## tournaments

`GET /config/unique-tournaments/{language}/{sport}`

<details>
  <summary>sample response</summary>

```json
{
  "uniqueTournaments": [
    {
      "name": "European Championship",
      "slug": "european-championship",
      "category": {
        "name": "Europe",
        "slug": "europe",
        "sport": {
          "name": "Football",
          "slug": "football",
          "id": 1
        },
        "id": 1465,
        "flag": "europe"
      },
      "userCount": 498017,
      "id": 1,
      "displayInverseHomeAwayTeams": false
    }
  ],
  "topUniqueTournamentIds": [7, 679, 17]
}
```
</details>

## categories

`GET /sport/{sport}/categories`

<details>
  <summary>sample response</summary>

```json
{
  "categories": [
    {
      "name": "Northern Ireland",
      "slug": "northern-ireland",
      "sport": {
        "name": "Football",
        "slug": "football",
        "id": 1
      },
      "priority": 0,
      "id": 130,
      "flag": "northern-ireland",
      "alpha2": "NX"
    }
  ]
}
```
</details>

## scheduled events

`GET /sport/football/scheduled-events/2022-07-20`

<details>
  <summary>sample response</summary>

```json
{
  "events": [
    {
      "tournament": {
        "name": "UEFA Champions League, Qualification",
        "slug": "uefa-champions-league-qualification",
        "category": {
          "name": "Europe",
          "slug": "europe",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1465,
          "flag": "europe"
        },
        "uniqueTournament": {
          "name": "UEFA Champions League",
          "slug": "uefa-champions-league",
          "category": {
            "name": "Europe",
            "slug": "europe",
            "sport": {
              "name": "Football",
              "slug": "football",
              "id": 1
            },
            "id": 1465,
            "flag": "europe"
          },
          "userCount": 0,
          "hasPositionGraph": false,
          "id": 7,
          "hasEventPlayerStatistics": true,
          "displayInverseHomeAwayTeams": false
        },
        "priority": 382,
        "id": 1339
      },
      "roundInfo": {
        "round": 2,
        "name": "Qualification round 2"
      },
      "customId": "RMsVgc",
      "status": {
        "code": 100,
        "description": "Ended",
        "type": "finished"
      },
      "winnerCode": 1,
      "homeTeam": {
        "name": "FK \\u017dalgiris",
        "slug": "fk-zalgiris",
        "shortName": "\\u017dalgiris",
        "sport": {
          "name": "Football",
          "slug": "football",
          "id": 1
        },
        "userCount": 0,
        "disabled": false,
        "type": 0,
        "id": 5345,
        "subTeams": [],
        "teamColors": {
          "primary": "#52b030",
          "secondary": "#52b030",
          "text": "#ffffff"
        }
      },
      "awayTeam": {
        "name": "Malm\\u00f6 FF",
        "slug": "malmo-ff",
        "shortName": "Malm\\u00f6",
        "sport": {
          "name": "Football",
          "slug": "football",
          "id": 1
        },
        "userCount": 0,
        "type": 0,
        "id": 1892,
        "subTeams": [],
        "teamColors": {
          "primary": "#52b030",
          "secondary": "#52b030",
          "text": "#ffffff"
        }
      },
      "homeScore": {
        "current": 1,
        "display": 1,
        "period1": 0,
        "period2": 1,
        "normaltime": 1
      },
      "awayScore": {
        "current": 0,
        "display": 0,
        "period1": 0,
        "period2": 0,
        "normaltime": 0
      },
      "coverage": -1,
      "time": {
        "injuryTime1": 2,
        "injuryTime2": 5,
        "currentPeriodStartTimestamp": 1658253147
      },
      "changes": {
        "changes": [
          "status.code",
          "status.description",
          "status.type",
          "homeScore.period2",
          "homeScore.normaltime",
          "awayScore.period2",
          "awayScore.normaltime",
          "time.currentPeriodStart"
        ],
        "changeTimestamp": 1658253149
      },
      "hasGlobalHighlights": false,
      "hasEventPlayerStatistics": false,
      "id": 10461276,
      "startTimestamp": 1658246400,
      "slug": "fk-zalgiris-malmo-ff",
      "finalResultOnly": false
    }
  ]
}
```
</details>


## seasons
`GET /unique-tournament/{tournementId}/seasons`

<details>
  <summary>sample response</summary>

```json
{
  "seasons": [
    {
      "name": "Primeira Liga 22/23",
      "year": "22/23",
      "id": 42655
    }
  ]
}
```
</details>

## Standings
`GET /unique-tournament/{tournementId}/season/{seasonId}/standings/total`

`GET /unique-tournament/{tournementId}/season/{seasonId}/standings/home`

`GET /unique-tournament/{tournementId}/season/{seasonId}/standings/away`


<details>
  <summary>sample response</summary>

```json
{
  "standings": [
    {
      "tournament": {
        "name": "Primeira Liga",
        "slug": "primeira-liga",
        "category": {
          "name": "Portugal",
          "slug": "portugal",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 44,
          "flag": "portugal",
          "alpha2": "PT"
        },
        "uniqueTournament": {
          "name": "Liga Portugal",
          "slug": "liga-portugal",
          "category": {
            "name": "Portugal",
            "slug": "portugal",
            "sport": {
              "name": "Football",
              "slug": "football",
              "id": 1
            },
            "id": 44,
            "flag": "portugal",
            "alpha2": "PT"
          },
          "userCount": 130475,
          "id": 238,
          "displayInverseHomeAwayTeams": false
        },
        "priority": 0,
        "id": 103600
      },
      "type": "total",
      "name": "Primeira Liga 22\\/23",
      "descriptions": [],
      "rows": [
        {
          "team": {
            "name": "SL Benfica",
            "slug": "sl-benfica",
            "shortName": "Benfica",
            "gender": "M",
            "sport": {
              "name": "Football",
              "slug": "football",
              "id": 1
            },
            "userCount": 226882,
            "nameCode": "BEN",
            "national": false,
            "type": 0,
            "id": 3006,
            "teamColors": {
              "primary": "#cc0000",
              "secondary": "#ffffff",
              "text": "#ffffff"
            }
          },
          "descriptions": [],
          "promotion": {
            "text": "Champions League",
            "id": 804
          },
          "position": 1,
          "matches": 0,
          "wins": 0,
          "losses": 0,
          "draws": 0,
          "scoresFor": 0,
          "scoresAgainst": 0,
          "points": 0,
          "id": 714140
        }
      ],
      "id": 88414,
      "updatedAtTimestamp": 1657054689
    }
  ]
}
```
</details>

## events by round

`GET /unique-tournament/{tournementId}/season/{seasonId}/events/round/{roundNumber}`

<details>
  <summary>sample response</summary>

```json
{
  "events": [
    {
      "tournament": {
        "name": "Liga Portugal",
        "slug": "liga-portugal",
        "category": {
          "name": "Portugal",
          "slug": "portugal",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 44,
          "flag": "portugal",
          "alpha2": "PT"
        },
        "uniqueTournament": {
          "name": "Liga Portugal",
          "slug": "liga-portugal",
          "category": {
            "name": "Portugal",
            "slug": "portugal",
            "sport": {
              "name": "Football",
              "slug": "football",
              "id": 1
            },
            "id": 44,
            "flag": "portugal",
            "alpha2": "PT"
          },
          "userCount": 130475,
          "hasPositionGraph": true,
          "id": 238,
          "hasEventPlayerStatistics": true,
          "displayInverseHomeAwayTeams": false
        },
        "priority": 254,
        "id": 52
      },
      "roundInfo": {
        "round": 1
      },
      "customId": "lkbspCo",
      "status": {
        "code": 0,
        "description": "Not started",
        "type": "notstarted"
      },
      "homeTeam": {
        "name": "CD Santa Clara",
        "slug": "cd-santa-clara",
        "shortName": "Santa Clara",
        "gender": "M",
        "sport": {
          "name": "Football",
          "slug": "football",
          "id": 1
        },
        "userCount": 12967,
        "nameCode": "SCL",
        "national": false,
        "type": 0,
        "id": 3011,
        "subTeams": [],
        "teamColors": {
          "primary": "#d60122",
          "secondary": "#000000",
          "text": "#000000"
        }
      },
      "awayTeam": {
        "name": "Casa Pia",
        "slug": "casa-pia",
        "shortName": "Casa Pia",
        "gender": "M",
        "sport": {
          "name": "Football",
          "slug": "football",
          "id": 1
        },
        "userCount": 6404,
        "nameCode": "CPI",
        "national": false,
        "type": 0,
        "id": 36365,
        "subTeams": [],
        "teamColors": {
          "primary": "#000000",
          "secondary": "#ffffff",
          "text": "#ffffff"
        }
      },
      "homeScore": {},
      "awayScore": {},
      "time": {},
      "changes": {
        "changeTimestamp": 0
      },
      "hasGlobalHighlights": false,
      "id": 10437686,
      "startTimestamp": 1659884400,
      "slug": "casa-pia-cd-santa-clara",
      "finalResultOnly": false
    }
  ],
  "hasNextPage": false
}
```
</details>


## event by id

`GET /event/{eventId}`

<details>
  <summary>sample response</summary>

```json
{
  "standings": [
    {
      "tournament": {
        "name": "Primeira Liga",
        "slug": "primeira-liga",
        "category": {
          "name": "Portugal",
          "slug": "portugal",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 44,
          "flag": "portugal",
          "alpha2": "PT"
        },
        "uniqueTournament": {
          "name": "Liga Portugal",
          "slug": "liga-portugal",
          "category": {
            "name": "Portugal",
            "slug": "portugal",
            "sport": {
              "name": "Football",
              "slug": "football",
              "id": 1
            },
            "id": 44,
            "flag": "portugal",
            "alpha2": "PT"
          },
          "userCount": 130475,
          "id": 238,
          "displayInverseHomeAwayTeams": false
        },
        "priority": 0,
        "id": 103600
      },
      "type": "total",
      "name": "Primeira Liga 22\\/23",
      "descriptions": [],
      "rows": [
        {
          "team": {
            "name": "SL Benfica",
            "slug": "sl-benfica",
            "shortName": "Benfica",
            "gender": "M",
            "sport": {
              "name": "Football",
              "slug": "football",
              "id": 1
            },
            "userCount": 226882,
            "nameCode": "BEN",
            "national": false,
            "type": 0,
            "id": 3006,
            "teamColors": {
              "primary": "#cc0000",
              "secondary": "#ffffff",
              "text": "#ffffff"
            }
          },
          "descriptions": [],
          "promotion": {
            "text": "Champions League",
            "id": 804
          },
          "position": 1,
          "matches": 0,
          "wins": 0,
          "losses": 0,
          "draws": 0,
          "scoresFor": 0,
          "scoresAgainst": 0,
          "points": 0,
          "id": 714140
        }
      ],
      "id": 88414,
      "updatedAtTimestamp": 1657054689
    }
  ]
}
```
</details>

## events by round

`GET /unique-tournament/{tournementId}/season/{seasonId}/events/round/{roundNumber}`

<details>
  <summary>sample response</summary>

```json
{
  "event": {
    "tournament": {
      "name": "Liga Portugal",
      "slug": "liga-portugal",
      "category": {
        "name": "Portugal",
        "slug": "portugal",
        "sport": {
          "name": "Football",
          "slug": "football",
          "id": 1
        },
        "id": 44,
        "flag": "portugal",
        "alpha2": "PT"
      },
      "uniqueTournament": {
        "name": "Liga Portugal",
        "slug": "liga-portugal",
        "category": {
          "name": "Portugal",
          "slug": "portugal",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 44,
          "flag": "portugal",
          "alpha2": "PT"
        },
        "userCount": 130475,
        "id": 238,
        "hasEventPlayerStatistics": true,
        "hasPositionGraph": true,
        "displayInverseHomeAwayTeams": false
      },
      "priority": 254,
      "id": 52
    },
    "season": {
      "name": "Primeira Liga 21\\/22",
      "year": "21\\/22",
      "id": 37358
    },
    "roundInfo": {
      "round": 34
    },
    "customId": "okbsLcc",
    "status": {
      "code": 100,
      "description": "Ended",
      "type": "finished"
    },
    "winnerCode": 1,
    "venue": {
      "city": {
        "name": "Moreira de Conegos"
      },
      "stadium": {
        "name": "Parque de Jogos Comendador Joaquim de Almeida Freitas",
        "capacity": 6153
      },
      "id": 5312,
      "country": {
        "alpha2": "PT",
        "name": "Portugal"
      }
    },
    "referee": {
      "name": "Nuno Miguel Serrano Almeida",
      "slug": "serrano-almeida-nuno-miguel",
      "yellowCards": 1325,
      "redCards": 45,
      "yellowRedCards": 38,
      "games": 275,
      "sport": {
        "name": "Football",
        "slug": "football",
        "id": 1
      },
      "id": 81446,
      "country": {
        "alpha2": "PT",
        "name": "Portugal"
      }
    },
    "homeTeam": {
      "name": "Moreirense",
      "slug": "moreirense",
      "shortName": "Moreirense",
      "gender": "M",
      "sport": {
        "name": "Football",
        "slug": "football",
        "id": 1
      },
      "userCount": 8879,
      "nameCode": "MOR",
      "national": false,
      "type": 0,
      "id": 3014,
      "country": {
        "alpha2": "PT",
        "name": "Portugal"
      },
      "subTeams": [],
      "teamColors": {
        "primary": "#ffffff",
        "secondary": "#006633",
        "text": "#006633"
      }
    },
    "awayTeam": {
      "name": "FC Vizela",
      "slug": "fc-vizela",
      "shortName": "Vizela",
      "gender": "M",
      "sport": {
        "name": "Football",
        "slug": "football",
        "id": 1
      },
      "userCount": 6945,
      "nameCode": "VIZ",
      "national": false,
      "type": 0,
      "id": 5136,
      "country": {
        "alpha2": "PT",
        "name": "Portugal"
      },
      "subTeams": [],
      "teamColors": {
        "primary": "#ffffff",
        "secondary": "#0000ff",
        "text": "#0000ff"
      }
    },
    "homeScore": {
      "current": 4,
      "display": 4,
      "period1": 3,
      "period2": 1,
      "normaltime": 4
    },
    "awayScore": {
      "current": 1,
      "display": 1,
      "period1": 0,
      "period2": 1,
      "normaltime": 1
    },
    "coverage": 1,
    "time": {
      "injuryTime1": 4,
      "injuryTime2": 2,
      "currentPeriodStartTimestamp": 1652545781
    },
    "changes": {
      "changes": [
        "homeScore.period2",
        "homeScore.normaltime",
        "awayScore.period2",
        "awayScore.normaltime",
        "status.code",
        "status.description",
        "status.type",
        "time.currentPeriodStart"
      ],
      "changeTimestamp": 1652545786
    },
    "hasGlobalHighlights": true,
    "hasEventPlayerStatistics": true,
    "hasEventPlayerHeatMap": true,
    "detailId": 1,
    "id": 9620324,
    "awayRedCards": 1,
    "defaultPeriodCount": 2,
    "currentPeriodStartTimestamp": 1652545781,
    "startTimestamp": 1652538600,
    "slug": "fc-vizela-moreirense",
    "finalResultOnly": false,
    "hasBet365LiveStream": true,
    "bet365ExcludedCountryCodes": [
      "PT",
      "IR",
      "GR",
      "RU",
      "CH",
      "CA"
    ],
    "fanRatingEvent": false,
    "seasonStatisticsType": "overall"
  }
}
```
</details>

## event incidents

`GET /event/9620324/incidents`

<details>
  <summary>sample response</summary>

```json
{
  "incidents": [
    {
      "player": {
        "name": "Ivanildo Fernandes",
        "slug": "ivanildo-fernandes",
        "shortName": "I. Fernandes",
        "position": "D",
        "userCount": 103,
        "id": 806515
      },
      "playerName": "Ivanildo Fernandes",
      "reason": "Professional foul last man",
      "id": 120319530,
      "time": 3,
      "isHome": false,
      "incidentClass": "red",
      "incidentType": "card"
    }
  ]
}
```
</details>

## graph information

`GET /event/9620324/graph`

<details>
  <summary>sample response</summary>

```json
{
  "graphPoints": [
    {
      "minute": 1,
      "value": -5
    }
  ],
  "periodTime": null,
  "periodCount": 2
}
```
</details>