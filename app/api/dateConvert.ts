export default function formatDate(isoString:string) {
    // Create a Date object from the ISO string
    const date = new Date(isoString);

    // Define an array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get the month name, day, and year from the date object
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    // Format the date as "Month day, year"
    return `${month} ${day}, ${year}`;
}