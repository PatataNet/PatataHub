
gdjs.evtsExt__Explosion__Explosion = gdjs.evtsExt__Explosion__Explosion || {};

/**
 * Behavior generated from Explosion
 */
gdjs.evtsExt__Explosion__Explosion.Explosion = class Explosion extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Explosion__Explosion.Explosion.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Explosion
 */
gdjs.evtsExt__Explosion__Explosion.Explosion.SharedData = class ExplosionSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Explosion__Explosion.Explosion.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Explosion_ExplosionSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Explosion_ExplosionSharedData = new gdjs.evtsExt__Explosion__Explosion.Explosion.SharedData(
      initialData
    );
  }
  return instanceContainer._Explosion_ExplosionSharedData;
}

// Methods:
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext = {};
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.GDObjectObjects1[i].setZOrder(50);
}
}}

}


};

gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Explosion__Explosion.Explosion.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Explosion::Explosion", gdjs.evtsExt__Explosion__Explosion.Explosion);
