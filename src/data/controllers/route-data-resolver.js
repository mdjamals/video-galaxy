import { singletonManager } from "singleton-manager";

import { OBJECT_KEYS, DEFAULT_CONTENTS_PARAMS } from "../config";

export default class RouteDataResolver {
    constructor() {
        this.ytApi = singletonManager.get(OBJECT_KEYS.Youtube_Data_Api);
    }

    /**
     * Take route name as input and returns default data
     * @param {String} route 
     */
    async getContents(route) { 
        this.data = await this.ytApi.loadContents(DEFAULT_CONTENTS_PARAMS[route]);
        return this.data;
    }
}