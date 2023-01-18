
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera || {};

/**
 * Behavior generated from Smooth platformer camera
 */
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera = class SmoothPlatformerCamera extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlatformerCharacter = behaviorData.PlatformerCharacter !== undefined ? behaviorData.PlatformerCharacter : "";
    this._behaviorData.SmoothCamera = behaviorData.SmoothCamera !== undefined ? behaviorData.SmoothCamera : "";
    this._behaviorData.JumpOriginY = Number("") || 0;
    this._behaviorData.AirFollowFreeAreaTop = behaviorData.AirFollowFreeAreaTop !== undefined ? behaviorData.AirFollowFreeAreaTop : Number("0") || 0;
    this._behaviorData.AirFollowFreeAreaBottom = behaviorData.AirFollowFreeAreaBottom !== undefined ? behaviorData.AirFollowFreeAreaBottom : Number("0") || 0;
    this._behaviorData.FloorFollowFreeAreaTop = behaviorData.FloorFollowFreeAreaTop !== undefined ? behaviorData.FloorFollowFreeAreaTop : Number("0") || 0;
    this._behaviorData.FloorFollowFreeAreaBottom = behaviorData.FloorFollowFreeAreaBottom !== undefined ? behaviorData.FloorFollowFreeAreaBottom : Number("0") || 0;
    this._behaviorData.AirUpwardSpeed = behaviorData.AirUpwardSpeed !== undefined ? behaviorData.AirUpwardSpeed : Number("0.95") || 0;
    this._behaviorData.AirDownwardSpeed = behaviorData.AirDownwardSpeed !== undefined ? behaviorData.AirDownwardSpeed : Number("0.95") || 0;
    this._behaviorData.FloorUpwardSpeed = behaviorData.FloorUpwardSpeed !== undefined ? behaviorData.FloorUpwardSpeed : Number("0.9") || 0;
    this._behaviorData.FloorDownwardSpeed = behaviorData.FloorDownwardSpeed !== undefined ? behaviorData.FloorDownwardSpeed : Number("0.9") || 0;
    this._behaviorData.AirUpwardSpeedMax = behaviorData.AirUpwardSpeedMax !== undefined ? behaviorData.AirUpwardSpeedMax : Number("9000") || 0;
    this._behaviorData.AirDownwardSpeedMax = behaviorData.AirDownwardSpeedMax !== undefined ? behaviorData.AirDownwardSpeedMax : Number("9000") || 0;
    this._behaviorData.FloorUpwardSpeedMax = behaviorData.FloorUpwardSpeedMax !== undefined ? behaviorData.FloorUpwardSpeedMax : Number("9000") || 0;
    this._behaviorData.FloorDownwardSpeedMax = behaviorData.FloorDownwardSpeedMax !== undefined ? behaviorData.FloorDownwardSpeedMax : Number("9000") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PlatformerCharacter !== newBehaviorData.PlatformerCharacter)
      this._behaviorData.PlatformerCharacter = newBehaviorData.PlatformerCharacter;
    if (oldBehaviorData.SmoothCamera !== newBehaviorData.SmoothCamera)
      this._behaviorData.SmoothCamera = newBehaviorData.SmoothCamera;
    if (oldBehaviorData.JumpOriginY !== newBehaviorData.JumpOriginY)
      this._behaviorData.JumpOriginY = newBehaviorData.JumpOriginY;
    if (oldBehaviorData.AirFollowFreeAreaTop !== newBehaviorData.AirFollowFreeAreaTop)
      this._behaviorData.AirFollowFreeAreaTop = newBehaviorData.AirFollowFreeAreaTop;
    if (oldBehaviorData.AirFollowFreeAreaBottom !== newBehaviorData.AirFollowFreeAreaBottom)
      this._behaviorData.AirFollowFreeAreaBottom = newBehaviorData.AirFollowFreeAreaBottom;
    if (oldBehaviorData.FloorFollowFreeAreaTop !== newBehaviorData.FloorFollowFreeAreaTop)
      this._behaviorData.FloorFollowFreeAreaTop = newBehaviorData.FloorFollowFreeAreaTop;
    if (oldBehaviorData.FloorFollowFreeAreaBottom !== newBehaviorData.FloorFollowFreeAreaBottom)
      this._behaviorData.FloorFollowFreeAreaBottom = newBehaviorData.FloorFollowFreeAreaBottom;
    if (oldBehaviorData.AirUpwardSpeed !== newBehaviorData.AirUpwardSpeed)
      this._behaviorData.AirUpwardSpeed = newBehaviorData.AirUpwardSpeed;
    if (oldBehaviorData.AirDownwardSpeed !== newBehaviorData.AirDownwardSpeed)
      this._behaviorData.AirDownwardSpeed = newBehaviorData.AirDownwardSpeed;
    if (oldBehaviorData.FloorUpwardSpeed !== newBehaviorData.FloorUpwardSpeed)
      this._behaviorData.FloorUpwardSpeed = newBehaviorData.FloorUpwardSpeed;
    if (oldBehaviorData.FloorDownwardSpeed !== newBehaviorData.FloorDownwardSpeed)
      this._behaviorData.FloorDownwardSpeed = newBehaviorData.FloorDownwardSpeed;
    if (oldBehaviorData.AirUpwardSpeedMax !== newBehaviorData.AirUpwardSpeedMax)
      this._behaviorData.AirUpwardSpeedMax = newBehaviorData.AirUpwardSpeedMax;
    if (oldBehaviorData.AirDownwardSpeedMax !== newBehaviorData.AirDownwardSpeedMax)
      this._behaviorData.AirDownwardSpeedMax = newBehaviorData.AirDownwardSpeedMax;
    if (oldBehaviorData.FloorUpwardSpeedMax !== newBehaviorData.FloorUpwardSpeedMax)
      this._behaviorData.FloorUpwardSpeedMax = newBehaviorData.FloorUpwardSpeedMax;
    if (oldBehaviorData.FloorDownwardSpeedMax !== newBehaviorData.FloorDownwardSpeedMax)
      this._behaviorData.FloorDownwardSpeedMax = newBehaviorData.FloorDownwardSpeedMax;

    return true;
  }

  // Properties:
  
  _getPlatformerCharacter() {
    return this._behaviorData.PlatformerCharacter !== undefined ? this._behaviorData.PlatformerCharacter : "";
  }
  _setPlatformerCharacter(newValue) {
    this._behaviorData.PlatformerCharacter = newValue;
  }
  _getSmoothCamera() {
    return this._behaviorData.SmoothCamera !== undefined ? this._behaviorData.SmoothCamera : "";
  }
  _setSmoothCamera(newValue) {
    this._behaviorData.SmoothCamera = newValue;
  }
  _getJumpOriginY() {
    return this._behaviorData.JumpOriginY !== undefined ? this._behaviorData.JumpOriginY : Number("") || 0;
  }
  _setJumpOriginY(newValue) {
    this._behaviorData.JumpOriginY = newValue;
  }
  _getAirFollowFreeAreaTop() {
    return this._behaviorData.AirFollowFreeAreaTop !== undefined ? this._behaviorData.AirFollowFreeAreaTop : Number("0") || 0;
  }
  _setAirFollowFreeAreaTop(newValue) {
    this._behaviorData.AirFollowFreeAreaTop = newValue;
  }
  _getAirFollowFreeAreaBottom() {
    return this._behaviorData.AirFollowFreeAreaBottom !== undefined ? this._behaviorData.AirFollowFreeAreaBottom : Number("0") || 0;
  }
  _setAirFollowFreeAreaBottom(newValue) {
    this._behaviorData.AirFollowFreeAreaBottom = newValue;
  }
  _getFloorFollowFreeAreaTop() {
    return this._behaviorData.FloorFollowFreeAreaTop !== undefined ? this._behaviorData.FloorFollowFreeAreaTop : Number("0") || 0;
  }
  _setFloorFollowFreeAreaTop(newValue) {
    this._behaviorData.FloorFollowFreeAreaTop = newValue;
  }
  _getFloorFollowFreeAreaBottom() {
    return this._behaviorData.FloorFollowFreeAreaBottom !== undefined ? this._behaviorData.FloorFollowFreeAreaBottom : Number("0") || 0;
  }
  _setFloorFollowFreeAreaBottom(newValue) {
    this._behaviorData.FloorFollowFreeAreaBottom = newValue;
  }
  _getAirUpwardSpeed() {
    return this._behaviorData.AirUpwardSpeed !== undefined ? this._behaviorData.AirUpwardSpeed : Number("0.95") || 0;
  }
  _setAirUpwardSpeed(newValue) {
    this._behaviorData.AirUpwardSpeed = newValue;
  }
  _getAirDownwardSpeed() {
    return this._behaviorData.AirDownwardSpeed !== undefined ? this._behaviorData.AirDownwardSpeed : Number("0.95") || 0;
  }
  _setAirDownwardSpeed(newValue) {
    this._behaviorData.AirDownwardSpeed = newValue;
  }
  _getFloorUpwardSpeed() {
    return this._behaviorData.FloorUpwardSpeed !== undefined ? this._behaviorData.FloorUpwardSpeed : Number("0.9") || 0;
  }
  _setFloorUpwardSpeed(newValue) {
    this._behaviorData.FloorUpwardSpeed = newValue;
  }
  _getFloorDownwardSpeed() {
    return this._behaviorData.FloorDownwardSpeed !== undefined ? this._behaviorData.FloorDownwardSpeed : Number("0.9") || 0;
  }
  _setFloorDownwardSpeed(newValue) {
    this._behaviorData.FloorDownwardSpeed = newValue;
  }
  _getAirUpwardSpeedMax() {
    return this._behaviorData.AirUpwardSpeedMax !== undefined ? this._behaviorData.AirUpwardSpeedMax : Number("9000") || 0;
  }
  _setAirUpwardSpeedMax(newValue) {
    this._behaviorData.AirUpwardSpeedMax = newValue;
  }
  _getAirDownwardSpeedMax() {
    return this._behaviorData.AirDownwardSpeedMax !== undefined ? this._behaviorData.AirDownwardSpeedMax : Number("9000") || 0;
  }
  _setAirDownwardSpeedMax(newValue) {
    this._behaviorData.AirDownwardSpeedMax = newValue;
  }
  _getFloorUpwardSpeedMax() {
    return this._behaviorData.FloorUpwardSpeedMax !== undefined ? this._behaviorData.FloorUpwardSpeedMax : Number("9000") || 0;
  }
  _setFloorUpwardSpeedMax(newValue) {
    this._behaviorData.FloorUpwardSpeedMax = newValue;
  }
  _getFloorDownwardSpeedMax() {
    return this._behaviorData.FloorDownwardSpeedMax !== undefined ? this._behaviorData.FloorDownwardSpeedMax : Number("9000") || 0;
  }
  _setFloorDownwardSpeedMax(newValue) {
    this._behaviorData.FloorDownwardSpeedMax = newValue;
  }
}

/**
 * Shared data generated from Smooth platformer camera
 */
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.SharedData = class SmoothPlatformerCameraSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SmoothCamera_SmoothPlatformerCameraSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SmoothCamera_SmoothPlatformerCameraSharedData = new gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.SharedData(
      initialData
    );
  }
  return instanceContainer._SmoothCamera_SmoothPlatformerCameraSharedData;
}

// Methods:
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isJumping()) ) {
        gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isFalling()) ) {
        gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetFollowFreeAreaBottom((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFloorFollowFreeAreaTop()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetFollowFreeAreaTop((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFloorFollowFreeAreaBottom()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetUpwardSpeed((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFloorUpwardSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetDownwardSpeed((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFloorDownwardSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetUpwardSpeedMax((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFloorUpwardSpeedMax()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetDownwardSpeedMax((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFloorDownwardSpeedMax()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isJumping() ) {
        gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isFalling() ) {
        gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetFollowFreeAreaBottom((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirFollowFreeAreaTop()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetFollowFreeAreaTop((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirFollowFreeAreaBottom()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetUpwardSpeed((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirUpwardSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetDownwardSpeed((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirDownwardSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetUpwardSpeedMax((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirUpwardSpeedMax()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SmoothCamera")).SetDownwardSpeedMax((gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirDownwardSpeedMax()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "PlatformerCharacter": this._getPlatformerCharacter()
, "SmoothCamera": this._getSmoothCamera()
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

gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("SmoothCamera::SmoothPlatformerCamera", gdjs.evtsExt__SmoothCamera__SmoothPlatformerCamera.SmoothPlatformerCamera);
