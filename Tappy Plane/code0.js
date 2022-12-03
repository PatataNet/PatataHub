gdjs.MenuCode = {};
gdjs.MenuCode.GDLabel_95flappy_95birdObjects1= [];
gdjs.MenuCode.GDLabel_95flappy_95birdObjects2= [];
gdjs.MenuCode.GDLabel_95flappy_95birdObjects3= [];
gdjs.MenuCode.GDFlappy_95birdObjects1= [];
gdjs.MenuCode.GDFlappy_95birdObjects2= [];
gdjs.MenuCode.GDFlappy_95birdObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDRect_95blackObjects1= [];
gdjs.MenuCode.GDRect_95blackObjects2= [];
gdjs.MenuCode.GDRect_95blackObjects3= [];
gdjs.MenuCode.GDStart_95Game_95TextObjects1= [];
gdjs.MenuCode.GDStart_95Game_95TextObjects2= [];
gdjs.MenuCode.GDStart_95Game_95TextObjects3= [];
gdjs.MenuCode.GDGroundObjects1= [];
gdjs.MenuCode.GDGroundObjects2= [];
gdjs.MenuCode.GDGroundObjects3= [];
gdjs.MenuCode.GDBackground_95dayObjects1= [];
gdjs.MenuCode.GDBackground_95dayObjects2= [];
gdjs.MenuCode.GDBackground_95dayObjects3= [];
gdjs.MenuCode.GDytchannelObjects1= [];
gdjs.MenuCode.GDytchannelObjects2= [];
gdjs.MenuCode.GDytchannelObjects3= [];
gdjs.MenuCode.GDPObjects1= [];
gdjs.MenuCode.GDPObjects2= [];
gdjs.MenuCode.GDPObjects3= [];
gdjs.MenuCode.GDLObjects1= [];
gdjs.MenuCode.GDLObjects2= [];
gdjs.MenuCode.GDLObjects3= [];
gdjs.MenuCode.GDAObjects1= [];
gdjs.MenuCode.GDAObjects2= [];
gdjs.MenuCode.GDAObjects3= [];
gdjs.MenuCode.GDNObjects1= [];
gdjs.MenuCode.GDNObjects2= [];
gdjs.MenuCode.GDNObjects3= [];
gdjs.MenuCode.GDEObjects1= [];
gdjs.MenuCode.GDEObjects2= [];
gdjs.MenuCode.GDEObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.MenuCode.GDStartObjects2});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_95blackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start_Game_Text"), gdjs.MenuCode.GDStart_95Game_95TextObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Transition");
}{for(var i = 0, len = gdjs.MenuCode.GDRect_95blackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRect_95blackObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDStart_95Game_95TextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStart_95Game_95TextObjects2[i].setOutline("0;0;0", 2);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9467860);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_95blackObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sfx_swooshing.wav", 1, false, 80, 0.9);
}{for(var i = 0, len = gdjs.MenuCode.GDRect_95blackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRect_95blackObjects2[i].getBehavior("Tween").addObjectOpacityTween("Opacity", 255, "easeInQuad", 1000, false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_95blackObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDRect_95blackObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRect_95blackObjects1[i].getOpacity() >= 255 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDRect_95blackObjects1[k] = gdjs.MenuCode.GDRect_95blackObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRect_95blackObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.MenuCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGroundObjects1[i].setXOffset(gdjs.MenuCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDytchannelObjects1Objects = Hashtable.newFrom({"ytchannel": gdjs.MenuCode.GDytchannelObjects1});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ytchannel"), gdjs.MenuCode.GDytchannelObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDytchannelObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9470764);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q", runtimeScene);
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDLabel_95flappy_95birdObjects1.length = 0;
gdjs.MenuCode.GDLabel_95flappy_95birdObjects2.length = 0;
gdjs.MenuCode.GDLabel_95flappy_95birdObjects3.length = 0;
gdjs.MenuCode.GDFlappy_95birdObjects1.length = 0;
gdjs.MenuCode.GDFlappy_95birdObjects2.length = 0;
gdjs.MenuCode.GDFlappy_95birdObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDRect_95blackObjects1.length = 0;
gdjs.MenuCode.GDRect_95blackObjects2.length = 0;
gdjs.MenuCode.GDRect_95blackObjects3.length = 0;
gdjs.MenuCode.GDStart_95Game_95TextObjects1.length = 0;
gdjs.MenuCode.GDStart_95Game_95TextObjects2.length = 0;
gdjs.MenuCode.GDStart_95Game_95TextObjects3.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects3.length = 0;
gdjs.MenuCode.GDBackground_95dayObjects1.length = 0;
gdjs.MenuCode.GDBackground_95dayObjects2.length = 0;
gdjs.MenuCode.GDBackground_95dayObjects3.length = 0;
gdjs.MenuCode.GDytchannelObjects1.length = 0;
gdjs.MenuCode.GDytchannelObjects2.length = 0;
gdjs.MenuCode.GDytchannelObjects3.length = 0;
gdjs.MenuCode.GDPObjects1.length = 0;
gdjs.MenuCode.GDPObjects2.length = 0;
gdjs.MenuCode.GDPObjects3.length = 0;
gdjs.MenuCode.GDLObjects1.length = 0;
gdjs.MenuCode.GDLObjects2.length = 0;
gdjs.MenuCode.GDLObjects3.length = 0;
gdjs.MenuCode.GDAObjects1.length = 0;
gdjs.MenuCode.GDAObjects2.length = 0;
gdjs.MenuCode.GDAObjects3.length = 0;
gdjs.MenuCode.GDNObjects1.length = 0;
gdjs.MenuCode.GDNObjects2.length = 0;
gdjs.MenuCode.GDNObjects3.length = 0;
gdjs.MenuCode.GDEObjects1.length = 0;
gdjs.MenuCode.GDEObjects2.length = 0;
gdjs.MenuCode.GDEObjects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
