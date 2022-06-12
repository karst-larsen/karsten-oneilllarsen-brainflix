//Takes in the timestamp from videoData and converts it to a day / month / year output

function VideoTimestamp(epoch) {
    let date = new Date(epoch);
    return `${date.getMonth() > 9 ? '' : '0'}${date.getMonth() + 1}/${date.getDate() > 10 ? '' : '0'}${date.getDate()}/${date.getFullYear()}`

}

export default VideoTimestamp