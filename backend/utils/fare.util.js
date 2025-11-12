export function calculateSurge(activeDrivers) {
    // Simple logic: if drivers < 3, increase surge
    if (activeDrivers < 3) return 1.5;
    if (activeDrivers < 5) return 1.2;
    return 1;
}

export function calculateFare(distanceKm, surge = 1) {
    const baseFare = 30;      // base
    const perKm = 12;         // cost per km
    let fare = baseFare + distanceKm * perKm;
    fare = fare * surge;
    return Math.round(fare);
}
