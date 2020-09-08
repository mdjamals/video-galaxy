/**
 * Hold application keys
 */
export const YT_API_CONFIG = {
   // apiKey: 'AIzaSyDpUdcXp0dJh6BO9oi9yADMIRYzGecIMLk' //primary account,
   // apiKey: 'AIzaSyDOKFLGDPr5doznoTdwZkm_IXDaA6zWOBk', //primary  Project 2
   apiKey: 'AIzaSyDpv51Z_euYXkI42YRMsAZjJJzxFGVcNCI', //secondry account
  // apiKey: 'AIzaSyALeYaULBf-yujzg8wG6a6GyVxW59vQBu0' // secondry api key
}

/**
 * Used for saving object keys that can be used in singletoneManager
 */
export const OBJECT_KEYS = {
    Youtube_Data_Api: 'v-galaxy::iyt-dialogue-api::1.x',
    Route_Data_Resolver: 'v-galaxy::route-data-resolver-api::1.x',
    Basic_Event_Emitter: 'v-galaxy::basic-event-emitter-api::1.x'
}

/**
 * Default search parameters for youtube api
 */
export const DEFAULT_CONTENTS_PARAMS = {
    'home': {
        "part": [
          "snippet"
        ],
        "maxResults": 20,
        "safeSearch": "strict"
    },
    'movies': {
        "part": [
          "snippet"
        ],
        "maxResults": 20,
        "q": "marvel's movies",
        "safeSearch": "strict"
    },
    'learning': {
      "part": [
        "snippet"
      ],
      "maxResults": 20,
      "q": "Litelement, Angular, React tutorial",
      "safeSearch": "strict"
    },
    'subscriptions': undefined,
    'not-found': undefined
}