const parseDate = (date) => {
    const newDate = new Date(date);

    const dateString = newDate.toLocaleDateString();
    const hours = (newDate.getHours() < 10 ? '0' : '') + newDate.getHours();
    const minutes = (newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes();

    return `${dateString} at ${hours}:${minutes}`;
};

export default parseDate;
