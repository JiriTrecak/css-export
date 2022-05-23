
import { Colors } from './colors';
import { Measures } from './measures';
const border = {
           color: Colors.semanticPrimaryCtaPrimaryBackground,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Inside",
         };
const border2 = {
           color: Colors.semanticPrimaryCtaPrimaryBackground,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Inside",
         };
const klm = {
           color: Colors.paletteBlueBlue800,
           width: Measures.genericTiny,
           position: "Inside",
         };
const klm3 = {
           color: Colors.paletteBlueBlue200,
           width: {
                   measure: 1,
                   unit: "Pixels",
                   css: "1px"
                  },
           position: "Inside",
         };
const borderX = {
           color: Colors.semanticPrimaryCtaPrimaryBackground,
           width: Measures.genericTiny,
           position: "Inside",
         };


export const Borders = {
      border,
      border2,
      klm,
      klm3,
      borderX,
}