
if (typeof gdjs.evtsExt__CursorMovement__CursorStayStill !== "undefined") {
  gdjs.evtsExt__CursorMovement__CursorStayStill.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CursorMovement__CursorStayStill = {};

gdjs.evtsExt__CursorMovement__CursorStayStill.conditionTrue_0 = {val:false};
gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CursorMovement__CursorStayStill.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CursorMovement__CursorStayStill.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__CursorMovement__CursorStayStill.conditionTrue_1 = {val:false};
gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CursorMovement__CursorStayStill.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__CursorMovement__CursorStayStill.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__CursorMovement__CursorStayStill.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CursorMovement__CursorStayStill.conditionTrue_1 = gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_0;
gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_1.val = false;
gdjs.evtsExt__CursorMovement__CursorStayStill.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_1.val = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("__mousemovement_HasMovedOnce"), true));
if( gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CursorMovement__CursorStayStill.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CursorMovement__CursorStayStill.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0), "__mousemovement_MouseStayStill");
if( gdjs.evtsExt__CursorMovement__CursorStayStill.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CursorMovement__CursorStayStill.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_0.val = gdjs.evtsExt__CursorMovement__CursorIsMoving.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__CursorMovement__CursorStayStill.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__mousemovement_MouseStayStill");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("__mousemovement_HasMovedOnce"), true);
}}

}


};

gdjs.evtsExt__CursorMovement__CursorStayStill.func = function(runtimeScene, Duration, parentEventsFunctionContext) {
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
if (argName === "Duration") return Duration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CursorMovement__CursorStayStill.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CursorMovement__CursorStayStill.registeredGdjsCallbacks = [];