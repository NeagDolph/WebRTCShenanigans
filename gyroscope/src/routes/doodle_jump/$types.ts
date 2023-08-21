import {ExtendedObject3D} from "enable3d";
import {Vec3} from "./core/vec3";

export type InputReceiver = {
    keyboard: string[];
    mouse: {
        buttons: {
            left: boolean
            right: boolean
        }
        wheelDelta: number
        x: number
        y: number
    };
}

export type ComponentMap = {
    physicsObject: InstanceType<typeof ExtendedObject3D>
    collisionSensor: {
        active: boolean
        obj: InstanceType<typeof ExtendedObject3D>
    }
    dummy: {
        random: number
    }
    inputReceiver: InputReceiver
    player: {
        altitude: number
        isOnPlatform: boolean
        isOnBoostPlatform: boolean
        starsCollected: number
        fallen: boolean
    }
    cameraDirector: {
        position: Vec3
    }
    platform: PlatformType & {
        originalX: number
        movementDelay: number
    }
    platformGenerator: {
        maxAltitude: number
        lastPlatformX: number
    }
    collectable: {
        type: "star"
        pickup: boolean
    }
}

export type SystemList = [
    "debugCubeColourSystem",
    "inputBroadcasterSystem",
    "playerSystem",
    "cameraDirectorSystem",
    "platformGeneratorSystem",
    "platformSystem",
    "collectableSystem",
    "shadowUpdaterSystem",
    "persistenceSystem"
]

export type PlatformType = {
    oscillating: boolean
    breakable: boolean
    boost: boolean
}
