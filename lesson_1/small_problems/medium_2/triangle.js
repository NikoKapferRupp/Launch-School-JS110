/* 
to be a trinagle: 
    + sum of all degrees ex. 180
    + every angle over 0 degrees

to be Right:
    + one angle is 90 deg.

to be Acute:
    + all three angles are less than 90 deg.

to be Obtuse: 
    + one angle is greater than 90 deg.
*/


function triangle(angle1, angle2, angle3) {
    let sumOfAngles = angle1 + angle2 + angle3;
    if (sumOfAngles != 180 || [angle1, angle2, angle3].includes(0)) {
        return 'invalid';        
    } else if ([angle1, angle2, angle3].every(currentValue => currentValue < 90)) {
        return 'acute';
    } else if ([angle1, angle2, angle3].some(currentValue => currentValue > 90)) {
        return 'abtuse';
    } else if ([angle1, angle2, angle3].filter(currentValue => currentValue === 90).length === 1) {
        return 'right'
    }

}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"