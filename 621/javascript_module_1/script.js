function calculateVolume(width, height, depth) {
    return width * height * depth;
}

const dimensions = [4, 5, 6];

const volume = calculateVolume(...dimensions);

console.log(volume); // 120