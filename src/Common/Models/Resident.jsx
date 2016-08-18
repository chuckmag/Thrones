/**
 * Created by cmagrane on 8/16/2016.
 */

function Resident (config) {
    this.house = config.house;
    // Basic Unit Types:
    // Ship, footman, knight, siegeUnit, powerToken
    //
    this.unitType = config.unitType;
}

export default Resident;