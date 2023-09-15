
if (typeof gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement !== "undefined") {
  gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement = {};
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1= [];
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2= [];
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects3= [];
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDChangeButtonObjects1= [];
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDChangeButtonObjects2= [];
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDChangeButtonObjects3= [];


gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95HandlePlayerMovement_46GDChangeButtonObjects1Objects = Hashtable.newFrom({"ChangeButton": gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDChangeButtonObjects1});
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) + 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i].getY() < gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i].returnVariable(gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2[i].getVariables().get("GoingDown")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getY() > gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) + 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getVariables().get("GoingUp")).setNumber(1);
}
}}

}


};gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getVariables().get("GoingUp")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getVariables().get("GoingDown")).setNumber(0);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ChangeButton"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDChangeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95HandlePlayerMovement_46GDChangeButtonObjects1Objects, runtimeScene, true, true);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getVariables().get("GoingDown")).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1[i].getVariables().get("GoingUp")).setNumber(1);
}
}}

}


};

gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.func = function(runtimeScene, Player, TopDownMovement, ChangeButton, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "ChangeButton": ChangeButton
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "ChangeButton": gdjs.objectsListsToArray(ChangeButton)
},
  _behaviorNamesMap: {
"TopDownMovement": TopDownMovement
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

gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects1.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects2.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDPlayerObjects3.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDChangeButtonObjects1.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDChangeButtonObjects2.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.GDChangeButtonObjects3.length = 0;

gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SpaceShooterPlayer__HandlePlayerMovement.registeredGdjsCallbacks = [];