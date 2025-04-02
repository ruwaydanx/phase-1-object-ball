// src/00-objectball.js

function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // 1. Home Team Name
  function homeTeamName() {
    return gameObject().home.teamName;
  }
  
  // 2. Player's Shoe Size
  function shoeSize(playerName) {
    const players = gameObject().home.players;
    if (gameObject().away.players[playerName]) {
      players = gameObject().away.players;
    }
    return players[playerName].shoe;
  }
  
  // 3. Team Colors
  function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else {
      return game.away.colors;
    }
  }
  
  // 4. Team Names
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // 5. Player Numbers
  function playerNumbers(teamName) {
    const game = gameObject();
    let players;
    if (game.home.teamName === teamName) {
      players = game.home.players;
    } else {
      players = game.away.players;
    }
    return Object.values(players).map(player => player.number);
  }
  
  // 6. Player Stats
  function playerStats(playerName) {
    const game = gameObject();
    let players = game.home.players;
    if (game.away.players[playerName]) {
      players = game.away.players;
    }
    return players[playerName];
  }
  
  // 7. Big Shoe Rebounds
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
    for (let team of [game.home, game.away]) {
      for (let playerName in team.players) {
        const player = team.players[playerName];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoe = player;
        }
      }
    }
    return playerWithLargestShoe.rebounds;
  }
  
  // 8. Most Points Scored
  function mostPointsScored() {
    const game = gameObject();
    let highestPoints = 0;
    let playerWithMostPoints = null;
    for (let team of [game.home, game.away]) {
      for (let playerName in team.players) {
        const player = team.players[playerName];
        if (player.points > highestPoints) {
          highestPoints = player.points;
          playerWithMostPoints = playerName;
        }
      }
    }
    return playerWithMostPoints;
  }
  
  // 9. Winning Team
  function winningTeam() {
    const game = gameObject();
    const homePoints = Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0);
    const awayPoints = Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0);
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  // 10. Player With Longest Name
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (let team of [game.home, game.away]) {
      for (let playerName in team.players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
    return longestName;
  }
  
  // 11. Does Long Name Steal A Ton?
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let player = null;
    for (let team of [game.home, game.away]) {
      player = team.players[longestName];
    }
    return player.steals > Object.values(game.home.players).concat(Object.values(game.away.players))
        .map(player => player.steals)
        .reduce((max, steals) => steals > max ? steals : max, 0);
  }
  
