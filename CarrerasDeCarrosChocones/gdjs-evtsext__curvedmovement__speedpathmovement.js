
gdjs.evtsExt__CurvedMovement__SpeedPathMovement = gdjs.evtsExt__CurvedMovement__SpeedPathMovement || {};

/**
 * Behavior generated from Movement on a curve (speed-based)
 */
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement = class SpeedPathMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Rotation = behaviorData.Rotation !== undefined ? behaviorData.Rotation : true;
    this._behaviorData.RotationOffset = behaviorData.RotationOffset !== undefined ? behaviorData.RotationOffset : Number("0") || 0;
    this._behaviorData.Speed = Number("0") || 0;
    this._behaviorData.PathOriginX = Number("") || 0;
    this._behaviorData.PathOriginY = Number("") || 0;
    this._behaviorData.PathName = "";
    this._behaviorData.TargetedSpeed = Number("0") || 0;
    this._behaviorData.Acceleration = Number("0") || 0;
    this._behaviorData.DrawingElementIndex = Number("0") || 0;
    this._behaviorData.X = Number("") || 0;
    this._behaviorData.Y = Number("") || 0;
    this._behaviorData.PathAngle = Number("") || 0;
    this._behaviorData.PathScale = Number("") || 0;
    this._behaviorData.RepetitionCount = Number("") || 0;
    this._behaviorData.ShouldLoop = false;
    this._behaviorData.DrawingPathOriginX = Number("") || 0;
    this._behaviorData.DrawingPathOriginY = Number("") || 0;
    this._behaviorData.DebugLineStrokeWidth = Number("") || 0;
    this._behaviorData.PreviousSpeed = Number("") || 0;
    this._behaviorData.CurrentLength = Number("") || 0;
    this._behaviorData.IsLookingBack = false;
    this._behaviorData.Viewpoint = behaviorData.Viewpoint !== undefined ? behaviorData.Viewpoint : "Top-Down";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Rotation !== newBehaviorData.Rotation)
      this._behaviorData.Rotation = newBehaviorData.Rotation;
    if (oldBehaviorData.RotationOffset !== newBehaviorData.RotationOffset)
      this._behaviorData.RotationOffset = newBehaviorData.RotationOffset;
    if (oldBehaviorData.Speed !== newBehaviorData.Speed)
      this._behaviorData.Speed = newBehaviorData.Speed;
    if (oldBehaviorData.PathOriginX !== newBehaviorData.PathOriginX)
      this._behaviorData.PathOriginX = newBehaviorData.PathOriginX;
    if (oldBehaviorData.PathOriginY !== newBehaviorData.PathOriginY)
      this._behaviorData.PathOriginY = newBehaviorData.PathOriginY;
    if (oldBehaviorData.PathName !== newBehaviorData.PathName)
      this._behaviorData.PathName = newBehaviorData.PathName;
    if (oldBehaviorData.TargetedSpeed !== newBehaviorData.TargetedSpeed)
      this._behaviorData.TargetedSpeed = newBehaviorData.TargetedSpeed;
    if (oldBehaviorData.Acceleration !== newBehaviorData.Acceleration)
      this._behaviorData.Acceleration = newBehaviorData.Acceleration;
    if (oldBehaviorData.DrawingElementIndex !== newBehaviorData.DrawingElementIndex)
      this._behaviorData.DrawingElementIndex = newBehaviorData.DrawingElementIndex;
    if (oldBehaviorData.X !== newBehaviorData.X)
      this._behaviorData.X = newBehaviorData.X;
    if (oldBehaviorData.Y !== newBehaviorData.Y)
      this._behaviorData.Y = newBehaviorData.Y;
    if (oldBehaviorData.PathAngle !== newBehaviorData.PathAngle)
      this._behaviorData.PathAngle = newBehaviorData.PathAngle;
    if (oldBehaviorData.PathScale !== newBehaviorData.PathScale)
      this._behaviorData.PathScale = newBehaviorData.PathScale;
    if (oldBehaviorData.RepetitionCount !== newBehaviorData.RepetitionCount)
      this._behaviorData.RepetitionCount = newBehaviorData.RepetitionCount;
    if (oldBehaviorData.ShouldLoop !== newBehaviorData.ShouldLoop)
      this._behaviorData.ShouldLoop = newBehaviorData.ShouldLoop;
    if (oldBehaviorData.DrawingPathOriginX !== newBehaviorData.DrawingPathOriginX)
      this._behaviorData.DrawingPathOriginX = newBehaviorData.DrawingPathOriginX;
    if (oldBehaviorData.DrawingPathOriginY !== newBehaviorData.DrawingPathOriginY)
      this._behaviorData.DrawingPathOriginY = newBehaviorData.DrawingPathOriginY;
    if (oldBehaviorData.DebugLineStrokeWidth !== newBehaviorData.DebugLineStrokeWidth)
      this._behaviorData.DebugLineStrokeWidth = newBehaviorData.DebugLineStrokeWidth;
    if (oldBehaviorData.PreviousSpeed !== newBehaviorData.PreviousSpeed)
      this._behaviorData.PreviousSpeed = newBehaviorData.PreviousSpeed;
    if (oldBehaviorData.CurrentLength !== newBehaviorData.CurrentLength)
      this._behaviorData.CurrentLength = newBehaviorData.CurrentLength;
    if (oldBehaviorData.IsLookingBack !== newBehaviorData.IsLookingBack)
      this._behaviorData.IsLookingBack = newBehaviorData.IsLookingBack;
    if (oldBehaviorData.Viewpoint !== newBehaviorData.Viewpoint)
      this._behaviorData.Viewpoint = newBehaviorData.Viewpoint;

    return true;
  }

  // Properties:
  
  _getRotation() {
    return this._behaviorData.Rotation !== undefined ? this._behaviorData.Rotation : true;
  }
  _setRotation(newValue) {
    this._behaviorData.Rotation = newValue;
  }
  _toggleRotation() {
    this._setRotation(!this._getRotation());
  }
  _getRotationOffset() {
    return this._behaviorData.RotationOffset !== undefined ? this._behaviorData.RotationOffset : Number("0") || 0;
  }
  _setRotationOffset(newValue) {
    this._behaviorData.RotationOffset = newValue;
  }
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("0") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
  _getPathOriginX() {
    return this._behaviorData.PathOriginX !== undefined ? this._behaviorData.PathOriginX : Number("") || 0;
  }
  _setPathOriginX(newValue) {
    this._behaviorData.PathOriginX = newValue;
  }
  _getPathOriginY() {
    return this._behaviorData.PathOriginY !== undefined ? this._behaviorData.PathOriginY : Number("") || 0;
  }
  _setPathOriginY(newValue) {
    this._behaviorData.PathOriginY = newValue;
  }
  _getPathName() {
    return this._behaviorData.PathName !== undefined ? this._behaviorData.PathName : "";
  }
  _setPathName(newValue) {
    this._behaviorData.PathName = newValue;
  }
  _getTargetedSpeed() {
    return this._behaviorData.TargetedSpeed !== undefined ? this._behaviorData.TargetedSpeed : Number("0") || 0;
  }
  _setTargetedSpeed(newValue) {
    this._behaviorData.TargetedSpeed = newValue;
  }
  _getAcceleration() {
    return this._behaviorData.Acceleration !== undefined ? this._behaviorData.Acceleration : Number("0") || 0;
  }
  _setAcceleration(newValue) {
    this._behaviorData.Acceleration = newValue;
  }
  _getDrawingElementIndex() {
    return this._behaviorData.DrawingElementIndex !== undefined ? this._behaviorData.DrawingElementIndex : Number("0") || 0;
  }
  _setDrawingElementIndex(newValue) {
    this._behaviorData.DrawingElementIndex = newValue;
  }
  _getX() {
    return this._behaviorData.X !== undefined ? this._behaviorData.X : Number("") || 0;
  }
  _setX(newValue) {
    this._behaviorData.X = newValue;
  }
  _getY() {
    return this._behaviorData.Y !== undefined ? this._behaviorData.Y : Number("") || 0;
  }
  _setY(newValue) {
    this._behaviorData.Y = newValue;
  }
  _getPathAngle() {
    return this._behaviorData.PathAngle !== undefined ? this._behaviorData.PathAngle : Number("") || 0;
  }
  _setPathAngle(newValue) {
    this._behaviorData.PathAngle = newValue;
  }
  _getPathScale() {
    return this._behaviorData.PathScale !== undefined ? this._behaviorData.PathScale : Number("") || 0;
  }
  _setPathScale(newValue) {
    this._behaviorData.PathScale = newValue;
  }
  _getRepetitionCount() {
    return this._behaviorData.RepetitionCount !== undefined ? this._behaviorData.RepetitionCount : Number("") || 0;
  }
  _setRepetitionCount(newValue) {
    this._behaviorData.RepetitionCount = newValue;
  }
  _getShouldLoop() {
    return this._behaviorData.ShouldLoop !== undefined ? this._behaviorData.ShouldLoop : false;
  }
  _setShouldLoop(newValue) {
    this._behaviorData.ShouldLoop = newValue;
  }
  _toggleShouldLoop() {
    this._setShouldLoop(!this._getShouldLoop());
  }
  _getDrawingPathOriginX() {
    return this._behaviorData.DrawingPathOriginX !== undefined ? this._behaviorData.DrawingPathOriginX : Number("") || 0;
  }
  _setDrawingPathOriginX(newValue) {
    this._behaviorData.DrawingPathOriginX = newValue;
  }
  _getDrawingPathOriginY() {
    return this._behaviorData.DrawingPathOriginY !== undefined ? this._behaviorData.DrawingPathOriginY : Number("") || 0;
  }
  _setDrawingPathOriginY(newValue) {
    this._behaviorData.DrawingPathOriginY = newValue;
  }
  _getDebugLineStrokeWidth() {
    return this._behaviorData.DebugLineStrokeWidth !== undefined ? this._behaviorData.DebugLineStrokeWidth : Number("") || 0;
  }
  _setDebugLineStrokeWidth(newValue) {
    this._behaviorData.DebugLineStrokeWidth = newValue;
  }
  _getPreviousSpeed() {
    return this._behaviorData.PreviousSpeed !== undefined ? this._behaviorData.PreviousSpeed : Number("") || 0;
  }
  _setPreviousSpeed(newValue) {
    this._behaviorData.PreviousSpeed = newValue;
  }
  _getCurrentLength() {
    return this._behaviorData.CurrentLength !== undefined ? this._behaviorData.CurrentLength : Number("") || 0;
  }
  _setCurrentLength(newValue) {
    this._behaviorData.CurrentLength = newValue;
  }
  _getIsLookingBack() {
    return this._behaviorData.IsLookingBack !== undefined ? this._behaviorData.IsLookingBack : false;
  }
  _setIsLookingBack(newValue) {
    this._behaviorData.IsLookingBack = newValue;
  }
  _toggleIsLookingBack() {
    this._setIsLookingBack(!this._getIsLookingBack());
  }
  _getViewpoint() {
    return this._behaviorData.Viewpoint !== undefined ? this._behaviorData.Viewpoint : "Top-Down";
  }
  _setViewpoint(newValue) {
    this._behaviorData.Viewpoint = newValue;
  }
}

/**
 * Shared data generated from Movement on a curve (speed-based)
 */
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.SharedData = class SpeedPathMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._CurvedMovement_SpeedPathMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._CurvedMovement_SpeedPathMovementSharedData = new gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._CurvedMovement_SpeedPathMovementSharedData;
}

// Methods:
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.sign((( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration())) != gdjs.evtTools.common.sign((( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSpeed()) - (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSpeed()));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceleration(0);
}
}}

}


};gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() != (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedSpeed()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() + ((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetPositionOnPath(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PositionOnPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSpeed()) + (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsLookingBack(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsLookingBack(false);
}
}}

}


};gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CanMoveFurther((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousSpeed((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()));
}
}
{ //Subevents
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRepetitionCount(Math.min(1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RepetitionCount")) || 0 : 0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldLoop") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldLoop") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathOriginX((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathOriginY((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InitializeMovement((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPath = function(PathName, RepetitionCount, ShouldLoop, parentEventsFunctionContext) {

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
if (argName === "PathName") return PathName;
if (argName === "RepetitionCount") return RepetitionCount;
if (argName === "ShouldLoop") return ShouldLoop;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects3= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRepetitionCount(Math.min(1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RepetitionCount")) || 0 : 0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldLoop") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldLoop") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathOriginX((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathOriginY((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getY()));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathAngle(gdjs.evtTools.common.angleBetweenPositions((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getX()), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getY()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationX")) || 0 : 0), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getY()) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationY")) || 0 : 0) - (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getY())) / (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathSpeedScaleY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - gdjs.evtTools.common.angleBetweenPositions(0, 0, (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathEndX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathEndY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathSpeedScaleY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathScale(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getX()), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getY()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationX")) || 0 : 0), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getY()) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationY")) || 0 : 0) - (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getY())) / (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathSpeedScaleY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / gdjs.evtTools.common.distanceBetweenPositions(0, 0, (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathEndX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathEndY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathSpeedScaleY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RepetitionCount")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InitializeMovement((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__CurvedMovement__IsClosed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathTo = function(PathName, RepetitionCount, ShouldLoop, DestinationX, DestinationY, parentEventsFunctionContext) {

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
if (argName === "PathName") return PathName;
if (argName === "RepetitionCount") return RepetitionCount;
if (argName === "ShouldLoop") return ShouldLoop;
if (argName === "DestinationX") return DestinationX;
if (argName === "DestinationY") return DestinationY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPathToContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.mod((( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentLength()), (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TotalLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoop = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnLoopContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.ceil((( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentLength()) / (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TotalLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.Loop = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.LoopContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentLength()); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPath = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PositionOnPathContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldLoop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentLength(gdjs.evtTools.common.clamp((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), 0, (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TotalLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldLoop() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentLength((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdatePosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotation() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].setAngle((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathAngle()) + gdjs.evtsExt__CurvedMovement__PathAngle.func(runtimeScene, (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RepeatedPathPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationOffset()) + (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BackOrForthAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPath = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetPositionOnPathContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext.GDObjectObjects1= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext.userFunc0xba9d00 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

/** @type {string} */
const pathName = behavior._getPathName();
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;
const curvedPath = curvedPaths.get(pathName);
if (!curvedPath) {
    return;
}

behavior.workingTransformation = behavior.workingTransformation || new gdjs.AffineTransformation();
/** @type {gdjs.AffineTransformation} */
const transformation = behavior.workingTransformation;

const repetitionDone = behavior.RepetitionDone();
transformation.setToTranslation(
    repetitionDone * behavior.PathEndX(),
    repetitionDone * behavior.PathEndY() / behavior.PathSpeedScaleY()
);
transformation.preConcatenate(behavior.curvedMovementTransformation);

/** @type {number} */
const length = behavior.RepeatedPathPosition();
/** @type {[number, number]} */
const point = curvedPath.getTransformedPosition(length, transformation);
const x = point[0] + behavior._getPathOriginX();
const y = point[1] + behavior._getPathOriginY();
object.setPosition(x, y);

};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext.GDObjectObjects1);
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext.userFunc0xba9d00(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePosition = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.UpdatePositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PositionOnLoop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) < (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Length")) || 0 : 0));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPath = function(Length, parentEventsFunctionContext) {

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
if (argName === "Length") return Length;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CheckPositionOnPathContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentLength() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOrigin = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedOriginContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentLength() == (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TotalLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTarget = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedTargetContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedTarget((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedOrigin((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1_1final, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEnd = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.HasReachedAnEndContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final = [];

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration() != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldLoop() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedTarget((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.length = 0;
let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > 0 ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration() > 0 ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedOrigin((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.length = 0;
let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < 0 ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration() < 0 ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2_3final, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1_1final, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1);
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurther = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.CanMoveFurtherContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathAngle()) + gdjs.evtsExt__CurvedMovement__PathAngle.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RepeatedPathPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationOffset()) + (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BackOrForthAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.MovementAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.Speed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeed = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetedSpeed")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceleration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Acceleration")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedAnEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(0);
}
}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAt = function(TargetedSpeed, Acceleration, parentEventsFunctionContext) {

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
if (argName === "TargetedSpeed") return TargetedSpeed;
if (argName === "Acceleration") return Acceleration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateAtContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetedSpeed")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceleration(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetedSpeed")) || 0 : 0) - (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedAnEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(0);
}
}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuring = function(TargetedSpeed, Duration, parentEventsFunctionContext) {

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
if (argName === "TargetedSpeed") return TargetedSpeed;
if (argName === "Duration") return Duration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.AccelarateDuringContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDObjectObjects2= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.userFunc0xced420 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

/** @type {gdjs.ShapePainterRuntimeObject} */
const shapePainter = eventsFunctionContext.getObjects("ShapePainter")[0];
if (!shapePainter) {
    return ;
}

/** @type {string} */
const pathName = behavior._getPathName();
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;
const curvedPath = curvedPaths.get(pathName);
if (!curvedPath) {
    return ;
}

/** @type {gdjs.AffineTransformation} */
const transformation = behavior.curvedMovementTransformation;
let point = behavior.curvedMovementWorkingPoint || [0, 0];

let originX = behavior._getPathOriginX();
let originY = behavior._getPathOriginY();
shapePainter.drawPathMoveTo(originX, originY);
const repetitionCount = behavior._getRepetitionCount();
let previousLastTargetX = 0;
let previousLastTargetY = 0;
const endX = curvedPath.getEndX();
const endY = curvedPath.getEndY();
for (let repetitionIndex = 0; repetitionIndex < repetitionCount; repetitionIndex++) {
  for (let curveIndex = 0; curveIndex < curvedPath.curves.length; curveIndex++) {
    point[0] = curvedPath.getFirstControlX(curveIndex) + previousLastTargetX;
    point[1] = curvedPath.getFirstControlY(curveIndex) + previousLastTargetY;
    if (transformation) {
      point = curvedPath.transformPosition(point[0], point[1], transformation, point);
    }
    const firstControlX = point[0];
    const firstControlY = point[1];

    point[0] = curvedPath.getSecondControlX(curveIndex) + previousLastTargetX;
    point[1] = curvedPath.getSecondControlY(curveIndex) + previousLastTargetY;
    if (transformation) {
      point = curvedPath.transformPosition(point[0], point[1], transformation, point);
    }
    const secondControlX = point[0];
    const secondControlY = point[1];

    point[0] = curvedPath.getTargetX(curveIndex) + previousLastTargetX;
    point[1] = curvedPath.getTargetY(curveIndex) + previousLastTargetY;
    if (transformation) {
      point = curvedPath.transformPosition(point[0], point[1], transformation, point);
    }
    const targetX = point[0];
    const targetY = point[1];

    shapePainter.drawPathBezierCurveTo(
      firstControlX + originX,
      firstControlY + originY,
      secondControlX + originX,
      secondControlY + originY,
      targetX + originX,
      targetY + originY);
  }
  previousLastTargetX += endX;
  previousLastTargetY += endY;
}

};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1[i].setCoordinatesRelative(false);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1[i].setFillOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1[i].setOutlineSize((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1[i].getOutlineSize()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDObjectObjects1);
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.userFunc0xced420(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebug = function(ShapePainter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ShapePainter": ShapePainter
},
  _objectArraysMap: {
"Object": thisObjectList
, "ShapePainter": gdjs.objectsListsToArray(ShapePainter)
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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.GDShapePainterObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.DrawDebugContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.userFunc0x8ff270 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

const scale = eventsFunctionContext.getArgument("Scale");
const angle = eventsFunctionContext.getArgument("Angle");

/** @type {gdjs.AffineTransformation} */
const transformation = behavior.curvedMovementTransformation || new gdjs.AffineTransformation()
transformation.setToScale(scale, scale);
transformation.rotate(angle / 180 * Math.PI);

behavior.curvedMovementTransformation = transformation;
};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.GDObjectObjects1);
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.userFunc0x8ff270(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformation = function(OriginX, OriginY, Scale, Angle, parentEventsFunctionContext) {

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
if (argName === "OriginX") return OriginX;
if (argName === "OriginY") return OriginY;
if (argName === "Scale") return Scale;
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.SetTransformationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewpoint() == "Top-down" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1 */
{gdjs.evtsExt__CurvedMovement__SetSpeedScaleY.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewpoint() == "Isometry 2:1 (26.565°)" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1 */
{gdjs.evtsExt__CurvedMovement__SetSpeedScaleY.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTransformation((gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getX()), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getY()), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathScale()), (gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathAngle()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetPositionOnPath(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovement = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.InitializeMovementContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedTarget((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.mod((( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PositionOnLoop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))); }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedTarget((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPosition = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepeatedPathPositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedTarget((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.floor((( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PositionOnLoop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))); }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedTarget((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRepetitionCount()) - 1; }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDone = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.RepetitionDoneContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.mod((( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PositionOnLoop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TotalLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.Progress = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.ProgressContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__PathLength.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLength = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathLengthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__PathLength.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRepetitionCount()); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLength = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.TotalLengthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__PathEndX.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__PathEndY.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathEndYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__SpeedScaleY.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathSpeedScaleYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsLookingBack() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1_1final, gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 180; }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.BackOrForthAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathOriginX()); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext = {};
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathOriginY()); }}}

}


};

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement.prototype.PathOriginYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("CurvedMovement::SpeedPathMovement", gdjs.evtsExt__CurvedMovement__SpeedPathMovement.SpeedPathMovement);
