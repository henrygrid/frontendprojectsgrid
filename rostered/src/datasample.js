var user = {
  id: number,
  username: "",
  name: "",
  password: "",
  type: "player", //player, coach, admin
  leagues: [
    {
      id: number,
      sport: "soccer",
      name: "EX Flint Adult Soccer",
      teams: [
        {
          id: number,
          name: "Wombats",
          coaches: [],
          players: [
            {
              id: number,
              currentPlayer: true,
              name: "Peter Parker",
              position: "Striker",
              playerStats: {
                goals: 3,
                starts: 5,
                tacklesWon: 10,
                tackletsMissed: 13,
                ballsLost: 5,
                penalties: 2,
                redCards: 0,
                yellowCards: 1,
                saves: 0,
                goalsAllowed: 0
              }
            },
            {
              id: number,
              currentPlayer: false,
              name: "Bruce Banner",
              position: "Left Mid",
              playerStats: {
                goals: 1,
                starts: 3,
                tacklesWon: 13,
                tackletsMissed: 10,
                ballsLost: 2,
                penalties: 3,
                redCards: 0,
                yellowCards: 0,
                saves: 0,
                goalsAllowed: 0
              }
            },
            {
              id: number,
              currentPlayer: true,
              name: "Stephen Strange",
              position: "Goalie",
              playerStats: {
                goals: 0,
                starts: 7,
                tacklesWon: 0,
                tackletsMissed: 0,
                ballsLost: 0,
                penalties: 0,
                redCards: 0,
                yellowCards: 0,
                saves: 7,
                goalsAllowed: 4
              }
            },
            {
              id: number,
              name: "Lightning",
              coaches: [],
              players: [
                {
                  id: number,
                  currentPlayer: true,
                  name: "Peter Parker",
                  position: "Striker",
                  playerStats: {
                    goals: 3,
                    starts: 5,
                    tacklesWon: 10,
                    tackletsMissed: 13,
                    ballsLost: 5,
                    penalties: 2,
                    redCards: 0,
                    yellowCards: 1,
                    saves: 0,
                    goalsAllowed: 0
                  }
                },
                {
                  id: number,
                  currentPlayer: false,
                  name: "Bruce Banner",
                  position: "Left Mid",
                  playerStats: {
                    goals: 1,
                    starts: 3,
                    tacklesWon: 13,
                    tackletsMissed: 10,
                    ballsLost: 2,
                    penalties: 3,
                    redCards: 0,
                    yellowCards: 0,
                    saves: 0,
                    goalsAllowed: 0
                  }
                },
                {
                  id: number,
                  currentPlayer: true,
                  name: "Stephen Strange",
                  position: "Goalie",
                  playerStats: {
                    goals: 0,
                    starts: 7,
                    tacklesWon: 0,
                    tackletsMissed: 0,
                    ballsLost: 0,
                    penalties: 0,
                    redCards: 0,
                    yellowCards: 0,
                    saves: 7,
                    goalsAllowed: 4
                  }
                }
              ]
            }
          ]
        }
      ],
    },
    {
      id: number,
      sport: "basketball",
      name: "FY Royal Oak Basketball",
      teams: [
        {
          id: number,
          name: "Cavaliers",
          coaches: [],
          players: [
            {
              id: number,
              currentPlayer: true,
              name: "Peter Parker",
              position: "Power Forward",
              playerStats: {
                ppg: 30,
                starts: 10,
                steals: 10,
                blocks: 13,
                assists: 5,
                fouls: 25,
                fieldGoals: 373,
                fieldGoalPercentage: .55,
                threePointers: 100,
                threePointPercentage: .29,
                freeThrows: 20,
                freeThrowPercentage: .67
              }
            },
            {
              id: number,
              currentPlayer: true,
              name: "Clark Kent",
              position: "Point Guard",
              playerStats: {
                ppg: 35,
                starts: 10,
                steals: 15,
                blocks: 3,
                assists: 22,
                fouls: 2,
                fieldGoals: 373,
                fieldGoalPercentage: .55,
                threePointers: 100,
                threePointPercentage: .29,
                freeThrows: 20,
                freeThrowPercentage: .67
              }
            },
            {
              id: number,
              currentPlayer: true,
              name: "Hank Pym",
              position: "Guard",
              playerStats: {
                ppg: 35,
                starts: 10,
                steals: 15,
                blocks: 3,
                assists: 22,
                fouls: 2,
                fieldGoals: 373,
                fieldGoalPercentage: .55,
                threePointers: 100,
                threePointPercentage: .29,
                freeThrows: 20,
                freeThrowPercentage: .67
              }
            },
            {
              id: number,
              name: "Hornets",
              coaches: [],
              players: [
                {
                  id: number,
                  currentPlayer: true,
                  name: "Peter Parker",
                  position: "Power Forward",
                  playerStats: {
                    ppg: 30,
                    starts: 10,
                    steals: 10,
                    blocks: 13,
                    assists: 5,
                    fouls: 25,
                    fieldGoals: 373,
                    fieldGoalPercentage: .55,
                    threePointers: 100,
                    threePointPercentage: .29,
                    freeThrows: 20,
                    freeThrowPercentage: .67
                  }
                },
                {
                  id: number,
                  currentPlayer: true,
                  name: "Clark Kent",
                  position: "Point Guard",
                  playerStats: {
                    ppg: 35,
                    starts: 10,
                    steals: 15,
                    blocks: 3,
                    assists: 22,
                    fouls: 2,
                    fieldGoals: 373,
                    fieldGoalPercentage: .55,
                    threePointers: 100,
                    threePointPercentage: .29,
                    freeThrows: 20,
                    freeThrowPercentage: .67
                  }
                },
                {
                  id: number,
                  currentPlayer: true,
                  name: "Hank Pym",
                  position: "Guard",
                  playerStats: {
                    ppg: 35,
                    starts: 10,
                    steals: 15,
                    blocks: 3,
                    assists: 22,
                    fouls: 2,
                    fieldGoals: 373,
                    fieldGoalPercentage: .55,
                    threePointers: 100,
                    threePointPercentage: .29,
                    freeThrows: 20,
                    freeThrowPercentage: .67
                  }
                }
      ]
    }
  ]

}
