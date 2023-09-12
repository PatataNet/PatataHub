
gdjs.evtsExt__CurvedMovement__TweenPathMovement = gdjs.evtsExt__CurvedMovement__TweenPathMovement || {};

/**
 * Behavior generated from Movement on a curve (duration-based)
 */
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement = class TweenPathMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Rotation = behaviorData.Rotation !== undefined ? behaviorData.Rotation : true;
    this._behaviorData.RotationOffset = behaviorData.RotationOffset !== undefined ? behaviorData.RotationOffset : Number("0") || 0;
    this._behaviorData.FlipXToGoBack = behaviorData.FlipXToGoBack !== undefined ? behaviorData.FlipXToGoBack : false;
    this._behaviorData.FlipYToGoBack = behaviorData.FlipYToGoBack !== undefined ? behaviorData.FlipYToGoBack : false;
    this._behaviorData.SpeedScale = Number("1") || 0;
    this._behaviorData.PathOriginX = Number("") || 0;
    this._behaviorData.PathOriginY = Number("") || 0;
    this._behaviorData.Target = Number("") || 0;
    this._behaviorData.Origin = Number("") || 0;
    this._behaviorData.PathName = "";
    this._behaviorData.Duration = Number("") || 0;
    this._behaviorData.Easing = "";
    this._behaviorData.DrawingElementIndex = Number("0") || 0;
    this._behaviorData.X = Number("") || 0;
    this._behaviorData.Y = Number("") || 0;
    this._behaviorData.PathAngle = Number("") || 0;
    this._behaviorData.PathScale = Number("") || 0;
    this._behaviorData.RepetitionCount = Number("") || 0;
    this._behaviorData.ShouldGoBack = false;
    this._behaviorData.ShouldLoop = false;
    this._behaviorData.RepetitionDoneCount = Number("") || 0;
    this._behaviorData.IsGoingBack = false;
    this._behaviorData.PauseDurationBeforeGoingBack = Number("0") || 0;
    this._behaviorData.DrawingPathOriginX = Number("") || 0;
    this._behaviorData.DrawingPathOriginY = Number("") || 0;
    this._behaviorData.DebugLineStrokeWidth = Number("") || 0;
    this._behaviorData.Viewpoint = behaviorData.Viewpoint !== undefined ? behaviorData.Viewpoint : "Top-Down";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Rotation !== newBehaviorData.Rotation)
      this._behaviorData.Rotation = newBehaviorData.Rotation;
    if (oldBehaviorData.RotationOffset !== newBehaviorData.RotationOffset)
      this._behaviorData.RotationOffset = newBehaviorData.RotationOffset;
    if (oldBehaviorData.FlipXToGoBack !== newBehaviorData.FlipXToGoBack)
      this._behaviorData.FlipXToGoBack = newBehaviorData.FlipXToGoBack;
    if (oldBehaviorData.FlipYToGoBack !== newBehaviorData.FlipYToGoBack)
      this._behaviorData.FlipYToGoBack = newBehaviorData.FlipYToGoBack;
    if (oldBehaviorData.SpeedScale !== newBehaviorData.SpeedScale)
      this._behaviorData.SpeedScale = newBehaviorData.SpeedScale;
    if (oldBehaviorData.PathOriginX !== newBehaviorData.PathOriginX)
      this._behaviorData.PathOriginX = newBehaviorData.PathOriginX;
    if (oldBehaviorData.PathOriginY !== newBehaviorData.PathOriginY)
      this._behaviorData.PathOriginY = newBehaviorData.PathOriginY;
    if (oldBehaviorData.Target !== newBehaviorData.Target)
      this._behaviorData.Target = newBehaviorData.Target;
    if (oldBehaviorData.Origin !== newBehaviorData.Origin)
      this._behaviorData.Origin = newBehaviorData.Origin;
    if (oldBehaviorData.PathName !== newBehaviorData.PathName)
      this._behaviorData.PathName = newBehaviorData.PathName;
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;
    if (oldBehaviorData.Easing !== newBehaviorData.Easing)
      this._behaviorData.Easing = newBehaviorData.Easing;
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
    if (oldBehaviorData.ShouldGoBack !== newBehaviorData.ShouldGoBack)
      this._behaviorData.ShouldGoBack = newBehaviorData.ShouldGoBack;
    if (oldBehaviorData.ShouldLoop !== newBehaviorData.ShouldLoop)
      this._behaviorData.ShouldLoop = newBehaviorData.ShouldLoop;
    if (oldBehaviorData.RepetitionDoneCount !== newBehaviorData.RepetitionDoneCount)
      this._behaviorData.RepetitionDoneCount = newBehaviorData.RepetitionDoneCount;
    if (oldBehaviorData.IsGoingBack !== newBehaviorData.IsGoingBack)
      this._behaviorData.IsGoingBack = newBehaviorData.IsGoingBack;
    if (oldBehaviorData.PauseDurationBeforeGoingBack !== newBehaviorData.PauseDurationBeforeGoingBack)
      this._behaviorData.PauseDurationBeforeGoingBack = newBehaviorData.PauseDurationBeforeGoingBack;
    if (oldBehaviorData.DrawingPathOriginX !== newBehaviorData.DrawingPathOriginX)
      this._behaviorData.DrawingPathOriginX = newBehaviorData.DrawingPathOriginX;
    if (oldBehaviorData.DrawingPathOriginY !== newBehaviorData.DrawingPathOriginY)
      this._behaviorData.DrawingPathOriginY = newBehaviorData.DrawingPathOriginY;
    if (oldBehaviorData.DebugLineStrokeWidth !== newBehaviorData.DebugLineStrokeWidth)
      this._behaviorData.DebugLineStrokeWidth = newBehaviorData.DebugLineStrokeWidth;
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
  _getFlipXToGoBack() {
    return this._behaviorData.FlipXToGoBack !== undefined ? this._behaviorData.FlipXToGoBack : false;
  }
  _setFlipXToGoBack(newValue) {
    this._behaviorData.FlipXToGoBack = newValue;
  }
  _toggleFlipXToGoBack() {
    this._setFlipXToGoBack(!this._getFlipXToGoBack());
  }
  _getFlipYToGoBack() {
    return this._behaviorData.FlipYToGoBack !== undefined ? this._behaviorData.FlipYToGoBack : false;
  }
  _setFlipYToGoBack(newValue) {
    this._behaviorData.FlipYToGoBack = newValue;
  }
  _toggleFlipYToGoBack() {
    this._setFlipYToGoBack(!this._getFlipYToGoBack());
  }
  _getSpeedScale() {
    return this._behaviorData.SpeedScale !== undefined ? this._behaviorData.SpeedScale : Number("1") || 0;
  }
  _setSpeedScale(newValue) {
    this._behaviorData.SpeedScale = newValue;
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
  _getTarget() {
    return this._behaviorData.Target !== undefined ? this._behaviorData.Target : Number("") || 0;
  }
  _setTarget(newValue) {
    this._behaviorData.Target = newValue;
  }
  _getOrigin() {
    return this._behaviorData.Origin !== undefined ? this._behaviorData.Origin : Number("") || 0;
  }
  _setOrigin(newValue) {
    this._behaviorData.Origin = newValue;
  }
  _getPathName() {
    return this._behaviorData.PathName !== undefined ? this._behaviorData.PathName : "";
  }
  _setPathName(newValue) {
    this._behaviorData.PathName = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getEasing() {
    return this._behaviorData.Easing !== undefined ? this._behaviorData.Easing : "";
  }
  _setEasing(newValue) {
    this._behaviorData.Easing = newValue;
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
  _getShouldGoBack() {
    return this._behaviorData.ShouldGoBack !== undefined ? this._behaviorData.ShouldGoBack : false;
  }
  _setShouldGoBack(newValue) {
    this._behaviorData.ShouldGoBack = newValue;
  }
  _toggleShouldGoBack() {
    this._setShouldGoBack(!this._getShouldGoBack());
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
  _getRepetitionDoneCount() {
    return this._behaviorData.RepetitionDoneCount !== undefined ? this._behaviorData.RepetitionDoneCount : Number("") || 0;
  }
  _setRepetitionDoneCount(newValue) {
    this._behaviorData.RepetitionDoneCount = newValue;
  }
  _getIsGoingBack() {
    return this._behaviorData.IsGoingBack !== undefined ? this._behaviorData.IsGoingBack : false;
  }
  _setIsGoingBack(newValue) {
    this._behaviorData.IsGoingBack = newValue;
  }
  _toggleIsGoingBack() {
    this._setIsGoingBack(!this._getIsGoingBack());
  }
  _getPauseDurationBeforeGoingBack() {
    return this._behaviorData.PauseDurationBeforeGoingBack !== undefined ? this._behaviorData.PauseDurationBeforeGoingBack : Number("0") || 0;
  }
  _setPauseDurationBeforeGoingBack(newValue) {
    this._behaviorData.PauseDurationBeforeGoingBack = newValue;
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
  _getViewpoint() {
    return this._behaviorData.Viewpoint !== undefined ? this._behaviorData.Viewpoint : "Top-Down";
  }
  _setViewpoint(newValue) {
    this._behaviorData.Viewpoint = newValue;
  }
}

/**
 * Shared data generated from Movement on a curve (duration-based)
 */
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.SharedData = class TweenPathMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._CurvedMovement_TweenPathMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._CurvedMovement_TweenPathMovementSharedData = new gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._CurvedMovement_TweenPathMovementSharedData;
}

// Methods:
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPauseDurationBeforeGoingBack() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getTimerElapsedTimeInSecondsOrNaN("__CurvedMovement.Wait") >= 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("__CurvedMovement.Wait");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("__CurvedMovement.Wait") >= (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPauseDurationBeforeGoingBack()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].removeTimer("__CurvedMovement.Wait");
}
}}

}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlipXToGoBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlipYToGoBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipY(false);
}
}}

}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlipXToGoBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlipYToGoBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].flipY(true);
}
}}

}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsGoingBack()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOrigin(1);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget(0);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsGoingBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOrigin(0);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget(1);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsGoingBack(false);
}
}
{ //Subevents
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsGoingBack(true);
}
}
{ //Subevents
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__CurvedMovement.Wait") >= 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsGoingBack()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldLoop() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("__CurvedMovement.Time");
}
}
{ //Subevents
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedAnEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldGoBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdatePosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotation() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle((gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathAngle()) + gdjs.evtsExt__CurvedMovement__PathAngle.func(runtimeScene, (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RepeatedPathPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationOffset()) + (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BackOrForthAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedAnEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext.GDObjectObjects1= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext.userFunc0xbf6e80 = function(runtimeScene, objects, eventsFunctionContext) {
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
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext.GDObjectObjects1);
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext.userFunc0xbf6e80(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePosition = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.UpdatePositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEasing((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Easing") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRepetitionCount((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RepetitionCount")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldGoBack(false);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathOriginX((gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathOriginY((gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathAngle(gdjs.evtTools.common.angleBetweenPositions((gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointX("")), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationX")) || 0 : 0), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointY("")) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationY")) || 0 : 0) - (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointY(""))) / (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathSpeedScaleY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - gdjs.evtTools.common.angleBetweenPositions(0, 0, (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathEndX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathEndY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathSpeedScaleY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathScale(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointX("")), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationX")) || 0 : 0), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointY("")) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationY")) || 0 : 0) - (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getPointY(""))) / (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathSpeedScaleY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / gdjs.evtTools.common.distanceBetweenPositions(0, 0, (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathEndX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathEndY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathSpeedScaleY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RepetitionCount")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InitializeMovement((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveTo = function(PathName, RepetitionCount, Duration, Easing, DestinationX, DestinationY, parentEventsFunctionContext) {

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
if (argName === "Duration") return Duration;
if (argName === "Easing") return Easing;
if (argName === "DestinationX") return DestinationX;
if (argName === "DestinationY") return DestinationY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveTo((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RepetitionCount")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Easing") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationX")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationY")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldGoBack(true);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPauseDurationBeforeGoingBack((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("WaitBeforeGoingBackDuration")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldLoop") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldLoop") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(true);
}
}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBack = function(PathName, RepetitionCount, Duration, Easing, DestinationX, DestinationY, WaitBeforeGoingBackDuration, ShouldLoop, parentEventsFunctionContext) {

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
if (argName === "Duration") return Duration;
if (argName === "Easing") return Easing;
if (argName === "DestinationX") return DestinationX;
if (argName === "DestinationY") return DestinationY;
if (argName === "WaitBeforeGoingBackDuration") return WaitBeforeGoingBackDuration;
if (argName === "ShouldLoop") return ShouldLoop;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveToAndGoBackContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEasing((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Easing") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRepetitionCount((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RepetitionCount")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldGoBack(false);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathOriginX((gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathOriginY((gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InitializeMovement((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.Move = function(PathName, RepetitionCount, Duration, Easing, parentEventsFunctionContext) {

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
if (argName === "Duration") return Duration;
if (argName === "Easing") return Easing;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Move((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RepetitionCount")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Easing") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldGoBack(true);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPauseDurationBeforeGoingBack((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("WaitBeforeGoingBackDuration")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldLoop") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldLoop") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldLoop(true);
}
}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBack = function(PathName, RepetitionCount, Duration, Easing, WaitBeforeGoingBackDuration, ShouldLoop, parentEventsFunctionContext) {

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
if (argName === "Duration") return Duration;
if (argName === "Easing") return Easing;
if (argName === "WaitBeforeGoingBackDuration") return WaitBeforeGoingBackDuration;
if (argName === "ShouldLoop") return ShouldLoop;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MoveAndGoBackContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Progress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget()));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEnd = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasReachedAnEndContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2_3final = [];

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldLoop() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedAnEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2_3final.length = 0;
let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldGoBack()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2_3final.indexOf(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2_3final.push(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3);

{let isConditionTrue_4 = false;
isConditionTrue_4 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldGoBack() ) {
        isConditionTrue_4 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length = k;
if (isConditionTrue_4) {
isConditionTrue_4 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsGoingBack()) ) {
        isConditionTrue_4 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length = k;
}
isConditionTrue_3 = isConditionTrue_4;
}
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2_3final.indexOf(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2_3final.push(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2_3final, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1_1final, gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMove = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.HasFinishedToMoveContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathAngle()) + gdjs.evtsExt__CurvedMovement__PathAngle.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RepeatedPathPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationOffset()) + (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BackOrForthAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.MovementAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDObjectObjects2= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.userFunc0xbf6e80 = function(runtimeScene, objects, eventsFunctionContext) {
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
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1[i].setCoordinatesRelative(false);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1[i].setFillOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1[i].setOutlineSize(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDObjectObjects1);
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.userFunc0xbf6e80(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebug = function(ShapePainter, parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.GDShapePainterObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.DrawDebugContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.userFunc0xc260e8 = function(runtimeScene, objects, eventsFunctionContext) {
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
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.GDObjectObjects1);
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.userFunc0xc260e8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformation = function(OriginX, OriginY, Scale, Angle, parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.SetTransformationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewpoint() == "Top-down" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1 */
{gdjs.evtsExt__CurvedMovement__SetSpeedScaleY.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getViewpoint() == "Isometry 2:1 (26.565°)" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1 */
{gdjs.evtsExt__CurvedMovement__SetSpeedScaleY.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTransformation((gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getPointX("")), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getPointY("")), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathScale()), (gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathAngle()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].resetTimer("__CurvedMovement.Time");
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsGoingBack(false);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOrigin(0);
}
}{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlipXToGoBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlipYToGoBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1[i].flipY(false);
}
}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovement = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.InitializeMovementContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.floor((( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Progress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRepetitionCount())); }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDone = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepetitionDoneContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * gdjs.evtTools.common.mod((( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Progress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 1 / (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRepetitionCount())) * (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRepetitionCount()); }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPosition = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.RepeatedPathPositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.tween.ease((( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEasing()), (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOrigin()), (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget()), Math.min(1, (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("__CurvedMovement.Time")) / (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))); }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.Progress = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.ProgressContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__PathLength.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLength = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathLengthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__PathEndX.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__PathEndY.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathEndYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtsExt__CurvedMovement__SpeedScaleY.func(runtimeScene, (( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.PathSpeedScaleYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext = {};
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsGoingBack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 180; }}}

}


};

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement.prototype.BackOrForthAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("CurvedMovement::TweenPathMovement", gdjs.evtsExt__CurvedMovement__TweenPathMovement.TweenPathMovement);
