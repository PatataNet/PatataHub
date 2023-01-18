
if (typeof gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors !== "undefined") {
  gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors = {};
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachIndex2 = 0;

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachObjects2 = [];

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachTemporary2 = null;

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachTotalCount2 = 0;

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects5= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects1= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects2= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4= [];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects5= [];

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.conditionTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.conditionTrue_1 = {val:false};
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4);


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0].getX()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0), (( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0].getY())) ) {
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[k] = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length = k;}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4 */
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0] : null), (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4);


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0].getX()), (( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0].getY()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0)) ) {
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[k] = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length = k;}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4 */
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0] : null), (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4);


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0].getX()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0), (( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0].getY())) ) {
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[k] = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length = k;}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4 */
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4[0] : null), (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getX()), (( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getY()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0)) ) {
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[0] : null));
}}

}


};gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getX()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0) / 2, (( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getY()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) / 2) ) {
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getX()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0) / 2, (( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getY()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) / 2) ) {
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getX()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0) / 2, (( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getY()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) / 2) ) {
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getX()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0) / 2, (( gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0].getY()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) / 2) ) {
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3[0] : null));
}}

}


{


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.conditionTrue_1 = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("AllowsDiagonals") : false);
}
}if (gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects1);

for(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachIndex2 = 0;gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachIndex2 < gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects1.length;++gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachIndex2) {
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2.length = 0;


gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachTemporary2 = gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects1[gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachIndex2];
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2.push(gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.func = function(runtimeScene, Object, Neighbor, CellWidth, CellHeight, AllowsDiagonals, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Neighbor": Neighbor
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Neighbor": gdjs.objectsListsToArray(Neighbor)
},
  _behaviorNamesMap: {
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
if (argName === "CellWidth") return CellWidth;
if (argName === "CellHeight") return CellHeight;
if (argName === "AllowsDiagonals") return AllowsDiagonals;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects2.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects3.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects4.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDObjectObjects5.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects2.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects3.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects4.length = 0;
gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.GDNeighborObjects5.length = 0;

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__LinkTools__LinkIsometricRectangularNeighbors.registeredGdjsCallbacks = [];