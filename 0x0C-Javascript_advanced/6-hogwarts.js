class studentHogwarts {
  privateScore = 0;
  name = null;
  constructor (name) {
    this.name = name;
  }
  #changeScoreBy = function (points) {
    this.privateScore = points + this.privateScore;
  }
    setName = function (newName) {
      this.name = newName;
    };
    rewardStudent = function () {
      this.#changeScoreBy(1);
    };
    penalizeStudent = function () {
      this.#changeScoreBy(-1);
    };
    getScore = function () {
      return this.name + ': ' + this.privateScore;
    };
}

harry = new studentHogwarts('Harry');
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

draco = new studentHogwarts('Draco');
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}
console.log(draco.getScore());
