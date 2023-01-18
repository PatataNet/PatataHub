
gdjs.evtsExt__BatBounce__BatBounce = gdjs.evtsExt__BatBounce__BatBounce || {};

/**
 * Behavior generated from Bat bounce
 */
gdjs.evtsExt__BatBounce__BatBounce.BatBounce = class BatBounce extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__BatBounce__BatBounce.BatBounce.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Property = behaviorData.Property !== undefined ? behaviorData.Property : Number("") || 0;
    this._behaviorData.OldX = Number("0") || 0;
    this._behaviorData.OldY = Number("") || 0;
    this._behaviorData.OldForceAngle = Number("") || 0;
    this._behaviorData.OldForceLength = Number("") || 0;
    this._behaviorData.NormalAngle = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Property !== newBehaviorData.Property)
      this._behaviorData.Property = newBehaviorData.Property;
    if (oldBehaviorData.OldX !== newBehaviorData.OldX)
      this._behaviorData.OldX = newBehaviorData.OldX;
    if (oldBehaviorData.OldY !== newBehaviorData.OldY)
      this._behaviorData.OldY = newBehaviorData.OldY;
    if (oldBehaviorData.OldForceAngle !== newBehaviorData.OldForceAngle)
      this._behaviorData.OldForceAngle = newBehaviorData.OldForceAngle;
    if (oldBehaviorData.OldForceLength !== newBehaviorData.OldForceLength)
      this._behaviorData.OldForceLength = newBehaviorData.OldForceLength;
    if (oldBehaviorData.NormalAngle !== newBehaviorData.NormalAngle)
      this._behaviorData.NormalAngle = newBehaviorData.NormalAngle;

    return true;
  }

  // Properties:
  
  _getProperty() {
    return this._behaviorData.Property !== undefined ? this._behaviorData.Property : Number("") || 0;
  }
  _setProperty(newValue) {
    this._behaviorData.Property = newValue;
  }
  _getOldX() {
    return this._behaviorData.OldX !== undefined ? this._behaviorData.OldX : Number("0") || 0;
  }
  _setOldX(newValue) {
    this._behaviorData.OldX = newValue;
  }
  _getOldY() {
    return this._behaviorData.OldY !== undefined ? this._behaviorData.OldY : Number("") || 0;
  }
  _setOldY(newValue) {
    this._behaviorData.OldY = newValue;
  }
  _getOldForceAngle() {
    return this._behaviorData.OldForceAngle !== undefined ? this._behaviorData.OldForceAngle : Number("") || 0;
  }
  _setOldForceAngle(newValue) {
    this._behaviorData.OldForceAngle = newValue;
  }
  _getOldForceLength() {
    return this._behaviorData.OldForceLength !== undefined ? this._behaviorData.OldForceLength : Number("") || 0;
  }
  _setOldForceLength(newValue) {
    this._behaviorData.OldForceLength = newValue;
  }
  _getNormalAngle() {
    return this._behaviorData.NormalAngle !== undefined ? this._behaviorData.NormalAngle : Number("") || 0;
  }
  _setNormalAngle(newValue) {
    this._behaviorData.NormalAngle = newValue;
  }
}

/**
 * Shared data generated from Bat bounce
 */
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.SharedData = class BatBounceSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__BatBounce__BatBounce.BatBounce.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._BatBounce_BatBounceSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._BatBounce_BatBounceSharedData = new gdjs.evtsExt__BatBounce__BatBounce.BatBounce.SharedData(
      initialData
    );
  }
  return instanceContainer._BatBounce_BatBounceSharedData;
}

// Methods:
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext = {};
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1= [];
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects2= [];
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects1= [];
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects2= [];

gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldForceLength((gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1[i].getAverageForce().getLength()));
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects1);
{for(var i = 0, len = gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1[i].addPolarForce(-(90) + (((gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1[i].getX()) - (( gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects1[0].getX())) / ((( gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects1[0].getWidth()) + (gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1[i].getWidth()))) * 140, (gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldForceLength()), 1);
}
}}

}


};

gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOff = function(Obstacle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Object": thisObjectList
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
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

gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.GDObstacleObjects2.length = 0;

gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.BounceOffContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BatBounce__BatBounce.BatBounce.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("BatBounce::BatBounce", gdjs.evtsExt__BatBounce__BatBounce.BatBounce);
