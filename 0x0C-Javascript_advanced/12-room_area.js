let roomDimensions = {
  width: 50,
  length: 100,
  getArea () {
    return this.width * this.length;
  }
};
boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(boundGetArea());
