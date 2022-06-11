//Takes in the timestamp from videoData and converts it to a day / month / year output

function VideoTimestamp(epoch) {
    let epochMonth = 2682000;
    let epochDay = 86400;
    let epochHour = epochDay / 24;
    let epochMinute = epochHour / 60;

    let currentTime = Date.now() / 1000;
    let epochComparisonTime = Math.ceil(currentTime - (epoch / 1000));

    let date = new Date(epoch);

    
    return `${date.getMonth() > 9 ? '' : '0'}${date.getMonth() + 1}/${date.getDate() > 10 ? '' : '0'}${date.getDate()}/${date.getFullYear()}`

}

export default VideoTimestamp