function calculateSurge(activeDrivers) {
    // basic surge logic
    if (activeDrivers < 3) return 1.5;
    if (activeDrivers < 5) return 1.2;
    return 1;
}

module.exports = { calculateSurge };
