export type VoliaSystemItem = {
  code: string;
  description: string;
  suggestedQuantity: number;
  unitPrice: number;
};

export type VoliaSystemTemplate = {
  id: string;
  name: string;
  category: string;
  sourceSheet: string;
  items: VoliaSystemItem[];
};

export type VoliaSystemProduct = {
  id: string;
  code: string;
  description: string;
  unitPrice: number;
  sourceSheet: string;
};

// Catálogo extraído de LISTA SISTEMA VOLIA.xlsx.
// Las cantidades sugeridas provienen de la columna C y pueden editarse en el cotizador.
export const VOLIA_SYSTEMS: VoliaSystemTemplate[] = [
  {
    "id": "clavos-01-clavos-endomedulares-mindray",
    "name": "CLAVOS ENDOMEDULARES MINDRAY",
    "category": "CLAVOS",
    "sourceSheet": "CLAVOS",
    "items": [
      {
        "code": "F14FB-PA00471",
        "description": "CLAVO ORTOLOCK FEMORAL CANULADO 10x320 MM",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14FB-PA00549",
        "description": "PERNO DE BLOQUEO F/T 34MM",
        "suggestedQuantity": 4,
        "unitPrice": 30
      },
      {
        "code": "F14FB-PA00565",
        "description": "TORNILLO TAPÓN FEMORAL",
        "suggestedQuantity": 1,
        "unitPrice": 20
      }
    ]
  },
  {
    "id": "clavos-02-clavo-encerrojado-tibial",
    "name": "CLAVO ENCERROJADO TIBIAL",
    "category": "CLAVOS",
    "sourceSheet": "CLAVOS",
    "items": [
      {
        "code": "F14FB-PA00292",
        "description": "CLAVO ORTOLOCK FEMORAL CANULADO 10x320 MM",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14FB-PA00263",
        "description": "PERNO DE BLOQUEO F/T 34MM",
        "suggestedQuantity": 4,
        "unitPrice": 30
      },
      {
        "code": "F14FB-PA00287",
        "description": "TORNILLO TAPÓN FEMORAL",
        "suggestedQuantity": 1,
        "unitPrice": 20
      }
    ]
  },
  {
    "id": "clavos-03-clavo-cefalomedular",
    "name": "CLAVO CEFALOMEDULAR",
    "category": "CLAVOS",
    "sourceSheet": "CLAVOS",
    "items": [
      {
        "code": "F14FB-PA00459",
        "description": "CLAVO CORTO",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14FB-PA00527",
        "description": "HOJA HELICOIDAL",
        "suggestedQuantity": 1,
        "unitPrice": 150
      },
      {
        "code": "F14FB-PA00538",
        "description": "TORNILLO",
        "suggestedQuantity": 2,
        "unitPrice": 20
      },
      {
        "code": "F14FB-PA00658",
        "description": "TAPON",
        "suggestedQuantity": 1,
        "unitPrice": 20
      }
    ]
  },
  {
    "id": "mini-fragmentos-01-sistema-de-placa-en-t-3-ori-cabeza-de-1-5",
    "name": "SISTEMA DE PLACA EN T 3 ORI CABEZA DE 1,5",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 1,5",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01329",
        "description": "PLACA EN T 3 ORIF. CABEZA",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA01029",
        "description": "TORNILLOS CORTICALES DE 1,5 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00484",
        "description": "TORNILLOS DE BLOQUEO DE 1,5",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-02-sistema-de-placa-en-t-4-ori-cabeza-de-1-5",
    "name": "SISTEMA DE PLACA EN T 4 ORI CABEZA DE 1,5",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 1,5",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01326",
        "description": "PLACA EN T 4 ORIF. CABEZA",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA01029",
        "description": "TORNILLOS CORTICALES DE 1,5 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00484",
        "description": "TORNILLOS DE BLOQUEO DE 1,5",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-03-sistema-de-placa-en-y-de-1-5",
    "name": "SISTEMA DE PLACA EN Y DE 1,5",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 1,5",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01322",
        "description": "PLACA EN Y 3 ORIF. CABEZA",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA01029",
        "description": "TORNILLOS CORTICALES DE 1,5 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00484",
        "description": "TORNILLOS DE BLOQUEO DE 1,5",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-04-sistema-de-placa-en-condilar-1-5",
    "name": "SISTEMA DE PLACA EN CONDILAR 1,5",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 1,5",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01336",
        "description": "PLACA CONDILAR DE 1,5",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA01029",
        "description": "TORNILLOS CORTICALES DE 1,5 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00484",
        "description": "TORNILLOS DE BLOQUEO DE 1,5",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-05-sistema-de-placa-strut-de-1-5",
    "name": "SISTEMA DE PLACA STRUT DE 1,5",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 1,5",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01337",
        "description": "PLACA STRUT DE 1,5",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA01029",
        "description": "TORNILLOS CORTICALES DE 1,5 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00484",
        "description": "TORNILLOS DE BLOQUEO DE 1,5",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-06-sistema-de-placa-lcp-estrecha-de-1-5",
    "name": "SISTEMA DE PLACA LCP ESTRECHA DE 1,5",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 1,5",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01334",
        "description": "PLACA LCP ESTRECHA DE 1,5",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA01029",
        "description": "TORNILLOS CORTICALES DE 1,5 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00484",
        "description": "TORNILLOS DE BLOQUEO DE 1,5",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-07-sistema-de-placa-estrecha-de-1-5",
    "name": "SISTEMA DE PLACA ESTRECHA DE 1,5",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 1,5",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01316",
        "description": "PLACA ESTRECHA DE 1,5",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA01029",
        "description": "TORNILLOS CORTICALES DE 1,5 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00484",
        "description": "TORNILLOS DE BLOQUEO DE 1,5",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-08-sistema-de-placa-lcp-en-t-de-adaptacion-de-2-0",
    "name": "SISTEMA DE PLACA LCP EN T DE ADAPTACION DE 2,0",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,0",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01380",
        "description": "PLACA LCP EN T ADAPTACION DE 2,0",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 5,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-09-sistema-de-placa-lcp-en-y-de-2-0",
    "name": "SISTEMA DE PLACA LCP EN Y DE 2,0",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,0",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01394",
        "description": "PLACA LCP EN Y DE 2,0",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 5,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-10-sistema-de-placa-lcp-en-t-de-2-0",
    "name": "SISTEMA DE PLACA LCP EN T DE 2,0",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,0",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01385",
        "description": "PLACA LCP EN T 2,0",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 5,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-11-sistema-de-placa-en-condilar-2-0",
    "name": "SISTEMA DE PLACA EN CONDILAR 2,0",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,0",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01389",
        "description": "PLACA LCP EN T DE 2,0",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 5,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-12-sistema-de-placa-estrecha-de-2-0",
    "name": "SISTEMA DE PLACA ESTRECHA DE 2,0",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,0",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA00846",
        "description": "PLACA ESTRECHA DE 2,0",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 5,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-13-sistema-de-placa-en-condilar-2-4",
    "name": "SISTEMA DE PLACA EN CONDILAR 2,4",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,4",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01406",
        "description": "PLACA LCP COCILAR DE 2,4",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-14-sistema-de-placa-lcp-en-t-adaptacion-de-2-4",
    "name": "SISTEMA DE PLACA LCP EN T ADAPTACION DE 2,4",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,4",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01398",
        "description": "PLACA LCP EN T ADAPTACION 2,4",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-15-sistema-de-placa-lcp-en-t-de-2-4",
    "name": "SISTEMA DE PLACA LCP EN T DE 2,4",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,4",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01402",
        "description": "PLACA LCP EN T 2,4",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-16-sistema-de-placa-lcp-estrecha-2-4",
    "name": "SISTEMA DE PLACA LCP ESTRECHA 2,4",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,4",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA00855",
        "description": "PLACA LCP ESTRECHA DE 2,4",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 5,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-17-sistema-de-placa-lcp-en-y-de-2-4",
    "name": "SISTEMA DE PLACA LCP EN Y DE 2,4",
    "category": "SISTEMAS DE PLACAS PIE Y MANO 2,4",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01409",
        "description": "PLACA LCP EN Y DE 2,4",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 5,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00159",
        "description": "TORNILLOS DE BLOQUEO DE 2,0",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-18-sistema-de-placa-en-condilar-2-7",
    "name": "SISTEMA DE PLACA EN CONDILAR 2,7",
    "category": "SISTEMAS DE PLACAS MINI Y PEQUEÑAS ARTICULACIONES 2,7",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA00859",
        "description": "PLACA LCP COCILAR DE 2,7",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-19-sistema-de-placa-lcp-en-t-de-2-7",
    "name": "SISTEMA DE PLACA LCP EN T DE 2,7",
    "category": "SISTEMAS DE PLACAS MINI Y PEQUEÑAS ARTICULACIONES 2,7",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA01398",
        "description": "PLACA LCP EN T 2,7",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-20-sistema-de-placa-en-h-de-2-7",
    "name": "SISTEMA DE PLACA EN H DE 2,7",
    "category": "SISTEMAS DE PLACAS MINI Y PEQUEÑAS ARTICULACIONES 2,7",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA00965",
        "description": "PLACA LCP EN H 2,7",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-21-sistema-de-placa-lcp-en-l-oblicua-2-7",
    "name": "SISTEMA DE PLACA LCP EN L OBLICUA 2,7",
    "category": "SISTEMAS DE PLACAS MINI Y PEQUEÑAS ARTICULACIONES 2,7",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA00863",
        "description": "PLACA LCP EN L OBLICUA 2,7",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-22-sistema-de-placa-lcp-en-l-2-7",
    "name": "SISTEMA DE PLACA LCP EN L 2,7",
    "category": "SISTEMAS DE PLACAS MINI Y PEQUEÑAS ARTICULACIONES 2,7",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA00866",
        "description": "PLACA LCP EN L 2,7",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "mini-fragmentos-23-sistema-de-placa-lcp-estrecha-2-7",
    "name": "SISTEMA DE PLACA LCP ESTRECHA 2,7",
    "category": "SISTEMAS DE PLACAS MINI Y PEQUEÑAS ARTICULACIONES 2,7",
    "sourceSheet": "MINI FRAGMENTOS",
    "items": [
      {
        "code": "F14AB-PA00870",
        "description": "PLACA LCP ESTRECHA 2,7",
        "suggestedQuantity": 1,
        "unitPrice": 300
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 5,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 3,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-01-sistema-de-placa-para-1-3-cana",
    "name": "SISTEMA DE PLACA PARA 1/3 CAÑA",
    "category": "SISTEMAS DE PLACAS PEQUEÑOS FRAGMENTOS",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01377",
        "description": "PLACA 1/3 DE CAÑA",
        "suggestedQuantity": 1,
        "unitPrice": 350
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-02-sistema-de-placa-lcp-3-5",
    "name": "SISTEMA DE PLACA LCP 3.5",
    "category": "SISTEMAS DE PLACAS PEQUEÑOS FRAGMENTOS",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01308",
        "description": "PLACA LCP SMALL",
        "suggestedQuantity": 1,
        "unitPrice": 350
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-03-sistema-de-placa-de-reconstruccion-bloqueada",
    "name": "SISTEMA DE PLACA DE RECONSTRUCCION BLOQUEADA",
    "category": "SISTEMAS DE PLACAS PEQUEÑOS FRAGMENTOS",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00030",
        "description": "PLACA DE RECONSTRUCCION",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-04-sistema-de-placa-de-reconstruccion-bloqueada-curva",
    "name": "SISTEMA DE PLACA DE RECONSTRUCCION BLOQUEADA CURVA",
    "category": "SISTEMAS DE PLACAS PEQUEÑOS FRAGMENTOS",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00234",
        "description": "PLACA DE RECONSTRUCCION CURVA",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-05-sistema-de-placa-clavicula-gancho",
    "name": "SISTEMA DE PLACA CLAVICULA GANCHO",
    "category": "SISTEMAS DE PLACAS PARA CLAVICULA",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01197",
        "description": "PLACA DE CLAVICULA GANCHO",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-06-sistema-de-placa-clavicula-con-extension",
    "name": "SISTEMA DE PLACA CLAVICULA CON EXTENSION",
    "category": "SISTEMAS DE PLACAS PARA CLAVICULA",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01099",
        "description": "PLACA DE CLAVICULA CON EXTENSION",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-07-sistema-de-placa-clavicula-reconstruccion",
    "name": "SISTEMA DE PLACA CLAVICULA RECONSTRUCCION",
    "category": "SISTEMAS DE PLACAS PARA CLAVICULA",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00122",
        "description": "PLACA DE CLAVICULA RECONSTRUCCION",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-08-sistema-de-placa-clavicula-superior",
    "name": "SISTEMA DE PLACA CLAVICULA SUPERIOR",
    "category": "SISTEMAS DE PLACAS PARA CLAVICULA",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01118",
        "description": "PLACA DE CLAVICULA SUPERIOR",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-09-sistema-de-placa-anterior",
    "name": "SISTEMA DE PLACA ANTERIOR",
    "category": "SISTEMAS DE PLACAS PARA CLAVICULA",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01057",
        "description": "PLACA DE CLAVICULA ANTERIOR",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-10-sistema-de-placa-anterior-mr-va",
    "name": "SISTEMA DE PLACA ANTERIOR MR-VA",
    "category": "SISTEMAS DE PLACAS PARA CLAVICULA",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00822",
        "description": "PLACA DE CLAVICULA ANTERIOR MR-VA",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-11-sistema-de-placa-humero-proximal-tipo-philos",
    "name": "SISTEMA DE PLACA HUMERO PROXIMAL (TIPO PHILOS)",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00122",
        "description": "PLACA DE HUMERO PROXIMAL",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 4,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 4,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-12-sistema-de-placa-lcp-humero-estrecha",
    "name": "SISTEMA DE PLACA LCP HUMERO ESTRECHA",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01057",
        "description": "PLACA LCP HUMERO ESTRECHA",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-13-sistema-de-placa-de-humero-distal-lateral",
    "name": "SISTEMA DE PLACA DE HUMERO DISTAL LATERAL",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00571",
        "description": "PLACA LCP HUMERO DISTAL LATERAL",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-14-sistema-de-placa-de-humero-distal-medial",
    "name": "SISTEMA DE PLACA DE HUMERO DISTAL MEDIAL",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14BB-PA00574",
        "description": "PLACA LCP HUMERO DISTAL MEDIAL",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-15-sistema-de-placa-gancho-humero",
    "name": "SISTEMA DE PLACA GANCHO HUMERO",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01293",
        "description": "PLACA HUMERO GANCHO",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-16-sistema-de-placa-para-olecrano",
    "name": "SISTEMA DE PLACA PARA OLECRANO",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14BB-PA00589",
        "description": "PLACA PARA OLECRANO",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-17-sistema-de-placa-para-olecrano-mr-va",
    "name": "SISTEMA DE PLACA PARA OLECRANO MR-VA",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00986",
        "description": "PLACA PARA OLECRANO MR-VA",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-18-sistema-de-placa-de-humero-distal-lateral-mr-va",
    "name": "SISTEMA DE PLACA DE HUMERO DISTAL LATERAL MR-VA",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00811",
        "description": "PLACA LCP HUMERO DISTAL LATERAL MR-VA",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-19-sistema-de-placa-de-humero-distal-medial-mr-va",
    "name": "SISTEMA DE PLACA DE HUMERO DISTAL MEDIAL MR-VA",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00726",
        "description": "PLACA LCP HUMERO DISTAL MEDIAL MR-VA",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-20-sistema-de-placa-para-olecrano-mr-va",
    "name": "SISTEMA DE PLACA PARA OLECRANO MR-VA",
    "category": "SISTEMAS DE PLACAS PARA HUMERO",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00987",
        "description": "PLACA PARA OLECRANO MR-VA",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-21-sistema-de-placa-fibula-posterolateral",
    "name": "SISTEMA DE PLACA FIBULA POSTEROLATERAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01003",
        "description": "PLACA PARA FIBULA POSTEROLATERAL",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-22-sistema-de-placa-de-fibula-distal-lateral",
    "name": "SISTEMA DE PLACA DE FIBULA DISTAL LATERAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01021",
        "description": "PLACA PARA FIBULA DISTAL LATERAL",
        "suggestedQuantity": 1,
        "unitPrice": 350
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-23-sistema-de-placa-lcp-de-tibia-proximal-posteromedial",
    "name": "SISTEMA DE PLACA LCP DE TIBIA PROXIMAL POSTEROMEDIAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00700",
        "description": "PLACA PARA TIBIA PROXIMAL POSTEROMEDIAL",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-24-sistema-de-placa-lcp-de-tibia-proximal-bajo-contacto",
    "name": "SISTEMA DE PLACA LCP DE TIBIA PROXIMAL BAJO CONTACTO",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00837",
        "description": "PLACA PARA TIBIA PROXIMAL BAJO CONTACTO",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-25-sistema-de-placa-para-tibia-proximal-medial",
    "name": "SISTEMA DE PLACA PARA TIBIA PROXIMAL MEDIAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00955",
        "description": "PLACA PARA TIBIA PROXIMAL MEDIAL",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-26-sistema-de-placa-tibia-distal-medial",
    "name": "SISTEMA DE PLACA TIBIA DISTAL MEDIAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01053",
        "description": "PLACA PARA TIBIA DISTAL MEDIAL",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-27-sistema-de-placa-de-tibia-posterolateral",
    "name": "SISTEMA DE PLACA DE TIBIA POSTEROLATERAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01369",
        "description": "PLACA PARA TIBIA POSTEROLATERAL",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-28-sistema-de-placa-para-tibia-distal-medial",
    "name": "SISTEMA DE PLACA PARA TIBIA DISTAL MEDIAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00104",
        "description": "PLACA PARA TIBIA DISTAL MEDIAL",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-29-sistema-de-placa-tibia-distal-anterolateral",
    "name": "SISTEMA DE PLACA TIBIA DISTAL ANTEROLATERAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00973",
        "description": "PLACA PARA TIBIA DISTAL ANTEROLATERAL",
        "suggestedQuantity": 1,
        "unitPrice": 500
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-30-sistema-de-placa-de-tibia-distal-lateral",
    "name": "SISTEMA DE PLACA DE TIBIA DISTAL LATERAL",
    "category": "SISTEMAS DE PLACAS PARA TIBIA PERONE MIEMBRO INFERIOR",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00166",
        "description": "PLACA PARA TIBIA DISTAL ANTEROLATERAL",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14DB-PA00785",
        "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
        "suggestedQuantity": 1,
        "unitPrice": 25
      }
    ]
  },
  {
    "id": "placas-anatomicas-31-sistema-de-placa-para-radio-distal-mr-va-b",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL MR-VA B",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00761",
        "description": "PLACA PARA RADIO DISTAL VOLAR",
        "suggestedQuantity": 1,
        "unitPrice": 440
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-32-sistema-de-placa-para-radio-distal-mr-va-m",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL MR-VA M",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00746",
        "description": "PLACA PARA RADIO DISTAL VOLAR",
        "suggestedQuantity": 1,
        "unitPrice": 440
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-33-sistema-de-placa-para-radio-distal-mr-va-n",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL MR-VA N",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00754",
        "description": "PLACA PARA RADIO DISTAL VOLAR",
        "suggestedQuantity": 1,
        "unitPrice": 440
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-34-sistema-de-placa-para-radio-distal-volar-en-l-oblicua",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL VOLAR EN L OBLICUA",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01131",
        "description": "PLACA PARA RADIO DISTAL VOLAR OBLICUA",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-35-sistema-de-placa-para-radio-distal-volar-en-l-3-tornillos-cabeza",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL VOLAR EN L 3 TORNILLOS CABEZA",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01139",
        "description": "PLACA PARA RADIO DISTAL VOLAR EN L 3 TORNILLOS",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-36-sistema-de-placa-para-radio-distal-volar-en-l-2-tornillos-cabeza",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL VOLAR EN L 2 TORNILLOS CABEZA",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01135",
        "description": "PLACA PARA RADIO DISTAL VOLAR EN L 2 TORNILLOS",
        "suggestedQuantity": 1,
        "unitPrice": 450
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-37-sistema-de-placa-para-radio-distal-volar-recta",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL VOLAR RECTA",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00876",
        "description": "PLACA PARA RADIO DISTAL RECTA",
        "suggestedQuantity": 1,
        "unitPrice": 440
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-38-sistema-de-placa-para-radio-distal-volar-dia-meta",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL VOLAR DIA META",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01062",
        "description": "PLACA PARA RADIO DISTAL DIA META",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-39-sistema-de-placa-para-radio-distal-extrarticular",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL EXTRARTICULAR",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01067",
        "description": "PLACA PARA RADIO DISTAL EXTRARTICULAR",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-40-sistema-de-placa-para-radio-distal-extrarticular",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL EXTRARTICULAR",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01067",
        "description": "PLACA PARA RADIO DISTAL EXTRARTICULAR",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-41-sistema-de-placa-para-radio-volar-columna",
    "name": "SISTEMA DE PLACA PARA RADIO VOLAR COLUMNA",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01204",
        "description": "PLACA PARA RADIO VOLAR COLUMNA",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-42-sistema-de-placa-lcp-en-t",
    "name": "SISTEMA DE PLACA LCP EN T",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00184",
        "description": "PLACA LCP EN T",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-43-sistema-de-placa-lcp-en-t-oblicua",
    "name": "SISTEMA DE PLACA LCP EN T OBLICUA",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00252",
        "description": "PLACA LCP EN T OBLICUA",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00547",
        "description": "TORNILLOS CORTICALES DE 3,5 MM",
        "suggestedQuantity": 3,
        "unitPrice": 40
      },
      {
        "code": "F14DB-PA00465",
        "description": "TORNILLOS CORTICALES DE 2,7 MM",
        "suggestedQuantity": 3,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00196",
        "description": "TORNILLOS DE BLOQUEO DE 2,7",
        "suggestedQuantity": 2,
        "unitPrice": 30
      },
      {
        "code": "F14CB-PA00227",
        "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-44-sistema-de-placa-para-radio-distal-standard",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL STANDARD",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01435",
        "description": "PLACA PARA RADIO DISTAL ESTANDAR",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-45-sistema-de-placa-para-radio-distal-wider",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL WIDER",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01449",
        "description": "PLACA PARA RADIO DISTAL ANCHA",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-46-sistema-de-placa-para-radio-distal-narrow",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL NARROW",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA01425",
        "description": "PLACA PARA RADIO DISTAL ANGOSTA",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  },
  {
    "id": "placas-anatomicas-47-sistema-de-placa-para-radio-distal-angulo-oblicuo",
    "name": "SISTEMA DE PLACA PARA RADIO DISTAL ANGULO OBLICUO",
    "category": "SISTEMAS DE PLACAS PARA RADIO DISTAL",
    "sourceSheet": "PLACAS ANATOMICAS",
    "items": [
      {
        "code": "F14AB-PA00178",
        "description": "PLACA PARA RADIO DISTAL ANGULO OBLICUO",
        "suggestedQuantity": 1,
        "unitPrice": 400
      },
      {
        "code": "F14DB-PA00457",
        "description": "TORNILLOS CORTICALES DE 2,4 MM",
        "suggestedQuantity": 4,
        "unitPrice": 25
      },
      {
        "code": "F14CB-PA00287",
        "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 40
      },
      {
        "code": "F14CB-PA00176",
        "description": "TORNILLOS DE BLOQUEO DE 2,4",
        "suggestedQuantity": 2,
        "unitPrice": 30
      }
    ]
  }
];

export const VOLIA_SYSTEM_PRODUCTS: VoliaSystemProduct[] = [
  {
    "id": "sistema-1-f14fb-pa00471-clavo-ortolock-femoral-canulad",
    "code": "F14FB-PA00471",
    "description": "CLAVO ORTOLOCK FEMORAL CANULADO 10x320 MM",
    "unitPrice": 400,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-2-f14fb-pa00549-perno-de-bloqueo-f-t-34mm",
    "code": "F14FB-PA00549",
    "description": "PERNO DE BLOQUEO F/T 34MM",
    "unitPrice": 30,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-3-f14fb-pa00565-tornillo-tapon-femoral",
    "code": "F14FB-PA00565",
    "description": "TORNILLO TAPÓN FEMORAL",
    "unitPrice": 20,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-4-f14fb-pa00292-clavo-ortolock-femoral-canulad",
    "code": "F14FB-PA00292",
    "description": "CLAVO ORTOLOCK FEMORAL CANULADO 10x320 MM",
    "unitPrice": 400,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-5-f14fb-pa00263-perno-de-bloqueo-f-t-34mm",
    "code": "F14FB-PA00263",
    "description": "PERNO DE BLOQUEO F/T 34MM",
    "unitPrice": 30,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-6-f14fb-pa00287-tornillo-tapon-femoral",
    "code": "F14FB-PA00287",
    "description": "TORNILLO TAPÓN FEMORAL",
    "unitPrice": 20,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-7-f14fb-pa00459-clavo-corto",
    "code": "F14FB-PA00459",
    "description": "CLAVO CORTO",
    "unitPrice": 450,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-8-f14fb-pa00527-hoja-helicoidal",
    "code": "F14FB-PA00527",
    "description": "HOJA HELICOIDAL",
    "unitPrice": 150,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-9-f14fb-pa00538-tornillo",
    "code": "F14FB-PA00538",
    "description": "TORNILLO",
    "unitPrice": 20,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-10-f14fb-pa00658-tapon",
    "code": "F14FB-PA00658",
    "description": "TAPON",
    "unitPrice": 20,
    "sourceSheet": "CLAVOS"
  },
  {
    "id": "sistema-11-f14ab-pa01329-placa-en-t-3-orif-cabeza",
    "code": "F14AB-PA01329",
    "description": "PLACA EN T 3 ORIF. CABEZA",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "tornillo-01-f14db-pa01029",
    "code": "F14DB-PA01029",
    "description": "TORNILLOS CORTICALES DE 1,5 MM",
    "unitPrice": 25,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-12-f14cb-pa00484",
    "code": "F14CB-PA00484",
    "description": "TORNILLOS DE BLOQUEO DE 1,5",
    "unitPrice": 30,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "sistema-14-f14ab-pa01326-placa-en-t-4-orif-cabeza",
    "code": "F14AB-PA01326",
    "description": "PLACA EN T 4 ORIF. CABEZA",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-15-f14ab-pa01322-placa-en-y-3-orif-cabeza",
    "code": "F14AB-PA01322",
    "description": "PLACA EN Y 3 ORIF. CABEZA",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-16-f14ab-pa01336-placa-condilar-de-1-5",
    "code": "F14AB-PA01336",
    "description": "PLACA CONDILAR DE 1,5",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-17-f14ab-pa01337-placa-strut-de-1-5",
    "code": "F14AB-PA01337",
    "description": "PLACA STRUT DE 1,5",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-18-f14ab-pa01334-placa-lcp-estrecha-de-1-5",
    "code": "F14AB-PA01334",
    "description": "PLACA LCP ESTRECHA DE 1,5",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-19-f14ab-pa01316-placa-estrecha-de-1-5",
    "code": "F14AB-PA01316",
    "description": "PLACA ESTRECHA DE 1,5",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-20-f14ab-pa01380-placa-lcp-en-t-adaptacion-de-2",
    "code": "F14AB-PA01380",
    "description": "PLACA LCP EN T ADAPTACION DE 2,0",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "tornillo-13-f14cb-pa00159",
    "code": "F14CB-PA00159",
    "description": "TORNILLOS DE BLOQUEO DE 2,0",
    "unitPrice": 30,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "sistema-22-f14ab-pa01394-placa-lcp-en-y-de-2-0",
    "code": "F14AB-PA01394",
    "description": "PLACA LCP EN Y DE 2,0",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-23-f14ab-pa01385-placa-lcp-en-t-2-0",
    "code": "F14AB-PA01385",
    "description": "PLACA LCP EN T 2,0",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-24-f14ab-pa01389-placa-lcp-en-t-de-2-0",
    "code": "F14AB-PA01389",
    "description": "PLACA LCP EN T DE 2,0",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-25-f14ab-pa00846-placa-estrecha-de-2-0",
    "code": "F14AB-PA00846",
    "description": "PLACA ESTRECHA DE 2,0",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-26-f14ab-pa01406-placa-lcp-cocilar-de-2-4",
    "code": "F14AB-PA01406",
    "description": "PLACA LCP COCILAR DE 2,4",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "tornillo-03-f14db-pa00457",
    "code": "F14DB-PA00457",
    "description": "TORNILLOS CORTICALES DE 2,4 MM",
    "unitPrice": 25,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-14-f14cb-pa00176",
    "code": "F14CB-PA00176",
    "description": "TORNILLOS DE BLOQUEO DE 2,4",
    "unitPrice": 30,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "sistema-29-f14ab-pa01398-placa-lcp-en-t-adaptacion-2-4",
    "code": "F14AB-PA01398",
    "description": "PLACA LCP EN T ADAPTACION 2,4",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-30-f14ab-pa01402-placa-lcp-en-t-2-4",
    "code": "F14AB-PA01402",
    "description": "PLACA LCP EN T 2,4",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-31-f14ab-pa00855-placa-lcp-estrecha-de-2-4",
    "code": "F14AB-PA00855",
    "description": "PLACA LCP ESTRECHA DE 2,4",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-32-f14ab-pa01409-placa-lcp-en-y-de-2-4",
    "code": "F14AB-PA01409",
    "description": "PLACA LCP EN Y DE 2,4",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-33-f14ab-pa00859-placa-lcp-cocilar-de-2-7",
    "code": "F14AB-PA00859",
    "description": "PLACA LCP COCILAR DE 2,7",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "tornillo-04-f14db-pa00465",
    "code": "F14DB-PA00465",
    "description": "TORNILLOS CORTICALES DE 2,7 MM",
    "unitPrice": 25,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-15-f14cb-pa00196",
    "code": "F14CB-PA00196",
    "description": "TORNILLOS DE BLOQUEO DE 2,7",
    "unitPrice": 30,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "sistema-36-f14ab-pa01398-placa-lcp-en-t-2-7",
    "code": "F14AB-PA01398",
    "description": "PLACA LCP EN T 2,7",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-37-f14ab-pa00965-placa-lcp-en-h-2-7",
    "code": "F14AB-PA00965",
    "description": "PLACA LCP EN H 2,7",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-38-f14ab-pa00863-placa-lcp-en-l-oblicua-2-7",
    "code": "F14AB-PA00863",
    "description": "PLACA LCP EN L OBLICUA 2,7",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-39-f14ab-pa00866-placa-lcp-en-l-2-7",
    "code": "F14AB-PA00866",
    "description": "PLACA LCP EN L 2,7",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-40-f14ab-pa00870-placa-lcp-estrecha-2-7",
    "code": "F14AB-PA00870",
    "description": "PLACA LCP ESTRECHA 2,7",
    "unitPrice": 300,
    "sourceSheet": "MINI FRAGMENTOS"
  },
  {
    "id": "sistema-41-f14ab-pa01377-placa-1-3-de-cana",
    "code": "F14AB-PA01377",
    "description": "PLACA 1/3 DE CAÑA",
    "unitPrice": 350,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "tornillo-05-f14db-pa00547",
    "code": "F14DB-PA00547",
    "description": "TORNILLOS CORTICALES DE 3,5 MM",
    "unitPrice": 40,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "sistema-43-f14cb-pa00227-tornillos-bloqueados-de-3-5-mm",
    "code": "F14CB-PA00227",
    "description": "TORNILLOS BLOQUEADOS DE 3,5 MM",
    "unitPrice": 30,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "tornillo-07-f14db-pa00785",
    "code": "F14DB-PA00785",
    "description": "TORNILLOS ESPONJOSO DE 4,0 MM",
    "unitPrice": 25,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "sistema-45-f14ab-pa01308-placa-lcp-small",
    "code": "F14AB-PA01308",
    "description": "PLACA LCP SMALL",
    "unitPrice": 350,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-46-f14ab-pa00030-placa-de-reconstruccion",
    "code": "F14AB-PA00030",
    "description": "PLACA DE RECONSTRUCCION",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-47-f14ab-pa00234-placa-de-reconstruccion-curva",
    "code": "F14AB-PA00234",
    "description": "PLACA DE RECONSTRUCCION CURVA",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-48-f14ab-pa01197-placa-de-clavicula-gancho",
    "code": "F14AB-PA01197",
    "description": "PLACA DE CLAVICULA GANCHO",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-49-f14ab-pa01099-placa-de-clavicula-con-extensi",
    "code": "F14AB-PA01099",
    "description": "PLACA DE CLAVICULA CON EXTENSION",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-50-f14ab-pa00122-placa-de-clavicula-reconstrucc",
    "code": "F14AB-PA00122",
    "description": "PLACA DE CLAVICULA RECONSTRUCCION",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-51-f14ab-pa01118-placa-de-clavicula-superior",
    "code": "F14AB-PA01118",
    "description": "PLACA DE CLAVICULA SUPERIOR",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-52-f14ab-pa01057-placa-de-clavicula-anterior",
    "code": "F14AB-PA01057",
    "description": "PLACA DE CLAVICULA ANTERIOR",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-53-f14ab-pa00822-placa-de-clavicula-anterior-mr",
    "code": "F14AB-PA00822",
    "description": "PLACA DE CLAVICULA ANTERIOR MR-VA",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-54-f14cb-pa00227-tornillos-de-bloqueo-de-3-5-mm",
    "code": "F14CB-PA00227",
    "description": "TORNILLOS DE BLOQUEO DE 3,5 MM",
    "unitPrice": 30,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-55-f14ab-pa00122-placa-de-humero-proximal",
    "code": "F14AB-PA00122",
    "description": "PLACA DE HUMERO PROXIMAL",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-56-f14ab-pa01057-placa-lcp-humero-estrecha",
    "code": "F14AB-PA01057",
    "description": "PLACA LCP HUMERO ESTRECHA",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-57-f14ab-pa00571-placa-lcp-humero-distal-latera",
    "code": "F14AB-PA00571",
    "description": "PLACA LCP HUMERO DISTAL LATERAL",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-58-f14bb-pa00574-placa-lcp-humero-distal-medial",
    "code": "F14BB-PA00574",
    "description": "PLACA LCP HUMERO DISTAL MEDIAL",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-59-f14ab-pa01293-placa-humero-gancho",
    "code": "F14AB-PA01293",
    "description": "PLACA HUMERO GANCHO",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-60-f14bb-pa00589-placa-para-olecrano",
    "code": "F14BB-PA00589",
    "description": "PLACA PARA OLECRANO",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-61-f14ab-pa00986-placa-para-olecrano-mr-va",
    "code": "F14AB-PA00986",
    "description": "PLACA PARA OLECRANO MR-VA",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-62-f14ab-pa00811-placa-lcp-humero-distal-latera",
    "code": "F14AB-PA00811",
    "description": "PLACA LCP HUMERO DISTAL LATERAL MR-VA",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-63-f14ab-pa00726-placa-lcp-humero-distal-medial",
    "code": "F14AB-PA00726",
    "description": "PLACA LCP HUMERO DISTAL MEDIAL MR-VA",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-64-f14ab-pa00987-placa-para-olecrano-mr-va",
    "code": "F14AB-PA00987",
    "description": "PLACA PARA OLECRANO MR-VA",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-65-f14ab-pa01003-placa-para-fibula-posterolater",
    "code": "F14AB-PA01003",
    "description": "PLACA PARA FIBULA POSTEROLATERAL",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-66-f14ab-pa01021-placa-para-fibula-distal-later",
    "code": "F14AB-PA01021",
    "description": "PLACA PARA FIBULA DISTAL LATERAL",
    "unitPrice": 350,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-67-f14ab-pa00700-placa-para-tibia-proximal-post",
    "code": "F14AB-PA00700",
    "description": "PLACA PARA TIBIA PROXIMAL POSTEROMEDIAL",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-68-f14ab-pa00837-placa-para-tibia-proximal-bajo",
    "code": "F14AB-PA00837",
    "description": "PLACA PARA TIBIA PROXIMAL BAJO CONTACTO",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-69-f14ab-pa00955-placa-para-tibia-proximal-medi",
    "code": "F14AB-PA00955",
    "description": "PLACA PARA TIBIA PROXIMAL MEDIAL",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-70-f14ab-pa01053-placa-para-tibia-distal-medial",
    "code": "F14AB-PA01053",
    "description": "PLACA PARA TIBIA DISTAL MEDIAL",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-71-f14ab-pa01369-placa-para-tibia-posterolatera",
    "code": "F14AB-PA01369",
    "description": "PLACA PARA TIBIA POSTEROLATERAL",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-72-f14ab-pa00104-placa-para-tibia-distal-medial",
    "code": "F14AB-PA00104",
    "description": "PLACA PARA TIBIA DISTAL MEDIAL",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-73-f14ab-pa00973-placa-para-tibia-distal-antero",
    "code": "F14AB-PA00973",
    "description": "PLACA PARA TIBIA DISTAL ANTEROLATERAL",
    "unitPrice": 500,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-74-f14ab-pa00166-placa-para-tibia-distal-antero",
    "code": "F14AB-PA00166",
    "description": "PLACA PARA TIBIA DISTAL ANTEROLATERAL",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-75-f14ab-pa00761-placa-para-radio-distal-volar",
    "code": "F14AB-PA00761",
    "description": "PLACA PARA RADIO DISTAL VOLAR",
    "unitPrice": 440,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "tornillo-18-f14cb-pa00287",
    "code": "F14CB-PA00287",
    "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,4",
    "unitPrice": 40,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "sistema-77-f14ab-pa00746-placa-para-radio-distal-volar",
    "code": "F14AB-PA00746",
    "description": "PLACA PARA RADIO DISTAL VOLAR",
    "unitPrice": 440,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-78-f14ab-pa00754-placa-para-radio-distal-volar",
    "code": "F14AB-PA00754",
    "description": "PLACA PARA RADIO DISTAL VOLAR",
    "unitPrice": 440,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-79-f14ab-pa01131-placa-para-radio-distal-volar-",
    "code": "F14AB-PA01131",
    "description": "PLACA PARA RADIO DISTAL VOLAR OBLICUA",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-80-f14ab-pa01139-placa-para-radio-distal-volar-",
    "code": "F14AB-PA01139",
    "description": "PLACA PARA RADIO DISTAL VOLAR EN L 3 TORNILLOS",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-81-f14ab-pa01135-placa-para-radio-distal-volar-",
    "code": "F14AB-PA01135",
    "description": "PLACA PARA RADIO DISTAL VOLAR EN L 2 TORNILLOS",
    "unitPrice": 450,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-82-f14ab-pa00876-placa-para-radio-distal-recta",
    "code": "F14AB-PA00876",
    "description": "PLACA PARA RADIO DISTAL RECTA",
    "unitPrice": 440,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-83-f14ab-pa01062-placa-para-radio-distal-dia-me",
    "code": "F14AB-PA01062",
    "description": "PLACA PARA RADIO DISTAL DIA META",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-84-f14ab-pa01067-placa-para-radio-distal-extrar",
    "code": "F14AB-PA01067",
    "description": "PLACA PARA RADIO DISTAL EXTRARTICULAR",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-85-f14ab-pa01204-placa-para-radio-volar-columna",
    "code": "F14AB-PA01204",
    "description": "PLACA PARA RADIO VOLAR COLUMNA",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-86-f14ab-pa00184-placa-lcp-en-t",
    "code": "F14AB-PA00184",
    "description": "PLACA LCP EN T",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-87-f14ab-pa00252-placa-lcp-en-t-oblicua",
    "code": "F14AB-PA00252",
    "description": "PLACA LCP EN T OBLICUA",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-88-f14ab-pa01435-placa-para-radio-distal-estand",
    "code": "F14AB-PA01435",
    "description": "PLACA PARA RADIO DISTAL ESTANDAR",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-89-f14ab-pa01449-placa-para-radio-distal-ancha",
    "code": "F14AB-PA01449",
    "description": "PLACA PARA RADIO DISTAL ANCHA",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-90-f14ab-pa01425-placa-para-radio-distal-angost",
    "code": "F14AB-PA01425",
    "description": "PLACA PARA RADIO DISTAL ANGOSTA",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "sistema-91-f14ab-pa00178-placa-para-radio-distal-angulo",
    "code": "F14AB-PA00178",
    "description": "PLACA PARA RADIO DISTAL ANGULO OBLICUO",
    "unitPrice": 400,
    "sourceSheet": "PLACAS ANATOMICAS"
  },
  {
    "id": "tornillo-02-f14db-pa00415",
    "code": "F14DB-PA00415",
    "description": "TORNILLOS CORTICALES DE 2,0 MM",
    "unitPrice": 25,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-06-f14db-pa00601",
    "code": "F14DB-PA00601",
    "description": "TORNILLOS CORTICALES DE 4,5 MM",
    "unitPrice": 40,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-08-f14db-pa00827",
    "code": "F14DB-PA00827",
    "description": "TORNILLOS ESPONJOSO DE 6,5 MM",
    "unitPrice": 25,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-09-f14db-pa00673",
    "code": "F14DB-PA00673",
    "description": "TORNILLOS ESPONJOSO ROSCA PARCIAL DE 4,0 MM",
    "unitPrice": 25,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-10-f14db-pa00717",
    "code": "F14DB-PA00717",
    "description": "TORNILLOS ESPONJOSO ROSCA PARCIAL DE 6,5 R 16 MM",
    "unitPrice": 25,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-11-f14db-pa00771",
    "code": "F14DB-PA00771",
    "description": "TORNILLOS ESPONJOSO ROSCA PARCIAL DE 6,5 R 32 MM",
    "unitPrice": 40,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-16-f14cb-pa00227",
    "code": "F14CB-PA00227",
    "description": "TORNILLOS DE BLOQUEO DE 3,5",
    "unitPrice": 30,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-17-f14cb-pa00259",
    "code": "F14CB-PA00259",
    "description": "TORNILLOS DE BLOQUEO DE 5,0",
    "unitPrice": 40,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-19-f14cb-pa00297",
    "code": "F14CB-PA00297",
    "description": "TORNILLOS DE BLOQUEO AUTOROSCANTE DE 2,7",
    "unitPrice": 40,
    "sourceSheet": "TORNILLOS"
  },
  {
    "id": "tornillo-20-f14db-pa00375",
    "code": "F14DB-PA00375",
    "description": "2.0MM CORTICAL SCREW, SELF-TAPPING F2.0*10MM",
    "unitPrice": 30,
    "sourceSheet": "TORNILLOS"
  }
];
