class Racer {
    constructor(name, number) {
        this.name = name; 
        this.number = number; 
        this.start_time = null; 
        this.finish_time = null; 
    }

    calculateFinalTime() {
        if (!this.finish_time) { return "Coureur pas encore arrivé" }
        console.log(this.convertMsToTime(this.finish_time - this.start_time)); 
        return this.finish_time - this.start_time; 
    }
    defineStartingTime(timestamp = Date.now(), force = false) {
        if (this.start_time && !force) { return "already-set" }
        this.start_time = timestamp; 
        return "start time updated"; 
    }
    defineFinishTime(timestamp = Date.now(), force =  false) {
        if (this.finish_time && !force) { return "already-set" }
        this.finish_time = timestamp; 
        return "finish time updated"; 
    }
    convertMsToTime(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
      
        seconds = seconds % 60;
        minutes = minutes % 60;
      
        // 👇️ If you don't want to roll hours over, e.g. 24 to 00
        // 👇️ comment (or remove) the line below
        // commenting next line gets you `24:00:00` instead of `00:00:00`
        // or `36:15:31` instead of `12:15:31`, etc.
        // hours = hours % 24;
      
        return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}'${this.padTo2Digits(seconds)}"`;
    }
    padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }


    HTMLsingleRow() {
        return  `<tr id="row-${this.number}">
        <td id="racer-${this.number}-number">${ this.number }</td>
        <td id="racer-${this.number}-name">${ this.name }</td>
        <td id="racer-${this.number}-starting_time">${ this.start_time }</td>
        <td id="racer-${this.number}-finish_time">${ this.finish_time }</td>
        <td id="racer-${this.number}-final_time">${ this.calculateFinalTime() }</td>
        </tr>`; 
    }
}