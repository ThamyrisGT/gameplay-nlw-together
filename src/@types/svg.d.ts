declare module "*.svg" {
    const content: any;
    export default content;
  }



//   declare module '*.svg' {
//     import * as React from 'react';
  
//     export const ReactComponent: React.FunctionComponent<React.SVGProps<
//       SVGSVGElement
//     > & { title?: string }>;
  
//     const src: string;
//     export default src;
//   }


//   declare module '*.svg' {
//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default content;
//   }


// declare module  "* .svg"{
//     import React from "react";
//     import {SvgProps} from 'react-native-svg';
//     const content: React.FC<SvgProps>;        // FC: componente funcional
//     export default content;     

// }