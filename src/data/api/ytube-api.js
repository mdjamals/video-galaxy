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
      gapi.load("client");
      gapi.client.setApiKey(YT_API_CONFIG.apiKey);
    }

    /**
     * Api for communicating with youtube server
     */
    async loadYoutubeApi() {
      if(!gapi.client.youtube) {
        await gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
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
      return gapi.client.youtube.search.list(searchConfig);
    }
}