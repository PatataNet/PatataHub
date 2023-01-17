
if (typeof gdjs.evtsExt__ExtendedMath__IsEven !== "undefined") {
  gdjs.evtsExt__ExtendedMath__IsEven.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedMath__IsEven = {};

gdjs.evtsExt__ExtendedMath__IsEven.conditionTrue_0 = {val:false};
gdjs.evtsExt__ExtendedMath__IsEven.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ExtendedMath__IsEven.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__ExtendedMath__IsEven.conditionTrue_1 = {val:false};
gdjs.evtsExt__ExtendedMath__IsEven.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__ExtendedMath__IsEven.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__ExtendedMath__IsEven.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedMath__IsEven.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ExtendedMath__IsEven.conditionTrue_1 = gdjs.evtsExt__ExtendedMath__IsEven.condition0IsTrue_0;
gdjs.evtsExt__ExtendedMath__IsEven.conditionTrue_1.val = (gdjs.evtTools.common.mod((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), 2) == 0);
}
}if (gdjs.evtsExt__ExtendedMath__IsEven.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ExtendedMath__IsEven.func = function(runtimeScene, Value, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedMath__IsEven.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ExtendedMath__IsEven.registeredGdjsCallbacks = [];