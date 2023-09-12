
gdjs.evtsExt__Car__Car = gdjs.evtsExt__Car__Car || {};

/**
 * Behavior generated from Car movement
 */
gdjs.evtsExt__Car__Car.Car = class Car extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Car__Car.Car.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpeedPathMovement = behaviorData.SpeedPathMovement !== undefined ? behaviorData.SpeedPathMovement : "";
    this._behaviorData.IsAccelerating = false;
    this._behaviorData.IsOnRoad = false;
    this._behaviorData.Acceleration = behaviorData.Acceleration !== undefined ? behaviorData.Acceleration : Number("100") || 0;
    this._behaviorData.MaxSpeed = behaviorData.MaxSpeed !== undefined ? behaviorData.MaxSpeed : Number("250") || 0;
    this._behaviorData.MaxTurnSpeed = behaviorData.MaxTurnSpeed !== undefined ? behaviorData.MaxTurnSpeed : Number("64") || 0;
    this._behaviorData.PreviousAngle = Number("") || 0;
    this._behaviorData.RoadCenterDelta = Number("") || 0;
    this._behaviorData.TurnSpeed = Number("") || 0;
    this._behaviorData.CentrifugalShift = behaviorData.CentrifugalShift !== undefined ? behaviorData.CentrifugalShift : Number("0.5") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpeedPathMovement !== newBehaviorData.SpeedPathMovement)
      this._behaviorData.SpeedPathMovement = newBehaviorData.SpeedPathMovement;
    if (oldBehaviorData.IsAccelerating !== newBehaviorData.IsAccelerating)
      this._behaviorData.IsAccelerating = newBehaviorData.IsAccelerating;
    if (oldBehaviorData.IsOnRoad !== newBehaviorData.IsOnRoad)
      this._behaviorData.IsOnRoad = newBehaviorData.IsOnRoad;
    if (oldBehaviorData.Acceleration !== newBehaviorData.Acceleration)
      this._behaviorData.Acceleration = newBehaviorData.Acceleration;
    if (oldBehaviorData.MaxSpeed !== newBehaviorData.MaxSpeed)
      this._behaviorData.MaxSpeed = newBehaviorData.MaxSpeed;
    if (oldBehaviorData.MaxTurnSpeed !== newBehaviorData.MaxTurnSpeed)
      this._behaviorData.MaxTurnSpeed = newBehaviorData.MaxTurnSpeed;
    if (oldBehaviorData.PreviousAngle !== newBehaviorData.PreviousAngle)
      this._behaviorData.PreviousAngle = newBehaviorData.PreviousAngle;
    if (oldBehaviorData.RoadCenterDelta !== newBehaviorData.RoadCenterDelta)
      this._behaviorData.RoadCenterDelta = newBehaviorData.RoadCenterDelta;
    if (oldBehaviorData.TurnSpeed !== newBehaviorData.TurnSpeed)
      this._behaviorData.TurnSpeed = newBehaviorData.TurnSpeed;
    if (oldBehaviorData.CentrifugalShift !== newBehaviorData.CentrifugalShift)
      this._behaviorData.CentrifugalShift = newBehaviorData.CentrifugalShift;

    return true;
  }

  // Properties:
  
  _getSpeedPathMovement() {
    return this._behaviorData.SpeedPathMovement !== undefined ? this._behaviorData.SpeedPathMovement : "";
  }
  _setSpeedPathMovement(newValue) {
    this._behaviorData.SpeedPathMovement = newValue;
  }
  _getIsAccelerating() {
    return this._behaviorData.IsAccelerating !== undefined ? this._behaviorData.IsAccelerating : false;
  }
  _setIsAccelerating(newValue) {
    this._behaviorData.IsAccelerating = newValue;
  }
  _toggleIsAccelerating() {
    this._setIsAccelerating(!this._getIsAccelerating());
  }
  _getIsOnRoad() {
    return this._behaviorData.IsOnRoad !== undefined ? this._behaviorData.IsOnRoad : false;
  }
  _setIsOnRoad(newValue) {
    this._behaviorData.IsOnRoad = newValue;
  }
  _toggleIsOnRoad() {
    this._setIsOnRoad(!this._getIsOnRoad());
  }
  _getAcceleration() {
    return this._behaviorData.Acceleration !== undefined ? this._behaviorData.Acceleration : Number("100") || 0;
  }
  _setAcceleration(newValue) {
    this._behaviorData.Acceleration = newValue;
  }
  _getMaxSpeed() {
    return this._behaviorData.MaxSpeed !== undefined ? this._behaviorData.MaxSpeed : Number("250") || 0;
  }
  _setMaxSpeed(newValue) {
    this._behaviorData.MaxSpeed = newValue;
  }
  _getMaxTurnSpeed() {
    return this._behaviorData.MaxTurnSpeed !== undefined ? this._behaviorData.MaxTurnSpeed : Number("64") || 0;
  }
  _setMaxTurnSpeed(newValue) {
    this._behaviorData.MaxTurnSpeed = newValue;
  }
  _getPreviousAngle() {
    return this._behaviorData.PreviousAngle !== undefined ? this._behaviorData.PreviousAngle : Number("") || 0;
  }
  _setPreviousAngle(newValue) {
    this._behaviorData.PreviousAngle = newValue;
  }
  _getRoadCenterDelta() {
    return this._behaviorData.RoadCenterDelta !== undefined ? this._behaviorData.RoadCenterDelta : Number("") || 0;
  }
  _setRoadCenterDelta(newValue) {
    this._behaviorData.RoadCenterDelta = newValue;
  }
  _getTurnSpeed() {
    return this._behaviorData.TurnSpeed !== undefined ? this._behaviorData.TurnSpeed : Number("") || 0;
  }
  _setTurnSpeed(newValue) {
    this._behaviorData.TurnSpeed = newValue;
  }
  _getCentrifugalShift() {
    return this._behaviorData.CentrifugalShift !== undefined ? this._behaviorData.CentrifugalShift : Number("0.5") || 0;
  }
  _setCentrifugalShift(newValue) {
    this._behaviorData.CentrifugalShift = newValue;
  }
}

/**
 * Shared data generated from Car movement
 */
gdjs.evtsExt__Car__Car.Car.SharedData = class CarSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Car__Car.Car.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Car_CarSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Car_CarSharedData = new gdjs.evtsExt__Car__Car.Car.SharedData(
      initialData
    );
  }
  return instanceContainer._Car_CarSharedData;
}

// Methods:
gdjs.evtsExt__Car__Car.Car.prototype.doStepPreEventsContext = {};


gdjs.evtsExt__Car__Car.Car.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__Car__Car.Car.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "SpeedPathMovement": this._getSpeedPathMovement()
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


gdjs.evtsExt__Car__Car.Car.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2= [];
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3= [];
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects4= [];


gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetIsOnRoad(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoadCenterDelta() > -(22) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoadCenterDelta() < 22 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoadCenterDelta(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoadCenterDelta() - ((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCentrifugalShift()) * gdjs.evtTools.common.angleDifference((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getAngle()), (gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousAngle()))));
}
}{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetIsOnRoad(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > (gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSpeed()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSpeed()), -(50), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2, gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 50 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSpeed()) / 50, 50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 50 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSpeed()) / 5, -(200), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2, gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnRoad((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSpeed()), (gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnRoad((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2, gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnRoad((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt(0, -(50), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnRoad((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).AccelarateAt(0, -(200), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoadCenterDelta(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoadCenterDelta() + ((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsAccelerating((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsAccelerating((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[k] = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousAngle((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getAngle()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoadCenterDelta(gdjs.evtTools.common.clamp((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoadCenterDelta()), -(24), 24));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1[i].setCenterPositionInScene((gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1[i].getX()),(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1[i].putAroundObject(gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1[i], (gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoadCenterDelta()), (gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1[i].getAngle()) + 90);
}
}}

}


};gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Car__Car.Car.prototype.Move = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.MoveContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPath((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("RoadName") : ""), 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousAngle((gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects1[i].getAngle()));
}
}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.SetRoad = function(RoadName, parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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
if (argName === "RoadName") return RoadName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.SetRoadContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPositionOnPath((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RoadPosition")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoadCenterDelta((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RoadCenterDelta")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousAngle((gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1[i].getAngle()));
}
}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.SetPosition = function(RoadPosition, RoadCenterDelta, parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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
if (argName === "RoadPosition") return RoadPosition;
if (argName === "RoadCenterDelta") return RoadCenterDelta;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.SetPositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsAccelerating() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects1[k] = gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.IsAccelerating = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.IsAcceleratingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsAccelerating(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsAccelerating(true);
}
}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.SetIsAccelerating = function(Value, parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.SetIsAcceleratingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsOnRoad() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects1[k] = gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoad = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.IsOnRoadContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsOnRoad(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsOnRoad(true);
}
}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoad = function(Value, parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.SetIsOnRoadContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnSpeed(-((gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxTurnSpeed())));
}
}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.TurnLeft = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.TurnLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnSpeed((gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxTurnSpeed()));
}
}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.TurnRight = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.TurnRightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTurnSpeed(0);
}
}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.GoStraight = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.GoStraightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoadCenterDelta()); }}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDelta = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.RoadCenterDeltaContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTurnSpeed()); }}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeed = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.TurnSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSpeed()); }}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeed = function(parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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

gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.MaxSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext = {};
gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeed = function(Value, parentEventsFunctionContext) {

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
, "SpeedPathMovement": this._getSpeedPathMovement()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Car__Car.Car.prototype.SetMaxSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Car::Car", gdjs.evtsExt__Car__Car.Car);
