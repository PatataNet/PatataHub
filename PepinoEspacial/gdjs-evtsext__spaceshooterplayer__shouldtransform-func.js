
if (typeof gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform !== "undefined") {
  gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform = {};
gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.GDChangeButtonObjects1= [];
gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.GDChangeButtonObjects2= [];


gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95ShouldTransform_46GDChangeButtonObjects1Objects = Hashtable.newFrom({"ChangeButton": gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.GDChangeButtonObjects1});
gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ChangeButton"), gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.GDChangeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95ShouldTransform_46GDChangeButtonObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.func = function(runtimeScene, ChangeButton, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ChangeButton": ChangeButton
},
  _objectArraysMap: {
"ChangeButton": gdjs.objectsListsToArray(ChangeButton)
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

gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.GDChangeButtonObjects1.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.GDChangeButtonObjects2.length = 0;

gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SpaceShooterPlayer__ShouldTransform.registeredGdjsCallbacks = [];