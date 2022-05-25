function Timestamp(props) {
    console.log(props.epoch)
    let epochMonth = 2682000;
    let epochDay = 86400;
    let epochHour = epochDay / 24;
    let epochMinute = epochHour / 60;

    let currentTime = Date.now() / 1000;
    let epochComparisonTime = Math.ceil(currentTime - (props.epoch / 1000));

    let date = new Date(props.epoch);

    if (epochComparisonTime < 0) {
        return `You're posting from the future? Inconceivable!`
    } else if (epochComparisonTime < epochMinute) {
        return 'Just posted'
    } else if (epochComparisonTime <= epochHour) {
        return `${Math.floor(epochComparisonTime / 60)} minute${epochComparisonTime >= 120 ? 's' : ''} ago`
    } else if (epochComparisonTime <= epochDay) {
        return `${Math.floor(epochComparisonTime / 60 / 60)} hour${epochComparisonTime >= 7200 ? 's' : ''} ago`
    } else if (epochComparisonTime <= epochMonth) {
        return `${Math.floor(epochComparisonTime / 60 / 60 / 12)} day${epochComparisonTime >= (epochDay * 2) ? 's' : ''} ago`
    } else {
        return `${date.getMonth() > 9 ? '' : '0'}${date.getMonth() + 1}/${date.getDate() > 10 ? '' : '0'}${date.getDate()}/${date.getFullYear()}`
    }

}

export default Timestamp