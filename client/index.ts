import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api';
import * as native from 'natives';
import { onTicksStart } from '@AthenaClient/events/onTicksStart';
import { KEYBINDSROCKETGAME } from '../shared/keybinds';
import { ROCKETGAMECONST, ROCKETGAMEVEHS } from '../shared/const';

let checkedOptions = false;
let boostNotificationActive = false;
let boostyVehicle = false;
let boostSpeed: number | undefined;

function init() {
    setInterval(checkedCarLeave, 1000);

    AthenaClient.systems.hotkeys.add({
        key: KEYBINDSROCKETGAME.BOOST,
        description: 'Make Car Boost',
        identifier: 'make-car-boost',
        keyDown: boostCar,
    })
}

function checkedCarLeave() {
    const player = alt.Player.local;
    if(player.seat === 0) {
        checkedOptions = false;
        boostyVehicle = false;
    }
    const vehicle = player.vehicle;
    if (!player || !vehicle) return;
    if(checkedOptions === false) {
        if(player.seat === 1) {
            checkedOptions = true;
    
            if (!ROCKETGAMEVEHS.hash.includes(vehicle.model)) {
                AthenaClient.screen.notification.create(`Boost is not available for this car!`)
                boostyVehicle = false;
            } else {
                AthenaClient.screen.notification.create(`Boost available!`)
                boostyVehicle = true;
            }
            return;
        }
    }
}

async function boostCar() {
    const player = alt.Player.local;
    const vehicle = player.vehicle;
    if (!player || !vehicle) return;

    const flagsMODEL = vehicle.handling.modelFlags;
    alt.log('flagModel: '+flagsMODEL);

    if(!boostyVehicle) {
        return;
    } else if(boostyVehicle) {
        if (boostNotificationActive) {
            AthenaClient.screen.notification.create(`Gathering some energy, wait...`)
            return;
        }
    
        const boostNotify = boostMSG();
        boostNotificationActive = true;
        const vehspeed = vehicle.speed * 3.6;
    
        native.setVehicleBoostActive(vehicle, true);
        native.setObjectSpeedBoostAmount(vehicle.scriptID, 50);
        native.setObjectSpeedBoostDuration(vehicle.scriptID, 5000);
        native.setRocketBoostActive(vehicle, true);

        for (const speed in ROCKETGAMECONST) {
            const threshold = parseInt(speed);
            if (vehspeed >= threshold) {
                boostSpeed = ROCKETGAMECONST[speed];
            } else {
                break;
            }
        }
    
        if (boostSpeed !== undefined) {
            native.setVehicleForwardSpeed(vehicle, boostSpeed);
            AthenaClient.screen.notification.create(`You boosted vehicle ID ${vehicle.id} at ${vehspeed.toFixed(0)} KM/H with ${boostSpeed}%!!!`)
        }
    
        await boostNotify;
        boostNotificationActive = false;
    }

}

async function boostMSG() {
    AthenaClient.screen.spinner.create({
        duration: 10000,
        text: 'Refill Boost...',
        type: 0,
    });

    await new Promise((resolve) => setTimeout(resolve, 10000));
    AthenaClient.screen.notification.create(`Boost is Ready!`)
    return true;
}

onTicksStart.add(init)