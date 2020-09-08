import { YT_API_CONFIG } from "../config"

/**
 * Class to communicate or access YouTube contents using YouTube data api
 */
export default class YtDialogueApi {
    constructor() {
      this.initGoogleApi();
    }

    /**
     * Initialize google api client
     */
    initGoogleApi() {
      if(typeof gapi !== 'undefined') {
        gapi.load("client");
        gapi.client.setApiKey(YT_API_CONFIG.apiKey);
      }
    }

    /**
     * Api for communicating with youtube server
     */
    async loadYoutubeApi() {
      if(typeof gapi !== 'undefined' && navigator.onLine) {
        let x = await gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
      } else {
        await new Promise(resolve => resolve(undefined));
      }
    }

    /**
     * Loading default contents from YouTube
     * @param searchConfig object containing search criteria
     * Example: {
        "part": [
          "snippet"
        ],
        "maxResults": 20
      }
     * @returns Promise
     */
    async loadContents(searchConfig) {
      await this.loadYoutubeApi();
      return navigator.onLine ? gapi.client.youtube.search.list(searchConfig) : undefined;
    }
}