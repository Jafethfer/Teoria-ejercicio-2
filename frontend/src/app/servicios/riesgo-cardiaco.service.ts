import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RiesgoCardiacoService {
  constructor() {}

  riesgoCardiaco(
    sexo: string,
    edad: number,
    colersterol: number,
    HDL: number,
    PAS: number,
    PAD: number,
    diabetes: boolean,
    fumador: boolean
  ): number {
    let L = 0;
    let G = 0;
    let S = 0;
    let B = 0;
    let R = 0;
    let bc = 0;
    let bh = 0;
    let bt = 0;
    let bd = 0;
    let bf = 0;

    /* HOMBRES */
    if (sexo == 'h') {
      /* OBTENER VALOR DE BC */
      if (colersterol < 160) {
        bc = -0.65945;
      } else if (colersterol < 200) {
        bc = 0;
      } else if (colersterol < 240) {
        bc = 0.17692;
      } else if (colersterol < 280) {
        bc = 0.50539;
      } else {
        bc = 0.65713;
      }

      /* OBTENER VALOR DE BH */
      if (HDL < 35) {
        bh = 0.49744;
      } else if (HDL < 45) {
        bh = 0.2431;
      } else if (HDL < 50) {
        bh = 0;
      } else if (HDL < 60) {
        bh = -0.05107;
      } else {
        bh = -0.4866;
      }

      /* OBTENER VALOR DE BT */
      if (PAS < 120 && PAD < 80) {
        bt = -0.00226;
      } else if (PAS < 130 && PAD < 85) {
        bt = 0;
      } else if (PAS < 140 && PAD < 90) {
        bt = 0.2832;
      } else if (PAS < 160 && PAD < 100) {
        bt = 0.52168;
      } else {
        bt = 0.61859;
      }

      /* OBTENER BD */
      if (diabetes) {
        bd = 0.42839;
      } else {
        bd = 0;
      }

      /* OBTENER BF */
      if (fumador) {
        bf = 0.52337;
      }
      G = 3.0975;
      S = 0.90015;
      L = 0.04826 * edad + bc + bh + bt + bd + bf;
    }

    /* MUJERES */
    if (sexo == 'm') {
      /* OBTENER VALOR DE BC */
      if (colersterol < 160) {
        bc = -0.26138;
      } else if (colersterol < 200) {
        bc = 0;
      } else if (colersterol < 240) {
        bc = 0.20771;
      } else if (colersterol < 280) {
        bc = 0.24385;
      } else {
        bc = 0.53513;
      }

      /* OBTENER VALOR DE BH */
      if (HDL < 35) {
        bh = 0.84312;
      } else if (HDL < 45) {
        bh = 0.37796;
      } else if (HDL < 50) {
        bh = 0.19785;
      } else if (HDL < 60) {
        bh = 0;
      } else {
        bh = -0.42951;
      }

      /* OBTENER VALOR DE BT */
      if (PAS < 120 && PAD < 80) {
        bt = -0.53363;
      } else if (PAS < 130 && PAD < 85) {
        bt = 0;
      } else if (PAS < 140 && PAD < 90) {
        bt = -0.06773;
      } else if (PAS < 160 && PAD < 100) {
        bt = 0.26288;
      } else {
        bt = 0.46573;
      }

      /* OBTENER BD */
      if (diabetes) {
        bd = 0.59626;
      } else {
        bd = 0;
      }

      /* OBTENER BF */
      if (fumador) {
        bf = 0.29246;
      }
      G = 9.92545;
      S = 0.96246;
      L = 0.33766 * edad + -0.00268*edad*edad + bc + bh + bt + bd + bf;
    }


    B = Math.exp(L - G);
    R = 1 - Math.pow(S, B);
    return R;
  }
}
