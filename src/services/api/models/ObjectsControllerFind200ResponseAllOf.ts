/* tslint:disable */
/* eslint-disable */
/**
 * пожликбез.рф API
 * API спецификация пожликбез.рф
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ObjectEntity } from './ObjectEntity';
import {
    ObjectEntityFromJSON,
    ObjectEntityFromJSONTyped,
    ObjectEntityToJSON,
} from './ObjectEntity';

/**
 * 
 * @export
 * @interface ObjectsControllerFind200ResponseAllOf
 */
export interface ObjectsControllerFind200ResponseAllOf {
    /**
     * 
     * @type {Array<ObjectEntity>}
     * @memberof ObjectsControllerFind200ResponseAllOf
     */
    data?: Array<ObjectEntity>;
}

/**
 * Check if a given object implements the ObjectsControllerFind200ResponseAllOf interface.
 */
export function instanceOfObjectsControllerFind200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ObjectsControllerFind200ResponseAllOfFromJSON(json: any): ObjectsControllerFind200ResponseAllOf {
    return ObjectsControllerFind200ResponseAllOfFromJSONTyped(json, false);
}

export function ObjectsControllerFind200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectsControllerFind200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ObjectEntityFromJSON)),
    };
}

export function ObjectsControllerFind200ResponseAllOfToJSON(value?: ObjectsControllerFind200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ObjectEntityToJSON)),
    };
}
