
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Launch {
    id: string;
    site?: string;
    date?: string;
    success?: boolean;
    upcoming?: boolean;
    mission?: Mission;
    rocket?: Rocket;
}

export class Mission {
    name?: string;
    details?: string;
    missionPatchSmall?: string;
    missionPatchLarge?: string;
    video?: string;
}

export class Payload {
    id: string;
    customers?: string;
    nationality?: string;
    manufacturer?: string;
    payloadType?: string;
}

export abstract class IQuery {
    abstract launches(): Launch[] | Promise<Launch[]>;

    abstract launch(id: string): Launch | Promise<Launch>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Rocket {
    id: string;
    name?: string;
    type?: string;
    reused?: string;
    flight?: string;
    payload?: Payload;
}
