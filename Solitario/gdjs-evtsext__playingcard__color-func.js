
if (typeof gdjs.evtsExt__PlayingCard__Color !== "undefined") {
  gdjs.evtsExt__PlayingCard__Color.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlayingCard__Color = {};

gdjs.evtsExt__PlayingCard__Color.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__Color.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__Color.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__Color.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__Color.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__Color.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PlayingCard__Color.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "Black"; }}}

}


{


gdjs.evtsExt__PlayingCard__Color.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlayingCard__Color.conditionTrue_1 = gdjs.evtsExt__PlayingCard__Color.condition0IsTrue_0;
gdjs.evtsExt__PlayingCard__Color.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CardId")) || 0 : 0) <= 25);
}
}if (gdjs.evtsExt__PlayingCard__Color.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "Red"; }}}

}


};

gdjs.evtsExt__PlayingCard__Color.func = function(runtimeScene, CardId, parentEventsFunctionContext) {
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
if (argName === "CardId") return CardId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlayingCard__Color.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlayingCard__Color.registeredGdjsCallbacks = [];