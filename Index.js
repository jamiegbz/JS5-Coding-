/* Create a menu app
Use at least one array
Use at least two classes
Your Menu should have options to create, view, and delete elements
*/




//class footballPlayer with name and postion
class footballPlayer{
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
}


//class Menu
class Menu{
    constructor(){
        //footballPlayer array to hold the name and the postion of the player
        this.footballPlayer=[];
    }
    
    
    //see a menu
    //shows what user can do by adding a player, delete a player, view all player, or just exit the menu
    showMainMenu(){
        return prompt(`
        Main Menu:
        -----------
        0) Exit Menu
        1) Add Player
        2) Delete Player
        3) View All Players
        `);
    }
    
    
    //add footballPlayer and position
    addfootballPlayer(){
        //this prompts for user to add a football players name
        let footballPlayernName = prompt('Enter a football players Name: ');
        //this prompts for the user to enter a position
        let footballPlayerPosition = prompt('Enter a position: ');
        //once the user has enters a name and a postion then it will be pushed to the array
        this.footballPlayer.push(new footballPlayer(footballPlayernName, footballPlayerPosition));
    }

    //delete footballPlayer
    deletefootballPlayer(){
        //this prompts for the user to enter the index(number) of which player they like to remove
        let playerIndex = prompt('Enter players index to remove: ')
        //.splice is item you want to delete and then second number is how many you want to delete
        this.footballPlayer.splice(playerIndex, 1);
    }

    //view footballPlayers
    viewFootballPlayers(){
        let displayFootballPlayers = '';
        //for each player that is added then it will show the name and postion
        for(let i=0; i < this.footballPlayer.length; i++){
            displayFootballPlayers += `
            ${i}) ${this.footballPlayer[i].name} ${this.footballPlayer[i].position}`
        }   
        //this alert will show the football players and their position
        alert(`
        footballPlayer Inventory:
        -------------------------

        ${displayFootballPlayers}
        `);
    }

    //start the menu
    startMenu(){
        //this will show the main menu
        let selection = this.showMainMenu();
        
        //while loop 
        //as long as user doesn't enter zero user can add, delete or view 
        while(selection != 0){
            switch(selection){
                // if user enters 1 user can add a football player
                case "1": this.addfootballPlayer();
                break;
                // if user enters 2 user can delete a football player
                case "2": this.deletefootballPlayer();
                break;
                //if user enters 3 user will be able to view all football players
                case "3": this.viewFootballPlayers();
                break;

                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        // if user enters 0 then it will say exiting menu
        alert('Exiting Menu');
    }
}



//instantiate the menu and invoke the start method 
let menu = new Menu();

menu.startMenu();



