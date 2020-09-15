import axios from 'axios';

const KEY = 'AIzaSyD0_r_V90Ukzjc_Iq_RmWQ22ITNQ4G0WdA';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});