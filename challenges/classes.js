// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakers {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const obj = new CuboidMakers({
  length: 4,
  width: 5,
  height: 5
});

console.log(obj.volume());
console.log(obj.surfaceArea());

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMakers extends CuboidMakers {
  constructor(cubAttr) {
    super(cubAttr);
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const xyz = new CubeMakers({
  length: 10,
  width: 8,
  height: 12
});

console.log(xyz.volume());
console.log(xyz.surfaceArea());
