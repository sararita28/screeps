module.exports.loop = function () {
  //Create screen from spawn
  Game.spawns["Spawn1"].spawnCreep([WORK, MOVE, CARRY, MOVE], "My First Creep");

  //Reference to creep
  let mycreep = Game.creeps["My First Creep"];

  //If creep has no energy, go to energy source and harvest
  if (mycreep.store[RESOURCE_ENERGY] == 0) {
    //Reference to source
    const source = Game.getObjectById("SOURCEIDGOESHERE");
    mycreep.moveTo(source);
    mycreep.harvest(source);
    //If creep has energy, make it go to controller and upgrade
  } else {
    //Reference to controller
    mycreep.moveTo(controller);
    mycreep.upgradeController(controller);
  }
};
