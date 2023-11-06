let data={
  "data": {
    "teams": {
      "teama": {
        "tid": 7,
        "title": "New Zealand",
        "abbr": "NZ",
        "alt_name": "New Zealand",
        "type": "country",
        "thumb_url": "https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png",
        "logo_url": "https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png",
        "country": "nz",
        "sex": "male",
        "cid": 0,
        "squads": [
          {
            "player_id": 46141,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "wk",
            "playing11": true,
            "name": "Devon Conway"
          },
          {
            "player_id": 16609,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Will Young"
          },
          {
            "player_id": 1081,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Rachin Ravindra"
          },
          {
            "player_id": 16509,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Daryl Mitchell"
          },
          {
            "player_id": 44185,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(WK/C)",
            "role": "wk",
            "playing11": true,
            "name": "Tom Latham"
          },
          {
            "player_id": 1082,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Glenn Phillips"
          },
          {
            "player_id": 1708,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Mark Chapman"
          },
          {
            "player_id": 1923,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Mitchell Santner"
          },
          {
            "player_id": 486,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Matt Henry"
          },
          {
            "player_id": 16643,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Lockie Ferguson"
          },
          {
            "player_id": 47,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Trent Boult"
          }
        ]
      },
      "teamb": {
        "tid": 498,
        "title": "Afghanistan",
        "abbr": "AFG",
        "alt_name": "Afghanistan",
        "type": "country",
        "thumb_url": "https://images.entitysport.com/assets/uploads/2023/07/Afghanistan-3.png",
        "logo_url": "https://images.entitysport.com/assets/uploads/2023/07/Afghanistan-3.png",
        "country": "af",
        "sex": "male",
        "cid": 0,
        "squads": [
          {
            "player_id": 93570,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(WK)",
            "role": "wk",
            "playing11": true,
            "name": "Rahmanullah Gurbaz"
          },
          {
            "player_id": 45172,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Ibrahim Zadran"
          },
          {
            "player_id": 44977,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Rahmat Shah"
          },
          {
            "player_id": 44991,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(C)",
            "role": "bat",
            "playing11": true,
            "name": "Hashmatullah Shahidi"
          },
          {
            "player_id": 93481,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Azmatullah Omarzai"
          },
          {
            "player_id": 1153,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "wk",
            "playing11": true,
            "name": "Ikram Alikhil"
          },
          {
            "player_id": 319,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Mohammad Nabi"
          },
          {
            "player_id": 1157,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Rashid Khan"
          },
          {
            "player_id": 93418,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Mujeeb Ur Rahman"
          },
          {
            "player_id": 1404,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Naveen-ul-Haq"
          },
          {
            "player_id": 62778,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Fazalhaq Farooqi"
          }
        ]
      }
    }
  }
}
let teamData = data['data']['teams'];
const allPlayer = [];// all player array
const roleFilters = {};//all players filted by role 
const playerData = {};//all player object
// create a all player object as id property 
for (const team of Object.values(data.data.teams)) {
    for (const player of team.squads) {
        player.team = team.title;
        player.visible = false;
        player.captain = false;
        player.vicecaptain = false;
        player.disable = false;
        playerData[player.player_id] = player;
        if (!roleFilters[player.role]) {
          roleFilters[player.role] = [];
      }
      roleFilters[player.role].push(player);
    }
}
for (let i in teamData) {
  for (let j in teamData[i]['squads']) {
      teamData[i]['squads'][j]['team'] = data['data']['teams'][i]['title'];
      allPlayer.push(Object.assign(teamData[i]['squads'][j],{visible:false},{captain:false},{vicecaptain:false},{disable:false}));
  }
}
// function to  show player based on role
displayPlayersByRole('wk');
function displayPlayersByRole(role) {
  const roleCounts = {
    selectedPlayerCount: 0,
    "wk": 0,
    "bat": 0,
    "ar": 0,
    "bowl": 0,
    "New Zealand": 0,
    "Afghanistan": 0,
  };

  allPlayer.forEach(player => {
    if (player.visible) {
      roleCounts.selectedPlayerCount++;
      roleCounts[player.role]++;
      roleCounts[player.team]++;
    }
  });
  //find which role you are selected 
  const buttons = document.querySelectorAll('.role-button');
  buttons.forEach(button => {
      button.classList.remove('active-button');
  });
  const activeButton = document.querySelector(`[data-role='${role}']`);
  activeButton.classList.add('active-button');
 const tableBody = document.getElementById('table-body');
 tableBody.innerHTML = '';
 
  roleFilters[role].forEach(player => {
    const row = document.createElement('tr');
    row.setAttribute('class', 'row1');
    row.addEventListener('click', () => {
      if (player.disable) {
        return;
      }
      player.visible = !player.visible;
      plusIcon = player.visible ? './pictures/minus.png' : './pictures/plus.png';
      row.style.backgroundColor = player.visible ? 'rgba(151, 170, 51, 0.4)' : '';
      roleCounts.selectedPlayerCount += player.visible ? 1 : -1;
      roleCounts[player.role] += player.visible ? 1 : -1;
      roleCounts[player.team] += player.visible ? 1 : -1;
      validateCricketTeam(playerData, roleCounts);
      showPlayerInSection(allPlayer);
      displayPlayersByRole(role);
      updateTeamDetails(roleCounts);
    });
    row.style.backgroundColor = player.visible ? 'rgba(151, 170, 51, 0.4)' : '';
    const playerTypeImage = getPlayerTypeImage(player.role);
    const thumbUrl = player.team === "New Zealand" ? teamData.teama.thumb_url : teamData.teamb.thumb_url;
    var plusIcon = player.visible ? './pictures/minus.png' : './pictures/plus.png';
    if (player.disable) {
      row.classList.add('disabled');
      
  }
    row.innerHTML = `
        <td><img src="${thumbUrl}" alt="Player Image" ></td>
        <td>${player.name}</td>
        <td><img src="${playerTypeImage}" alt="Player Type"></td>
        <td><div><img src="${plusIcon}" alt="add remove"></div></td>
    `;
   
    tableBody.appendChild(row);
  });
}
//this assign image based on player role
function getPlayerTypeImage(playerRole) {
    switch (playerRole) {
        case 'ar':
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFw-_cmjRyop9C_2u3wdCZRhwkzf0vwmblNcLkTrSUxQ&s";
        case 'bat':
            return "https://cdn-icons-png.flaticon.com/512/3439/3439653.png";
        case 'wk':
            return "https://cdn.iconscout.com/icon/premium/png-256-thumb/wicket-keeper-gloves-4399285-3757032.png?f=webp";
        case 'bowl':
            return "https://e7.pngegg.com/pngimages/488/27/png-clipart-cricket-balls-tennis-balls-stump-cricket-sport-sphere.png";
    }
}
//this functionis show player ground view
function showPlayerInSection(allPlayer) {
  const choosedPlayerDiv = document.querySelector('.single-fantasy-tip');
  const playerSections = {
    ar: choosedPlayerDiv.querySelector('.all-rounder-section'),
    bat: choosedPlayerDiv.querySelector('.batter-section'),
    wk: choosedPlayerDiv.querySelector('.wicket-keeper-section'),
    bowl: choosedPlayerDiv.querySelector('.bowler-section'),
  };
  for (const section in playerSections) {
    playerSections[section].innerHTML = '';
  }
  allPlayer.forEach((player)=>{
    if(player.visible==false){
      return;
    }
  const playerType = getPlayerTypeStr(player.role);
  const playerSection = choosedPlayerDiv.querySelector(`.${playerType}-section`);
  const playerDiv = document.createElement('div');
  playerDiv.className = 'player-info';

  const playerImage = document.createElement('img');
  playerImage.src = player.team === "New Zealand" ? 'https://staticg.sportskeeda.com/cricket_images/fantasy_v2/player2.svg' : 'https://staticg.sportskeeda.com/cricket_images/fantasy_v2/player1.svg';
  const playerName = document.createElement('p');
  playerName.className = 'player-name';
  playerName.textContent = player.name;
    if(player.captain==true){
      let captainImg=document.createElement('img');
      captainImg.src='https://static.sportskeeda.com/cricket_images/fantasy_v2/captain-icon-new.svg';
      captainImg.className='captain-logo';
      playerDiv.appendChild(captainImg);
    }
    if(player.vicecaptain==true){
      let viceCaptainImg=document.createElement('img');
      viceCaptainImg.src='https://static.sportskeeda.com/cricket_images/fantasy_v2/vice-captain-icon-new.svg';
      viceCaptainImg.className='viceCaptain-logo';
      playerDiv.appendChild(viceCaptainImg);
    }

  playerDiv.appendChild(playerImage);
  playerDiv.appendChild(playerName);

  playerSection.appendChild(playerDiv);
  })
}
// Function to get the player type
function getPlayerTypeStr(playerRole) {
    switch (playerRole) {
        case 'ar':
            return 'all-rounder';
        case 'bat':
            return 'batter';
        case 'wk':
            return 'wicket-keeper';
        case 'bowl':
            return 'bowler';
        default:
            return 
    }
}

//function to get captain and vice captain
document.getElementById("nextButton").addEventListener("click", () => {
  const modal = document.getElementById("myModal");
  const modalBody = modal.querySelector(".modal-body");
  modalBody.innerHTML = "";

  const captainSelectionForm = document.createElement("div");
  captainSelectionForm.id = "captainSelectionForm";

  allPlayer.forEach((player, index) => {
      if(player.visible==true)
      {
        const playerDiv = document.createElement("div");
      playerDiv.className = "selected-player";

      const playerImage = document.createElement('img');
      playerImage.src = player.team === "New Zealand" ? 'https://staticg.sportskeeda.com/cricket_images/fantasy_v2/player2.svg' : 'https://staticg.sportskeeda.com/cricket_images/fantasy_v2/player1.svg';

      const playerName = document.createElement("p");
      playerName.textContent = `${index + 1}. ${player.name} - ${player.team}`;

      const playerSelection = document.createElement('div');
      playerSelection.className = "playerSelection";

      const captainRadio = document.createElement("input");
      captainRadio.type = "radio";
      captainRadio.name = "captain";
      captainRadio.value = player.player_id;
      captainRadio.id = `captain${index}`;

      const captainLabel = document.createElement("label");
      captainLabel.htmlFor = `captain${index}`;
      captainLabel.textContent = "Captain";

      const viceCaptainRadio = document.createElement("input");
      viceCaptainRadio.type = "radio";
      viceCaptainRadio.name = "viceCaptain";
      viceCaptainRadio.value = player.player_id;
      viceCaptainRadio.id = `viceCaptain${index}`;

      const viceCaptainLabel = document.createElement("label");
      viceCaptainLabel.htmlFor = `viceCaptain${index}`;
      viceCaptainLabel.textContent = "Vice Captain";

      playerSelection.appendChild(captainRadio);
      playerSelection.appendChild(captainLabel);
      playerSelection.appendChild(viceCaptainRadio);
      playerSelection.appendChild(viceCaptainLabel);

      playerDiv.appendChild(playerImage);
      playerDiv.appendChild(playerName);
      playerDiv.appendChild(playerSelection);
      captainSelectionForm.appendChild(playerDiv);
      }
  });
  modalBody.appendChild(captainSelectionForm);
  modal.style.display = "block";
  const selectCaptain=document.getElementById('selectCaptain');
  selectCaptain.addEventListener("click", ()=>{
      // e.preventDefault();
      const captainValue = document.querySelector('input[name="captain"]:checked').value;
      const viceCaptainValue = document.querySelector('input[name="viceCaptain"]:checked').value;
      allPlayer.forEach(player1 => {
          player1.captain=false;
          player1.vicecaptain=false;
          if (player1.player_id == captainValue) {
              player1.captain = true;
          }
          if (player1.player_id == viceCaptainValue) {
              player1.vicecaptain = true;
          }
          //console.log(player1);
      });
      // Close the modal
      modal.style.display = "none";
      showPlayerInSection(allPlayer);
  });
});

//function to get dynamically change minimum count

function getMinimumRequiredPlayers(role, roleCounts){
  let requiredCount = 0;
  switch(role){
    case 'wk':
    case 'ar':
      if(1- roleCounts[role] > 0) 
        requiredCount = 1- roleCounts[role]; 
      break;
    case 'bat':
    case 'bowl':
       requiredCount = 3- roleCounts[role] > 0;
      if(3- roleCounts[role] > 0) 
        return requiredCount = 3- roleCounts[role]; 
      break;
  }
  return requiredCount;
}
//this function to validate team
function validateCricketTeam(playerData, roleCounts) {
  for (const playerId in playerData) {
    const player = playerData[playerId];

    if (player.visible === false) {
      player.disable = false;

      // Perform role-based validation
      if (player.disable === false) {
        if(roleCounts[player.team]>=7){
          player.disable=true;
          // console.log("maximum count isupdateTeamDetails() reached"+player.team);
        }
        switch (player.role) {
          case 'wk':
            if (roleCounts.wk >= 4 || (roleCounts.wk >= 1 && (11 - roleCounts.selectedPlayerCount - getMinimumRequiredPlayers('bat', roleCounts) - getMinimumRequiredPlayers('bowl', roleCounts) - getMinimumRequiredPlayers('ar', roleCounts)) <= 0)) {
              player.disable = true;
            }
            break;
          case 'ar':
            if (roleCounts.ar >= 4 || (roleCounts.ar >= 1 && (11 - roleCounts.selectedPlayerCount - getMinimumRequiredPlayers('bat', roleCounts) - getMinimumRequiredPlayers('bowl', roleCounts) - getMinimumRequiredPlayers('wk', roleCounts)) <= 0)) {
              player.disable = true;
            }
            break;
          case 'bat':
            if (roleCounts.bat >= 6 || (roleCounts.bat >= 3 && (11 - roleCounts.selectedPlayerCount - getMinimumRequiredPlayers('wk', roleCounts) - getMinimumRequiredPlayers('bowl', roleCounts) - getMinimumRequiredPlayers('ar', roleCounts)) <= 0)) {
              player.disable = true;
            }
            break;
          case 'bowl':
            if (roleCounts.bowl >= 6 || (roleCounts.bowl >= 3 && (11 - roleCounts.selectedPlayerCount - getMinimumRequiredPlayers('wk', roleCounts) - getMinimumRequiredPlayers('bat', roleCounts) - getMinimumRequiredPlayers('ar', roleCounts)) <= 0)) {
              player.disable = true;
            }
            break;
        }
      }
    }
  }
}
function updateTeamDetails(roleCounts) {
  const teamACount = document.getElementById('teamACount');
  const teamBCount = document.getElementById('teamBCount');
  const totalPlayerCount = document.getElementById('totalPlayerCount');

  teamACount.textContent = roleCounts['New Zealand'];
  teamBCount.textContent = roleCounts['Afghanistan'];
  totalPlayerCount.textContent = roleCounts.selectedPlayerCount;
}
