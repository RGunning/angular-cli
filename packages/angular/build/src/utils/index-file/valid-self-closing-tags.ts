/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

/** A list of valid self closing HTML elements */
export const VALID_SELF_CLOSING_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',

  /** SVG tags */
  'animate',
  'circle',
  'ellipse',
  'line',
  'path',
  'polygon',
  'polyline',
  'rect',
  'text',
  'tspan',
  'linearGradient',
  'radialGradient',
  'stop',
  'image',
  'pattern',
  'defs',
  'g',
  'marker',
  'mask',
  'style',
  'symbol',
  'use',
  'view',

  /** MathML tags */
  'mspace',
  'mphantom',
  'mrow',
  'mfrac',
  'msqrt',
  'mroot',
  'mstyle',
  'merror',
  'mpadded',
  'mtable',
]);
