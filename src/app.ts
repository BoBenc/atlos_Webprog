/*
* File: app.ts
* Author: Bőgér Bence
* Copyright: 2024, Bőgér Bence
* Group: Szoft I-2-N
* Date: 2024-05-30
* Github: https://github.com/BoBenc/
* Licenc: GNU GPL
*/
class Rectangle {
    aSideInput?: HTMLInputElement | null;
    bSideInput?: HTMLInputElement | null;
    diagonalInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;
    constructor() {
        this.bindHTML();
        this.handleEvent();
    }
    bindHTML() {
        this.aSideInput = document.querySelector("#aSideInput");
        this.bSideInput = document.querySelector("#bSideInput");
        this.diagonalInput = document.querySelector("#diagonalInput");
        this.calcButton = document.querySelector("#calcButton");
    }
    handleEvent() {
        this.calcButton?.addEventListener('click', ()=>{
            this.startCalc();
        })
    }
    startCalc() {
        const aSide = Number(this.aSideInput?.value);
        const bSide = Number(this.bSideInput?.value);
        const diagonal = this.calcDiagonal(aSide, bSide);
        this.renderResult(diagonal);
    }
    calcDiagonal(aSide: number, bSide: number): number {
        return Math.sqrt(Math.pow(aSide,2)+Math.pow(bSide,2));
    }
    renderResult(diagonal: number):void {
        this.diagonalInput!.value = String(diagonal);
    }
}

new Rectangle();