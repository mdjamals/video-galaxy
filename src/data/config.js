export const YT_API_CONFIG = {
    apiKey: 'AIzaSyB3uhu_YfD_dcJ1P0NvOBpiw_plqyAz_mA'
}

export const OBJECT_KEYS = {
    Youtube_Data_Api: 'v-galaxy::iyt-dialogue-api::1.x',
    Route_Data_Resolver: 'v-galaxy::route-data-resolver-api::1.x'
}

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
    'subscriptions': undefined,
    'not-found': undefined
}