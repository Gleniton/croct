export const timestampDiffToMinutes = function (start, end) {
    const differenceInSeconds = parseInt((end - start)/1000);
    return (differenceInSeconds / 60);
};
