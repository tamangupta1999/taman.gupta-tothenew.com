export function areaOfCricle(radius){
    return 3.14*radius*radius;
}

export function areaOfRectangle(width , height){
    return width*height;
}

export function areaOfCylinder(radius , height){
    let result = (2*3.14*radius*height)+(2*3.14*radius*radius);
    return result;
}