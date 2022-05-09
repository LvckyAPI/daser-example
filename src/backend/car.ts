export class Car {

    private plate;
    private color;
    private owner;

    public constructor(plate, color, owner) {
        this.plate = plate;
        this.color = color;
        this.owner = owner;
    }

    /**
     * Log Output
     */
    public printProps() {
        console.log(
            `
            Kennzeichen: ${this.plate}
            Farbe: ${this.color}
            Besitzer: ${this.owner}
            `
            );
        
    }

    public carOwner() {
        return this.owner;
    }

}