export default function indicateHealth(indicator) {
    let result = 0;
    if (indicator.health > 50) {
        result = 'healthy';
    } else if (indicator.health < 50 && indicator.health > 15) {
        result = 'wounded';
    } else {
        result = 'critical';
    }
    return result;
}
