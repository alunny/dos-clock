function DosTime(input) {
    if (typeof input == 'number') {
        this.hour       = (input >> 11);
        this.minutes    = ((input >> 5) & 0x3F);
        this.seconds    = (input & 0x1F) * 2;
    }
}

function DosDate(input) {
    if (typeof input == 'number') {
        this.year   = (input >> 9) + 1980;
        this.month  = ((input >> 5) & 0xF);
        this.day    = (input & 0x1F);
    }
}

module.exports = {
    time: DosTime,
    date: DosDate
}
