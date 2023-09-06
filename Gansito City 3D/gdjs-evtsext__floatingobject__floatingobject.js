
gdjs.evtsExt__FloatingObject__FloatingObject = gdjs.evtsExt__FloatingObject__FloatingObject || {};

/**
 * Behavior generated from Floating object
 */
gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject = class FloatingObject extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
    this._behaviorData.Duration = behaviorData.Duration !== undefined ? behaviorData.Duration : Number("1.5") || 0;
    this._behaviorData.DeltaY = behaviorData.DeltaY !== undefined ? behaviorData.DeltaY : Number("-25") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Tween !== newBehaviorData.Tween)
      this._behaviorData.Tween = newBehaviorData.Tween;
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;
    if (oldBehaviorData.DeltaY !== newBehaviorData.DeltaY)
      this._behaviorData.DeltaY = newBehaviorData.DeltaY;

    return true;
  }

  // Properties:
  
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("1.5") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getDeltaY() {
    return this._behaviorData.DeltaY !== undefined ? this._behaviorData.DeltaY : Number("-25") || 0;
  }
  _setDeltaY(newValue) {
    this._behaviorData.DeltaY = newValue;
  }
}

/**
 * Shared data generated from Floating object
 */
gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.SharedData = class FloatingObjectSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._FloatingObject_FloatingObjectSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._FloatingObject_FloatingObjectSharedData = new gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.SharedData(
      initialData
    );
  }
  return instanceContainer._FloatingObject_FloatingObjectSharedData;
}

// Methods:
gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(8758420);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween("_FloatingObject.Fade", 0, "easeOutQuad", 1000 * (gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()), true);
}
}{for(var i = 0, len = gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween("_FloatingObject.Move", (gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getY()) + (gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaY()), "easeOutCubic", 1000 * (gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) / 3, false);
}
}}

}


};

gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "Tween": this._getTween()
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

gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("FloatingObject::FloatingObject", gdjs.evtsExt__FloatingObject__FloatingObject.FloatingObject);
