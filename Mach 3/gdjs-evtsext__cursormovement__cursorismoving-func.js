
if (typeof gdjs.evtsExt__CursorMovement__CursorIsMoving !== "undefined") {
  gdjs.evtsExt__CursorMovement__CursorIsMoving.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CursorMovement__CursorIsMoving = {};

gdjs.evtsExt__CursorMovement__CursorIsMoving.conditionTrue_0 = {val:false};
gdjs.evtsExt__CursorMovement__CursorIsMoving.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CursorMovement__CursorIsMoving.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CursorMovement__CursorIsMoving.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__CursorMovement__CursorIsMoving.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CursorMovement__CursorIsMoving.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CursorMovement__CursorIsMoving.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("__mousemovement_previousPositionIsKnown"), true);
}if (gdjs.evtsExt__CursorMovement__CursorIsMoving.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


gdjs.evtsExt__CursorMovement__CursorIsMoving.condition0IsTrue_0.val = false;
gdjs.evtsExt__CursorMovement__CursorIsMoving.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__CursorMovement__CursorIsMoving.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__mousemovement_MousePreX")) == gdjs.evtTools.input.getMouseX(runtimeScene, "", 0);
}if ( gdjs.evtsExt__CursorMovement__CursorIsMoving.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__CursorMovement__CursorIsMoving.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__mousemovement_MousePreY")) == gdjs.evtTools.input.getMouseY(runtimeScene, "", 0);
}}
if (gdjs.evtsExt__CursorMovement__CursorIsMoving.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


{
{runtimeScene.getVariables().get("__mousemovement_MousePreX").setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("__mousemovement_MousePreY").setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("__mousemovement_previousPositionIsKnown"), true);
}}

}


};

gdjs.evtsExt__CursorMovement__CursorIsMoving.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CursorMovement__CursorIsMoving.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CursorMovement__CursorIsMoving.registeredGdjsCallbacks = [];