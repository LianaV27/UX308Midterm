/*Write a function that determines damage level given earthquake intensity measured on the Richter scale.
    -------------------------------------------------------
    Parameters:
        intensity - Richter scale number for severity of earthquake

    Returns:
        result - description of earthquake damage*/

function assessDamage(intensity) {
    let damage;

    if (intensity < 5) {
        damage = "Little or no damage";

    } else if (intensity >= 5 && intensity < 5.5) {
        damage = "Some damage";

    } else if (intensity >= 5.5 && intensity < 6.5) {
        damage = "Serious damage: walls may crack or fall";

    } else if (intensity >= 6.5 && intensity < 7.5) {
        damage = "Disaster: buildings may collapse";

    } else if (intensity >= 7.5) {
        damage = "Catastrophe: most buildings destroyed";
    }

    return damage;
}
console.log(`If the earthquake is a 6.2 on the Richter scale, there is ${assessDamage(6.2)}.`);

export { assessDamage }