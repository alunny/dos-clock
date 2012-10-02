function DosTime(input) {
    if (typeof input == 'number') {
        this.hour       = (input >> 11);
        this.minutes    = ((input >> 5) & 0x3F);
        this.seconds    = (input & 0x1F) * 2;
    } else if (input instanceof Date) {
        this.hour       = input.getHours();
        this.minutes    = input.getMinutes();
        this.seconds    = input.getSeconds();
    }
}

DosTime.prototype.toDosTime = function () {
    return (this.hour << 11) +
        (this.minutes << 5) +
        (this.seconds / 2);
}

function DosDate(input) {
    if (typeof input == 'number') {
        this.year   = (input >> 9) + 1980;
        this.month  = ((input >> 5) & 0xF);
        this.day    = (input & 0x1F);
    } else if (input instanceof Date) {
        this.year   = input.getFullYear();
        this.month  = input.getMonth() + 1;
        this.day    = input.getDate();
    }
}

DosDate.prototype.toDosDate = function () {
    return ((this.year - 1980) << 9) +
        (this.month << 5) +
        (this.day);
}

module.exports = {
    time: DosTime,
    date: DosDate
}
