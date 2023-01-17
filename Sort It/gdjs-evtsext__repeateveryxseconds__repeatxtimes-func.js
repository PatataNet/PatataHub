
if (typeof gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes !== "undefined") {
  gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes = {};

gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_0 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_1 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_2 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition2IsTrue_2 = {val:false};


gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_1 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_0;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(11417812);
}
}if (gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : ""));
}{runtimeScene.getVariables().get("__RepeatEveryXSeconds_").getChild("Counter").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : "")).setNumber(0);
}}

}


{


gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_0.val = false;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("time")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : ""));
}if ( gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_1 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_0;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_1.val = false;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_1.val = false;
{
{gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_2 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_1;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_2.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("limit")) || 0 : 0) == -(1));
}
if( gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition0IsTrue_1.val ) {
    gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__RepeatEveryXSeconds_").getChild("Counter").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : ""))) < (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("limit")) || 0 : 0);
if( gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_1.val ) {
    gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : ""));
}{runtimeScene.getVariables().get("__RepeatEveryXSeconds_").getChild("Counter").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : "")).add(1);
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.func = function(runtimeScene, timerName, time, limit, parentEventsFunctionContext) {
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
if (argName === "timerName") return timerName;
if (argName === "time") return time;
if (argName === "limit") return limit;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.registeredGdjsCallbacks = [];