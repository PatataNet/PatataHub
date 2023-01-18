
gdjs.evtsExt__Turret__Turret = gdjs.evtsExt__Turret__Turret || {};

/**
 * Behavior generated from Turret movement
 */
gdjs.evtsExt__Turret__Turret.Turret = class Turret extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Turret__Turret.Turret.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpeedMax = behaviorData.SpeedMax !== undefined ? behaviorData.SpeedMax : Number("360") || 0;
    this._behaviorData.Acceleration = behaviorData.Acceleration !== undefined ? behaviorData.Acceleration : Number("1440") || 0;
    this._behaviorData.Deceleration = behaviorData.Deceleration !== undefined ? behaviorData.Deceleration : Number("36000") || 0;
    this._behaviorData.Rotate = behaviorData.Rotate !== undefined ? behaviorData.Rotate : true;
    this._behaviorData.AngleMax = behaviorData.AngleMax !== undefined ? behaviorData.AngleMax : Number("0") || 0;
    this._behaviorData.AngleMin = behaviorData.AngleMin !== undefined ? behaviorData.AngleMin : Number("0") || 0;
    this._behaviorData.AimingAngle = Number("0") || 0;
    this._behaviorData.Speed = Number("") || 0;
    this._behaviorData.MustMoveClockwise = false;
    this._behaviorData.MustMoveCounterClockwise = false;
    this._behaviorData.HasMoved = false;
    this._behaviorData.TargetAngle = Number("") || 0;
    this._behaviorData.OriginAngle = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpeedMax !== newBehaviorData.SpeedMax)
      this._behaviorData.SpeedMax = newBehaviorData.SpeedMax;
    if (oldBehaviorData.Acceleration !== newBehaviorData.Acceleration)
      this._behaviorData.Acceleration = newBehaviorData.Acceleration;
    if (oldBehaviorData.Deceleration !== newBehaviorData.Deceleration)
      this._behaviorData.Deceleration = newBehaviorData.Deceleration;
    if (oldBehaviorData.Rotate !== newBehaviorData.Rotate)
      this._behaviorData.Rotate = newBehaviorData.Rotate;
    if (oldBehaviorData.AngleMax !== newBehaviorData.AngleMax)
      this._behaviorData.AngleMax = newBehaviorData.AngleMax;
    if (oldBehaviorData.AngleMin !== newBehaviorData.AngleMin)
      this._behaviorData.AngleMin = newBehaviorData.AngleMin;
    if (oldBehaviorData.AimingAngle !== newBehaviorData.AimingAngle)
      this._behaviorData.AimingAngle = newBehaviorData.AimingAngle;
    if (oldBehaviorData.Speed !== newBehaviorData.Speed)
      this._behaviorData.Speed = newBehaviorData.Speed;
    if (oldBehaviorData.MustMoveClockwise !== newBehaviorData.MustMoveClockwise)
      this._behaviorData.MustMoveClockwise = newBehaviorData.MustMoveClockwise;
    if (oldBehaviorData.MustMoveCounterClockwise !== newBehaviorData.MustMoveCounterClockwise)
      this._behaviorData.MustMoveCounterClockwise = newBehaviorData.MustMoveCounterClockwise;
    if (oldBehaviorData.HasMoved !== newBehaviorData.HasMoved)
      this._behaviorData.HasMoved = newBehaviorData.HasMoved;
    if (oldBehaviorData.TargetAngle !== newBehaviorData.TargetAngle)
      this._behaviorData.TargetAngle = newBehaviorData.TargetAngle;
    if (oldBehaviorData.OriginAngle !== newBehaviorData.OriginAngle)
      this._behaviorData.OriginAngle = newBehaviorData.OriginAngle;

    return true;
  }

  // Properties:
  
  _getSpeedMax() {
    return this._behaviorData.SpeedMax !== undefined ? this._behaviorData.SpeedMax : Number("360") || 0;
  }
  _setSpeedMax(newValue) {
    this._behaviorData.SpeedMax = newValue;
  }
  _getAcceleration() {
    return this._behaviorData.Acceleration !== undefined ? this._behaviorData.Acceleration : Number("1440") || 0;
  }
  _setAcceleration(newValue) {
    this._behaviorData.Acceleration = newValue;
  }
  _getDeceleration() {
    return this._behaviorData.Deceleration !== undefined ? this._behaviorData.Deceleration : Number("36000") || 0;
  }
  _setDeceleration(newValue) {
    this._behaviorData.Deceleration = newValue;
  }
  _getRotate() {
    return this._behaviorData.Rotate !== undefined ? this._behaviorData.Rotate : true;
  }
  _setRotate(newValue) {
    this._behaviorData.Rotate = newValue;
  }
  _getAngleMax() {
    return this._behaviorData.AngleMax !== undefined ? this._behaviorData.AngleMax : Number("0") || 0;
  }
  _setAngleMax(newValue) {
    this._behaviorData.AngleMax = newValue;
  }
  _getAngleMin() {
    return this._behaviorData.AngleMin !== undefined ? this._behaviorData.AngleMin : Number("0") || 0;
  }
  _setAngleMin(newValue) {
    this._behaviorData.AngleMin = newValue;
  }
  _getAimingAngle() {
    return this._behaviorData.AimingAngle !== undefined ? this._behaviorData.AimingAngle : Number("0") || 0;
  }
  _setAimingAngle(newValue) {
    this._behaviorData.AimingAngle = newValue;
  }
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
  _getMustMoveClockwise() {
    return this._behaviorData.MustMoveClockwise !== undefined ? this._behaviorData.MustMoveClockwise : false;
  }
  _setMustMoveClockwise(newValue) {
    this._behaviorData.MustMoveClockwise = newValue;
  }
  _getMustMoveCounterClockwise() {
    return this._behaviorData.MustMoveCounterClockwise !== undefined ? this._behaviorData.MustMoveCounterClockwise : false;
  }
  _setMustMoveCounterClockwise(newValue) {
    this._behaviorData.MustMoveCounterClockwise = newValue;
  }
  _getHasMoved() {
    return this._behaviorData.HasMoved !== undefined ? this._behaviorData.HasMoved : false;
  }
  _setHasMoved(newValue) {
    this._behaviorData.HasMoved = newValue;
  }
  _getTargetAngle() {
    return this._behaviorData.TargetAngle !== undefined ? this._behaviorData.TargetAngle : Number("") || 0;
  }
  _setTargetAngle(newValue) {
    this._behaviorData.TargetAngle = newValue;
  }
  _getOriginAngle() {
    return this._behaviorData.OriginAngle !== undefined ? this._behaviorData.OriginAngle : Number("") || 0;
  }
  _setOriginAngle(newValue) {
    this._behaviorData.OriginAngle = newValue;
  }
}

/**
 * Shared data generated from Turret movement
 */
gdjs.evtsExt__Turret__Turret.Turret.SharedData = class TurretSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Turret__Turret.Turret.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Turret_TurretSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Turret_TurretSharedData = new gdjs.evtsExt__Turret__Turret.Turret.SharedData(
      initialData
    );
  }
  return instanceContainer._Turret_TurretSharedData;
}

// Methods:
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition2IsTrue_2 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2 */

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < 0 ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(0);
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > 0 ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(0);
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > 0 ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() - ((gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < 0 ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() + ((gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);
{gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_2 = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_1;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveClockwise() ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveCounterClockwise() ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_2.val = true && gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2.val && gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);
{gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_2 = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_1;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveClockwise()) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveCounterClockwise()) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_2.val = true && gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_2.val && gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2 */

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax()) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed((gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax()));
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < -((gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax())) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(-((gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax())));
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveClockwise() ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveCounterClockwise()) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() + ((gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveCounterClockwise() ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveClockwise()) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() - ((gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAimingAngle((gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle()) + (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasMoved(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() != 0 ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasMoved(true);
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMustMoveClockwise(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMustMoveCounterClockwise(false);
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects2= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1);

gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasMoved() ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMoving = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects2= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMustMoveClockwise(true);
}
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwise = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects2= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMustMoveCounterClockwise(true);
}
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwise = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAimingAngle(((gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin()) + (gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax())) / 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOriginAngle(((gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin()) + (gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax())) / 2 - 180);
}
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects2= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAimingAngle(gdjs.evtTools.common.mod(gdjs.toDegrees(Math.atan2((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetY")) || 0 : 0) - (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1[i].getY()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetX")) || 0 : 0) - (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1[i].getX()))) - (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginAngle()), 360) + (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginAngle()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleToward = function(TargetX, TargetY, parentEventsFunctionContext) {

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
if (argName === "TargetX") return TargetX;
if (argName === "TargetY") return TargetY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects3= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1, gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2);


gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() > (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetAngle()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AngleMargin")) || 0 : 0) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveCounterClockwise((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1 */

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() < (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetAngle()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AngleMargin")) || 0 : 0) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveClockwise((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1, gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2);


gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1 = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1.val = (gdjs.evtTools.common.mod(180 + (( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetAngle()) - (( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle()), 360) < 180 - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AngleMargin")) || 0 : 0));
}
}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveCounterClockwise((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1 */

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1 = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1.val = (gdjs.evtTools.common.mod(180 + (( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle()) - (( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetAngle()), 360) < 180 - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AngleMargin")) || 0 : 0));
}
}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveClockwise((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetAngle(gdjs.evtTools.common.mod(gdjs.toDegrees(Math.atan2((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetY")) || 0 : 0) - (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getY()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetX")) || 0 : 0) - (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getX()))) - (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginAngle()), 360) + (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginAngle()));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1);

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1 = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1.val = ((( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin()) < (( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax()));
}
}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1);

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1 = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.conditionTrue_1.val = ((( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin()) == (( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax()));
}
}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveToward = function(TargetX, TargetY, AngleMargin, parentEventsFunctionContext) {

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
if (argName === "TargetX") return TargetX;
if (argName === "TargetY") return TargetY;
if (argName === "AngleMargin") return AngleMargin;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects3= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1, gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2);


gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() > (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax()) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAimingAngle((gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1 */

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() < (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin()) ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAimingAngle((gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin()));
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAimingAngle((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AimingAngle")) || 0 : 0));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1);

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.conditionTrue_1 = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.conditionTrue_1.val = ((( gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin()) == (( gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax()));
}
}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAimingAngle(gdjs.evtTools.common.mod((gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle()), 360));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1);

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.conditionTrue_1 = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.conditionTrue_1.val = ((( gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin()) < (( gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax()));
}
}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1);

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotate() ) {
        gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].setAngle((gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle()));
}
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngle = function(AimingAngle, parentEventsFunctionContext) {

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
if (argName === "AimingAngle") return AimingAngle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects2= [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle()); }}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Turret::Turret", gdjs.evtsExt__Turret__Turret.Turret);
