
if (typeof gdjs.evtsExt__MinesweeperFunctions__NeighborCount !== "undefined") {
  gdjs.evtsExt__MinesweeperFunctions__NeighborCount.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MinesweeperFunctions__NeighborCount = {};
gdjs.evtsExt__MinesweeperFunctions__NeighborCount.GDObjectObjects1= [];
gdjs.evtsExt__MinesweeperFunctions__NeighborCount.GDObjectObjects2= [];

gdjs.evtsExt__MinesweeperFunctions__NeighborCount.conditionTrue_0 = {val:false};
gdjs.evtsExt__MinesweeperFunctions__NeighborCount.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MinesweeperFunctions__NeighborCount.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MinesweeperFunctions__NeighborCount.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__MinesweeperFunctions__NeighborCount.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__MinesweeperFunctions__NeighborCount.GDObjectObjects1[0].getVariables()).get("__Minesweeper").getChild("Neighbors"))); }}}

}


};

gdjs.evtsExt__MinesweeperFunctions__NeighborCount.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MinesweeperFunctions__NeighborCount.GDObjectObjects1.length = 0;
gdjs.evtsExt__MinesweeperFunctions__NeighborCount.GDObjectObjects2.length = 0;

gdjs.evtsExt__MinesweeperFunctions__NeighborCount.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__MinesweeperFunctions__NeighborCount.registeredGdjsCallbacks = [];