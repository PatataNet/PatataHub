
gdjs.evtsExt__Respawn__Respawn = gdjs.evtsExt__Respawn__Respawn || {};

/**
 * Behavior generated from Respawn
 */
gdjs.evtsExt__Respawn__Respawn.Respawn = class Respawn extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Respawn__Respawn.Respawn.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.InvincibilityTime = behaviorData.InvincibilityTime !== undefined ? behaviorData.InvincibilityTime : Number("5") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.InvincibilityTime !== newBehaviorData.InvincibilityTime)
      this._behaviorData.InvincibilityTime = newBehaviorData.InvincibilityTime;

    return true;
  }

  // Properties:
  
  _getInvincibilityTime() {
    return this._behaviorData.InvincibilityTime !== undefined ? this._behaviorData.InvincibilityTime : Number("5") || 0;
  }
  _setInvincibilityTime(newValue) {
    this._behaviorData.InvincibilityTime = newValue;
  }
}

/**
 * Shared data generated from Respawn
 */
gdjs.evtsExt__Respawn__Respawn.Respawn.SharedData = class RespawnSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Respawn__Respawn.Respawn.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Respawn_RespawnSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Respawn_RespawnSharedData = new gdjs.evtsExt__Respawn__Respawn.Respawn.SharedData(
      initialData
    );
  }
  return instanceContainer._Respawn_RespawnSharedData;
}

// Methods:
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("OriginY")).setNumber((gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("OriginX")).setNumber((gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].getX()));
}
}}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects2= [];

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1[i].setPosition((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1[i].getVariables().get("OriginX"))),(gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1[i].getVariables().get("OriginY"))));
}
}{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1[i].getVariables().get("Invincible")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1[i].resetTimer("Invincible");
}
}{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1[i].unpauseTimer("Invincible");
}
}}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawn = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.respawnContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects2= [];

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1);

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1[i].getVariables().get("Invincible")) == 1 ) {
        gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1[k] = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincible = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.isInvincibleContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].pauseTimer("Invincible");
}
}{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("Invincible");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("Invincible", (gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInvincibilityTime())) ) {
        gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Invincible")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].pauseTimer("Invincible");
}
}{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("Invincible");
}
}}

}


{


{
}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("OriginY")).setNumber((gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("OriginX")).setNumber((gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getX()));
}
}}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Respawn::Respawn", gdjs.evtsExt__Respawn__Respawn.Respawn);
