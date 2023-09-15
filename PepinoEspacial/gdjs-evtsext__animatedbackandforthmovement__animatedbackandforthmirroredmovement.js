
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement || {};

/**
 * Behavior generated from Animated Back and Forth (mirrored) Movement
 */
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement = class AnimatedBackAndForthMirroredMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpeedX = behaviorData.SpeedX !== undefined ? behaviorData.SpeedX : Number("200") || 0;
    this._behaviorData.DistanceX = behaviorData.DistanceX !== undefined ? behaviorData.DistanceX : Number("300") || 0;
    this._behaviorData.InitialX = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpeedX !== newBehaviorData.SpeedX)
      this._behaviorData.SpeedX = newBehaviorData.SpeedX;
    if (oldBehaviorData.DistanceX !== newBehaviorData.DistanceX)
      this._behaviorData.DistanceX = newBehaviorData.DistanceX;
    if (oldBehaviorData.InitialX !== newBehaviorData.InitialX)
      this._behaviorData.InitialX = newBehaviorData.InitialX;

    return true;
  }

  // Properties:
  
  _getSpeedX() {
    return this._behaviorData.SpeedX !== undefined ? this._behaviorData.SpeedX : Number("200") || 0;
  }
  _setSpeedX(newValue) {
    this._behaviorData.SpeedX = newValue;
  }
  _getDistanceX() {
    return this._behaviorData.DistanceX !== undefined ? this._behaviorData.DistanceX : Number("300") || 0;
  }
  _setDistanceX(newValue) {
    this._behaviorData.DistanceX = newValue;
  }
  _getInitialX() {
    return this._behaviorData.InitialX !== undefined ? this._behaviorData.InitialX : Number("0") || 0;
  }
  _setInitialX(newValue) {
    this._behaviorData.InitialX = newValue;
  }
}

/**
 * Shared data generated from Animated Back and Forth (mirrored) Movement
 */
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.SharedData = class AnimatedBackAndForthMirroredMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AnimatedBackAndForthMovement_AnimatedBackAndForthMirroredMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AnimatedBackAndForthMovement_AnimatedBackAndForthMirroredMovementSharedData = new gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._AnimatedBackAndForthMovement_AnimatedBackAndForthMirroredMovementSharedData;
}

// Methods:
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInitialX((gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getPointX("")));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("GoLeft") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce(-((gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX())), 0, 0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("GoLeft") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce(+((gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX())), 0, 0);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() > (gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("TurnLeft");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() < (gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()) - (gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistanceX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()) - (gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistanceX()));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("TurnLeft");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].flipX(true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("TurnLeft") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("GoLeft");
}
}}

}


};

gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("AnimatedBackAndForthMovement::AnimatedBackAndForthMirroredMovement", gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement);
