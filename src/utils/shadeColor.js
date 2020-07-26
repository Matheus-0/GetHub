/* eslint-disable no-mixed-operators */
/* eslint-disable radix */
const shadeColor = (color, percentage) => {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percentage) / 100);
    G = parseInt(G * (100 + percentage) / 100);
    B = parseInt(B * (100 + percentage) / 100);

    R = ((R < 255) ? R : 255).toString(16);
    G = ((G < 255) ? G : 255).toString(16);
    B = ((B < 255) ? B : 255).toString(16);

    const newR = (R.length === 1) ? `0${R}` : R;
    const newG = (G.length === 1) ? `0${G}` : G;
    const newB = (B.length === 1) ? `0${B}` : B;

    return `#${newR}${newG}${newB}`;
};

export default shadeColor;
