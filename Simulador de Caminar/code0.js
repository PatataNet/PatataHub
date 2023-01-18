gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDBlockyBubObjects1_1final = [];

gdjs.New_32sceneCode.GDBlockyBubObjects1= [];
gdjs.New_32sceneCode.GDBlockyBubObjects2= [];
gdjs.New_32sceneCode.GDBlockyBubObjects3= [];
gdjs.New_32sceneCode.GDReflectionObjects1= [];
gdjs.New_32sceneCode.GDReflectionObjects2= [];
gdjs.New_32sceneCode.GDReflectionObjects3= [];
gdjs.New_32sceneCode.GDTileWaterObjects1= [];
gdjs.New_32sceneCode.GDTileWaterObjects2= [];
gdjs.New_32sceneCode.GDTileWaterObjects3= [];
gdjs.New_32sceneCode.GDTileGroundObjects1= [];
gdjs.New_32sceneCode.GDTileGroundObjects2= [];
gdjs.New_32sceneCode.GDTileGroundObjects3= [];
gdjs.New_32sceneCode.GDTileGroundReflectObjects1= [];
gdjs.New_32sceneCode.GDTileGroundReflectObjects2= [];
gdjs.New_32sceneCode.GDTileGroundReflectObjects3= [];
gdjs.New_32sceneCode.GDPlatformObjects1= [];
gdjs.New_32sceneCode.GDPlatformObjects2= [];
gdjs.New_32sceneCode.GDPlatformObjects3= [];
gdjs.New_32sceneCode.GDPlatformReflectObjects1= [];
gdjs.New_32sceneCode.GDPlatformReflectObjects2= [];
gdjs.New_32sceneCode.GDPlatformReflectObjects3= [];
gdjs.New_32sceneCode.GDCloud1Objects1= [];
gdjs.New_32sceneCode.GDCloud1Objects2= [];
gdjs.New_32sceneCode.GDCloud1Objects3= [];
gdjs.New_32sceneCode.GDCloud2Objects1= [];
gdjs.New_32sceneCode.GDCloud2Objects2= [];
gdjs.New_32sceneCode.GDCloud2Objects3= [];
gdjs.New_32sceneCode.GDCloud1ReflectObjects1= [];
gdjs.New_32sceneCode.GDCloud1ReflectObjects2= [];
gdjs.New_32sceneCode.GDCloud1ReflectObjects3= [];
gdjs.New_32sceneCode.GDCloud2ReflectObjects1= [];
gdjs.New_32sceneCode.GDCloud2ReflectObjects2= [];
gdjs.New_32sceneCode.GDCloud2ReflectObjects3= [];
gdjs.New_32sceneCode.GDSueloObjects1= [];
gdjs.New_32sceneCode.GDSueloObjects2= [];
gdjs.New_32sceneCode.GDSueloObjects3= [];
gdjs.New_32sceneCode.GDSueloReflectObjects1= [];
gdjs.New_32sceneCode.GDSueloReflectObjects2= [];
gdjs.New_32sceneCode.GDSueloReflectObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.conditionTrue_2 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_2 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_2 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_2 = {val:false};
gdjs.New_32sceneCode.conditionTrue_3 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_3 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_3 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_3 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDBlockyBubObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDBlockyBubObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_2 = gdjs.New_32sceneCode.condition0IsTrue_1;
gdjs.New_32sceneCode.condition0IsTrue_2.val = false;
gdjs.New_32sceneCode.condition1IsTrue_2.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}if ( gdjs.New_32sceneCode.condition0IsTrue_2.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_3 = gdjs.New_32sceneCode.condition1IsTrue_2;
gdjs.New_32sceneCode.conditionTrue_3.val = runtimeScene.getOnceTriggers().triggerOnce(8740180);
}
}}
gdjs.New_32sceneCode.conditionTrue_2.val = true && gdjs.New_32sceneCode.condition0IsTrue_2.val && gdjs.New_32sceneCode.condition1IsTrue_2.val;
}
if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BlockyBub"), gdjs.New_32sceneCode.GDBlockyBubObjects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDBlockyBubObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDBlockyBubObjects2[i].getY() > 600 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDBlockyBubObjects2[k] = gdjs.New_32sceneCode.GDBlockyBubObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDBlockyBubObjects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDBlockyBubObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDBlockyBubObjects1_1final.indexOf(gdjs.New_32sceneCode.GDBlockyBubObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDBlockyBubObjects1_1final.push(gdjs.New_32sceneCode.GDBlockyBubObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.New_32sceneCode.GDBlockyBubObjects1_1final, gdjs.New_32sceneCode.GDBlockyBubObjects1);
}
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlockyBub"), gdjs.New_32sceneCode.GDBlockyBubObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDBlockyBubObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBlockyBubObjects2[i].flipX(false);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlockyBub"), gdjs.New_32sceneCode.GDBlockyBubObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDBlockyBubObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBlockyBubObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlockyBub"), gdjs.New_32sceneCode.GDBlockyBubObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDBlockyBubObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDBlockyBubObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDBlockyBubObjects2[k] = gdjs.New_32sceneCode.GDBlockyBubObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDBlockyBubObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBlockyBubObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDBlockyBubObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBlockyBubObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlockyBub"), gdjs.New_32sceneCode.GDBlockyBubObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDBlockyBubObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDBlockyBubObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDBlockyBubObjects2[k] = gdjs.New_32sceneCode.GDBlockyBubObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDBlockyBubObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBlockyBubObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDBlockyBubObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBlockyBubObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlockyBub"), gdjs.New_32sceneCode.GDBlockyBubObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDBlockyBubObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDBlockyBubObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDBlockyBubObjects1[k] = gdjs.New_32sceneCode.GDBlockyBubObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDBlockyBubObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBlockyBubObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDBlockyBubObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBlockyBubObjects1[i].setAnimation(1);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDReflectionObjects1Objects = Hashtable.newFrom({"Reflection": gdjs.New_32sceneCode.GDReflectionObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBlockyBubObjects1Objects = Hashtable.newFrom({"BlockyBub": gdjs.New_32sceneCode.GDBlockyBubObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects = Hashtable.newFrom({"TileWater": gdjs.New_32sceneCode.GDTileWaterObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformReflectObjects1Objects = Hashtable.newFrom({"PlatformReflect": gdjs.New_32sceneCode.GDPlatformReflectObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.New_32sceneCode.GDPlatformObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects = Hashtable.newFrom({"TileWater": gdjs.New_32sceneCode.GDTileWaterObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCloud1ReflectObjects1Objects = Hashtable.newFrom({"Cloud1Reflect": gdjs.New_32sceneCode.GDCloud1ReflectObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCloud1Objects1Objects = Hashtable.newFrom({"Cloud1": gdjs.New_32sceneCode.GDCloud1Objects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects = Hashtable.newFrom({"TileWater": gdjs.New_32sceneCode.GDTileWaterObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCloud2ReflectObjects1Objects = Hashtable.newFrom({"Cloud2Reflect": gdjs.New_32sceneCode.GDCloud2ReflectObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCloud2Objects1Objects = Hashtable.newFrom({"Cloud2": gdjs.New_32sceneCode.GDCloud2Objects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects = Hashtable.newFrom({"TileWater": gdjs.New_32sceneCode.GDTileWaterObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSueloReflectObjects1Objects = Hashtable.newFrom({"SueloReflect": gdjs.New_32sceneCode.GDSueloReflectObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSueloObjects1Objects = Hashtable.newFrom({"Suelo": gdjs.New_32sceneCode.GDSueloObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects = Hashtable.newFrom({"TileWater": gdjs.New_32sceneCode.GDTileWaterObjects1});
gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BlockyBub"), gdjs.New_32sceneCode.GDBlockyBubObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud1"), gdjs.New_32sceneCode.GDCloud1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud1Reflect"), gdjs.New_32sceneCode.GDCloud1ReflectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud2"), gdjs.New_32sceneCode.GDCloud2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud2Reflect"), gdjs.New_32sceneCode.GDCloud2ReflectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.New_32sceneCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlatformReflect"), gdjs.New_32sceneCode.GDPlatformReflectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Reflection"), gdjs.New_32sceneCode.GDReflectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Suelo"), gdjs.New_32sceneCode.GDSueloObjects1);
gdjs.copyArray(runtimeScene.getObjects("SueloReflect"), gdjs.New_32sceneCode.GDSueloReflectObjects1);
gdjs.copyArray(runtimeScene.getObjects("TileWater"), gdjs.New_32sceneCode.GDTileWaterObjects1);
{gdjs.evtsExt__Reflection__Reflect.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDReflectionObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBlockyBubObjects1Objects, 0, 200, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects, 1, "", false, 25, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Reflection__Reflect.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformReflectObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1Objects, 0, 155, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects, 1, "", false, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Reflection__Reflect.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCloud1ReflectObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCloud1Objects1Objects, 0, 155, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects, 1, "", false, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Reflection__Reflect.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCloud2ReflectObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCloud2Objects1Objects, 0, 155, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects, 1, "", false, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Reflection__Reflect.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSueloReflectObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSueloObjects1Objects, 0, 155, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTileWaterObjects1Objects, 1, "", false, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TileWater"), gdjs.New_32sceneCode.GDTileWaterObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDTileWaterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTileWaterObjects1[i].setOpacity(155);
}
}}

}


{


gdjs.New_32sceneCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Cloud1"), gdjs.New_32sceneCode.GDCloud1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud2"), gdjs.New_32sceneCode.GDCloud2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCloud1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCloud1Objects1[i].setX(gdjs.New_32sceneCode.GDCloud1Objects1[i].getX() + (0.1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDCloud2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCloud2Objects1[i].setX(gdjs.New_32sceneCode.GDCloud2Objects1[i].getX() + (0.1));
}
}}

}


{


gdjs.New_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.New_32sceneCode.eventsList2(runtimeScene);
}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDBlockyBubObjects1.length = 0;
gdjs.New_32sceneCode.GDBlockyBubObjects2.length = 0;
gdjs.New_32sceneCode.GDBlockyBubObjects3.length = 0;
gdjs.New_32sceneCode.GDReflectionObjects1.length = 0;
gdjs.New_32sceneCode.GDReflectionObjects2.length = 0;
gdjs.New_32sceneCode.GDReflectionObjects3.length = 0;
gdjs.New_32sceneCode.GDTileWaterObjects1.length = 0;
gdjs.New_32sceneCode.GDTileWaterObjects2.length = 0;
gdjs.New_32sceneCode.GDTileWaterObjects3.length = 0;
gdjs.New_32sceneCode.GDTileGroundObjects1.length = 0;
gdjs.New_32sceneCode.GDTileGroundObjects2.length = 0;
gdjs.New_32sceneCode.GDTileGroundObjects3.length = 0;
gdjs.New_32sceneCode.GDTileGroundReflectObjects1.length = 0;
gdjs.New_32sceneCode.GDTileGroundReflectObjects2.length = 0;
gdjs.New_32sceneCode.GDTileGroundReflectObjects3.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDPlatformReflectObjects1.length = 0;
gdjs.New_32sceneCode.GDPlatformReflectObjects2.length = 0;
gdjs.New_32sceneCode.GDPlatformReflectObjects3.length = 0;
gdjs.New_32sceneCode.GDCloud1Objects1.length = 0;
gdjs.New_32sceneCode.GDCloud1Objects2.length = 0;
gdjs.New_32sceneCode.GDCloud1Objects3.length = 0;
gdjs.New_32sceneCode.GDCloud2Objects1.length = 0;
gdjs.New_32sceneCode.GDCloud2Objects2.length = 0;
gdjs.New_32sceneCode.GDCloud2Objects3.length = 0;
gdjs.New_32sceneCode.GDCloud1ReflectObjects1.length = 0;
gdjs.New_32sceneCode.GDCloud1ReflectObjects2.length = 0;
gdjs.New_32sceneCode.GDCloud1ReflectObjects3.length = 0;
gdjs.New_32sceneCode.GDCloud2ReflectObjects1.length = 0;
gdjs.New_32sceneCode.GDCloud2ReflectObjects2.length = 0;
gdjs.New_32sceneCode.GDCloud2ReflectObjects3.length = 0;
gdjs.New_32sceneCode.GDSueloObjects1.length = 0;
gdjs.New_32sceneCode.GDSueloObjects2.length = 0;
gdjs.New_32sceneCode.GDSueloObjects3.length = 0;
gdjs.New_32sceneCode.GDSueloReflectObjects1.length = 0;
gdjs.New_32sceneCode.GDSueloReflectObjects2.length = 0;
gdjs.New_32sceneCode.GDSueloReflectObjects3.length = 0;

gdjs.New_32sceneCode.eventsList3(runtimeScene);

return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
