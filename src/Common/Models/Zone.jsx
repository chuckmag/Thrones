/**
 * Created by cmagrane on 8/16/2016.
 */


function Zone (config) {
    this.name = config.name;
    this.residents = config.residents;
    this.garrison = config.garrison;
    // For the basic game type:
    // the muster value will be 0 for a zone without a castle or stronghold.
    // 1 for a zone with a castle, and 2 for a zone with a stronghold.
    this.muster = config.muster;
    // For the basic game type:
    // Supply Ranges from 0-2
    this.supply = config.supply;
    // For the basic game type:
    // crowns ranges from 0-2
    this.crowns = config.crowns;
    this.hasPort = config.hasPort;
    if (this.hasPort) {
        this.portResident = config.portResident;
    }
    // For the basic game type:
    // The home houses are :
    // Tyrell, Martell, Greyjoy, Baratheon, Lannister, Stark
    this.homeHouse = config.homeHouse;
}

Zone.prototype.setResidents = function(residents) {
    this.residents = residents;
};


export default Zone;