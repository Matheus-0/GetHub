const repoSize = (sizeInBytes) => ((sizeInBytes >= 1024)
    ? (`${Math.round(sizeInBytes / 1024)}MB`)
    : (`${sizeInBytes}kB`));

export default repoSize;
