/* eslint-disable no-bitwise */
const darkenColor = (color) => ((color & 0xfefefe) >> 1) | (color & 0x808080);

export default darkenColor;
