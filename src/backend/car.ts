export class Car {

    private cplate: any;
    private ccolor: any;
    private cowner: any;

    public constructor(plate: string, color: string, owner: string) {
        this.cplate = plate;
        this.ccolor = color;
        this.cowner = owner;
    }

    public printProps() {
        console.log(
            `
            Kennzeichen: ${this.cplate}
            Farbe: ${this.ccolor}
            Besitzer: ${this.cowner}
            `
        );
    }

    public plate() {
        return this.ccolor;
    }

    public color() {
        return this.ccolor;
    }
    public owner() {
        return this.cowner;
    }

}
