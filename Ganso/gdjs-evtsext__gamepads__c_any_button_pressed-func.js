
if (typeof gdjs.evtsExt__Gamepads__C_Any_Button_pressed !== "undefined") {
  gdjs.evtsExt__Gamepads__C_Any_Button_pressed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__C_Any_Button_pressed = {};

gdjs.evtsExt__Gamepads__C_Any_Button_pressed.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__C_Any_Button_pressed.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__C_Any_Button_pressed.userFunc0xa30440 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameter
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in condition: "Any gamepad button pressed", is not valid number, must be between 0 and 4.');
    return;
}
var gamepad = gamepads[playerId];
if (gamepad == null) return;

var buttonId;
for (var i = 0; i < gamepad.buttons.length; i++) { //For each buttons
    if (gamepad.buttons[i].pressed) { //One of them is pressed
        buttonId = i; //Save the button pressed
        break;
    }
}

if (buttonId === undefined) {
    eventsFunctionContext.returnValue = false;
    return;
}

//When a button is pressed, save the button in lastButtonUsed for each players
if (gamepad.buttons[buttonId].pressed) gdjs._extensionController.players[playerId].lastButtonUsed = buttonId;
eventsFunctionContext.returnValue = gamepad.buttons[buttonId].pressed;



};
gdjs.evtsExt__Gamepads__C_Any_Button_pressed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Any_Button_pressed.userFunc0xa30440(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func = function(runtimeScene, player_ID, parentEventsFunctionContext) {
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
if (argName === "player_ID") return player_ID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__C_Any_Button_pressed.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Gamepads__C_Any_Button_pressed.registeredGdjsCallbacks = [];