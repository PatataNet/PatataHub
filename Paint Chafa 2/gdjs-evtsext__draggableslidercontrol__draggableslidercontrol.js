
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl || {};

/**
 * Behavior generated from Draggable Slider Control
 */
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl = class DraggableSliderControl extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ValueMin = behaviorData.ValueMin !== undefined ? behaviorData.ValueMin : Number("0") || 0;
    this._behaviorData.ValueMax = behaviorData.ValueMax !== undefined ? behaviorData.ValueMax : Number("1") || 0;
    this._behaviorData.TickSpacing = behaviorData.TickSpacing !== undefined ? behaviorData.TickSpacing : Number("0") || 0;
    this._behaviorData.ThumbShape = behaviorData.ThumbShape !== undefined ? behaviorData.ThumbShape : "circle";
    this._behaviorData.ThumbWidth = behaviorData.ThumbWidth !== undefined ? behaviorData.ThumbWidth : Number("20") || 0;
    this._behaviorData.ThumbHeight = behaviorData.ThumbHeight !== undefined ? behaviorData.ThumbHeight : Number("20") || 0;
    this._behaviorData.ThumbColor = behaviorData.ThumbColor !== undefined ? behaviorData.ThumbColor : " 24;119;211";
    this._behaviorData.ThumbOpacity = behaviorData.ThumbOpacity !== undefined ? behaviorData.ThumbOpacity : Number("255") || 0;
    this._behaviorData.TrackWidth = behaviorData.TrackWidth !== undefined ? behaviorData.TrackWidth : Number("200") || 0;
    this._behaviorData.TrackHeight = behaviorData.TrackHeight !== undefined ? behaviorData.TrackHeight : Number("4") || 0;
    this._behaviorData.InactiveTrackColor = behaviorData.InactiveTrackColor !== undefined ? behaviorData.InactiveTrackColor : "";
    this._behaviorData.InactiveTrackOpacity = behaviorData.InactiveTrackOpacity !== undefined ? behaviorData.InactiveTrackOpacity : Number("96") || 0;
    this._behaviorData.ActiveTrackColor = behaviorData.ActiveTrackColor !== undefined ? behaviorData.ActiveTrackColor : " ";
    this._behaviorData.ActiveTrackOpacity = behaviorData.ActiveTrackOpacity !== undefined ? behaviorData.ActiveTrackOpacity : Number("255") || 0;
    this._behaviorData.HaloRadius = behaviorData.HaloRadius !== undefined ? behaviorData.HaloRadius : Number("24") || 0;
    this._behaviorData.HaloOpacityHover = behaviorData.HaloOpacityHover !== undefined ? behaviorData.HaloOpacityHover : Number("32") || 0;
    this._behaviorData.HaloOpacityClick = behaviorData.HaloOpacityClick !== undefined ? behaviorData.HaloOpacityClick : Number("64") || 0;
    this._behaviorData.RoundedTrack = behaviorData.RoundedTrack !== undefined ? behaviorData.RoundedTrack : true;
    this._behaviorData.IsBeingDragged = false;
    this._behaviorData.Value = Number("0") || 0;
    this._behaviorData.ThumbOffset = Number("0") || 0;
    this._behaviorData.NeedRedraw = true;
    this._behaviorData.IsHovered = false;
    this._behaviorData.WasHovered = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ValueMin !== newBehaviorData.ValueMin)
      this._behaviorData.ValueMin = newBehaviorData.ValueMin;
    if (oldBehaviorData.ValueMax !== newBehaviorData.ValueMax)
      this._behaviorData.ValueMax = newBehaviorData.ValueMax;
    if (oldBehaviorData.TickSpacing !== newBehaviorData.TickSpacing)
      this._behaviorData.TickSpacing = newBehaviorData.TickSpacing;
    if (oldBehaviorData.ThumbShape !== newBehaviorData.ThumbShape)
      this._behaviorData.ThumbShape = newBehaviorData.ThumbShape;
    if (oldBehaviorData.ThumbWidth !== newBehaviorData.ThumbWidth)
      this._behaviorData.ThumbWidth = newBehaviorData.ThumbWidth;
    if (oldBehaviorData.ThumbHeight !== newBehaviorData.ThumbHeight)
      this._behaviorData.ThumbHeight = newBehaviorData.ThumbHeight;
    if (oldBehaviorData.ThumbColor !== newBehaviorData.ThumbColor)
      this._behaviorData.ThumbColor = newBehaviorData.ThumbColor;
    if (oldBehaviorData.ThumbOpacity !== newBehaviorData.ThumbOpacity)
      this._behaviorData.ThumbOpacity = newBehaviorData.ThumbOpacity;
    if (oldBehaviorData.TrackWidth !== newBehaviorData.TrackWidth)
      this._behaviorData.TrackWidth = newBehaviorData.TrackWidth;
    if (oldBehaviorData.TrackHeight !== newBehaviorData.TrackHeight)
      this._behaviorData.TrackHeight = newBehaviorData.TrackHeight;
    if (oldBehaviorData.InactiveTrackColor !== newBehaviorData.InactiveTrackColor)
      this._behaviorData.InactiveTrackColor = newBehaviorData.InactiveTrackColor;
    if (oldBehaviorData.InactiveTrackOpacity !== newBehaviorData.InactiveTrackOpacity)
      this._behaviorData.InactiveTrackOpacity = newBehaviorData.InactiveTrackOpacity;
    if (oldBehaviorData.ActiveTrackColor !== newBehaviorData.ActiveTrackColor)
      this._behaviorData.ActiveTrackColor = newBehaviorData.ActiveTrackColor;
    if (oldBehaviorData.ActiveTrackOpacity !== newBehaviorData.ActiveTrackOpacity)
      this._behaviorData.ActiveTrackOpacity = newBehaviorData.ActiveTrackOpacity;
    if (oldBehaviorData.HaloRadius !== newBehaviorData.HaloRadius)
      this._behaviorData.HaloRadius = newBehaviorData.HaloRadius;
    if (oldBehaviorData.HaloOpacityHover !== newBehaviorData.HaloOpacityHover)
      this._behaviorData.HaloOpacityHover = newBehaviorData.HaloOpacityHover;
    if (oldBehaviorData.HaloOpacityClick !== newBehaviorData.HaloOpacityClick)
      this._behaviorData.HaloOpacityClick = newBehaviorData.HaloOpacityClick;
    if (oldBehaviorData.RoundedTrack !== newBehaviorData.RoundedTrack)
      this._behaviorData.RoundedTrack = newBehaviorData.RoundedTrack;
    if (oldBehaviorData.IsBeingDragged !== newBehaviorData.IsBeingDragged)
      this._behaviorData.IsBeingDragged = newBehaviorData.IsBeingDragged;
    if (oldBehaviorData.Value !== newBehaviorData.Value)
      this._behaviorData.Value = newBehaviorData.Value;
    if (oldBehaviorData.ThumbOffset !== newBehaviorData.ThumbOffset)
      this._behaviorData.ThumbOffset = newBehaviorData.ThumbOffset;
    if (oldBehaviorData.NeedRedraw !== newBehaviorData.NeedRedraw)
      this._behaviorData.NeedRedraw = newBehaviorData.NeedRedraw;
    if (oldBehaviorData.IsHovered !== newBehaviorData.IsHovered)
      this._behaviorData.IsHovered = newBehaviorData.IsHovered;
    if (oldBehaviorData.WasHovered !== newBehaviorData.WasHovered)
      this._behaviorData.WasHovered = newBehaviorData.WasHovered;

    return true;
  }

  // Properties:
  
  _getValueMin() {
    return this._behaviorData.ValueMin !== undefined ? this._behaviorData.ValueMin : Number("0") || 0;
  }
  _setValueMin(newValue) {
    this._behaviorData.ValueMin = newValue;
  }
  _getValueMax() {
    return this._behaviorData.ValueMax !== undefined ? this._behaviorData.ValueMax : Number("1") || 0;
  }
  _setValueMax(newValue) {
    this._behaviorData.ValueMax = newValue;
  }
  _getTickSpacing() {
    return this._behaviorData.TickSpacing !== undefined ? this._behaviorData.TickSpacing : Number("0") || 0;
  }
  _setTickSpacing(newValue) {
    this._behaviorData.TickSpacing = newValue;
  }
  _getThumbShape() {
    return this._behaviorData.ThumbShape !== undefined ? this._behaviorData.ThumbShape : "circle";
  }
  _setThumbShape(newValue) {
    this._behaviorData.ThumbShape = newValue;
  }
  _getThumbWidth() {
    return this._behaviorData.ThumbWidth !== undefined ? this._behaviorData.ThumbWidth : Number("20") || 0;
  }
  _setThumbWidth(newValue) {
    this._behaviorData.ThumbWidth = newValue;
  }
  _getThumbHeight() {
    return this._behaviorData.ThumbHeight !== undefined ? this._behaviorData.ThumbHeight : Number("20") || 0;
  }
  _setThumbHeight(newValue) {
    this._behaviorData.ThumbHeight = newValue;
  }
  _getThumbColor() {
    return this._behaviorData.ThumbColor !== undefined ? this._behaviorData.ThumbColor : " 24;119;211";
  }
  _setThumbColor(newValue) {
    this._behaviorData.ThumbColor = newValue;
  }
  _getThumbOpacity() {
    return this._behaviorData.ThumbOpacity !== undefined ? this._behaviorData.ThumbOpacity : Number("255") || 0;
  }
  _setThumbOpacity(newValue) {
    this._behaviorData.ThumbOpacity = newValue;
  }
  _getTrackWidth() {
    return this._behaviorData.TrackWidth !== undefined ? this._behaviorData.TrackWidth : Number("200") || 0;
  }
  _setTrackWidth(newValue) {
    this._behaviorData.TrackWidth = newValue;
  }
  _getTrackHeight() {
    return this._behaviorData.TrackHeight !== undefined ? this._behaviorData.TrackHeight : Number("4") || 0;
  }
  _setTrackHeight(newValue) {
    this._behaviorData.TrackHeight = newValue;
  }
  _getInactiveTrackColor() {
    return this._behaviorData.InactiveTrackColor !== undefined ? this._behaviorData.InactiveTrackColor : "";
  }
  _setInactiveTrackColor(newValue) {
    this._behaviorData.InactiveTrackColor = newValue;
  }
  _getInactiveTrackOpacity() {
    return this._behaviorData.InactiveTrackOpacity !== undefined ? this._behaviorData.InactiveTrackOpacity : Number("96") || 0;
  }
  _setInactiveTrackOpacity(newValue) {
    this._behaviorData.InactiveTrackOpacity = newValue;
  }
  _getActiveTrackColor() {
    return this._behaviorData.ActiveTrackColor !== undefined ? this._behaviorData.ActiveTrackColor : " ";
  }
  _setActiveTrackColor(newValue) {
    this._behaviorData.ActiveTrackColor = newValue;
  }
  _getActiveTrackOpacity() {
    return this._behaviorData.ActiveTrackOpacity !== undefined ? this._behaviorData.ActiveTrackOpacity : Number("255") || 0;
  }
  _setActiveTrackOpacity(newValue) {
    this._behaviorData.ActiveTrackOpacity = newValue;
  }
  _getHaloRadius() {
    return this._behaviorData.HaloRadius !== undefined ? this._behaviorData.HaloRadius : Number("24") || 0;
  }
  _setHaloRadius(newValue) {
    this._behaviorData.HaloRadius = newValue;
  }
  _getHaloOpacityHover() {
    return this._behaviorData.HaloOpacityHover !== undefined ? this._behaviorData.HaloOpacityHover : Number("32") || 0;
  }
  _setHaloOpacityHover(newValue) {
    this._behaviorData.HaloOpacityHover = newValue;
  }
  _getHaloOpacityClick() {
    return this._behaviorData.HaloOpacityClick !== undefined ? this._behaviorData.HaloOpacityClick : Number("64") || 0;
  }
  _setHaloOpacityClick(newValue) {
    this._behaviorData.HaloOpacityClick = newValue;
  }
  _getRoundedTrack() {
    return this._behaviorData.RoundedTrack !== undefined ? this._behaviorData.RoundedTrack : true;
  }
  _setRoundedTrack(newValue) {
    this._behaviorData.RoundedTrack = newValue;
  }
  _getIsBeingDragged() {
    return this._behaviorData.IsBeingDragged !== undefined ? this._behaviorData.IsBeingDragged : false;
  }
  _setIsBeingDragged(newValue) {
    this._behaviorData.IsBeingDragged = newValue;
  }
  _getValue() {
    return this._behaviorData.Value !== undefined ? this._behaviorData.Value : Number("0") || 0;
  }
  _setValue(newValue) {
    this._behaviorData.Value = newValue;
  }
  _getThumbOffset() {
    return this._behaviorData.ThumbOffset !== undefined ? this._behaviorData.ThumbOffset : Number("0") || 0;
  }
  _setThumbOffset(newValue) {
    this._behaviorData.ThumbOffset = newValue;
  }
  _getNeedRedraw() {
    return this._behaviorData.NeedRedraw !== undefined ? this._behaviorData.NeedRedraw : true;
  }
  _setNeedRedraw(newValue) {
    this._behaviorData.NeedRedraw = newValue;
  }
  _getIsHovered() {
    return this._behaviorData.IsHovered !== undefined ? this._behaviorData.IsHovered : false;
  }
  _setIsHovered(newValue) {
    this._behaviorData.IsHovered = newValue;
  }
  _getWasHovered() {
    return this._behaviorData.WasHovered !== undefined ? this._behaviorData.WasHovered : false;
  }
  _setWasHovered(newValue) {
    this._behaviorData.WasHovered = newValue;
  }
}

/**
 * Shared data generated from Draggable Slider Control
 */
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.SharedData = class DraggableSliderControlSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DraggableSliderControl_DraggableSliderControlSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DraggableSliderControl_DraggableSliderControlSharedData = new gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.SharedData(
      initialData
    );
  }
  return instanceContainer._DraggableSliderControl_DraggableSliderControlSharedData;
}

// Methods:
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition4IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition5IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBeingDragged(false);
}
}{runtimeScene.getVariables().get("__DraggableSliderBehavior").getChild("SlideInProgress").setNumber(0);
}}

}


{



}


{


{
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin()) + ((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax()) - (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin())) * (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()) / (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition4IsTrue_0.val = false;
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getLayer()), 0) >= (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getX()) - (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()) / 2;
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getLayer()), 0) <= (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getX()) + (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()) + (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()) / 2;
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getLayer()), 0) >= (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getY()) - ((( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) - (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight())) / 2;
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition4IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getLayer()), 0) <= (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getY()) + ((( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) + (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight())) / 2;
}}
}
}
}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition4IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBeingDragged(true);
}
}{runtimeScene.getVariables().get("__DraggableSliderBehavior").getChild("SlideInProgress").setNumber(1);
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasHovered(true);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasHovered(false);
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHovered(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val = false;
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getLayer()), 0) >= (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getX()) + (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()) - Math.max((( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()), (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight())) / 2;
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getLayer()), 0) <= (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getX()) + (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()) + Math.max((( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()), (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight())) / 2;
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getLayer()), 0) >= (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getY()) - ((( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) - (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight())) / 2;
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getLayer()), 0) <= (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getY()) + ((( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) + (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight())) / 2;
}}
}
}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHovered(true);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasHovered()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasHovered() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOffset(gdjs.evtTools.input.getMouseX(runtimeScene, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getLayer()), 0) - (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}
{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DraggableSliderBehavior").getChild("SlideInProgress")) == 0;
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[0].getLayer()));
}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].isVisible() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
}
}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.condition3IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityClick()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor() == "" ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbColor()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor() == "") ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor()));
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackOpacity()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoundedTrack() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawArc((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()), (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, 270, 90, false, true);
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle(0, 0, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()), Math.min((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()), (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight())));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor() == "" ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbColor()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor() == "") ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor()));
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackOpacity()));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoundedTrack() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawArc(0, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, 90, 270, false, true);
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle(0, -(1), (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), Math.min((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()), (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight())) + 1);
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOpacity()));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "circle" ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, Math.max((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()), (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight())) / 2);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "rectangle" ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()) - ((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()) / 2), -(1) * ((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) - (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight())) / 2, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()) + ((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()) / 2), ((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) + (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight())) / 2);
}
}}

}


{

/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].setFillOpacity((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityHover()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].setOutlineOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawCircle((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()));
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNeedRedraw() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(false);
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].clear();
}
}
{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged() ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDragged = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].setClearBetweenFrames(false);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "rectangle" ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() < (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetThumbWidth((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrackHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "rectangle" ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() < (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetThumbWidth((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeight = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeight = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInactiveTrackOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActiveTrackOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrackWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidth = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "rectangle" ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() < (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetThumbWidth((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidth = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbShape((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Shape") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "rectangle" ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() < (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetThumbWidth((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShape = function(Shape, parentEventsFunctionContext) {

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
if (argName === "Shape") return Shape;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadius((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadius = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActiveTrackColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInactiveTrackColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.conditionTrue_1 = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition0IsTrue_0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0) == 0);
}
}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoundedTrack(false);
}
}}

}


{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.conditionTrue_1 = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition0IsTrue_0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0) == 1);
}
}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoundedTrack(true);
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrack = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTickSpacing() <= 0 ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTickSpacing() > 0 ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(Math.round((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0) / (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTickSpacing())) * (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTickSpacing()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() < (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() > (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax()) ) {
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax()));
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOffset((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()) * ((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue()) - (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin())) / ((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax()) - (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin())));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValue = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects2= [];

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue()); }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.Value = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("DraggableSliderControl::DraggableSliderControl", gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl);
